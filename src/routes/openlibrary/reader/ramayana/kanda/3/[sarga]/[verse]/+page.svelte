<script lang="ts">
import { onMount } from 'svelte'
import supabase from '$lib/db'
import { page } from '$app/stores'
let x = ''
let sarga = ''
let inverse:any = []

const verseItems = async() => {
	const { data, error } = await supabase
		.from('db-ramayana')
		.select()
		.eq('kanda','3')
		.eq('sarga',sarga)
		.eq('verse',x)
		.order('id')
  if (error) throw new Error(error.message)
  return data
}
onMount(async() => {
	const pathy = $page.url.pathname;
	const matchy = pathy.match(/\/openlibrary\/reader\/ramayana\/kanda\/(\d{1,3})\/(\d{1,3})\/(\d{1,3})/);
  if (matchy) {
    sarga = matchy[2];
    x = matchy[3];
  }
	inverse = await verseItems()
})

export let data:any

</script>

<div class="boxr bread-crumb">
	<cite><a href="/openlibrary/reader/ramayana/kanda/3">Kāṇḍa 3</a> <span> > </span><a href="/openlibrary/reader/ramayana/kanda/3/{data.sarga}">Sarga {data.sarga} </a><span> > </span><span class="rama">Verse {data.verse}</span></cite>
</div>
<div class="sargacontainer">
<h5>Pādas of Kāṇḍa 3, Sarga {data.sarga}, Verse {data.verse}</h5>
<div class="eachverseofsarga">
{#each inverse as item}
	<div class="boxc"><a href="/openlibrary/reader/ramayana/kanda/{item.slug}">
		<small>{item.slug}</small>
		<div class="hindi">
			<p>{item.devanagari}</p>
		</div>
		<h6>{item.iast}</h6></a>
	</div>
{/each}
</div>
</div>
