<script>
import supabase from '$lib/db'
import DrashtaSide from '$lib/components/globals/DrashtaSide.svelte'
export async function allCourses() {
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('type','overview')
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="imagecontainer-hero" style="background-image: url('/images/herocovers/hinduiconography.webp')">
<div class="imagecontainer-screen">
</div>
</div>
<div class="primecontainer-row">
<DrashtaSide></DrashtaSide>
<div class="pagesheet">
<h5 class="cc px4">
Bṛhat Draṣṭā is our offering in deep learning where we will offer courses on some of the greatest ancient and contemporary philosophers (draṣṭās) and schools of thoughts (darśana). It also seeks to impart the ways of looking and seeing, darśana, so that the learners can also proceed on the path of being draṣṭās.
</h5>
{#await allCourses()}
<small>loading chapters...</small>
{:then data}
<div class="base-row px4 py2">
{#each data as item}
	<div class="base-col col-y background p1 rd4">
		<img class="rd4" src={item.image} alt={item.name}>
		<h5 class="px1"><a href={item.link}>{item.name}</a></h5>
		<p class="px1">{item.content.slice(0,250)}<a class="isred" href={item.link}>...Read More</a></p>
		<div class="base-row-in px1">
				<small>{item.status}</small>
				<small>{item.datefrom}</small>
			</div>
	</div>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}
</div>
</div>

<style>
h5 { text-transform: capitalize;}
</style>


