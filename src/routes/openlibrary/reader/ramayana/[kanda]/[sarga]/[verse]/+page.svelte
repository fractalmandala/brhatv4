<script lang="ts">
export let data:any
</script>

<div class="boxc">
	{#each data as item}
		<p>{item.slug}</p>
	{/each}
</div>
