<script lang="ts">
import supabase from '$lib/db'
import { Lightbox } from 'svelte-lightbox'
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { scale, slide } from 'svelte/transition'
import { quadIn, circOut } from 'svelte/easing'
import { reveal } from 'svelte-reveal';
import { Keyboard, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/mousewheel'


</script>

<Swiper
	modules={[ Keyboard, Mousewheel]}
	keyboard={true}
	mousewheel={true}
	loop={true}
	slidesPerView={1}
  direction={"vertical"}
>
<SwiperSlide>
<div class="flexbox-r full imgbox l100">
	<div class="flexbox-c cc-y-col pad-x-40 screen">
		<h3 class="w300 white">
				<span class="orange w500">There is a place.</span><br>
				It lies outside of space and time as we know it,<br>
				but many of us have been there.<br>
				It lies in that cultural mid-space so distant yet ever palpable.
		</h3>
	</div>
</div>
</SwiperSlide>
<SwiperSlide>
	<div class="flexbox-r full s4">
		<div class="in-col im-col cc-y-col cc-x-col wide40">
			<img class="m-top-24 imagesmall" src="/images/scrolls/anc1.webp" alt="part1" use:reveal={{ transition: "slide" }}/>
		</div>
		<div class="in-col cc-y-col pad24 pad24top wide60">
			<h4 class="w400"> 
				Hive mind. Race memory. Blood bond.<br>
				We may call it many things, but we know it best when we see it,<br>
				and it feels warm and familiar…as if a memory we once lived.<br>
				<span class="orange">	Perhaps we did, is it not?</span>
		</h4>
		</div>
	</div>
</SwiperSlide>

<SwiperSlide>
	<div class="flexbox-r full s3">
		<div class="in-col cc-y-col wide60 pad24top pad-x-l">
			<h4 class="w400">
				For countless times before have you been here,<br>
				and a countless times I.<br><br>
				You there, in one incarnation you were a master of mantra.<br>
				You wrapped meaning around syllables and metre.
			</h4>
		</div>
		<div class="in-col im-col cc-y-col cc-x-col wide40">
			<img class="imagesmall" src="/images/scrolls/anc3.webp" alt="part3" use:reveal={{ transition: "slide" }}/>
		</div>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="flexbox-r full s4">
		<div class="in-col im-col cc-y-col cc-x-col wide40">
			<img class="m-top-24 imagesmall" src="/images/scrolls/anc4.webp" alt="part4" use:reveal={{ transition: "slide" }}/>
		</div>
		<div class="in-col cc-y-col pad24 pad24top wide60">
			<h4 class="w400"> 
			And you? A pioneer of tilled grain you were.<br>
			Your hard, seasoned hands fed a civilization.<br>
			Another among us was quite a daredevil,<br>
			boldly he grabbed a wild bull by the horns,<br><br>
			<span class="orange">First to do so...</span>
		</h4>
		</div>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="flexbox-c pad-x-40 box5 full"> 
	<h2 class="orange w400 m-bot-zero">
		We can access this place,
	</h2>
	<h5 class="w300 white wide75">
		outside of space and time though it lies.
		In images and words, in sounds and vistas,
		In streams of imagi/memory that can flow through us…
		<br><br>
		The Scrolls of Āryavarta is a project to celebrate, express and engage in this shared lore- the dhārmika lore.
		A calling to all who dream of the Bhārata that once was, or Bhāratas that could have been.
	</h5>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="flexbox-c cc-y-col pad-x-40 full">
	<div class="mind flexbox-c">
		<p class="orange m-bot-zero">Prologue</p>
		<h5 class="w400 m-all-zero">The Bhārata that Once Was, or Those That Could Have Been</h5>
	</div>
	<div class="mind flexbox-c">
		<p class="orange m-bot-zero">Chapter 1</p>
		<h5 class="w400 m-all-zero">Kaśyapa's Lament</h5>
	</div>
	<div class="mind flexbox-c">
		<p class="orange m-bot-zero">Chapter 2</p>
		<h5 class="w400 m-all-zero">Sūta and Sudā</h5>
	</div>
	<div class="mind flexbox-c">
		<p class="orange m-bot-zero">Upcoming</p>
		<h5 class="w400 m-all-zero">Nasadīya Across Time and Space</h5>
	</div>
	<div class="mind flexbox-c">
		<p class="orange m-bot-zero">Demos</p>
		<h5 class="w400 m-all-zero"><a href="/aryavarta/gallery">Gallery</a></h5>
	</div>
	<div class="mind flexbox-c">
		<p class="orange m-bot-zero">About</p>
		<h5 class="w400 m-all-zero">Tech, AI, Collaboration</h5>
	</div>

	</div>
</SwiperSlide>
</Swiper>



<style lang="sass">

.imgbox
	background-image: url('/images/scrolls/thegrid.webp')

.l10 a
	color: inherit

.l10
	a
		&:hover
			color: #10c56d


@keyframes comedown
	0%
		transform: translateY(-20px) scale(1.2)
	100%
		transform: translateY(0) scale(1.2)


.box5
	background: linear-gradient(40deg,#272727,#1B2023)

	
@media screen and (min-width: 768px)

	.imagesmall
		object-fit: contain
		width: 80%
		height: 80%

	.box5
		justify-content: center


	.mind
		padding: 12px 0
		border-top: 1px solid #e1e1e1

@media screen and (max-width: 767px) 

	.box5
		justify-content: center

	.imagesmall
		object-fit: cover
		width: 100%
		height: 100%

	.im-col
		height: 50%
		padding-top: 56px

	.wide60
		height: max-content
		h4
			margin-top: 0

	.s3
		.wide60
			order: 2
		.wide40
			order: 1

	.mind
		padding: 12px 0
		border-top: 1px solid #e1e1e1

</style>