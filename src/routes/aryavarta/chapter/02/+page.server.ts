import supabase from '$lib/db'

export async function load(){
	const { data } = await supabase
	.from('soaChapter2')
	.select()
	.order('id')
	return {
		soaChapter2: data ?? [],
	};
}