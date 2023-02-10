<script>
import PageTransitions from '$lib/components/animations/PageTransitions.svelte'
import '$lib/styles/globaltemplate.sass'
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