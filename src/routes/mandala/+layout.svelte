<script>
import FlyingBox from '$lib/components/animations/FlyingPage.svelte'
  /**
	 * @type {any}
	 */
   export let refresh
</script>

{#key refresh}
<FlyingBox>
<slot></slot>
</FlyingBox>
{/key}
