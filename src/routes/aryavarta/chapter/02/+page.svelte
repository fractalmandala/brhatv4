<script lang="ts">
import supabase from '$lib/db'
import { onMount } from 'svelte';
import LocomotiveScroll from 'locomotive-scroll';

let scroll;

onMount(() => {
    const el = document.querySelector('[data-scroll-container]');
    if (el) {
        scroll = new LocomotiveScroll({
            el: el as HTMLElement,
            smooth: true
        });
    }
});

export async function chapter(){
	const { data, error } = await supabase
	.from('soaChapter2')
	.select()
	.order('id')
	if (error) throw new Error(error.message)
	return data
}
</script>

<div data-scroll-container>
	<div class="c-c-c-c the-top" data-scroll-section>
		<h1 data-scroll data-scroll-speed="1">
			Chapter 2<br>
			<span class="colorange">Sūta and Sudā</span>
		</h1>
		<p>Bhārata, somewhere near ~2300 B.C., perhaps...</p>
	</div>

	<div class="r-r-r-r item-box" data-scroll-section>
		{#await chapter()}
	<small>...</small>
	{:then data}
	{#each data as item}
		<div class="c-c-c-c image-box">
			<img src={item.image} alt={item.id} data-scroll data-scroll-speed="1"/>
		</div>
		<div class="c-c-c-c text-box">
			<p data-scroll data-scroll-speed="2">{item.text}</p>
		</div>
	
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>
</div>


<style>

	
@media screen and (min-width: 900px) {
	.the-top {
		width: 100vw;
		height: 100vh;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.the-top h1 {
		margin-bottom: 0.5em;
	}

	.the-top p {
		margin-top: 0;
	}

	.item-box {
		width: 100vw;
		height: 100vh;
		z-index: 2;
	}
	
	.image-box img {
		object-fit: cover;
		width: 100%;
	}
		
	.image-box {
		width: 56%;
	}

	.text-box {
		width: 44%;
	}
}
</style>