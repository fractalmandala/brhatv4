<script>
import supabase from '$lib/db'
import { fly, fade, scale } from 'svelte/transition'

export async function getBooks(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Essentials')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="bookstab c-c-c-c"
in:scale="{{start: 0, opacity: 0}}"
out:scale="{{start: 0, opacity: 0}}"
>
	{#await getBooks()}
	<small>...</small>
	{:then data}
	{#each data as item}
	<p data-textify
		transition:fade
	>{item.Text}</p>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>

<style>
	.bookstab {
	position: fixed;
	top: 10vh;
	right: 4vw;
	width: 50vw;
	height: 80vh;
	background: var(--beau);
	z-index: 1999;
	box-shadow: 0px 0px 0px #171717, -8px -8px 16px #171717;
	padding: 2em;
	animation: bordercolors 8s ease-out infinite;
}

@keyframes bordercolors {
	0% { border: 1px solid #474747;}
33% { border: 1px solid #fe4a49;}
66% { border: 1px solid #3C80BF;}
100% { border: 1px solid #474747;}
}

.bookstab p { color: white;}
</style>