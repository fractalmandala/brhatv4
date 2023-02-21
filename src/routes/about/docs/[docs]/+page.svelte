<script>
/**
	 * @type {{ title: any; content: any; }}
	 */
 export let data
</script>


<h2>{data.title}</h2>

<div class="flexbox-c document-sheet">
<svelte:component this={data.content} />
</div>

<style>
h2 { margin-top: 0; border-bottom: 1px solid #fe4a49; padding-bottom: 16px;}
</style>
