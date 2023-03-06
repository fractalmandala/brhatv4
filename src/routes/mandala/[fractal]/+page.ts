export async function load({ params }: { params: { fractal: string } }){
	const post = await import(`../${params.fractal}.md`)
	const { title, next, prev, image } = post.metadata
	const content = post.default

	return {
		content,
		title,
		next,
		prev,
		image
	}
}