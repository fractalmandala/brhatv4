<script lang="ts">
import { onMount } from 'svelte'
import { onDestroy } from 'svelte'
import Animations from "textify.js";
import '$lib/styles/textify.css';
import { reveal } from 'svelte-reveal'
import { inview } from 'svelte-inview';
import { slide } from 'svelte/transition'
import { quadIn } from 'svelte/easing'
import Search from '$lib/components/reuse/PostSearch.svelte'
let selectedCategory = 7
let isSmallScreen = false;
let isScrolled = false;
let isSearch = false;

export const Culture = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)

			return {
				meta: metadata,
				path: postPath
			}
		})
	)

	const culturePolicyPosts = allPosts.filter((post) => post.meta.category === "Culture and Policy")
	return culturePolicyPosts
}

export const Dharma = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)

			return {
				meta: metadata,
				path: postPath
			}
		})
	)

	const dharmaTodayPosts = allPosts.filter((post) => post.meta.category === "Dharma Today")
	return dharmaTodayPosts
}

export const IKS = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)

			return {
				meta: metadata,
				path: postPath
			}
		})
	)

	const iKSPosts = allPosts.filter((post) => post.meta.category === "Indian Knowledge Systems")
	return iKSPosts
}

export const Featured = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)

			return {
				meta: metadata,
				path: postPath
			}
		})
	)

	const featuredPosts = allPosts.filter((post) => post.meta.category === "Featured")
	return featuredPosts
}

export const twoBodhas = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)

			return {
				meta: metadata,
				path: postPath
			}
		})
	)

	const twoBodhasPosts = allPosts.filter((post) => post.meta.category === "Svayambodha")
	return twoBodhasPosts
}

export const All = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)

			return {
				meta: metadata,
				path: postPath
			}
		})
	)

	return allPosts
}

export const Tags = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      // @ts-ignore
			const { metadata } = await resolver()
      const postPath = path.slice(11,-3)
      return {
        meta: metadata,
        path: postPath
      }
    })
  )
	const allTags = allPosts.flatMap(post => post.meta.tags)
	const path = allPosts.flatMap(post => post.path)
	const distinctTags = [...new Set(allTags)].sort()
	return distinctTags	
}

function toggleSearch(){
	isSearch = !isSearch
}

const handleScroll = () => {
  const scrollY = window.scrollY;

  if (isSmallScreen && scrollY > 0 && !isScrolled) {
    document.body.classList.add('is-scrolled');
      isScrolled = true;
  } else if (isSmallScreen && scrollY === 0 && isScrolled) {
      document.body.classList.remove('is-scrolled');
    isScrolled = false;
  }
};


