<script lang="ts">
import { onMount } from 'svelte'
import supabase from '$lib/db'
import tippy from 'tippy.js'
import { get } from 'svelte/store'
import { writable } from 'svelte/store'
import { slide } from 'svelte/transition'
import '$lib/styles/ramayanastyling.sass'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import 'tippy.js/dist/backdrop.css';
let expand: boolean[] = [false, false, false, false, false, false, false];
let loadingStore = false
let heighter:any
const searchStore = writable('')
const resultsStore = writable([])
let showResults = false
let input:any
let selectKanda:any = ''
let selectSarga:any
let selectVerse:any
let selectPada:any
let shortSelect:boolean = true
let readerHelp:boolean = false

let kandas = [
	{ value: 1, label: '1' },
	{ value: 2, label: '2' },
	{ value: 3, label: '3' },
	{ value: 4, label: '4' },
	{ value: 5, label: '5' },
	{ value: 6, label: '6' },
	{ value: 7, label: '7' },
]
let sargas:any = []
let verses:any = []
let padas:any = []

onMount(() => {
	input.focus()
	tippy ('#selectionhelp', {
		content: 'Selection works only in sequence, one after the other.',
		arrow: false,
		theme: 'dark',
		inertia: true,
		placement: 'bottom'
	})
})

function showReaderHelp(){
	readerHelp = !readerHelp
}

function shortenSelect(){
	shortSelect = !shortSelect
}

function toggleHeighter(){
	heighter = !heighter
}

const searchWord = async() => {
	loadingStore = true
	showResults = true
	const searchTerm = get(searchStore)
	let results:any = []
	const { data, error } = await supabase
		.from('db-ramayana')
		.select()
		.textSearch('ftsmain', searchTerm)
		.order('id')
		if (error) throw new Error(error.message)
		results = results.concat(data)
	// @ts-ignore
	resultsStore.set(data)
	loadingStore = false
	input.value = ''
}


function closeResults(){
	showResults = false
}

export async function getSargas(){
	const { data, error } = await supabase
	.from('db-ramayanaindex')
	.select()
	.eq('kanda',`${selectKanda}`)
	.eq('type','kandasarga')
	.order('id')
	if (error) throw new Error(error.message)
	sargas = data
}

export async function getVerses(){
	const { data, error } = await supabase
	.from('db-ramayanaindex')
	.select()
	.eq('kanda',`${selectKanda}`)
	.eq('sarga',`${selectSarga}`)
	.eq('type','sargaverse')
	.order('id')
	if (error) throw new Error(error.message)
	verses = data
}

export async function getPadas(){
	const { data, error } = await supabase
	.from('db-ramayanaindex')
	.select()
	.eq('kanda',`${selectKanda}`)
	.eq('sarga',`${selectSarga}`)
	.eq('verse',`${selectVerse}`)
	.eq('type','verseslug')
	.order('id')
	if (error) throw new Error(error.message)
	padas = data
}

function gotoPada(){
	window.location.href=`/openlibrary/reader/ramayana/kanda/${selectPada}`
	selectKanda = ''
}


export async function kanda1(){
	const { data, error } = await supabase
		.from('db-ramayanaindex')
		.select()
		.eq('kanda',1)
		.eq('type','kandasarga')
		.order('id')
		if (error) throw new Error(error.message)
		return data
}

export async function kanda2(){
	const { data, error } = await supabase
		.from('db-ramayanaindex')
		.select()
		.eq('kanda',2)
		.eq('type','kandasarga')
		.order('id')
		if (error) throw new Error(error.message)
		return data
}

export async function kanda3(){
	const { data, error } = await supabase
		.from('db-ramayanaindex')
		.select()
		.eq('kanda',3)
		.eq('type','kandasarga')
		.order('id')
		if (error) throw new Error(error.message)
		return data
}

export async function kanda4(){
	const { data, error } = await supabase
		.from('db-ramayanaindex')
		.select()
		.eq('kanda',4)
		.eq('type','kandasarga')
		.order('id')
		if (error) throw new Error(error.message)
		return data
}

export async function kanda5(){
	const { data, error } = await supabase
		.from('db-ramayanaindex')
		.select()
		.eq('kanda',5)
		.eq('type','kandasarga')
		.order('id')
		if (error) throw new Error(error.message)
		return data
}

export async function kanda6(){
	const { data, error } = await supabase
		.from('db-ramayanaindex')
		.select()
		.eq('kanda',6)
		.eq('type','kandasarga')
		.order('id')
		if (error) throw new Error(error.message)
		return data
}

export async function kanda7(){
	const { data, error } = await supabase
		.from('db-ramayanaindex')
		.select()
		.eq('kanda',7)
		.eq('type','kandasarga')
		.order('id')
		if (error) throw new Error(error.message)
		return data
}

