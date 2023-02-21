<script>
  export let value = '';
  export let placeholder = 'Search...';
  export let onInput = () => {};
  export let onSubmit = () => {};
  /**
	 * @type {string | any[]}
	 */
   export let results = [];
</script>

<form on:submit|preventDefault={onSubmit}>
  <input type="text" value={value} placeholder={placeholder} on:input={onInput} />
  <button class="greenbutton" type="submit" on:click={onSubmit}>Search</button>
</form>
<div class="flexbox-c">
	{#if results.length === 0}
  <p>No results found.</p>
	{:else}
  <ul>
    {#each results as result}
      <li><a href={result.path}>{result.title}</a></li>
    {/each}
  </ul>
	{/if}
</div>
