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


{#await getIKS()}
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
				<p><a href="https://www.youtube.com/watch?v={item.videoid}" target="_blank" rel="noreferrer">{@html item.name}</a></p>
			</div>
			{/each}
	{:catch error}
	<pre>{error}</pre>
{/await}


