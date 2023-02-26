export const load = async({ fetch, params }) => {
  const { tags } = params
	const response = await fetch(`api/dhiti`)
	const allPosts = await response.json()
  
	const posts = allPosts
	.filter(post => post.meta.categories.includes(tags))

  return {
    tags,
		posts
  }
}