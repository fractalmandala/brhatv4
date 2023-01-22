<script>
 import supabase from '$lib/db'
 import Container from '$lib/components/reuse/Container.svelte'
 import BoxHeader from '$lib/components/reuse/BoxHeader.svelte'
 import EffectBox from '$lib/components/reuse/EffectBox.svelte'
 import PostCard from '$lib/components/reuse/Postcard.svelte'
 import SwiperPrev from '$lib/components/reuse/SwiperPrev.svelte'
 import SwiperNext from '$lib/components/reuse/SwiperNext.svelte'
 import { Swiper, SwiperSlide } from 'swiper/svelte'
 import { Keyboard, Navigation } from 'swiper';
 import 'swiper/css' 
 import 'swiper/css/keyboard'
 import 'swiper/css/navigation';

 async function PostsRecent() {
  const { data, error } = await supabase
  .from('brhat-dhiti')
  .select()
  .order('sequence', {ascending: false})
  .limit(9)
  if (error) throw new Error(error.message)
  return data
  }
 
</script>

<Container --align="center">
 <BoxHeader><h1>Latest on Dhīti</h1></BoxHeader>
 {#await PostsRecent()}
 <small>Loading...</small>
 {:then data}
  <EffectBox>
    <Swiper
    modules={[Keyboard, Navigation]} 
keyboard={true}
spaceBetween={16}
loop={true}
autoHeight={true}
slidePerView={1}
breakpoints={{
 "576": {
   slidesPerView: 2,
   spaceBetween: 16,
 },
 "768": {
   slidesPerView: 3,
   spaceBetween: 20,
 },
 "900": {
   slidesPerView: 3,
   spaceBetween: 24,
 },
}}
navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
on:slideChange={() => console.log('slide change')}
>
    {#each data as item}
    <SwiperSlide>
     <PostCard --cardwidth="100%">
      <small class="sticker mb05" slot="meta">{item.category}</small>
      <img src={item.image} alt={item.id} />
      <h5><a href={item.link}>{item.title}</a></h5>
      <p>{item.excerpt.slice(0,250)}...<br>
      <a class="readmore" href={item.link}>Read More</a>
      </p>
      <div class="rowcol" slot="lowmeta">
       <small>{item.author}</small>
       <small class="mini">{item.tags}</small>
      </div>
     </PostCard>
    </SwiperSlide>
    {/each}
</Swiper>
<div class="navigationrow pt05">
	<div class="custom-prev">
	 <SwiperPrev></SwiperPrev>
 </div>
 <div class="custom-next">
	 <SwiperNext></SwiperNext>
 </div>
 </div>
  </EffectBox>
  {:catch error}
  <pre>{error}</pre>
  {/await}
</Container>

<style>
	p { color: var(--mute); }
  img {
    object-fit: contain;
    width: 100%;
  }

	.sticker { text-transform: uppercase; font-size: 10px; background-color: var(--blue); color: white; text-align: right; letter-spacing: 1px;}
	small { text-transform: capitalize; }
 .navigationrow {
  display: flex;
  flex-direction: row;
	background-color: transparent;
  gap: 32px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
}
</style>