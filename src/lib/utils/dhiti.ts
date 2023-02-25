export const fetchPosts = async() => {
	const allPosts = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePosts = Object.entries(allPosts)

	const allDhitiposts = await Promise.all(
		iterablePosts.map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)

			return {
				meta: metadata,
				path: postPath
			}
		})
	)
	return allDhitiposts
}