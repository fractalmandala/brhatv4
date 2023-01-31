<script>
import supabase from '$lib/db'
import HeadAbout from '$lib/components/headers/HeadAbout.svelte'

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


<HeadAbout></HeadAbout>
<div class="imagecontainer-hero"></div>
<div class="pagesheet px2">
<div class="corp-docs">
<h4 id="lead-text">
	B<span class="isred">ṛ</span>hat is a Culture Engine
</h4>
<h5 class="cc-left" id="actions">
	To power creatives, research and design rooted
	in the Indian civilizational consciousness.<br><br>We convert individual, institutional 
	and collective intent into action, across 3 dimensions:
</h5>
{#await brhatPillars()}
	<small>...</small>
	{:then data}
	<div class="base-row pillars-row">
		{#each data as item, index}
		<div class="base-col card pillars" data-aos="flip-up" data-aos-delay={50 + (index * 100)}>
			<img src={item.image} alt={item.name}/>
			<h5 class="mt2 cc-left isblack wd100">{item.name}</h5>
			<pre class="cc-left in-card">{item.content}</pre>
		</div>
		{/each}
	</div>
{:catch error}
<pre>{error}</pre>
{/await}
<h5 class="cc-left" data-aos="fade-up">
An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment.<br><br>
How does one go about doing that?<br><br>At B<span class="isred">ṛ</span>hat, we’re acutely aware of three constraints:
</h5>
{#await threePillars()}
<small>...</small>
{:then data}
<div class="base-row pillars-row">
{#each data as item, index}
<div class="base-col card pillars" data-aos="flip-up" data-aos-delay={50 + (index * 100)}>
	<img src={item.image} alt={item.name}/>
	<h5 class="mt2 cc-left">{item.name}</h5>
	<pre class="cc-left in-card">{item.content}</pre>
</div>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}

<!-------------------------------------------------------------------------------------------------->
<h4 id="beliefs" data-aos="fade-up">Our Beliefs</h4>
<div class="base-row buttons-row">
<button class="outlinebutton"><a href="/about/docs/svatahsiddha">Svataḥsiddha</a></button>
<button class="outlinebutton"><a href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a></button>
<button class="outlinebutton"><a href="/about/docs/anatomy">Anatomy of a Civilizational Moment</a></button>
</div>

<!-------------------------------------------------------------------------------------------------->
<h4 id="advisory" data-aos="fade-up">Advisory Board</h4>
{#await advisors()}
<small>...</small>
{:then data}
<div class="base-row advisors-row">
{#each data as item, index}
<div class="base-col advisors" data-aos="flip-up" data-aos-delay={50 + (index * 100)}>
<img src={item.image} alt={item.name} />
<h5>{item.name}</h5>
<p class="in-card">{item.title}</p>
</div>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}

<!-------------------------------------------------------------------------------------------------->
<h4 id="partners" data-aos="fade-up">Partner Brands</h4>
{#await partners()}
<small>...</small>
{:then data}
<div class="base-row partners-row">
{#each data as item, index}
<div class="base-col partners" data-aos="flip-up" data-aos-delay={50 + (index * 100)}>
<a href={item.link} target="_blank" rel="noreferrer"><img src={item.image} alt={item.name} /></a>
</div>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}

<!-------------------------------------------------------------------------------------------------->
<h4 id="team" data-aos="fade-up">Team</h4>
{#await team()}
<small>...</small>
{:then data}
<div class="base-row team-row">
{#each data as item, index}
<div class="base-col team" data-aos="flip-up" data-aos-delay={50 + (index * 100)}>
	<div class="base-col image">
	<img src={item.image} alt={item.name} />
	</div>
	<h5 class="cc-left">{item.name}</h5>
	<small class="cc-left">{item.title}</small>
	<p class="cc-left in-card">{item.bio}</p>
</div>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}
</div>
</div>

<style>
.imagecontainer-hero {
	background-image: url('/images/herocovers/about-parambika.png');
}
.corp-docs { align-items: center;}
.pagesheet { align-items: center;}
.base-row { justify-content: center; width: 100%;}
.pillars img { object-fit: contain; width: 128px;}
.advisors img, .partners img { object-fit: contain; width: 100%;}
.advisors img { border-radius: 8px;}
.pillars { align-items: center; text-align: center; border: 1px solid #e1e1e1; border-radius: 4px;}
.pillars { background-color: #f7f7f7; transition: all 0.18s var(--cube3);}
.team small { color: var(--blue); font-weight: bold; text-transform: uppercase;}
.image { width: 100%; align-items: center; border-radius: 100px;}
.team p { color: #676767;}
.image img { object-fit: contain; width: 100%; height: 100%;}
.pagesheet h4 { margin-top: 3rem; margin-bottom: 1.6rem; border-top: 1px solid #e1e1e1; padding-top: 1rem; width: 100%;}

@media screen and (min-width: 768px) {
	.pillars { width: 30%;}
	.pillars:hover { background-color: white; box-shadow: var(--wshadow);}
	.pillars-row { margin-top: 2rem; padding: 0 0 4rem 0;}
	.base-row { gap: 32px;}
	.advisors { width: 25%;}
	#advisory, #partners, #team { margin-bottom: 2rem; border-top: 1px solid #e1e1e1; padding-top: 1em;}
	.team { width: 30%; border-radius: 4px;}
	.team-row { flex-wrap: wrap; padding: 0 0 4rem 0;}
	.image { align-self: center; width: 48%;}
	#team, #partners, #advisory, #lead-text, .cc-left, #beliefs { text-align: center;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.in-card { font-size: 14px;}
	.partners-row { flex-wrap: wrap; justify-content: center;}
	.partners { width: calc(100%/5);}
	.partners img { width: 120px;}
	.team-row { flex-wrap: wrap;}
	.team, .pillars { width: 30%;}
	.base-row { gap: 20px;}
	.pillars-row, .advisors-row, .partners-row, .team-row { gap: 24px;}
	.pillars-row { padding: 0 0 4rem 0;}
	.advisors { width: 20%;}	
	.image { align-self: center; width: 64%;}
	#team, #partners, #advisory, #lead-text, .cc-left, #beliefs { text-align: center;}
}

@media screen and (max-width: 575px) {
	.team-row { flex-wrap: wrap;}
	.team { width: 100%; padding-bottom: 1rem;}
	.team .image { width: 24%;}
	.pillars { width: 100%; margin-bottom: 1rem; padding: 1rem; align-items: flex-start;}
	.pillars-row { flex-wrap: wrap; padding-bottom: 2rem;}
	.base-col h5 { margin-bottom: 0;}
	.advisors { width: 45%;}
	.advisors-row, .partners-row { flex-wrap: wrap; gap: 1rem;}
	.partners { width: 30%; }
	#team, #partners, #advisory, #lead-text, .cc-left, #beliefs { text-align: left;}
	#lead-text { margin-bottom: 0;}
	#actions { margin-top: 1rem;}
	.outlinebutton { width: 100%; margin-bottom: 1rem;}
	.buttons-row { flex-wrap: wrap;}
}
</style>
