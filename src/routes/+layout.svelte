<script lang="ts">
// @ts-nocheck
import { onMount } from 'svelte'
import HeaderGen from '$lib/components/headers/HeaderGen.svelte'
import { dev } from '$app/environment'
import { inject } from '@vercel/analytics'
import Lenis from '@studio-freight/lenis'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
import Animations from "textify.js"
import '$lib/styles/textify.css'
import '$lib/styles/componentstyles.sass'
import '$lib/styles/typographyglobal.sass'
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
	const { Textify } = Animations
	new Textify ({
		selector: ".link-heads h5",
		duration: 400,
		stagger: 200,
		once: false,
		reveal: true,
		right: true
	})
	new Textify ({
		selector: ".txt22 .w500",
	  duration: 200,
	  stagger: 100,
	  once: false,
	  reveal: true,
	  scale: 0,
		left: true,
	})
	new Textify ({
		selector: ".txt3",
		duration: 700,
		stagger: 100,
		delay: 60,
		once: false,
		reveal: true
	})
	new Textify ({
		selector: ".txt4",
		duration: 700,
		stagger: 100,
		delay: 90,
		once: false,
		reveal: true
	})
	new Textify ({
		selector: ".txt5",
		duration: 700,
		stagger: 100,
		delay: 120,
		once: false,
		reveal: true
	})
	new Textify ({
		selector: ".txt6",
		duration: 700,
		stagger: 100,
		delay: 150,
		once: false,
		reveal: true
	})
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



