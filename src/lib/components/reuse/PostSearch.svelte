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
  <button class="greenbutton" on:click={searchWords} on:keydown={searchWords}>Search</button>
</div>

{#if loadingStore}
	<p>Loading...</p>
{/if}
	

	<div class="searchresults flexbox-c">
  	{#if $resultsStore.length > 0}
  		{#each $resultsStore as result}
  		<div class="flexbox-c resultbox">
    	<p class="w400 m-top-zero m-bot-zero"><a href={result.link}>{result.name}</a></p>
  		</div>
  		{/each}
  	{/if}  
	</div>


<style>
.searchinput input { height: 28px; width: 100%;}
.searchinput button { width: 30%;}
.flexbox-c p { text-transform: capitalize;}
.flexbox-c a { color: #FFFFFF;}


@media screen and (min-width: 768px) {
	.searchresults {
		padding: 0 32px 32px 32px;
		margin-bottom: 12px;
		width: 100%;
		height: 100%;
		overflow-y: scroll;
	}
	.searchinput { gap: 0; padding: 32px; align-items: flex-start; width: 100%; margin-top: 32px;}
	.searchinput input { margin-bottom: 0;}
	.searchinput button { margin-top: 12px;}
}

@media screen and (max-width: 767px) {
	.searchinput { width: 100%; align-items: flex-start; margin-top: 32px; }
	.searchresults { width: 100%; height: 100%;}
}

</style>