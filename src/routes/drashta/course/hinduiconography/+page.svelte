<script>
import supabase from '$lib/db'
import DrashtaCourse from '$lib/components/pagecomps/DrashtaCourse.svelte'

	export async function fetchCourse(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','hindu iconography')
	.eq('type', 'overview')
	if (error) throw new Error(error.message)
	return data
	}

</script>



<div class="row-of-2 l1 pad4">
	{#await fetchCourse()}
	<small>...loading</small>
	{:then data}
	{#each data as item}
		<div class="twobox formal3 two1">
			<h1>{item.name}</h1>
		</div>
		<div class="twobox two2">
			<img src={item.image} alt={item.name} />
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>
<div class="c-c-c-c l2 pad4">
<DrashtaCourse></DrashtaCourse>
</div>







<style>
.l1 { height: 100vh; background-position: center center; background-size: cover; background-repeat: no-repeat; justify-content: flex-start;}
.formal3 h1 { text-transform: capitalize;}

@media screen and (min-width: 900px) {
	.l1 { align-items: center; height: 100vh;}
	.twobox img { object-fit: cover; width: 100%; height: 100%;}
	.two2 { width: 80%; height: 72%; z-index: -1;}
	.two1 { width: 70vw; margin-right: -56%; height: 100%; justify-content: flex-end;}
	.two1 h1 { background: #272727; padding: 16px 32px; margin-bottom: 0.5em; color: white;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {

}

@media screen and (max-width: 767px) and (min-width: 576px) {

}

@media screen and (max-width: 575px) {
	.l1 h1 { text-align: center; margin-left: 0;}
}
</style>
