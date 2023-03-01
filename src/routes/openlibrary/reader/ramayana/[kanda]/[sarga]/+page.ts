import supabase  from '$lib/db'

export async function load({params}:{params: { kanda:any, sarga:any }}){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('kanda',`${params.kanda}`)
	.eq('sarga',`${params.sarga}`)
	.order('id')
	if (error) throw new Error(error.message)
	return {
		data: data
	}
}