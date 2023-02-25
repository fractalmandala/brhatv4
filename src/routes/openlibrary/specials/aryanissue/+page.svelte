<script>
import supabase from '$lib/db'
export async function aryans(){
	const { data,error} = await supabase
	.from('brhat-aryanissue')
	.select()
	.order('sequence')
  if (error) throw new Error(error.message)
	return data
}
</script>

<div class="flexbox-c desk-margins l0">
	<div class="in-row bread">
		<cite class="upper wbold grey"><a href="/openlibrary">Open Library</a> <span class="grey"><b> > </b></span> Specials > <a href="/openlibrary/specials/aryanissue" class="blue">The Āryan Issue</a></cite>
	</div>
	<h3>The Āryan Issue</h3>
	<h5 class="wide75">
		A dynamic, continuously growing collection of articles, essays, papers and findings relevant to the AI/M/T issue from all disciplines.
	</h5>
</div>
<div class="flexbox-r filters desk-margins-cut">
	<h6 class="w400 upper yes">Archaeology</h6>
	<h6 class="w400 upper yes">Linguistics</h6>
	<h6 class="w400 upper yes">Philology</h6>
	<h6 class="w400 upper yes">Genetics</h6>
	<h6 class="w400 upper yes">Core Material</h6>
	<h6 class="w400 upper yes">History</h6>
	<h6 class="w400 upper yes">Indology</h6>
	<h6 class="w400 upper">Geology</h6>
</div>
<div class="flexbox-r top-gap books desk-margins">
	{#await aryans()}
	<small>...</small>
	{:then data}
	{#each data as item}
		<div class="in-col wide25 book shadow">
			<p class="wbold m-bot-zero">{item.paper}</p>
			<small class="grey w500 m-bot-zero">{item.author}</small>	
			<cite class="bold upper wbold m-top-8">{item.tag}</cite>
			<cite class="red wbold upper m-top-zero"><a href={item.sourcelink} target="_blank" rel="noreferrer">Visit Site</a></cite>
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>

<style>
.l0 { margin-top: 120px;}
.flexbox-r { flex-wrap: wrap;}
.book p { line-height: 1.3;}
.books { gap: 32px; padding-bottom: 80px;}
.filters { border-top: 1px solid #f1f1f1; border-bottom: 1px solid #f1f1f1; padding-top: 12px; justify-content: center; }
.yes { border-right: 1px solid #f1f1f1;}
.filters h6 { text-align: center; padding-left: 12px; padding-right: 12px; }

</style>