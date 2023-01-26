export const fetchDhitiPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)

	const allPosts = await Promise.all(iterablePostFiles.map(async ([path, resolver]) => {
		const { metadata } = await resolver()
		const postPath = path.slice(11,-3)

		return {
			meta: metadata,
			path: postPath,
		}
	})
	)
	
	return allPosts
}

export const fetchDhitiCornerstone = async () => {
  const allFiles = import.meta.glob('/src/routes/dhiti/*.md')
  const iterableFiles = Object.entries(allFiles)
  
  const allPosts = await Promise.all(
    iterableFiles.map(async ([path, resolver]) => {
      // @ts-ignore
      const { metadata } = await resolver()
      const postPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  const filteredPosts = allPosts.filter((doc) => doc.meta.category === "cornerstone")

  return filteredPosts
}