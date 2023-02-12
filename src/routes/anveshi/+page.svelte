<script>
import supabase from '$lib/db'
import MainH1 from '$lib/components/headers/MainH1.svelte'
import FAQ from '$lib/components/headers/MainH1.svelte'
import Who from '$lib/components/headers/MainH1.svelte'

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

export async function allFaq() {
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','faq')
	.order('id')
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

<div class="w-box">
<div class="imagecontainer-hero"></div>
<div class="primecontainer-col">
		<div class="typeh4">
			B<span class="isred">ṛ</span>hat Anveṣī is a travel program to contemporize ancient Indian tradition by guiding travel groups through hitherto rarely explored sacred kṣetras of India.
		</div>
</div>
<div class="headbox">
<h1>Chapters</h1>
</div>
<div class="c-c-c-c a1">
	{#await allChapters()}
		<small>loading chapters...</small>
		{:then data}
		<div class="r-r-r-r a1a">
			{#each data as item}
			<div class="c-c-c-c a1col">
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
<MainH1>Anveṣī Diaries</MainH1>
<div class="c-c-c-c filler m2">
<h5>Anveṣī Diaries is a collection of traveller images, trip videos, testimonials and writings from our trips. To submit your own experience, please write to anveshi@brhat.in</h5>
<h4>Artwork by Ashish Kundalia</h4>
</div>
<div class="r-r-r-r l1 m2">
	{#await allImages()}
	<small>...</small>
	{:then data}
		{#each data as item}
		<div class="c-c-c-c l1a">
			<img src={item.image} alt={item.id} />
		</div>
		{/each}
	{:catch error}
<pre>{error}</pre>
{/await}
</div>
<div class="holder" on:click={toggleFull} on:keydown={toggleFull}>
<Who>Who is Bṛhat Anveṣī</Who>
<div class="padding c-c-c-c"></div>
</div>
	{#if isFull}
		<div class="c-c-c-c whois">
			<button class="plain" on:click={toggleFull} on:keydown={toggleFull}>Close</button>
			<p>
				A human being is born to search: for truth; for beauty; for meaning in life. Kaśmīra Śaiva darśana tells us that, vimarṣa – Śiva reflecting upon himself – is one of the highest goals of existence itself. According to another school of thought, Nature nudged evolution to a point where a species would emerge capable of reflecting upon itself and the mysteries of the cosmos, life and existence.
			
			Without getting deep into darśana, the point is that, humans are born to search, born for anveṣaṇa. The word anveṣaṇa means discovering, seeking, or searching, and the one who searches is called – anveṣī – the discoverer. This element of discovery has mainly two dimensions – inner and outer. And the two are connected. The favorite theme of literature is wanderlust/ fernweh – the innate urge of humans to go out and discover the world.
			
			Yes, that urge to discover the world is innate in all humans. To search for what is novel, what is new is basic. To discover the undiscovered, to unravel the hidden, to find pleasure in the very act of discovery – anveṣaṇa – comes naturally to us. Human history is full of courageous journeys taken individually and in groups, changing the course of entire humanity in the process. This urge is biological, as most other species also have this urge to chart new waters and to discover new territories. But in humans it is central. We are born – anveṣī.
			
			But there is a deep inner dimension to this urge for discovery. While discovering the world we also discover the self. While looking for the new, we also crave for what is eternal and everlasting. While looking for change, we also look for the unchanging and the permanent. In short, while we discover the outer world, we also go on an inner journey an inner – anvekṣaṇa.
			
			In Bhāratavarṣa and Hindu dharma, we discovered a perfect way to harmonize these two seemingly dichotomous urges of humans in one fulfilling quest. We created an entire tradition of traveling to sacred kṣetras, where both the inner and the outer quest of man for discovery is quenched in a way that is not just fulfilling, fun and satisfying but also spiritually and culturally elevating.
			
			Bṛhat Anveṣī is a program in tribute to this fundamental quest. It seeks to contemporize this ancient Indian tradition by guiding travel groups through sacred kṣetras of India which are hitherto unexplored by most of us, but which are not just full of architectural, sculptural and cultural splendor, but are also living systems carrying beautiful ancestral traditions for thousands of years. We seek to satisfy the wanderlust in you in a way which will leave you not just intellectually satisfied but will also elevate your understanding and knowledge. When discovering together such, we are Bṛhat Anveṣī.
			
						</p>
		</div>
	{/if}
<FAQ>FAQs</FAQ>
<div class="c-c-c-c l2">
	{#await allFaq()}
	<small>....</small>
	{:then data}
	{#each data as item}
	<div class="c-c-c-c l2a">
		<h4>{item.name}</h4>
		<p>{item.content}</p>
	</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>

</div>


<style>

.headbox { background: var(--beau); width: 100vw; padding-left: 5vw; z-index: 600;}
.headbox h1, .l1, .l2 {
	background: white;
	color: #474747;
}
.whois p { color: #474747;}

.filler { background: white; width: 100%;}
.imagecontainer-hero { background-image: url('/images/herocovers/brhatanveshi.webp');}
.a1{ background-color: white;}
.px1 { color: #474747;}
.typeh4 {
	color: white;
	background: rgba(0,0,0,0.8);
	font-weight: 200;
}

.a1col a { color: #171717;}
.padding { width: 100vw; background: white;}

@media screen and (min-width: 900px) {
	.headbox h1 {
		font-size: 96px;
		letter-spacing: -2px;
		padding: 16px 8px 16px 24px;
		margin-bottom: 0;
	}
	.primecontainer-col {
		padding: 0 6vw;
		justify-content: center;
	}
	.filler {
		padding: 32px 20vw 0 6vw;
	}
	.filler h4 {
		color: #fe4a49;
		margin-top: 64px;
		margin-bottom: 0;
		font-weight: 500;
	}

	.a1 { justify-content: center; padding: 80px 6vw;}
	.typeh4 { padding: 32px 32px;}
	.a1a { gap: 32px;}
	.a1col { width: calc(33.33% - 32px);}
	.l1 { width: 100vw; padding: 24px 6vw 64px 6vw; flex-wrap: wrap; gap: 32px;}
	.l1a { width: calc(25% - 24px); height: 240px;}
	.l1a img {
		height: 240px;
		object-fit: cover;
	}
	.l2 {
		padding-left: 6vw;
		padding-right: 6vw;
		padding-bottom: 4em;
	}

	.l2a h4 {
		font-weight: 500;
		font-size: 32px;
		margin-top: 16px;
		border-top: 1px solid #d7d7d7;
		padding-top: 16px;
		width: 60%;
	}
	.l2a:hover p {
		display: flex;
	}
	.l2a p {
		color: #474747;
		display: none;
		font-size: 18px;
		width: 70%;
		transition: display 0.4s ease;
	}

	.whois {
		width: 100vw;
		position: fixed;
		padding: 120px 6vw 0 6vw;
		z-index: 800;
		top: 0;
		left: 0;
		background: white;
		align-items: flex-start;
		justify-content: flex-start;
		overflow-y: scroll;
	}

	.whois p {
		font-size: 18px;
		line-height: 1.4;
		width: 70%;
	}

	.whois button{
		background: none;
		border: none;
		margin-bottom: 64px;
	}

	.padding { height: 6em;}


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

}
</style>



