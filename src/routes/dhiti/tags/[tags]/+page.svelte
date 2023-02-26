<script lang="ts">
export let data: any
</script>

{#each data.tags as tag}
<p>{tag}</p>
{/each}