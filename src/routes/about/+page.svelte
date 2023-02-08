<script>
import { onMount } from 'svelte'
import Animations from "textify.js";
import supabase from '$lib/db'

onMount(() => {
const { Textify } = Animations;
	new Textify({
		duration: 300,
		threshold: 0.3,
		once: false
	})
	})

async function brhatPillars() {
const { data , error } = await supabase
.from('brhat-about')
.select()
.eq('type','actions')
.order('sequence')
if (error) throw new Error(error.message)
return data
}

async function threePillars() {
const { data, error } = await supabase
  .from('brhat-about')
  .select()
	.eq('type','areas')
  .order('sequence')
  if (error) throw new Error(error.message)
  return data
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

<div data-scroll-container>
<div class="imagecontainer-hero" data-scroll-section></div>
<div class="c-c-c-c x0" data-scroll-section>
	<h1 id="lead-text" data-scroll data-scroll-speed="1">
		B<span class="isred">ṛ</span>hat is a Culture Engine
	</h1>
	<h5 id="actions" data-textify>
		To power creatives, research and design rooted
		in the Indian civilizational consciousness. We convert individual, institutional 
		and collective intent into action, across 3 dimensions:
	</h5>
	<div class="r-r-r-r first-one" data-scroll data-scroll-speed="4">
		{#await brhatPillars()}
		<small>...</small>
		{:then data}
		{#each data as item}
			<div class="c-c-c-c a-box">
				<h5 data-textify>{item.name}</h5>
				<pre data-textify>{item.content}</pre>
			</div>
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>
</div>

<div class="c-c-c-c x2" data-scroll-section>
	<h1 id="lead-text" data-scroll data-scroll-speed="6" data-scroll-direction="horizontal">
	An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment.
	</h1>
	<h5 data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal" data-textify>
	How does one go about doing that? At Bṛhat, we’re acutely aware of three constraints:
	</h5>
</div>

<div class="r-r-r-r second-one" data-scroll-section>
	{#await threePillars()}
	<small>...</small>
	{:then data}
	{#each data as item}
	<div class="c-c-c-c a-box box2" data-scroll data-scroll-class="whensee">
		<img src={item.image} alt={item.name}/>
		<h5 data-scroll data-textify>{item.name}</h5>
		<pre data-scroll data-textify>{item.content}</pre>
	</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>
	

<!-------------------------------------------------------------------------------------------------->
<div class="c-c-c-c x3" data-scroll-section>
	<h1 data-scroll data-scroll-speed="-3" id="beliefs">More About Us</h1>
	<div class="r-r-r-r third-one" data-scroll data-scroll-speed="1">
		<a data-textify href="/about/docs/svatahsiddha">Svataḥsiddha - the Seed of Our Being</a>
		<a data-textify href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a>
		<a data-textify href="/about/docs/anatomy">Anatomy of a Civilizational Moment</a>
		<a data-textify href="/about/docs/namelogo">Nāmarūpa - About Our Name and Logo</a>
		<a data-textify href="/about/docs/values">Pratijñā - Values We Hold Dear</a>
	</div>
</div>
<!-------------------------------------------------------------------------------------------------->
<div class="c-c-c-c x4" data-scroll-section>
	{#await advisors()}
	<small>...</small>
	{:then data}
	<h1 data-scroll data-scroll-speed="1" id="advisory">Advisory Board</h1>
	<div class="r-r-r-r advisors-row">
		{#each data as item}
		<div class="c-c-c-c advisors">
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
<!-------------------------------------------------------------------------------------------------->
<div class="c-c-c-c x5" data-scroll-section>
	<h1 id="partners">Partner Brands</h1>
	{#await partners()}
	<small>...</small>
	{:then data}
	<div class="base-row partners-row">
		{#each data as item}
		<div class="base-col partners">
			<a href={item.link} target="_blank" rel="noreferrer"><img src={item.image} alt={item.name} /></a>
		</div>
		{/each}
	</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>
<!-------------------------------------------------------------------------------------------------->
<div class="c-c-c-c x6" data-scroll-section>
	{#await team()}
	<small>...</small>
	{:then data}
	<h1 id="team">Team</h1>
	<div class="r-r-r-r team-row" data-scroll>
		{#each data as item}
		<div class="c-c-c-c team-box" data-scroll data-scroll-speed="2">
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
.x4, .x0 {
	min-height: 100vh;
}

.x2 { background: var(--beau);}

.x6 { min-height: 300vh;}

.second-one, .x3, .x4 { background: white;}

.x2 #lead-text { color: #fe4a49; text-align: left;}
.x2 h5 { text-align: left; color: white;}
.imagecontainer-hero {
	background-image: url('/images/herocovers/about-parambika.png');
}

.base-row { justify-content: center; width: 100%; background: white;}
.advisors img, .partners img { object-fit: contain; width: 100%;}
.advisors img { border-radius: 8px;}
.x0 h5, .x2 h5 { font-weight: 300;}

.x0, .x3, .x4, .x5 { background: white;}
.team-box h5, .team-box small, .team-box p { color: #272727;}
.x6 { height: max-content;}
.x6 h1 {color: #272727;}

@media screen and (min-width: 768px) {
	.base-row { gap: 32px;}
	.advisors { width: 25%;}
	#advisory, #partners, #team { margin-bottom: 2rem; border-top: 1px solid #e1e1e1; padding-top: 1em;}
	#team, #partners, #advisory, #lead-text, #beliefs { text-align: center;}
	#lead-text { margin-bottom: 0;}
	#actions { margin-top: 0; width: 60%;}
	.x0 { justify-content: center; text-align: left; align-items: flex-start; padding: 0 6vw;}
	.x0 h1 { font-size: 3em;}
	.a-box { width: 33%;}
	.a-box h5 { font-size: 1.2em; font-weight: bold;}
	.first-one { gap: 2em;}
	.x2 { padding-bottom: 2em;}
	.second-one .a-box img {
		object-fit: contain;
		width: 40%;
		margin-left: auto;
		margin-right: auto;
	}
	.second-one { gap: 2em; padding-top: 2em; padding-bottom: 2em; padding-left: 6vw; padding-right: 6vw;}
	.box2 h5, .box2 pre { text-align: center;}
	.third-one { width: 100%; gap: 2em; justify-content: center; padding-left: 6vw; padding-right: 6vw;}
	.third-one a { font-size: 1.28em; text-align: center; font-weight: bold;}
	.x3 { padding-bottom: 6em;}
	.x4, .x5 { padding-left: 6vw; padding-right: 6vw; padding-bottom: 6em; }
	.advisors-row { gap: 2em;}
	.team-row { width: 100%; padding-left: 6vw; padding-right: 6vw; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 2em;}
	.team-box { width: 30%; height: 100%; }
	.team-box img { object-fit: contain; width: 50%;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {

	.partners-row { flex-wrap: wrap; justify-content: center;}
	.partners { width: calc(100%/5);}
	.partners img { width: 120px;}
	.team-row { flex-wrap: wrap;}

	.base-row { gap: 20px;}

	.advisors { width: 20%;}	
	#team, #partners, #advisory, #lead-text, #beliefs { text-align: center;}
}

@media screen and (max-width: 575px) {
	.team-row { flex-wrap: wrap;}

	.advisors { width: 45%;}
	.advisors-row, .partners-row { flex-wrap: wrap; gap: 1rem;}
	.partners { width: 30%; }
	#team, #partners, #advisory, #lead-text, #beliefs { text-align: left;}
	#lead-text { margin-bottom: 0;}
	#actions { margin-top: 1rem;}

}
</style>
