<script lang="ts">
import supabase from '$lib/db'
import Animations from "textify.js";
import { onMount } from 'svelte'
import '$lib/styles/textify.css'
import MainH1 from '$lib/components/headers/StaticH1.svelte'
import Dhiti from '$lib/components/headers/MainH1.svelte'

async function Videos() {
  const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
  .order('id',{ascending: false})
  .limit(6)
  if (error) throw new Error(error.message)
  return data
}


onMount(() => {
	const { Textify } = Animations;
	new Textify({
		duration: 500,
		once: false,
		stagger: 200,
		threshold: 0.1
	})
})
</script>

<div data-scroll-section>
	<div class="c-c-c-c pad4 l1">
		<h1 class="bigger1" data-textify>Bṛhat is a</h1>
		<h1 class="smaller1 isred" data-textify>
			Culture Engine</h1>
		<h3 data-textify>
		To power creatives, research and design rooted
		in the Indian civilizational consciousness. We convert individual, institutional 
		and collective intent into action, across 3 dimensions:
		</h3>
		<div class="r-r-c-c l2" data-textify>
			<div class="c-c-c-c l2row1">
			<h5>Create</h5>
			<p>
				- visual and literary stories;
				- design thinking and methods;
				- research output on education and ecology;
				- culture-rooted thought models
			</p>
			</div>
			<div class="c-c-c-c l2row2">
			<h5>Curate</h5>
			<p>
				- heritage experience journeys;
				- culture-fit in mass media;
				- NEP-relevant IKS curriculum;
				- culture rooting in product design and thinking
			</p>
			</div>
			<div class="c-c-c-c l2row3">
			<h5>Consult</h5>
			<p>
			- NEP-IKS implementation;
			- policy thinking on education and ecology;
			- organizational structure and leadership frameworks
			</p>			
			</div>
		</div>
	</div>
	<div class="c-c-c-c l2">
		<MainH1>Latest Events</MainH1>
		{#await Videos()}
		<small>...</small>
		{:then data}
		<div class="r-r-r-r pad4 l3">
			{#each data as item}
				<div class="c-c-c-c vidbox">
					<iframe
  				class="m-1"
  					width=100%
  					height=100%
  					src="https://www.youtube.com/embed/{item.videoid}"
  					title={item.name}
  					></iframe>
				</div>
			{/each}
		</div>
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>
	<div class="c-c-c-c l4">
		<Dhiti>On Dhīti, our Blog</Dhiti>
		<div class="r-r-r-r pad4 l5" data-scroll-section></div>
	</div>
</div>



<style>


.l2 .c-c-c-c { border-top: 1px solid #474747;}
p { color: #474747;}

@media screen and (min-width: 900px) {
	.l1 { height: 100vh; justify-content: center;}
	.l2 { gap: 32px; padding-bottom: 2em; margin-top: 3em; margin-bottom: 64px; }
	.l2 h5 { padding-top: 12px;}
	.smaller1 { font-size: 96px; line-height: 1.2em; font-weight: 500;}	
	.bigger1 { font-size: 96px; margin-bottom: 0; font-weight: 500;}
	.l1 { padding-top: 63px;}
	.l3, .l5 { height: 80vh; flex-wrap: wrap; gap: 48px; align-items: center;}
	.vidbox { height: 240px; width: 30%;}

}

@media screen and (max-width: 899px) and (min-width: 768px) {
.l2 h5 { padding-top: 12px;}
.smaller1 { font-size: 120px; line-height: 1.2em; font-weight: 500;}	
.bigger1 { font-size: 120px; margin-bottom: 0; font-weight: 500;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.l2 { gap: 2em; padding-bottom: 16px; margin-top: 1em;}
	.l2 p { margin-bottom: 0;}
	.l2 h5 { padding-top: 8px;}

	h5 { font-size: 1.44em; padding-left: 4vw; padding-right: 4vw;}

}

@media screen and (max-width: 575px) {
	.l2 { gap: 2em; padding-bottom: 16px; margin-top: 1em;}
	.l2 p { margin-bottom: 0;}
	.l2 h5 { padding-top: 8px;}

	h5 { font-size: 1.44em;  padding-left: 4vw; padding-right: 4vw; }

}
</style>