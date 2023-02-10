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

<style>
.corp-docs {
	padding-top: 8em;
}
.corp-docs h1 {
	font-size: 6em;
	text-transform: uppercase;
	font-weight: 900;
}
</style>
