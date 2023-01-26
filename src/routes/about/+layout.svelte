<script>
import FlyingPage from '$lib/components/animations/FlyingPage.svelte'
import HeadAbout from '$lib/components/headers/HeadAbout.svelte'
/**
	 * @type {any}
	 */
 export let refresh;
</script>

{#key refresh}
<FlyingPage>
<HeadAbout></HeadAbout>
<slot></slot>
</FlyingPage>
{/key}