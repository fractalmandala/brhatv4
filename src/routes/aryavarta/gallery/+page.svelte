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

<div class="black-beauty" data-scroll-container>
	{#await getImages()}
	<small>...</small>
	{:then data}
		<div class="r-r-r-r" data-scroll-section>
			{#each data as item}
			<img class="the-image" src={item.link} alt={item.imagenumber} data-scroll data-scroll-speed="2" data-scroll-direction="horizontal"/>
			{/each}
		</div>
		{:catch error}
		<pre>{error}</pre>
		{/await}

</div>



<style>
:root { --sidebar: var(--beau);}
.the-image{ width: calc(25% - 2em); object-fit: contain; opacity: 1; transition: opacity 0.4s ease;}
.black-beauty { background: var(--beau); }
.r-r-r-r { width: 100%; flex-wrap: wrap; gap: 2em;}
</style>