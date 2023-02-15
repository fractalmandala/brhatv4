<script>
import StandardTwo from '$lib/components/reuse/StandardTwo.svelte'
import Two from '$lib/components/reuse/StandardTwo.svelte'
import Three from '$lib/components/reuse/StandardTwo.svelte'
import Four from '$lib/components/reuse/StandardTwo.svelte'
import { reveal } from 'svelte-reveal';

</script>

<div class="b-box">
	<div class="r-r-r-r accox">
		<img src="/images/scrolls/panelim2.webp" />
		<img src="/images/scrolls/anc2.webp" />
		<img src="/images/scrolls/scrollsmap.webp" />
	</div>
	<StandardTwo
	--thistime="white"
	>
		<img slot="col-left" src="/images/scrolls/anc1.webp" alt="part1" use:reveal={{ transition: "slide" }}/>
		<h5 class="blackb" slot="col-right"> 
				There is a place.
				It lies outside of space and time as we know it,
				but many of us have been there.
				It lies in that cultural mid-space so distant yet ever palpable.
		</h5>
	</StandardTwo>
	<Two
		>
		<h5 class="white" slot="col-left">
		Hive mind. Race memory. Blood bond.
				We may call it many things, but we know it best when we see it,
				and it feels warm and familiar…as if a memory we once lived.<br><br>
						<span class="bigger5 orange">	Perhaps we did, is it not?</span>
		</h5>
		<img slot="col-right" src="/images/scrolls/anc2.webp" alt="part1" use:reveal={{ transition: "slide" }}/>
	</Two>

	<Three
	>
	<img slot="col-left" src="/images/scrolls/anc3.webp" alt="part3" use:reveal={{ transition: "slide" }}/>
	<h5 slot="col-right">
	For countless times before have you been here,
			and a countless times I.
	You there, in one incarnation you were a master of mantra.
			You wrapped meaning into syllable and metre.
	</h5>
	</Three>

		<Four
		>
		<h5 slot="col-left">
And you? A pioneer of tilled grain you were.
			Your hard, seasoned hands fed a civilization.
			Another among us was quite a daredevil,
			boldly he grabbed a wild bull by the horns,
			First to do so...
		</h5>
		<img slot="col-right" src="/images/scrolls/anc4.webp" alt="part1" use:reveal={{ transition: "slide" }}/>
	</Four>
<div class="c-c-c-c box5"> 
	<h3 class="bigger3 orange">
		We can access this place,
	</h3>
	<h3 class="bigger3">
		outside of space and time though it lies.
		In images and words, in sounds and vistas,
		In streams of imagi/memory that can flow through us…
	</h3>
	<h5 class="cutter thin">
		The Scrolls of Āryavarta is a project to celebrate, express and engage in this shared lore- the dhārmika lore.
		A calling to all who dream of the Bhārata that once was, or Bhāratas that could have been.
	</h5>
</div>
</div>



<style lang="sass">

.record
	position: fixed
	z-index: 900
	top: 200px
	left: 100px

.b-box
	background: linear-gradient(40deg,#272727,#1B2023)
	h5, h3, p
		font-family: 'Frank Ruhl Libre', serif
		font-weight: 400
	.black-b
		color: #272727
		font-weight: 400

.box6
	background: linear-gradient(40deg,#272727,#1B2023)

.box2, .box3, .box5
	background: linear-gradient(40deg,#272727,#1B2023)

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

.cola img, .cold img
	object-fit: cover
	height: 88%
	width: 100%

h4
	font-weight: 300
	line-height: 1.4em

.accox img
	object-fit: cover

@media screen and (min-width: 900px)

	.accox img
		width: 33.3%
		border: 2px solid white

	.accox
		height: 100vh
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