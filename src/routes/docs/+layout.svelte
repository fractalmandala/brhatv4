<script>
import FlyingPage from '$lib/components/animations/FlyingPage.svelte'
import HeadGeneral from '$lib/components/headers/HeadGeneral.svelte'
import DocSidebar from '$lib/components/globals/DocSiderbar.svelte'
import '$lib/styles/prism.css'
</script>

<FlyingPage>
<HeadGeneral></HeadGeneral>
<div class="primecontainer-row">
<DocSidebar></DocSidebar>
<div class="pagesheet2 md-doc">
<slot></slot>
</div>
</div>
</FlyingPage>

<style>

.md-doc {
	font-size: 14px;
}


</style>
