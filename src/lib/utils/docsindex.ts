export const fetchDocs = async() => {
	const allDocs = import.meta.glob('/src/routes/docs/*.md')
	const iterableDocs = Object.entries(allDocs)

	const allDocuments = await Promise.all(
		iterableDocs.map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const docPath = path.slice(11,-3)

			return {
				meta: metadata,
				path: docPath
			}
		})
	)

	return allDocuments
}