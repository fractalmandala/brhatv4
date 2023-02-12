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
import Partners from '$lib/components/headers/MainH1.svelte'
import Team from '$lib/components/headers/MainH1.svelte'
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

<div class="loco" data-scroll-section>
<div class="col-full img-fix"></div>
<div class="col-full pad4 l1">
	<h1 class="bigger1" data-textify>Bṛhat is a</h1>
	<h1 class="smaller1 isred" data-textify>
	Culture Engine</h1>
	<h3 data-textify>
		To power creatives, research and design rooted
		in the Indian civilizational consciousness. We convert individual, institutional 
		and collective intent into action, across 3 dimensions:
	</h3>
	<div class="r-r-c-c l2">
		<div class="c-c-c-c l2row1">
			<h5 data-textify>Create</h5>
			<p data-textify>
				- visual and literary stories;
				- design thinking and methods;
				- research output on education and ecology;
				- culture-rooted thought models
			</p>
		</div>
		<div class="c-c-c-c l2row2">
			<h5 data-textify>Curate</h5>
			<p data-textify>
				- heritage experience journeys;
				- culture-fit in mass media;
				- NEP-relevant IKS curriculum;
				- culture rooting in product design and thinking
			</p>
		</div>
		<div class="c-c-c-c l2row3">
			<h5 data-textify>Consult</h5>
			<p data-textify>
			- NEP-IKS implementation;
			- policy thinking on education and ecology;
			- organizational structure and leadership frameworks
			</p>			
		</div>
	</div>
	<h3 class="reducer" data-textify>
		An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment.
	</h3>
	<h3 class="reducer" data-textify>
		How does one go about doing that? At Bṛhat, we're acutely aware of three constraints:
	</h3>
	<div class="r-r-c-c l3">
		<div class="c-c-c-c l3col1">
			<h5>
				Civilization is Culture in Action
			</h5>
			<p>
				The civilizational moment needs rooting in Dharma - of this there is no doubt. Thus a core part of our work is culture creatives that draw from the deep pool of Dhārmika heritage.
			</p>
		</div>
		<div class="c-c-c-c l3col2">
			<h5>
				It Needs Culture-Compatible Policy
			</h5>
			<p>
				Radical reorientations are needed in education and ecology. To this end, our focus will be on generating policy currency for culture through frameworks, curriculum and more.
			</p>
		</div>
		<div class="c-c-c-c l3col3">
			<h5>
				The Work is Inter-Generational
			</h5>
			<p>
				It needs leadership with cultural-cognition to carry the Agni. This cognition needs to permeate even brand and organisation - essential quarters for the overton window shift.
			</p>
		</div>
	</div>
	<h3 class="cushion" data-textify data-scroll>
		But the severest constraint of them all is Time, and more specifically – Moment.
	</h3>
	<p class="cushion smallp" data-textify data-scroll>
		The time for a Culture Engine is now, because we are in the midst of a civilizational moment. What is a civilizational moment? How rare or regular are such moments? How must we respond to them?
		Read more on the need we see, why we think this is the time to address it, and about our self-identity:
	</p>
</div>
<div class="row-full l4 pad4">
	<h3 data-textify>
		<a href="/about/docs/svatahsiddha">
		Svataḥsiddha
		</a>
	</h3>
	<h3 data-textify>
		<a href="/about/docs/anatomy">Anatomy of a Civilizational Moment</a>
	</h3>
	<h3 data-textify>
		<a href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a>
	</h3>
	<h3 data-textify>
		<a href="/about/docs/namelogo">Nāmarūpa - our Name and Logo</a>
	</h3>
	<h3 data-textify>
		<a href="/about/docs/values">Pratijñā - Values We Hold Dear</a>
	</h3>
