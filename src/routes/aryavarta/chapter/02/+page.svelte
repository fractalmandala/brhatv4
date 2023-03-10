<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'
export let data = {}
$: dataArray = data.data || []
</script>

<Swiper
	modules={[Keyboard, Navigation]}
	keyboard={true}
	loop={true}
	slidesPerView={1}
	breakpoints={{
	"576": {
	  slidesPerView: 1,
	  spaceBetween: 32,
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
{#each dataArray as item}
<SwiperSlide>
<div class="scrollsbox">
  <div class="scenetext">
		<h5 class="orange">{item.id}</h5>
		<pre>{item.text}</pre>
	</div>
  <div class="sceneimage">
		<img src={item.image} alt={item.id} />
	</div>
</div>
</SwiperSlide>
{/each}
</Swiper>
<div class="boxr navbuttons">
	<div class="boxc custom-prev">
		<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path id="chevprev" d="M24.4902 0.587402C11.2902 0.587402 0.490234 11.3874 0.490234 24.5874C0.490234 37.7874 11.2902 48.5874 24.4902 48.5874C37.6902 48.5874 48.4902 37.7874 48.4902 24.5874C48.4902 11.3874 37.6902 0.587402 24.4902 0.587402ZM32.8902 35.3874L28.6902 39.5874L13.6902 24.5874L28.6902 9.5874L32.8902 13.7874L22.0902 24.5874L32.8902 35.3874Z" fill="#676767"/>
		</svg>
	</div>
	<div class="boxc custom-next">
		<svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path id="chevnext" d="M24 48C37.2 48 48 37.2 48 24C48 10.8 37.2 -4.72083e-07 24 -1.04907e-06C10.8 -1.62606e-06 -4.72083e-07 10.8 -1.04907e-06 24C-1.62606e-06 37.2 10.8 48 24 48ZM15.6 13.2L19.8 9L34.8 24L19.8 39L15.6 34.8L26.4 24L15.6 13.2Z" fill="#676767"/>
		</svg>
	</div>
	<div class="boxc custom-text"><small>you can also use your keyboard or drag/swipe<br> to move between panels</small></div>
</div>


<style lang="sass">

.scenetext p
	color: #272727

.scrollsbox 
	display: grid 
	grid-template-columns: 0.8fr 1.2fr 
	grid-template-rows: auto 
	gap: 0px 40px 
	grid-auto-flow: row 
	grid-template-areas: "scenetext sceneimage" 
	height: 100vh
	padding: 0 32px
.scenetext 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto 
	gap: 0px 0px 
	grid-auto-flow: row 
	align-content: start
	grid-template-areas: "." 
	grid-area: scenetext 
.sceneimage 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." 
	grid-area: sceneimage 
	align-items: center

@media screen and (max-width: 767px)
	.scrollsbox
		grid-template-columns: 1fr 
		grid-template-rows: auto auto
		gap: 12px 0px 
		grid-auto-flow: row 
		grid-template-areas: "sceneimage" "scenetext" 
		height: 100%
		padding: 64px 32px
	.scenetext
		padding-top: 0px
		height: 100%
		padding-bottom: 60px
		align-content: start
		align-items: start
		justify-content: start
		justify-items: start
		h5
			margin: 0 0 12px 0
	.sceneimage
		padding-top: 0
		height: 40vh
	.sceneimage img
		object-fit: cover
		height: 40vh
		width: 100%
	.navbuttons
		display: none
	.scenetext h5
		margin-top: 0
		

@media screen and (min-width: 768px)
	.sceneimage img
		object-fit: cover
		height: 70%
		width: 100%
	.scenetext
		padding-top: 120px
	.navbuttons
		align-items: center
		height: 32px
		.boxc svg
			height: 28px
			width: 28px
			object-fit: contain
			transform-origin: center center
			&:hover
				transform: scale(1.2)
				path
					fill: #ff3d00
		position: absolute
		bottom: 128px
		left: 32px
		gap: 24px
		z-index: 100
		.custom-text small
			font-size: 12px
			color: #878787
			margin: 0


</style>
