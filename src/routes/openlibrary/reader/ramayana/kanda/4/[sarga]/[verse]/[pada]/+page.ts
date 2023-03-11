import supabase  from '$lib/db'

export async function load({params}:{params: { sarga:any, verse:any, pada:any}}){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('kanda','4')
	.eq('sarga',`${params.sarga}`)
	.eq('verse',`${params.verse}`)
	.eq('pada',`${params.pada}`)
	.order('id')
	.single()
	if (error) throw new Error(error.message)
	return data	

}