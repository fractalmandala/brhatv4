<script>
import supabase from '$lib/db'
import DrashtaSide from '$lib/components/globals/DrashtaSide.svelte'
import { fly } from 'svelte/transition'
import { expoOut } from 'svelte/easing'
export async function getDrashtas(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('type','drashta')
	if (error) throw new Error(error.message)
	return data
}

let data = [
	{
		"name": "name one",
		"content" : "content one"
	}
]

let isText = Array(data.length).fill(false);

/**
	 * @param {string | number} index
	 */
function toggleText(index) {
	// @ts-ignore
	isText[index] = !isText[index];
}

</script>

<div class="primecontainer-row">
<DrashtaSide></DrashtaSide>
<div class="pagesheet2">
<h1>Draṣṭās that Inspire Us</h1>
{#await getDrashtas()}
<small>loading...</small>
{:then data}
<div class="base-row">
	<div class="base-col" id="colA">
		{#each data as item, i}
		<h5
		on:click={()=>toggleText(i)} on:keydown={()=>toggleText(i)}
		>{item.name}</h5>
		{/each}
	</div>
	<div class="base-col" id="colB">
		{#each data as item, i}
		{#if isText[i]}
		<small
		transition:fly="{{delay: 100, duration: 300, x: 600, y: 0, opacity: 0.2, easing: expoOut}}"
		>{item.name}</small>
		<p
		transition:fly="{{delay: 100, duration: 300, x: 600, y: 0, opacity: 0.2, easing: expoOut}}"
		>{item.content}</p>
		{/if}
		{/each}
	</div>
</div>
{:catch error}
<pre>{error}</pre>
{/await}
</div>
</div>

<style>
h5 { text-transform: capitalize; margin-top: 0; cursor: pointer; line-height: 1.5em;}
h5:hover { color: var(--red);}
p { margin-bottom: 0;}
small { text-transform: uppercase; font-weight: 900; color: var(--blue);}
#colB { height: 100%; padding-bottom: 2rem; overflow-y: scroll;}
#colB p { margin-top: 0; margin-bottom: 2rem;}

@media screen and (min-width: 900px) { 
	h5 { font-size: 1rem; font-weight: 600;}
	.base-row { flex-wrap: wrap; position: relative;}
	#colA { width: 30%;}
	#colB { width: 70%; position: absolute; top: 0; left: 30%;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	h5 { font-size: 1rem; font-weight: 600;}
	.base-row { flex-wrap: wrap; position: relative;}
	#colA { width: 30%;}
	#colB { width: 70%; position: absolute; top: 0; left: 30%;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	h5 { font-size: 1rem; font-weight: 600;}
	.base-row { flex-wrap: wrap; position: relative;}
	#colA { width: 30%;}
	#colB { width: 70%; position: absolute; top: 0; left: 30%;}
}

@media screen and (max-width: 575px) {
	h5 { font-size: 0.88rem; font-weight: 600;}
	.base-row { flex-wrap: wrap; position: relative;}
	#colA { width: 40%;}
	#colB { width: 50%; position: absolute; top: 0; left: 50%;}
}
</style>

