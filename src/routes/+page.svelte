<script lang="ts">
import supabase from '$lib/db'
import Header from '$lib/components/globals/Header2023.svelte'
import Accordion from '$lib/components/pagecomps/HomeAccordion.svelte'
import StaticH1 from '$lib/components/headers/StaticH1.svelte'
import Dhiti from '$lib/components/headers/StaticH1.svelte'

async function Videos() {
  const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
  .order('id',{ascending: false})
  .limit(6)
  if (error) throw new Error(error.message)
  return data
}

async function dhiti() {
  const { data, error } = await supabase
  .from('brhat-dhiti')
  .select()
  .order('id',{ascending: false})
  .limit(6)
  if (error) throw new Error(error.message)
  return data
}

</script>

<Header></Header>
	<div class="c-c-c-c pad4 l0">
		<Accordion></Accordion>
	</div>
	<div class="c-c-c-c pad4 lzz">
		<h1 class="bigger1" data-textify>Bṛhat is a</h1>
		<h1 class="smaller1 isred" data-textify-title>
		Culture Engine</h1>
		<h3 data-textify>
			To power creatives, research and design rooted
			in the Indian civilizational consciousness. We convert individual, institutional 
			and collective intent into action, across 3 dimensions:
		</h3>
		<div class="r-r-c-c l2">
			<div class="c-c-c-c l2row1">
				<h5 data-textify-title>Create</h5>
				<p data-textify>
				- visual and literary stories;
				- design thinking and methods;
				- research output on education and ecology;
				- culture-rooted thought models
				</p>
			</div>
			<div class="c-c-c-c l2row2">
				<h5 data-textify-title>Curate</h5>
				<p data-textify>
				- heritage experience journeys;
				- culture-fit in mass media;
				- NEP-relevant IKS curriculum;
				- culture rooting in product design and thinking
				</p>
			</div>
			<div class="c-c-c-c l2row3">
				<h5 data-textify-title>Consult</h5>
					<p data-textify>
						- NEP-IKS implementation;
						- policy thinking on education and ecology;
						- organizational structure and leadership frameworks
					</p>			
			</div>
		</div>
	</div>
	<StaticH1>
		<div slot="header">Latest Events</div>
		<div slot="body">
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
	</StaticH1>
	<Dhiti>
		<div slot="header">Essays on Dhīti</div>
			<div slot="body">
				{#await dhiti()}
				<small>...</small>
				{:then data}
				<div class="r-r-r-r pad4 l5">
					{#each data as item}
					<div class="c-c-c-c dhitibox">
						<img src={item.image} alt={item.title} />
						<h5><a href={item.link}>{item.title}</a></h5>
						<p>{item.excerpt.slice(0,200)}</p>
					</div>
					{/each}
				</div>
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>
	</Dhiti>


<style>
.l0, .lzz, .l2, .l3, .l5 { background: white;}
.dhitibox img { object-fit: cover; width: 100%;}
.l2 .c-c-c-c { border-top: 1px solid #474747;}
p { color: #474747;}

@media screen and (min-width: 900px) {
	.l0 { height: 100vh; padding-top: 88px; padding-bottom: 32px; justify-content: flex-end;}
	.lzz { height: 100vh; justify-content: center;}
	.l2 { gap: 48px; padding-bottom: 4em; padding-top: 3em; }
	.l2 h5 { padding-top: 12px;}
	.l2 .c-c-c-c { width: calc(33% - 32px);}
	.smaller1 { font-size: 96px; line-height: 1.2em; font-weight: 500;}	
	.bigger1 { font-size: 96px; margin-bottom: 0; font-weight: 500;}
	.l3 { height: 100%; flex-wrap: wrap; gap: 48px; align-items: center;}
	.vidbox { height: 240px; width: calc(33% - 32px);}
	.dhitibox { width: calc(33% - 32px);}
	.l5 { gap: 48px; flex-wrap: wrap;}
	.dhitibox h5 { margin-top: 12px; margin-bottom: 8px; font-size: 20px;}
	.dhitibox h5 a { color: #272727;}
	.dhitibox a:hover { color: #fe4a49;}
	.dhitibox p { font-size: 14px;}
	.dhitibox img { height: 160px;}

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
	h5 { padding-left: 4vw; padding-right: 4vw;}

}

@media screen and (max-width: 575px) {
	.l2 { gap: 2em; padding-bottom: 16px; margin-top: 1em;}
	.l2 p { margin-bottom: 0;}
	.l2 h5 { padding-top: 8px;}
	h5 { padding-left: 4vw; padding-right: 4vw; }
}
</style>