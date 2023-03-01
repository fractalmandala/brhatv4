<script lang="ts">
import { onMount } from 'svelte'
let y = 1
let x = 1
let isLarge = false
let isOut = false

function handleResize(){
	isLarge = window.innerWidth >= 768
	isOut = window.innerWidth >= 768
}
$: parallaxStyle = isLarge ? `transform: translateY(${-y/2}px)` : ''
$: parallaxStyleTwo = isOut ? `transform: translateY(${-y/8}px)` : ''

onMount(async() => {
	if (typeof window !== 'undefined') {
		handleResize()
		window.addEventListener('resize', handleResize)
	}
})
</script>

<svelte:window bind:scrollY={y} bind:outerWidth={x}/>

<div class="parallaxbox" style={parallaxStyleTwo}>
	<div class="insideparallax back-image" style={parallaxStyle}></div>
</div>

<style>

.back-image {
	background-image: var(--parallaximage);
}

.parallaxbox, .insideparallax {
	display: flex;
	flex-direction: column;
}

@media screen and (min-width: 900px) {
	.parallaxbox {
		height: 60vh;
		overflow: hidden;
		width: 100%;
	}
	.insideparallax {
		min-height: 150vh;
		width: 100%;
	}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.parallaxbox {
		height: 40vh;
		overflow: hidden;
		width: 100%;
	}
	
	.insideparallax {
		min-height: 180vh;
		width: 100%;
	}
}
</style>