import supabase from '$lib/db'

export const getDhiti = async() => {
	const { data, error } = await supabase 
		.from('brhat-dhiti')
		.select()
		.order('sequence',{ascending: false})
		if (error) throw new Error(error.message)
		return data
}