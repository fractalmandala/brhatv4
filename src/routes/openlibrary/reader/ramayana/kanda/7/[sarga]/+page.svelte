<script lang="ts">
import { onMount } from 'svelte'
import supabase from '$lib/db'
import { page } from '$app/stores'
let insarga:any = []
let inverse:any = []
let x = ''
let showPadas:boolean = false

const sargaItems = async() => {
	const { data, error } = await supabase
		.from('db-ramayanaindex')
		.select()
		.eq('kanda','7')
		.eq('sarga',x)
		.eq('type','sargaverse')
		.order('id')
  if (error) throw new Error(error.message)
  return data
}

const sargaItemPadas = async() => {
	const { data, error } = await supabase
		.from('db-ramayana')
		.select()
		.eq('kanda','7')
		.eq('sarga',x)
		.order('id')
	  if (error) throw new Error(error.message)
  return data
}

function togglePadas(){
	showPadas = !showPadas
}

onMount(async() => {
	x = $page.url.pathname.substr(37,3)
	insarga = await sargaItems()
	inverse = await sargaItemPadas()
})

export let data:any
</script>

<div class="boxr bread-crumb">
	<cite><a href="/openlibrary/reader/ramayana/kanda/7">Kāṇḍa 7</a> <span> > </span><span class="rama">Sarga {data.sarga}</span></cite>
</div>
<div class="sargacontainer">
<h5>Verses of Kāṇḍa 7, Sarga {data.sarga}</h5>
<h6 on:click={togglePadas} on:keydown={togglePadas}>Toggle All Verses</h6>
	<div class="sargaverses">
		{#each insarga as item}
		<div class="versepadabox">
			<p><a href="/openlibrary/reader/ramayana/kanda/7/{data.sarga}/{item.verse}">{item.verse}</a></p>
		</div>	
		{/each}
	</div>
	{#if showPadas}
	<div class="eachverseofsarga">
		{#each inverse as padaitem}
		<div class="boxc"><a href="/openlibrary/reader/ramayana/kanda/{padaitem.slug}">
			<small>{padaitem.slug}</small>
			<div class="hindi">
				<p>{padaitem.devanagari}</p>
			</div>
			<h6>{padaitem.iast}</h6>
			</a>
		</div>
		{/each}
	</div>
	{/if}
</div>
