import supabase from '$lib/db'

export async function load(){
	const { data } = await supabase
	.from('soaChapter1')
	.select()
	.order('id')
	return { data }
}