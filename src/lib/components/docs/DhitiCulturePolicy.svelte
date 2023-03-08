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

	// Sort the posts in descending order by date
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
	const featuredPosts = allPosts.filter((post) => post.meta.category === "Culture and Policy")
// Return only the first 4 items
	return featuredPosts.slice(0, 1)

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
	const featuredPosts = allPosts.filter((post) => post.meta.category === "Culture and Policy")
// Return only the first 4 items
	return featuredPosts.slice(1, 2)

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
	const featuredPosts = allPosts.filter((post) => post.meta.category === "Culture and Policy")
// Return only the first 4 items
	return featuredPosts.slice(2, 6)

}
</script>

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
