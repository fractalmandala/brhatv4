<script lang="ts">
import supabase from '$lib/db'
import FAQ from '$lib/components/pagecomps/AnveshiFAQ.svelte'
let y = 1

export async function allImages() {
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','traveldiary')
	if (error) throw new Error(error.message)
	return data
}

async function getVids() {
  const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
	.eq('type','anveshi')
  .order('id',{ascending: false})
  .limit(4)
  if (error) throw new Error(error.message)
  return data
}


export async function allChapters() {
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','chapter')
	if (error) throw new Error(error.message)
	return data
}
</script>

<svelte:window bind:scrollY={y}/>
<div class="boxc x0">
	<img src="/images/herocovers/brhatanveshi.webp" alt="hero" style="transform: translateY({y/4}px)"/> 
</div>


	<div class="pad-a">
		<div class="boxc x1">
			<h2 class="wide75">
				<span class="anv">Bṛhat Anveṣī </span>is a travel program
			</h2>
			<h6 class="wide75">
				to contemporize ancient Indian tradition by guiding travel groups through hitherto <span class="anv">rarely explored sacred kṣetras of India.</span>
			</h6>
			<img class="temple" src="/images/anveshi/temple.png" alt="the temple" />
		</div>
		<div class="the-title y-full">
			<h2>Chapters</h2>
			<div class="traybox x2">
				{#await allChapters()}
				<small>loading chapters...</small>
				{:then data}
				{#each data as item}
				<div class="ww3 card">
					<img src={item.image} alt={item.name}>
					<h6><a href={item.link}>{item.name}</a></h6>
					<p>{item.content.slice(0,250)}<a class="anv wbold" href={item.link}>...Read More</a></p>
					<div class="boxr gap24">
						<cite>{item.duration}</cite>
						<cite>{item.dates}</cite>
					</div>
				</div>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
		</div>

		<div class="the-title y-full" id="traveldiaries">
			<h2>Travel Diaries</h2>
			<h6 class="wide75">
				Anveṣī Diaries is a collection of traveller images, trip videos, testimonials and writings from our trips. To submit your own experience, please write to anveshi@brhat.in
			</h6>
			<div class="traybox x4 allwrap">
				{#await allImages()}
					<small>...</small>
						{:then data}
							{#each data as item}
								<div class="ww4 card">
									<img src={item.image} alt={item.id} />
								</div>
							{/each}
						{:catch error}
					<pre>{error}</pre>
				{/await}
			</div>
			<div class="traybox wrap x5">
				{#await getVids()}
					<small>loading chapters...</small>
						{:then data}
							{#each data as item}
								<div class="ww4 card">
									<iframe
  									class="m-2"
  									width=100%
  									height=88%
  									src="https://www.youtube.com/embed/{item.videoid}"
  									title={item.name}
  									>
										</iframe>
								</div>
							{/each}
						{:catch error}
					<pre>{error}</pre>
				{/await}
			</div>
		</div>

		<div class="the-title y-full" id="aboutanveshi">
			<h2>Who is Bṛhat Anveṣī?</h2>
				<p class="wide75">
					A human being is born to search: for truth; for beauty; for meaning in life. Kaśmīra Śaiva darśana tells us that, vimarṣa – Śiva reflecting upon himself – is one of the highest goals of existence itself. According to another school of thought, Nature nudged evolution to a point where a species would emerge capable of reflecting upon itself and the mysteries of the cosmos, life and existence.
				</p>
				<p class="wide75">
					Without getting deep into darśana, the point is that, humans are born to search, born for anveṣaṇa. The word anveṣaṇa means discovering, seeking, or searching, and the one who searches is called – anveṣī – the discoverer. This element of discovery has mainly two dimensions – inner and outer. And the two are connected. The favorite theme of literature is wanderlust/ fernweh – the innate urge of humans to go out and discover the world.
				</p>
				<p class="wide75">
					Yes, that urge to discover the world is innate in all humans. To search for what is novel, what is new is basic. To discover the undiscovered, to unravel the hidden, to find pleasure in the very act of discovery – anveṣaṇa – comes naturally to us. Human history is full of courageous journeys taken individually and in groups, changing the course of entire humanity in the process. This urge is biological, as most other species also have this urge to chart new waters and to discover new territories. But in humans it is central. We are born – anveṣī.
				</p>
				<p class="wide75">
					But there is a deep inner dimension to this urge for discovery. While discovering the world we also discover the self. While looking for the new, we also crave for what is eternal and everlasting. While looking for change, we also look for the unchanging and the permanent. In short, while we discover the outer world, we also go on an inner journey an inner – anvekṣaṇa.
				</p>
				<p class="wide75">
					In Bhāratavarṣa and Hindu dharma, we discovered a perfect way to harmonize these two seemingly dichotomous urges of humans in one fulfilling quest. We created an entire tradition of traveling to sacred kṣetras, where both the inner and the outer quest of man for discovery is quenched in a way that is not just fulfilling, fun and satisfying but also spiritually and culturally elevating.
				</p>
				<h6>
					Bṛhat Anveṣī is a program in tribute to this fundamental quest. It seeks to contemporize this ancient Indian tradition by guiding travel groups through sacred kṣetras of India which are hitherto unexplored by most of us, but which are not just full of architectural, sculptural and cultural splendor, but are also living systems carrying beautiful ancestral traditions for thousands of years. 
				</h6>
				<h5 class="wide75">
					We seek to satisfy the wanderlust in you in a way which will leave you not just intellectually satisfied but will also elevate your understanding and knowledge. <span class="anv">When discovering together such, we are Bṛhat Anveṣī.</span>
				</h5>

		</div>

		<div class="the-title y-full" id="faqs">
			<h2>FAQ</h2>
			<FAQ></FAQ>
		</div>

	</div>



<style>

a:hover { color: var(--anv);}

.x0 { overflow-y: hidden;}
.temple { object-fit: contain;}

@media screen and (min-width: 900px) {
	.temple { height: 160px; margin-right: auto; margin-top: 32px;}
	.x0 { height: 100vh;}
	.x0 img { object-fit: cover; height: 100vh;}
	.x1 { height: 70vh;}

	.x4 img { object-fit: cover; height: 200px;}
	.x5 { margin-top: 24px;}
	.x5 .ww4 { height: 200px;}

}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.temple { height: 160px; margin-right: auto; margin-top: 32px;}
	.x0 img { object-fit: cover; height: 100vh;}
	.x4 img { object-fit: cover; height: 160px;}
	.x5 { margin-top: 24px;}

}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.temple { height: 160px; margin-right: auto; margin-top: 32px;}
	.x0 { height: 100vh;}
	.x0 img { height: 100%; object-fit: cover;}
	.x4 img { object-fit: cover; height: 160px;}
	.x5 { margin-top: 24px;}
	
}

@media screen and (max-width: 575px) {
	.temple { height: 120px; margin-right: auto; margin-top: 32px;}
	.x0 { height: 60vh;}
	.x0 img { height: 60vh; object-fit: cover;}
	.x4 img { object-fit: cover; height: 120px;}
	.x4 .ww4 { width: calc(50% - 12px); margin-bottom: 16px;}
	
}
</style>



