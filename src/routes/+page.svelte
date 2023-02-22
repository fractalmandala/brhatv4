<script lang="ts">
	import { goto } from '$app/navigation';
	import supabase from '$lib/db';
	import { reveal } from 'svelte-reveal';
	import Accordion from '$lib/components/pagecomps/HomeAccordion.svelte';
  import Header from '$lib/components/headers/HeadMain.svelte'
	import StaticH1 from '$lib/components/headers/StaticH1.svelte';
	import Dhiti from '$lib/components/headers/StaticH1.svelte';
	import AllBrands from '$lib/components/globals/AllBrands.svelte'
	import Actions from '$lib/components/headers/StaticH1.svelte';
	import Open from '$lib/components/headers/StaticH1.svelte';
	import BrhadMrdanga from '$lib/components/vidplaylists/BrhadMrdanga.svelte';
	import HindiKavita from '$lib/components/vidplaylists/HindiKavita.svelte';
	import IKSVids from '$lib/components/vidplaylists/IKSVids.svelte';
	import OtherVids from '$lib/components/vidplaylists/OtherVids.svelte';
	let y = 1;
	let isAnv = false;
	let isMrd = false;
	let isFm = false;
	let isDra = false;
	let isRid = false;
	let isSoa = false;
	let wid = 0;
	let op = 0;
	let b = 0
	function goAnv() {
		goto('/anveshi');
	}

	function goMrd() {
		goto('/mrdanga');
	}

	function goDra() {
		goto('/drashta');
	}

	function goRid() {
		goto('/rta');
	}

	function goFm() {
		goto('/mandala');
	}

	function goSoa() {
		goto('/aryavarta');
	}

	function toggleAnv() {
		isAnv = !isAnv;
		if (wid === 0) {
			wid = 100;
		} else {
			wid = 0;
		}
		if (op === 0) {
			op = 1;
		} else {
			op = 0;
		}
	}

	function toggleDra() {
		isDra = !isDra;
		if (wid === 0) {
			wid = 100;
		} else {
			wid = 0;
		}
		if (op === 0) {
			op = 1;
		} else {
			op = 0;
		}
	}

	function toggleMrd() {
		isMrd = !isMrd;
		if (wid === 0) {
			wid = 100;
		} else {
			wid = 0;
		}
		if (op === 0) {
			op = 1;
		} else {
			op = 0;
		}
	}

	function toggleFm() {
		isFm = !isFm;
		if (wid === 0) {
			wid = 100;
		} else {
			wid = 0;
		}
		if (op === 0) {
			op = 1;
		} else {
			op = 0;
		}
	}

	function toggleRid() {
		isRid = !isRid;
		if (wid === 0) {
			wid = 100;
		} else {
			wid = 0;
		}
		if (op === 0) {
			op = 1;
		} else {
			op = 0;
		}
	}

	function toggleSoa() {
		isSoa = !isSoa;
		if (wid === 0) {
			wid = 100;
		} else {
			wid = 0;
		}
		if (op === 0) {
			op = 1;
		} else {
			op = 0;
		}
	}

	let currentList = 'list-1';

	function switchList(newList: string) {
		currentList = newList;
	}

	const range = (a: number, b: number, step: number) => {
		const arr = [];
		for (let i = a; i <= b; i += step) {
			arr.push(i);
		}
		return arr;
	};

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

<svelte:window bind:scrollY={y} />

