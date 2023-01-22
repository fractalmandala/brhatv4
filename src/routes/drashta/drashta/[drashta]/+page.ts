import supabase from '$lib/db'

export async function load({params}:{params:{drashta:string}}){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('type','drashta')
	.eq('name',`${params.drashta}`)
	.single()
	
	if (error) throw new Error(error.message)
	return data
}