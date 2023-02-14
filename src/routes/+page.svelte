<script lang="ts">
import supabase from '$lib/db'
import { draw } from 'svelte/transition';
import { quintOut } from 'svelte/easing';
import { reveal } from 'svelte-reveal'
import { onMount } from 'svelte'
import Animations from 'textify.js';
import AllBrands from '$lib/components/globals/BrandsWhite.svelte'
import Accordion from '$lib/components/pagecomps/HomeAccordion.svelte'
import StaticH1 from '$lib/components/headers/StaticH1.svelte'
import Dhiti from '$lib/components/headers/StaticH1.svelte'
import Actions from '$lib/components/headers/StaticH1.svelte'
import Open from '$lib/components/headers/StaticH1.svelte'
import BrhadMrdanga from '$lib/components/vidplaylists/BrhadMrdanga.svelte'
import HindiKavita from '$lib/components/vidplaylists/HindiKavita.svelte'
import IKSVids from '$lib/components/vidplaylists/IKSVids.svelte'
import OtherVids from '$lib/components/vidplaylists/OtherVids.svelte'
import LogAnv from '$lib/components/logos/LogAnv.svelte'
import LogDr from '$lib/components/logos/LogDr.svelte'
import LogFm from '$lib/components/logos/LogFm.svelte'
import LogMan from '$lib/components/logos/LogMan.svelte'
import LogMrd from '$lib/components/logos/LogMrd.svelte'
import LogRid from '$lib/components/logos/LogRid.svelte'
import '$lib/styles/textify.css'
let textify: {reset: () => void;}, textifyTitle: {reset: () => void;};
let y = 1
let motif = 0
let isAnv = false

function toggleAnv(){ isAnv = !isAnv }

const { Textify } = Animations;
const { TextifyTitle } = Animations;

function initTextify() {
  textify = new Textify({
    duration: 400,
    stagger: 50,
    once: false,
    easing: "circInOut"
  });
  textifyTitle = new TextifyTitle({
    duration: 600,
    stagger: 100,
    once: false,
  });
}

onMount(() => {
  initTextify();
  window.addEventListener('beforeunload', refreshPage);
});

function refreshPage() {
  textify.reset();
  textifyTitle.reset();
  initTextify();
}

let currentList = "list-1"

function switchList(newList: string){
	currentList = newList
}

let actAnveshi = false
let actDrashta = false
let isMrd = false
let isFm = false
let isRid = false
let isSoa = false


function showAnveshi(){
	actAnveshi = !actAnveshi
}

function showDrashta(){
	actDrashta = !actDrashta
}

function toggleMrd(){
	isMrd = !isMrd
}

function toggleFm(){
	isFm = !isFm
}

function toggleRid(){
	isRid = !isRid
}

function toggleSoa(){
	isSoa = !isSoa
}

async function dhiti() {
  const { data, error } = await supabase
  .from('brhat-dhiti')
  .select()
  .order('id',{ascending: false})
  .limit(6)
  if (error) throw new Error(error.message)
  return data
}

async function getBooks(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.order('Sno',{ascending: false})
	.limit(8)
	if (error) throw new Error(error.message)
	return data
}
</script>

<svelte:window bind:scrollY={y} />
<Accordion></Accordion>
<div class="c-c-c-c pad4 lay lzz" data-scroll-section>
	<h1 class="bigger1" data-textify>Bṛhat is a</h1>
	<h1 class="smaller1 isred" data-textify-title>
	Culture Engine</h1>
	<h3 data-textify>
		To power creatives, research and design rooted
		in the Indian civilizational consciousness. We convert individual, institutional 
		and collective intent into action, across 3 dimensions.
	</h3>
	<h3><a href="/about" class="h5link" data-textify>Know More</a></h3>
	<div class="l2 row-of-3">
		<div class="l2row1 small5 threebox">
			<h5 data-textify-title>Create</h5>
			<p data-textify>
			- visual and literary stories;
			- design thinking and methods;
			- research output on education and ecology;
			- culture-rooted thought models
			</p>
		</div>
		<div class="l2row2 small5 threebox">
			<h5 data-textify-title>Curate</h5>
			<p data-textify>
			- heritage experience journeys;
			- culture-fit in mass media;
			- NEP-relevant IKS curriculum;
			- culture rooting in product design and thinking
			</p>
		</div>
		<div class="l2row3 small5 threebox">
			<h5 data-textify-title>Consult</h5>
				<p data-textify>
					- NEP-IKS implementation;
					- policy thinking on education and ecology;
					- organizational structure and leadership frameworks
				</p>			
		</div>
	</div>
