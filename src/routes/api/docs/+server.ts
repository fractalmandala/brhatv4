import { fetchDocs } from '$lib/utils/docsindex'
import { json } from '@sveltejs/kit'

export const GET = async() => {
  const allDocs = await fetchDocs()

	return json(allDocs)
}