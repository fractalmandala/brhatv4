<script>
import supabase from '$lib/db'
import DrashtaSide from '$lib/components/globals/DrashtaSide.svelte'
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
<div class="pagesheet">
<div class="blog-pad">
<h1>Draṣṭās that Inspire Us</h1>
{#await getDrashtas()}
<small>loading...</small>
{:then data}
<div class="base-row">
{#each data as item, i}
<div class="base-col" on:click={()=>toggleText(i)} on:keydown={()=>toggleText(i)}>
<h5>{item.name}</h5>
{#if isText[i]}
<p>{item.content}</p>
{/if}
</div>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}
</div>
</div>
</div>

<style>
h5 { text-transform: capitalize; margin-top: 0;}
p { margin-bottom: 0;}
@media screen and (min-width: 900px) { .base-col { width: 100%;} .base-row { flex-wrap: wrap;}}
</style>