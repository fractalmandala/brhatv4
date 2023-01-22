<script>
import FlyingPage from '$lib/components/animations/FlyingPage.svelte'
import AnveshiSide from '$lib/components/globals/AnveshiSide.svelte'
import '$lib/styles/componentstyles.css'
</script>

<FlyingPage>
<div class="primecontainer-row">
<AnveshiSide></AnveshiSide>
<div class="pagesheet">
<slot></slot>
</div>
</div>
</FlyingPage>
