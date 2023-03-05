<script>
/**
	 * @type {{ title: any; content: any; }}
	 */
 export let data
</script>


<div class="document">
	<h2>{data.title}</h2>
	<svelte:component this={data.content} />
</div>