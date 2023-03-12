<script lang="ts">
import supabase from '$lib/db'
import LogDhiti from '$lib/components/logos/LogDhiti.svelte'
import '$lib/styles/dhitistyling.sass'
import { onMount } from 'svelte';
import { get } from 'svelte/store'
import { writable } from 'svelte/store'
import { scale, slide } from 'svelte/transition'
let xaxis: number = 0;
let isSearch:boolean = false
let onMobile: boolean = false;
let fullHeight = false
let widesearch:boolean = false
const searchStore = writable('')
const resultsStore = writable([])
let loadingStore = false;
let onsearchopen:boolean = false

function toggleWide(){
	widesearch = !widesearch
	onsearchopen = !onsearchopen
}

function toggleMobileLinks() {
  onMobile = !onMobile;
	fullHeight = !fullHeight
}
function toggleSearch(){
	isSearch = !isSearch
}

const searchWords = async () => {
  loadingStore = true;
  let searchTerm = get(searchStore)
  
  // Create array of possible search terms
  let searchTerms = [searchTerm]
  searchTerms.push(searchTerm.replace('a', 'ā'))
  searchTerms.push(searchTerm.replace('i', 'ī'))
  searchTerms.push(searchTerm.replace('u', 'ū'))
  searchTerms.push(searchTerm.replace('s', 'ś'))
  searchTerms.push(searchTerm.replace('s', 'ṣ'))
  searchTerms.push(searchTerm.replace('r', 'ṛ'))
  searchTerms.push(searchTerm.replace('t', 'ṭ'))
  searchTerms.push(searchTerm.replace('d', 'ḍ'))
  searchTerms.push(searchTerm.replace('n', 'ṇ'))
  searchTerms.push(searchTerm.replace('n', 'ñ'))
  searchTerms.push(searchTerm.replace('m', 'ṃ'))
  searchTerms.push(searchTerm.replace('m', 'ṁ'))
  searchTerms.push(searchTerm.replace('l', 'ḷ'))
  searchTerms.push(searchTerm.replace('ch', 'c'))
  
  // Remove duplicates
  searchTerms = Array.from(new Set(searchTerms))
    
  // Search for all possible variations of search term
  let results:any = []
  for (const term of searchTerms) {
    const { data } = await supabase
			.from('brhat-dhiti')
			.select()
			.textSearch('fts', term)
			.order('published date',{ascending: false})
    results = results.concat(data)
  }
    
  // Remove duplicates from results
  results = Array.from(new Set(results))
  
  resultsStore.set(results)
  loadingStore = false;
}

onMount(() => {
  if (xaxis < 768) {
    showLinks = onMobile;
  }
});
$: showLinks = onMobile || xaxis >= 767;


export const Featured = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)

			return {
				meta: metadata,
				path: postPath
			}
		})
	)
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const featuredPosts = allPosts.filter((post) => post.meta.category === "Featured")
	return featuredPosts

}

</script>


<svelte:window bind:innerWidth={xaxis}/>

<div class="containerdhits">
	<div class="dhitihead">
		<LogDhiti></LogDhiti>
	</div>
	<div class="topstrip" class:fullHeight={fullHeight}>
		<div class="boxc categories" class:onsearchopen={onsearchopen}>
			<p><a href="/dhiti/category/cultureandpolicy">Culture and Policy</a></p>
  		<p><a href="/dhiti/category/dharmatoday">Dharma Today</a></p>
  		<p><a href="/dhiti/category/iks">Indian Knowledge Systems</a></p>
  		<p><a href="/dhiti/category/bodhas">Two Bodhas</a></p>
  		<p><a href="/dhiti/category/featured">Featured</a></p>
  		<p><a href="/dhiti">All</a></p>
			{#if isSearch}
			<p class="point" on:click={toggleSearch} on:keydown={toggleSearch} on:click={toggleWide} on:keydown={toggleWide}>Close</p>
			{:else}
			<p class="point" on:click={toggleSearch} on:keydown={toggleSearch} on:click={toggleWide} on:keydown={toggleWide}>Search</p>	
			{/if}
			{#if isSearch}
			<div class="holdssearch" class:widesearch={widesearch} transition:slide>
				<form class="boxr" on:submit={searchWords}>
					<input type="text" on:input={(e) => searchStore.set(e.target.value)} on:keydown={(e) => {if (e.key === 'Enter') {searchWords();}}}/>
					<input type="submit"/>
				</form>
			</div>
			{/if}	
		</div>
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
	</div>
	<div class="mainarea">
		<div class="slotforpage">
			<slot></slot>
		</div>
		<div class="sidebar2 fordhitihead fordhititext">
			{#await Featured()}
			<small>...</small>
			{:then data}
			<h5>Featured</h5>
				{#each data as post}
				<div class="boxc feat">
					<h5><a href={post.path}>{post.meta.title}</a></h5>
					<div class="boxr featrow">
						<small>{post.meta.tags}</small>
					</div>
				</div>
				{/each}
			{/await}
		</div>
	</div>
</div>

<style>

.holdssearch {
	width: 0px;
	height: 48px;
}

.holdssearch.widesearch {
	width: 400px;
	height: 48px;
}
.holdssearch form {
	display: flex;
	flex-direction: row;
	height: 48px;
	align-items: center;
	gap: 16px;
}
.holdssearch.widesearch form {
	display: flex;
	flex-direction: row;
	height: 32px;
	align-items: center;
	gap: 16px;
}
.holdssearch form input {
	height: 32px;
}
.holdssearch form input[type=text] {
	border-top: none;
	border-left: none;
	border-right: none;
	border-bottom: 1px solid #fe4a49;
}
.holdssearch form input[type=submit] {
	background: white;
	border: 1px solid #474747;
	border-radius: 2px;
	color: #474747;
	transform-origin: center center;
	transition: all 0.09s var(--cubea);
	cursor: pointer;
}
.holdssearch form input[type=submit]:hover {
	transform: scale(0.9);
	background: #fe4a49;
	color: white;
}

</style>