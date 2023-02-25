export const load = async ({ fetch }) => {
	const response = await fetch (`api/dhiti`)
	const docs = await response.json()
	return {
		docs
	}
}