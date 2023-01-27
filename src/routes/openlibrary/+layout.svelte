<script>
import HeadBol from '$lib/components/headers/HeadBol.svelte'
import FlyingPage from '$lib/components/animations/FlyingPage.svelte'
</script>

<FlyingPage>
<HeadBol></HeadBol>
<div class="gen-spacer-top"></div>
<slot></slot>
</FlyingPage>

