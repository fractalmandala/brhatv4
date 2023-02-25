<script>
/**
	 * @type {{ title: any; content: any; }}
	 */
import TheMotif from '$lib/components/logos/TheMotif.svelte'
 /**
	 * @type {{ title: any; content: any; }}
	 */
  export let data
</script>


<h3>{data.title}</h3>

<div class="flexbox-c document-sheet">
<svelte:component this={data.content} />
</div>

<style>
h3 { margin-top: 64px; border-bottom: 1px solid #d7d7d7; padding-bottom: 16px;}
</style>
