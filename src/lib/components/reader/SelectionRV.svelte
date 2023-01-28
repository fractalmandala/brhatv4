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

let itemsA = [
	{ value: 1, label: '1' },
	{ value: 2, label: '2' },
	{ value: 3, label: '3' },
	{ value: 4, label: '4' },
	{ value: 5, label: '5' },
	{ value: 6, label: '6' },
	{ value: 7, label: '7' },
	{ value: 8, label: '8' },
	{ value: 9, label: '9' },
	{ value: 10, label: '10' }
]

/**
	 * @type {any[]}
	 */
let itemsB = []
/**
	 * @type {any[]}
	 */
let itemsC = []

export async function getSuktas() {
		const { data, error } = await supabase
			.from('db-rigvedasuktas')
			.select()
			.eq('mandala',`${selectionA}`)
			.order('id')
			if (error) throw new Error(error.message)
			itemsB = data
}

async function getRcas() {
	const { data, error } = await supabase
		.from('db-rigveda')
		.select()
		.eq('mandala',`${selectionA}`)
		.eq('suktacorrected',`${selectionB}`)
		.order('primvalue')
		if (error) throw new Error(error.message)
		itemsC = data
}

function goToPage() {
	window.location.href = `/openlibrary/reader/rigveda/${selectionA}/${selectionB}/${selectionC}`
}
</script>

<div class="selection-menu r-r-r-c">
	<div class="inner-menu menu-1">
		<label>Maṇḍala</label>
		<select bind:value={selectionA} on:change={getSuktas}>
		{#each itemsA as item}
			<option value={item.value}>{item.label}</option>
		{/each}
		</select>
	</div>
	<div class="inner-menu menu-2">
		<label for="item-B">Sūkta</label>
		<select id="item-B" bind:value={selectionB} on:change={getRcas}>
		{#each itemsB as item}
			<option value={item.sukta}>{item.sukta}</option>
		{/each}			
		</select>
	</div>
	<div class="inner-menu menu-3">
		<label for="item-C">Ṛca</label>
		<select id="item-C" bind:value={selectionC} on:change={goToPage}>
		{#each itemsC as item}
			<option value={item.rca}>{item.rca}</option>
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