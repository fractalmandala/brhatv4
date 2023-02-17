export async function load({ params }: { params: { pages: string } }){
	const post = await import(`../${params.pages}.md`)
	const { title, category } = post.metadata
	const content = post.default

	return {
		content,
		title,
		category,
	}
}