</div>
<StaticH1 --boxback="white">
	<div slot="header"><span class="red lay">Explore</span> Visual Content</div>
		<div class="lay" slot="body">
			<div class="c-c-c-c lvid">
				<div class="c-c-c-c pad4 lvid-text">
					<h3 data-textify>Our visual content ranges from explorations of rasa and bhāva, to articulations of an IKS-implementation strategy for modern India. Select playlists below, or visit our <a href="https://youtube.com/@brhat" target="_blank" rel="noreferrer">YouTube channel</a></h3>
					<div class="r-r-r-r playlists small5">
						<h5 on:click={() => switchList("list-1")} on:keydown={() => switchList("list-1")}>Bṛhadmṛdaṅga</h5>
						<h5 on:click={() => switchList("list-2")} on:keydown={() => switchList("list-2")}>Hindi Kavitā</h5>
						<h5 on:click={() => switchList("list-3")} on:keydown={() => switchList("list-3")}>IKS</h5>
						<h5 on:click={() => switchList("list-4")} on:keydown={() => switchList("list-4")}>On Other Channels</h5>
					</div>
				</div>
				<div class="c-c-c-c lvid-vid">
					{#if currentList === "list-1"}
					<BrhadMrdanga></BrhadMrdanga>
					{:else if currentList === "list-2"}
					<HindiKavita></HindiKavita>
					{:else if currentList === "list-3"}
					<IKSVids></IKSVids>
					{:else if currentList === "list-4"}
					<OtherVids></OtherVids>
					{/if}
				</div>
			</div> 
	</div>
</StaticH1>	
<Dhiti --boxback="white">
	<div slot="header">Essays on <span class="red">Dhīti</span></div>
			<div slot="body">
				{#await dhiti()}
				<small>...</small>
				{:then data}
				<div class="r-r-r-r pad4 l5 row-of-3">
					{#each data as item, i}
					<div class="c-c-c-c threebox small5">
						<img src={item.image} alt={item.title} use:reveal={{ transition: "slide", delay: 50*i, duration: 50, reset: true, easing: "easeOutCirc"}}/>
						<h5 use:reveal={{ transition: "slide", delay: 50*i, duration: 50, reset: true, easing: "easeOutCirc"}}><a href={item.link}>{item.title}</a></h5>
						<p>{item.excerpt.slice(0,200)}...<a href={item.link} class="readmore">Read More</a></p>
						<div class="r-r-c-c blog-meta">
							<small>{item.author}</small>
							<small>{item.category}</small>
						</div>
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
		<div class="c-c-c-c pad4 bol">
			<h3 data-textify>
				An online repository of books, papers, texts and scriptures, made available under CC0 1.0 License. Gathering point for digitized scripture, Aryan Invasion/Migration, civilizational literature and more.				
			</h3>
			<h3><a href="/openlibrary" class="h5link" data-textify>Visit Library</a></h3>
			{#await getBooks()}
			<small>...</small>
			{:then data}
			<div class="row-of-4 lib">
				{#each data as item, i}
				<div class="fourbox book" use:reveal={{ transition: "slide", delay: 100*i, duration: 100, reset: true, easing: "easeOutCirc"}}>
					<h5 data-textify><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h5>
					<p>{item.author}</p>
					<small>{item.Type}</small>
				</div>
				{/each}
			</div>
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>
	</div>
</Open>
<Actions --boxback="white">
	<div slot="header">Bṛhat <span class="red">Actions</span></div>
	<div slot="body">
			<h3 class="pad4 special-h" data-textify>Visual forays into the 64 kalās and metaphors of arts, travel discovery programs, online learning courses, design thinking based on Dharma, AI-based creative content or bold explorations of Indian civilizational consciousness, find your engagement here.</h3>
			<div class="r-r-r-r pad4 actionsrow small5">
				<div class="c-c-c-c actionbox"><h5 data-textify-title><a href="/anveshi">Bṛhat Anveṣī</a></h5></div>
				<div class="c-c-c-c actionbox"><h5 data-textify-title><a href="/drashta">Bṛhat Draṣṭā</a></h5></div>
				<div class="c-c-c-c actionbox"><h5 data-textify-title><a href="/mrdanga">Bṛhatmṛdaṅga</a></h5></div>
				<div class="c-c-c-c actionbox"><h5 data-textify-title><a href="/mandala">Fractal Maṇḍala</a></h5></div>
				<div class="c-c-c-c actionbox"><h5 data-textify-title><a href="/rta">Ṛta in Design</a></h5></div>
				<div class="c-c-c-c actionbox"><h5 data-textify-title><a href="/aryavarta">Scrolls of Āryavarta</a></h5></div>
			</div>
	</div>
</Actions>



<style>
.lzz { z-index: 2; background: white;}
.lzz, .l2, .row-of-3, .lvid, .lvid-text, .playlists { background: white;}
.threebox img { object-fit: cover; width: 100%;}
.l2 .threebox { border-top: 1px solid #474747;}
.l2 p { color: #878787;}
.playlists h5 { font-weight: 500; cursor: pointer; color: var(--blue); text-transform: uppercase;}
.book small { color: var(--blue); font-weight: bold;}
.rowcol2 .c-c-c-c h5 { z-index: 2; color: white;}
.book a { color: #171717;}
.threebox h5 a, .threebox h5 { color: #272727;}
.threebox a:hover { color: #fe4a49;}
.threebox p { color: #878787;}
.special-h { font-weight: 300; width: 75%;}
.actionsrow h5 a { color: #272727;}
.actionsrow a:hover { color: #fe4a49;}


@media screen and (min-width: 900px) {
	.c-c-c-c h3 { font-weight: 300;}
	.lzz { height: 100vh; justify-content: center; padding-top: 80px;}
	.l2 h5 { padding-top: 12px;}
	.c-c-c-c h3 { width: 75%;}
	.playlists { gap: 40px; padding: 16px 0 24px 0;}
	.row-of-3 { flex-wrap: wrap;}
	.threebox h5 { margin-top: 12px; margin-bottom: 8px; padding: 0 24px;}
	.book h5:hover, .book a:hover { color: #fe4a49;}
	.threebox p { font-size: 14px; padding: 0 24px;}
	.threebox img { height: 200px; padding: 0 12px;}
	.blog-meta { justify-content: space-between; align-items: center; padding: 0 24px;}
	.rowcol2 .c-c-c-c h5 { margin-top: 0;}
	.actionbox { width: calc(16.67% - 32px);}
	.actionsrow { justify-content: space-between;}
	.actionsrow h5 { font-weight: 500; margin: 32px 0 12px 0; border-top: 1px solid #d7d7d7; padding-top: 12px;}
	.lib { gap: 32px; align-items: flex-start; padding-top: 24px; flex-wrap: wrap;}
	.book { width: calc(25% - 24px);}
	.book p { margin-bottom: 8px;}
	.book h5 { padding-top: 8px; border-top: 1px solid #d7d7d7;}
	.h5link { font-size: 26px; font-weight: 500; letter-spacing: 0px; color:#255F85; transform-origin: center left;}
	.h5link:hover { color: #fe4a49; font-size: 24px;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.c-c-c-c h3 { font-weight: 300;}
	.c-c-c-c h3 { width: 88%;}
	.row-of-3 { flex-wrap: wrap;}
	.playlists { gap: 40px; padding: 2px 0 24px 0;}
	.l2 h5 { padding-top: 12px;}
	.h5link { font-size: 26px; font-weight: 500; letter-spacing: 0px; color:#255F85; transform-origin: center left;}
	.h5link:hover { color: #fe4a49; font-size: 24px;}
	.lib { flex-wrap: wrap;}
	.actionbox { width: calc(16.67% - 12px);}
	.actionsrow { justify-content: space-between;}
	.actionsrow h5 { font-weight: 500; margin: 32px 0 12px 0; border-top: 1px solid #d7d7d7; padding-top: 12px;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.c-c-c-c h3 { font-weight: 300;}
	.l2 { gap: 2em; padding-bottom: 16px; margin-top: 1em;}
	.l2 p { margin-bottom: 0;}
	.l2 h5 { padding-top: 8px;}
	h5 { padding-left: 4vw; padding-right: 4vw;}
	.row-of-3 { flex-wrap: wrap;}
	.h5link { font-size: 24px; font-weight: 500; letter-spacing: 0px; color:#255F85; transform-origin: center left;}
	.h5link:hover { color: #fe4a49; font-size: 24px;}
	.actionbox { width: calc(33.33% - 24px);}
	.actionsrow { justify-content: space-between; flex-wrap: wrap; padding-bottom: 64px;}
	.actionsrow h5 { font-weight: 500; margin: 32px 0 12px 0; border-top: 1px solid #d7d7d7; padding-top: 12px;}

}

@media screen and (max-width: 575px) {
	.c-c-c-c h3 { font-weight: 400;}
	.lzz h3 { margin-top: 0;}
	.l2 { gap: 16px;}
	.l2 .threebox { padding: 0;}
	.l2 p { margin-bottom: 16px; margin-top: 0;}
	.l2 h5 { padding-top: 16px; margin: 0;}
	.playlists { gap: 8px; padding: 8px 0;}
	.lib { flex-wrap: wrap;}
	.h5link { font-size: 22px; font-weight: 500; letter-spacing: 0px; color:#255F85; transform-origin: center left;}
	.h5link:hover { color: #fe4a49; font-size: 24px;}
	.blog-meta {
		width: 100%;
	}
	.actionbox { width: 100%;}
	.actionsrow { justify-content: space-between; flex-wrap: wrap; padding-bottom: 64px;}
	.actionsrow h5 { font-weight: 500; margin: 0; border-top: 1px solid #d7d7d7; padding-top: 12px;}
}
</style>