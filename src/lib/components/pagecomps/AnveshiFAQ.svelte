<script lang="ts">
import supabase from '$lib/db'
let showStates:any = []

function toggleWid(index:any){
	showStates[index] = !showStates[index]
	showStates.forEach((state:any, i:any) => {
		if ( i !== index) showStates[i] = false
	})
}

export async function allFaq() {
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','faq')
	.order('id')
	if (error) throw new Error(error.message)
	showStates  = new Array(data.length).fill(false)
	return data
}
</script>

<div class="boxc l0">
	{#await allFaq()}
	<small>....</small>
	{:then data}
	{#each data as item, index}
		<div class="boxc card" on:click={() => toggleWid(index)} on:keydown={() => toggleWid(index)}>
			<h6 class="w600">{item.name}</h6>
			{#if showStates[index]}
			<p class="wide75">{item.content}</p>
			{/if}
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>


<style>
.boxc h6 {
	cursor: pointer;
}
@media screen and (min-width: 768px) {

.l0 { width: 100%; padding-left: 16px;}
}



</style>