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


{#await getOther()}
	<small>...</small>
	{:then data}
			{#each data as item}
			<div class="ww4 card box-video">
				<iframe
					class="m-1"
					width=100%
					height=80%
					src="https://www.youtube.com/embed/{item.videoid}"
					title={item.name}
				>
				</iframe>
				<p><a href="https://www.youtube.com/watch?v={item.videoid}" target="_blank" rel="noreferrer">{@html item.name.slice(0,70)}...</a></p>
			</div>
			{/each}
	{:catch error}
	<pre>{error}</pre>
{/await}


