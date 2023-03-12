
<script lang="ts">
import supabase from '$lib/db'
import { get } from 'svelte/store'
import { writable } from 'svelte/store'
import { scale, slide } from 'svelte/transition'

const searchStore = writable('')
const resultsStore = writable([])
let loadingStore = false;

const searchWords = async () => {
  loadingStore = true;
  let searchTerm = get(searchStore)
  
  // Create array of possible search terms
  let searchTerms = [searchTerm]
  searchTerms.push(searchTerm.replace('a', 'ā'))
  searchTerms.push(searchTerm.replace('i', 'ī'))
  searchTerms.push(searchTerm.replace('u', 'ū'))
  searchTerms.push(searchTerm.replace('s', 'ś'))
  searchTerms.push(searchTerm.replace('s', 'ṣ'))
  searchTerms.push(searchTerm.replace('r', 'ṛ'))
  searchTerms.push(searchTerm.replace('t', 'ṭ'))
  searchTerms.push(searchTerm.replace('d', 'ḍ'))
  searchTerms.push(searchTerm.replace('n', 'ṇ'))
  searchTerms.push(searchTerm.replace('n', 'ñ'))
  searchTerms.push(searchTerm.replace('m', 'ṃ'))
  searchTerms.push(searchTerm.replace('m', 'ṁ'))
  searchTerms.push(searchTerm.replace('l', 'ḷ'))
  searchTerms.push(searchTerm.replace('ch', 'c'))
  
  // Remove duplicates
  searchTerms = Array.from(new Set(searchTerms))
    
  // Search for all possible variations of search term
  let results:any = []
  for (const term of searchTerms) {
    const { data } = await supabase
			.from('brhat-dhiti')
			.select()
			.textSearch('fts', term)
			.order('published date',{ascending: false})
    results = results.concat(data)
  }
    
  // Remove duplicates from results
  results = Array.from(new Set(results))
  
  resultsStore.set(results)
  loadingStore = false;
}

</script>


<div class="input">
	<form on:submit={searchWords}>
		<input type="text" on:input={(e) => searchStore.set(e.target.value)} on:keydown={(e) => {if (e.key === 'Enter') {searchWords();}}}/>
		<input type="submit"/>
	</form>
</div>

<div class="results">
	{#if loadingStore}
		<p>Loading...</p>
	{/if}
	{#if $resultsStore.length > 0}
  {#each $resultsStore as result}
  	<div class="boxc resultbox">
    	<p><a href={result.link}>{result.title}</a></p>
  	</div>
  {/each}
  {/if}  
</div>



<style lang="sass">

.resultbox
	p
		margin: 0 0 16px 0
		font-weight: 500
		font-size: 14px
		line-height: 1.2
		color: #575757
		
input[type=text]
	width: 70%
	padding: 4px
	color: #a0a0a0
	border: 1px solid #d7d7d7
	height: 48px

input[type=submit]
	background: var(--strong)
	border: none
	color: white
	padding: 4px
	height: 48px
	transition: all 0.08s var(--cubeb)
	cursor: pointer
	&:hover
		background: #fe4a49
		transform: scale(0.9)

@media screen and (min-width: 768px)
	.containerofsearch
		display: grid 
		grid-template-columns: auto
		grid-template-rows: auto
		gap: 0px 0px 
		grid-auto-flow: row 
		justify-items: center 
		justify-content: center
		align-items: center
		top: 88px
		right: 100px
		grid-template-areas: "searcharea" 
		width: 600px
		padding: 0
		height: 48px
	.searcharea
		width: 600px
		display: grid 
		grid-template-columns: auto
		grid-template-rows: auto auto
		gap: 0px 0px 
		grid-auto-flow: row 
		grid-template-areas: "input" "results" 
		grid-area: searcharea 
		background: white
		height: 48px
	.input 
		grid-area: input
		display: grid
		width: 100%
	.results 
		grid-area: results 

@media screen and (max-width: 767px)
	.containerofsearch
		display: grid 
		grid-template-columns: 1fr 
		grid-template-rows: 1fr 
		gap: 0px 0px 
		grid-auto-flow: row 
		justify-items: center 
		align-items: center 
		position: fixed
		top: 0
		left: 0
		background: rgba(0,0,0,0.2)
		backdrop-filter: blur(5px)
		grid-template-areas: "insidecontainer" 
		width: 100% 
		height: calc(100vh - 112px)
		padding: 32px
	.insidecontainer 
		display: grid 
		grid-template-columns: 1fr 
		grid-template-rows: 64px 1fr 
		gap: 0px 0px 
		grid-auto-flow: row 
		grid-template-areas: "closebutton" "searcharea" 
		grid-area: insidecontainer 
		width: 100%
		height: 100% 
		background: transparent
	.searcharea 
		display: grid 
		grid-template-columns: 1fr 
		grid-template-rows: 120px 1fr 
		gap: 0px 0px 
		grid-auto-flow: row 
		grid-template-areas: "input" "results" 
		grid-area: searcharea 
		background: transparent
		height: 48px
	.input 
		grid-area: input 
		height: 48px 
		background: transparent
	.results 
		grid-area: results 
		background: transparent
	

	
</style>