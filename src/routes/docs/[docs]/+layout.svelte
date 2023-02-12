<script>
import AllDocs from '$lib/components/docs/AllDocs.svelte'
</script>

<div class="r-r-r-r l1">
<div class="c-c-c-c col1">
<slot></slot>
</div>
<div class="c-c-c-c col2">
<AllDocs></AllDocs>
</div>
</div>
<style>
* { color: #272727;}
@media screen and (min-width: 900px) {
	.l1 { padding-top: 120px;}
	.col2 { width: 25%; padding: 0;}
	.col1 { width: 75%; padding-left: 4vw;}
}
</style>

