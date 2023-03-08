<script lang="ts">
import Selection from '$lib/components/books/Selection.svelte'
let selectedCategory = 7


export const Latest = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)

			return {
				meta: metadata,
				path: postPath,
			}
		})
	)

	// Sort the posts in descending order by date
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

// Return only the first 4 items
	return allPosts.slice(0, 1)

}

export const Second = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)

			return {
				meta: metadata,
				path: postPath,
			}
		})
	)

	// Sort the posts in descending order by date
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

// Return only the first 4 items
	return allPosts.slice(1, 2)

}

export const Sidebar = async() => {
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

	// Sort the posts in descending order by date
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

// Return only the first 4 items
	return allPosts.slice(2, 6)

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

	// Sort the posts in descending order by date
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const featuredPosts = allPosts.filter((post) => post.meta.category === "Featured")

// Return only the first 4 items
	return featuredPosts.slice(0, 6)

}

</script>

<div class="container">
  <div class="topstrip">
		<p class="{selectedCategory === 1 ? 'active' : ''}" on:click={() => selectedCategory = 1} on:keydown={() => selectedCategory = 1}>Culture and Policy</p>
  	<p class="{selectedCategory === 2 ? 'active' : ''}" on:click={() => selectedCategory = 2} on:keydown={() => selectedCategory = 2}>Dharma Today</p>
  	<p class="{selectedCategory === 3 ? 'active' : ''}" on:click={() => selectedCategory = 3} on:keydown={() => selectedCategory = 3}>Indian Knowledge Systems</p>
  	<p class="{selectedCategory === 4 ? 'active' : ''}" on:click={() => selectedCategory = 4} on:keydown={() => selectedCategory = 4}>Two Bodhas</p>
  	<p class="{selectedCategory === 5 ? 'active' : ''}" on:click={() => selectedCategory = 5} on:keydown={() => selectedCategory = 5}>Featured</p>
  	<p class="{selectedCategory === 7 ? 'active' : ''}" on:click={() => selectedCategory = 7} on:keydown={() => selectedCategory = 7}>All</p>
		<p class="w400">Search</p>	
	</div>
  <div class="mainarea">
		{#await Sidebar()}
		<small>...</small>
		{:then data}
    <div class="sidebar1">
			{#each data as post}
				<div class="boxc dhiti">
					<div class="boxr postdata">
						<div class="boxc dhitiimage" style="background-image: url('{post.meta.image}')">
						</div>
						<div class="boxc metadata">
							<p>{post.meta.author}</p>
							<small>{post.meta.category}</small>
							<small>{post.meta.tags}</small>
						</div>
					</div>
					<h5>
 						<a href={post.path}>{post.meta.title}</a>
					</h5>
				</div>
			{/each}
		</div>
			{/await}
    <div class="page">
			{#await Latest()}
			<small>...</small>
			{:then data}
				{#each data as item}
				<div class="boxc latest">
					<img class="latestimage" src={item.meta.image} alt={item.meta.title}/>
					<h4><a href={item.path}>{item.meta.title}</a></h4>
					<p>{item.meta.author}</p>
					<div class="boxr latestrow">
						<small>{item.meta.category}</small>
						<small>{item.meta.tags}</small>
					</div>
				</div>
				{/each}
			{/await}
			{#await Second()}
			<small>...</small>
			{:then data}
				{#each data as item}
				<div class="boxr second">
					<div class="secondimage boxc">
						<img src={item.meta.image} alt={item.meta.title} />
					</div>
					<div class="seconddetails boxc">
						<h5><a href={item.path}>{item.meta.title}</a></h5>
						<p>{item.meta.author}</p>
						<div class="boxr secondrow">
							<small>{item.meta.category}</small>
							<small>{item.meta.tags}</small>
						</div>
					</div>
				</div>
				{/each}
			{/await}
		</div>
    <div class="sidebar2">
			{#await Featured()}
			<small>...</small>
			{:then data}
			<h5>Featured</h5>
				{#each data as post}
				<div class="boxc feat">
					<h5><a href={post.path}>{post.meta.title}</a></h5>
					<div class="boxr featrow">
						<small>{post.meta.tags}</small>
					</div>
				</div>
				{/each}
			{/await}
		</div>
  </div>
</div>

<style lang="sass">

.sidebar1 a, .page a, .sidebar2 a 
	&:hover
		color: var(--tree)

.latest
	height: max-content
	border-bottom: 1px solid #e7e7e7
	img
		object-fit: cover
		width: 100%
		height: 240px
		margin-bottom: 16px
	h4
		font-size: 32px
		line-height: 1.2
		margin-top: 0
		margin-bottom: 12px
		font-weight: bold
	p
		margin-top: 0
		color: #878787
		margin-bottom: 8px
	small
		text-transform: uppercase
		background: #b7b7b7
		color: white
		font-size: 12px
		font-weight: bold
		padding: 2px 6px
		letter-spacing: 1px
	.latestrow
		gap: 40px

.second
	gap: 24px
	h5
		margin: 0
		line-height: 1.2
		font-size: 21px
		letter-spacing: -0.4px
	p, small
		margin: 0
	p
		font-size: 14px
		padding-bottom: 6px
		color: #878787
	small
		font-size: 10px
		padding: 0
		line-height: 1
		text-transform: capitalize
		color: #a7a7a7
	.secondrow
		gap: 48px

.secondimage
	img
		object-fit: cover
		height: 104px
		width: 200px

.feat
	p, h5, small
		margin: 0
	h5
		font-size: 16px
		font-weight: 600
		letter-spacing: -0.4px
		line-height: 1.24
		color: #575757
		padding-bottom: 6px
	small
		font-size: 10px
		text-transform: uppercase
		font-weight: bold
		letter-spacing: 1px
		color: #a7a7a7
	p
		font-size: 12px
		padding-top: 0px

.dhiti
	height: max-content
	p, h5, small
		margin: 0
	h5
		font-size: 16px
		font-weight: 600
		letter-spacing: -0.4px
		line-height: 1.23
		color: #474747
	small
		font-size: 10px
		text-transform: capitalize
		font-weight: 400
		color: #a0a0a0
	p
		font-size: 12px
		text-transform: uppercase
		font-weight: 500
		color: #878787

.dhitiimage
	height: 64px
	background-size: cover
	background-position: center center
	background-repeat: no-repeat
	width: 96px
	margin-bottom: 8px

.postdata
	gap: 16px
		

.container 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 48px 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "topstrip" "mainarea" 
	position: sticky
	top: 0
	left: 0
.topstrip 
	grid-area: topstrip 
	height: 48px
	display: flex
.mainarea 
	display: grid 
	grid-template-columns: 320px 1fr 280px 
	grid-template-rows: 1fr 
	gap: 0px 80px 
	grid-auto-flow: row 
	grid-template-areas: "sidebar1 page sidebar2" 
	grid-area: mainarea 
	padding: 32px 64px
.sidebar1 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto auto auto auto 
	gap: 24px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." "." "." "." 
	grid-area: sidebar1 
	width: 320px
	overflow-y: scroll
.page 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto auto 
	gap: 16px 0px 
	grid-auto-flow: row 
	grid-template-areas: "latest" "second" 
	grid-area: page 
.sidebar2 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: max-content auto auto auto auto auto auto 
	gap: 24px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." "." "." "." "." "." "." 
	grid-area: sidebar2 
	width: 280px 
	overflow-y: scroll
	>h5
		margin-top: 0
		margin-bottom: 0px

@media screen and (min-width: 900px)
	.container
		height: calc(100vh - 64px)
		margin-top: 64px
	.topstrip
		flex-direction: row
		justify-content: flex-end
		gap: 16px
		align-items: center
		padding-right: 32px
		align-items: center
		border-bottom: 1px solid #d7d7d7
		p
			text-transform: uppercase
			font-size: 14px
			margin: 0
			font-weight: bold


</style>