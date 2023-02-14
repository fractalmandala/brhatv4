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

<div class="r-r-r-r vid-row">
	{#await getOther()}
		<small>...</small>
		{:then data}
			<div class="r-r-r-r pad4 row-of-4">
				{#each data as item}
					<div class="c-c-c-c fourbox">
						<iframe
  						class="m-1"
  						width=100%
  						height=100%
  						src="https://www.youtube.com/embed/{item.videoid}"
  						title={item.name}
  					>
						</iframe>
					</div>
				{/each}
			</div>
		{:catch error}
		<pre>{error}</pre>
	{/await}
</div>

<style>

@media screen and (min-width: 900px) {
	.fourbox { height: 184px;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.fourbox { height: 144px;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.fourbox { height: 184px;}
}

@media screen and (max-width: 575px) {
	.fourbox { height: 184px; margin: -8px;}
}

</style>