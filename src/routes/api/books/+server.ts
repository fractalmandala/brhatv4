import { fetchBooks } from '$lib/utils/openlib'
import { json } from '@sveltejs/kit'

export const GET = async() => {
  const allBooks = await fetchBooks()

	return json(allBooks)
}