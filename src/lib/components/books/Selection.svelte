<script lang="ts">
import { onMount } from 'svelte';
import { reveal } from 'svelte-reveal'
import { scale, fly } from 'svelte/transition'
import { expoOut } from 'svelte/easing'
let y = 1
let selectedCategory = 6
let i = 10

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

export const Other = async() => {
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

	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

	const latestPosts = allPosts.slice(0, 8)
	return latestPosts
}

let activeDivId = 'element-6';
  
function toggleWid(e: {currentTarget: {id: string;};}) {
  if (activeDivId === e.currentTarget.id) {
      return;
  }
    activeDivId = e.currentTarget.id;
}

onMount(() => {
  document.getElementById(activeDivId).focus();
});

</script>
<svelte:window bind:scrollY={y}/>
<div class="flexbox-r x0" style="transform: translateY({-y/8}px)">
	<div id="element-1" class="element {activeDivId === 'element-1' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
		<h5 class="grey2">Culture and Policy</h5>
		<div class="in-col postslist">
				{#await Culture()}
					<small>...</small>
					{:then data}
			{#each data as post}
				<div class="in-col listitem" use:reveal={{ transition: "slide", delay: i+40, blur: 0, x: -60, duration: 100}}>
				<small class="w500">{post.meta.tags}</small>
				<h6><a href={post.path}>{post.meta.title}</a></h6>
				<cite class="w500 m-top-8 grey2">{post.meta.author}</cite>
				<div class="fixed-image in-col"
					in:scale="{{ duration: 400, delay: 600, easing: expoOut}}"
					out:scale="{{ duration: 600, delay: 0, easing: expoOut}}"
				>
					<img src={post.meta.image} alt={post.meta.title} />
				</div>
				</div>
			{/each}
				{/await}
		</div>
	</div>
	<div id="element-2" class="element {activeDivId === 'element-2' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
		<h5 class="grey2">IKS</h5>	
		<div class="in-col postslist">
		{#await IKS()}
		<small>...</small>
		{:then data}
			{#each data as post, i}
				<div class="in-col listitem" use:reveal={{ transition: "slide", delay: i+40, blur: 0, x: -60, duration: 100}}>
				<small class="w500">{post.meta.tags}</small>
				<h6><a href={post.path}>{post.meta.title}</a></h6>
				<cite class="w500 m-top-8 grey2">{post.meta.author}</cite>
				<div class="fixed-image in-col"
					in:scale="{{ duration: 400, delay: 600, easing: expoOut}}"
					out:scale="{{ duration: 600, delay: 0, easing: expoOut}}"
				>
					<img src={post.meta.image} alt={post.meta.title} />
				</div>
				</div>
			{/each}
		{/await}
		</div>
	</div>
	<div id="element-3" class="element {activeDivId === 'element-3' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
		<h5 class="grey2">Two Bodhas</h5>
		<div class="in-col postslist">
		{#await twoBodhas()}
		<small>...</small>
		{:then data}
			{#each data as post}
				<div class="in-col listitem" use:reveal={{ transition: "slide", delay: i+40, blur: 0, x: -60, duration: 100}}>
				<small class="w500">{post.meta.tags}</small>
				<h6><a href={post.path}>{post.meta.title}</a></h6>
				<cite class="w500 m-top-8 grey2">{post.meta.author}</cite>
				<div class="fixed-image in-col"
					in:scale="{{ duration: 400, delay: 600, easing: expoOut}}"
					out:scale="{{ duration: 600, delay: 0, easing: expoOut}}"
				>
					<img src={post.meta.image} alt={post.meta.title} />
				</div>
				</div>
			{/each}
		{/await}
		</div>
	</div>
	<div id="element-4" class="element {activeDivId === 'element-4' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
		<h5 class="grey2">Featured</h5>
		<div class="in-col postslist">
		{#await Featured()}
		<small>...</small>
		{:then data}
			{#each data as post}
				<div class="in-col listitem" use:reveal={{ transition: "slide", delay: i+40, blur: 0, x: -60, duration: 100}}>
				<small class="w500">{post.meta.tags}</small>
				<h6><a href={post.path}>{post.meta.title}</a></h6>
				<cite class="w500 m-top-8 grey2">{post.meta.author}</cite>
				<div class="fixed-image2 in-col"
					in:scale="{{ duration: 400, delay: 600, easing: expoOut}}"
					out:scale="{{ duration: 600, delay: 0, easing: expoOut}}"
				>
					<img src={post.meta.image} alt={post.meta.title} />
				</div>
				</div>
			{/each}
		{/await}
		</div>
	</div>
	<div id="element-5" class="element {activeDivId === 'element-5' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
		<h5 class="grey2">Dharma Today</h5>
		<div class="in-col postslist">
		{#await Dharma()}
		<small>...</small>
		{:then data}
			{#each data as post}
				<div class="in-col listitem" use:reveal={{ transition: "slide", delay: i+40, blur: 0, x: -60, duration: 100}}>
				<small class="w500">{post.meta.tags}</small>
				<h6><a href={post.path}>{post.meta.title}</a></h6>
				<cite class="w500 m-top-8 grey2">{post.meta.author}</cite>
				<div class="fixed-image2 in-col"
					in:scale="{{ duration: 400, delay: 600, easing: expoOut}}"
					out:scale="{{ duration: 600, delay: 0, easing: expoOut}}"
				>
					<img src={post.meta.image} alt={post.meta.title} />
				</div>
				</div>
			{/each}
		{/await}
		</div>
	</div>
	<div id="element-6" class="element {activeDivId === 'element-6' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
		<h5 class="grey2">Latest</h5>
		<div class="in-col postslist">
			{#await Other()}
			<small>...</small>
				{:then data}
				{#each data as item}
				<div class="in-col listitem" use:reveal={{ transition: "slide", delay: i+40, blur: 0, x: -60, duration: 100}}>
				<small class="w500">{item.meta.tags}</small>
				<h6><a href={item.path}>{item.meta.title}</a></h6>
				<cite class="w500 m-top-8 grey2">{item.meta.author}</cite>
				<div class="fixed-image2 in-col"
					in:scale="{{ duration: 400, delay: 600, easing: expoOut}}"
					out:scale="{{ duration: 600, delay: 0, easing: expoOut}}"
				>
					<img src={item.meta.image} alt={item.meta.title} />
				</div>
				</div>
				{/each}
			{/await}
		</div>
	</div>
</div>	

<style>
.fixed-image img, .fixed-image2 img {
	object-fit: cover; 
	width: 100%;
	height: 100%;
}

.fixed-image {
	position: absolute;
	display: none;
	top: 0;
	right: -400px;
	height: 300px;
	width: 400px;
}

.fixed-image2 {
	position: absolute;
	display: none;
	top: 0;
	left: -440px;
	height: 300px;
	width: 400px;
}

.listitem:hover .fixed-image, .listitem:hover .fixed-image2 {
	display: flex;
}

.x0 { 
	border-top: 1px solid #d7d7d7;
	background: white;
	padding: 64px;
	height: 100vh;
}
.element {
	width: 18%;
	transition: width 0.42s ease;
	height: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	height: 48px;
	border-left: 2px solid var(--soft);
}

.element > .in-col { display: none;}
.element.active > .in-col {
	display: flex;
	padding: 0 16px 0 0;
	position: absolute;
	top: 80px;
	left: 0;
}


.element.active {
	width: 88vw;
	height: max-content;
	border-left: 2px solid #f1f1f1;
}


.element h5 {
	margin-left: 10px;
	font-size: 12px;
	padding-top: 12px;
	text-transform: uppercase;
	cursor: pointer;

}

.element:hover { background: var(--beau);}
.element.active:hover { background: white;}
.element:hover h5 { color: white;}


.element.active h5 {
	margin-left: 10px;
	border-bottom: 1px solid #272727;
	padding-bottom: 12px;
	color: var(--soft);
	font-size: 12px;
	width: 80%;
	cursor: pointer;
}
.postslist {
	height: 100%;
}
.listitem { position: relative;}

@media screen and (min-width: 768px) {
	.listitem h6 {
		font-size: 16px;
		margin: 0;
		padding-top: 8px;
	}
	.listitem small {
		font-size: 10px;
		text-transform: uppercase;
		color: #b7b7b7;
		margin: 0;
	}
	.listitem cite {
		text-transform: capitalize;
		border-top: 1px solid #d7d7d7;
		width: max-content;
		padding-top: 8px;
	}
	.listitem { margin-bottom: 16px; padding-right: 32px; padding-left: 12px; height: auto;}
	.x0 { gap: 16px;}
	
}



</style>