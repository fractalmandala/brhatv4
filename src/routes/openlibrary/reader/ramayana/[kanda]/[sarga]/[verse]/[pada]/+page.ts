import supabase  from '$lib/db'

export async function load({params}:{params: { kanda:number, sarga:number, verse:number, pada:string}}){
	const { data: data1, error: error1 } = await supabase
	.from('db-ramayana')
	.select()
	.eq('kanda',`${params.kanda}`)
	.eq('sarga',`${params.sarga}`)
	.eq('verse',`${params.verse}`)
	.eq('pada',`${params.pada}`)
	.order('id')
	.single()
	
	const { data: data2, error: error2 } = await supabase
	.from('db-ramayana-lemma')
	.select()
	.eq('kanda',`${params.kanda}`)
	.eq('sarga',`${params.sarga}`)
	.eq('verse',`${params.verse}`)
	.eq('pada',`${params.pada}`)
	.order('id')

	if (error1) throw new Error(error1.message)
	if (error2) throw new Error(error2.message)

	return {
		data1,
		data2
	}
}