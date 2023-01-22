<script>
import supabase from '$lib/db'

export async function allChapters() {
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','chapter')
	if (error) throw new Error(error.message)
	return data
}
</script>


<h5 class="cc px4">
Bṛhat Anveṣī is a travel program to contemporize ancient Indian tradition by guiding travel groups through hitherto rarely explored sacred kṣetras of India. We seek to satisfy the wanderlust in you in a way which will leave you not just intellectually satisfied but also elevate your understanding and knowledge.
</h5>
{#await allChapters()}
<small>loading chapters...</small>
{:then data}
<div class="base-row px4 py2">
	{#each data as item}
		<div class="base-col col-y background p1 rd4">
			<img class="rd4" src={item.image} alt={item.name}>
			<h5 class="px1"><a href={item.link}>{item.name}</a></h5>
			<p class="px1">{item.content.slice(0,250)}<a class="isred" href={item.link}>...Read More</a></p>
			<div class="base-row-in px1">
				<small>{item.duration}</small>
				<small>{item.dates}</small>
			</div>
		</div>
	{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}

<style>
:root { --image: url('/images/anveshi/keykar.webp');}
</style>



