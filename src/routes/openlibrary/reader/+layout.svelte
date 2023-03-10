<script lang="ts">
import { onMount } from 'svelte'
import supabase from '$lib/db'
import { get } from 'svelte/store'
import { writable } from 'svelte/store'
import { slide } from 'svelte/transition'
let expand: boolean[] = [false, false, false, false, false, false, false];
let loadingStore = false
const searchStore = writable('')
const resultsStore = writable([])
let showResults = false
let input:any

onMount(() => {
	input.focus()
})

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
			<h5>Vālmīki Rāmāyaṇa</h5>
			<div class="l1box" on:click={() => toggleKanda(1)} on:keydown={() => toggleKanda(1)}>
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
			<div class="l1box" on:click={() => toggleKanda(2)} on:keydown={() => toggleKanda(2)}>
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
			<div class="l1box" on:click={() => toggleKanda(3)} on:keydown={() => toggleKanda(3)}>
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
			<div class="l1box" on:click={() => toggleKanda(4)} on:keydown={() => toggleKanda(4)}>
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
			<div class="l1box" on:click={() => toggleKanda(5)} on:keydown={() => toggleKanda(5)}>
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
			<div class="l1box" on:click={() => toggleKanda(6)} on:keydown={() => toggleKanda(6)}>
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
			<div class="l1box" on:click={() => toggleKanda(7)} on:keydown={() => toggleKanda(7)}>
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
    <div class="selectionmenu">
			<form class="boxr form">
				<div class="boxc">
					<label for="kanda">Select Kāṇḍa</label>
					<select id="kanda">
						<option value="op1">Option 1</option>
					</select>
				</div>
				<div class="boxc">
					<label for="sarga">Select Sarga</label>
					<select id="sarga">
						<option value="op1">Option 1</option>
					</select>
				</div>
				<div class="boxc">
					<label for="verse">Select Verse</label>
					<select id="verse">
						<option value="op1">Option 1</option>
					</select>
				</div>
				<div class="boxc">
					<label for="pada">Pāda</label>
					<select id="pada">
						<option value="op1">Option 1</option>
					</select>
				</div>
			</form>
			<h6>Select number of <span class="rama">Kāṇḍa > Sarga > Verse > Pāda</span> in sequence to navigate to that pāda's page.</h6>
		</div>
    <div class="renderarea">
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
						<div class="boxc resultitemdata">
							<p>{item.iast}</p>
							<div class="hindi">
								<p>{item.devanagari}</p>
							</div>
						</div>
					</div>
					{/each}
				{/if}
				{/if}
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
	.renderarea
		padding-top: 24px
		padding-left: 24px
		padding-right: 24px
		border: 1px solid #d7d7d7
		margin-top: 32px
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

@media screen and (max-width: 767px)
	.readerbox
		padding: 96px 32px 64px 32px
		grid-template-columns: 1fr 
		grid-template-rows: auto auto 
		gap: 0px 0px 
		grid-template-areas: "readersidebar" "boxarea" 
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
		margin-top: 16px
		h6
			margin: 0
			padding-top: 8px
	.form
		gap: 24px
		flex-wrap: wrap
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
	.renderarea
		margin-top: 32px
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