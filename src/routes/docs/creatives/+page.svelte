<script>
import supabase from '$lib/db'

export async function getCreatives(){
	const { data, error} = await supabase
	.from('brhat-creatives')
	.select()
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="c-c-c-c pad4 l0">
{#await getCreatives()}
<small>....</small>
{:then data}
<div class="row-of-4">
	{#each data as item}
		<div class="fourbox">
			<p><b>{item.name}</b></p>
			<p>{item.description}</p>
			<small>Link:<br><a href={item.file} target="_blank" rel="noreferrer">{item.file}</a></small>
		</div>
	{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}
</div>

<style>

.l0 { height: 100vh; justify-content: center;}

.row-of-4 { flex-wrap: wrap; gap: 8px; height: 40vh; align-items: space-between; justify-content: space-between;}

.fourbox {
	max-width: 24%;
}
</style>