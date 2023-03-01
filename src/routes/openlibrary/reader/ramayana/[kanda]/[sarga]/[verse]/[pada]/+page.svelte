<script lang="ts">
import { onMount } from 'svelte'
import supabase from '$lib/db'
import { page } from '$app/stores'
export let data:any
let x = ''

export async function getLem() {
  const { data, error } = await supabase
    .from('db-ramayana-lemma')
    .select()
    .eq('slug',x)
    .order('id')
  if (error) throw new Error(error.message)
  return data
}

onMount(() => {
	x = $page.url.pathname.substr(29,9)
})

</script>


<div class="flexbox-r bread-crumb">
	<cite class="grey2"><a href="/openlibrary/reader/ramayana/{data.kanda}">Kāṇḍa {data.kanda}</a> <span> > </span>Sarga {data.sarga} <span> > </span>Verse {data.verse} <span class="soft"> > <b>Pāda {data.pada}</b></span></cite>
</div>
<div class="flexbox-c results">
	<div class="hindi">
		<h3>{data.devanagari}</h3>
	</div>
	<h4 class="w400 grey">{data.iast}</h4>
	<small>{x}</small>
</div>
<div class="flexbox-c lemmas">
	{#await getLem()}
	<small>...</small>
	{:then data}
		{#each data as item}
			<p>{item.form}</p>
		{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>


<style>

.bread-crumb {
	border-bottom: 1px solid #f1f1f1;
}

@media screen and (min-width: 900px) {
	.results {
		padding-top: 32px;
	}
}
</style>