<script>
import supabase from '$lib/db'
import AboutSide from '$lib/components/globals/AboutSide.svelte'

async function brhatPillars() {
const { data , error } = await supabase
.from('brhat-pillars')
.select()
.eq('type','actions')
if (error) throw new Error(error.message)
return data
}

async function threePillars() {
const { data, error } = await supabase
  .from('brhat-pillars')
  .select()
	.eq('type','areas')
  .order('id')
  if (error) throw new Error(error.message)
  return data
  }

</script>

<div class="imagecontainer-hero"></div>
<div class="primecontainer-row">
<AboutSide></AboutSide>
<div class="pagesheet">
<h4 class="cc px4">
B<span class="isred">ṛ</span>hat is a Culture Engine
</h4>
<h5 class="cc px4" id="actions">
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
	<h5 class="px-2 mt-2">{item.name}</h5>
	<pre class="t-14 px-2">{item.text}</pre>
</div>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}
<h5 class="cc px4">
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
	<h5 class="px-2 mt-2">{item.name}</h5>
	<pre class="t-14 px-2">{item.text}</pre>
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
.pagesheet h4 { margin-bottom: 0; }
.pillars-row { justify-content: center;}
.pillars img { object-fit: contain; width: 128px;}
.pillars { align-items: center; text-align: center; border: 1px solid #e1e1e1; border-radius: 4px;}
.pillars { background-color: #f7f7f7; transition: all 0.18s var(--cube3);}
@media screen and (min-width: 768px) {
	.pillars { width: 30%; padding: 1rem;}
	.pillars:hover { background-color: white; box-shadow: var(--wshadow);}
	.pillars-row { margin-top: 2rem; padding: 0 3.2rem 4rem 3.2rem;}
}
</style>
