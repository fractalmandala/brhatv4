<script lang="ts">
import { onMount } from 'svelte'
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

<NewSearch></NewSearch>
<div id="cat-0" class="cat">
	<h6 class="green w400 wide75"><a href="/docs">Docs Home</a></h6>
</div>
<div id="cat-1" class="cat" on:click={toggleCat1} on:keydown={toggleCat1}>
	<h6 class="green w400 wide75">Documentation</h6>
	{#if isCat1}
	<Documentation></Documentation>
	{/if}
</div>
<div id="cat-2" class="cat" on:click={toggleCat2} on:keydown={toggleCat2}>
	<h6 class="green w400 wide75">Animation</h6>
	{#if isCat2}
	<Animation></Animation>
	{/if}
</div>
<div id="cat-3" class="cat" on:click={toggleCat3} on:keydown={toggleCat3}>
	<h6 class="green w400 wide75">General</h6>
	{#if isCat3}
	<General></General>
	{/if}
</div>
<div id="cat-4" class="cat" on:click={toggleCat4} on:keydown={toggleCat4}>
	<h6 class="green w400 wide75">SQL</h6>
	{#if isCat4}
		<PostGre></PostGre>
	{/if}
</div>
<div id="cat-5" class="cat" on:click={toggleCat5} on:keydown={toggleCat5}>
	<h6 class="green w400 wide75">Supabase</h6>
	{#if isCat5}
		<Supabase></Supabase>
	{/if}
</div>
<div id="cat-6" class="cat" on:click={toggleCat6} on:keydown={toggleCat6}>
	<h6 class="green w400 wide75">Sveltecode</h6>
	{#if isCat6}
		<Sveltecode></Sveltecode>
	{/if}
</div>
<div id="cat-8" class="cat" on:click={toggleCat8} on:keydown={toggleCat8}>
	<h6 class="green w400 wide75">All</h6>
	{#if isCat8}
		<Codes></Codes>
	{/if}
</div>


<style>

.cat {
	transition: width 0.42s ease;
	display: flex;
	flex-direction: column;
}


@media screen and (max-width: 576px) {
	.cat {
		background: transparent;
	}

}
</style>
