import supabase from '$lib/db'

export async function load({params}:{params:{word: string}}){
	const { data, error } = await supabase
	.from('db-dictionary')
	.select()
	.eq('word',`${params.word}`)
	.single()
	if (error) throw new Error(error.message)
	return data
	
}