export async function load({ params }: { params: { slug: string } }){
  const post = await import(`../${params.slug}.md`)
  const { title } = post.metadata
  const content = post.default

  return {
    content,
    title,
  }
}