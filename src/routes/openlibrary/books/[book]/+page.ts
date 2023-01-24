import supabase from '$lib/db'

export async function load({ params } : { params:{book: string}}){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('slug',`${params.book}`)
	.single()

	if (error) throw new Error(error.message)
	return data
}

