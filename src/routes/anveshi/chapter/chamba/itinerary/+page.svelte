<script>
import supabase from '$lib/db'

export async function chamba(){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','itinerary')
	.eq('chapter','chamba')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

</script>

{#await chamba()}
<small>loading...</small>
{:then data}
<div class="blog-pad">
<h1>Chamba Itinerary</h1>
{#each data as item}
<h5>{item.name}</h5>
<pre class="pre-is-list">{item.content}</pre>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}

