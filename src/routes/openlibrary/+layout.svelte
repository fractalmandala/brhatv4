<script>
import Header from '$lib/components/headers/HeaderBol.svelte'
</script>

<Header></Header>
<div class="flexbox-r">
	<div class="in-col forty">
	</div>
	<div class="in-col hundminus">
		<slot></slot>
	</div>
</div>

<style>

@media screen and (min-width: 768px){
	.forty {
		width: 56px;
		border-right: 2px solid #474747;
		min-height: 100vh;
	}
	.hundminus { width: calc(100% - 56px);}
}	
</style>



