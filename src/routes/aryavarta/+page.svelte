<script lang="ts">
import supabase from '$lib/db'
import { Lightbox } from 'svelte-lightbox'
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { scale } from 'svelte/transition'
import { quadIn, circOut } from 'svelte/easing'
import { reveal } from 'svelte-reveal';
import { Keyboard, Mousewheel } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/mousewheel'
import StandardTwo from '$lib/components/reuse/StandardTwo.svelte'
import ImagesGrid from '$lib/components/pagecomps/ImagesGrid.svelte'
import Two from '$lib/components/reuse/StandardTwo.svelte'
import Three from '$lib/components/reuse/StandardTwo.svelte'
import Four from '$lib/components/reuse/StandardTwo.svelte'


let isLine1 = false
let isLine2 = false
let isLine3 = false
let isLine4 = false
let isLine5 = false
let isLine6 = false

function toggleLine1(){
	isLine1 = !isLine1
}
function toggleLine2(){
	isLine2 = !isLine2
}
function toggleLine3(){
	isLine3 = !isLine3
}
function toggleLine4(){
	isLine4 = !isLine4
}
function toggleLine5(){
	isLine5 = !isLine5
}
function toggleLine6(){
	isLine6 = !isLine6
}

async function getImages(){
	const { data, error } = await supabase
	.from('MidjourneyImages')
	.select()
	.order('id',{ascending: false})
	.limit(96)
	if (error) throw new Error(error.message)
	return data
}

</script>

<Swiper
	modules={[ Keyboard, Mousewheel]}
	keyboard={true}
	mousewheel={true}
	loop={true}
	slidesPerView={1}
