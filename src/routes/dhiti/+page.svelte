<script>
import supabase from '$lib/db'
import DhitiRecent from '$lib/components/pagecomps/DhitiRecent.svelte'

export const getDhiti = async() => {
	const { data, error } = await supabase 
		.from('brhat-dhiti')
		.select()
		.order('sequence',{ascending: false})
		if (error) throw new Error(error.message)
		return data
}
</script>

<div class="boxoftext">
<DhitiRecent></DhitiRecent>
</div>

<style>


.boxoftext {
	display: flex;
	flex-direction: row;
	width: 100vw;	
	min-height: 100vh;
}


</style>