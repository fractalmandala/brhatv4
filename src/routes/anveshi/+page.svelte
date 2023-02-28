<script>
import supabase from '$lib/db'
import ThinBar from '$lib/components/pagecomps/ThinBar.svelte'
import Chapters from '$lib/components/headers/StaticH1.svelte'
import Diaries from '$lib/components/headers/StaticH1.svelte'
import FAQ from '$lib/components/pagecomps/AnveshiFAQ.svelte'
import FAQBox from '$lib/components/headers/StaticH1.svelte'
import Who from '$lib/components/headers/StaticH1.svelte'
let y = 1
let isFull = false

function toggleFull(){
	isFull = !isFull
}

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
<div class="flexbox-c imgbox x0">
	<img src="/images/herocovers/brhatanveshi.webp" alt="hero" style="transform: translateY({y/4}px)"/> 
</div>
<ThinBar></ThinBar>
<div class="flexbox-r minmargins-a lm0">
		<h3 class="w700 wide75">
			B<span class="soft">ṛ</span>hat Anveṣī is a travel program to contemporize ancient Indian tradition by guiding travel groups through hitherto rarely explored sacred kṣetras of India.
		</h3>
</div>
<div class="flexbox-c x2 minmargins">
	<h3 class="w600 lining grey2" data-textify>Chapters:</h3>
</div>


<div class="flexbox-r minmargins-a x3 xc">
		{#await allChapters()}
		<small>loading chapters...</small>
		{:then data}
		{#each data as item}
		<div class="in-col wide33">
			<img src={item.image} alt={item.name}>
			<h5 class="m-top-24 m-bot-zero"><a href={item.link}>{item.name}</a></h5>
			<p class="m-top-24 grey">{item.content.slice(0,250)}<a class="readmore" href={item.link}>...Read More</a></p>
			<div class="in-row gap24">
				<cite class="wbold upper blue">{item.duration}</cite>
				<cite class="wbold blue">{item.dates}</cite>
			</div>
		</div>
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
</div>

<div class="flexbox-c x2 minmargins">
	<h3 class="w600 lining grey2" data-textify>Anveṣī Diaries:</h3>
</div>


<div class="flexbox-c minmargins-a x3 xc">
		<h6 class="w400 wide75">
			Anveṣī Diaries is a collection of traveller images, trip videos, testimonials and writings from our trips. To submit your own experience, please write to anveshi@brhat.in
		</h6>
		<h5 class="wbold">
			Artwork by Ashish Kundalia
		</h5>
		<div class="flexbox-r of-four m-bot-24 diaries wrapper">
			{#await allImages()}
			<small>...</small>
			{:then data}
			{#each data as item}
			<div class="in-col wide25 l1a">
				<img src={item.image} alt={item.id} />
			</div>
			{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>
		<h5 class="wbold top-gap m-bot-zero">
			Video Testimonials <span class="w400 red"><p><a href="https://youtube.com/@brhat">View on YouTube</a></p></span>
		</h5>
		<div class="flexbox-r of-four pad-y-b videos">
			{#await getVids()}
			<small>loading chapters...</small>
			{:then data}
			{#each data as item}
			<div class="in-col wide25">
				<iframe
  					class="m-1"
  					width=88%
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

<div class="flexbox-c x2 minmargins">
	<h3 class="w600 lining grey2" data-textify>Who is Bṛhat Anveṣī:</h3>
</div>



<div class="flexbox-c minmargins-a x3 xc">
		<h6 class="w400 wide75 m-top-zero">
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
			
	</h6>
</div>

<div class="flexbox-c x2 minmargins">
	<h3 class="w600 lining grey2" data-textify>FAQ:</h3>
</div>

<div class="flexbox-c minmargins-a x3 xc">
		<FAQ></FAQ>	
	</div>




<style>


.lining {
	border-left: 4px solid var(--soft);
}


@media screen and (min-width: 900px) {
	.lm0 { height: 100vh; align-items: flex-end; }
	.lm0 h3 { letter-spacing: -2px;}
	.x2 { padding-bottom: 4px; width: 100%; background: white; background: white; height: 80px;border-top: 1px solid #d7d7d7; padding-top: 24px;}
	.x2 .lining { padding-top: 4px; padding-bottom: 2px; padding-left: 16px; background: white;}
.x3 { height: 100%; width: 100%; gap: 24px; background: white; padding-top: 48px; padding-bottom: 80px;}
	.diaries .in-col img {
		object-fit: cover;
		width: 100%;
		height: 200px;
	}

}

@media screen and (max-width: 899px) and (min-width: 768px) {
		.lm0 { height: 100vh; align-items: flex-end; }
		.x0 img { object-fit: cover; height: 100vh;}
	.x2 { padding-bottom: 4px; width: 100%; background: white; background: white; height: 80px;border-top: 1px solid #d7d7d7; padding-top: 24px;}
	.x3 .wide33 { height: 100%;}
	.x3 .wide33 h5 { margin-top: 16px;}
	.x3 .wide33 img { margin-bottom: 16px;}
	.x2 .lining { padding-top: 4px; padding-bottom: 2px; padding-left: 16px; background: white;}
	.x3 { height: 100vh; width: 100%; gap: 24px; background: white;}


}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.lm0 { margin-top: 64px; }
	.x0 { height: 100vh;}
	.x2 h3 { padding-left: 24px;}
	.x2, .x3 { height: 100%; background: white;}

}

@media screen and (max-width: 575px) {
	.lm0 { margin-top: 64px;}
	.x0 { height: 100vh;}
	.x0 img { height: 80vh; object-fit: cover;}
	.x2 h3 { padding-left: 24px;}
	.x2, .x3 { height: 100%; background: white;}
	.x3 .wide33 h5 { margin-top: 16px; font-size: 24px; margin-bottom: 16px;}
	.x3 .wide33 { margin-bottom: 32px;}
	
}
</style>



