export const load = async ({ fetch }) => {
	const response = await fetch (`api/docs`)
	const docs = await response.json()
	return {
		docs
	}
}