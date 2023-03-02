<script>
import supabase from '$lib/db'
import ThinBar from '$lib/components/pagecomps/ThinBar.svelte'
import Parallax from '$lib/components/animations/Parallax.svelte'
import FAQ from '$lib/components/pagecomps/AnveshiFAQ.svelte'
let y = 1
let isFull = false

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
<div class="box-c back-image x0">
	<img src="/images/herocovers/brhatanveshi.webp" alt="hero" style="transform: translateY({y/4}px)"/> 
</div>

<ThinBar></ThinBar>



<div class="box-r m-mid ll lm0">
		<h3 class="w700 wide75">
			B<span class="soft">ṛ</span>hat Anveṣī is a travel program to contemporize ancient Indian tradition by guiding travel groups through hitherto rarely explored sacred kṣetras of India.
		</h3>
</div>


<Parallax --parallaximage="url('/images/herocovers/anveshinewwall.webp')"></Parallax>

<div class="box-c titling m-mid">
	<h3 class="lining" data-textify>Chapters</h3>
</div>

<div class="box-r wrap m-large x3 gap3">
		{#await allChapters()}
		<small>loading chapters...</small>
		{:then data}
		{#each data as item}
		<div class="box-c h100p wd3">
			<img src={item.image} alt={item.name}>
			<h5 class="m-top-24 m-bot-zero"><a href={item.link}>{item.name}</a></h5>
			<p class="m-top-8 grey">{item.content.slice(0,250)}<a class="readmore" href={item.link}>...Read More</a></p>
			<div class="box-r gap24">
				<cite class="wbold upper grey">{item.duration}</cite>
				<cite class="wbold grey">{item.dates}</cite>
			</div>
		</div>
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
</div>

<div class="box-c titling m-mid">
	<h3 class="w600 lining grey2" data-textify>Anveṣī Diaries:</h3>
</div>


<div class="box-c m-mid h100p xc">
	<h5 class="w400 wide75 m-top-zero m-bot-zero">
		Anveṣī Diaries is a collection of traveller images, trip videos, testimonials and writings from our trips. To submit your own experience, please write to anveshi@brhat.in
	</h5>
	<h5 class="wbold">
		Artwork by Ashish Kundalia
	</h5>
	<div class="box-r gap4 m-sm h100p diaries allwrap">
		{#await allImages()}
		<small>...</small>
		{:then data}
		{#each data as item}
			<div class="box-c wd4 l1a">
				<img src={item.image} alt={item.id} />
			</div>
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>
	<h5 class="wbold m-bot-zero" id="hhhhh">
		Video Testimonials <span class="w400 red"><p><a href="https://youtube.com/@brhat">View on YouTube</a></p></span>
	</h5>
	<div class="box-r wrap pad80-b m-sm gap4 h100p">
			{#await getVids()}
			<small>loading chapters...</small>
			{:then data}
			{#each data as item}
			<div class="box-c wd4">
				<iframe
  					class="m-1"
  					width=100%
  					height=100%
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

<div class="box-c titling m-bot-zero m-mid">
	<h3 class="w600 lining grey2 m-bot-zero" data-textify>Who is Bṛhat Anveṣī:</h3>
</div>

<div class="box-c m-sm x6">
		<p class="w400 wd2-3 m-top-zero">
				A human being is born to search: for truth; for beauty; for meaning in life. Kaśmīra Śaiva darśana tells us that, vimarṣa – Śiva reflecting upon himself – is one of the highest goals of existence itself. According to another school of thought, Nature nudged evolution to a point where a species would emerge capable of reflecting upon itself and the mysteries of the cosmos, life and existence.
		<br><br>	
			Without getting deep into darśana, the point is that, humans are born to search, born for anveṣaṇa. The word anveṣaṇa means discovering, seeking, or searching, and the one who searches is called – anveṣī – the discoverer. This element of discovery has mainly two dimensions – inner and outer. And the two are connected. The favorite theme of literature is wanderlust/ fernweh – the innate urge of humans to go out and discover the world.
		<br><br>		
			Yes, that urge to discover the world is innate in all humans. To search for what is novel, what is new is basic. To discover the undiscovered, to unravel the hidden, to find pleasure in the very act of discovery – anveṣaṇa – comes naturally to us. Human history is full of courageous journeys taken individually and in groups, changing the course of entire humanity in the process. This urge is biological, as most other species also have this urge to chart new waters and to discover new territories. But in humans it is central. We are born – anveṣī.
		<br><br>		
			But there is a deep inner dimension to this urge for discovery. While discovering the world we also discover the self. While looking for the new, we also crave for what is eternal and everlasting. While looking for change, we also look for the unchanging and the permanent. In short, while we discover the outer world, we also go on an inner journey an inner – anvekṣaṇa.
		<br><br>		
			In Bhāratavarṣa and Hindu dharma, we discovered a perfect way to harmonize these two seemingly dichotomous urges of humans in one fulfilling quest. We created an entire tradition of traveling to sacred kṣetras, where both the inner and the outer quest of man for discovery is quenched in a way that is not just fulfilling, fun and satisfying but also spiritually and culturally elevating.
		<br><br>		
			Bṛhat Anveṣī is a program in tribute to this fundamental quest. It seeks to contemporize this ancient Indian tradition by guiding travel groups through sacred kṣetras of India which are hitherto unexplored by most of us, but which are not just full of architectural, sculptural and cultural splendor, but are also living systems carrying beautiful ancestral traditions for thousands of years. We seek to satisfy the wanderlust in you in a way which will leave you not just intellectually satisfied but will also elevate your understanding and knowledge. When discovering together such, we are Bṛhat Anveṣī.
			
	</p>
</div>

<div class="box-c m-mid titling">
	<h3 class="w600 lining grey2" data-textify>FAQ:</h3>
</div>

<div class="box-c x7 m-sm">
		<FAQ></FAQ>	
</div>




<style>


.lining {
	border-left: 4px solid var(--soft);
}

.x0 { overflow-y: hidden;}
@media screen and (min-width: 900px) {
	#hhhhh { margin-top: 80px;}
	.x0 { height: 100vh;}
	.lm0 { height: 80vh; align-items: center; }
	.lm0 h3 { padding-left: 16px; }
	.x6, .x7 { padding-left: 96px; padding-top: 32px;}
	.x3 { padding-top: 32px; padding-bottom: 32px; height: 80vh;}
	.xc h5 { padding-left: 16px;}
	.diaries .box-c img {
		object-fit: cover;
		width: 100%;
		height: 200px;
	}

}

@media screen and (max-width: 899px) and (min-width: 768px) {
		.lm0 { height: 100vh; align-items: center; }
		.x0 img { object-fit: cover; height: 100vh;}
	.lm0 h3 { padding-left: 16px; }
		.xc h5 { padding-left: 16px}
		.x3 .wd3 h5 { margin-top: 16px;}
		.x3 .wd3 img { margin-bottom: 16px;}

	.l1a img { object-fit: cover; height: 128px; width: 100%;}
	#hhhhh { margin-top: 40px; margin-bottom: 8px;}

}

@media screen and (max-width: 767px) and (min-width: 576px) {

	.x0 { height: 60vh;}
.l1a img { object-fit: cover; height: 128px; width: 100%;}
	

}

@media screen and (max-width: 575px) {

	.x0 { height: 60vh;}
	.x0 img { height: 60vh; object-fit: cover;}
.l1a img { object-fit: cover; height: 128px; width: 100%;}
	.l1a { width: 45%;}
	.diaries { padding: 0;}
	
	
}
</style>



