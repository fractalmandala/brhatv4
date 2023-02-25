<script>
import supabase from '$lib/db'
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
<div class="flexbox-c full imgbox l0"></div>
<div class="flexbox-c desk-margins cc-y-col mob-y-pad full">
	<h1 class="w500">Bṛhat is a <br><span class="red m-top-zero">Culture Engine</span></h1>
	<h5 class="w400 wide75 blk">
		To power creatives, research and design rooted in the Indian civilizational consciousness. We
		convert individual, institutional and collective intent into action, across 3 dimensions.
	</h5>
	<button class="redbutton m-top-8-mob"><a href="/about">Know More</a></button>
	<div class="l2 flexbox-r of-three top-gap">
		<div class="l2row1 in-col wide33">
			<h6 class="wbold m-bot-8">Create</h6>
			<p class="w300 grey">
				- visual and literary stories;<br>
				- design thinking and methods;<br>
				- research output on education and ecology;<br>
				- culture-rooted thought models
			</p>
		</div>
		<div class="l2row2 in-col wide33">
			<h6 class="wbold m-bot-8">Curate</h6>
			<p class="w300 grey">
				- heritage experience journeys;<br>
				- culture-fit in mass media;<br>
				- NEP-relevant IKS curriculum;<br>
				- culture rooting in product design and thinking
			</p>
		</div>
		<div class="l2row3 in-col wide33">
			<h6 class="wbold m-bot-8">Consult</h6>
			<p class="w300 grey">
				- NEP-IKS implementation;<br>
				- policy thinking on education and ecology;<br>
				- organizational structure and leadership frameworks
			</p>
		</div>
	</div>
</div>
<div class="flexbox-c cc-y-col desk-margins lx">
	<h5 class="w400 wide75">
		An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment. How does one go about doing that? At Bṛhat, we're acutely aware of three constraints:
	</h5>
	<div class="flexbox-r top-gap pad-y-b of-three l3">
		<div class="in-col wide33 l3col1">
			<h6 class="wbold m-bot-8">
				Civilization is Culture in Action
			</h6>
			<p class="w300 grey">
				The civilizational moment needs rooting in Dharma - of this there is no doubt. Thus a core part of our work is culture creatives that draw from the deep pool of Dhārmika heritage.
			</p>
		</div>
		<div class="in-col wide33 l3col2">
			<h6 class="wbold m-bot-8">
				It Needs Culture-Compatible Policy
			</h6>
			<p class="w300 grey">
				Radical reorientations are needed in education and ecology. To this end, our focus will be on generating policy currency for culture through frameworks, curriculum and more.
			</p>
		</div>
		<div class="in-col wide33 l3col3">
			<h6 class="wbold m-bot-8">
				The Work is Inter-Generational
			</h6>
			<p class="w300 grey">
				It needs leadership with cultural-cognition to carry the Agni. This cognition needs to permeate even brand and organisation - essential quarters for the overton window shift.
			</p>
		</div>
	</div>
	<h4 class="w600 red top-gap">
		But the severest constraint of them all is Time, and more specifically – Moment.
	</h4>
	<h5 class="w400 wide75">
		The time for a Culture Engine is now, because we are in the midst of a civilizational moment. What is a civilizational moment? How rare or regular are such moments? How must we respond to them?
		Read more on the need we see, why we think this is the time to address it, and about our self-identity:
	</h5>
</div>
<div class="flexbox-c cc-y-col desk-margins lz">
	<div class="flexbox-c link-heads l4">
	<h5 class="w400 mind">
		<a href="/about/docs/svatahsiddha">
		Svataḥsiddha
		</a>
	</h5>
	<h5 class="w400 mind">
		<a href="/about/docs/anatomy">Anatomy of a Civilizational Moment</a>
	</h5>
	<h5 class="w400 mind">
		<a href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a>
	</h5>
	<h5 class="w400 mind">
		<a href="/about/docs/namelogo">Nāmarūpa - our Name and Logo</a>
	</h5>
	<h5 class="w400 mind">
		<a href="/about/docs/values">Pratijñā - Values We Hold Dear</a>
	</h5>
	</div>
</div>
<StaticH1>
	<div id="advisors" slot="header">Advisors</div>
	<div slot="body" class="flexbox-r of-four desk-margins">
	{#await advisors()}
	<small>...</small>
	{:then data}
		{#each data as item}
		<div class="advisorbox m-bot-24 wide25">
			<img src={item.image} alt={item.name} />
			<div class="in-col">
				<h6 class="m-top-24 m-bot-zero">{item.name}</h6>
				<small>{item.title}</small>
			</div>
		</div>
		{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	</div>
</StaticH1>
<Partners>
	<div id="partners" slot="header">Partners</div>
	<div slot="body" class="flexbox-r of-six wrapper just-row desk-margins">
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
	<div slot="body" class="flexbox-r wrapper of-three pad-y-b desk-margins">
	{#await team()}
	<small>...</small>
	{:then data}
	{#each data as item}
	<div class="in-col teambox wide33">
		<img src={item.image} alt={item.name} />
		<h6 class="m-bot-zero">{item.name}</h6>
		<p class="red m-top-zero">{item.title}</p>
		<small class="grey">{item.bio}</small>
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

.advisorbox { display: flex;}


@media screen and (min-width: 768px) {
	.lx { height: 100vh;}
	.advisorbox { flex-direction: column;}
	.l3 .in-col { border-top: 1px solid #e1e1e1; padding-top: 16px;}
	
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.advisorbox { flex-direction: column;}
}

@media screen and (max-width: 575px) {
	.l0 { height: 40vh;}
	.advisorbox { flex-direction: row; align-items: flex-start;}
	.advisorbox img { width: 30%;}
	.advisorbox .in-col { padding-top: 16px; padding-left: 16px;}
  .advisorbox small { color: #878787;}
	.partnerbox { width: 30%; margin-bottom: 16px;}
	.partnerbox img { width: 88%;}
}

</style>