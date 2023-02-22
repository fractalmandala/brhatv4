<script>
import supabase from '$lib/db'
import RamayanaLem from '$lib/components/reader/RamayanaLem.svelte'
/**
	 * @type {null}
	 */
let selectionA = null
/**
	 * @type {null}
	 */
let selectionB = null
/**
	 * @type {null}
	 */
let selectionC = null

/**
	 * @type {null}
	 */
let selectionD = null

let itemsA = [
	{ value: 1, label: '1' },
	{ value: 2, label: '2' },
	{ value: 3, label: '3' },
	{ value: 4, label: '4' },
	{ value: 5, label: '5' },
	{ value: 6, label: '6' },
	{ value: 7, label: '7' }
]

/**
	 * @type {any[]}
	 */
let itemsB = []
/**
	 * @type {any[]}
	 */
let itemsC = []
/**
	 * @type {any[]}
	 */
let itemsD = []


export async function getSuktas() {
		const { data, error } = await supabase
			.from('db-ramayana')
			.select()
			.eq('kanda',`${selectionA}`)
			.order('id')
			if (error) throw new Error(error.message)
			itemsB = data
}

async function getRcas() {
	const { data, error } = await supabase
		.from('db-ramayana')
		.select()
		.eq('kanda',`${selectionA}`)
		.eq('sarga',`${selectionB}`)
		.order('id')
		if (error) throw new Error(error.message)
		itemsC = data
}

async function getPadas() {
	const { data, error } = await supabase
		.from('db-ramayana')
		.select()
		.eq('kanda',`${selectionA}`)
		.eq('sarga',`${selectionB}`)
		.eq('verse',`${selectionC}`)
		.order('id')
		if (error) throw new Error(error.message)
		itemsD = data
}

function goToPage() {
	window.location.href = `/openlibrary/reader/ramayana/${selectionA}/${selectionB}/${selectionC}/${selectionD}`
}
</script>


<div class="selection-menu gap16 flexbox-r">
	<div class="inner-menu menu-1">
		<label>Kāṇḍa</label>
		<select bind:value={selectionA} on:change={getSuktas}>
		{#each itemsA as item}
			<option value={item.value}>{item.label}</option>
		{/each}
		</select>
	</div>
	<div class="inner-menu menu-2">
		<label for="item-B">Sarga</label>
		<select id="item-B" bind:value={selectionB} on:change={() => {getRcas(); selectionC = null; selectionD = null}}>
		{#each itemsB as item}
			<option value={item.sarga}>{item.sarga}</option>
		{/each}			
		</select>
	</div>
	<div class="inner-menu menu-3">
		<label for="item-C">Verse</label>
		<select id="item-C" bind:value={selectionC} on:change={() => {getPadas(); selectionD = null}}>
		{#each itemsC as item}
			<option value={item.verse}>{item.verse}</option>
		{/each}
		</select>
	</div>
	<div class="inner-menu menu-4">
		<label for="item-D">Pāda</label>
		<select id="item-D" bind:value={selectionD} on:change={goToPage}>
		{#each itemsD as item}
			<option value={item.index}>{item.index}</option>
		<RamayanaLem x={item.index}></RamayanaLem>
		{/each}
		</select>
	</div>
	
</div>

<style lang="sass">

.flexbox-r
	position: relative
	label
		font-size: 12px
		text-transform: uppercase
		font-weight: bold
		letter-spacing: 1px
		color: #878787
	select
		background-color: white
		border-radius: 4px
		padding: 4px			
		margin: 0   
		width: 200px
		appearance: none
		background-image: url('/images/icons/downarrow.svg')
		background-position: right 10px center
		background-repeat: no-repeat
		background-size: 24px 24px
		.classic
			background: var(--beau)
			background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), 100% 0
			background-size: 15px 15px, 15px 15px, 2.5em 2.5em
			background-repeat: no-repeat
			&:focus
				background-image: linear-gradient(45deg, white 50%, transparent 50%), linear-gradient(135deg, transparent 50%, white 50%), linear-gradient(to right, gray, gray)
				background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, 100% 0
				background-size: 15px 15px, 15px 15px, 2.5em 2.5em
				background-repeat: no-repeat
				border-color: grey
				outline: 0


@media screen and (min-width: 900px) 
		.inner-menu
			width: 20%

@media screen and (max-width: 899px) and (min-width: 768px)
	.r-r-r-c
		flex-direction: row

@media screen and (max-width: 767px) and (min-width: 576px)
	.r-r-r-c
		flex-direction: row

@media screen and (max-width: 575px)
	.r-r-r-c
		flex-direction: column
</style>