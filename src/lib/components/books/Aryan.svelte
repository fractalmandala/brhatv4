<script>
import supabase from '$lib/db'
export async function getBooks(){
	const { data, error } = await supabase
	.from('brhat-aryanissue')
	.select()
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}
</script>

	{#await getBooks()}
	<small>...</small>
	{:then data}
	{#each data as item}
	<p><a href={item.sourcelink} target="_blank" rel="noreferrer">{item.paper}</a></p>
	<div class="r-r-r-r bookmeta">
		<small>{item.author}</small>
		<small>{item.tag}</small>
	</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}

<style>
p { color: #272727; font-size: 18px; margin-bottom: 4px;}
a { color: #272727;}
a:hover {color: #fe4a49;}
.bookmeta { gap: 24px;}
</style>