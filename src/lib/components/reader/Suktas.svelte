<script>
import supabase from '$lib/db'
import { onMount } from 'svelte'
import '$lib/styles/reader.sass'

/**
	 * @type {any}
	 */
 export let ms


export async function getAll(){
	const {data, error } = await supabase
	.from('db-rigveda')
	.select()
	.eq('ms',ms)
	.order('primvalue')
	if (error) throw new Error(error.message)
	return data
}

/**
	 * @type {any[]}
	 */
// @ts-ignore
let loading = true
/**
	 * @type {any[]}
	 */
let data
onMount(async () => {	
	// @ts-ignore
	loading = true
	data = await getAll()
	// @ts-ignore
	loading = false
})
</script>

{#if loading}
<small>...</small>
{:else}
{#each data as item}
<div class="equal"><a href="/openlibrary/reader/rigveda/{item.mandala}/{item.suktacorrected}/{item.rca}">{item.iast}</a></div>
{/each}
{/if}

<style>
.equal {margin-bottom: 8px}
</style>