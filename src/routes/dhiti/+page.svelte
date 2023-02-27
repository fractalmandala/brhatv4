<script lang="ts">
import { onMount } from 'svelte'
import Animations from "textify.js";
import '$lib/styles/textify.css';
import { reveal } from 'svelte-reveal'
import { inview } from 'svelte-inview';
import { slide } from 'svelte/transition'
import { quadIn } from 'svelte/easing'
let selectedCategory = 7

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
})
</script>

<div class="flexbox-r l1 desk-margins sansa">
	<p class="w500 {selectedCategory === 1 ? 'active' : ''}" on:click={() => selectedCategory = 1} on:keydown={() => selectedCategory = 1}>Culture and Policy</p>
  <p class="w500 {selectedCategory === 2 ? 'active' : ''}" on:click={() => selectedCategory = 2} on:keydown={() => selectedCategory = 2}>Dharma Today</p>
  <p class="w500 {selectedCategory === 3 ? 'active' : ''}" on:click={() => selectedCategory = 3} on:keydown={() => selectedCategory = 3}>Indian Knowledge Systems</p>
  <p class="w500 {selectedCategory === 4 ? 'active' : ''}" on:click={() => selectedCategory = 4} on:keydown={() => selectedCategory = 4}>Two Bodhas</p>
  <p class="w500 {selectedCategory === 5 ? 'active' : ''}" on:click={() => selectedCategory = 5} on:keydown={() => selectedCategory = 5}>Featured</p>
  <p class="w500 {selectedCategory === 7 ? 'active' : ''}" on:click={() => selectedCategory = 7} on:keydown={() => selectedCategory = 7}>All</p>

</div>
<div class="flexbox-r l3">
	<div class="in-col l4">
		{#await Tags()}
		<small>...</small>
		{:then cutup}
		{#each cutup as item}
		<small>{item}</small>
		{/each}
		{/await}
	</div>
	<div class="flexbox-c dhiti-cut l0">	
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
					<h3 class="play holderehtwo">
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
					<h3 class="play holderehtwo">
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
					<h3 class="play holderehtwo">
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
					<h3 class="play holderehtwo">
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
					<h3 class="play holderehtwo">
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
					<h3 class="play holderehtwo">
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
.l1 p { cursor: pointer;}
.l0 h3 { color: #212121; margin-bottom: 20px; border-bottom: 1px solid #d7d7d7; line-height: 1.1; padding-bottom: 12px;}
.l0 .in-row { gap: 14px;}
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

@media screen and (min-width: 900px) {
	.l4{ width: 360px; padding-left: 64px;}
	.holder { min-height: 320px; padding: 16px 32px; margin-bottom: 40px;}
	.l0 h3 { font-weight: 900; letter-spacing: -1px; line-height: 1.1; font-size: 32px; text-align: right;}
	.wide40 { min-height: 100%; width: 40%; }
	.holder h5 { font-size: 18px; letter-spacing: -0.5px; text-align: right;}
	.holder small { font-size: 12px; font-weight: 500; color: #a7a7a7; text-align: right;}
	.holder p { font-size: 14px; text-align: right;}
	.holder .in-col .in-row { justify-content: flex-end;}
  .wide60 { padding-right: 32px;}
	.l1 { position: sticky; background: white; z-index: 930; top: 80px; height: 50px; justify-content: space-between; padding-top: 12px; padding-bottom: 4px; border-bottom: 1px solid #474747; border-top: 1px solid #474747; margin-top: 80px; margin-bottom: 40px;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.l4 { display: none;}
	.holder h3 { font-size: 28px; font-weight: 900; letter-spacing: -0.5px;}
	.holder h5 { font-size: 18px;}
	.holder p { font-size: 12px;}
  .holder small { font-size: 12px; font-weight: 500; color: #a7a7a7;}
	.holder { height: 240px; margin-bottom: 32px;}
	.wide60 { width: 50%;}
	.wide40 { width: 50%;}
	.l1 { justify-content: space-between; padding: 12px 32px 0px 32px;border-bottom: 1px solid #474747; border-top: 1px solid #474747;}

}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.l4 { display: none;}
	.l1 { display: none;}
	.holder { flex-wrap: wrap; padding: 32px;}
	.wide60, .wide40 { width: 100%;}
	.wide40 { order: 1; height: 256px;}
	.wide60 { order: 2;}
.holder small { font-size: 12px; font-weight: 500; color: #a7a7a7;}
}

@media screen and (max-width: 575px) {
	.l4, .l1 { display: none;}
		.holder { flex-wrap: wrap; padding: 32px; overflow-y: scroll;}
	.wide60, .wide40 { width: 100%;}
	.wide40 { order: 1; height: 256px;}
	.wide60 { order: 2;}
.holder small { font-size: 12px; font-weight: 500; color: #a7a7a7;}
	.l3 { height: 100%;}
}

</style>