function toggleKanda(index:number){
	expand[index] = !expand[index]
	for (let i = 0; i < expand.length; i++) {
		if (i !== index && expand[i] === true) {
			expand[i] = false;
		}
	}
}
</script>

<div class="readerbox">
  <div class="readersidebar">
		<div class="readerlinks">
			<h5><a href="/openlibrary/reader/ramayana">Vālmīki Rāmāyaṇa*</a></h5>
			<h4 class="rama point" on:click={showReaderHelp} on:keydown={showReaderHelp}>*How to Use this Rāmāyaṇa Reader</h4>
			<div class="l1box nonsearch" on:click={() => toggleKanda(1)} on:keydown={() => toggleKanda(1)}>
				{#await kanda1()}
				<small>.</small>
				{:then data}
				<p>1 - Bāla Kāṇḍa</p>
				{#if expand[1]}
					<h6 class="helpersmall">Select Sarga:</h6>
					<div class="gridbox" transition:slide>
					{#each data as item}
					<small>{item.sarga}</small>
					{/each}
					</div>
				{/if}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
			<div class="l1box nonsearch" on:click={() => toggleKanda(2)} on:keydown={() => toggleKanda(2)}>
				{#await kanda2()}
				<small>.</small>
				{:then data}
				<p>2 - Ayodhyā Kāṇḍa</p>
				{#if expand[2]}
					<h6 class="helpersmall">Select Sarga:</h6>
					<div class="gridbox" transition:slide>
					{#each data as item}
					<small>{item.sarga}</small>
					{/each}
					</div>
				{/if}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
			<div class="l1box nonsearch" on:click={() => toggleKanda(3)} on:keydown={() => toggleKanda(3)}>
				{#await kanda3()}
				<small>.</small>
				{:then data}
				<p>3 - Araṇya Kāṇḍa</p>
				{#if expand[3]}
					<h6 class="helpersmall">Select Sarga:</h6>
					<div class="gridbox" transition:slide>
					{#each data as item}
					<small>{item.sarga}</small>
					{/each}
					</div>
				{/if}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>			
			<div class="l1box nonsearch" on:click={() => toggleKanda(4)} on:keydown={() => toggleKanda(4)}>
				{#await kanda4()}
				<small>.</small>
				{:then data}
				<p>4 - Kiśkindha Kāṇḍa</p>
				{#if expand[4]}
					<h6 class="helpersmall">Select Sarga:</h6>
					<div class="gridbox" transition:slide>
					{#each data as item}
					<small>{item.sarga}</small>
					{/each}
					</div>
				{/if}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
			<div class="l1box nonsearch" on:click={() => toggleKanda(5)} on:keydown={() => toggleKanda(5)}>
				{#await kanda5()}
				<small>.</small>
				{:then data}
				<p>5 - Sundara Kāṇḍa</p>
				{#if expand[5]}
					<h6 class="helpersmall">Select Sarga:</h6>
					<div class="gridbox" transition:slide>
					{#each data as item}
					<small>{item.sarga}</small>
					{/each}
					</div>
				{/if}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
			<div class="l1box nonsearch" on:click={() => toggleKanda(6)} on:keydown={() => toggleKanda(6)}>
				{#await kanda6()}
				<small>.</small>
				{:then data}
				<p>6 - Yuddha Kāṇḍa</p>
				{#if expand[6]}
					<h6 class="helpersmall">Select Sarga:</h6>
					<div class="gridbox" transition:slide>
					{#each data as item}
					<small>{item.sarga}</small>
					{/each}
					</div>
				{/if}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
			<div class="l1box nonsearch" on:click={() => toggleKanda(7)} on:keydown={() => toggleKanda(7)}>
				{#await kanda7()}
				<small>.</small>
				{:then data}
				<p>7 - Uttara Kāṇḍa</p>
				{#if expand[7]}
					<h6 class="helpersmall">Select Sarga:</h6>
					<div class="gridbox" transition:slide>
					{#each data as item}
					<small>{item.sarga}</small>
					{/each}
					</div>
				{/if}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
			<div class="l1box searchbox">
					<input type="text" placeholder="Search"
						bind:this={input}
						on:input={(e) => searchStore.set(e.target.value)} 
  					on:keydown={(e) => {
    					if (e.key === 'Enter') {
      					searchWord();
    					}
 						}}
						/>
					<button class="readerbutton ramayana" on:click={searchWord} on:keydown={searchWord}>Search</button>
					<h6>Enter any search term, in IAST, regular English or देवनागरी</h6>
			</div>
		</div>
		<div class="searchisresults" data-lenis-prevent>
			{#if loadingStore}
				<p>Searching...</p>
				{/if}
				{#if showResults}
				{#if $resultsStore.length>0}
				<p class="closelink" on:click={closeResults} on:keydown={closeResults}>CLOSE</p>
					{#each $resultsStore as item, delay}
					<div class="boxc resultitem" in:slide={{ delay: delay + 49}} out:slide={{ delay: 0}}>
						<div class="boxc resultitemindex">
							<h6>{item.slug}</h6>
						</div>
						<div class="boxc resultitemdata"><a href="/openlibrary/reader/ramayana/{item.slug}" on:click={closeResults} on:keydown={closeResults}>
							<p>{item.iast}</p>
							<div class="hindi">
								<p>{item.devanagari}</p>
							</div></a>
						</div>
					</div>
					{/each}
				{/if}
			{/if}
		</div>
	</div>
  <div class="boxarea">
		<div class="selectionmenu" id="selectionhelp" class:heighter={heighter}>
			{#if shortSelect}
			<form class="boxr form">
				<div class="informlink" on:click={toggleHeighter} on:keydown={toggleHeighter}>
					{#if heighter}
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
				<div class="boxc">
					<label for="kanda">Select Kāṇḍa</label>
					<select id="kanda" bind:value={selectKanda} on:change={getSargas}>
						{#each kandas as kanda}
						<option value={kanda.value}>{kanda.label}</option>
						{/each}
					</select>
				</div>
				<div class="boxc">
					<label for="sarga">Select Sarga</label>
					<select id="sarga" bind:value={selectSarga} on:change={getVerses}>
						{#each sargas as sarga}
						<option value={sarga.sarga}>{sarga.sarga}</option>
						{/each}
					</select>
				</div>
				<div class="boxc">
					<label for="verse">Select Verse</label>
					<select id="verse" bind:value={selectVerse} on:change={getPadas}>
						{#each verses as verse}
						<option value={verse.verse}>{verse.verse}</option>
						{/each}
					</select>
				</div>
				<div class="boxc">
					<label for="pada">Pāda</label>
					<select id="pada" bind:value={selectPada} on:change={gotoPada}>
						{#each padas as pada}
						<option value={pada.slug}>{pada.slug}</option>
						{/each}
					</select>
				</div>
			</form>
			<h6 class="mobileh6">Select number of <span class="rama">Kāṇḍa > Sarga > Verse > Pāda</span> in sequence to navigate to that pāda's page.</h6>
			{/if}
			{#if heighter}
			<div class="mobilesearch">
				<input type="text" placeholder="Search"
						bind:this={input}
						on:input={(e) => searchStore.set(e.target.value)} 
  					on:keydown={(e) => {
    					if (e.key === 'Enter') {
      					searchWord();
    					}
 						}}
						/>
				<button class="readerbutton ramayana" on:click={searchWord} on:keydown={searchWord} on:click={shortenSelect} on:keydown={shortenSelect}>Search</button>
				<h6>Enter any search term, in IAST, regular English or देवनागरी</h6>
					<div class="mobileisresults"on:click={closeResults} on:keydown={closeResults}>
						{#if loadingStore}
							<p>Searching...</p>
						{/if}
						{#if showResults}
							{#if $resultsStore.length>0}
							<p class="closelinkmobile" on:click={closeResults} on:keydown={closeResults} on:click={shortenSelect} on:keydown={shortenSelect}>CLOSE</p>
								{#each $resultsStore as item, delay}
								<div class="boxc resultitemmobile" in:slide={{ delay: delay + 49}} out:slide={{ delay: 0}}>
									<div class="boxc resultitemindexmobile">
										<h6>{item.slug}</h6>
									</div>
									<div class="boxc resultitemdatamobile"><a href="/openlibrary/reader/ramayana/kanda/{item.slug}" on:click={closeResults} on:keydown={closeResults} on:click={shortenSelect} on:keydown={shortenSelect} on:click={toggleHeighter} on:keydown={toggleHeighter}>
										<p>{item.iast}</p>
										<div class="hindi">
											<p>{item.devanagari}</p>
										</div></a>
									</div>
								</div>
								{/each}
							{/if}
						{/if}
					</div>
				</div>
			{/if}
		</div>
    <div class="renderarea">
			<div class="searchitems">
			</div>
			<div class="pageitems" id="wordscaution">
				<slot></slot>
			</div>
		</div>
  </div>
</div>
{#if readerHelp}
<div class="reader-helper" transition:slide data-lenis-prevent>
	<h6 class="point" on:click={showReaderHelp} on:click={showReaderHelp}>CLOSE</h6>
	<p class="wide75">
		Namaste. Welcome to the Rāmāyaṇa reader for course participants of Bṛhat Draṣṭā's Vālmīki Rāmāyaṇa course with Shri Ami Ganatra.
		To help you navigate and explore the reader, we've split it into 4 sections:
	</p>
	<div class="grid-in-helper">
		<div class="gridbox1">
			<h5>Search Function</h5>
			<p>Notice the search bar on the left side of the screen if you are on desktop, or on clicking the icon with 3 dots at the bottom of your screen if you are on mobile.<br><br>
			Enter any word into it- in regular English, in IAST, or in Devanāgarī, and it will show you a list of pādas containing the word. Click on any pāda to navigate to its respective page. <span class="rama">Try it now with the word "Rama"!</span>
			</p>
		</div>
		<div class="gridbox2">
			<h5>Navigation Links</h5>
			<p>
			The navigation links in your browser's address bar are conveniently indexed. Take a look at the part in the link after "kanda/."<br><br>
			It is a simple index in the form of (kandaNumber)/(sargaNumber)/(verseNumber)/(pada).<br><br>
			So, go to "/kanda/1" to go to the page of Kāṇḍa 1, or to "/kanda/5/6" to reach Kāṇḍa 5, Sarga 6, or to "/kanda/3/5/1/ab" to find Kāṇḍa 3, Sarga 5, Verse 1, Pāda AB, and so on!
			</p>
		</div>
		<div class="gridbox3">
			<h5>Selection Menu</h5>
			<p>On desktop, at the top of each page; or on mobile on clicking the icon with 3 dots at the bottom, you will find a selection menu to go to any specific pāda. In it, selected Kāṇḍa, then Sarga, then Verse and then Pāda in that sequence, to reach the specific page.</p>
		</div>
		<div class="gridbox4">
			<h5>Page Results</h5>
			<p>
				The final and detailed page is at pāda level, for example at /kanda/1/1/1/ab where "ab" represents the pāda.<br><br>
				The page of any Kāṇḍa displays its respective Sargas, of any Sargas shows its Verses, and of any Verse displays the pādas. They are all linked to navigate from one to another.<br><br>
				Each the final pāda pages, find each pāda split into its constituent words, and the dictionary meaning of each word.
			</p>
		</div>
	</div>
	<h5 class="start" on:click={showReaderHelp} on:keydown={showReaderHelp}><a href="/openlibrary/reader/ramayana/kanda/1/1/1/ab">Begin at Kāṇḍa 1, Sarga 1, Verse 1, Pāda 1</a></h5>
</div>
{/if}

<style lang="sass">

.start
	margin-top: 32px
	a
		color: var(--rama)
		&:hover
			color: var(--rama)
			text-decoration: underline

.reader-helper
	position: fixed
	display: flex
	flex-direction: column
	top: 80px
	right: 64px
	width: calc(100% - 128px)
	height: calc(100vh - 100px)
	z-index: 10
	background: white
	border: 1px solid var(--rama)
	box-shadow: var(--plainshadow)
	padding: 16px 64px
	h4
		font-size: 32px
	h5
		font-size: 24px
		color: #878787
		margin-bottom: 8px
	h6
		font-size: 14px
		margin: 0
		padding-bottom: 16px
	p
		font-size: 14px
		color: #474747
		margin-top: 0

.gridbox1
	grid-area: gridbox1
	border: 1px solid #d7d7d7
	border-radius: 4px
	padding: 0 16px
.gridbox2
	grid-area: gridbox2
	border: 1px solid #d7d7d7
	border-radius: 4px
	padding: 0 16px
.gridbox3
	grid-area: gridbox3
	border: 1px solid #d7d7d7
	border-radius: 4px
	padding: 0 16px
.gridbox4
	grid-area: gridbox4
	border: 1px solid #d7d7d7
	border-radius: 4px
	padding: 0 16px

@media screen and (min-width: 1024px)
	.mobilesearch
		display: none
	.grid-in-helper
		display: grid
		grid-template-columns: 1fr 1fr
		grid-template-rows: auto auto
		grid-template-areas: "gridbox1 gridbox2" "gridbox3 gridbox4"
		grid-auto-flow: row
		gap: 16px 32px
		margin-top: 16px
		p
			font-size: 12px

@media screen and (max-width: 1023px)
	.mobileisresults
		height: 55vh
		overflow-y: scroll
		margin-top: 32px
		.closelinkmobile
			color: white
			cursor: pointer
		.resultitemmobile
			h6, p
				color: white
				margin: 0
			margin-bottom: 12px
	.reader-helper
		width: 100%
		right: 0
		left: 0
		top: 64px
		padding: 32px
		height: calc(100vh - 64px)
		overflow-y: scroll
	.grid-in-helper
		grid-template-columns: 1fr
		grid-template-rows: auto auto auto auto
		grid-template-areas: "gridbox1" "gridbox2" "gridbox3" "gridbox4"
		display: grid
		gap: 24px 0
		h5
			font-size: 18px
			font-weight: 600
		p
			font-size: 12px
	.start
		font-size: 20px !important
	.gridbox1
		grid-area: gridbox1
	.gridbox2
		grid-area: gridbox2
	.gridbox3
		grid-area: gridbox3
	.gridbox4
		grid-area: gridbox4

</style>