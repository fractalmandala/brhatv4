<script>
import supabase from '$lib/db'
import { onMount } from 'svelte'
import tippy, { animateFill } from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import 'tippy.js/dist/backdrop.css';
import { reveal } from 'svelte-reveal'
import { fly } from 'svelte/transition'
import { quadIn } from 'svelte/easing'

let isInLink = false

onMount(async() => {
	tippy ('.expansion', {
		content: 'Click to Expand/Retract',
		arrow: false,
		theme: 'dark',
		animation: 'scale',
	})
})

function toggleInLink(){
	isInLink = !isInLink
}
async function advisors() {
const { data, error } = await supabase
  .from('brhat-advisory')
  .select()
  .order('id')
  if (error) throw new Error(error.message)
  return data
}

async function partners() {
const { data, error } = await supabase
  .from('brhat-about')
  .select()
	.eq('type','partner')
  .order('sequence')
  if (error) throw new Error(error.message)
  return data
}
async function team() {
const { data, error } = await supabase
  .from('brhat-team')
  .select()
  .order('sequence')
  if (error) throw new Error(error.message)
  return data
}

</script>

<div class="box-c back-image l0"></div>

<div class="pad-a">

	<!--introduction to brhat-->
	<div class="section-pads container">
  	<div class="header">
			<h1>Bṛhat is a <br><span class="red m-top-zero">Culture Engine</span></h1>
			<h6 class="wide75">
				To power creatives, research and design rooted in the Indian civilizational consciousness. We
				convert individual, institutional and collective intent into action, across 3 dimensions.
			</h6>
		</div>
  	<div class="rowof3">
			<div class="ww1 card">
				<h6 class="strong">Create</h6>
				<p>
					- visual and literary stories;<br>
					- design thinking and methods;<br>
					- research output on education and ecology;<br>
					- culture-rooted thought models
				</p>
			</div>
			<div class="ww1 card">
				<h6 class="strong">Curate</h6>
				<p>
						- heritage experience journeys;<br>
						- culture-fit in mass media;<br>
						- NEP-relevant IKS curriculum;<br>
						- culture rooting in product design and thinking
				</p>
			</div>
			<div class="ww1 card">
				<h6 class="strong">Consult</h6>
				<p>
					- NEP-IKS implementation;<br>
					- policy thinking on education and ecology;<br>
					- organizational structure and leadership frameworks
				</p>
			</div>
		</div>
	</div>

	<!--three convictions-->
	<div class="section-pads container-2">
  	<div class="header-onlytitle">
			<h6 class="wide75">
				An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment. How does one go about doing that? At Bṛhat, we're acutely aware of three constraints:
			</h6>			
		</div>
  	<div class="rowof3">
				<div class="ww1 card">
					<h6 class="strong">
					Civilization is Culture in Action
					</h6>
					<p>
					The civilizational moment needs rooting in Dharma - of this there is no doubt. Thus a core part of our work is culture creatives that draw from the deep pool of Dhārmika heritage.
					</p>
				</div>
				<div class="ww1 card">
					<h6 class="strong">
					It Needs Culture-Compatible Policy
					</h6>
					<p>
					Radical reorientations are needed in education and ecology. To this end, our focus will be on generating policy currency for culture through frameworks, curriculum and more.
					</p>
				</div>
				<div class="ww1 card">
					<h6 class="strong">
					The Work is Inter-Generational
					</h6>
					<p>
					It needs leadership with cultural-cognition to carry the Agni. This cognition needs to permeate even brand and organisation - essential quarters for the overton window shift.
					</p>
				</div>
		</div>
  	<div class="bodybottom">
			<h6 class="wide75">
				But the severest constraint of them all is Time, and more specifically – <span class="soft">Moment.</span>
			</h6>
			<h5>
				The time for a Culture Engine is now, because we are in the midst of a civilizational moment. What is a civilizational moment? How rare or regular are such moments? How must we respond to them?
			</h5>
			<h6 class="wide75">
				Read more on the need we see, why we think this is the time to address it, and about our self-identity.
			</h6>
		</div>	
	</div>


	<!--links to subsections-->
	<div class="section-pads x6 for-links">
		<h2><a href="/about/docs/svatahsiddha">svataḥsiddha</a></h2>
		<h2><a href="/about/docs/anatomy">anatomy of a civilizational moment</a></h2>
		<h2><a href="/about/docs/whatkrishnameanstous">what śrī kṛṣṇa means to us</a></h2>
		<h2><a href="/about/docs/namelogo">nāmarūpa - name and logo</a></h2>
		<h2><a href="/about/docs/values">pratijñā - values</a></h2>
		<h2><a href="/about/#advisors">advisors</a></h2>
		<h2><a href="/about/#partners">partners</a></h2>
		<h2><a href="/about/#team">team</a></h2>
		<div class="in-links expansion" on:click={toggleInLink} on:keydown={toggleInLink}>
			<h2 class="point">Areas</h2>
					{#if isInLink}
					<p transition:fly={{ duration: 200, x: -120, y: 0, easing: quadIn }}><a href="/about/areas/culturecreatives">Culture Creatives</a></p>
					<p transition:fly={{ duration: 200, delay: 40, x: -120, y: 0, easing: quadIn }}><a href="/about/areas/policyresearch">Policy Research</a></p>
					<p transition:fly={{ duration: 200, delay: 80, x: -120, y: 0, easing: quadIn }}><a href="/about/areas/leadershipdevelopment">Leadership Development</a></p>
					{/if}
		</div>
	</div>


	<!--advisors-->
	<div class="section-pads container-4">
  	<div class="header-4 the-title">
			<h2>
				Advisors
			</h2>
		</div>
  	<div class="rowof4">
				{#await advisors()}
				<small>...</small>
				{:then data}
				{#each data as item}
					<div class="ww1 card advisorbox">
						<img src={item.image} alt={item.name} />
						<h6>{item.name}</h6>
						<p>{item.title}</p>
					</div>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
		</div>
	</div>


	<!--partners-->
	<div class="section-pads container-3">
  	<div class="header-4 the-title">
			<h2>Partners</h2>
		</div>
  	<div class="rowof7">
				{#await partners()}
				<small>...</small>
					{:then data}
						{#each data as item}
						<div class="partners">
							<a href={item.link} target="_blank" rel="noreferrer"><img src={item.image} alt={item.name} /></a>
						</div>
						{/each}
					{:catch error}
				<pre>{error}</pre>
				{/await}
		</div>
	</div>


	<!--team-->
	<div class="section-pads container-5">
  	<div class="header-4 the-title">
			<h2>Team</h2>
		</div>
  	<div class="rowof12">
				{#await team()}
				<small>...</small>
				{:then data}
					{#each data as item}
						<div class="ww1 team card">
							<img src={item.image} alt={item.name} />
							<h6>{item.name}</h6>
							<cite class="soft">{item.title}</cite>
							<p>{item.bio}</p>
						</div>
					{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
		</div>
	</div>

</div>


<style lang="sass">

.container 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: max-content 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "header" "rowof3" 
	.header 
		grid-area: header 
	.rowof3 
		display: grid 
		grid-auto-flow: row 
		grid-area: rowof3 
	@media screen and (min-width: 900px)
		height: 100vh
		.rowof3
			grid-template-columns: 1fr 1fr 1fr 
			grid-template-rows: 1fr 
			gap: 0px 32px 
			grid-template-areas: ". . ." 
			padding: 32px 0
	@media screen and (max-width: 899px) and (min-width: 768px)
		.rowof3
			grid-template-columns: 1fr 1fr 1fr 
			grid-template-rows: 1fr
			gap: 0px 32px 
			grid-template-areas: ". . ." 
			padding: 32px 0
	@media screen and (max-width: 767px) and (min-width: 576px)
		.rowof3
			grid-template-columns: 1fr 
			grid-template-rows: 1fr 1fr 1fr
			gap: 24px 0px 
			grid-template-areas: "." "." "." 
			padding: 24px 0
	@media screen and (max-width: 575px)
		.rowof3
			grid-template-columns: 1fr 
			grid-template-rows: 1fr 1fr 1fr
			gap: 24px 0px 
			grid-template-areas: "." "." "." 
			padding: 24px 0


.container-4 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "header-4" "rowof4" 
	.header-4 
		grid-area: header-4 
	.rowof4 
		display: grid 
		grid-auto-flow: row 
		grid-area: rowof4 
	@media screen and (min-width: 900px)
		.rowof4
			grid-template-columns: 1fr 1fr 1fr 1fr 
			grid-template-rows: 1fr 
			gap: 0px 32px 
			grid-template-areas: ". . . ."
	@media screen and (max-width: 899px) and (min-width: 768px)
		.rowof4
			grid-template-columns: 1fr 1fr 1fr 1fr 
			grid-template-rows: 1fr 
			gap: 0px 32px 
			grid-template-areas: ". . . ."
	@media screen and (max-width: 767px) and (min-width: 576px)
		.rowof4
			grid-template-columns: 1fr 1fr
			grid-template-rows: 1fr 1fr
			gap: 0px 24px 
			grid-template-areas: ". ." ". ."
	@media screen and (max-width: 575px) 
		.rowof4
			grid-template-columns: 1fr
			grid-template-rows: 1fr 1fr 1fr 1fr
			gap: 24px 24px 
			grid-template-areas: "." "." "." "."

.container-2
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto auto auto 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "header-onlytitle" "rowof3" "bodybottom" 
	.header-onlytitle 
		grid-area: header-onlytitle 
	.rowof3 
		display: grid 
		grid-auto-flow: row 
		grid-area: rowof3 
	.bodybottom 
		grid-area: bodybottom 
	@media screen and (min-width: 900px)
		.rowof3
			grid-template-columns: 1fr 1fr 1fr 
			grid-template-rows: 1fr 
			grid-template-areas: ". . ." 
			gap: 0px 32px 
			padding: 32px 0
	@media screen and (max-width: 899px) and (min-width: 768px)
		.rowof3
			grid-template-columns: 1fr 1fr 1fr 
			grid-template-rows: 1fr 
			grid-template-areas: ". . ." 
			gap: 0px 32px 
			padding: 32px 0
	@media screen and (max-width: 767px) and (min-width: 576px)
		.rowof3
			grid-template-columns: 1fr
			grid-template-rows: 1fr 1fr 1fr
			grid-template-areas: "." "." "." 
			gap: 0px 24px 
			padding: 24px 0
	@media screen and (max-width: 575px)
		.rowof3
			grid-template-columns: 1fr 
			grid-template-rows: 1fr 1fr 1fr
			grid-template-areas: "." "." "." 
			gap: 0px 24px 
			padding: 24px 0

.container-3
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "header-4" "rowof7" 
	.header-4 
		grid-area: header-4 
	.rowof7 
		display: grid 
		grid-auto-flow: row 
		grid-area: rowof7
		.partners
			img
				object-fit: contain
				width: 100%
	@media screen and (min-width: 900px)
		.rowof7
			grid-template-areas: ". . . . . . ." 
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 
			grid-template-rows: 1fr 
			gap: 0px 32px 
	@media screen and (max-width: 899px) and (min-width: 768px)
		.rowof7
			grid-template-areas: ". . . . . . ." 
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 
			grid-template-rows: 1fr 
			gap: 0px 32px 
	@media screen and (max-width: 767px) and (min-width: 576px)
		.rowof7
			grid-template-areas: ". . ." ". . ." ". . ." 
			grid-template-columns: 1fr 1fr 1fr
			grid-template-rows: 1fr 1fr 1fr
			gap: 24px 24px 
	@media screen and (max-width: 575px)
		.rowof7
			grid-template-areas: ". . ." ". . ." ". . ." 
			grid-template-columns: 1fr 1fr 1fr
			grid-template-rows: 1fr 1fr 1fr
			gap: 24px 24px 

.container-5
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "header-4" "rowof12" 
	.header-4 
		grid-area: header-4 
	.rowof12 
		display: grid 
		grid-auto-flow: row 
		grid-area: rowof12 
		.team
			img
				object-fit: cover
				width: 200px
	@media screen and (min-width: 900px)
		.rowof12
			grid-template-columns: 1fr 1fr 1fr 1fr
			grid-template-rows: 1fr 1fr 1fr
			gap: 24px 32px 
			grid-template-areas: ". . . ." ". . . ." ". . . ."
	@media screen and (max-width: 899px) and (min-width: 768px)
		.rowof12
			grid-template-columns: 1fr 1fr 1fr
			grid-template-rows: 1fr 1fr 1fr 1fr
			gap: 24px 32px 
			grid-template-areas: ". . ." ". . ." ". . ." ". . ."
			.team
				img
					width: 160px
					height: 160px
	@media screen and (max-width: 767px) and (min-width: 576px)
		.rowof12
			grid-template-columns: 1fr 1fr
			grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr
			gap: 24px 24px 
			grid-template-areas: ". ." ". ." ". ." ". ." ". ." ". ."
			.team
				img
					width: 144px
					height: 144px
	@media screen and (max-width: 575px)
		.rowof12
			grid-template-columns: 1fr
			grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr
			gap: 24px 0px
			grid-template-areas: "." "." "." "." "." "." "." "." "." "." "." "."
			.team
				img
					width: 120px
					height: 120px


</style>