<script>
	import { spring } from 'svelte/motion';
	
	export let stiffness;
	export let damping;
	export let on = false;
	
	$: scale = spring(undefined, { stiffness, damping });
	$: scale.set(on ? 1 : 0.1);
	
	$: r = Math.round(stiffness * 255);
	$: g = Math.round(damping * 255);
	$: fill = `rgb(${r},${g},128)`;
</script>

<div
	class="dot"
	style="transform: scale({$scale}); background-color: {fill}"
></div>

<style>
	.dot {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: black;
	}
</style>