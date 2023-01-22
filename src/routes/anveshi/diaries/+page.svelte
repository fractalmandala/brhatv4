<script>
// @ts-nocheck

import supabase from '$lib/db'
import { Lightbox } from 'svelte-lightbox'

async function travelDiary(){
	const { data } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','traveldiary')
	return data;
}
</script>

{#await travelDiary()}

<small>...</small>
{:then data}
<h5>Artwork Inspired by the Hoysala Temples</h5>
<p>by Ashish Kundalia</p>
<div class="row">
{#each data as item}
	<div class="box">
	<Lightbox>

<img src={item.image} alt={item.id} />
</Lightbox>
</div>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}

<style>
	

.box {
	width: 45%;
}

.box img {
	object-fit: cover;
	height: 400px;
	width: 400px;
}
.row {
display: flex;
	width: 100%;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
gap: 2rem;
}
</style>