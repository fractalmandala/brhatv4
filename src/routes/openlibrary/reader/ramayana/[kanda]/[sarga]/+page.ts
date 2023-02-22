import supabase from '$lib/db'
export async function load({ params }:{ params: { kanda: number, sarga: string }}){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('kanda',`${params.kanda}`)
	.eq('sarga',`${params.sarga}`)
	.limit(1)
	.single()
	if (error) throw new Error(error.message)
	return data
}