// @ts-ignore
export const load = async ({ fetch, params }) => {
  const { category } = params
  const response = await fetch(`/api/docs`)
  const allPosts = await response.json()

  const posts = allPosts
    // @ts-ignore
    .filter(post => post.meta.category.includes(category))

  return {
    category,
		posts
  }
}