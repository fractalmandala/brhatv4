<script>
import supabase from '$lib/db'
export async function sargas(){
	const { data, error } = await supabase
	.from('index-ramayana')
	.select()
	.eq('kanda',1)
	.order('id')
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="flexbox-c">
<h4 class="w500">1 - Bāla Kāṇḍa</h4>
<div class="flexbox-r gap16 m-top-16 wrapper">
	{#await sargas()}
	<small>...</small>
	{:then data}
		{#each data as item}
		<div class="in-col">
			<p class="grey">{item.sarga.slice(6)}</p>
		</div>
		{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>
</div>

<style>
.flexbox-c {
	border: 1px solid #f1f1f1;
	padding: 32px;
	box-shadow: 4px 4px 12px #f1f1f1, -5px -7px 10px #fefefe;
	border-radius: 4px;
}
</style>