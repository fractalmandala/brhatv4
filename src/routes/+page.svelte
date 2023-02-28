<script lang="ts">
	import supabase from '$lib/db';
	import { reveal } from 'svelte-reveal';
	import Brands from '$lib/components/globals/AllBrands.svelte'
	import Accordion from '$lib/components/pagecomps/HomeAccordion.svelte';
	import StaticH1 from '$lib/components/headers/StaticH1.svelte';
	import Dhiti from '$lib/components/headers/StaticH1.svelte';
	import Open from '$lib/components/headers/StaticH1.svelte';
	import BrhadMrdanga from '$lib/components/vidplaylists/BrhadMrdanga.svelte';
	import HindiKavita from '$lib/components/vidplaylists/HindiKavita.svelte';
	import IKSVids from '$lib/components/vidplaylists/IKSVids.svelte';
	import OtherVids from '$lib/components/vidplaylists/OtherVids.svelte';
	let y:number = 1;
	let ih: number
	let oh: number
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

<svelte:window bind:scrollY={y} bind:innerHeight={ih} bind:outerHeight={oh}/>


<Accordion />

<div class="flexbox-c desk-margins cc-y-col mob-y-pad full">
	<h1 class="w600">Bṛhat is a <br><span class="red m-top-zero">Culture Engine</span></h1>
	<h5 class="w400 wide75 blk">
		To power creatives, research and design rooted in the Indian civilizational consciousness. We
		convert individual, institutional and collective intent into action, across 3 dimensions.
	</h5>
	<button class="twobutton m-top-8"><a href="/about">Know More</a></button>
	<div class="l2 flexbox-r of-three top-gap">
		<div class="l2row1 in-col wide33">
			<h6 class="wbold m-bot-8">Create</h6>
			<p class="w400 grey">
				- visual and literary stories;<br>
				- design thinking and methods;<br>
				- research output on education and ecology;<br>
				- culture-rooted thought models
			</p>
		</div>
		<div class="l2row2 in-col wide33">
			<h6 class="wbold m-bot-8">Curate</h6>
			<p class="w400 grey">
				- heritage experience journeys;<br>
				- culture-fit in mass media;<br>
				- NEP-relevant IKS curriculum;<br>
				- culture rooting in product design and thinking
			</p>
		</div>
		<div class="l2row3 in-col wide33">
			<h6 class="wbold m-bot-8">Consult</h6>
			<p class="w400 grey">
				- NEP-IKS implementation;<br>
				- policy thinking on education and ecology;<br>
				- organizational structure and leadership frameworks
			</p>
		</div>
	</div>
</div>
<StaticH1 --boxback="white">
	<div slot="header"><span class="red">Explore </span>Visual Content</div>
	<div class="flexbox-c desk-margins v-slate" slot="body">
				<h5 class="w400 wide75 m-top-24 blk">
					Our visual content ranges from explorations of rasa and bhāva, to articulations of an
					IKS-implementation strategy for modern India. Select playlists below, or visit our <a
						href="https://youtube.com/@brhat"
						target="_blank"
						class="red"
						rel="noreferrer">YouTube channel</a
					>
				</h5>
				<select on:change={(event) => switchList(event?.target?.value ?? 'list-1')}>
					<option class="w500" value="list-1" on:click={() => switchList('list-1')} on:keydown={() => switchList('list-1')}>Bṛhadmṛdaṅga</option>
					<option class="w500" value="list-2" on:click={() => switchList('list-2')} on:keydown={() => switchList('list-2')}>Hindi Kavitā</option>
					<option class="w500" value="list-3" on:click={() => switchList('list-3')} on:keydown={() => switchList('list-3')}>IKS</option>
					<option class="w500" value="list-4" on:click={() => switchList('list-4')} on:keydown={() => switchList('list-4')}>Others</option>
				</select>

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
</StaticH1>
<Dhiti --boxback="white">
	<div slot="header">Essays at <span class="red">Dhīti</span></div>
	<div slot="body">
		{#await dhiti()}
			<small>...</small>
		{:then data}
			<div class="flexbox-r l5 of-three desk-margins">
				{#each data as item, i}
					<div class="in-col wide33 blogbox">
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
							<small><span class="small-cat blue">{item.category}<br></span><span class="small-tag grey2">{item.tags}</span></small>
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
						<small class="grey">{item.excerpt.slice(0, 200)}...<a href={item.link} class="readmore">Read More</a></small>
						<cite class="blue wbold m-bot-zero">{item.author}</cite>
					</div>
				{/each}
			</div>
		{:catch error}
			<pre>{error}</pre>
		{/await}
	</div>
</Dhiti>
<Open --boxback="white" --contheight="100vh">
	<div slot="header">Bṛhat Open <span class="red">Library</span></div>
	<div slot="body">
		<div class="flexbox-c desk-margins bol">
			<h5 class="w400 wide75 blk">
				An online repository of books, papers, texts and scriptures, made available under CC0 1.0
				License. Gathering point for digitized scripture, Aryan Invasion/Migration, civilizational
				literature and more.
			</h5>
			<button class="redbutton m-bot-16-mob"><a href="/openlibrary">Visit Library</a></button>
			{#await getBooks()}
				<small>...</small>
			{:then data}
				<div class="flexbox-r wrapper of-four m-top-8 m-bot-24 lib">
					{#each data as item, i}
						<div
							class="in-col wide25 book shadow">
							<h6 class="w600 m-bot-8"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
							<small class="m-top-zero grey">{item.author}</small>
						</div>
					{/each}
				</div>
			{:catch error}
				<pre>{error}</pre>
			{/await}
		</div>
	</div>
</Open>
<Brands></Brands>


<style>

.l5 { flex-wrap: wrap;}

.in-col img {
	object-fit: cover;
	width: 100%;
}

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


.l2 h6 { 
	border-top: 1px solid #d7d7d7;
	padding-top: 12px;
}

.book {
	border-bottom: 1px solid #e7e7e7;
	padding-bottom: 12px;
}

@media screen and (min-width: 768px) {
	.v-slate select { margin-bottom: 32px; width: 200px; border: 2px solid var(--soft); border-radius: 4px;}
	.v-slate select { font-weight: 600;}
	.blogbox img { margin-bottom: 20px;}
	.blogbox { height: auto; margin-bottom: 0;}
	.blogbox h6 { margin-top: 12px; line-height: 1.32; margin-bottom: 20px;}
	.blogbox h6, .blogbox small, .blogbox cite { padding-left: 8px; padding-right: 8px;}
	.blogbox small { margin: 0;}
	.blogbox cite { margin-top: 16px; padding-bottom: 16px; margin-bottom: 0;}
	.small-cat, .small-tag { font-size: 12px; margin: 0;}
	.small-tag { text-transform: lowercase;}
	.small-cat { text-transform: uppercase; font-weight: bold;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.l2 { gap: 16px;}
	.blogbox { height: auto; margin-bottom: 48px;}

	.blogbox h6, .blogbox small, .blogbox cite { padding-left: 8px; padding-right: 8px;}
	.book {
		margin-bottom: 24px;
	}

}

@media screen and (max-width: 575px) {

	.book {
		margin-bottom: 8px;
	}
	.blogbox h6 {
		margin-top: 24px;
	}
	.lib h6 { margin-bottom: 4px;}
}
</style>
