import { fetchPosts } from '$lib/utils/dhiti'
import { json } from '@sveltejs/kit'

export const GET = async() => {
  const allPosts = await fetchPosts()

	return json(allPosts)
}