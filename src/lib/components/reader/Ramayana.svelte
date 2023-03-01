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
	.from('db-ramayana')
	.select()
	.eq('kanda',`${selectKanda}`)
	.order('id')
	if (error) throw new Error(error.message)
	sargas = data
}

export async function getVerses(){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('kanda',`${selectKanda}`)
	.eq('sarga',`${selectSarga}`)
	.order('id')
	if (error) throw new Error(error.message)
	verses = data
}

export async function getPadas(){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('kanda',`${selectKanda}`)
	.eq('sarga',`${selectSarga}`)
	.eq('verse',`${selectVerse}`)
	.order('id')
	if (error) throw new Error(error.message)
	padas = data
}

function gotoPada(){
	window.location.href=`/openlibrary/reader/ramayana/${selectKanda}/${selectSarga}/${selectVerse}/${selectPada}`
}
</script>

<div class="flexbox-r">
	<div class="in-col">
		<label for="kanda">Kāṇḍa</label>
		<select id="kanda" bind:value={selectKanda} on:change={getSargas}>
			{#each kandas as kanda}
			<option value={kanda.value}>{kanda.label}</option>
			{/each}
		</select>
	</div>
	<div class="in-col">
		<label for="sarga">Sarga</label>
		<select id="sarga" bind:value={selectSarga} on:change={getVerses}>
			{#each sargas as sarga}
			<option value={sarga.sarga}>{sarga.sarga}</option>
			{/each}
		</select>
	</div>
	<div class="in-col">
		<label for="verse">Verse</label>
		<select id="verse" bind:value={selectVerse} on:change={getPadas}>
			{#each verses as verse}
			<option value={verse.verse}>{verse.verse}</option>
			{/each}
		</select>
	</div>
	<div class="in-col">
		<label for="pada">Pāda</label>
		<select id="pada" bind:value={selectPada} on:change={gotoPada}>
			{#each padas as pada}
			<option value={pada.pada}>{pada.pada}</option>
			{/each}
		</select>
	</div>
</div>

<style>
.flexbox-r {
	width: 100%;
	justify-content: flex-start;
	gap: 32px;
}

.flexbox-r label {
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 600;
	color: #878787;
	margin-bottom: 8px;
}

.flexbox-r select {
	border: 1px solid #d7d7d7;
	border-radius: 4px;
	height: 24px;
}

@media screen and (min-width: 900px) {
	.flexbox-r .in-col {
		width: 25%;
	}
}
</style>