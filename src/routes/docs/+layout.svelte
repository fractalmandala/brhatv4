<script>
import '$lib/styles/prism.css'
import AllDocs from '$lib/components/docs/AllDocs.svelte'
import SearchDocs from '$lib/components/docs/SearchDocs.svelte'

</script>

<div class="r-r-r-r l0 pad4">
	<div class="c-c-c-c bar">
		<AllDocs></AllDocs>
	</div>
	<div class="c-c-c-c mainpage">
		<slot></slot>
	</div>
</div>

<style>

@media screen and (min-width: 767px) {
	.l0 { min-height: 100vh; padding-top: 120px; padding-bottom: 80px; gap: 64px;}
	.bar { width: 25%; height: 100vh; position: sticky; top: 120px; overflow: scroll; }
	.mainpage { width: 70%; padding-right: 8%;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.l0 { min-height: 100vh; padding-top: 120px; padding-bottom: 80px; gap: 32px;}
	.bar { width: 25%; height: 100vh; position: sticky; top: 120px; overflow: scroll; }
	.mainpage { width: 70%; padding-right: 2%;}
}

@media screen and (max-width: 575px) {
	.l0 { flex-wrap: wrap;}
	.mainpage { width: 100%; padding-top: 120px; padding-bottom: 80px;}
	.bar { display: none;}
}
</style>
