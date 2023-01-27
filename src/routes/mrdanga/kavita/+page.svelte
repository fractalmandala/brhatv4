<script>
// @ts-nocheck

  import supabase from '$lib/db'

	async function HindiKavita () {
    const { data, error } = await supabase
    .from('brhat-youtube')
    .select()
    .eq('type','hindi')
    .order('sequence')
    if (error) throw new Error(error.message)
    return data
  }

</script>


<div class="gen-spacer-top"></div>
<div class="sc-pad">
	<h4 class="titleclass hindi">
		हिन्दी कविता
	</h4>
	{#await HindiKavita()}
  <small>Loading...</small>
  {:then data}
	<div class="sc-in-row gap-4">
		{#each data as item}
				<iframe class="video-container" width="100%" src="https://www.youtube.com/embed/{item.videoid}" title={item.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		{/each}
	</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>

<style>
.sc-in-row { width: 100%;}
.video-container {
	display: flex;
	flex-direction: column;
}

@media screen and (min-width: 768px) {
	.gap-4 { gap: 32px; flex-wrap: wrap; align-items: center;}
	.video-container { width: calc(25% - 32px); height: 160px;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.gap-4 { gap: 32px; flex-wrap: wrap; align-items: center;}
	.video-container { width: calc(33% - 32px); height: 120px;}
}

@media screen and (max-width: 575px) {
	.gap-4 { gap: 32px; flex-wrap: wrap;}
	.video-container { width:100%; height: 160px;}
}
</style>