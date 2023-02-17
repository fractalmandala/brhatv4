<script>
// @ts-nocheck
export let data;

</script>

<h3>{data.title}</h3>

<div class="r-r-r-r documenter">
	<div class="c-c-c-c contents-table">
		<p>Iterative Design</p>
		<p>3 Phases, 4 Principles</p>
	</div>
	<div class="c-c-c-c main-table">
		<svelte:component this={data.content} />
	</div>
</div>

<style>

@media screen and (min-width: 900px) {
	.contents-table { width: 18%; border-right: 1px solid #d7d7d7; padding-left: 2vw;}
	.contents-table p { font-size: 14px; text-transform: uppercase; font-weight: 500; color: #878787;}
	.main-table { width: 75%; padding: 0 64px 0 64px;}
}
</style>