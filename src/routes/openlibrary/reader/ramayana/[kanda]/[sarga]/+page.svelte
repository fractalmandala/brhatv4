<script lang="ts">
export let data:any
</script>

<div class="flexbox-c">
{#if data && data.length>0}
	{#each data as item}
	<p>{item.verse}</p>
	{/each}
{/if}
</div>