<script>
import supabase from '$lib/db'

export async function karnataka(){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','itinerary')
	.eq('chapter','karnataka')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

</script>

{#await karnataka()}
<small>loading...</small>
{:then data}
<div class="blog-pad">
<h1>Karnataka Itinerary</h1>
{#each data as item}
<h5>{item.name}</h5>
<pre class="pre-is-list">{item.content}</pre>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}

