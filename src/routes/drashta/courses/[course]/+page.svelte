<script>
/**
	 * @type {any}
	 */
 export let data
</script>

{#each data as item}
<div class="imagecontainer c-c-c-c" style="background: white">
	<div class="imagecontainer-screen">
		<h1>hi</h1>
	</div>
</div>
<div class="c-c-c-c pad4">
	<pre>{item.content}</pre>
</div>
{/each}

<style>
.imagecontainer { height: 100vh; width: 100vw; border-bottom: 1px solid red;}
</style>

