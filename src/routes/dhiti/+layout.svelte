<script>
import '$lib/styles/animations.css'
import FlyingPage from '$lib/components/animations/FlyingPage.svelte'
import HeadDhiti from '$lib/components/headers/HeadDhiti.svelte'
</script>

<FlyingPage>
<HeadDhiti></HeadDhiti>
<slot></slot>
</FlyingPage>

