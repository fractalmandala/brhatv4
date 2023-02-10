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
	<h1 class="bigger1" data-textify>Bṛhat is a</h1>
	<h1 class="smaller1 isred" data-textify>
	Culture Engine</h1>
	<h3 data-textify>
		To power creatives, research and design rooted
		in the Indian civilizational consciousness. We convert individual, institutional 
		and collective intent into action, across 3 dimensions:
	</h3>
	<img data-scroll data-scroll-speed="6" class="aboutim1" src="/images/corpimages/about1.png" alt="aboutone" />
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
	<h3 class="reducer" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" data-textify>
		An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment.
	</h3>
	<h3 class="reducer" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" data-textify>
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
	<img data-scroll data-scroll-speed="-5" class="aboutim2" src="/images/corpimages/logo-culture.png" alt="icon"/>
	<h3 class="cushion" data-textify data-scroll data-scroll-speed="4">
		But the severest constraint of them all is Time, and more specifically – Moment. The time for a Culture Engine is now, because we are in the midst of a civilizational moment. What is a civilizational moment? How rare or regular are such moments? How must we respond to them?
	</h3>
	<h3 class="cushion" data-textify data-scroll data-scroll-speed="3">
		Read more on the need we see, why we think this is the time to address it, and about our self-identity:
	</h3>
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
<div class="c-c-c-c l7 pad4" data-scroll-section>
	<h2 data-textify>Partners</h2>
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
<div class="c-c-c-c l9 pad4" data-scroll-section>
	<h2 data-textify>The Team</h2>
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

h3 { color: #474747;}

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

.aboutim1 {
	object-fit: contain;
	width: 600px;
	height: 800px;
	margin-left: auto;
}

.l1 { position: relative;}
.aboutim1 { position: absolute; top: 30%; right: 2%;}
.aboutim2 {
	object-fit: contain;
	width: 500px;
	margin-right: auto;	
	z-index: 1;
}


@media screen and (min-width: 768px) {
	.l2 { gap: 2em; padding-bottom: 2em; margin-top: 3em; }
	.l2 { margin-bottom: 10em;}
	.l2 h5, .l3 h5 { padding-top: 12px;}
	.l3 { padding-top: 10em; padding-bottom: 10em; gap: 2em; margin-top: 3em; background: white; z-index: 3;}
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

	h2 {
		margin-bottom: 32px;
	}

	.reducer {
		width: 64%;
	}

	.smaller1 { font-size: 160px; line-height: 1.2em;}	
	.bigger1 { font-size: 160px; margin-bottom: 0;}
}

@media screen and (max-width: 767px) {
	.l2, .l3 { gap: 2em; padding-bottom: 16px; margin-top: 1em;}
	.l2 p, .l3 p { margin-bottom: 0;}
	.l2 h5, .l3 h5 { padding-top: 8px;}
	h2 {
		margin-bottom: 32px;
	}
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