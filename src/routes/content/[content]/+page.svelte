<script>
// @ts-nocheck
export let data;

</script>

<h4>{data.title}</h4>
<cite class="category">{data.tag}</cite>
<div class="sheet mt1">
	<svelte:component this={data.content} />
</div>