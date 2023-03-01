<script lang="ts">
// @ts-nocheck
import supabase from '$lib/db'
import { get } from 'svelte/store'
import { writable } from 'svelte/store'
const searchStore = writable('')
const resultsStore = writable([])
let loadingStore = false
let isRes = false

function toggleResult(){
	isRes = !isRes
}

const BolSearch = async(event) => {
	event.preventDefault()
	loadingStore = true
	let searchTerm = get(searchStore)
	let searchTerms = [searchTerm]
		searchTerms.push(searchTerm.replace('a', 'ā'))
    searchTerms.push(searchTerm.replace('i', 'ī'))
	
	searchTerms = Array.from(new Set(searchTerms))
	let results:any = []
	for (const term of searchTerms) {
		const { data, error } = await supabase
		.from('brhat-openlibrary')
		.select()
		.textSearch('fts',term)
		if (error) throw new Error(error.message)
		results = results.concat(data)
	}
	
	results = Array.from(new Set(results))
	resultsStore.set(results)
	loadingStore = false
}

</script>


<form>
	<label for="searchinput">Search Library</label>
	<input type="text" id="search-input" name="search" on:input={(e) => searchStore.set(e.target.value)} on:keydown={(e) => { if (e.key === 'Enter') { BolSearch(e)}}}>
	<input type="submit" value="submit" on:click|preventDefault={BolSearch} on:keydown|preventDefault={(e) => { if (e.key === 'Enter') BolSearch() }} on:click={toggleResult} on:keydown={(e) => { if (e.key === 'Enter') { toggleResult()}}}>

</form>

{#if loadingStore}
<small>...</small>
{/if}

{#if isRes}
<div class="box-c result-box">
	<cite class="wbold upper" on:click={toggleResult} on:keydown={(e) => { if (e.key === 'Enter') { toggleResult()}}}>CLOSE</cite>
	{#if $resultsStore.length > 0}
		{#each $resultsStore as item}
		<small class="w600 grey"><a href="/openlibrary/books/{item.slug}" on:click={toggleResult} on:keydown={(e) => { if (e.key === 'Enter') { toggleResult()}}}>{item.Text}<span class="grey2">, by {item.author}</span></a></small>
		{/each}
	{/if}
</div>
{/if}