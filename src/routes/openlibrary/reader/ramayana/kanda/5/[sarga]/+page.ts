import supabase  from '$lib/db'

export async function load({params}:{params: { sarga:any }}){
	const { data, error } = await supabase
	.from('db-ramayanaindex')
	.select()
	.eq('kanda','5')
	.eq('type','kandasarga')
	.eq('sarga',`${params.sarga}`)
	.order('id')
	.single()
	if (error) throw new Error(error.message)
	return data	

}
