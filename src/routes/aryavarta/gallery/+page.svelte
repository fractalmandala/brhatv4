<script>
import LocomotiveContainer from '$lib/components/animations/LocomotiveContainer.svelte'
import { scale } from 'svelte/transition'
import { circOut } from 'svelte/easing'
import supabase from '$lib/db'

export async function getImages(){
	const { data, error } = await supabase
	.from('MidjourneyImages')
	.select()
	.order('imagenumber',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}
</script>
{#await getImages()}
<small>...</small>
{:then data}
<LocomotiveContainer>
<div id="attract" data-scroll-section>
{#each data as item}
	<img class="the-image" src={item.link} alt={item.imagenumber} data-scroll />
{/each}
</div>
</LocomotiveContainer>
{:catch error}
<pre>{error}</pre>
{/await}

<style>

#attract { min-height: 100%; width: 100vw;}

@media screen and (min-width: 900px) {
	#attract { display: flex; flex-wrap: wrap; overflow-y: scroll; justify-content: center;}
	.the-image { width: 30%; object-fit: cover;}
	
	#attract { 
		padding: 0 8vw; gap: 16px;
	}
}


</style>