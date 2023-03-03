<script>
import supabase from '$lib/db'
import { reveal } from 'svelte-reveal'

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

<div class="full-page formatting">
	<div class="no-side">
		<div class="gp1 x1 bdt">
			<h1>Bṛhat is a <br><span class="red m-top-zero">Culture Engine</span></h1>
			<h4 class="wide75">
				To power creatives, research and design rooted in the Indian civilizational consciousness. We
				convert individual, institutional and collective intent into action, across 3 dimensions.
			</h4>
		</div>
		<div class="gp3 x2">
			<div class="cols3" use:reveal={{ transition: "slide", x: -150, blur: 1, duration: 300, threshold: 0.1, easing: "easeInCirc"}}>
				<h6 class="w600 strong">Create</h6>
				<p class="w400 grey">
					- visual and literary stories;<br>
					- design thinking and methods;<br>
					- research output on education and ecology;<br>
					- culture-rooted thought models
				</p>
			</div>
			<div class="cols3" use:reveal={{ transition: "slide", x: -150, duration: 300, delay: 20, blur: 1, threshold: 0.1, easing: "easeInCirc"}}>
				<h6 class="w600 strong">Curate</h6>
				<p class="w400 grey">
						- heritage experience journeys;<br>
						- culture-fit in mass media;<br>
						- NEP-relevant IKS curriculum;<br>
						- culture rooting in product design and thinking
				</p>
			</div>
			<div class="cols3" use:reveal={{ transition: "slide", x: -150, duration: 300, delay: 40, blur: 1, threshold: 0.1, easing: "easeInCirc"}}>
				<h6 class="w600 strong">Consult</h6>
				<p class="w400 grey">
					- NEP-IKS implementation;<br>
					- policy thinking on education and ecology;<br>
					- organizational structure and leadership frameworks
				</p>
			</div>
		</div>
		<div class="gp1 x3 bdt">
			<h4 class="wide75 ptt40">
				An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment. How does one go about doing that? At Bṛhat, we're acutely aware of three constraints:
			</h4>
		</div>
		<div class="gp3 x4">
			<div class="cols3" use:reveal={{ transition: "slide", x: 150, blur: 1, easing: "easeInCirc"}}>
				<h6 class="w600 strong">
					Civilization is Culture in Action
				</h6>
				<p class="w400 grey">
					The civilizational moment needs rooting in Dharma - of this there is no doubt. Thus a core part of our work is culture creatives that draw from the deep pool of Dhārmika heritage.
				</p>
			</div>
			<div class="cols3" use:reveal={{ transition: "slide", x: 150, delay: 0, blur: 1, easing: "easeInCirc"}}>
				<h6 class="w600 strong">
					It Needs Culture-Compatible Policy
				</h6>
				<p class="w400 grey">
					Radical reorientations are needed in education and ecology. To this end, our focus will be on generating policy currency for culture through frameworks, curriculum and more.
				</p>
			</div>
			<div class="cols3" use:reveal={{ transition: "slide", x: 150, delay: 0, blur: 1, easing: "easeInCirc"}}>
				<h6 class="w600 strong">
					The Work is Inter-Generational
				</h6>
				<p class="w400 grey">
					It needs leadership with cultural-cognition to carry the Agni. This cognition needs to permeate even brand and organisation - essential quarters for the overton window shift.
				</p>
			</div>
		</div>
		<div class="gp1 pt32 x5">
			<h5 class="wide75">
				But the severest constraint of them all is Time, and more specifically – <span class="soft">Moment.</span>
			</h5>
			<h4 class="wide75">
				The time for a Culture Engine is now, because we are in the midst of a civilizational moment. What is a civilizational moment? How rare or regular are such moments? How must we respond to them?
			</h4>
			<h4 class="wide75">
				Read more on the need we see, why we think this is the time to address it, and about our self-identity.
			</h4>
		</div>
		<div class="gp1 x6 bdt pt64 for-links">
			<h2><a href="/about/docs/svatahsiddha">svataḥsiddha</a></h2>
			<h2><a href="/about/docs/anatomy">civilizational moment</a></h2>
			<h2><a href="/about/docs/whatkrishnameanstous">what śrī kṛṣṇa means to us</a></h2>
			<h2><a href="/about/docs/namelogo">nāmarūpa - name and logo</a></h2>
			<h2><a href="/about/docs/values">pratijñā - values</a></h2>
			<h2><a href="/about/#advisors">advisors</a></h2>
			<h2><a href="/about/#partners">partners</a></h2>
			<h2><a href="/about/#team">team</a></h2>
		</div>
		<div class="the-title" id="advisors">
			<h2>
			Advisors
			</h2>
		</div>
		<div class="gp4 x7">
			{#await advisors()}
			<small>...</small>
			{:then data}
			{#each data as item}
				<div class="cols4 advisorbox">
					<img src={item.image} alt={item.name} />
					<h6>{item.name}</h6>
					<small class="grey">{item.title}</small>
				</div>
			{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>
		<div class="the-title" id="partners">
			<h2>
				Partners
			</h2>
		</div>
		<div class="boxr allwrap x8">
			{#await partners()}
				<small>...</small>
					{:then data}
						{#each data as item}
						<div class="boxc partners">
							<a href={item.link} target="_blank" rel="noreferrer"><img src={item.image} alt={item.name} /></a>
						</div>
						{/each}
					{:catch error}
				<pre>{error}</pre>
			{/await}
		</div>
		<div class="the-title" id="team">
			<h2>
				Team
			</h2>
		</div>
		<div class="gp4 allwrap x9">
			{#await team()}
				<small>...</small>
				{:then data}
					{#each data as item}
						<div class="cols4">
							<img src={item.image} alt={item.name} />
							<h6>{item.name}</h6>
							<cite class="soft">{item.title}</cite>
							<small class="grey">{item.bio}</small>
						</div>
					{/each}
				{:catch error}
				<pre>{error}</pre>
			{/await}
		</div>
	</div>
</div>

<style>

.for-links a:hover {
	color: var(--soft)
}

.for-links h2:hover {
	border-bottom: 1px solid #a1a1a1;
}

.the-title {
	border-left: 4px solid #FE5F55;
	margin-left: -1px;
}

.wd7 a img { object-fit: contain; width: 100%;}


.l0 {
	background-image: url('/images/herocovers/about-parambika.png');
}



@media screen and (min-width: 900px) {
	.x8 {
		padding-right: 64px;
	}
	.x8 .boxc {
		width: calc(100%/7)
	}
	.x8 img {
		object-fit: cover;
		width: 90%;
		height: 160px;
	}
}

@media screen and (min-width: 768px) {
	.l0 { height: 100vh;}
	.x2, .x3, .x4 { margin-top: 24px}
	.x9 .cols4 img { width: 50%;}
	.x8 {
		padding-right: 40px;
		padding-left: 16px;
	}
	.x8 .boxc {
		width: calc(100%/7)
	}
	.x8 img {
		object-fit:cover;
		width: 90%;
		height: 104px
	}

	.advisorbox img { margin-bottom: 16px;}
}

@media screen and (max-width: 767px) {
	.l0 { height: 100vh;}
	.advisorbox img { object-fit: cover; width: 100%; height: 240px;}
	.x2, .x4 { margin-top: 24px;}
	.x8 {
		padding-right: 32px;
		padding-left: 32px;
	}
	.x8 .boxc { width: 25%;}
	.x8 .boxc img { object-fit: cover; width: 60%;}
	.x9 .cols4 img { width: 50%;}
}

@media screen and (max-width: 575px) {
	.x8 .boxc { width: 25%;}
	.x8 .boxc img { width: 80%;}
.x9 .cols4 img { width: 30%;}
}

</style>