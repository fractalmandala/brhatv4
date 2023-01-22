import { json, type RequestHandler } from '@sveltejs/kit'
import { fetchMarkdownPosts } from '$lib/utils'
export const GET: RequestHandler = async (event) => {
  return json(allDocs)
async function allDocs() {
    const response = await fetch('/api/docs')
    const docs: Post[] = await response.json()
    return docs
  }
}

function allDocs(allDocs: any): Response|PromiseLike<Response> {
	throw new Error('Function not implemented.')
}

