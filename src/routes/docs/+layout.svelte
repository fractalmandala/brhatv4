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
<div class="pagesheet2">
<slot></slot>
</div>
</div>
</FlyingPage>

