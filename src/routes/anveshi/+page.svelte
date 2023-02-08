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


<div class="imagecontainer-hero"></div>
<div class="primecontainer-col">
		<h3 data-scroll data-scroll-speed="3">
			B<span class="isred">ṛ</span>hat Anveṣī is a travel program to contemporize ancient Indian tradition by guiding travel groups through hitherto rarely explored sacred kṣetras of India. We seek to satisfy the wanderlust in you in a way which will leave you not just intellectually satisfied but also elevate your understanding and knowledge.
		</h3>
</div>
<div class="c-c-c-c a1">
	<h1>Chapters</h1>
	{#await allChapters()}
		<small>loading chapters...</small>
		{:then data}
		<div class="base-row px4 py2">
			{#each data as item}
			<div class="base-col col-y background p1 rd4" data-scroll data-scroll-speed="4">
				<img class="rd4" src={item.image} alt={item.name}>
				<h5 class="px1"><a href={item.link}>{item.name}</a></h5>
				<p class="px1">{item.content.slice(0,250)}<a class="isred" href={item.link}>...Read More</a></p>
				<div class="base-row-in px1">
					<small class="type-small">{item.duration}</small>
					<small class="type-small">{item.dates}</small>
				</div>
			</div>
			{/each}
		</div>
		{:catch error}
		<pre>{error}</pre>
	{/await}
</div>


<style>
.imagecontainer-hero { background-image: url('/images/herocovers/brhatanveshi.webp');}
.a1, .primecontainer-col { background-color: white;}
.primecontainer-col h3 {
	background-color: rgba(0,0,0,0.8);
	color: white;
}

@media screen and (min-width: 900px) {
	.primecontainer-col {
		padding: 0 8vw;
		justify-content: center;
	}
	.primecontainer-col h3 { text-align: center; padding: 1em;}
	.a1 { height: 100vh; justify-content: center;}
	.a1 h1 { text-align: center;}
}
</style>



