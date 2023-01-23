export async function load({ params }: { params: { docs: string } }){
	const post = await import(`../${params.docs}.md`)
	const { category, title } = post.metadata

	return {
		category,
		title
	}
}