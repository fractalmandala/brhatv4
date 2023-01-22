<script>
import supabase from '$lib/db'
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'

export async function chamba(){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','temple')
	.eq('chapter','chamba')
	if (error) throw new Error(error.message)
	return data
}

</script>

{#await chamba()}
<small>loading...</small>
{:then data}
<div class="blog-pad">
<h1>Temples of Chamba</h1>
<Swiper
	modules={[Keyboard, Navigation]}
	keyboard={true}
  loop={true}
  slidesPerView={1}
	breakpoints={{
    "640": {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    "768": {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    "1024": {
      slidesPerView: 1,
      spaceBetween: 32,
    },
  }}
	navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
	on:slideChange={() => console.log('slide change')}
>
{#each data as item}
<SwiperSlide>
	<div class="base-col">
		<div class="imagecontainer" style="background-image: url({item.image})">
		</div>
		<h5>{item.name}</h5>
		<p>{item.content}</p>
	</div>
</SwiperSlide>
{/each}
</Swiper>
<div class="base-row row-x-cent" id="navbuttons">
	<div class="swiper-button custom-prev">
  	<img src="/images/socialicons/prevarrow.png" alt="prev" />
	</div>
	<div class="swiper-button custom-next">
  	<img src="/images/socialicons/nextarrow.png" alt="next" />
	</div>
</div>
</div>
{:catch error}
<pre>{error}</pre>
{/await}

<style>
@media screen and (min-width: 900px) {
	.imagecontainer { width: 100%; height: 400px; background-size: cover; background-position: center center; }
	#navbuttons { margin-top: -2.8rem; z-index: 2;}
}
</style>


