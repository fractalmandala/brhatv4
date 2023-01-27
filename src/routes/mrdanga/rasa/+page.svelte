<script>
// @ts-nocheck

  import supabase from '$lib/db'

	async function MrdangaVids () {
    const { data, error } = await supabase
    .from('brhat-youtube')
    .select()
    .eq('type','mrdanga')
    .order('sequence')
    if (error) throw new Error(error.message)
    return data
  }

</script>

<div class="gen-spacer-top"></div>
<div class="sc-pad">
	<h4 class="titleclass">
		Rasa
	</h4>
	<p>
		A picture is worth a thousand words. A metaphor, worth a thousand pictures. Metaphor is the pinnacle of human creativity-it illuminates relationality between the seemingly disparate. Our civilization is deeply personal. It is our arts and artists who make this possible. 64 kalās, nava rasas, pedagogy of itihāsa-purāṇa - They dip in and help live the eternal truth.
	</p>
	{#await MrdangaVids()}
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
.sc-pad p { padding-bottom: 1em;}

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