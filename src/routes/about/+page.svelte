<script>
import supabase from '$lib/db'
import AboutSide from '$lib/components/globals/AboutSide.svelte'

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

<div class="imagecontainer-hero"></div>
<div class="primecontainer-row">
<AboutSide></AboutSide>
<div class="pagesheet mx4">
<h4 class="cc">
B<span class="isred">ṛ</span>hat is a Culture Engine
</h4>
<h5 class="cc" id="actions">
To power creatives, research and design rooted
in the Indian civilizational consciousness. We convert individual, institutional 
and collective intent into action, across 3 dimensions:
</h5>
{#await brhatPillars()}
<small>...</small>
{:then data}
<div class="base-row pillars-row">
{#each data as item}
<div class="base-col pillars">
	<img src={item.image} alt={item.name}/>
	<h5 class="mt2">{item.name}</h5>
	<pre class="t-14">{item.content}</pre>
</div>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}
<h5 class="cc">
An engine is an instrument for transformation, and this engine is to build the self-perpetuating civilizational moment.
How does one go about doing that?<br><br>At B<span class="isred">ṛ</span>hat, we’re acutely aware of three constraints:
</h5>
{#await threePillars()}
<small>...</small>
{:then data}
<div class="base-row pillars-row">
{#each data as item}
<div class="base-col pillars">
	<img src={item.image} alt={item.name}/>
	<h5 class="mt2">{item.name}</h5>
	<pre class="t-14">{item.content}</pre>
</div>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}
<h4 class="isred cc" id="advisory">Advisory Board</h4>
{#await advisors()}
<small>...</small>
{:then data}
<div class="base-row advisors-row">
{#each data as item}
<div class="base-col advisors">
<img src={item.image} alt={item.name} />
<h5>{item.name}</h5>
<p>{item.title}</p>
</div>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}
<h4 class="isred cc" id="partners">Partner Brands</h4>
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
<h4 class="isred cc" id="team">Team</h4>
{#await team()}
<small>...</small>
{:then data}
<div class="base-row team-row">
{#each data as item}
<div class="base-col team">
<div class="base-col image">
	<img src={item.image} alt={item.name} />
</div>
<h5>{item.name}</h5>
<small>{item.title}</small>
<p>{item.bio}</p>
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
.base-row { justify-content: center;}
.pagesheet h4 { margin-bottom: 0; margin-top: 0.48em; }
.pillars-row { justify-content: center;}
.pillars img { object-fit: contain; width: 128px;}
.advisors img, .partners img { object-fit: contain; width: 100%;}
.advisors img { border-radius: 8px;}
.pillars { align-items: center; text-align: center; border: 1px solid #e1e1e1; border-radius: 4px;}
.pillars { background-color: #f7f7f7; transition: all 0.18s var(--cube3);}
.team small { color: var(--blue); font-weight: bold; text-transform: uppercase;}
.image { width: 200px; height: 200px; align-items: center; background-color: var(--red); border-radius: 100px; align-self: center;}
.team p { color: #676767;}
.image img { object-fit: contain; width: 100%; height: 100%;}
@media screen and (min-width: 768px) {
	.pillars { width: 30%; padding: 1rem;}
	.pillars:hover { background-color: white; box-shadow: var(--wshadow);}
	.pillars-row { margin-top: 2rem; padding: 0 3.2rem 4rem 3.2rem;}
	.advisors { width: 25%;}
	#advisory, #partners, #team { margin-bottom: 2rem; border-top: 1px solid #e1e1e1; padding-top: 1em;}
	.team { width: 30%; border: 1px solid #e1e1e1; border-radius: 4px; padding: 1rem;}
	.team-row { flex-wrap: wrap; padding: 0 3.2rem 4rem 3.2rem;}
}
</style>
