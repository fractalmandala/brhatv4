<script>
import supabase from '$lib/db'

async function getOther() {
  const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
	.eq('type','sangam')
  .order('id',{ascending: false})
  .limit(4)
  if (error) throw new Error(error.message)
  return data
}
</script>

<div class="flexbox-r vid-row">
	{#await getOther()}
		<small>...</small>
		{:then data}
			<div class="flexbox-r of-four">
				{#each data as item}
				<div class="in-col wide25 box-video">
					<iframe
  					class="m-1"
  					width=100%
  					height=80%
  					src="https://www.youtube.com/embed/{item.id}"
  					title={item.name}
  				>
					</iframe>
					<small class="w400 grey m-top-8"><a href="https://www.youtube.com/watch?v={item.id}" target="_blank" rel="noreferrer">{@html item.name.slice(0,70)}...</a></small>
				</div>
				{/each}
			</div>
		{:catch error}
		<pre>{error}</pre>
	{/await}
</div>

