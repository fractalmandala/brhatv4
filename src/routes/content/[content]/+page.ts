export async function load({ params }: { params: { content: string } }){
	const post = await import(`../${params.content}.md`)
	const { title, tag } = post.metadata
	const content = post.default

	return {
		content,
		title,
		tag,
	}
}