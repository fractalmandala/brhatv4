export async function load({ params }: { params: { pages: string } }){
	const post = await import(`../${params.pages}.md`)
	const { title, category, image } = post.metadata
	const content = post.default

	return {
		content,
		title,
		image,
		category,
	}
}