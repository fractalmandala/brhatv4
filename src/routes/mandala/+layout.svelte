<script lang="ts">
import {onMount} from 'svelte'
import Lenis from '@studio-freight/lenis'
import Header from '$lib/components/headers/HeadMandala.svelte'

onMount(async() => {
const lenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		direction: 'vertical',
		gestureDirection: 'vertical',
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

<Header></Header>
<slot></slot>


