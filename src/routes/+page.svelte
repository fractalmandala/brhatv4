<script lang="ts">
	import supabase from '$lib/db';
	import { reveal } from 'svelte-reveal';
	import Brands from '$lib/components/globals/AllBrands.svelte'
	import Accordion from '$lib/components/pagecomps/HomeAccordion.svelte';
	import BrhadMrdanga from '$lib/components/vidplaylists/BrhadMrdanga.svelte';
	import HindiKavita from '$lib/components/vidplaylists/HindiKavita.svelte';
	import IKSVids from '$lib/components/vidplaylists/IKSVids.svelte';
	import OtherVids from '$lib/components/vidplaylists/OtherVids.svelte';
	let y:number = 1;
	let ih: number
	let oh: number
	let ow: number
	let currentList = 'list-1';

	function switchList(newList: string) {
		currentList = newList;
	}

	async function dhiti() {
		const { data, error } = await supabase
			.from('brhat-dhiti')
			.select()
			.order('id', { ascending: false })
			.limit(6);
		if (error) throw new Error(error.message);
		return data;
	}

	async function getBooks() {
		const { data, error } = await supabase
			.from('brhat-openlibrary')
			.select()
			.order('Sno', { ascending: false })
			.limit(8);
		if (error) throw new Error(error.message);
		return data;
	}
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={ih} bind:outerHeight={oh} bind:outerWidth={ow}/>


<Accordion />

<div class="full-page formatting">
	<div class="pad-a">
		<div class="boxc x1">
			<h1>Bṛhat is a <br><span class="red m-top-zero">Culture Engine</span></h1>
			<h6 class="wide75">
				To power creatives, research and design rooted in the Indian civilizational consciousness. We
				convert individual, institutional and collective intent into action, across 3 dimensions.
			</h6>
		</div>

		<div class="traybox wrap x2">
			<div class="ww3 card" use:reveal={{ transition: "slide", x: 150, blur: 1, easing: "easeInCirc"}}>
				<h6 class="strong">
					Civilization is Culture in Action
				</h6>
				<p class="w400 grey">
					The civilizational moment needs rooting in Dharma - of this there is no doubt. Thus a core part of our work is culture creatives that draw from the deep pool of Dhārmika heritage.
				</p>
			</div>
			<div class="ww3 card" use:reveal={{ transition: "slide", x: 150, delay: 0, blur: 1, easing: "easeInCirc"}}>
				<h6 class="strong">
					It Needs Culture-Compatible Policy
				</h6>
				<p class="w400 grey">
					Radical reorientations are needed in education and ecology. To this end, our focus will be on generating policy currency for culture through frameworks, curriculum and more.
				</p>
			</div>
			<div class="ww3 card" use:reveal={{ transition: "slide", x: 150, delay: 0, blur: 1, easing: "easeInCirc"}}>
				<h6 class="strong">
					The Work is Inter-Generational
				</h6>
				<p class="w400 grey">
					It needs leadership with cultural-cognition to carry the Agni. This cognition needs to permeate even brand and organisation - essential quarters for the overton window shift.
				</p>
			</div>
		</div>

		<div class="boxc y-full the-title x3">
			<h5 class="wide75">
				But the severest constraint of them all is Time, and more specifically – <span class="soft">Moment.</span>
			</h5>
			<h6 class="wide75">
				The time for a Culture Engine is now, because we are in the midst of a civilizational moment. What is a civilizational moment? How rare or regular are such moments? How must we respond to them?
			</h6>
			<h6 class="wide75">
				Read more on the need we see, why we think this is the time to address it, and about our self-identity.
			</h6>
			<button class="mainbutton"><a href="/about">Know More</a></button>
		</div>

		<div class="the-title y-full x4">
			<h2>Explore Visual Content</h2>
			<h6 class="wide75">
				Our visual content ranges from explorations of rasa and bhāva, to articulations of an
				IKS-implementation strategy for modern India. Select playlists below, or visit our <a
					href="https://youtube.com/@brhat"
					target="_blank"
					class="red"
					rel="noreferrer">YouTube channel</a
				>
			</h6>
			<select class="mainbutton" on:change={(event) => switchList(event?.target?.value ?? 'list-1')}>
				<option class="w500" value="list-1" on:click={() => switchList('list-1')} on:keydown={() => switchList('list-1')}>Bṛhadmṛdaṅga</option>
				<option class="w500" value="list-2" on:click={() => switchList('list-2')} on:keydown={() => switchList('list-2')}>Hindi Kavitā</option>
				<option class="w500" value="list-3" on:click={() => switchList('list-3')} on:keydown={() => switchList('list-3')}>IKS</option>
				<option class="w500" value="list-4" on:click={() => switchList('list-4')} on:keydown={() => switchList('list-4')}>Others</option>
			</select>
			<div class="traybox wrap x5">
				{#if currentList === 'list-1'}
					<BrhadMrdanga />
				{:else if currentList === 'list-2'}
					<HindiKavita />
				{:else if currentList === 'list-3'}
					<IKSVids />
				{:else if currentList === 'list-4'}
					<OtherVids />
				{/if}			
			</div>
		</div>
			


		<div class="the-title x6">
			<h2>Essays at Dhīti</h2>
		</div>

		<div class="traybox allwrap x7">
			{#await dhiti()}
			<small>...</small>
			{:then data}
				{#each data as item, i}
					<div class="ww3 card pad blogbox">
						<img
							src={item.image}
							alt={item.title}
							use:reveal={{
								transition: 'slide',
								delay: 50 * i,
								duration: 50,
								reset: true,
								easing: 'easeOutCirc'
							}}
						/>
							<cite>{item.category}<br>{item.tags}</cite>
							<h6 class="w600"
							use:reveal={{
								transition: 'slide',
								delay: 50 * i,
								duration: 50,
								reset: true,
								easing: 'easeOutCirc'
							}}
						>
							<a href={item.link}>{item.title}</a>
						</h6>
						<p>{item.excerpt.slice(0, 200)}...<a href={item.link} class="readmore">Read More</a></p>
						<cite class="grey wbold m-bot-zero">{item.author}</cite>
					</div>
				{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>

		<div class="the-title x8">
			<h2>Bṛhat Open Library</h2>
			<h6 class="wide75">
				An online repository of books, papers, texts and scriptures, made available under CC0 1.0
				License. Gathering point for digitized scripture, Aryan Invasion/Migration, civilizational
				literature and more.
			</h6>
		</div>

		<div class="traybox allwrap x9">
			{#await getBooks()}
			<small>...</small>
			{:then data}
					{#each data as item, i}
						<div
							class="ww4 book card">
							<h6><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
							<p>{item.author}</p>
						</div>
					{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}			
		</div>
	</div>
</div>
{#if ow>767}
<Brands></Brands>
{/if}

<style>

.x2 .card h6 { color: var(--strong);}

.blogbox a:hover {
	color: var(--soft);
}


@keyframes swiped {
	0% {
		width: 100%;
	}
	100% {
		width: 0;
	}
}



.book {
	border-bottom: 1px solid #e7e7e7;
}

@media screen and (min-width: 768px) {

}

@media screen and (max-width: 767px) and (min-width: 576px) {


}

@media screen and (max-width: 575px) {

}
</style>
