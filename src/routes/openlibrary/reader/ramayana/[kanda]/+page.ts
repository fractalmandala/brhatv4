import supabase  from '$lib/db'

export async function load({params}:{params: { kanda:any }}){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select('kanda')
	.eq('kanda',`${params.kanda}`)
	.order('id')
	if (error) throw new Error(error.message)
	return {
		data: data
	}
}