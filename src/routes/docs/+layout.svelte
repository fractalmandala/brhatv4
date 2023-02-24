<script>
import '$lib/styles/prism.css'
import Header from '$lib/components/headers/HeadDocs.svelte'
import Documentation from '$lib/components/docs/Documentation.svelte'
import NewSearch from '$lib/components/reuse/NewSearch.svelte'
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

<Header></Header>
<div class="flexbox-r full">
	<div class="flexbox-c sidebb">
		<h6 class="green"><a href="/docs">Docs Home</a></h6>
		<h6 class="green" on:click={toggleCat1} on:keydown={toggleCat1}>Documentation</h6>
			{#if isCat1}
				<Documentation></Documentation>
			{/if}
		<h6 class="green" on:click={toggleCat2} on:keydown={toggleCat2}>Animation</h6>
			{#if isCat2}
				<Animation></Animation>
			{/if}	
		<h6 class="green" on:click={toggleCat3} on:keydown={toggleCat3}>General</h6>
			{#if isCat3}
				<General></General>
			{/if}	
		<h6 class="green" on:click={toggleCat4} on:keydown={toggleCat4}>PostGRE</h6>
			{#if isCat4}
				<PostGre></PostGre>
			{/if}	
		<h6 class="green" on:click={toggleCat5} on:keydown={toggleCat5}>Supabase</h6>
			{#if isCat5}
				<Supabase></Supabase>
			{/if}	
		<h6 class="green" on:click={toggleCat6} on:keydown={toggleCat6}>Sveltecode</h6>
			{#if isCat6}
				<Sveltecode></Sveltecode>
			{/if}	
		<h6 class="green" on:click={toggleCat8} on:keydown={toggleCat8}>All</h6>
			{#if isCat8}
				<Codes></Codes>
			{/if}	
	</div>
	<div class="flexbox-c main">
		<slot></slot>
	</div>
</div>

<style>

@media screen and (min-width: 768px) {

	.main { width: calc(100% - 320px); padding: 120px 15% 0 40px;}
	.flexbox-r { padding-bottom: 80px;}

}

@media screen and (max-width: 767px) and (min-width: 576px) {

  
	.main { width: calc(100% - 240px); padding: 0;}
	.flexbox-r { padding-bottom: 80px;}

}

@media screen and (max-width: 575px) {
	
	.main { width: 100%; height: 100%; order: 2; padding: none;}

}

</style>