<script>
  // @ts-nocheck
  
  import supabase from '$lib/db'
  import { get } from 'svelte/store'
  import { writable } from 'svelte/store'
	import { slide } from 'svelte/transition'
	import { circIn } from 'svelte/easing'
  
  const searchStore = writable('')
  const resultsStore = writable([])
  let loadingStore = false;

	let isRes = false

	function toggleRes(){
		isRes = !isRes
	}

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
    let results = []
    for (const term of searchTerms) {
      const { data } = await supabase
        .from('web-documentation')
        .select()
        .textSearch('name', term)
      results = results.concat(data)
    }
    
    // Remove duplicates from results
    results = Array.from(new Set(results))
    
    resultsStore.set(results)
    loadingStore = false;
  }
  
</script>


<div class="searchinput flexbox-c">
  <input on:input={(e) => searchStore.set(e.target.value)} 
  on:keydown={(e) => {
    if (e.key === 'Enter') {
      searchWords();
    }
  }}
  placeholder="Search..." />
  <button class="greenbutton" on:click={searchWords} on:click={toggleRes} on:keydown={searchWords} on:keydown={toggleRes}>Search</button>
</div>

{#if loadingStore}
<p>Loading...</p>
{/if}
	{#if isRes}
	<div class="searchresults flexbox-c" transition:slide="{{ duration: 300, easing: circIn}}">
		<cite class="green wbold" on:click={toggleRes} on:keydown={toggleRes}>Close</cite>
  	{#if $resultsStore.length > 0}
  	{#each $resultsStore as result}
  	<div class="flexbox-c resultbox">
    <h6 class="w400 m-top-zero m-bot-zero" on:click={toggleRes} on:keydown={toggleRes}><a href={result.link}>{result.name}</a></h6>
    <small class="m-bot-zero">{result.tag}</small>
  	</div>
  {/each}
  {/if}  
	</div>
	{/if}

<style>
.searchinput input { height: 28px; width: 80%;}
.searchinput button { width: 40%;}
.flexbox-c h6, .flexbox-c small { text-transform: capitalize;}
.flexbox-c a { color: #10C56d;}
cite { color: #474747; cursor: pointer;}

@media screen and (min-width: 768px) {
	.searchresults {
		padding-bottom: 16px;
		margin-bottom: 12px;
		background: rgba(255,255,255,0.88);
		backdrop-filter: blur(4px);
		z-index: 700;
		position: fixed;
		left: 360px;
		top: 128px;
		width: 700px;
		height: 600px;
		overflow-y: scroll;
		border: 1px solid #10C56d;
		padding: 32px;
	}
	.resultbox { margin-bottom: 12px;}
	.searchinput { gap: 0;}
	.searchinput input { margin-bottom: 0;}
	.searchinput button { margin-top: 12px;}
}

</style>