</div>
<MainH1>Advisors</MainH1>
<div class="c-c-c-c l5 pad4">
	{#await advisors()}
	<small>...</small>
	{:then data}
	<div class="r-r-r-r l6">
		{#each data as item}
		<div class="c-c-c-c col-type50">
			<img src={item.image} alt={item.name} />
			<h5 data-textify>{item.name}</h5>
			<p data-textify>{item.title}</p>
		</div>
		{/each}
	</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>
<Partners>Partners</Partners>
<div class="c-c-c-c l7 pad4">
	{#await partners()}
	<small>...</small>
	{:then data}
	<div class="r-r-r-r l8">
		{#each data as item}
		<div class="c-c-c-c col-typevary">
			<a href={item.link} target="_blank" rel="noreferrer"><img src={item.image} alt={item.name} /></a>
		</div>
		{/each}
	</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>
<Team>Team</Team>
<div class="c-c-c-c l9 pad4">
	{#await team()}
	<small>...</small>
	{:then data}
	<div class="r-r-r-r l10">
			{#each data as item}
		<div class="c-c-c-c simplex-card team-box">
			<img src={item.image} alt={item.name} />
			<h5 data-textify>{item.name}</h5>
			<small data-textify>{item.title}</small>
			<p data-textify>{item.bio}</p>
		</div>
		{/each}
	</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>

</div>

<style>

.img-fix { z-index: 0;}
h3 { color: #474747;}
p { color: #878787;}
.loco { position: relative;}
.col-full {
	background-image: url('/images/herocovers/about-parambika.png');
}
.l1 { background: white; justify-content: center; height: 100%; padding-top: 4em; padding-bottom: 2em; margin-bottom: -2em;}


.l2 .c-c-c-c, .l3 .c-c-c-c { border-top: 1px solid #474747;}

.l4 { 
	background: white;
	margin-top: 0;
	padding-top: 2em;
}
.l4 h3 {
	border-bottom: 1px solid #474747;
	padding-bottom: 0.4em;
}

.l4 h3 a { color: #272727;}
.l4 h3:hover a {
	color: #fe4a49;
}

.l5, .l7, .l9 {
	background: white;
	padding-top: 2em;
	padding-bottom: 4em;
}

.l6, .l8 {
	gap: 1em;
}
.l10 { 
	flex-wrap: wrap;
	gap: 2em;
	justify-content: center;
}


.l1 { position: relative;}



@media screen and (min-width: 768px) {
	.l2 { gap: 32px; padding-bottom: 2em; margin-top: 3em; margin-bottom: 64px; }
	.l2 h5, .l3 h5 { padding-top: 12px;}
	.l3 { padding-bottom: 10em; gap: 2em; margin-top: 3em; background: white; z-index: 3;}
	.l4 h3 {
		font-size: 3.2em;
	}
	.l4 {
		height: 100vh;
	}

	.cushion {
		background: white;
		z-index: 2;
		padding: 8px 16px;
	}

	.cushion.smallp {
		width: 70%;
	}

	.col-typevary img {
		object-fit: contain;
		width: 100%;
	}

	.simplex-card {
		width: calc(33.33% - 2em);
		padding: 8px 1em;
	}

	.simplex-card img {
		object-fit: contain;
		width: 70%;
	}
	
	.simplex-card small {
		font-weight: bold;
		text-transform: uppercase;
	}
	.simplex-card p {
		margin-top: 8px;
	}

	

	.reducer {
		width: 84%;
	}

	.smaller1 { font-size: 120px; line-height: 1.2em; font-weight: 500;}	
	.bigger1 { font-size: 120px; margin-bottom: 0; font-weight: 500;}
}

@media screen and (max-width: 767px) {
	.l2, .l3 { gap: 2em; padding-bottom: 16px; margin-top: 1em;}
	.l2 p, .l3 p { margin-bottom: 0;}
	.l2 h5, .l3 h5 { padding-top: 8px;}

	.l4 h3 {
		font-size: 1.6em;
	}
	.col-typevary {
		width: calc(50% - 2em);
	}

	.col-typevary img {
		object-fit: contain;
		width: 100%;
	}

	.col-type50 h5 {
		margin-top: 12px;
	}

	.col-type50 img {
		width: 70%;
	}

	.simplex-card {
		width: calc(100%);
	}

	.simplex-card img {
		width: 50%;
	}

	.simplex-card small {
		font-weight: bold;
	}
}

</style>