<script>
import supabase from '$lib/db'
import { reveal } from 'svelte-reveal'
/**
	 * @type {any}
	 */
 export let y
export async function Dictionary(){
	const { data, error } = await supabase
	.from('db-dictionary')
	.select()
	.eq('word',y)
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="flexbox-c">
{#await Dictionary()}
<small>...</small>
{:then data}
{#each data as item}
<div class="in-col">
	<h6 class="w500 m-bot-zero m-top-zero" use:reveal>{item.word}</h6>
	<p class="m-bot-zero" use:reveal>{item.meanings}</p>
</div>
{/each}
{:catch error}
<pre>{error}</pre>
{/await}
</div>

<style>
.in-col { padding: 12px 0; height: max-content; overflow-y: scroll;}
</style>