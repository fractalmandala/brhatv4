<script lang="ts">
import supabase from '$lib/db'
import { onMount } from 'svelte';
let showP = false

function toggleWid(){
	showP = !showP
}

export async function allFaq() {
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','faq')
	.order('id')
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="box-c l0 pad80-b">
	{#await allFaq()}
	<small>....</small>
	{:then data}
	{#each data as item, index}
		<div class="box-c" on:click={toggleWid} on:keydown={toggleWid}>
			<h6 class="w600">{item.name}</h6>
			{#if showP}
			<p class="wide75">{item.content}</p>
			{/if}
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>


<style>

@media screen and (min-width: 768px) {

.l0 { width: 100%; padding-left: 16px;}
}



</style>