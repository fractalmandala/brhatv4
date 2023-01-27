<script>
import '$lib/styles/anim-mandala.css'
import HeadMandala from '$lib/components/headers/HeadMandala.svelte'
import FlyingPage from '$lib/components/animations/FlyingPage.svelte'
</script>

<FlyingPage>
<HeadMandala></HeadMandala>
<slot></slot>
</FlyingPage>

