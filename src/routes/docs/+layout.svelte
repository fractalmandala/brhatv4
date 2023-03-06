<script lang="ts">
import '$lib/styles/prism.css'
import Documentation from '$lib/components/docs/Documentation.svelte'
import Animation from '$lib/components/docs/Animation.svelte'
import General from '$lib/components/docs/General.svelte'
import PostGre from '$lib/components/docs/PostGre.svelte'
import Supabase from '$lib/components/docs/Supabase.svelte'
import Sveltecode from '$lib/components/docs/Sveltecode.svelte'
import Codes from '$lib/components/docs/Codes.svelte'

let isCat1 = false
let isCat2 = false
let isCat3 = false
let isCat4 = false
let isCat5 = false
let isCat6 = false
let isCat7 = false
let isCat8 = false

function toggleCat1(){
	isCat1 = !isCat1
	if ( isCat2 === true) {
		isCat2 = false
	}
	if ( isCat3 === true) {
		isCat3 = false
	}
	if ( isCat4 === true) {
		isCat4 = false
	}
	if ( isCat5 === true) {
		isCat5 = false
	}
	if ( isCat6 === true) {
		isCat6 = false
	}
	if ( isCat7 === true) {
		isCat7 = false
	}
	if ( isCat8 === true) {
		isCat8 = false
	}
}

function toggleCat2(){
	isCat2 = !isCat2
	if ( isCat1 === true) {
		isCat1 = false
	}
	if ( isCat3 === true) {
		isCat3 = false
	}
	if ( isCat4 === true) {
		isCat4 = false
	}
	if ( isCat5 === true) {
		isCat5 = false
	}
	if ( isCat6 === true) {
		isCat6 = false
	}
	if ( isCat7 === true) {
		isCat7 = false
	}
	if ( isCat8 === true) {
		isCat8 = false
	}
}
function toggleCat3(){
	isCat3 = !isCat3
	if ( isCat1 === true) {
		isCat1 = false
	}
	if ( isCat2 === true) {
		isCat2 = false
	}
	if ( isCat4 === true) {
		isCat4 = false
	}
	if ( isCat5 === true) {
		isCat5 = false
	}
	if ( isCat6 === true) {
		isCat6 = false
	}
	if ( isCat7 === true) {
		isCat7 = false
	}
	if ( isCat8 === true) {
		isCat8 = false
	}
}
function toggleCat4(){
	isCat4 = !isCat4
	if ( isCat1 === true) {
		isCat1 = false
	}
	if ( isCat3 === true) {
		isCat3 = false
	}
	if ( isCat2 === true) {
		isCat2 = false
	}
	if ( isCat5 === true) {
		isCat5 = false
	}
	if ( isCat6 === true) {
		isCat6 = false
	}
	if ( isCat7 === true) {
		isCat7 = false
	}
	if ( isCat8 === true) {
		isCat8 = false
	}
}
function toggleCat5(){
	isCat5 = !isCat5
	if ( isCat1 === true) {
		isCat1 = false
	}
	if ( isCat3 === true) {
		isCat3 = false
	}
	if ( isCat4 === true) {
		isCat4 = false
	}
	if ( isCat2 === true) {
		isCat2 = false
	}
	if ( isCat6 === true) {
		isCat6 = false
	}
	if ( isCat7 === true) {
		isCat7 = false
	}
	if ( isCat8 === true) {
		isCat8 = false
	}
}

function toggleCat6(){
	isCat6 = !isCat6
	if ( isCat1 === true) {
		isCat1 = false
	}
	if ( isCat3 === true) {
		isCat3 = false
	}
	if ( isCat4 === true) {
		isCat4 = false
	}
	if ( isCat5 === true) {
		isCat5 = false
	}
	if ( isCat2 === true) {
		isCat2 = false
	}
	if ( isCat7 === true) {
		isCat7 = false
	}
	if ( isCat8 === true) {
		isCat8 = false
	}
}
function toggleCat7(){
	isCat7 = !isCat7
	if ( isCat1 === true) {
		isCat1 = false
	}
	if ( isCat3 === true) {
		isCat3 = false
	}
	if ( isCat4 === true) {
		isCat4 = false
	}
	if ( isCat5 === true) {
		isCat5 = false
	}
	if ( isCat6 === true) {
		isCat6 = false
	}
	if ( isCat2 === true) {
		isCat2 = false
	}
	if ( isCat8 === true) {
		isCat8 = false
	}
}
function toggleCat8(){
	isCat8 = !isCat8
	if ( isCat1 === true) {
		isCat1 = false
	}
	if ( isCat3 === true) {
		isCat3 = false
	}
	if ( isCat4 === true) {
		isCat4 = false
	}
	if ( isCat5 === true) {
		isCat5 = false
	}
	if ( isCat6 === true) {
		isCat6 = false
	}
	if ( isCat7 === true) {
		isCat7 = false
	}
	if ( isCat2 === true) {
		isCat2 = false
	}
}
</script>


<div class="pad-a">
	<div class="boxr">
	<small on:click={toggleCat1} on:keydown={toggleCat1}>Documentation</small>
	<div class="traybox allwrap">
		{#if isCat1}
			<Documentation></Documentation>
		{/if}
	</div>
		<small on:click={toggleCat2} on:keydown={toggleCat2}>Animation</small>
	<div class="traybox allwrap">
				{#if isCat2}
					<Animation></Animation>
				{/if}	
	</div>
	<small on:click={toggleCat3} on:keydown={toggleCat3}>General</small>
	<div class="traybox allwrap">
				{#if isCat3}
				<General></General>
				{/if}	
	</div>
	<small on:click={toggleCat4} on:keydown={toggleCat4}>PostGRE</small>
	<div class="traybox allwrap">
				{#if isCat4}
					<PostGre></PostGre>
				{/if}	
	</div>
		<small on:click={toggleCat5} on:keydown={toggleCat5}>Supabase</small>
	<div class="traybox allwrap">
				{#if isCat5}
				<Supabase></Supabase>
				{/if}	
	</div>
			<small on:click={toggleCat6} on:keydown={toggleCat6}>Sveltecode</small>
	<div class="traybox allwrap">
			{#if isCat6}
				<Sveltecode></Sveltecode>
			{/if}	
	</div>
			<small on:click={toggleCat7} on:keydown={toggleCat7}>All</small>
	<div class="traybox allwrap">
			{#if isCat7}
				<Codes></Codes>
			{/if}
	</div>
	</div>

	<slot></slot>

</div>

<style lang="sass">

.traybox
	background: white
	width: calc(100vw - 360px)
	height: calc(100vh - 360px)
	position: fixed
	top: 180px
	left: 180px
	display: none

small
	cursor: pointer
	&:hover
		color: #10D56C
</style>