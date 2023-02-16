<script lang="ts">
import { goto } from '$app/navigation'
import supabase from '$lib/db'
import { fly } from 'svelte/transition';
import { reveal } from 'svelte-reveal'
import { expoInOut } from 'svelte/easing';
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
let y = 1
let isAnv = false
let isMrd = false
let isFm = false
let isDra = false
let isRid = false
let isSoa = false
let wid = 0
let op = 0

function goAnv(){
	goto('/anveshi')
}

function goMrd(){
	goto('/mrdanga')
}

function goDra(){
	goto('/drashta')
}

function goRid(){
	goto('/rta')
}

function goFm(){
	goto('/mandala')
}

function goSoa(){
	goto('/aryavarta')
}

function toggleAnv(){ 
	isAnv = !isAnv 
	if (wid === 0) {
		wid = 100
	} else {
	wid = 0
	}
	if (op === 0) {
		op = 1
	} else {
		op = 0
	}
}

function toggleDra(){ 
	isDra = !isDra 
	if (wid === 0) {
		wid = 100
	} else {
	wid = 0
	}
	if (op === 0) {
		op = 1
	} else {
		op = 0
	}
}

function toggleMrd(){
	isMrd = !isMrd
	if (wid === 0) {
		wid = 100
	} else {
	wid = 0
	}
	if (op === 0) {
		op = 1
	} else {
		op = 0
	}
}

function toggleFm(){
	isFm = !isFm
	if (wid === 0) {
		wid = 100
	} else {
	wid = 0
	}
	if (op === 0) {
		op = 1
	} else {
		op = 0
	}
}

function toggleRid(){
	isRid = !isRid
	if (wid === 0) {
		wid = 100
	} else {
	wid = 0
	}
	if (op === 0) {
		op = 1
	} else {
		op = 0
	}
}

function toggleSoa(){
	isSoa = !isSoa
	if (wid === 0) {
		wid = 100
	} else {
	wid = 0
	}
	if (op === 0) {
		op = 1
	} else {
		op = 0
	}
}

let currentList = "list-1"

function switchList(newList: string){
	currentList = newList
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
<div class="c-c-c-c pad4 lay lzz">
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
					<div class="c-c-c-c threebox blogbox small5">
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
			<div class="row-of-4 lib small5">
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
	<div class="forlocation" slot="body">
			<h3 class="pad4 special-h" data-textify>Visual forays into the 64 kalās and metaphors of arts, travel discovery programs, online learning courses, design thinking based on Dharma, AI-based creative content or bold explorations of Indian civilizational consciousness, find your engagement here.</h3>
			<div class="row-of-3 pad4 actionsrow small5">
				<div id="box-1" class="cc threebox actionbox" on:mouseenter={toggleAnv} on:mouseleave={toggleAnv} on:click={goAnv} on:keydown={event => event.key === 'Enter' && goAnv()}><h5>Description</h5></div>
				<div id="box-2" class="cc threebox actionbox" on:mouseenter={toggleDra} on:mouseleave={toggleDra} on:click={goDra} on:keydown={event => event.key === 'Enter' && goDra()}></div>
				<div id="box-3" class="cc threebox actionbox" on:mouseenter={toggleMrd} on:mouseleave={toggleMrd} on:click={goMrd} on:keydown={event => event.key === 'Enter' && goMrd()}></div>
				<div id="box-4" class="cc threebox actionbox" on:mouseenter={toggleFm} on:mouseleave={toggleFm} on:click={goFm} on:keydown={event => event.key === 'Enter' && goFm()}></div>
				<div id="box-5" class="cc threebox actionbox" on:mouseenter={toggleRid} on:mouseleave={toggleRid} on:click={goRid} on:keydown={event => event.key === 'Enter' && goRid()}></div>
				<div id="box-6" class="cc threebox actionbox" on:mouseenter={toggleSoa} on:mouseleave={toggleSoa} on:click={goSoa} on:keydown={event => event.key === 'Enter' && goSoa()}></div>
			</div>
			<div class="c-c-c-c poster" style="width: {wid}%; opacity: {op}">
				{#if isAnv}
				<img src="/images/herocovers/karnatakachapter.webp" alt="anv" />
				{/if}
				{#if isDra}
				<img src="/images/herocovers/brhatdrashta.webp" alt="dra" />
				{/if}
				{#if isMrd}
				<img src="/images/herocovers/mrdanga-hero.webp" alt="mrd" />
				{/if}
				{#if isFm}
				<img src="/images/herocovers/fmhomehero.webp" alt="dra" />
				{/if}
				{#if isRid}
				<img src="/images/herocovers/ridhero1.webp" alt="dra" />
				{/if}
				{#if isSoa}
				<img src="/images/scrolls/maphero.webp" alt="dra" />
				{/if}
			</div>
	</div>
</Actions>



<style>
#box-1, #box-2, #box-3, #box-4, #box-5, #box-6 {
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
}

.actionbox { position: relative; transition: all 0.2s var(--cube5); transform-origin: center center; text-align: center; justify-content: center !important;}

.actionbox:hover { transform: scale(0.88);}

.actionbox::after {
	content: '';
	height: 100%;
	width: 0%;
	position: absolute;
	top: 0;
	left: 0;
	transition: all 0.2s var(--cube5);
	background: rgba(0,0,0,0.8);
	z-index: 0;
}

.actionbox:hover::after {
	width: 100%;
	z-index: 0;
	
}

#box-1 {
	background-image: url('/images/herocovers/karnatakachapter.webp');
}

#box-2 {
	background-image: url('/images/herocovers/brhatdrashta.webp');
}

#box-3 {
	background-image: url('/images/herocovers/mrdanga-hero.webp');
}

#box-4 {
	background-image: url('/images/herocovers/fmhomehero.webp');
}

#box-5 {
	background-image: url('/images/herocovers/ridhero1.webp');
}

#box-6 {
	background-image: url('/images/scrolls/maphero.webp');
}

