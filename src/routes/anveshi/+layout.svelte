<script>
import '$lib/styles/anim-anveshi.css'
import FlyingPage from '$lib/components/animations/FlyingPage.svelte'
import HeadAnveshi from '$lib/components/headers/HeadAnveshi.svelte'
/**
	 * @type {any}
	 */
 export let refresh;
</script>

{#key refresh}
<FlyingPage>
<HeadAnveshi></HeadAnveshi>
<slot></slot>
</FlyingPage>
{/key}

