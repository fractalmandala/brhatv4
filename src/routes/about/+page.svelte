<script>
import supabase from '$lib/db'

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

<div class="loco" data-scroll-container>
<div class="col-full img-fix"></div>
<div class="col-full l1 pad4" data-scroll-section>
	<h1 data-textify>Bṛhat is a</h1>
	<h1 class="isred" data-textify>
	Culture Engine</h1>
	<p data-textify>
		To power creatives, research and design rooted
		in the Indian civilizational consciousness. We convert individual, institutional 
		and collective intent into action, across 3 dimensions:
	</p>
	<div class="r-r-c-c l2" data-textify>
		<div class="c-c-c-c l2row1">
			<h5>Create</h5>
			<p>
				- visual and literary stories;
				- design thinking and methods;
				- research output on education and ecology;
				- culture-rooted thought models
			</p>
		</div>
		<div class="c-c-c-c l2row2">
			<h5>Curate</h5>
			<p>
				- heritage experience journeys;
				- culture-fit in mass media;
				- NEP-relevant IKS curriculum;
				- culture rooting in product design and thinking
			</p>
		</div>
		<div class="c-c-c-c l2row3">
			<h5>Consult</h5>
			<p>
			- NEP-IKS implementation;
			- policy thinking on education and ecology;
			- organizational structure and leadership frameworks
			</p>			
		</div>
	</div>
	<h3 data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" data-textify>
		An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment.
	</h3>
	<h3 data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" data-textify>
		How does one go about doing that? At Bṛhat, we're acutely aware of three constraints:
	</h3>
	<div class="r-r-c-c l3" data-textify>
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
	<p data-textify>
		But the severest constraint of them all is Time, and more specifically – Moment. The time for a Culture Engine is now, because we are in the midst of a civilizational moment. What is a civilizational moment? How rare or regular are such moments? How must we respond to them?
	</p>
	<p data-textify>
		Read more on the need we see, why we think this is the time to address it, and about our self-identity:
	</p>
</div>
<div class="row-full l4 pad4" data-scroll-section>
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
<div class="c-c-c-c l5 pad4" data-scroll-section>
	<h2 data-textify>Advisory Board</h2>
	{#await advisors()}
	<small>...</small>
	{:then data}
	<div class="r-r-r-r l6">
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
<div class="c-c-c-c l7 pad4" data-scroll-section>
	<h2 data-textify>Partners</h2>
	{#await partners()}
	<small>...</small>
	{:then data}
	<div class="r-r-r-r l8">
		{#each data as item}
		<div class="c-c-c-c partners">
			<a href={item.link} target="_blank" rel="noreferrer"><img src={item.image} alt={item.name} /></a>
		</div>
		{/each}
	</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>
<div class="c-c-c-c l9 pad4" data-scroll-section>
	<h2 data-textify>The Team</h2>
	{#await team()}
	<small>...</small>
	{:then data}
	<div class="r-r-r-r l10">
			{#each data as item}
		<div class="c-c-c-c team-box">
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
.isred { color: #fe4a49 !important;}
.loco { position: relative;}
.col-full {
	background-image: url('/images/herocovers/about-parambika.png');
}
.l1 { background: white; justify-content: center; height: 100%; padding-top: 4em; padding-bottom: 2em; margin-bottom: -2em;}
.l1 h1 {
	font-size: 160px;
	margin: 4px 0 6px 0;
	letter-spacing: -2px;
	line-height: 1.125em;
	font-weight: 500;
}
.l1 p {
	font-size: 2em;
	margin-bottom: 1em;
}
.l2, .l3 { gap: 2em; padding-bottom: 2em; margin-top: 3em;}
.l2, .l3 { margin-bottom: 4em;}
.l2 .c-c-c-c, .l3 .c-c-c-c { border-top: 1px solid #474747;}
.l2 h5, .l3 h5, .l6 h5, .l10 h5 {
	font-size: 2em;
	font-weight: 500;
	margin-top: 1em;
	margin-bottom: 0;
}
.l2 p, .l3 p, .l6 p, .l10 p {
	font-size: 1.12em;
}
.l1 h3 {
	font-weight: 500;
	font-size: 3.2em;
	margin-top: 1em;
}
.l4 { 
	background: white;
	height: 100vh;
	margin-top: 0;
	padding-top: 2em;
}
.l4 h3 {
	font-weight: 500;
	font-size: 3.2em;
	border-bottom: 1px solid #474747;
	padding-bottom: 0.4em;
	margin: 0 0 0.8em 0;
}
.l4 h3:hover a {
	color: #fe4a49;
}
.advisors {
	width: calc(25% - 1em);
}
.l5, .l7, .l9 {
	background: white;
	padding-top: 2em;
	padding-bottom: 4em;
}
.l5 h2, .l7 h2, .l9 h2 {
	font-size: 4.8em;
	font-weight: 600;
	margin-bottom: 0.8em;
}
.l6, .l8 {
	gap: 1em;
}
.l10 { 
	flex-wrap: wrap;
	gap: 2em;
	justify-content: center;
}
.partners {
	width: calc(100%/6);
}
.partners img  {
	object-fit: contain;
	width: 100%;
}
.team-box {
	width: calc(33.33% - 2em);
	padding: 8px 1em;
}
.team-box img {
	object-fit: contain;
	width: 70%;
}

</style>