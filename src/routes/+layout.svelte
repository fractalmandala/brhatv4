<script lang="ts">
// @ts-nocheck
import { onMount } from 'svelte'
import HeaderGen from '$lib/components/headers/HeaderGen.svelte'
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
import Lenis from '@studio-freight/lenis'
import '$lib/styles/componentstyles.sass'
import '$lib/styles/typographyglobal.sass'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
inject({ mode: dev ? 'development' : 'production' });

onMount(async() => {
	const lenis = new Lenis({
		duration: 1.6,
		direction: 'vertical',
		gestureDirection: 'vertical',
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		lerp: 1,
		smooth: true,
		mouseMultiplier: 1,
		smoothTouch: false,
		touchMultiplier: 0.6,
		infinite: false
	})
	function raf(time:any){
		lenis.raf(time)
		requestAnimationFrame(raf)	
	}
	requestAnimationFrame(raf)
})
</script>
	
<HeaderGen></HeaderGen>
<div class="flexbox-c">
	<slot></slot>
</div>	
<Footer></Footer>

<style>
.flexbox-c { height: 100%;}
</style>



