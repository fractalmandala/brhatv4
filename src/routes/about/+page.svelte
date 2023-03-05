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
		<div class="boxc x1">
			<h1>Bṛhat is a <br><span class="red m-top-zero">Culture Engine</span></h1>
			<h6 class="wide75">
				To power creatives, research and design rooted in the Indian civilizational consciousness. We
				convert individual, institutional and collective intent into action, across 3 dimensions.
			</h6>
		</div>
		<div class="traybox wrap x2">
			<div class="ww3 card" use:reveal={{ transition: "slide", x: -150, blur: 1, duration: 300, threshold: 0.1, easing: "easeInCirc"}}>
				<h6 class="strong">Create</h6>
				<p>
					- visual and literary stories;<br>
					- design thinking and methods;<br>
					- research output on education and ecology;<br>
					- culture-rooted thought models
				</p>
			</div>
			<div class="ww3 card" use:reveal={{ transition: "slide", x: -150, duration: 300, delay: 20, blur: 1, threshold: 0.1, easing: "easeInCirc"}}>
				<h6 class="strong">Curate</h6>
				<p>
						- heritage experience journeys;<br>
						- culture-fit in mass media;<br>
						- NEP-relevant IKS curriculum;<br>
						- culture rooting in product design and thinking
				</p>
			</div>
			<div class="ww3 card" use:reveal={{ transition: "slide", x: -150, duration: 300, delay: 40, blur: 1, threshold: 0.1, easing: "easeInCirc"}}>
				<h6 class="strong">Consult</h6>
				<p>
					- NEP-IKS implementation;<br>
					- policy thinking on education and ecology;<br>
					- organizational structure and leadership frameworks
				</p>
			</div>
		</div>

		<div class="the-title y-full x3">
			<h6 class="wide75">
				An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment. How does one go about doing that? At Bṛhat, we're acutely aware of three constraints:
			</h6>
			<div class="traybox wrap x4">
				<div class="ww3 card" use:reveal={{ transition: "slide", x: 150, blur: 1, easing: "easeInCirc"}}>
					<h6 class="strong">
					Civilization is Culture in Action
					</h6>
					<p>
					The civilizational moment needs rooting in Dharma - of this there is no doubt. Thus a core part of our work is culture creatives that draw from the deep pool of Dhārmika heritage.
					</p>
				</div>
				<div class="ww3 card" use:reveal={{ transition: "slide", x: 150, delay: 0, blur: 1, easing: "easeInCirc"}}>
				<h6 class="strong">
					It Needs Culture-Compatible Policy
				</h6>
				<p>
					Radical reorientations are needed in education and ecology. To this end, our focus will be on generating policy currency for culture through frameworks, curriculum and more.
				</p>
				</div>
				<div class="ww3 card" use:reveal={{ transition: "slide", x: 150, delay: 0, blur: 1, easing: "easeInCirc"}}>
				<h6 class="strong">
					The Work is Inter-Generational
				</h6>
				<p>
					It needs leadership with cultural-cognition to carry the Agni. This cognition needs to permeate even brand and organisation - essential quarters for the overton window shift.
				</p>
				</div>
			</div>
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

		<div class="x6 for-links">
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
		<div class="the-title y-half" id="advisors">
			<h2>
			Advisors
			</h2>
			<div class="traybox wrap x7">
				{#await advisors()}
				<small>...</small>
				{:then data}
				{#each data as item}
					<div class="ww4 card advisorbox">
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

		<div class="the-title y-half" id="partners">
			<h2>
				Partners
			</h2>
			<div class="traybox allwrap x8">
				{#await partners()}
				<small>...</small>
					{:then data}
						{#each data as item}
						<div class="ww7 partners">
							<a href={item.link} target="_blank" rel="noreferrer"><img src={item.image} alt={item.name} /></a>
						</div>
						{/each}
					{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
		</div>

		<div class="the-title y-full" id="team">
			<h2>
				Team
			</h2>
			<div class="traybox allwrap x9">
				{#await team()}
				<small>...</small>
				{:then data}
					{#each data as item}
						<div class="ww4 card">
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

.x2, .x4
	h6
		color: var(--strong)

.x4
	margin-bottom: 64px

.for-links
	h2
		border-left-color: #fe4a49


.wd7
	a
		img
			object-fit: contain
			width: 100%

.l0
	background-image: url('/images/herocovers/about-parambika.png')

.x8
	img
		object-fit: cover
		@media screen and (min-width: 900px)
			width: 100%
			height: 160px
		@media screen and (max-width: 899px) and (min-width: 768px)
			width: 100%
			height: 104px
		@media screen and (max-width: 767px) and (min-width: 576px)
			width: 100%
			height: 120px
		@media screen and (max-width: 575px)
			width: 100%

.x9
	.card
		img
			object-fit: cover
			@media screen and (min-width: 900px)
				width: 12vw
				height: 12vw
			@media screen and (max-width: 899px) and (min-width: 768px)
				width: 14vw
				height: 14vw
			@media screen and (max-width: 767px) and (min-width: 576px)
				height: 25vw
				width: 25vw
			@media screen and (max-width: 575px)
				width: 30vw
				height: 30vw

</style>