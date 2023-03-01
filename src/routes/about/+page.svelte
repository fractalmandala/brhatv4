<script>
import supabase from '$lib/db'
import { onMount } from 'svelte';
import { reveal } from 'svelte-reveal'
let y = 1

let img

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

<div class="box-c h100 back-image l0"></div>
<div class="box-c m-large pad80 h100">
	<h1 class="w600">Bṛhat is a <br><span class="red m-top-zero">Culture Engine</span></h1>
	<h5 class="w400 wide75 blk">
	To power creatives, research and design rooted in the Indian civilizational consciousness. We
	convert individual, institutional and collective intent into action, across 3 dimensions.
	</h5>
	<div class="l2 box-r wrap h100p gap3">
		<div class="l2row1 h100p box-c wd3" use:reveal={{ transition: "slide", x: -150, blur: 1, duration: 300, threshold: 0.1, easing: "easeInCirc"}}>
			<h6 class="w600 strong">Create</h6>
			<p class="w400 grey">
				- visual and literary stories;<br>
				- design thinking and methods;<br>
				- research output on education and ecology;<br>
				- culture-rooted thought models
			</p>
		</div>
		<div class="l2row2 h100p box-c wd3" use:reveal={{ transition: "slide", x: -150, duration: 300, delay: 50, blur: 1, threshold: 0.1, easing: "easeInCirc"}}>
			<h6 class="w600 strong">Curate</h6>
			<p class="w400 grey">
				- heritage experience journeys;<br>
				- culture-fit in mass media;<br>
				- NEP-relevant IKS curriculum;<br>
				- culture rooting in product design and thinking
			</p>
		</div>
		<div class="l2row3 h100p box-c wd3" use:reveal={{ transition: "slide", x: -150, duration: 300, delay: 100, blur: 1, threshold: 0.1, easing: "easeInCirc"}}>
			<h6 class="w600 strong">Consult</h6>
			<p class="w400 grey">
				- NEP-IKS implementation;<br>
				- policy thinking on education and ecology;<br>
				- organizational structure and leadership frameworks
			</p>
		</div>
	</div>
</div>
<div class="box-c m-large h100 pad80-t lx">
	<h5 class="w400 wide75">
		An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment. How does one go about doing that? At Bṛhat, we're acutely aware of three constraints:
	</h5>
	<div class="box-r h100p wrap gap3 l3" use:reveal={{ transition: "slide", x: 150, blur: 1, easing: "easeInCirc"}}>
		<div class="box-c wd3 l3col1">
			<h6 class="w600 strong">
				Civilization is Culture in Action
			</h6>
			<p class="w400 grey">
				The civilizational moment needs rooting in Dharma - of this there is no doubt. Thus a core part of our work is culture creatives that draw from the deep pool of Dhārmika heritage.
			</p>
		</div>
		<div class="box-c wd3 l3col2" use:reveal={{ transition: "slide", x: 150, delay: 50, blur: 1, easing: "easeInCirc"}}>
			<h6 class="w600 strong">
				It Needs Culture-Compatible Policy
			</h6>
			<p class="w400 grey">
				Radical reorientations are needed in education and ecology. To this end, our focus will be on generating policy currency for culture through frameworks, curriculum and more.
			</p>
		</div>
		<div class="box-c wd3 l3col3" use:reveal={{ transition: "slide", x: 150, delay: 100, blur: 1, easing: "easeInCirc"}}>
			<h6 class="w600 strong">
				The Work is Inter-Generational
			</h6>
			<p class="w400 grey">
				It needs leadership with cultural-cognition to carry the Agni. This cognition needs to permeate even brand and organisation - essential quarters for the overton window shift.
			</p>
		</div>
	</div>
</div>
<div class="box-c pad80-t m-large">
	<h4 class="w600 strong">
		But the severest constraint of them all is Time, and more specifically – Moment.
	</h4>
	<h5 class="w400 wide75">
		The time for a Culture Engine is now, because we are in the midst of a civilizational moment. What is a civilizational moment? How rare or regular are such moments? How must we respond to them?
		<br><br>Read more on the need we see, why we think this is the time to address it, and about our self-identity:
	</h5>
