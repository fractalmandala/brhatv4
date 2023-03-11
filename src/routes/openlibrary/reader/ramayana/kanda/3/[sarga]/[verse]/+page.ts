import supabase  from '$lib/db'

export async function load({params}:{params: { sarga:any, verse:any }}){
	const { data, error } = await supabase
	.from('db-ramayanaindex')
	.select()
	.eq('kanda','3')
	.eq('type','sargaverse')
	.eq('sarga',`${params.sarga}`)
	.eq('verse',`${params.verse}`)
	.order('id')
	.single()
	if (error) throw new Error(error.message)
	return data	

}
