<script>
/**
	 * @type {{ title: any; content: any; }}
	 */
 export let data
</script>


<div class="corp-docs">
<h1>{data.title}</h1>
<svelte:component this={data.content} />
</div>
