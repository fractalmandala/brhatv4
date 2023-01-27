<script>
import '$lib/styles/anim-scrolls.css'
import HeadSoa from '$lib/components/headers/HeadSoa.svelte'
import FlyingPage from '$lib/components/animations/FlyingPage.svelte'
</script>

<FlyingPage>
<HeadSoa></HeadSoa>
<slot></slot>
</FlyingPage>

