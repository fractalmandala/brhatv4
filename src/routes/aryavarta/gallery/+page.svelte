<script lang="ts">
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
<div class="r-r-r-r">
{#each data as item}
		<img class="the-image" src={item.link} alt={item.imagenumber} data-aos="flip-up" data-aos-delay="50"/>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}



<style>
.the-image{ width: calc(25% - 2em); object-fit: contain;}
.r-r-r-r { width: 100%; flex-wrap: wrap; gap: 2em;}
</style>