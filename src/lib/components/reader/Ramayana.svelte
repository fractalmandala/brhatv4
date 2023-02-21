<script>
import supabase from '$lib/db'

let selectionA = 1
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
	{ value: 3, label: 'Aranya Kāṇḍa' },
	{ value: 4, label: 'Kiśkindha Kāṇḍa' },
	{ value: 5, label: 'Sundara Kāṇḍa' },
	{ value: 6, label: 'Yuddha Kāṇḍa' },
	{ value: 7, label: 'Uttara Kāṇḍa' }
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

<div class="selection-menu r-r-r-c">
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
		<select id="item-B" bind:value={selectionB} on:change={getRcas}>
		{#each itemsB as item}
			<option value={item.sarga}>{item.sarga}</option>
		{/each}			
		</select>
	</div>
	<div class="inner-menu menu-3">
		<label for="item-C">Verse</label>
		<select id="item-C" bind:value={selectionC} on:change={getPadas}>
		{#each itemsC as item}
			<option value={item.verse}>{item.verse}</option>
		{/each}
		</select>
	</div>
	<div class="inner-menu menu-4">
		<label for="item-D">Pāda</label>
		<select id="item-D" bind:value={selectionD} on:change={goToPage}>
		{#each itemsD as item}
			<option value={item.pada}>{item.pada}</option>
		{/each}
		</select>
	</div>
</div>


<style lang="sass">

.selection-menu
	display: flex
	margin-bottom: 1.44em
	label
		font-size: 10px
		text-transform: uppercase
		font-weight: bold
		letter-spacing: 1px
		color: #878787
	select
		width: 100%
		border: 1px solid #d7d7d7
		height: 20px
		background-color: transparent
		margin-top: 4px

@media screen and (min-width: 900px) 
	.r-r-r-c
		flex-direction: row

	.selection-menu
		gap: 2em
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