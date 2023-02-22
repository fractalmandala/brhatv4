<script>
import supabase from '$lib/db'


async function getMrdanga() {
  const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
	.eq('type','mrdanga')
  .order('id',{ascending: false})
  .limit(4)
  if (error) throw new Error(error.message)
  return data
}
</script>

<div class="flexbox-r vid-row">
	{#await getMrdanga()}
		<small>...</small>
		{:then data}
			<div class="flexbox-r of-four">
				{#each data as item}
				<div class="in-col wide25">
					<iframe
  					class="m-1"
  					width=100%
  					height=88%
  					src="https://www.youtube.com/embed/{item.videoid}"
  					title={item.name}
  				>
					</iframe>
					<h6 class="w500"><a href="https://www.youtube.com/watch?v={item.videoid}" target="_blank" rel="noreferrer">{@html item.name}</a></h6>
				</div>
				{/each}
			</div>
		{:catch error}
		<pre>{error}</pre>
	{/await}
</div>