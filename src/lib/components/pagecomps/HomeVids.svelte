<script>
import supabase from '$lib/db'
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'

  async function Videos() {
    const { data, error } = await supabase
    .from('brhat-youtube')
    .select()
    .order('id',{ascending: false})
    .limit(6)
    if (error) throw new Error(error.message)
    return data
  }

</script>


{#await Videos()}
<small>loading...</small>
{:then data}
<Swiper
	modules={[Keyboard, Navigation]}
	keyboard={true}
  loop={true}
  slidesPerView={1}
	breakpoints={{
    "576": {
      slidesPerView: 1,
      spaceBetween: 24,
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
<div class="imagecontainer-hero" style="background-image: url({item.image})">
	<iframe
  	class="m-1"
  	width=100%
  	height=100%
  	src="https://www.youtube.com/embed/{item.videoid}"
  	title={item.name}
  	></iframe>
		<div class="base-row row-x-left" id="navbuttons">
			<div class="swiper-button custom-prev">
  			<img src="/images/icons/prevwhite.png" alt="prev" />
			</div>
			<div class="swiper-button custom-next">
  			<img src="/images/icons/nextwhite.png" alt="next" />
			</div>
		</div>

</div>
</SwiperSlide>
{/each}
</Swiper>
{:catch error}
<pre>{error}</pre>
{/await}

<style>
	
#navbuttons { position: absolute; z-index: 400; }

	small { color: white;}

	@media screen and (min-width: 900px) {
		#navbuttons { right: 0; bottom: 128px; width: 12%; padding: 8px 0 8px 8px; background-color: rgba(0,0,0,0.6); border-radius: 32px 0 0 32px;}
	}

@media screen and (max-width: 899px) and (min-width: 768px) {
	#navbuttons { right: 0; bottom: 128px; width: 20%; gap: 16px; padding: 8px 0 8px 8px; background-color: rgba(0,0,0,0.6); border-radius: 32px 0 0 32px;}
}	

@media screen and (max-width: 769px) and (min-width: 576px) {
	#navbuttons { right: 0; bottom: 128px; width: 20%; gap: 16px; padding: 8px 0 8px 8px; background-color: rgba(0,0,0,0.6); border-radius: 32px 0 0 32px;}
}

@media screen and (max-width: 575px) {
	#navbuttons { right: 0; bottom: 64px; width: 30%; gap: 16px; padding: 8px 0 8px 8px; background-color: rgba(0,0,0,0.8); border-radius: 32px 0 0 32px;}
}
</style>