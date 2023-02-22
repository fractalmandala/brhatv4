<script>
import supabase from '$lib/db'
import Dictionary from '$lib/components/reader/Dictionary.svelte'
import { slide } from 'svelte/transition'
import { bounceIn } from 'svelte/easing'
/**
	 * @type {any}
	 */
 export let x
let isMean = false
/**
	 * @type {{ lemma: any; }}
	 */
let selectedItem
function toggleMean(){
	isMean = !isMean
}
export async function getLem(){
	const { data, error } = await supabase
	.from('lem-ramayana')
	.select()
	.eq('index',x)
	.order('id')
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="flexbox-c slate pad-y-b m-bot-24">
	{#await getLem()}
	<small>...</small>
	{:then data}
		{#each data as item}
		<div class="in-col wide60">
			<p class="w300 grey m-bot-zero">{item.form}</p>
			<h5 class="w500 m-bot-16"  on:click={() => { selectedItem = item; toggleMean() }} on:keydown={toggleMean}>{item.lemma}</h5>
				<div class="in-col details">
					<small class="grey m-bot-zero">{item.upos}</small>
					<small class="grey">{item.feats.replace(/\|/g, '\n')}</small>
				</div>
		</div>
		{#if isMean && selectedItem}
      <div class="dictionary in-col" on:click={toggleMean} on:keydown={toggleMean} in:slide="{{ duration: 300, delay: 100, easing: bounceIn}}" out:slide="{{ delay: 0, duration: 100, easing: bounceIn}}">
        <Dictionary y={selectedItem.lemma}/>
      </div>
    {/if}

{/each}
{:catch error}
<pre>{error}</pre>
{/await}
</div>


<style>
h5 { cursor: pointer;}
.in-col.wide60 { border-bottom: 1px solid #f1f1f1; padding-top: 16px; width: 88%;}
.slate { position: relative;}
.dictionary { position: absolute; top: 0; right: 40px; height: auto; width: 60%;background: rgba(255,255,255,0.9); backdrop-filter: blur(3px); border: 1px solid #f1f1f1; padding: 24px; }
</style>

