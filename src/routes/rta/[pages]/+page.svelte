<script>
// @ts-nocheck
export let data;
</script>


<div class="rtabox">
<h3>{data.title}</h3>
<svelte:component this={data.content} />
</div>
<div class="boxr nextandprev">
	<button class="rtabutton"><a href={data.prev}>Prev</a></button>
	<button class="rtabutton"><a href={data.next}>Next</a></button>
</div>
