<script lang="ts">
// @ts-nocheck
import { onMount } from 'svelte'
import HeaderGen from '$lib/components/headers/HeaderGen.svelte'
import { dev } from '$app/environment'
import { inject } from '@vercel/analytics'
import Lenis from '@studio-freight/lenis'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
import type { PageData } from './$types'
import Animations from "textify.js"
import '$lib/styles/textify.css'
import '$lib/styles/typographyglobal.sass'
import '$lib/styles/reader.sass'

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
		touchMultiplier: 1,
		infinite: false
	})
	function raf(time:any){
		lenis.raf(time)
		requestAnimationFrame(raf)	
	}
	requestAnimationFrame(raf)
	const { Textify, TextifyTitle } = Animations
	new Textify ({
		duration: 400,
		stagger: 30,
		once: false,
		reveal: true,
		fade: false,
		top: false,
		right: true,
		transformOrigin: "center left"
	})
	new Textify ({
		selector: ".link-heads h5",
		duration: 400,
		stagger: 200,
		once: false,
		reveal: true,
		right: true
	})
	new Textify ({
		selector: ".txt22",
	  duration: 200,
	  stagger: 100,
	  once: false,
	  reveal: true,
	  scale: 0,
		left: true,
	})
	new Textify ({
		selector: ".txt h2",
	  duration: 1000,
	  stagger: 50,
	  once: false,
	  scale: 0,
	  fade: true,
	  fadeDuration: 500,
	  ease: "elasticInOut"
	})
	new Textify ({
		selector: ".lining",
		duration: 700,
		stagger: 100,
		delay: 90,
		once: false,
		reveal: true
	})
	new TextifyTitle({
	  selector: ".tt5",
	  duration: 1000,
	  stagger: 50,
	  once: false,
	  scale: 0,
	  fade: true,
	  fadeDuration: 500,
	  ease: "elasticInOut"
	});
})
</script>
	
<HeaderGen></HeaderGen>
<div class="boxc">
	<slot></slot>
</div>	
<Footer></Footer>

<style>
.boxc { height: 100%;}
</style>



