<script lang="ts">
import supabase from '$lib/db'
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
</script>


<div class="boxr form">
	<div class="boxc">
		<label for="kanda">Kāṇḍa</label>
		<select id="kanda" bind:value={selectKanda} on:change={getSargas}>
			{#each kandas as kanda}
			<option value={kanda.value}>{kanda.label}</option>
			{/each}
		</select>
	</div>
	<div class="boxc">
		<label for="sarga">Sarga</label>
		<select id="sarga" bind:value={selectSarga} on:change={getVerses}>
			{#each sargas as sarga}
			<option value={sarga.sarga}>{sarga.sarga}</option>
			{/each}
		</select>
	</div>
	<div class="boxc">
		<label for="verse">Verse</label>
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
</div>

<style lang="sass">

.form
	gap: 64px
	height: max-content
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

</style>