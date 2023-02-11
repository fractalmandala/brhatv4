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

<div data-scroll-container>
<div class="imagecontainer-hero"></div>
<div class="primecontainer-col" data-scroll-section>
		<div class="typeh4" data-scroll data-scroll-speed="3">
			B<span class="isred">ṛ</span>hat Anveṣī is a travel program to contemporize ancient Indian tradition by guiding travel groups through hitherto rarely explored sacred kṣetras of India. We seek to satisfy the wanderlust in you in a way which will leave you not just intellectually satisfied but also elevate your understanding and knowledge.
		</div>
</div>

<div class="c-c-c-c a1" data-scroll-section>
	{#await allChapters()}
		<small>loading chapters...</small>
		{:then data}
		<div class="r-r-r-r a1a">
			{#each data as item}
			<div class="c-c-c-c a1col" data-scroll data-scroll-speed="4">
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

</div>
<style>
.imagecontainer-hero { background-image: url('/images/herocovers/brhatanveshi.webp');}
.a1{ background-color: white;}

.typeh4 {
	color: white;
	background: rgba(0,0,0,0.8);
	font-weight: 200;
}

.a1col a { color: #171717;}

@media screen and (min-width: 900px) {
	.primecontainer-col {
		padding: 0 6vw;
		justify-content: center;
	}

	.a1 { height: 100vh; justify-content: center; padding: 0 6vw;}
	.typeh4 { padding: 32px 32px; width: 78%;}
	.a1a { gap: 32px;}
	.a1col { width: calc(33.33% - 32px);}

.typeh4 {
	color: white;
	background: rgba(0,0,0,0.8);
	font-weight: 200;
}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	
	.primecontainer-col {
		padding: 0 4vw;
		justify-content: center;
		height: 100vh;
	}	

	.a1 { height: 100vh; justify-content: center; padding: 0 4vw;}
	.a1a { gap: 23px}
	.a1col { width: calc(33.33% - 24px);}

}

@media screen and (max-width: 767px) {
	.primecontainer-col{ 
		padding: 2em 0;
		justify-content: flex-start;
	}
	.a1 { justify-content: center; padding: 2em 4vw;}
	.a1a { flex-wrap: wrap;}
	.a1col { width: 100%; padding: 0 1em;}

.typeh4 {
	color: #171717;
	background: none;
	font-weight: 300;
}

}
</style>



