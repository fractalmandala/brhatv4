<script lang="ts">
import { blur } from 'svelte/transition'
let y:number
let isColor:boolean = false
function toggleMandala(){
	isColor = !isColor
}
</script>

<svelte:window bind:scrollY={y}/>
<div class="boxc back-image l0"></div>
<div class="pad-a">
	<div class="container1 section-pads">
		<div class="con1text">
			<p class="wide75">
				To be a history in the true sense of the word, a work must be a story of the people inhabiting a country.
			</p>
			<p class="wide75">
			It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; through efforts of the people to will themselves into organic unity.
			</p>
			<h5>
			Such a history of India is <span class="newlime"> still</span> to be written.
			</h5>
			<div class="newlime cite">- Shri KM Munshi</div>
		</div>
		<div class="con1image">
			<img src="/images/mandala/storyofppl.webp" alt="the story of india" />
		</div>
	</div>
	<div class="container2 section-pads">
  	<div class="containerofimage2">
			<img src="/images/mandala/itihaas.webp" alt="history"/>
		</div>
  	<div class="containeroftext2">
			<h6>with a continuity of untold millennia, the passage of time visible to us in</h6>
			<h2 class="newlime">itihāsa</h2>
		</div>
	</div>

	<div class="container3 section-pads">
  	<div class="containeroftext3">
			<h6>information was processed in increasingly complex ways within the physical environment best described as</h6>
			<h2 class="newlime">bhārata</h2>
		</div>
  	<div class="containerofimage3">
			<img src="/images/mandala/bharata.webp" alt="india"/>
		</div>
	</div>

	<div class="container4 section-pads">
  	<div class="containerofimage4">
			<img src="/images/mandala/dharma.webp" alt="religion"/>
		</div>
  	<div class="containeroftext4">
			<h6>emerged a civilizational consciousness, with multi-level coherence. It is known to us as</h6>
			<h2 class="newlime">dharma</h2>
		</div>
	</div>

	<div class="container5 section-pads">
	  <div class="titlearea5" on:mouseenter={toggleMandala} on:mouseleave={toggleMandala}>
	    <div class="titleareaimage">
				{#if isColor}
				<img src="/images/mandala/ogmandala.webp" alt="rotatingmandala" style="transform: rotate({y/5}deg)" />
				{:else}
				<img src="/images/mandala/rotator.png" alt="rotatingmandala" style="transform: rotate({y/5}deg)" />
				{/if}
			</div>
	    <div class="titleareatext">
				<h1>and it is <span class="newlime">alive...</span></h1>
			</div>
	  </div>
	  <div class="rowof25">
	    <div class="rowof25box1">
				<h5>Fractal</h5>
					<p>
						A curve or geometrical figure, each part of which has the same statistical character as the whole. Any of various extremely irregular curves or shapes for which any suitably chosen part is similar in shape to a given larger or smaller part. </p>
					<h6 class="newlime">A fractal displays the same properties at any magnification level, ie., it is multi-level.
					</h6>
			</div>
	    <div class="rowof25box2">
					<h5>Maṇḍala</h5>
					<p>
						A circle or anything circular- globe, circumference, orbit of a celestial object, an array of troops. From the root √maṇḍ (मण्ड्) meaning satisfaction, adornment, wholeness, complete, satisfied (√bhūṣ, √hṛṣ, tuṣṭa, alaṅkāra).</p>
					<h6 class="newlime">A circle- śūnya or pūrṇam- is where all constituents form a unified whole, ie., it is coherent.</h6>
			</div>
	  </div>
	</div>

	<div class="container6 section-pads">
		<h2>
			The Fractal Maṇḍala is a project to research, explore and articulate the emergence of <span class="newlime">Indian civilizational consciousness.</span>
		</h2>
				<div class="x6 for-links">
			<h2 id="link1"><a href="/mandala/macrohistoriccase">the macrohistoric case</a></h2>
			<h2 id="link2"><a href="/mandala/aphorisms">caturasūtra - 4 aphorisms</a></h2>
			<h2 id="link3"><a href="/mandala/indiancivcon">indian civilizational consciousness</a></h2>
			<h2 id="link4"><a href="/mandala/rathaasbija">ratha as a bīja</a></h2>
			<h2 id="link5"><a href="/mandala/historyvsitihasa">history is ontic, itihāsa ontologic</a></h2>
			<h2 id="link6"><a href="/mandala/ancestors">ancestors outside of time</a></h2>
			<h2 id="link7"><a href="/mandala/ramasjourney">the avatāra in you</a></h2>
			<h2 id="link8"><a href="/mandala/synrec">synaptic reconnection</a></h2>
		</div>
	</div>

</div>


<style lang="sass">

.containerofimage2 img, .containerofimage3 img, .containerofimage4 img
	object-fit: cover
	width: 100%
	height: 40vh
	object-position: center center

.containeroftext2, .containeroftext3, .containeroftext4
	display: grid
	align-content: center

.for-links
	margin-top: 64px
	padding-bottom: 64px
	h2
		transition: all 0.18s var(--cubea)
		color: #373737
		position: relative
		&:hover
			border-left-color: var(--newlime)
			border-left-width: 16px

.l0
	background-image: url('/images/mandala/opener.png')
	height: 100vh

.container1 
	display: grid 
	grid-template-columns: 1fr 400px 
	grid-template-rows: auto 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "con1text con1image" 
	height: 100vh
	align-items: center
	align-content: center

.con1text
	grid-area: con1text

.con1image
	grid-area: con1image
	display: flex
	flex-direction: column
	width: 400px
	img
		object-fit: cover
		width: 400px
		height: 100%

.container2 
	display: grid 
	grid-template-columns: 50% 1fr 
	grid-template-rows: 1fr 
	gap: 24px 24px 
	grid-auto-flow: row 
	grid-template-areas: "containerofimage2 containeroftext2" 
	height: 40vh
.containerofimage2 
	grid-area: containerofimage2 
	height: 40vh
.containeroftext2 
	grid-area: containeroftext2 
	height: 40vh

.container3 
	display: grid 
	grid-template-columns: 1fr 50% 
	grid-template-rows: 1fr 
	gap: 24px 24px 
	grid-auto-flow: row 
	grid-template-areas: "containeroftext3 containerofimage3" 
	height: 40vh
.containeroftext3 
	grid-area: containeroftext3 
	height: 40vh
.containerofimage3 
	grid-area: containerofimage3 
	height: 40vh


.container4 
	display: grid 
	grid-template-columns: 50% 1fr 
	grid-template-rows: 1fr 
	gap: 24px 24px 
	grid-auto-flow: row 
	grid-template-areas: "containerofimage4 containeroftext4" 
	height: 40vh
.containerofimage4
	grid-area: containerofimage4 
	height: 40vh
.containeroftext4 
	grid-area: containeroftext4 
	height: 40vh

.container5 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto auto 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "titlearea5" "rowof25"
	padding-top: 128px
.titlearea5 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto auto
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "titleareaimage" "titleareatext" 
	grid-area: titlearea5 
	align-items: center
	align-content: center
	justify-items: center
	justify-content: center
	h1
		margin: 0
.titleareaimage 
	grid-area: titleareaimage 
	display: grid
	justify-items: center
	width: 300px
	justify-self: center
	img
		object-fit: contain
		width: 300px
		height: 300px
		margin: auto
		transform-origin: center center
.titleareatext 
	grid-area: titleareatext 
	h1
		text-align: center
.rowof25 
	display: grid 
	grid-template-columns: auto auto
	grid-template-rows: auto
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "rowof25box1 rowof25box2" 
	grid-area: rowof25 
	justify-items: center
	justify-content: center
	padding-top: 64px
.rowof25box1 
	grid-area: rowof25box1 
	width: 60%
.rowof25box2 
	grid-area: rowof25box2 
	width: 60%

@media screen and (max-width: 991px) and (min-width: 576px)
	.l0
		height: 60vh
		margin-top: 64px
	.container1
		grid-template-columns: auto 200px
		grid-template-rows: auto
		gap: 0 24px
		height: 100%
		padding-top: 32px
		padding-bottom: 32px
	.con1text
		width: auto
	.con1image
		width: auto
		img
			width: 200px
	.titleareaimage img
		width: 200px
		height: 200px
	.titleareatext h1
		font-size: 3.6rem
	.rowof25box1, .rowof25box2
		width: 100%
	.rowof25
		gap: 0 24px

@media screen and (max-width: 575px)
	.l0
		height: 50vh
		margin-top: 64px
	.container1
		grid-template-columns: 1fr 
		grid-template-rows: auto auto 
		gap: 32px 0px 
		grid-auto-flow: row 
		grid-template-areas: "con1text" "con1image"
		height: 100%
	.con1text
		padding-top: 32px
	.con1image img
		object-fit: cover
		width: 110%
		height: 300px
	.titleareaimage img
		height: 128px
		width: 128px
	.rowof25
		grid-template-columns: 1fr
		grid-template-rows: auto auto
		grid-template-areas: "rowof25box1" "rowof25box2"
	.rowof25box1, .rowof25box2
		width: 100%
	.rowof25box1
		border-bottom: 1px solid #d7d7d7
	.container6 h2
		margin-bottom: 0
	.for-links
		padding-top: 0
		margin-top: 24px
		


</style>