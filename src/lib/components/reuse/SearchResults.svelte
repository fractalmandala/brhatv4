<script>
  export let results = [];
</script>

{#if results.length === 0}
	<pre></pre>
{:else}
  <ul>
    {#each results as result}
      <li><a href={result.path}>{result.title}</a></li>
    {/each}
  </ul>
{/if}