.forlocation { position: relative;}
.poster { position: absolute; top: 0; left: 0;}

.poster img {
	object-fit: cover;
	width: 100%;
}
.lzz { z-index: 2; background: white;}
.lzz, .l2, .row-of-3, .lvid, .lvid-text, .playlists { background: white;}
.threebox img { object-fit: cover; width: 100%;}
.l2 .threebox { border-top: 1px solid #474747;}
.l2 p, .l2row1 p, .l2row2 p, .l2row3 p { color: #878787;}
.playlists h5 { font-weight: 500; cursor: pointer; color: var(--blue); text-transform: uppercase;}
.book small { color: var(--blue); font-weight: bold;}
.book p { color: #878787;}
.rowcol2 .c-c-c-c h5 { z-index: 2; color: white;}
.book a { color: #171717;}
.threebox h5 a, .threebox h5 { color: #272727;}
.threebox a:hover { color: #fe4a49;}
.threebox p { color: #878787;}
.special-h { font-weight: 300;}
.actionsrow div { cursor: pointer;}

.poster { background: white; transition: all 0.32s var(--cube2);}
.poster img { z-index: 5;}

@keyframes swiped {
	0% { width: 100%;}
	100% { width: 0;}
}

@media screen and (min-width: 900px) {
	.c-c-c-c h3 { font-weight: 300;}
	.lzz { height: 100vh; justify-content: center; padding-top: 80px;}
	.l2 h5 { padding-top: 12px; padding-left: 24px;}
	.c-c-c-c h3 { width: 75%;}
	.l2 p { font-size: 14px; padding-left: 24px;}
	.playlists { gap: 40px; padding: 16px 0 24px 0;}
	.row-of-3 { flex-wrap: wrap;}
	.blogbox h5 { margin-top: 12px; margin-bottom: 8px; padding: 0 24px;}
	.book h5:hover, .book a:hover { color: #fe4a49;}
	.blogbox p { font-size: 14px; padding: 0 24px;}
	.threebox img { height: 200px; padding: 0 12px;}
	.blog-meta { justify-content: space-between; align-items: center; padding: 0 24px;}
	.rowcol2 .c-c-c-c h5 { margin-top: 0;}
	.actionbox { height: 25vh; width: calc(33.33% - 6px);}
	.actionsrow { justify-content: center; flex-wrap: wrap; gap: 8px; padding-top: 32px;}
	.lib { gap: 32px; align-items: flex-start; padding-top: 24px; flex-wrap: wrap;}
	.book { width: calc(25% - 24px);}
	.book p { margin-bottom: 8px; font-size: 14px;}
	.book h5 { padding-top: 8px; border-top: 1px solid #d7d7d7;}
	.h5link { font-size: 26px; font-weight: 800; color:#255F85; transform-origin: center left;}
	.h5link:hover { color: #fe4a49; font-size: 24px;}
	.special-h { width: 75%;}
	.poster { height: 24vh; border-top: 2px solid #272727; border-bottom: 2px solid #272727;}
	.poster img { height: 100%; object-fit: cover;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.c-c-c-c h3 { font-weight: 300;}
	.c-c-c-c h3, .special-h { width: 88%;}
	.row-of-3 { flex-wrap: wrap;}
	.playlists { gap: 40px; padding: 2px 0 24px 0;}
	.l2 h5 { padding-top: 12px;}
	.h5link { font-size: 26px; font-weight: 500; letter-spacing: 0px; color:#255F85; transform-origin: center left;}
	.h5link:hover { color: #fe4a49; font-size: 24px;}
	.lib { flex-wrap: wrap;}
	.actionsrow { justify-content: center; gap: 12px;}
	.poster { min-height: 56vh; margin-top: 24px;border-top: 2px solid #fe4a49; border-bottom: 2px solid #fe4a49;}
	.poster img { height: 56vh;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.c-c-c-c h3, .special-h { font-weight: 300; width: 100%;}
	.l2 { gap: 2em; padding-bottom: 16px; margin-top: 1em;}
	.l2 p { margin-bottom: 0;}
	.l2 h5 { padding-top: 8px;}
	h5 { padding-left: 4vw; padding-right: 4vw;}
	.row-of-3 { flex-wrap: wrap;}
	.h5link { font-size: 24px; font-weight: 500; letter-spacing: 0px; color:#255F85; transform-origin: center left;}
	.h5link:hover { color: #fe4a49; font-size: 24px;}
	.actionsrow { justify-content: space-between; flex-wrap: wrap; padding-bottom: 64px;}
	.poster { min-height: 40vh; margin-top: 24px;border-top: 2px solid #fe4a49; border-bottom: 2px solid #fe4a49;}
	.poster img { height: 40vh;}
}

@media screen and (max-width: 575px) {
	.c-c-c-c h3, .special-h { font-weight: 400; width: 100%;}
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
	.actionsrow { justify-content: space-between; flex-wrap: wrap;}

	.poster { min-height: 40vh; margin-top: 24px;border-top: 2px solid #fe4a49; border-bottom: 2px solid #fe4a49;}
	.poster img { height: 40vh;}
}
</style>