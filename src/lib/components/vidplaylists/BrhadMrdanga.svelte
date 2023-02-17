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

<div class="r-r-r-r vid-row">
	{#await getMrdanga()}
		<small>...</small>
		{:then data}
			<div class="r-r-r-r pad4 row-of-4">
				{#each data as item}
				<div class="fourbox small5 paramin">
					<iframe
  					class="m-1"
  					width=100%
  					height=88%
  					src="https://www.youtube.com/embed/{item.id}"
  					title={item.name}
  				>
					</iframe>
					<p><a href="https://www.youtube.com/watch?v={item.id}" target="_blank" rel="noreferrer">{@html item.name}</a></p>
				</div>
				{/each}
			</div>
		{:catch error}
		<pre>{error}</pre>
	{/await}
</div>

<style>
.fourbox p {
	margin-top: 8px;
	color: #474747;
	font-weight: 600;
}
.fourbox a { color: inherit;}

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