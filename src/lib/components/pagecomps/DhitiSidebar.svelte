<script>

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

const latestPosts = allPosts.slice(0, 15)
return latestPosts
}
</script>

<div class="flexbox-c dhitisidebar">
	{#await Other()}
	<small>...</small>
	{:then data}
	{#each data as item}
	<div class="in-col side-dhiti">
		<small class="upper">{item.meta.category}</small>
		<h6><a href={item.path}>{item.meta.title}</a></h6>
		<cite class="w500 m-top-8 grey2">{item.meta.author}</cite>
	</div>
	{/each}
	{/await}
</div>