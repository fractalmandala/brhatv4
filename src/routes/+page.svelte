<script lang="ts">
import { onMount } from 'svelte';
import Footer from '$lib/components/globals/FooterGlobal.svelte'
import supabase from '$lib/db'
import HeadGeneral from '$lib/components/globals/Header2023.svelte'
import HomeAccordion from '$lib/components/pagecomps/HomeAccordion.svelte'
import DhitiRecent from '$lib/components/pagecomps/DhitiSlider.svelte'
import HomeVids from '$lib/components/pagecomps/HomeVids.svelte'
import ButtonOutline from '$lib/components/animations/ButtonOutline.svelte'



async function brhatPillars() {
const { data , error } = await supabase
.from('brhat-about')
.select()
.eq('type','actions')
.order('sequence')
if (error) throw new Error(error.message)
return data
}

</script>

<HeadGeneral></HeadGeneral>
	<div class="c-c-c-c holder" data-scroll-section>
		<HomeAccordion></HomeAccordion>
	</div>
	<div class="big-box" data-scroll-section>
		<h3 id="lead-text">
			B<span class="isred">ṛ</span>hat is a Culture Engine
		</h3>
		<h5 class="cc-left" id="actions">
			To power creatives, research and design rooted
			in the Indian civilizational consciousness.<br>We convert individual, institutional 
			and collective intent into action, across 3 dimensions:
		</h5>
		{#await brhatPillars()}
		<small>...</small>
		{:then data}
		<div class="base-row pillars-row padding-base">
		{#each data as item}
			<div class="base-col card pillars"> 
				<img src={item.image} alt={item.name}/>
				<h5 class="mt2 cc-left isblack wd100">{item.name}</h5>
				<pre class="cc-left in-card">{item.content}</pre>
			</div>
		{/each}
		</div>
		{:catch error}
		<pre>{error}</pre>
		{/await}
		<ButtonOutline><a href="/about">About Us</a></ButtonOutline>
	</div>
	<div class="c-c-c-c holder" data-scroll-section>
		<HomeVids></HomeVids>
	</div>
	<div class="c-c-c-c holder" data-scroll-section>
		<DhitiRecent></DhitiRecent>
	</div>
	<div class="c-c-c-c holder" data-scroll-section>
		<Footer></Footer>
	</div>




<style>


.big-box { justify-content: center; align-items: center; background: white;}
.card.pillars img {
	object-fit: contain;
	margin-left: auto;
	margin-right: auto;
}
.pillars-row, h3, h5 { text-align: center;}
.card h5 { text-align: center;}
.pillars-row { justify-content: center;}
.card { align-items: center; border-radius: 4px;}
a { color: inherit;}

@media screen and (min-width: 900px) {
	
	.padding-base {
		padding-left: 6vw;
		padding-right: 6vw;
	}

	.card.pillars img {
		width: 64px;
	}
	.card { width: 33.33%; background-color: #fefefe; box-shadow: 4px 2px 5px #f1f1f1, -4px -3px 6px #f7f7f7;}
	.pillars-row { gap: 2em; margin-top: 1em;}
	.holder { height: 100vh; width: 100vw;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
		.padding-base {
		padding-right: 4vw;
		padding-left: 4vw;
	}
	.card.pillars img {
		width: 64px;
	}
	.card { width: 33.33%; background-color: #fefefe; box-shadow: 4px 2px 5px #f1f1f1, -4px -3px 6px #f7f7f7;}
	.pillars-row { gap: 2em;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.big-box { 
		padding-top: 2em;
		padding-bottom: 2em;
	}
	.big-box h3 { font-size: 2em;padding-left: 4vw; padding-right: 4vw;}
	h5 { font-size: 1.44em; padding-left: 4vw; padding-right: 4vw;}
	pre { font-size: 1.2em;}

			.padding-base {
		padding-right: 4vw;
		padding-left: 4vw;
	}
		.card.pillars img {
		width: 64px;
	}
	.card { width: 100%; background-color: #fefefe; box-shadow: 4px 2px 5px #f1f1f1, -4px -3px 6px #f7f7f7;}
	.pillars-row { gap: 2em; flex-wrap: wrap;}
}

@media screen and (max-width: 575px) {
	.big-box {
		padding-top: 2em;
		padding-bottom: 2em;
	}

	.big-box h3 { font-size: 2em; padding-left: 4vw; padding-right: 4vw; }
	h5 { font-size: 1.44em;  padding-left: 4vw; padding-right: 4vw; }
	pre { font-size: 1.2em;}
	.padding-base {
		padding-right: 4vw;
		padding-left: 4vw;
	}
		.card.pillars img {
		width: 64px;
	}
	.card { width: 100%; padding-top: 1em;background-color: #fefefe; box-shadow: 4px 2px 5px #f1f1f1, -4px -3px 6px #f7f7f7;}
	.pillars-row { gap: 2em; flex-wrap: wrap;}
}
</style>