<Header></Header>
<Accordion />
<div class="flexbox-c pad-x-40 cc-y-col mob-y-pad full">
	<h1 class="w500 m-bot-zero">Bṛhat is a <br><span class="red m-top-zero">Culture Engine</span></h1>
	<h5 class="w300 wide75 m-top-16-mob">
		To power creatives, research and design rooted in the Indian civilizational consciousness. We
		convert individual, institutional and collective intent into action, across 3 dimensions.
	</h5>
	<button class="redbutton"><a href="/about">Know More</a></button>
	<div class="l2 flexbox-r of-three top-gap">
		<div class="l2row1 in-col wide33">
			<h6 class="wbold m-bot-zero">Create</h6>
			<p class="w300">
				- visual and literary stories;<br>
				- design thinking and methods;<br>
				- research output on education and ecology;<br>
				- culture-rooted thought models
			</p>
		</div>
		<div class="l2row2 in-col wide33">
			<h6 class="wbold m-bot-zero">Curate</h6>
			<p class="w300">
				- heritage experience journeys;<br>
				- culture-fit in mass media;<br>
				- NEP-relevant IKS curriculum;<br>
				- culture rooting in product design and thinking
			</p>
		</div>
		<div class="l2row3 in-col wide33">
			<h6 class="wbold m-bot-zero">Consult</h6>
			<p class="w300">
				- NEP-IKS implementation;<br>
				- policy thinking on education and ecology;<br>
				- organizational structure and leadership frameworks
			</p>
		</div>
	</div>
</div>
<StaticH1 --boxback="white">
	<div slot="header"><span class="red">Explore </span>Visual Content</div>
	<div class="flexbox-c" slot="body">
				<h5 class="w300 wide75 m-top-24">
					Our visual content ranges from explorations of rasa and bhāva, to articulations of an
					IKS-implementation strategy for modern India. Select playlists below, or visit our <a
						href="https://youtube.com/@brhat"
						target="_blank"
						rel="noreferrer">YouTube channel</a
					>
				</h5>
				<select>
					<option value="Bṛhadmṛdaṅga" on:click={() => switchList('list-1')} on:keydown={() => switchList('list-1')}>>Bṛhadmṛdaṅga</option>
					<option value="Hindi Kavitā" on:click={() => switchList('list-2')} on:keydown={() => switchList('list-2')}>Hindi Kavitā</option>
					<option value="IKS" on:click={() => switchList('list-3')} on:keydown={() => switchList('list-3')}><button class="redbutton">IKS</option>
					<option value="Other" on:click={() => switchList('list-4')} on:keydown={() => switchList('list-4')}>Others</option>
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
	<div slot="header">Essays on <span class="red">Dhīti</span></div>
	<div slot="body">
		{#await dhiti()}
			<small>...</small>
		{:then data}
			<div class="flexbox-r l5 top-gap of-three">
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
						<h6
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
						<small>{item.excerpt.slice(0, 200)}...<a href={item.link} class="readmore">Read More</a></small>
						<cite class="red m-bot-zero">{item.author}</cite>
					</div>
				{/each}
			</div>
		{:catch error}
			<pre>{error}</pre>
		{/await}
	</div>
</Dhiti>
<Open --boxback="white">
	<div slot="header">Bṛhat Open <span class="red">Library</span></div>
	<div slot="body">
		<div class="flexbox-c pad4 bol">
			<h5 class="w300 wide75 top-gap">
				An online repository of books, papers, texts and scriptures, made available under CC0 1.0
				License. Gathering point for digitized scripture, Aryan Invasion/Migration, civilizational
				literature and more.
			</h5>
			<button class="redbutton"><a href="/openlibrary">Visit Library</a></button>
			{#await getBooks()}
				<small>...</small>
			{:then data}
				<div class="flexbox-r wrapper of-four m-top-24 m-bot-24 lib">
					{#each data as item, i}
						<div
							class="in-col wide25 book"
							use:reveal={{
								transition: 'slide',
								delay: 100 * i,
								duration: 100,
								reset: true,
								easing: 'easeOutCirc'
							}}
						>
							<h6><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
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
<AllBrands></AllBrands>


<style>
.l5 { flex-wrap: wrap;}
.blogbox small { color: #878787; }
.in-col img {
	object-fit: cover;
	width: 100%;
}

.blogbox a:hover {
	color: #fe4a49;
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

	.blogbox { height: auto; margin-bottom: 48px;}
	.blogbox h6 { margin-top: 16px;}
	.blogbox h6, .blogbox small, .blogbox cite { padding-left: 16px; padding-right: 16px;}
	.book {
		margin-bottom: 24px;
	}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.l2 { gap: 16px;}
	.blogbox { height: auto; margin-bottom: 48px;}

	.blogbox h6, .blogbox small, .blogbox cite { padding-left: 16px; padding-right: 16px;}
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
}
</style>
