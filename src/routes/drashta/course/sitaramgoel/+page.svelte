<script>
import supabase from '$lib/db'
import DrashtaCourse from '$lib/components/pagecomps/DrashtaSita.svelte'
let y = 1
	export async function fetchCourse(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','introduction to sita ram goel')
	.eq('type', 'overview')
	if (error) throw new Error(error.message)
	return data
	}

</script>


<svelte:window bind:scrollY={y}/>
<div class="flexbox-r l1">
	{#await fetchCourse()}
	<small>...loading</small>
	{:then data}
	{#each data as item}
		<div class="in-col two1">
			<h1>{item.name}</h1>
		</div>
		<div class="in-col two2">
			<img src={item.image} alt={item.name} style="transform: translateY({y/4}px)" />
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>
<div class="flexbox-c l2 pad4">
<DrashtaCourse></DrashtaCourse>
</div>


<style>
.l1 { height: 100vh; background-position: center center; background-size: cover; background-repeat: no-repeat; justify-content: flex-start; z-index: 2; background: white;}

.l1 h1 { text-transform: capitalize;}
@media screen and (min-width: 900px) {
	.l1 { align-items: center; height: 100vh; padding-left: 64px;}
	.l1 .in-col img { object-fit: cover; width: 100%; height: 100%;}
	.two2 { width: 80%; height: 72%;z-index:0;}
	.two1 { width: 70vw; margin-right: -56%; height: 100%; justify-content: flex-end;z-index: 1;}
	.two1 h1 { background: rgba(0,0,0,0.8); padding: 16px 32px; margin-bottom: 0.5em; color: white;}
	.l1 {overflow-y: hidden;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.l1 { align-items: flex-start; height: 100vh; padding-left: 64px; flex-wrap: wrap;}
	.two2 { width: 80%; z-index:0; height: 40vh; margin-top: 80px; }
	.two1 { width: 90vw; height: 30%; margin-top: 40vh; justify-content: flex-start;z-index: 1;}
	.two1 h1 { background: #272727; padding: 16px 32px; margin-bottom: 0.5em; color: white; font-size: 64px;}

}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.l1 { height: 100vh; width: 100vw; overflow-x: hidden; flex-wrap: wrap; padding-left: 0; margin-left: 0;}
	.two2 { height: 60vh; width: 100vw; order: 1;}
	.l1 .in-col img { object-fit: cover; height: 100%;}
	.two1 { height: 100%; width: 100vw; margin-left: 0; padding-left: 0; order: 2; padding-top: 64px; z-index: 2;}
	.two1 h1 { margin-left: 0; width: 100%;}
	.two1 h1 { background: #272727; padding: 16px 32px; margin-bottom: 0.5em; color: white; font-size: 64px;}
} 


@media screen and (max-width: 575px) {
	.l1 { height: 100%; width: 100vw; overflow-x: hidden; flex-wrap: wrap; padding-left: 0; margin-left: 0;}
	.two2 { height: 40vh; width: 100vw; order: 1;}
	.l1 .in-col img { object-fit: cover; height: 100%;}
	.two1 { height: 100%; width: 100vw; margin-left: 0; padding-left: 0; order: 2; padding-top: 32px; z-index: 2;}
	.two1 h1 { margin-left: 0; width: 100%;}
	.two1 h1 { background: #272727; padding: 16px 32px; margin-bottom: 0.5em; color: white; font-size: 40px;}
}
</style>
