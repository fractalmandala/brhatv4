<script>
import PageTransitions from '$lib/components/animations/PageTransitions.svelte'
/**
	 * @type {any}
	 */
 export let refresh
</script>

{#key refresh}
<PageTransitions>
<slot></slot>
</PageTransitions>
{/key}