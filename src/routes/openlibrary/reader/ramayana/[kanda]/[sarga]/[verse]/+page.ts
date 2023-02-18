import supabase from '$lib/db'
export async function load({ params }:{ params: { kanda: number, sarga: number, verse: string }}){
	
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('verse',`${params.verse}`)
	.eq('sarge',`${params.sarga}`)
	.eq('kanda',`${params.kanda}`)
	.order('id')
	.single()
	if (error) throw new Error(error.message)
	return data
}