<script>
import supabase from '$lib/db'

async function getIKS() {
  const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
	.eq('type','iks')
  .order('id',{ascending: false})
  .limit(4)
  if (error) throw new Error(error.message)
  return data
}
</script>

<div class="flexbox-r vid-row">
	{#await getIKS()}
		<small>...</small>
		{:then data}
			<div class="flexbox-r of-four">
				{#each data as item}
				<div class="in-col">
					<iframe
  					class="m-1"
  					width=100%
  					height=88%
  					src="https://www.youtube.com/embed/{item.id}"
  					title={item.name}
  				>
					</iframe>
					<small><a href="https://www.youtube.com/watch?v={item.id}" target="_blank" rel="noreferrer">{@html item.name}</a></small>
				</div>
				{/each}
			</div>
		{:catch error}
		<pre>{error}</pre>
	{/await}
</div>

