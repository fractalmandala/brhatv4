<script lang="ts">
import LogoRiDCurr from '$lib/components/logos/LogoRiDCurr.svelte'
import '$lib/styles/anim-rid.css';



</script>

<div class="boxr l0 back-image">
	<div class="boxc screen">
		<LogoRiDCurr></LogoRiDCurr>	
	</div>
</div>	



<div class="pad-a">

	<div class="container1 section-pads">
  	<div class="bodyarea1">
			<h2 class="green">Design thinking is coming full circle.</h2>
			<p class="wide75">
				Having traversed systems, integrated, business-centric and other approaches, it converges towards human-centric, modular and circular. IDEO, steward of design thinking, talks of emergent design paradigms being human-centric, fractal and circular. UK’s Design Council speaks of ‘designing for the planet’, but its concerns are just the same- sustainability, reusability, harmony. The Conscilience Project sees us currently in the phase of values-agnostic design, dominated by the view that technology is only what we make of it, and the values that drive such making derive from elsewhere.
			</p>
			<h6>
				<b>Of these, the last has brought us to the brink of disaster.</b> 
			</h6>
			<p class="grey">
				Our steadfast pretense that design can be values-agnostic is laid bare when we learn that artificially intelligent software tends to inherit the biases and prejudices of its programmers. Human creation is bringing the ruin of life, species and planet. Introspection and a radical recalibration are our only chance of reversing the situtation.
			</p>
		</div>
	</div>
	<div class="container4">
  	<div class="imagehold1 imger">
			<img src="/images/rid/icon1.webp" alt="a set of icons" />
		</div>
  	<div class="imagehold2 imger">
			<img src="/images/rid/icon2.webp" alt="a set of icons" />
		</div>
  	<div class="imagehold3 imger">
			<img src="/images/rid/icon3.webp" alt="a set of icons" />
		</div>
  	<div class="imagehold4 imger">
			<img src="/images/rid/icon4.webp" alt="a set of icons" />
		</div>
	</div>

	<div class="container2 section-pads">
  	<div class="lefttext">
			<blockquote>
			“Science converts information into knowledge. Engineering converts knowledge into utility. <span class="green">Design converts utility into cultural behavior in context. </span>Art takes that cultural behavior and questions our perception of the world.”
				<br><cite>Neri Oxman, MIT Media Lab</cite>
			</blockquote>
			<blockquote class="mtop24">
				“Design creates culture.<br>Culture shapes values. <span class="green"><br>Values determine the future.”</span>
				<br><cite>Robert Peters, Circle Design</cite>
			</blockquote>
		</div>
  	<div class="righttext">
			<h6>
			"Study your predecessors' works intently, to see how they solved problems. Try to figure out why they made the design choices they did;</h6>
			<h5 class="green">This is the most illuminating question to ask yourself."
			</h5>
			<cite>Fred Brooks, The Design of Design</cite>
		</div>
	</div>

	<div class="container3 section-pads">
		<h2>
		<span class="green">Ṛta in Design </span><span class="grey2"> is a framework for modern design that derives its principles, mindsets and processes from the accumulated wisdom of Indian predecessors., ie. </span><span class="green">Dharma.</span>
		</h2>
			<div class="for-links x5">
				<h2><a href="/rta/prologue">Prelude - Culture and Design</a></h2>
				<h2><a href="/rta/intro">Introduction to Ṛta in Design</a></h2>
				<h2><a href="/rta/dharmaisdesign">Dharma is Design</a></h2>
				<h2><a href="/rta/designsystem/framework">Framework</a></h2>
				<h2><a href="/rta/designsystem/principles">Principles</a></h2>
				<h2><a href="/rta/designsystem/phases">Phases</a></h2>
				<h2><a href="/rta/designsystem/resources">Tools and Resources</a></h2>
				<h2><a href="/rta/designatbrhat">Design @ Bṛhat</a></h2>
			</div>

	</div>

</div>

<style lang="sass">

.linkimages img
	object-fit: cover
	width: 200px
	height: 600px

.for-links
	padding-bottom: 64px
	padding-top: 32px

.for-links h2
	border-left-color: #10D56C
	cursor: pointer

.back-image
	background-image: url('/images/rid/infinitywall.webp')
	height: 100vh

.screen
	padding: 0 30%

@keyframes triplingshow
	0%
		opacity: 0
	100%
		opacity: 1

@keyframes movingtocircle
	0%
		margin-left: 80%
		opacity: 0
	100%
		margin-left: 0
		opacity: 1

.container1 
	display: grid 
	grid-template-columns: 1.6fr 0.4fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "bodyarea1 ." 
.bodyarea1 
	grid-area: bodyarea1 

.container2 
	display: grid 
	grid-template-columns: 1fr 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "lefttext righttext" 
	padding-top: 80px
	padding-bottom: 80px
.lefttext 
	grid-area: lefttext 
	blockquote
		border-left: 4px solid #10D56C
		padding-left: 24px
.righttext 
	grid-area: righttext 

.container4 
	display: grid 
	grid-template-columns: 1fr 1fr 1fr 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "imagehold1 imagehold2 imagehold3 imagehold4" 
.imagehold1 
	grid-area: imagehold1 
.imagehold2 
	grid-area: imagehold2 
.imagehold3 
	grid-area: imagehold3 
.imagehold4 
	grid-area: imagehold4 
.imger
	position: relative
	transition: all 0.19s var(--cubed)
	transform-origin: center center
	&:hover
		transform: scale(0.9)
.imger::after
	position: absolute
	top: 0
	left: 0
	content: ''
	width: 100%
	height: 99%
	background-color: rgba(0,0,0,0.7)
	transition: all 0.19s var(--cubed)

.imger
	&:hover::after
		background-color: rgba(0,0,0,0)
.imger img
	object-fit: contain
	width: 100%

.strips
	.linkimages
		width: 200px
	.for-links
		width: calc(100% - 200px)

@media screen and (max-width: 991px)
	.back-image
		height: 40vh
		margin-top: 64px
	.screen
		padding: 0 10%
	.container1 
		grid-template-columns: 1fr
		grid-template-rows: auto 
		gap: 0px 0px 
		grid-auto-flow: row 
		grid-template-areas: "bodyarea1"
		padding-top: 32px
	.container2 
		display: grid 
		grid-template-columns: 1fr 
		grid-template-rows: auto auto 
		gap: 0px 0px 
		grid-auto-flow: row 
		grid-template-areas: "lefttext" "righttext" 
		padding-top: 24px
		padding-bottom: 24px
		.lefttext
			blockquote
				margin-left: 0
				line-height: 1.4 !important
		.righttext
			margin-top: 32px
	.container3
		border-top: 1px solid #d7d7d7
		h2
			margin-bottom: 0
	.linkimages
		display: none
		width: 1px
	.for-links
		width: 100% !important
	.boxr.strips
		flex-direction: column

</style>