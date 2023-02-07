<script lang="ts">
import '$lib/styles/anim-mandala.css'
import HeadMandala from '$lib/components/headers/HeadMandala.svelte'
import LocomotiveContainer from '$lib/components/animations/LocomotiveContainer.svelte'


</script>


<HeadMandala></HeadMandala>
<LocomotiveContainer>
<slot></slot>
</LocomotiveContainer>

<style>
	*, :root {
		--main-beau: var(--beau);
	}
</style>


