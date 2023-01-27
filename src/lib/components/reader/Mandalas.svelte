<script>
import supabase from '$lib/db'
import { onMount } from 'svelte'

/**
	 * @type {any}
	 */
 export let mands


export async function getAll(){
	const {data, error } = await supabase
	.from('dbrv-suktas')
	.select()
	.eq('mandala',mands)
	.order('scorr')
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
<p><a href="/openlibrary/reader/rigveda/{item.mandala}/{item.suktacorrected}">{item.suktacorrected}</a></p>
{/each}
{/if}