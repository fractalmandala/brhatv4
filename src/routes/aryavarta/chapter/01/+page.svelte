<script>
import supabase from '$lib/db'
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'
import 'swiper/css/mousewheel'
export async function chapter(){
	const { data, error } = await supabase
	.from('soaChapter1')
	.select()
	.order('id')
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="c-c-c-c big-box">
{#await chapter()}
<small>...</small>
{:then data}
<Swiper
	modules={[Keyboard, Navigation, Mousewheel]}
	keyboard={true}
  loop={true}
	mousewheel={true}
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
<div class="r-r-r-r image-box">
	<img src={item.image} alt={item.id} />
	<div class="c-c-c-c text-box">
		<small>{item.id}</small>
		<p>{item.text}</p>
	</div>
</div>
</SwiperSlide>
{/each}
</Swiper>
<div class="r-r-r-r nav-row">
	<div class="custom-prev"><img src="/images/icons/prevgrey.png" alt="previous"></div>
	<div class="custom-next"><img src="/images/icons/nextgrey.png" alt="next"></div>
</div>
{:catch error}
<pre>{error}</pre>
{/await}
</div>

<style lang="sass">

.image-box img
	object-fit: contain
	height: 100vh

.nav-row 
	z-index: 200
	margin-top: -4em

.custom-prev img, .custom-next img
	object-fit: contain
	width: 30px
	height: 30px
	cursor: pointer
	transform-origin: center center
	transition: all 0.12s var(--cube4)

.custom-prev:hover img, .custom-next:hover img
	transform: scale(0.9)
	

@media screen and (min-width: 900px)
	.big-box
		width: 100vw
		height: 100vh
		padding: 0
		margin: 0

	.text-box
		padding: 8em 2em 0 2em
		background-color: transparent

	.text-box p
		font-size: 1.12em
		line-height: 1.44em

	.text-box small
		font-size: 12px
		color: #fe4a49
		font-weight: bold

	.nav-row
		width: 100%
		position: relative
		gap: 2em

	.custom-next
		position: absolute
		right: 2em

	.custom-prev
		position: absolute
		right: 5em

</style>