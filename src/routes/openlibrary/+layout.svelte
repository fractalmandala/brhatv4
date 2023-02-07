<script>
import LocomotiveContainer from '$lib/components/animations/LocomotiveContainer.svelte'

</script>



<LocomotiveContainer>
<slot></slot>
</LocomotiveContainer>


<style>

:global(body) {
	background: white;
	color: #474747;
	transition: background 0.25s;
}

:global(body.dark-mode) {
	background: var(--beau);
	color: white;
}

</style>
