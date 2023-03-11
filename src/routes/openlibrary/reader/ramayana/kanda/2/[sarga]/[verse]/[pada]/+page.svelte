<script lang="ts">
import { afterUpdate } from 'svelte'
import supabase from '$lib/db'
import { fly } from 'svelte/transition'
import { page } from '$app/stores'
import Dictionary from '$lib/components/reader/Dictionary.svelte'

export let data:any
let x = ''
let lems:any = []
let isExpand:boolean = false

function toggleExpand(){
	isExpand = !isExpand
}

const loadLemma = async() => {
	const { data, error } = await supabase
    .from('lemramayanak2')
    .select()
    .eq('slug',x)
    .order('id')
  if (error) throw new Error(error.message)
  return data
}

afterUpdate(async() => {
	x = $page.url.pathname.substr(35,14)
	lems = await loadLemma()
})



</script>


<div class="boxr bread-crumb">
	<cite><a href="/openlibrary/reader/ramayana/kanda/{data.kanda}">Kāṇḍa {data.kanda}</a> <span> > </span><a href="/openlibrary/reader/ramayana/kanda/{data.kanda}/{data.sarga}">Sarga {data.sarga} </a><span> > </span><a href="/openlibrary/reader/ramayana/kanda/{data.kanda}/{data.sarga}/{data.verse}"> Verse {data.verse} </a><span class="rama"> > <b>Pāda {data.pada}</b></span></cite>
</div>
<div class="boxc results">
	<div class="hindi">
		<h3>{data.devanagari}</h3>
		<h5>{data.iast}</h5>
	</div>
</div>
<div class="boxr navigationbuttonsrow">
	<button class="pagination"><a href="/openlibrary/reader/ramayana/kanda/{data.previousslug}">PREV</a></button>
	<button class="pagination"><a href="/openlibrary/reader/ramayana/kanda/{data.nextslug}">NEXT</a></button>
</div>
	<div class="expansiondrop">
  <div class="dropdownarea">
    <div class="dropheader">
			<h4>Words of this Pāda</h4>
		</div>
    <div class="dropicon" on:click={toggleExpand} on:keydown={toggleExpand}>
			{#if isExpand}
			<svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path id="pullup" d="M3.80128 24.1499L0.97998 21.5071L12.98 10.2803L24.98 21.5071L22.1587 24.1462L12.974 15.5547L3.7893 24.1462L3.80128 24.1499ZM3.80128 14.0195L0.97998 11.3748L12.98 0.149902L24.98 11.3748L22.1587 14.0157L12.974 5.4243L3.7893 14.0157L3.80128 14.0195Z" fill="black"/>
			</svg>
			{:else}
			<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path id="pushdown" d="M11.7255 23.8531L0.186279 12.7577L2.90116 10.1454L11.7332 18.6377L20.5652 10.1454L23.2647 12.7577L11.7274 23.8531H11.7255ZM11.7255 13.8395L0.186279 2.7423L2.90116 0.131836L11.7332 8.62414L20.5652 0.131836L23.2647 2.7423L11.7274 13.8377L11.7255 13.8395Z" fill="black"/>
			</svg>
			{/if}
		</div>
  </div>
  <div class="captioner">
		<small class="std-small">{x}</small>
	</div>
</div>
{#if isExpand}
<div class="lemmas">
	{#if lems && lems.length > 0}
		{#each lems as item, i}
			<div class="lemmaextended" in:fly={{ delay: i + 40}} out:fly>
				<div class="extend1 boxc">
					<small>{item.id}</small>
					<h6>{item.form}</h6>
					<div class="withborder"><p>{item.lemma}</p></div>
					<div class="insmall">
						<small>UPOS: {item.upos}</small><br>
					</div>
				</div>
				<div class="extend2 boxc">
					<cite>Other: {item.feats}</cite>
					<Dictionary y={item.lemma}></Dictionary>
				</div>
			</div>
		{/each}
	{:else}
	<div class="lemmaextended">
		<small>(If blank, the data is currently missing. We are working on ensuring maximum data parsing.)</small>
	</div>
	{/if}
</div>
{/if}
