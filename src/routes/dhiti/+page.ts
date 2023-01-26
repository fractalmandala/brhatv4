export const load = async ({ fetch }) => {
	const response = await fetch(`/api/dhiti/posts`)
	const posts = await response.json()
	
	return {
		posts
	}
} 