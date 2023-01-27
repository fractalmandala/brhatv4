<script>
// @ts-nocheck

  import supabase from '$lib/db'

	async function Shabdavali() {
    const { data, error } = await supabase
    .from('content-shabdavali')
    .select()
    .order('id')
    if (error) throw new Error(error.message)
    return data 
  }

</script>

<div class="gen-spacer-top"></div>
<div class="sc-pad">
	<h4 class="titleclass">Śabdāvalī</h4>
	{#await Shabdavali()}
	<small>Loading...</small>
	{:then data}
	<p>
		As pearls strung together into a necklace, words and word meanings thread the civilizational continuum. We present to you Śabdāvalī, a garland of words, the alchemy of coherence. The bhāgavata purāṇa, the śukra nītī and the kāmasūtra list 64 kalās or arts, with some variations. These arts give us a fascinating insight into the aesthetic engagement of ancient India. In this series, we’ll become familiar with the names of each of these arts.
	</p>
	<div class="sc-in-row shabdavali-row">
		{#each data as item}
		<div class="pad-col shabdavali">
			<video src={item.fileid} poster={item.imagelink} controls={true}><track kind="captions"></video>
		</div>
		{/each}
	</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>

<style>
.sc-pad p { padding-bottom: 1em;}
.shabdavali video { object-fit: contain; width: 100%;}

@media screen and (min-width: 900px) {
	.shabdavali-row { flex-wrap: wrap; gap: 32px; justify-content: space-between;}
	.shabdavali { width: calc(20% - 32px);}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.shabdavali-row { flex-wrap: wrap; gap: 32px; justify-content: center;}
	.shabdavali { width: calc(24% - 32px);}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.shabdavali-row { flex-wrap: wrap; gap: 24px; justify-content: center;}
	.shabdavali { width: calc(33% - 24px);}	
}

@media screen and (max-width: 575px) {
	.shabdavali-row { flex-wrap: wrap; gap: 32px; justify-content: center;}
	.shabdavali { width: calc(50% - 32px);}		
}

</style>