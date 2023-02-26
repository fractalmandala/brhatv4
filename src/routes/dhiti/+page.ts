export const load = async ({ fetch }) => {
	const response = await fetch (`api/dhiti`)
	const posts = await response.json()
	return {
		posts
	}
}