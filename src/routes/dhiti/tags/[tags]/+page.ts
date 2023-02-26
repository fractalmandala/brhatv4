export async function load({ params }: { params: { posts: string } }){
  const post = await import(`../${params.posts}.md`)
  const { tags } = post.metadata
  const content = post.default

  return {
    tags,
		content
  }
}