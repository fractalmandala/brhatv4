<script>
import '$lib/styles/prism.css'
import Header from '$lib/components/headers/HeadDocs.svelte'
import AllDocs from '$lib/components/docs/AllDocs.svelte'
import SearchDocs from '$lib/components/docs/SearchDocs.svelte'

</script>

<Header></Header>
<div class="flexbox-r full">
	<div class="flexbox-c sidebb">
		<AllDocs></AllDocs>
	</div>
	<div class="flexbox-c main">
		<slot></slot>
	</div>
</div>

<style>


.sidebb {
	background: #fefefe;
	border-right: 1px solid #f1f1f1;
}


@media screen and (min-width: 768px) {
	.sidebb { width: 320px; height: 100%; position: sticky; top:0; padding-left: 40px; padding-top: 120px; padding-bottom: 200px; }	
	.main { width: calc(100% - 320px); padding: 120px 15% 0 40px;}
	.flexbox-r { padding-bottom: 80px;}

}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.sidebb { width: 240px; height: 100%; position: sticky; top:0; padding-left: 40px; padding-top: 120px; padding-bottom: 200px; }	
  
	.main { width: calc(100% - 240px); padding: 0;}
	.flexbox-r { padding-bottom: 80px;}

}

@media screen and (max-width: 575px) {
	.sidebb { display: none;}
	.main { width: 100%; height: 100%; order: 2; padding: none;}

}

</style>