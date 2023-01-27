import supabase from '$lib/db'
export async function load({ params }:{ params: { mandala: number }}){
	const { data, error } = await supabase
	.from('dbrv-suktas')
	.select()
	.eq('mandala',`${params.mandala}`)
	.limit(1)
	.single()
	if (error) throw new Error(error.message)
	return data
}