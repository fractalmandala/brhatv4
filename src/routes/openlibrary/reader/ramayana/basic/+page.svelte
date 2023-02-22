<script>
import supabase from '$lib/db'
import { writable } from 'svelte/store';

// @ts-ignore
/**
	 * @type {null}
	 */
let selectKanda = null;
// @ts-ignore
/**
	 * @type {null}
	 */
let selectSarga = null;
// @ts-ignore
/**
	 * @type {null}
	 */
let selectVerse = null;
// @ts-ignore
/**
	 * @type {null}
	 */
let selectIndex = null;

let Kandas = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' }
];
// @ts-ignore
/**
	 * @type {any[]}
	 */
let Sargas = [];
// @ts-ignore
/**
	 * @type {any[]}
	 */
let Verses = [];
// @ts-ignore
/**
	 * @type {any[]}
	 */
let Indices = [];
// @ts-ignore
/**
	 * @type {any[]}
	 */
let Lemma = [];

export const renderData = writable({
  kanda: null,
  sarga: null,
  verse: null,
  index: null,
  lemma: []
});


async function getSargas() {
  const { data, error } = await supabase
    .from('db-ramayana')
    .select()
    .eq('kanda', `${selectKanda}`)
    .order('id');
  if (error) throw new Error(error.message);
  Sargas = data;
}

async function getVerses() {
  const { data, error } = await supabase
    .from('db-ramayana')
    .select()
    .eq('kanda', `${selectKanda}`)
    .eq('sarga', `${selectSarga}`)
    .order('id');
  if (error) throw new Error(error.message);
  Verses = data;
}

async function getIndices() {
  const { data, error } = await supabase
    .from('db-ramayana')
    .select()
    .eq('kanda', `${selectKanda}`)
    .eq('sarga', `${selectSarga}`)
    .eq('verse', `${selectVerse}`)
    .order('id');
  if (error) throw new Error(error.message);
  Indices = data;
}

async function getLemma() {
  const { data, error } = await supabase
    .from('lem-ramayana')
    .select()
    .eq('kanda', `${selectKanda}`)
    .eq('sarga', `${selectSarga}`)
    .eq('verse', `${selectVerse}`)
    .eq('index', `${selectIndex}`)
    .order('id');
  if (error) throw new Error(error.message);
  Lemma = data;
}

function setRenderData() {
  const data = {
    kanda: selectKanda,
    sarga: selectSarga,
    verse: selectVerse,
    index: selectIndex,
    lemma: Lemma
  };
  // @ts-ignore
  renderData.set(data);
}

</script>

<div class="flexbox-r">
	<select bind:value={selectKanda} on:change={getSargas}>
		{#each Kandas as item}
		<option>{item.label}</option>
		{/each}
	</select>
	<select bind:value={selectSarga} on:change={getVerses}>
		{#each Sargas as item}
		<option>{item.sarga}</option>
		{/each}
	</select>
	<select bind:value={selectVerse} on:change={getIndices}>
		{#each Verses as item}
		<option>{item.verse}</option>
		{/each}
	</select>
	<select bind:value={selectIndex} on:change={getLemma}>
		{#each Indices as item}
		<option>{item.index}</option>
		{/each}
	</select>
</div>


<div class="flexbox-r">
	{#await getLemma()}
	<small>...</small>
	{#each Indices as item}
	<div class="in-col">
		<h5>{item.devanagari}</h5>
	</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>