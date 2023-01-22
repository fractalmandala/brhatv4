import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export default supabase

export async function fetchData() {
  try {
    const data = await supabase.from('db-dictionary').select()
    return data
  } catch (err) {
    console.error(err)
  }
}

export async function getBooks() {
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	if (error) throw new Error(error.message)
	return data
}

export async function getChapters(){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','chapter')
	if (error) throw new Error(error.message)
	return data
}

export async function ChapterPage({params}:{params:{chapter:string}}){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('chapter',`${params.chapter}`)
	if (error) throw new Error(error.message)
	return data
}	

export async function anveshiFAQ(){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','faq')
	if (error) throw new Error(error.message)
	return data
}

