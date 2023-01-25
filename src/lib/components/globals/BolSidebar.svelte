<script lang="ts">
import supabase from '$lib/db'

export async function getEssentials(){
	const { data, error } = await supabase
		.from('brhat-openlibrary')
		.select()
		.order('Text')
		if (error) throw new Error(error.message)
		return data
}

</script>	

<div class="side-bar2">
	<h5 class="side-bar-header"><a href="/openlibrary">Bṛhat Open Library</a></h5>
		<p><a href="/openlibrary/books">Books</a></p>
		<p><a href="/openlibrary/dictionary">Dictionary</a></p>
	<div class="dropdown-box">
		{#await getEssentials()}
		<small>...</small>
		{:then data}
	<button class="dropdown"><h5><b class="isorange">| </b>All Books</h5></button>
		<div class="base-block">
			{#each data as item}
			<p><a href="/openlibrary/book/{item.slug}">{item.Text}</a></p>
			{/each}
		</div>
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>
</div>

<style>
h5 { cursor: pointer;}
.dropdown-box {
	position: relative;
	display: inline-block;
}
.base-block {
	display: none;
	position: absolute;
	overflow: scroll;
}

.dropdown-box:hover .base-block { display: block;}
</style>