>
<SwiperSlide>
<div class="r-r-r-r l100">
	{#await getImages()}
<small>...</small>
{:then data}

	{#each data as item}
	<div class="c-c-c-c" id="item-{item.id}">
	<Lightbox>
		<img src={item.link} alt={item.id} />
	</Lightbox>
	</div>
	{/each}

{:catch error}
<pre>{error}</pre>
{/await}
</div>
</SwiperSlide>
<SwiperSlide>
	<div class="row-of-2 l00">
		<div class="twobox img-col col-left">
			<img src="/images/scrolls/anc1.webp" alt="part1" use:reveal={{ transition: "slide" }}/>
		</div>
		<div class="twobox col-right">
			<h3 class="animated-element blackb padit"> 
				There is a place.
				It lies outside of space and time as we know it,
				but many of us have been there.
				It lies in that cultural mid-space so distant yet ever palpable.
		</h3>
		</div>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="row-of-2 l01">
		<div class="twobox col-left">
			<h3 class="animated-element blackb padit"> 
	Hive mind. Race memory. Blood bond.
				We may call it many things, but we know it best when we see it,
				and it feels warm and familiar…as if a memory we once lived.<br><br>
						<span class="bigger5 orange">	Perhaps we did, is it not?</span>
		</h3>
		</div>
		<div class="twobox col-right">
			<img id="imgtwo" class="imgcol" src="/images/scrolls/anc2.webp" alt="part1" use:reveal={{ transition: "slide" }}/>
		</div>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="row-of-2 l03">
	<div class="twobox col-left">
		<img class="imgcol" src="/images/scrolls/anc3.webp" alt="part3" use:reveal={{ transition: "slide" }}/>
		</div>
	<div class="twobox col-right">
			<h3 class="padit">
	For countless times before have you been here,
			and a countless times I.
	You there, in one incarnation you were a master of mantra.
			You wrapped meaning around syllables and metre.
	</div>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="row-of-2 l05">
		<div class="col-left twobox">
						<h3 class="padit">
			And you? A pioneer of tilled grain you were.
			Your hard, seasoned hands fed a civilization.
			Another among us was quite a daredevil,
			boldly he grabbed a wild bull by the horns,
			First to do so...
		</div>
	<div class="col-right twobox">
		<img class="imgcol" src="/images/scrolls/anc4.webp" alt="part1" use:reveal={{ transition: "slide" }}/>
	</div>
	</div>

</SwiperSlide>
<SwiperSlide>
	<div class="c-c-c-c box5"> 
	<h5 class="orange">
		We can access this place,
	</h5>
	<h5>
		outside of space and time though it lies.
		In images and words, in sounds and vistas,
		In streams of imagi/memory that can flow through us…
	</h5>
	<h3 class="bigger5">
		The Scrolls of Āryavarta is a project to celebrate, express and engage in this shared lore- the dhārmika lore.
		A calling to all who dream of the Bhārata that once was, or Bhāratas that could have been.
	</h3>
	</div>
</SwiperSlide>
<SwiperSlide>
	<div class="c-c-c-c l10">
	<div class="mind c-c-c-c" on:mouseenter={toggleLine1} on:mouseleave={toggleLine1}>
		<p class="orange">Prologue</p>
		<h3>The Bhārata that Once Was, or Those That Could Have Been</h3>
	</div>
	<div class="mind c-c-c-c" on:mouseenter={toggleLine2} on:mouseleave={toggleLine2}>
		<p class="orange">Chapter 1</p>
		<h3>Kaśyapa's Lament</h3>
	</div>
	<div class="mind c-c-c-c" on:mouseenter={toggleLine3} on:mouseleave={toggleLine3}>
		<p class="orange">Chapter 2</p>
		<h3>Sūta and Sudā</h3>
	</div>
	<div class="mind c-c-c-c" on:mouseenter={toggleLine4} on:mouseleave={toggleLine4}>
		<p class="orange">Upcoming</p>
		<h3>Nasadīya Across Time and Space</h3>
	</div>
	<div class="mind c-c-c-c" on:mouseenter={toggleLine5} on:mouseleave={toggleLine5}>
		<p class="orange">Demos</p>
		<h3>Gallery</h3>
	</div>
	<div class="mind c-c-c-c" on:mouseenter={toggleLine6} on:mouseleave={toggleLine6}>
		<p class="orange">About</p>
		<h3>Tech, AI, Collaboration</h3>
	</div>
	{#if isLine1}
	<img class="images" src="/images/scrolls/scrollsmap.webp" alt="im1" in:scale="{{ delay: 200, opacity: 0, duration: 700, start: 0, easing: circOut}}" out:scale="{{ duration: 100, delay: 0, start: 0, opacity: 0, easing: quadIn}}" />
	{/if}
	{#if isLine2}
	<img class="images" src="/images/scrolls/chap1.webp" alt="im1" in:scale="{{ delay: 200, opacity: 0.5, duration: 300, start: 0.5, easing: circOut}}" out:scale="{{ duration: 100, delay: 0, start: 0, opacity: 0, easing: quadIn}}"/>
	{/if}
	{#if isLine3}
	<img class="images" src="/images/scrolls/chap2.webp" alt="im1" in:scale="{{ delay: 200, opacity: 0.5, duration: 400, start: 0.5, easing: circOut}}" out:scale="{{ duration: 100, delay: 0, start: 0, opacity: 0, easing: quadIn}}"/>
	{/if}
	{#if isLine4}
	<img class="images" src="/images/scrolls/nas.webp" alt="im1" in:scale="{{ delay: 200, opacity: 0.5, duration: 800, start: 0.5, easing: circOut}}" out:scale="{{ duration: 100, delay: 0, start: 0, opacity: 0, easing: quadIn}}"/>
	{/if}
	{#if isLine5}
	<img class="images" src="/images/scrolls/chap5.webp" alt="im1" in:scale="{{ delay: 200, opacity: 0.5, duration: 300, start: 0.5, easing: circOut}}" out:scale="{{ duration: 100, delay: 0, start: 0, opacity: 0, easing: quadIn}}"/>
	{/if}
	{#if isLine6}
	<img class="images" src="/images/scrolls/chap6.webp" alt="im1" in:scale="{{ delay: 200, opacity: 0.5, duration: 300, start: 0.5, easing: circOut}}" out:scale="{{ duration: 100, delay: 0, start: 0, opacity: 0, easing: quadIn}}"/>
	{/if}
	</div>
</SwiperSlide>
</Swiper>



<style lang="sass">


.l100
	.c-c-c-c
		img
			object-fit: cover
			height: 100%

.l100
	.c-c-c-c
		transform-origin: center center
		transition: transform 0.23s var(--cube2)
		border: 1px solid white
		justify-content: center
		overflow: hidden

.l100
	.c-c-c-c
		&:hover
			transform: scale(1.2) translateY(-20px)
			animation: comedown 0.3s var(--cube5) 0.23s forwards

@keyframes comedown
	0%
		transform: translateY(-20px) scale(1.2)
	100%
		transform: translateY(0) scale(1.2)

.black-b
	font-weight: 400
	color: #272727

.box5
	background: linear-gradient(40deg,#272727,#1B2023)

.box5 h3
	color: white
	margin-top: 24px

h4
	font-weight: 300
	line-height: 1.4em

.padit
	position: relative
	color: #272727
	
.box5
	.bigger3, .cutter
		color: white
	.orange
		color: #ff3d00
	

@media screen and (min-width: 768px)

	.l00, .l03
		.col-right
			width: 50%
			height: 100%
			justify-content: center
		.col-left
			width: 50%
			height: 100%
			justify-content: center
			img
				object-fit: cover
				height: 100%

	.l01, .l05
		.col-left
			width: 50%
			height: 100%
			justify-content: center
		.col-right
			width: 50%
			height: 100%
			justify-content: center
			img
				object-fit: cover
				height: 100%

	.box5
		justify-content: center
		padding: 0 6vw

	.box5 h3
		text-align: left

	.padit
		padding: 0 32px
		background: white
		width: 100%
		z-index: 2

	.l10
		width: 100vw
		height: 100vh
		justify-content: center
		padding-left: 6vw
		padding-top: 32px
		background: white

	.mind
		width: 88vw
		background: transparent
		text-align: left
		padding-top: 16px
		padding-left: 0
		p
			font-size: 14px
			margin-bottom: 8px
		h3
			margin-bottom: 0
			border-top: 1px solid #474747
			padding-top: 16px
			cursor: pointer

	.l10
		position: relative
		z-index: 0
		h3
			z-index: 4
		.images
			z-index: 1

	.images
		position: absolute
		top: 120px
		right: 120px
		object-fit: cover
		height: 80%
		width: 400px

	.l100
		height: 100vh
		width: 100vw
		flex-wrap: wrap
		.c-c-c-c
			width: calc(100%/12)
			height: calc(100%/8)

@media screen and (max-width: 767px) 

	.l00, .l03
		.col-right
			width: 100%
			height: 50%
			justify-content: center
			order: 2
		.col-left
			width: 100%
			height: 50%
			justify-content: center
			align-items: center
			order: 1
			img
				object-fit: cover
				height: 50vh
				width: 88%

	.l01, .l05
		.col-left
			width: 100%
			height: 50%
			justify-content: center
			order: 2
		.col-right
			width: 100%
			height: 50%
			justify-content: center
			align-items: center
			order: 1
			img
				object-fit: cover
				height: 50vh
				width: 88%

	.box5
		justify-content: center
		padding: 0 6vw
		height: 100vh

	.box5 h3
		text-align: left

	.padit
		padding: 0 8px
		background: white
		width: 100%
		z-index: 2

	.l10
		width: 100vw
		height: 100vh
		justify-content: center
		padding-left: 6vw
		padding-top: 48px
		background: white

	.mind
		width: 100%
		background: transparent
		text-align: left
		padding-top: 0
		padding-left: 0
		p
			font-size: 14px
			margin-bottom: 8px
		h3
			margin-bottom: 16px
			border-top: 1px solid #474747
			padding-top: 8px
			cursor: pointer

	.l10
		position: relative
		z-index: 0
		h3
			z-index: 4
		.images
			z-index: 1

	.images
		display: none
		position: absolute
		top: 120px
		right: 120px
		object-fit: cover
		height: 80%
		width: 400px

	.l100
		height: 100vh
		width: 100vw
		flex-wrap: wrap
		.c-c-c-c
			width: 16.6%
			height: 6.25%

</style>