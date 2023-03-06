<script>
import '$lib/styles/reader.sass'
import { fly } from 'svelte/transition'
import { quadIn } from 'svelte/easing'
import Sidebar from '$lib/components/globals/MainSide.svelte'

let showClose = false
let toggledClass = false

function toggleClose(){
	showClose = !showClose
	toggledClass = !toggledClass
}
</script>

<div class="full-page">
	<div class="side-bar" class:toggledClass={toggledClass}>
		<div class="menutwo">
			{#if showClose}
			<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={toggleClose} on:keydown={toggleClose}>
				<g id="close" clip-path="url(#clip0_328_2)">
					<path id="Vector" d="M32.8177 5.05589L27.86 0.0981445L16.8177 11.3657L5.77549 0.0981445L0.817749 5.05589L12.0854 16.0981L0.817749 27.1404L5.77549 32.0981L16.8177 20.8305L27.86 32.0981L32.8177 27.1404L21.5501 16.0981L32.8177 5.05589Z" fill="#B7B7B7"/>
				</g>
				<defs>
				<clipPath id="clip0_328_2">
				<rect width="32" height="32" fill="white"/>
				</clipPath>
				</defs>
			</svg>
			{:else}
			<svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={toggleClose} on:keydown={toggleClose}>
				<g id="Frame" clip-path="url(#clip0_328_6)">
				<g id="close">
					<path id="top" d="M48 11.8001V4.6001H0V11.8001H58H48Z" fill="white"/>
					<path id="mid" d="M48 26V19H16V26H74H48Z" fill="white"/>
					<path id="low" d="M48 41V34H32V41H90H48Z" fill="white"/>
				</g>
				</g>
				<defs>
				<clipPath id="clip0_328_6">
				<rect width="48" height="48" fill="white"/>
				</clipPath>
				</defs>
			</svg>
			{/if}
		</div>
		{#if toggledClass}
			<div class="boxc linksone">
				<h6 in:fly={{ duration: 200, y: 0, x: -64, easing: quadIn}} out:fly={{ duration: 100, delay: 0, y: 0, x: -64, easing: quadIn}} class="cut"><a href="/">Head Link</a></h6>
				<p in:fly={{ duration: 200, delay: 40, y: 0, x: -64, easing: quadIn}} out:fly={{ duration: 100, delay: 0, y: 0, x: -64, easing: quadIn}} class="cut"><a href="/">Sub link</a></p>
				<p in:fly={{ duration: 200, delay: 80, y: 0, x: -64, easing: quadIn}} out:fly={{ duration: 100, delay: 0, y: 0, x: -64, easing: quadIn}} class="cut"><a href="/">Sub link</a></p>
				<p in:fly={{ duration: 200, delay: 120, y: 0, x: -64, easing: quadIn}} out:fly={{ duration: 100, delay: 0, y: 0, x: -64, easing: quadIn}} class="cut"><a href="/">Sub link</a></p>
				<p in:fly={{ duration: 200, delay: 160, y: 0, x: -64, easing: quadIn}} out:fly={{ duration: 100, delay: 0, y: 0, x: -64, easing: quadIn}} class="cut"><a href="/">Sub link</a></p>
				<p in:fly={{ duration: 200, delay: 200, y: 0, x: -64, easing: quadIn}} out:fly={{ duration: 100, delay: 0, y: 0, x: -64, easing: quadIn}} class="cut"><a href="/">Sub link</a></p>
			</div>
		{/if}
		<div class="in-side">
			<h6><a href="/">Head Link</a></h6>
			<p><a href="/">Sub Link</a></p>
			<p><a href="/">Sub Link</a></p>
			<p><a href="/">Sub Link</a></p>
			<p><a href="/">Sub Link</a></p>
			<p><a href="/">Sub Link</a></p>
		</div>
	</div>
	<div class="section col">
		<h1>the king</h1>
		<h2>test</h2>
		<h3>header 3</h3>
		<h4>header 4</h4>
		<h5>header 5</h5>
		<h6>header 6</h6>
		<p>
			You can even import and use Markdown content _inside of_ other files, if you want to—for example, if part of the page needed state or interactivity, but part could just be Markdown text.
		</p>
		<small>small text</small>
		<blockquote>
			this is a quote
		</blockquote>
	</div>
</div>
