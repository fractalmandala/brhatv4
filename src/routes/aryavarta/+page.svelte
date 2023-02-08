<script lang="ts">
import { onMount } from 'svelte'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
import LocomotiveScroll from 'locomotive-scroll';
import '$lib/styles/locomotive-scroll.css'

onMount(() => {
	if (typeof window !== 'undefined') {
	const scroll = new LocomotiveScroll({
  	el: document.querySelector('[data-scroll-container]') as HTMLElement,
  	smooth: true,
		reloadOnContextChange: true
	});
}
})

</script>

<div class="data-scroll-container" data-scroll-container>
	<div class="imagecontainer-hero" data-scroll-section></div>
	<div class="r-r-r-r box2" data-scroll-section>
		<div class="c-c-c-c cola">
    	<img data-scroll data-scroll-speed="3" data-scroll-direction="horizontal" class="ini-img" src="/images/scrolls/anc1.webp" alt="part1"/>
		</div>
		<div class="c-c-c-c colb">
			<h4 data-scroll data-scroll-speed="6">
				There is a place.<br>
				It lies outside of space and time as we know it,<br>
				but many of us have been there.<br>
				It lies in that cultural mid-space so distant <span class="colorange">yet ever palpable.</span>
			</h4>
		</div>
	</div>
	<div class="r-r-r-r box3" data-scroll-section>
		<div class="c-c-c-c colc">
			<h4 data-scroll data-scroll-speed="6">
				Hive mind. Race memory. Blood bond.<br>
				We may call it many things, but we know it best when we see it,<br>
				and it feels warm and familiar…as if a memory we once lived.<br>
				<span class="colorange">Perhaps we did, is it not?</span>
			</h4>
		</div>
		<div class="c-c-c-c cold">
			<img src="/images/scrolls/anc2.webp" alt="part2" data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal" class="ini-img"/>
		</div>
	</div>
<div class="r-r-r-r box2" data-scroll-section>
	<div class="c-c-c-c cola">
    <img data-scroll data-scroll-speed="3" data-scroll-direction="horizontal" class="ini-img" src="/images/scrolls/anc3.webp" alt="part3"/>
	</div>
	<div class="c-c-c-c colb">
		<h4 data-scroll data-scroll-speed="6">
			<span class="colorange">For countless times before have you been here,</span><br>
			and a countless times I.<br>
			You there, in one incarnation you were a master of mantra.<br>
			You wrapped meaning into syllable and metre.
		</h4>
	</div>
</div>
<div class="r-r-r-r box3" data-scroll-section>
	<div class="c-c-c-c colc">
		<h4 data-scroll data-scroll-speed="6">			
			And you? A pioneer of tilled grain you were.<br>
			Your hard, seasoned hands fed a civilization.<br>
			Another among us was quite a daredevil,<br>
			boldly he grabbed a wild bull by the horns,<br>
			<span class="colorange">First to do so...</span>
		</h4>
	</div>
	<div class="c-c-c-c cold">
		<img src="/images/scrolls/anc4.webp" data-scroll-direction="horizontal" alt="part4" data-scroll data-scroll-speed="-3" class="ini-img"/>
	</div>
</div>
<div class="c-c-c-c box5" data-scroll-section>
	<h4 data-scroll data-scroll-speed="6">
		<span class="colorange">We can access this place,</span><br>
		outside of space and time though it lies.<br>
		In images and words, in sounds and vistas,<br>
		In streams of imagi/memory that can flow through us…
	</h4>
</div>
<div class="c-c-c-c box6" data-scroll-section id="tostick">
	<h3 data-scroll data-scroll-speed="2">
		The Scrolls of Āryavarta is a project to celebrate, express and engage in this shared lore- <span class="colorange"> the dhārmika lore.</span> A calling to all who dream of the Bhārata that once was, or Bhāratas that could have been.
	</h3>
	<div class="r-r-r-r buttonsbox" data-scroll data-scroll-speed="1">
		<button><a href="/aryavarta/chapter/01">1 - Kaśyapa's Lament</a></button>
		<button><a href="/aryavarta/chapter/02">2 - Sūta and Sudā</a></button>
		<button><a href="/aryavarta/gallery">Gallery</a></button>
		<button><a href="/aryavarta/getinvolved">Get Involved</a></button>
	</div>
</div>
<Footer></Footer>
</div>



<style lang="sass">
.black-beauty
	background: var(--beau)

.box2, .box3, .box5, .box6
	background: none

.buttonsbox button
	background-color: #ff3d00
	border: none
	color: white
	padding: 0.6em 2em
	transform-origin: center center
	transition: all 0.14s var(--cube2)

button:hover
	transform: scale(0.9)

button a
	color: white
	font-size: 15px
	font-weight: 400

.box2, .box3, .box5, .box6
	height: 100vh
	z-index: 2

.imagecontainer-hero
	background-image: url('/images/scrolls/scrollsmap.webp')
	background-position: center -400px

.box5
	background-image: url('/images/scrolls/access.webp')
	background-position: center center
	background-size: cover
	background-repeat: no-repeat

.cola img, .cold img
	object-fit: cover
	height: 88%
	width: 100%

h4
	color: white

@media screen and (min-width: 900px)

	.box2, .box3
		align-items: flex-start
		padding-left: 4vw
		padding-right: 4vw
		gap: 2em
		width: 100%

	.box6
		padding-left: 4vw
		padding-right: 4vw

	.box5, .box6
		align-items: center
		justify-content: center
		text-align: center
	
	.box5 h4
		color: white
		background: rgba(0,0,0,0.7)
		padding: 2em

	.cola, .colb, .colc, .cold
		width: 50%
		height: 100%


	.colb p, .colc p
		font-size: 20px
		line-height: 1.44em

	.colb, .colc
		justify-content: center

	.cola, .cold
		justify-content: flex-end

	.buttonsbox
		gap: 2em
		padding-top: 1em

</style>