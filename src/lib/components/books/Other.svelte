<script>
import supabase from '$lib/db'

export async function getBooks(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.or('Type.eq.Sanskrit,Type.eq.History')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}
</script>

	{#await getBooks()}
	<small>...</small>
	{:then data}
	{#each data as item}
	<p><a href="/openlibrary/books/{item.slug}">{item.Text}</a></p>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}

<style>
p { color: #272727; font-size: 18px;}
a { color: #272727;}
a:hover {color: #fe4a49;}
</style>