<script>
import supabase from '$lib/newdb'

export async function Ram(){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.order('id')
	.limit(10)
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="c-c-c-c l0">
{#await Ram()}
<small>...</small>
{:then data}
	{#each data as item}
		<div class="c-c-c-c box">
			<h5>{item.iast}</h5>
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>