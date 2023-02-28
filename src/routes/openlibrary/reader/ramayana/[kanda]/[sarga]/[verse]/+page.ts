import supabase  from '$lib/db'

export async function load({params}:{params: { kanda:number, sarga:number, verse:number}}){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('kanda',`${params.kanda}`)
	.eq('sarga',`${params.sarga}`)
	.eq('verse',`${params.verse}`)
	.order('id')
	if (error) throw new Error(error.message)
	return {
		data: data
	}
}