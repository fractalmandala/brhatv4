<script>
import supabase from '$lib/db'
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'

export async function getSchools(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('type','school')
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="primecontainer-row">
<div class="pagesheet2">
<h1>The Schools of Thought</h1>
{#await getSchools()}
<small>loading...</small>
{:then data}
<div class="base-row row-x-left" id="navbuttons">
	<div class="swiper-button custom-prev">
  	<img src="/images/socialicons/prevarrow.png" alt="prev" />
	</div>
	<div class="swiper-button custom-next">
  	<img src="/images/socialicons/nextarrow.png" alt="next" />
	</div>
</div>
<Swiper
	modules={[Keyboard, Navigation]}
	keyboard={true}
	centeredSlides={true}
  loop={true}
  slidesPerView={1}
	breakpoints={{
    "640": {
      slidesPerView: 1,
      spaceBetween: 64,
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
		<h5>{item.name}</h5>
		<pre>{item.content}</pre>
	</div>
</SwiperSlide>
{/each}
</Swiper>
{:catch error}
<pre>{error}</pre>
{/await}
</div>
</div>

<style>
.base-col { align-self: flex-start; padding-right: 16px; padding-left: 16px;}
</style>


