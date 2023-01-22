<script>

import { fetchMarkdownPosts } from '$lib/utils'
  /**
	 * @type {string | any[]}
	 */
  let searchResults = [];
  let query = '';

  async function search() {
    const allDocs = await fetchMarkdownPosts();
    searchResults = allDocs.filter(doc => doc.meta.title.toLowerCase().includes(query.toLowerCase()));
  }

</script>

<form on:submit|preventDefault={search}>
  <input type="text" bind:value={query} placeholder="Search..." />
  <button type="submit">Search</button>
</form>

<div>
  {#if searchResults.length > 0}

      {#each searchResults as result}
        <p><a href={result.path}>{result.meta.title}</a></p>
      {/each}

  {/if}
</div>

