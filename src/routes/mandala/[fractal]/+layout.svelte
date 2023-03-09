<script lang="ts">
import { onMount } from 'svelte';
import ShareSocial from '$lib/components/globals/ShareSocial.svelte';
import '$lib/styles/mandalastyling.sass'
let xaxis: number = 0;
let onMobile: boolean = false;
let fullHeight = false
function toggleMobileLinks() {
  onMobile = !onMobile;
	fullHeight = !fullHeight
}
onMount(() => {
  if (xaxis < 768) {
    showLinks = onMobile;
  }
});
$: showLinks = onMobile || xaxis >= 767;
</script>

<svelte:window bind:innerWidth={xaxis}/>

<div class="an-area">
	<div class="sidebar-area" class:fullHeight={fullHeight} data-lenis-prevent>
			<div class="menuiconarea">
		<div class="svgicon" on:click={toggleMobileLinks} on:keydown={toggleMobileLinks}>
			{#if onMobile}
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path id="onlystroke2" d="M14.131 26.9193C21.2003 26.9193 26.931 21.1886 26.931 14.1193C26.931 7.05011 21.2003 1.31934 14.131 1.31934C7.06181 1.31934 1.33105 7.05011 1.33105 14.1193C1.33105 21.1886 7.06181 26.9193 14.131 26.9193Z" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
					<path id="onlyfill" d="M15.2474 14.5L18.739 10.6593C18.9047 10.4773 18.9979 10.2304 18.9981 9.97283C18.9983 9.71528 18.9055 9.46818 18.7401 9.2859C18.5747 9.10362 18.3502 9.00109 18.1161 9.00086C17.8819 9.00063 17.6573 9.10273 17.4916 9.28468L14 13.1254L10.5084 9.28468C10.3427 9.1024 10.118 9 9.88361 9C9.64926 9 9.42451 9.1024 9.2588 9.28468C9.09309 9.46697 9 9.71419 9 9.97197C9 10.2298 9.09309 10.477 9.2588 10.6593L12.7504 14.5L9.2588 18.3407C9.09309 18.523 9 18.7702 9 19.028C9 19.2858 9.09309 19.533 9.2588 19.7153C9.42451 19.8976 9.64926 20 9.88361 20C10.118 20 10.3427 19.8976 10.5084 19.7153L14 15.8746L17.4916 19.7153C17.6573 19.8976 17.882 20 18.1164 20C18.3507 20 18.5755 19.8976 18.7412 19.7153C18.9069 19.533 19 19.2858 19 19.028C19 18.7702 18.9069 18.523 18.7412 18.3407L15.2474 14.5Z" fill="white"/>
			</svg>
			{:else}
			<svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path id="onlystroke" d="M20.1873 38.4557C30.2862 38.4557 38.473 30.2689 38.473 20.17C38.473 10.0711 30.2862 1.88428 20.1873 1.88428C10.0884 1.88428 1.90161 10.0711 1.90161 20.17C1.90161 30.2689 10.0884 38.4557 20.1873 38.4557Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
				<path id="strokeandfill" d="M20.1874 22.9557C20.9214 22.9557 21.6136 22.5937 22.1124 22.095C22.6111 21.5962 22.9731 20.904 22.9731 20.17C22.9731 19.4359 22.6111 18.7438 22.1124 18.245C21.6136 17.7463 20.9214 17.3843 20.1874 17.3843C19.4532 17.3843 18.7616 17.7464 18.2635 18.2453C17.7653 18.7442 17.4043 19.4363 17.4043 20.17C17.4043 20.9037 17.7653 21.5958 18.2635 22.0947C18.7616 22.5936 19.4532 22.9557 20.1874 22.9557ZM11.0445 22.9557C11.7786 22.9557 12.4708 22.5937 12.9695 22.095C13.4683 21.5962 13.8303 20.904 13.8303 20.17C13.8303 19.4359 13.4683 18.7438 12.9695 18.245C12.4708 17.7463 11.7786 17.3843 11.0445 17.3843C10.3104 17.3843 9.61875 17.7464 9.12061 18.2453C8.62246 18.7442 8.26147 19.4363 8.26147 20.17C8.26147 20.9037 8.62246 21.5958 9.12061 22.0947C9.61875 22.5936 10.3104 22.9557 11.0445 22.9557ZM29.3303 22.9557C30.0643 22.9557 30.7565 22.5937 31.2552 22.095C31.754 21.5962 32.116 20.904 32.116 20.17C32.116 19.4359 31.754 18.7438 31.2552 18.245C30.7565 17.7463 30.0643 17.3843 29.3303 17.3843C28.5961 17.3843 27.9045 17.7464 27.4063 18.2453C26.9082 18.7442 26.5472 19.4363 26.5472 20.17C26.5472 20.9037 26.9082 21.5958 27.4063 22.0947C27.9045 22.5936 28.5961 22.9557 29.3303 22.9557Z" fill="white" stroke="white"/>
				</svg>
			{/if}
		</div>
	</div>
  <div class="socialicons">
		<ShareSocial></ShareSocial>
	</div>
  <div class="sidebarlinks">
		<div class="linkssection" on:click={toggleMobileLinks} on:keydown={toggleMobileLinks}>
			<h6><a href="/mandala" class="newlime">Fractal Maṇḍala</a></h6>
			<p id="link1"><a href="/mandala/macrohistoriccase">the macrohistoric case</a></p>
			<p id="link2"><a href="/mandala/aphorisms">caturasūtra - 4 aphorisms</a></p>
			<p id="link3"><a href="/mandala/indiancivcon">indian civilizational consciousness</a></p>
			<p id="link4"><a href="/mandala/rathaasbija">ratha as a bīja</a></p>
			<p id="link5"><a href="/mandala/historyvsitihasa">history is ontic, itihāsa ontologic</a></p>
			<p id="link6"><a href="/mandala/ancestors">ancestors outside of time</a></p>
			<p id="link7"><a href="/mandala/ramasjourney">the avatāra in you</a></p>
			<p id="link8"><a href="/mandala/synrec">synaptic reconnection</a></p>
		</div>
  </div>
	</div>
	<div class="mainpage-area">
		<slot></slot>
	</div>
</div>


<style lang="sass">

.linkssection p
	text-transform: capitalize
	a
		&:hover
			color: var(--newlime)

.sidebarlinks
	padding-top: 32px

.menuiconarea
	@media screen and (min-width: 768px)
		display: none

.an-area 
	display: grid 
	gap: 0px 0px 
	grid-auto-flow: row 
	height: 100%
	z-index: 0
	@media screen and (min-width: 992px)
		grid-template-areas: "sidebar-area mainpage-area" 
		grid-template-columns: 320px auto 
		grid-template-rows: auto 
		height: 100%
		position: relative
	@media screen and (max-width: 991px) and (min-width: 768px)
		grid-template-areas: "mainpage-area" "sidebar-area"
		grid-template-columns: 280px auto
		grid-template-rows: 1fr
		grid-template-areas: "sidebar-area mainpage-area"
		min-height: 100vh
	

.sidebar-area 
	display: grid 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-area: sidebar-area 
	left: 0
	height: 100%
	@media screen and (min-width: 768px)
		grid-template-columns: 1fr 
		grid-template-rows: max-content 1fr 
		grid-template-areas: "socialicons" "sidebarlinks" 
		padding-top: 120px
		width: 320px
		padding-left: 40px
		position: sticky !important
		left: 0
		top: 0
		z-index: 0
		height: 400px
		.sidebarlinks 
			display: grid 
			grid-template-columns: 1fr 
			grid-template-rows: 1fr 
			gap: 0px 0px 
			grid-auto-flow: row 
			grid-template-areas: "linkssection" 
			grid-area: sidebarlinks 
			align-items: start
			align-content: start
			.blocking
				height: 32px
			h6
				text-transform: uppercase
				font-size: 1rem
				font-weight: 600
				margin: 32px 0 10px 0
				color: #a7a7a7
			p
				margin: 2px 0
				font-size: 0.9rem
			small
				font-size: 12px
	@media screen and (max-width: 767px)
		grid-template-columns: 1fr 
		grid-template-rows: 1fr 48px 
		grid-template-areas: "sidebarlinks" "menuiconarea"
		padding: 0 24px
		height: 48px
		width: 100vw
		padding-left: 0
		bottom: 0
		position: fixed
		background: rgba(23,23,23,0.6)
		backdrop-filter: blur(2px)
		z-index: 399
		align-items: center
		justify-content: center
		align-content: center
		justify-items: center
		transition: all 0.23s ease
		.socialicons
			display: none
		.menuiconarea
			display: flex
			width: 100%
			height: 48px
			justify-content: center
			align-items: center
			.svgicon
				svg
					object-fit: contain
					width: 28px
					height: 28px
					#onlystroke, #onlystroke2
						stroke: white
					#strokeandfill
						stroke: white
						fill: white
					#onlyfill
						fill: white
		.sidebarlinks
			position: fixed
			top: 64px
			height: calc(100vh - 112px)
			left: 0
			width: 100vw
			padding: 32px
			z-index: 800

.sidebar-area.fullHeight
	@media screen and (min-width: 768px)
		grid-template-columns: 1fr 
		grid-template-rows: max-content 1fr 
		grid-template-areas: "socialicons" "sidebarlinks" 
		width: 320px
		padding-left: 40px
		height: calc(100vh - 64px)
		top: 0
	@media screen and (max-width: 767px)
		height: 100vh
		background: rgba(255,255,255,1)
		transition: all 0.23s ease
		position: fixed
		.menuiconarea
			.svgicon
				svg
					#onlystroke, #onlystroke2
						stroke: #272727
					#strokeandfill
						stroke: #272727
						fill: #272727
					#onlyfill
						fill: #272727
		.sidebarlinks
			h6
				text-transform: uppercase
				margin: 0
				font-weight: 600
				padding-top: 24px
				padding-bottom: 6px
				font-size: 20px
			p
				margin: 0
				font-size: 18px
				padding: 3px 0
			.blocking
				height: 16px

.socialicons 
	grid-area: socialicons 

.menuiconarea 
	grid-area: menuiconarea 

.mainpage-area 
	display: grid 
	grid-template-columns: auto
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." 
	grid-area: mainpage-area
	height: 100%
	
@media screen and (min-width: 992px)
	.mainpage-area
		padding-top: 64px

@media screen and (max-width: 991px)
	.mainpage-area
		padding: 64px 24px 64px 24px

@media screen and (max-width: 575px)
	.mainpage-area
		padding: 64px 32px


</style>