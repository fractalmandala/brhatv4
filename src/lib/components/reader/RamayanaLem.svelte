<script>
// @ts-nocheck
import { onMount } from 'svelte'
import supabase from '$lib/db'
import { slide } from 'svelte/transition'
import { bounceIn } from 'svelte/easing'
// @ts-ignore
export let x

export async function getLem(){
	const { data, error } = await supabase
	.from('db-ramayana-lemma')
	.select()
	.eq('slug',x)
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

onMount(async() => {
	await getLem()
})

</script>

<div class="flexbox-c slate pad-y-b m-bot-24">
		{#await getLem()}
		<small>...</small>
		{:then data}
		{#each data as item}
			<div class="in-col wide60">
				<p class="w300 grey m-bot-zero">{item.form}<br>test</p>
				<h5 class="w500 m-bot-16">{item.lemma}</h5>
					<div class="in-col details">
						<small class="grey m-bot-zero">{item.upos}</small>
						<small class="grey">{item.feats.replace(/\|/g, '\n')}</small>
					</div>
			</div>
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
</div>


<style>
h5 { cursor: pointer;}
.in-col.wide60 { border-bottom: 1px solid #f1f1f1; padding-top: 16px; width: 88%;}
.slate { position: relative;}
</style>

