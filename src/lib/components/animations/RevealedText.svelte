<script lang="ts">
import { onMount } from 'svelte';
import Lenis from '@studio-freight/lenis'

onMount(async() => {
	const lenis = new Lenis({
		duration: 1.2,
		direction: 'horizontal',
		gestureDirection: 'horizontal',
		smooth: true,
		mouseMultiplier: 0.7,
		smoothTouch: false,
		touchMultiplier: 1,
		infinite: false,
	})

	function raf(time: any){
		lenis.raf(time)
		requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)	
})

</script>

<div class="flexbox-r bdr thestuck" data-prevent-lenis>
<slot></slot>
</div>

<style>
.thestuck {
	min-height: 100vh;
	width: 500vw;
	position: sticky;
	top: 0;
	left: 0;
}
</style>

