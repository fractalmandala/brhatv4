import supabase from '$lib/db'
export async function load({ params }:{ params: { kanda: number, sarga: string, verse: string, index: string }}){
	
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('index',`${params.index}`)
	.eq('verse',`${params.verse}`)
	.eq('sarga',`${params.sarga}`)
	.eq('kanda',`${params.kanda}`)
	.order('id')
	.single()
	if (error) throw new Error(error.message)
	return data
}