onMount(() => {
const { Textify, TextifyTitle } = Animations;
	new TextifyTitle({
	  selector: ".holderehtwos",
	  duration: 300,
	  stagger: 50,
	  once: false,
		reveal: true,
	  fade: true,
	  fadeDuration: 500,
	  ease: "elasticInOut"
	});
	new Textify({
	  selector: ".author",
	  duration: 600,
	  once: false,
	  top: true,
		reveal: true,
	  fade: true,
	  ease: "bounceIn"
	});
  isSmallScreen = window.innerWidth <= 767;
	if (isSmallScreen) {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }
});
onDestroy(() => {
  if (isSmallScreen) {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>

<div class="l1">
	<p class="{selectedCategory === 1 ? 'active' : ''}" on:click={() => selectedCategory = 1} on:keydown={() => selectedCategory = 1}>Culture and Policy</p>
  <p class="{selectedCategory === 2 ? 'active' : ''}" on:click={() => selectedCategory = 2} on:keydown={() => selectedCategory = 2}>Dharma Today</p>
  <p class="{selectedCategory === 3 ? 'active' : ''}" on:click={() => selectedCategory = 3} on:keydown={() => selectedCategory = 3}>Indian Knowledge Systems</p>
  <p class="{selectedCategory === 4 ? 'active' : ''}" on:click={() => selectedCategory = 4} on:keydown={() => selectedCategory = 4}>Two Bodhas</p>
  <p class="{selectedCategory === 5 ? 'active' : ''}" on:click={() => selectedCategory = 5} on:keydown={() => selectedCategory = 5}>Featured</p>
  <p class="{selectedCategory === 7 ? 'active' : ''}" on:click={() => selectedCategory = 7} on:keydown={() => selectedCategory = 7}>All</p>
	<p class="w400" on:click={toggleSearch} on:keydown={toggleSearch}>Search</p>
</div>
{#if isSearch}
<div class="flexbox-c search" transition:slide>
<Search></Search>
<div class="-in-col cross" on:click={toggleSearch} on:keydown={toggleSearch}>Close</div>
</div>
{/if}
<div class="flexbox-r l3 minmargins">
	<div class="flexbox-r dhiti-cut l0">	
		{#if selectedCategory === 1}
		{#await Culture()}
		<small>...</small>
		{:then data}
		{#each data as post}
			<div class="in-row holder" in:slide="{{duration: 400, delay: 200, easing: quadIn}}" out:slide="{{delay: 0, duration: 500, easing: quadIn}}">
				<div class="in-col wide60">
					<div class="in-row">
						<p class="upper red w600">{post.meta.category}</p>
						<p class="upper w600">{post.meta.tags}</p>
					</div>
					<h3 class="holderehtwo">
 						<a href={post.path}>{post.meta.title}</a>
					</h3>
					<h5 class="sansa w400 grey m-bot-zero author">{post.meta.author}</h5>
					<small class="m-top-8 w400">{post.meta.date}</small>
				</div>
				<div class="in-col wide40" style="background-image: url('{post.meta.image}')">
				</div>
			</div>
		{/each}
		{/await}
		{/if}
		{#if selectedCategory === 2}
		{#await Dharma()}
		<small>...</small>
		{:then data}
		{#each data as post}
			<div class="in-row holder" in:slide="{{duration: 400, delay: 200, easing: quadIn}}" out:slide="{{delay: 0, duration: 500, easing: quadIn}}">
				<div class="in-col wide60">
					<div class="in-row">
						<p class="upper red w600">{post.meta.category}</p>
						<p class="upper w600">{post.meta.tags}</p>
					</div>
					<h3 class="holderehtwo">
 						<a href={post.path}>{post.meta.title}</a>
					</h3>
					<h5 class="sansa w400 grey m-bot-zero author">{post.meta.author}</h5>
					<small class="m-top-8 w400">{post.meta.date}</small>
				</div>
				<div class="in-col wide40" style="background-image: url('{post.meta.image}')">
				</div>
			</div>
		{/each}
		{/await}
		{/if}
		{#if selectedCategory === 3}
		{#await IKS()}
		<small>...</small>
		{:then data}
		{#each data as post}
			<div class="in-row holder" in:slide="{{duration: 400, delay: 200, easing: quadIn}}" out:slide="{{delay: 0, duration: 500, easing: quadIn}}">
				<div class="in-col wide60">
					<div class="in-row">
						<p class="upper red w600">{post.meta.category}</p>
						<p class="upper w600">{post.meta.tags}</p>
					</div>
					<h3 class="holderehtwo">
 						<a href={post.path}>{post.meta.title}</a>
					</h3>
					<h5 class="sansa w400 grey m-bot-zero author">{post.meta.author}</h5>
					<small class="m-top-8 w400">{post.meta.date}</small>
				</div>
				<div class="in-col wide40" style="background-image: url('{post.meta.image}')">
				</div>
			</div>
		{/each}
		{/await}
		{/if}
		{#if selectedCategory === 4}
		{#await twoBodhas()}
		<small>...</small>
		{:then data}
		{#each data as post}
			<div class="in-row holder" in:slide="{{duration: 400, delay: 200, easing: quadIn}}" out:slide="{{delay: 0, duration: 500, easing: quadIn}}">
				<div class="in-col wide60">
					<div class="in-row">
						<p class="upper red w600">{post.meta.category}</p>
						<p class="upper w600">{post.meta.tags}</p>
					</div>
					<h3 class="holderehtwo">
 						<a href={post.path}>{post.meta.title}</a>
					</h3>
					<h5 class="sansa w400 grey m-bot-zero author">{post.meta.author}</h5>
					<small class="m-top-8 w400">{post.meta.date}</small>
				</div>
				<div class="in-col wide40" style="background-image: url('{post.meta.image}')">
				</div>
			</div>
		{/each}
		{/await}
			{/if}
		{#if selectedCategory === 5}
		{#await Featured()}
		<small>...</small>
		{:then data}
		{#each data as post}
			<div class="in-row holder" in:slide="{{duration: 400, delay: 200, easing: quadIn}}" out:slide="{{delay: 0, duration: 500, easing: quadIn}}">
				<div class="in-col wide60">
					<div class="in-row">
						<p class="upper red w600">{post.meta.category}</p>
						<p class="upper w600">{post.meta.tags}</p>
					</div>
					<h3 class="holderehtwo">
 						<a href={post.path}>{post.meta.title}</a>
					</h3>
					<h5 class="sansa w400 grey m-bot-zero author">{post.meta.author}</h5>
					<small class="m-top-8 w400">{post.meta.date}</small>
				</div>
				<div class="in-col wide40" style="background-image: url('{post.meta.image}')">
				</div>
			</div>
		{/each}
		{/await}
		{/if}
		{#if selectedCategory === 7}
		{#await All()}
		<small>...</small>
		{:then data}
		{#each data as post}
			<div class="in-row holder" in:slide="{{duration: 400, delay: 200, easing: quadIn}}" out:slide="{{delay: 0, duration: 500, easing: quadIn}}">
				<div class="in-col wide60">
					<div class="in-row">
						<p class="upper red w600">{post.meta.category}</p>
						<p class="upper w600">{post.meta.tags}</p>
					</div>
					<h3 class="holderehtwo">
 						<a href={post.path}>{post.meta.title}</a>
					</h3>
					<h5 class="sansa w400 grey m-bot-zero author">{post.meta.author}</h5>
					<small class="m-top-8 w400">{post.meta.date}</small>
				</div>
				<div class="in-col wide40" style="background-image: url('{post.meta.image}')">
				</div>
			</div>
		{/each}
		{/await}
		{/if}
	</div>
</div>

<style>

.active {

	color: #fe4a49;

}
.l1 p { cursor: pointer; color: #878787; font-weight: 500;}
p.active { color: #fe4a49; font-weight: 700;}
.l0 h3 { color: #212121; margin-bottom: 20px; border-bottom: 1px solid #d7d7d7; line-height: 1.1; padding-bottom: 12px;}
.holder { position: relative; overflow: hidden; background-size: cover; background-repeat: no-repeat; background-position: center center;}
.holder h3 a:hover { color: #89023E;}
.holder a, .holder h5, .holder .in-row p {
	transition: color 0.2s var(--cubea);
}
.holder h3 { transition: color 0.04s ease; color: #212121; }
.holder h3, .holder h5, .holder .in-row { z-index: 2;}

.wide40 {
	background-size: cover; background-position: center center; background-repeat: no-repeat;
}
.l1 { 
	display: flex;
}
.search {
	position: relative;
}
.cross{
	position: absolute;
	z-index: 2;
	color: white;
	cursor: pointer;
}
@media screen and (min-width: 900px) {
	.holder { min-height: 240px; padding: 32px; width: 50%; gap: 0;}
	.l0 h3 { font-weight: 900; letter-spacing: -1px; line-height: 1.1; text-align: left; font-size: 21px;}
	.wide40 { min-height: 100%; width: 40%; order: 1; }
	.holder h5 { font-size: 16px; letter-spacing: -0.5px; text-align: left;}
	.holder small { font-size: 12px; font-weight: 500; color: #a7a7a7; text-align: left;}
	.holder p { font-size: 12px; text-align: left;}
	.holder .in-col .in-row { justify-content: flex-start;}
  .wide60 { padding-left: 20px; order: 2;}
	.wide60 .in-row { gap: 16px;}
	.l1 { flex-direction: row;position: sticky; background: white; z-index: 930; top: 80px; height: 50px; justify-content: space-between; padding-top: 12px; padding-bottom: 4px; border-bottom: 1px solid #474747; border-top: 1px solid #474747; margin-top: 80px; margin-bottom: 40px; padding-right: 32px; padding-left: 32%;}
	.l1 p { font-size: 15px; text-transform: uppercase;}
	.l3, .l0 { width: 100%;}
	.l0 { flex-wrap: wrap; padding: 0; gap: 0;}
	.search { 
		top: 20vh;
		position: fixed;
		left: 25%;
		z-index: 600;
		background: rgba(0,0,0,0.9);
		backdrop-filter: blur(4px);
		border-radius: 4px;
		width: 50%;
		height: 60vh;
		align-items: center;
		justify-content: center;
		padding: 0;
	}
	.cross {
		top: 32px;
		right: 32px;
		font-size: 12px;
		color: #fe4a49;
		text-transform: uppercase;
		font-weight: bold;
	}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.l1 { position: sticky; background: white; z-index: 930; top: 64px; height: 48px; justify-content: flex-start; border-bottom: 1px solid #474747; border-top: 1px solid #474747; padding-right: 16px; padding-left: 32px; flex-direction: column-reverse; overflow: hidden;}
	.l1:hover { height: max-content;}
	.l1 p { text-align: right; margin: 0; padding: 0;}
	.l1 p.active { padding: 6px 0;}
	.holder { padding: 0; flex-wrap: wrap; width: 46%; margin-bottom: 24px;}
	.wide40 { width: 100%; order: 1; height: 160px;}
	.wide60 { order: 2; width: 100%; margin-top: 16px; }
	.holder small { font-size: 10px; font-weight: 500; color: #a7a7a7;}
	.holder h3 { font-size: 18px; margin-top: 8px; }
	.holder h5 { font-size: 12px; margin-top: 0;}
	.l3 { height: 100%; padding-top: 120px; justify-content: center; align-items: center; width: 100%; }
	.l0 { gap: 20px; width: 100%; justify-content: center; flex-wrap: wrap; }
	.wide60 .in-row { gap: 16px; justify-content: flex-start;}
	.wide60 .in-row p { font-size: 12px; text-align: left; padding: 0; margin: 0;}

}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.l1 { position: sticky; background: white; z-index: 930; top: 64px; height: 48px; justify-content: flex-start; border-bottom: 1px solid #474747; border-top: 1px solid #474747; padding-right: 16px; padding-left: 32px; flex-direction: column-reverse; overflow: hidden;}
	.l1:hover { height: max-content;}
	.l1 p { text-align: right; margin: 0; padding: 0;}
	.l1 p.active { padding: 6px 0;}
	.holder { padding: 0; flex-wrap: wrap; width: 46%; margin-bottom: 24px;}
	.wide40 { width: 100%; order: 1; height: 160px;}
	.wide60 { order: 2; width: 100%; margin-top: 16px; }
	.holder small { font-size: 10px; font-weight: 500; color: #a7a7a7;}
	.holder h3 { font-size: 18px; margin-top: 8px; }
	.holder h5 { font-size: 12px; margin-top: 0;}
	.l3 { height: 100%; padding-top: 120px; justify-content: center; align-items: center; width: 100%; }
	.l0 { gap: 20px; width: 100%; justify-content: center; }
	.wide60 .in-row { gap: 16px; justify-content: flex-start;}
	.wide60 .in-row p { font-size: 12px; text-align: left; padding: 0; margin: 0;}
}

@media screen and (max-width: 575px) {
	.l1 { position: sticky; background: white; z-index: 930; top: 64px; height: 48px; justify-content: flex-start; border-bottom: 1px solid #474747; border-top: 1px solid #474747; padding-right: 16px; padding-left: 32px; flex-direction: column-reverse; overflow: hidden;}
	.l1:hover { height: max-content;}
	.l1 p { text-align: right; margin: 0; padding: 0;}
	.l1 p.active { padding: 6px 0;}
	.holder { padding: 20px;}
	.wide40 { width: 24%; order: 1; height: 160px;}
	.wide60 { order: 2; width: 76%; padding-left: 16px;}
	.holder small { font-size: 10px; font-weight: 500; color: #a7a7a7;}
	.holder h3 { font-size: 18px; }
	.holder h5 { font-size: 12px; margin-top: 0;}
	.wide60 .in-row p { font-size: 12px; margin: 0;}
	.wide60 .in-row { flex-direction: column; gap: 0; padding-bottom: 8px;}
	.l3 { height: 100%; padding-top: 120px;}
	.search { 
		top: 280px;
		position: fixed;
		left: 5%;
		z-index: 900;
		background: rgba(0,0,0,0.9);
		backdrop-filter: blur(4px);
		border-radius: 4px;
		width: 90%;
		height: 480px;
		align-items: center;
		justify-content: center;
		padding: 32px;
	}
	.cross {
		top: 32px;
		right: 32px;
		font-size: 12px;
		color: #fe4a49;
		text-transform: uppercase;
		font-weight: bold;
		
	}
}

</style>