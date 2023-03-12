<script lang="ts">
// @ts-nocheck
import { onMount } from 'svelte'
import { fly } from 'svelte/transition'
import { quadIn } from 'svelte/easing'
import tippy, { animateFill } from 'tippy.js'
import HelperPop from '$lib/components/globals/HelperPop.svelte'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import 'tippy.js/dist/backdrop.css';
import HeaderGen from '$lib/components/headers/HeaderGen.svelte'
import { dev } from '$app/environment'
import { inject } from '@vercel/analytics'
import Lenis from '@studio-freight/lenis'
import FooterGen from '$lib/components/globals/FooterGlobal.svelte'
import '$lib/styles/typographyglobal.sass'
import '$lib/styles/reader.sass'
let isHelper = false
inject({ mode: dev ? 'development' : 'production' });

function toggleHelp(){
	isHelper = !isHelper
}

function toggleHelpClose(){
	if ( isHelper == true ) {
		isHelper = false
	}
}

onMount(async() => {
	tippy ('.expansion', {
		content: 'Click to Expand',
		arrow: false,
		theme: 'dark',
		animation: 'scale',
	})
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
})
</script>
	
<HeaderGen></HeaderGen>
<div class="full-page">
	<div class="nix" on:click={toggleHelpClose} on:keydown={toggleHelpClose}>
	<slot></slot>
	</div>
	<div class="helper" id="tooltip1">
	</div>
		{#if isHelper}
		<div class="poppinghelp" on:click={toggleHelp} on:keydown={toggleHelp} in:fly={{ duration: 200, x: 0, y: 200, easing: quadIn }} out:fly={{ duration: 100, x: 0, y:200, easing: quadIn }}>
			<HelperPop></HelperPop>
		</div>
		{/if}
</div>	
<FooterGen></FooterGen>

<style lang="sass">

.full-page
	width: 100vw
	height: 100%
	overflow-x: hidden
	display: flex
	flex-direction: column

.poppinghelp
	right: 16px
	bottom: 96px
	position: fixed
	z-index: 950

.helper
	display: flex
	position: fixed
	flex-direction: column
	z-index: 950
	svg
		cursor: pointer
	@media screen and (min-width: 900px)
		bottom: 48px
		right: 32px
		svg
			height: 32px
			width: 32px
			transition: all 0.24s var(--cubec)
		&:hover
			svg
				height: 40px
				width: 40px
	@media screen and (max-width: 899px) and (min-width: 768px)
		bottom: 16px
		right: 16px
		svg
			height: 28px
			width: 28px
			transition: all 0.24s var(--cubec)
		&:hover
			svg
				height: 34px
				width: 34px
	@media screen and (max-width: 767px) and (min-width: 576px)
		bottom: 12px
		right: 12px
		svg
			height: 28px
			width: 28px
			transition: all 0.24s var(--cubec)
		&:hover
			svg
				height: 34px
				width: 34px
	@media screen and (max-width: 575px)
		bottom: 8px
		right: 8px
		svg
			height: 22px
			width: 22px
			transition: all 0.24s var(--cubec)
		&:hover
			svg
				height: 30px
				width: 30px

@media screen and (max-width: 1023px)
	#tooltip1
		display: none
 
</style>



