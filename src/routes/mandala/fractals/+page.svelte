<script lang="ts">
import { reveal } from 'svelte-reveal'
let y:any
</script>


<svelte:window bind:scrollY={y}/>
<div class="boxc x0 back-image">
	<div class="boxr">
		<div class="boxc gp3col1"></div>
		<div class="boxc gp3col2"></div>
		<div class="boxc gp3col3"></div>
	</div>
</div>

<div class="full-page formatting">
	<div class="no-side">
			<div class="gp1 x1 bdt">
				<div class="cols1">
					<h4 use:reveal={{ transition: "slide", duration: 300, x: -64, blur: 0, easing: "easeOutQuad"}}>
						To be a history in the true sense of the word, a work must be a story of the people inhabiting a country.
					</h4>
					<p use:reveal={{ transition: "slide", duration: 400, x: -64, blur: 0, easing: "easeOutQuad"}}>
						It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; through efforts of the people to will themselves into organic unity.
					</p>
					<h3 use:reveal={{ transition: "slide", duration: 500, x: -64, blur: 0, easing: "easeOutQuad"}}>
						Such a history of India is <span class="green"> still</span> to be written.
					</h3>
					<small>-Shri KM Munshi</small>
				</div>
			</div>
			<div class="gp2 x2 bdt">
				<div class="cols21">
					<p data-textify>
						with a continuity of untold millennia, the passage of time visible to us in
					</p>
					<h2 class="green" data-textify>itihāsa</h2>
				</div>
				<div class="cols23">
					<img src="/images/mandala/itihaas.webp" alt="itihas"/>
				</div>
			</div>
			<div class="gp2 x3 bdt">
				<div class="cols23">
					<img src="/images/mandala/bharata.webp" alt="bharat"/>
				</div>
				<div class="cols21 mid-col pd16">
					<p data-textify>
						information was processed in increasingly complex ways within the physical environment best described as
					</p>
					<h2 class="green" data-textify>bhārata</h2>
				</div>
			</div>
			<div class="gp2 x4 bdt">
				<div class="cols21 pd16 whiteback mid-col">
					<p class="whiteback" data-textify>
						emerged a civilizational consciousness, with multi-level coherence. It is known to us as
					</p>
					<h2 class="green whiteback" data-textify>dharma</h2>
				</div>
				<div class="cols23 whiteback">
					<img src="/images/mandala/dharma.webp" alt="dharma"/>
				</div>
			</div>
			<div class="gp1 x5 bdt">
					<h1>And it is a<br> <span class="green" data-textify>Fractal Maṇḍala</span></h1>
			</div>
			<div class="gp2 pt24 x6">
				<div class="cols2 pd16">
					<h5>Fractal</h5>
					<p>
						A curve or geometrical figure, each part of which has the same statistical character as the whole.</p>
					<p>
						Any of various extremely irregular curves or shapes for which any suitably chosen part is similar in shape to a given larger or smaller part.
					</p>
					<p class="green">
						A fractal displays the same properties at any magnification level, ie., it is multi-level.
					</p>
				</div>
				<div class="cols2 pd16">
					<h5>Maṇḍala</h5>
					<p>
						A circle or anything circular- globe, circumference, orbit of a celestial object, an array of troops.</p>
					<p>
						From the root √maṇḍ (मण्ड्) meaning satisfaction, adornment, wholeness, complete, satisfied (√bhūṣ, √hṛṣ, tuṣṭa, alaṅkāra).
					</p>
					<p class="green">
						A circle- śūnya or pūrṇam- is where all constituents form a unified whole, ie., it is coherent.
					</p>
				</div>
			</div>
			<div class="gp1 x7 bdt for-links">
				<h2><a href="/mandala/fractals/intro">The Macrohistoric Case</a></h2>
				<h2><a href="/mandala/fractals/aphorisms">Caturasūtra</a></h2>
				<h2><a href="/mandala/fractals/aphorisms">Civilizational Consciousness</a></h2>
				<h2><a href="/mandala/fractals/aphorisms">Ancestors Outside of Time</a></h2>
				<h2><a href="/mandala/fractals/aphorisms">History vs. Itihāsa</a></h2>
				<h2><a href="/mandala/fractals/aphorisms">Ratha as Bīja</a></h2>
				<h2><a href="/mandala/fractals/aphorisms">Avatāra in You</a></h2>
				<h2><a href="/mandala/fractals/aphorisms">Synaptic Reconnection</a></h2>
			</div>
	</div>
</div>


<style lang="sass">

.for-links
	a
		&:hover
			color: #10D56C
	h2
		&:hover
			border-bottom: 1px solid #a1a1a1

.x0
	background-image: url('/images/mandala/opener.png')
	height: 110vh
	width: 100%
	z-index: -1
	.boxr	
		height: 100%
		width: 100%
		.boxc
			height: 100%
			width: 33.33%
			z-index: 0

.xx1
	min-height: 70vh

@media screen and (min-width: 900px)
	.x1
		height: 100vh
		.cols1
			justify-content: center
			height: 100%
	.x2, .x3, .x4
		height: 80vh
		.cols21
			height: 100%
			justify-content: center
		.cols23
			img
				height: 100%
	.x5
		height: 100%
		padding-top: 80px

@media screen and (max-width: 899px)
	.x1
		height: 100vh
		.cols1
			justify-content: center
			height: 100%
	.x2, .x3, .x4
		height: 90vh
		.cols21
			height: 100%
			justify-content: center
		.cols23
			img
				height: 100%
	.x5
		height: 100%
		padding-top: 80px

@media screen and (max-width: 767px)
	.x1
		height: 100vh
		.cols1
			justify-content: center
			height: 100%
	.x2, .x3, .x4
		height: 100vh
		.cols21
			height: 30vh
			justify-content: flex-end
		.cols23
			height: 60vh
			width: 100%
			img
				height: 100%
	.x5
		height: 100%
		padding-top: 80px

		

.full-page, .xx1, .x1, .x2, .x3, .x4 .whiteback, .x5, .x6
	z-index: 1
	background: white


</style>