</div>	
<div class="box-c m-large lz">
	<div class="box-c link-heads l4">
		<h5 class="mind">
			<a href="/about/docs/svatahsiddha" data-textify>
				Svataḥsiddha
			</a>
		</h5>
		<h5 class="mind">
			<a href="/about/docs/anatomy" data-textify>Anatomy of a Civilizational Moment</a>
		</h5>
		<h5 class="mind">
			<a href="/about/docs/whatkrishnameanstous" data-textify>What Śrī Kṛṣṇa Means to Us</a>
		</h5>
		<h5 class="mind">
			<a href="/about/docs/namelogo" data-textify>Nāmarūpa - our Name and Logo</a>
		</h5>
		<h5 class="mind">
			<a href="/about/docs/values" data-textify>Pratijñā - Values We Hold Dear</a>
		</h5>
	</div>
</div>
<div class="box-c m-large">
	<h2 class="title">Advisors</h2>
	<div class="box-r wrap h100p gap4">
		{#await advisors()}
		<small>...</small>
		{:then data}
		{#each data as item}
			<div class="box-c wd4 h100p advisorbox">
				<img src={item.image} alt={item.name} />
				<div class="box-c">
					<h6>{item.name}</h6>
					<small class="grey">{item.title}</small>
				</div>
			</div>
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>
</div>
<div class="box-c m-large">
	<h2 class="title">Partners</h2>
	<div class="box-r wrap gap5">
		{#await partners()}
			<small>...</small>
				{:then data}
					{#each data as item}
						<div class="box-c partnerbox wd7">
							<a href={item.link} target="_blank" rel="noreferrer"><img src={item.image} alt={item.name} /></a>
						</div>
					{/each}
				{:catch error}
			<pre>{error}</pre>
		{/await}
	</div>
</div>

<div class="box-c pad80-b m-large">
	<h2 class="title">Team</h2>
	<div class="box-r allwrap gap3">
		{#await team()}
			<small>...</small>
			{:then data}
			{#each data as item}
			<div class="box-c teambox wd3">
				<img src={item.image} alt={item.name} />
				<h6>{item.name}</h6>
				<p class="red">{item.title}</p>
				<small class="grey">{item.bio}</small>
			</div>
			{/each}
			{:catch error}
			<pre>{error}</pre>
		{/await}
	</div>
</div>

<style>
.l2 h6 { 
	border-top: 1px solid #d7d7d7;
	padding-top: 16px;
}


.wd7 a img { object-fit: contain; width: 100%;}

.red { color: #fe4a49;}

.l0 {
	background-image: url('/images/herocovers/about-parambika.png');
}

.l4 .mind {
	transition: all 0.06s var(--cubed);
	transform-origin: center left;
	color: #a1a1a1;
}

.l4 .mind:hover { box-shadow: 4px 6px 10px #e1e1e1; border-left: 2px solid #fe4a49; padding-left: 24px;}
.mind a:hover { color: inherit;}

@media screen and (min-width: 768px) {
	.lx { height: 100%;}
	.l3 .box-c { border-top: 1px solid #e1e1e1; padding-top: 16px;}
	.link-heads { padding-top: 16px; padding-bottom: 16px; padding-left: 16px; transition: all 0.06s var(--cubee);}
	.link-heads h5 { margin: 0; text-transform: uppercase;}
.teambox img { object-fit:contain; width: 50%; margin-bottom: 24px;}
	.advisorbox img { margin-bottom: 16px;}
}

@media screen and (max-width: 767px) {
	.advisorbox img { object-fit: contain; width: 50%;}
	.advisorbox h6 { margin-top: 12px; margin-bottom: 0;}
	.partnerbox a img { width: 100%; object-fit: contain;}
	.partnerbox { width: 45%;}
	.teambox img { width: 30%; margin-bottom: 24px;}
	.teambox h6 { margin: 0;}
}

</style>