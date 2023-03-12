<script lang="ts">

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
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
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
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
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
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	return allPosts.slice(3)
}

</script>





{#await Sidebar()}
<small>...</small>
{:then data}
  <div class="sidebar1" data-lenis-prevent>
		{#each data as post}
		<div class="boxc dhiti">
			<div class="boxr postdata">
				<div class="boxc dhitiimage" style="background-image: url('{post.meta.image}')">
				</div>
				<div class="boxc metadata fordhitihead fordhititext">
					<h5>
 						<a href={post.path}>{post.meta.title}</a>
					</h5>
					<p>{post.meta.author}</p>
					<div class="sidebar1row">
						<small>{post.meta.category}</small>
						<small>{post.meta.tags}</small>
					</div>
				</div>
			</div>
		</div>
		{/each}
	</div>
{/await}
<div class="page">
	{#await Latest()}
	<small>...</small>
	{:then data}
	{#each data as item}
		<div class="boxc latest fordhitihead fordhititext">
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
		<div class="boxr second fordhitihead fordhititext">
			<div class="secondimage boxc">
				<img class="insidesecond" src={item.meta.image} alt={item.meta.title} />
			</div>
			<div class="seconddetails boxc fordhitihead fordhititext">
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

