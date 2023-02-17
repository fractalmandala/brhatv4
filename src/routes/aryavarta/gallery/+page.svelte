<script lang="ts">
import LocomotiveScrollProvider from 'svelte-locomotive-scroll'
import { Lightbox } from 'svelte-lightbox'
import '$lib/styles/locomotive-scroll.css'
import { page } from '$app/stores';
import supabase from '$lib/db'


export async function getImages(){
const { data, error } = await supabase
.from('MidjourneyImages')
.select()
.order('imagenumber',{ascending: false})
.limit(100)
if (error) throw new Error(error.message)
return data
}
export async function getSecond(){
const { data, error } = await supabase
.from('MidjourneyImages')
.select()
.lt('imagenumber',200)
.order('imagenumber',{ascending: false})
.limit(100)
if (error) throw new Error(error.message)
return data
}
export async function getThird(){
const { data, error } = await supabase
.from('MidjourneyImages')
.select()
.lt('imagenumber',101)
.order('imagenumber',{ascending: false})
.limit(100)
if (error) throw new Error(error.message)
return data
}

</script>

<LocomotiveScrollProvider
	options={{
		smooth: true,
		smoothMobile: false,
		getDirection: true,
		getSpeed: true,
		inertia: 0.5
	}}
  watch={$page}
  location={$page.url}
  onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 2, disableLerp: false })}
	imageTarget={'.the-image'}
>
<div class="black-beauty" data-scroll-container>
	<div class="row-of-3 myrow" data-scroll-section>
		<div class="threebox col31" data-scroll data-scroll-speed="2">
			{#await getImages()}
			<small>...</small>
			{:then data}
			{#each data as item}
			<Lightbox>
			<img class="the-image" src={item.link} alt={item.imagenumber}/>
			</Lightbox>
			{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>
		<div class="threebox col32" data-scroll data-scroll-speed="-4">
			{#await getSecond()}
			<small>...</small>
			{:then data}
			{#each data as item}
			<Lightbox>
			<img class="the-image" src={item.link} alt={item.imagenumber}/>
			</Lightbox>
			{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>
		<div class="threebox col33" data-scroll data-scroll-speed="-2">
			{#await getThird()}
			<small>...</small>
			{:then data}
			{#each data as item}
			<Lightbox>
			<img class="the-image" src={item.link} alt={item.imagenumber}/>
			</Lightbox>
			{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>
	</div>	
</div>
</LocomotiveScrollProvider>

<style>
:root { --sidebar: rgba(0,0,0,0);}
.threebox img { object-fit: cover; width: 100%; height: 320px;}
.the-image{ width: 100%; object-fit: contain; opacity: 1; transition: opacity 0.4s ease;}
.black-beauty { background: var(--beau);height: 100%; }
.row-of-3 { gap: 8px; height: 100%; justify-content: center;}
.threebox { max-width: 30vw; height: 100%;}
</style>