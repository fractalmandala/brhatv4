export async function load({ params }: { params: { posts: string } }){
  const post = await import(`../${params.posts}.md`)
  const { title, author, category, tags, date, image } = post.metadata
  const content = post.default

  return {
    content,
    title,
    author,
    category,
    tags,
    date,
    image,
  }
}