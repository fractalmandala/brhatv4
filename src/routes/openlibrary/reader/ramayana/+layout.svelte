<script lang="ts">
import { onMount } from 'svelte'
import supabase from '$lib/db'
import { get } from 'svelte/store'
import { writable } from 'svelte/store'
import { slide } from 'svelte/transition'
let expand: boolean[] = [false, false, false, false, false, false, false];
let loadingStore = false
let heighter:any
const searchStore = writable('')
const resultsStore = writable([])
let showResults = false
let input:any
let selectKanda:any
let selectSarga:any
let selectVerse:any
let selectPada:any

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
})

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
	window.location.href=`/openlibrary/reader/ramayana/${selectPada}`
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
			<h5><a href="/openlibrary/reader/ramayana">Vālmīki Rāmāyaṇa</a></h5>
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
	</div>
  <div class="boxarea">
		<div class="selectionmenu" class:heighter={heighter}>
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
			<h6>Select number of <span class="rama">Kāṇḍa > Sarga > Verse > Pāda</span> in sequence to navigate to that pāda's page.</h6>
		</div>
    <div class="renderarea">
			<div class="searchitems">
				{#if loadingStore}
				<p>Searching...</p>
				{/if}
				{#if showResults}
				{#if $resultsStore.length>0}
				<p class="closelink" on:click={closeResults} on:keydown={closeResults}>CLOSE</p>
					{#each $resultsStore as item, delay}
					<div class="boxr resultitem" in:slide={{ delay: delay + 49}} out:slide={{ delay: 0}}>
						<div class="boxc resultitemindex">
							<h6>Kanda {item.kanda} | Sarga {item.sarga} | Verse {item.verse} | Pāda {item.pada}</h6>
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
			<div class="pageitems">
				<slot></slot>
			</div>
		</div>
  </div>
</div>

<style lang="sass">

.readerbox 
	display: grid 
	grid-template-columns: 300px auto 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "readersidebar boxarea" 
.readersidebar 
	grid-area: readersidebar
	.readerlinks
		h5
			margin: 0 0 8px 0
			font-weight: 600
			text-transform: uppercase
			color: #676767
			border-bottom: 1px solid #d7d7d7
			border-left-color: transparent
			transition: all 0.09s var(--cubed)
			border-left-style: solid
			cursor: pointer
			&:hover
				border-left-color: var(--rama)
			a
				&:hover
					color: var(--rama)
		p
			margin: 0
			font-weight: 400
			text-transform: uppercase
			padding: 8px 32px
			border-bottom: 1px solid #d7d7d7
			transition: all 0.07s var(--cubea)
			cursor: pointer
			&:hover
				background: var(--rama)
				color: white
	.readerexpand
		background: #272727
.boxarea 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "selectionmenu" "renderarea" 
	grid-area: boxarea 
.selectionmenu 
	grid-area: selectionmenu 
.renderarea 
	grid-area: renderarea 
	display: grid
	grid-template-columns: 1fr
	grid-template-rows: auto auto
	gap: 0px 0px
	grid-auto-flow: row
	grid-template-areas: "searchitems" "pageitems"
.searchitems
	grid-area: searchitems
.pageitems
	grid-area: pageitems

.gridbox
	display: grid
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr
	grid-template-rows: auto
	grid-template-areas: ". . . ."
	gap: 8px 16px
	grid-auto-flow: row
	background: #f7f7f7
	border-radius: 4px
	small
		margin: 0
		text-align: center

.l1box
	input[type=text]
		padding: 8px
		border-bottom: 1px solid var(--rama)
		border-top: none
		border-left: none
		border-right: none
		border-radius: 2px
	button
		background: var(--rama)
		border: 1px solid var(--rama)
		color: white
		border-radius: 2px
		width: 30%
		padding: 8px

.searchbox, .selectionmenu
	h6
		margin: 0
		font-weight: 400
		color: #878787
		padding-top: 8px

.closelink
	color: #878787
	cursor: pointer

.resultitem
	p, small, h6
		margin: 0
	h6
		text-transform: uppercase
		color: var(--rama)
	small
		color: #676767

@media screen and (min-width: 1024px)
	.nonsearch
		display: none
	.readerbox
		min-height: 100vh
		padding: 120px 64px 64px 64px
		gap: 0 64px
	.readersidebar h5
		padding: 4px
		border-left-width: 8px
	.form
		gap: 64px
		label, select, option
			font-family: 'Spline Sans', sans-serif
		label
			font-size: 12px
			text-transform: uppercase
			color: #b7b7b7
			margin-bottom: 8px
		select
			border: 1px solid #d7d7d7
			padding: 8px
			border-radius: 2px
			color: #878787
			box-shadow: var(--plainshadow)
		.boxc
			width: 25%
	.helpersmall
		padding: 16px 0 4px 16px
		margin: 0
		font-weight: 400
		font-size: 14px
		border-bottom: 1px solid #d7d7d7
		color: #e4a503
	.gridbox
		padding: 16px
		box-shadow: 4px 3px 6px #e1e1e1
		transition: all 0.18s var(--cubea)
		&:hover
			box-shadow: none
	.searchbox
		padding-left: 32px
		margin-top: 16px
	.searchitems
		height: max-content
	.renderarea
		padding-top: 24px
		padding-left: 24px
		padding-right: 24px
		border: 1px solid #d7d7d7
		margin-top: 32px
		align-content: start
	.resultitem
		transition: all 0.11s var(--cubeb)
		padding: 8px 16px
		.resultitemindex
			width: 15%
		p
			font-size: 1rem
			color: #878787
		.hindi p
			font-size: 1.28rem
			color: #272727
		h6
			padding: 8px 0 8px 0
			margin: 0
		small
			padding-top: 16px
			font-size: 12px
		&:hover
			background: #f7f7f7
			box-shadow: 4px 3px 6px #e1e1e1
	.closelink
		background: #676767
		color: white
		padding: 4px 8px
		font-size: 14px
		width: max-content
		border-radius: 4px

@media screen and (min-width: 768px)
	.informlink
		display: none

@media screen and (max-width: 767px)
	.readerbox
		padding: 96px 32px 64px 32px
		grid-template-columns: 1fr 
		grid-template-rows: auto auto 
		gap: 0px 0px 
		grid-template-areas: "readersidebar" "boxarea" 
		min-height: 100vh
	.readerlinks h5
		font-size: 18px
	.readerlinks p
		font-size: 16px
		padding: 6px !important
	.searchbox
		margin-top: 16px
		input[type=text]
			width: 64%
		button
			width: calc(36% - 8px)
	.selectionmenu
		padding: 16px 16px 16px 16px
		border-bottom: 1px solid #d7d7d7
		border-top: 1px solid #d7d7d7
		position: fixed
		bottom: 0
		left: 0
		background: rgba(0,0,0,0.8)
		width: 100%
		height: 48px
		transition: all 0.14s var(--cubec)
		h6
			margin: 0
			padding-top: 8px
			display: none
		.form
			.boxc
				display: none
			.informlink
				display: flex
				position: fixed
				justify-content: center
				align-items: center
				width: 100%
				bottom: 0
				height: 48px
				svg
					height: 24px
					width: 24px
	.form
		gap: 24px
		flex-direction: column
		.boxc
			width: calc(50% - 12px)
		label, select, option
			font-family: 'Spline Sans', sans-serif
		label
			font-size: 12px
			text-transform: uppercase
			color: #b7b7b7
			margin-bottom: 8px
		select
			border: 1px solid #d7d7d7
			padding: 8px
			border-radius: 2px
			color: #878787
			box-shadow: none
	.selectionmenu.heighter
		height: 100vh
		transition: all 0.14s var(--cubec)
		h6
			display: block
		.form
			.boxc
				display: flex
	.renderarea
		margin-top: 32px
	.nonsearch
		display: none
	.resultitem
		flex-direction: column
		border-bottom: 1px solid #d7d7d7
		padding-bottom: 8px
		margin-bottom: 16px
		.hindi p
			font-size: 24px
			color: #272727
		p
			color: #878787
			font-size: 14px	
		h6
			margin-bottom: 8px
	.closelink
		font-size: 14px
		background: #676767
		color: white
		width: max-content
		padding: 4px
		margin-bottom: 32px
	.gridbox
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 
		grid-template-rows: auto
		grid-template-areas: ". . . ."
		gap: 8px 16px
		padding: 16px
		margin-bottom: 16px
	.helpersmall
		padding: 16px 0 4px 16px
		margin: 0
		font-weight: 400
		font-size: 14px
		border-bottom: 1px solid #d7d7d7
		color: #e4a503

</style>