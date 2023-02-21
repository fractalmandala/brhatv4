<script>
import supabase from '$lib/db'
import { fly } from 'svelte/transition'
import Modal from '$lib/components/reuse/Modal.svelte'
import LogMrd from '$lib/components/logos/LogMrd.svelte'
import LogFm from '$lib/components/logos/LogFm.svelte'
import LogBol from '$lib/components/logos/LogoBol.svelte'
import LogDr from '$lib/components/logos/LogDr.svelte'	
import LogAnv from '$lib/components/logos/LogAnv.svelte'
import LogRid from '$lib/components/logos/LogRid.svelte'
import LogMan from '$lib/components/logos/LogMan.svelte'
import MainH1 from '$lib/components/headers/MainH1.svelte'
import StaticH1 from '$lib/components/headers/StaticH1.svelte'
import Partners from '$lib/components/headers/StaticH1.svelte'
import Team from '$lib/components/headers/StaticH1.svelte'

let showModal = false;
let isBrands = false;

function toggleBrands(){
	isBrands = !isBrands;
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

<div class="loco">
<div class="flexbox-c full img-fix l0"></div>
<div class="flexbox-c full pad-x-40 l1">
	<h2 class="w700 m-bot-zero">Bṛhat is a
	<span class="red">
	Culture Engine</span></h2>
	<h5 class="w300 wide75">
		To power creatives, research and design rooted
		in the Indian civilizational consciousness. We convert individual, institutional 
		and collective intent into action, across 3 dimensions:
	</h5>
	<div class="l2 flexbox-r of-three">
		<div class="l2row1 in-col wide33">
			<h6 class="wbold">Create</h6>
			<small class="w300">
				- visual and literary stories;<br>
				- design thinking and methods;<br>
				- research output on education and ecology;<br>
				- culture-rooted thought models
			</small>
		</div>
		<div class="l2row2 in-col wide33">
			<h6 class="wbold">Curate</h6>
			<small class="w300">
				- heritage experience journeys;<br>
				- culture-fit in mass media;<br>
				- NEP-relevant IKS curriculum;<br>
				- culture rooting in product design and thinking
			</small>
		</div>
		<div class="l2row3 in-col wide33">
			<h6 class="wbold">Consult</h6>
			<small class="w300">
				- NEP-IKS implementation;<br>
				- policy thinking on education and ecology;<br>
				- organizational structure and leadership frameworks
			</small>
		</div>
	</div>
</div>
<div class="flexbox-c full cc-y-col pad-x-40 lx">
	<h5 class="w300 wide75 m-bot-zero">
		An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment.
	</h5>
	<h5 class="w300 wide75">
		How does one go about doing that? At Bṛhat, we're acutely aware of three constraints:
	</h5>
	<div class="flexbox-r of-three l3">
		<div class="in-col wide33 l3col1">
			<h6 class="wbold red">
				Civilization is Culture in Action
			</h6>
			<small class="w300">
				The civilizational moment needs rooting in Dharma - of this there is no doubt. Thus a core part of our work is culture creatives that draw from the deep pool of Dhārmika heritage.
			</small>
		</div>
		<div class="in-col wide33 l3col2">
			<h6 class="wbold red">
				It Needs Culture-Compatible Policy
			</h6>
			<small class="w300">
				Radical reorientations are needed in education and ecology. To this end, our focus will be on generating policy currency for culture through frameworks, curriculum and more.
			</small>
		</div>
		<div class="in-col wide33 l3col3">
			<h6 class="wbold red">
				The Work is Inter-Generational
			</h6>
			<small class="w300">
				It needs leadership with cultural-cognition to carry the Agni. This cognition needs to permeate even brand and organisation - essential quarters for the overton window shift.
			</small>
		</div>
	</div>
</div>
<div class="flexbox-c full cc-y-col pad-x-40 lz">
	<h4 class="w500 wide75">
		But the severest constraint of them all is Time, and more specifically – Moment.
	</h4>
	<h6 class="w300 wide75">
		The time for a Culture Engine is now, because we are in the midst of a civilizational moment. What is a civilizational moment? How rare or regular are such moments? How must we respond to them?
		Read more on the need we see, why we think this is the time to address it, and about our self-identity:
	</h6>
	<div class="flexbox-c l4">
	<h5 class="w400 m-bot-zero">
		<a href="/about/docs/svatahsiddha">
		Svataḥsiddha
		</a>
	</h5>
	<h5 class="w400 m-bot-zero">
		<a href="/about/docs/anatomy">Anatomy of a Civilizational Moment</a>
	</h5>
	<h5 class="w400 m-bot-zero">
		<a href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a>
	</h5>
	<h5 class="w400 m-bot-zero">
		<a href="/about/docs/namelogo">Nāmarūpa - our Name and Logo</a>
	</h5>
	<h5 class="w400 m-bot-zero">
		<a href="/about/docs/values">Pratijñā - Values We Hold Dear</a>
	</h5>
	</div>
</div>
<StaticH1>
	<div id="advisors" slot="header">Advisors</div>
	<div slot="body" class="flexbox-r of-four top-gap">
	{#await advisors()}
	<small>...</small>
	{:then data}
		{#each data as item}
		<div class="in-col advisorbox m-bot-24 wide25">
			<img src={item.image} alt={item.name} />
			<h6 class="m-top-24 m-bot-zero">{item.name}</h6>
			<small>{item.title}</small>
		</div>
		{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	</div>
</StaticH1>
<Partners>
	<div id="partners" slot="header">Partners</div>
	<div slot="body" class="flexbox-r of-six wrapper just-row top-gap">
		{#await partners()}
		<small>...</small>
		{:then data}
		{#each data as item}
		<div class="in-col partnerbox wide16">
			<a href={item.link} target="_blank" rel="noreferrer"><img src={item.image} alt={item.name} /></a>
		</div>
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>
</Partners>
<Team>
	<div id="team" slot="header">Team</div>
	<div slot="body" class="flexbox-r wrapper of-three pad-y-b top-gap">
	{#await team()}
	<small>...</small>
	{:then data}
	{#each data as item}
	<div class="in-col teambox wide33">
		<img src={item.image} alt={item.name} />
		<h6 class="m-bot-zero">{item.name}</h6>
		<p class="red m-top-zero">{item.title}</p>
		<small>{item.bio}</small>
	</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	</div>
</Team>

</div>

<style>
.l2 h6 { 
	border-top: 1px solid #d7d7d7;
	padding-top: 12px;
}

.teambox img { object-fit:contain; width: 50%; margin-bottom: 24px;}
.partnerbox img { object-fit: contain; width: 100%;}

.red { color: #fe4a49;}
.loco { position: relative;}
.l0 {
	background-image: url('/images/herocovers/about-parambika.png');
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
}
.l1 { background: white; justify-content: center; height: 100%; padding-top: 4em; padding-bottom: 2em; margin-bottom: -2em;}




.l1 { position: relative;}



@media screen and (min-width: 768px) {
	.l2 .in-col {
		padding: 0 24px 2px 24px;
		background: #f7f7f7;
	}
	.l3 .in-col { border-top: 1px solid #e1e1e1; padding-top: 16px;}
	
}

@media screen and (max-width: 575px) {
	.advisorbox img { width: 30%;}
	.partnerbox { width: 48%; margin-bottom: 16px;}
	.partnerbox img { width: 80%;}
}

</style>