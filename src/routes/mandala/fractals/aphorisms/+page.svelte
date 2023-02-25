<script>
import { reveal } from 'svelte-reveal';
import supabase from '$lib/db'
let a = 1
export async function synaptic(){
	const { data, error } = await supabase
	.from('brhat-aphorisms')
	.select()
	.order('id')
  .limit(4)
	if (error) throw new Error(error.message)
	return data
}
</script>

<svelte:window bind:scrollY={a} />

<div class="flexbox-c l0">
		{#await synaptic()}
		<small class="green">...</small>
		{:then data}
		{#each data as item}
		<div class="flexbox-c fullbox">
			<img id="one" src={item.image1} alt={item.id} />
			<img id="two" src={item.image2} alt={item.id} />
		</div>
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
</div>

<style>
.l0 { background: var(--beau);}
.fullbox img { object-fit: contain;}

@media screen and (min-width: 900px){
	#one { padding-top: 160px; width: 400px;}
	#two { width: 520px; margin-left: 320px; margin-top: 32px;}
}
</style>