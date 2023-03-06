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
import FooterGen from '$lib/components/globals/FooterGen.svelte'
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
	tippy ('#tooltip1', {
		content: 'Click for Site Helper',
		arrow: false,
		theme: 'dark',
		animateFill: true,
		inertia: true,
		plugins: [animateFill]
	})
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
		<svg width="100%" height="100%" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={toggleHelp} on:keydown={toggleHelp}>
			<g id="Union">
				<path d="M44.6663 7.00016C44.6663 10.6821 41.6816 13.6668 37.9997 13.6668C34.3178 13.6668 31.333 10.6821 31.333 7.00016C31.333 3.31826 34.3178 0.333496 37.9997 0.333496C41.6816 0.333496 44.6663 3.31826 44.6663 7.00016Z" fill="#FE4A49"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M42.1598 16.0802C40.3068 16.9297 38.2383 17.1918 36.232 16.8314C34.2257 16.4709 32.3777 15.5051 30.9363 14.0637C29.4949 12.6223 28.5291 10.7744 28.1687 8.76808C27.8082 6.76177 28.0703 4.6932 28.9198 2.84021C24.3415 1.25716 19.3618 1.27325 14.7938 2.88587C10.2259 4.49848 6.33967 7.61231 3.76996 11.7188C1.20024 15.8253 0.0988593 20.6818 0.645688 25.4951C1.19252 30.3083 3.35524 34.794 6.78064 38.2194C10.206 41.6448 14.6917 43.8075 19.505 44.3544C24.3183 44.9012 29.1747 43.7998 33.2812 41.2301C37.3877 38.6604 40.5016 34.7742 42.1142 30.2062C43.7268 25.6383 43.7429 20.6585 42.1598 16.0802ZM20.4842 35.7094C20.846 35.9512 21.2714 36.0802 21.7065 36.0802V36.1335C21.9999 36.1336 22.2905 36.075 22.5609 35.9611C22.8314 35.8472 23.0763 35.6804 23.2813 35.4704C23.4863 35.2605 23.6472 35.0116 23.7546 34.7385C23.862 34.4654 23.9136 34.1736 23.9065 33.8802C23.9065 33.4451 23.7775 33.0197 23.5357 32.658C23.294 32.2962 22.9504 32.0142 22.5484 31.8477C22.1464 31.6812 21.7041 31.6376 21.2773 31.7225C20.8505 31.8074 20.4585 32.0169 20.1509 32.3246C19.8432 32.6323 19.6337 33.0243 19.5488 33.451C19.4639 33.8778 19.5074 34.3201 19.674 34.7221C19.8405 35.1241 20.1225 35.4677 20.4842 35.7094ZM23.5332 27.6269V25.3869C28.1465 24.6002 30.7732 21.8802 30.7732 17.7602C30.7732 13.3602 27.3332 10.2935 22.3998 10.2935C20.8852 10.2702 19.3839 10.5792 18.0017 11.1989C16.6195 11.8186 15.39 12.7339 14.3998 13.8802C14.0404 14.2317 13.8344 14.7109 13.8265 15.2135C13.835 15.5731 13.9502 15.9221 14.1575 16.216C14.3648 16.5099 14.6549 16.7355 14.9908 16.8642C15.3267 16.9928 15.6932 17.0187 16.0439 16.9384C16.3945 16.8582 16.7133 16.6755 16.9598 16.4135C17.6116 15.6275 18.4257 14.9917 19.3463 14.5498C20.2669 14.1079 21.2722 13.8704 22.2932 13.8535C24.9865 13.8535 26.8665 15.5069 26.8665 17.9469C26.8665 21.3469 23.3865 22.1202 21.2932 22.2802C21.0786 22.2917 20.8686 22.3467 20.6759 22.4418C20.4832 22.5369 20.3118 22.6702 20.1722 22.8335C20.0325 22.9969 19.9275 23.1869 19.8635 23.392C19.7995 23.5971 19.7779 23.8131 19.7998 24.0269V27.7069C19.8067 27.9427 19.8602 28.1748 19.9573 28.3899C20.0543 28.6049 20.193 28.7986 20.3653 28.9597C20.5376 29.1209 20.7401 29.2463 20.9612 29.3288C21.1822 29.4112 21.4174 29.4491 21.6532 29.4402H21.7998C22.2656 29.4164 22.7047 29.2153 23.027 28.8781C23.3493 28.541 23.5304 28.0933 23.5332 27.6269Z" fill="#373737"/>
			</g>
		</svg>
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
	height: 100%

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
 
</style>



