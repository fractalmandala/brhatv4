<script lang="ts">
import supabase from '$lib/db'

export async function kandaSargas(){
	const { data, error } = await supabase
		.from('db-ramayanaindex')
		.select()
		.eq('kanda','4')
		.eq('type','kandasarga')
		.order('id')
		if (error) throw new Error(error.message)
		return data
}

</script>

<div class="boxr bread-crumb">
	<cite><a href="/openlibrary/reader/ramayana/kanda/1">Kāṇḍa 1</a></cite>
	<cite><a href="/openlibrary/reader/ramayana/kanda/2">Kāṇḍa 2</a></cite>
	<cite><a href="/openlibrary/reader/ramayana/kanda/3">Kāṇḍa 3</a></cite>
	<cite><a href="/openlibrary/reader/ramayana/kanda/4">Kāṇḍa 4</a></cite>
	<cite><a href="/openlibrary/reader/ramayana/kanda/5">Kāṇḍa 5</a></cite>
	<cite><a href="/openlibrary/reader/ramayana/kanda/6">Kāṇḍa 6</a></cite>
	<cite><a href="/openlibrary/reader/ramayana/kanda/7">Kāṇḍa 7</a></cite>
</div>
{#await kandaSargas()}
<small>.</small>
{:then data}
<div class="sargacontainer">
<h5>Sargas of Kāṇḍa 4</h5>
<div class="sargaverses">
	{#each data as item}
		<p><a href="/openlibrary/reader/ramayana/kanda/4/{item.sarga}">{item.sarga}</a></p>
	{/each}
</div>
</div>
{:catch error}
<pre>{error}</pre>
{/await}
