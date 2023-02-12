<script>
import StandardTwo from '$lib/components/reuse/StandardTwo.svelte'
import Two from '$lib/components/reuse/StandardTwo.svelte'
import Three from '$lib/components/reuse/StandardTwo.svelte'
import Four from '$lib/components/reuse/StandardTwo.svelte'
import { reveal } from 'svelte-reveal';
</script>

<div class="black-beauty" data-scroll-container>
	<div class="imagecontainer-hero"></div>
	<StandardTwo
	--thistime="white"
	>
		<img slot="col-left" src="/images/scrolls/anc1.webp" alt="part1" use:reveal={{ transition: "slide" }}/>
		<h5 data-textify slot="col-right" data-scroll> 
				There is a place.
				It lies outside of space and time as we know it,
				but many of us have been there.
				It lies in that cultural mid-space so distant yet ever palpable.
		</h5>
	</StandardTwo>
	<Two
		--thistime="white"
		>
		<h5 slot="col-left" data-scroll data-scroll-speed="-2">
		Hive mind. Race memory. Blood bond.
				We may call it many things, but we know it best when we see it,
				and it feels warm and familiar…as if a memory we once lived.<br><br>
						<span data-textify class="bigger5 orange">	Perhaps we did, is it not?</span>
		</h5>
		<img slot="col-right" src="/images/scrolls/anc2.webp" alt="part1" use:reveal={{ transition: "slide" }}/>
	</Two>

	<Three
	--thistime="white"
	>
	<img slot="col-left" src="/images/scrolls/anc3.webp" alt="part3" use:reveal={{ transition: "slide" }}/>
	<h5 slot="col-right" data-scroll data-textify>
	For countless times before have you been here,
			and a countless times I.
	You there, in one incarnation you were a master of mantra.
			You wrapped meaning into syllable and metre.
	</h5>
	</Three>

		<Four
		--thistime="white"
		>
		<h5 slot="col-left" data-scroll>
And you? A pioneer of tilled grain you were.
			Your hard, seasoned hands fed a civilization.
			Another among us was quite a daredevil,
			boldly he grabbed a wild bull by the horns,
			First to do so...
		</h5>
		<img slot="col-right" src="/images/scrolls/anc4.webp" alt="part1" use:reveal={{ transition: "slide" }}/>
	</Four>
	

<div class="c-c-c-c box5" data-scroll-section> 
	<h3 class="bigger3 orange" data-scroll data-textify>
		We can access this place,
	</h3>
	<h3 class="bigger3" data-scroll data-textify>
		outside of space and time though it lies.
		In images and words, in sounds and vistas,
		In streams of imagi/memory that can flow through us…
	</h3>
	<h5 class="cutter thin" data-textify data-scroll>
		The Scrolls of Āryavarta is a project to celebrate, express and engage in this shared lore- the dhārmika lore.
		A calling to all who dream of the Bhārata that once was, or Bhāratas that could have been.
	</h5>
</div>
</div>



<style lang="sass">

.black-beauty, .box6
	background: white

h5
	color: #474747

.box2, .box3, .box5
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
	background: white

.cola img, .cold img
	object-fit: cover
	height: 88%
	width: 100%

h4
	font-weight: 300
	line-height: 1.4em

@media screen and (min-width: 900px)

	.l1
		height: 100vh
		padding: 6em 6vw 4em 6vw
		justify-content: center

	.box2, .box3
		align-items: flex-start
		padding-left: 4vw
		padding-right: 4vw
		gap: 2em
		width: 100%

	.box6, .box5
		padding-left: 6vw
		padding-right: 6vw

	.box5
		justify-content: center

	.box6
		align-items: center
		justify-content: center
		text-align: center

	.box6
		padding-left: 6vw
		padding-right: 6vw

	h5
		font-weight: 500
		line-height: 1.4

	.box5 h3
		text-align: left
	
	.box6 h3
		font-weight: 600
		margin-bottom: 1em
		color: #272727

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