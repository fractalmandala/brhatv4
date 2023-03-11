<script lang="ts">
import supabase from '$lib/db';
import Accordion from '$lib/components/pagecomps/HomeAccordion.svelte';
let y:number = 1;
let ih: number
let oh: number
let ow: number
let currentList = 'list-1';

function switchList(newList: string) {
	currentList = newList;
}

export async function updateOne(){
	const { data, error } = await supabase
	.from('brhat-updates')
	.select()
	.limit(3)
  if (error) throw new Error(error.message)
	return data
}

async function dhiti() {
	const { data, error } = await supabase
		.from('brhat-dhiti')
		.select()
		.order('id', { ascending: false })
		.limit(6);
	if (error) throw new Error(error.message);
	return data;
}

export const Latest = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver()
			const postPath = path.slice(11,-3)

			return {
				meta: metadata,
				path: postPath,
			}
		})
	)

	// Sort the posts in descending order by date
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

// Return only the first 4 items
	return allPosts.slice(0, 6)

}

async function getBooks() {
	const { data, error } = await supabase
		.from('brhat-openlibrary')
		.select()
		.order('Sno', { ascending: false })
		.limit(15);
	if (error) throw new Error(error.message);
	return data;
}

async function getMrdanga() {
  const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
	.eq('type','mrdanga')
  .order('id',{ascending: false})
  .limit(4)
  if (error) throw new Error(error.message)
  return data
}

async function getKavita() {
  const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
	.eq('type','hindi')
  .order('id',{ascending: false})
  .limit(4)
  if (error) throw new Error(error.message)
  return data
}

async function getIKS() {
  const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
	.eq('type','iks')
  .order('id',{ascending: false})
  .limit(4)
  if (error) throw new Error(error.message)
  return data
}

async function getOther() {
  const { data, error } = await supabase
  .from('brhat-youtube')
  .select()
	.eq('type','sangam')
  .order('id',{ascending: false})
  .limit(4)
  if (error) throw new Error(error.message)
  return data
}
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={ih} bind:outerHeight={oh} bind:outerWidth={ow}/>


<Accordion />

<div class="pad-a">

	<div class="section-pads ishfull100 container-11">
  	<div class="header">
		<h1>Bṛhat is a <br><span class="soft">Culture Engine</span></h1>
		</div>
  	<div class="para">
			<h6 class="wide75">
				To power creatives, research and design rooted in the Indian civilizational consciousness. We
				convert individual, institutional and collective intent into action, across 3 dimensions.
			</h6>
		</div>
  	<div class="cols4">
			<div class="ww1 card">
				<h6 class="strong">
					Civilization is Culture in Action
				</h6>
				<p class="w400 grey">
					The civilizational moment needs rooting in Dharma - of this there is no doubt. Thus a core part of our work is culture creatives that draw from the deep pool of Dhārmika heritage.
				</p>
			</div>
			<div class="ww1 card">
				<h6 class="strong">
					It Needs Culture-Compatible Policy
				</h6>
				<p class="w400 grey">
					Radical reorientations are needed in education and ecology. To this end, our focus will be on generating policy currency for culture through frameworks, curriculum and more.
				</p>
			</div>
			<div class="ww1 card">
				<h6 class="strong">
					The Work is Inter-Generational
				</h6>
				<p class="w400 grey">
					It needs leadership with cultural-cognition to carry the Agni. This cognition needs to permeate even brand and organisation - essential quarters for the overton window shift.
				</p>
			</div>
			<div class="ww1 endcol">
				<button class="mainbutton"><a href="/about">Know More</a></button>
			</div>
		</div>
	</div>

	<div class="section-pads container-22">
  <div class="header-2 the-title">
		<h2>What's <span class="soft">New </span></h2>
	</div>
  <div class="cols-3">	
		{#await updateOne()}
			<small>.</small>
			{:then data}
				{#each data as item}
					<div class="boxc-r3 card soft">
						<img src={item.image} alt={item.sequence} />
						<div class="boxc">
							<h6>{item.heading}</h6>
							<p>{item.text.slice(0,200)}</p>
							<button class="cardbutton"><a href={item.link} target="_blank" rel="noreferrer">{item.buttontext}</a></button>
						</div>
					</div>
				{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
	</div>
	</div>

	<div class="section-pads ishfull100 container-33">
  <div class="header-3 the-title">
		<h2>Explore <span class="red"> Visual Content</span></h2>
	</div>
  <div class="para-1">
		<h6 class="wide75">
				Our visual content ranges from explorations of rasa and bhāva, to articulations of an
				IKS-implementation strategy for modern India. Select playlists below, or visit our <a
					href="https://youtube.com/@brhat"
					target="_blank"
					class="red"
					rel="noreferrer">YouTube channel</a
				>
			</h6>
			<button class="mainbutton">
				<select on:change={(event) => switchList(event?.target?.value ?? 'list-1')}>
				<option class="w500" value="list-1" on:click={() => switchList('list-1')} on:keydown={() => switchList('list-1')}>Bṛhadmṛdaṅga</option>
				<option class="w500" value="list-2" on:click={() => switchList('list-2')} on:keydown={() => switchList('list-2')}>Hindi Kavitā</option>
				<option class="w500" value="list-3" on:click={() => switchList('list-3')} on:keydown={() => switchList('list-3')}>IKS</option>
				<option class="w500" value="list-4" on:click={() => switchList('list-4')} on:keydown={() => switchList('list-4')}>Others</option>
			</select></button>
	</div>
  <div class="cols-4-2">
			{#if currentList === 'list-1'}
				{#await getMrdanga()}
				<small>...</small>
				{:then data}
				{#each data as item}
				<div class="box-video card">
					<iframe
					class="m-1"
					width=100%
					height=80%
					src="https://www.youtube.com/embed/{item.videoid}"
					title={item.name}
					>
					</iframe>
					<p><a href="https://www.youtube.com/watch?v={item.videoid}" target="_blank" rel="noreferrer">{@html item.name}</a></p>
				</div>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			{:else if currentList === 'list-2'}
				{#await getKavita()}
				<small>...</small>
				{:then data}
				{#each data as item}
				<div class="box-video card">
					<iframe
					class="m-1"
					width=100%
					height=80%
					src="https://www.youtube.com/embed/{item.videoid}"
					title={item.name}
					>
					</iframe>
					<p><a href="https://www.youtube.com/watch?v={item.videoid}" target="_blank" rel="noreferrer">{@html item.name}</a></p>
				</div>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}					
			{:else if currentList === 'list-3'}
				{#await getIKS()}
				<small>...</small>
				{:then data}
				{#each data as item}
				<div class="box-video card">
					<iframe
					class="m-1"
					width=100%
					height=80%
					src="https://www.youtube.com/embed/{item.videoid}"
					title={item.name}
					>
					</iframe>
					<p><a href="https://www.youtube.com/watch?v={item.videoid}" target="_blank" rel="noreferrer">{@html item.name}</a></p>
				</div>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			{:else if currentList === 'list-4'}
				{#await getOther()}
				<small>...</small>
				{:then data}
				{#each data as item}
				<div class="box-video card">
					<iframe
					class="m-1"
					width=100%
					height=80%
					src="https://www.youtube.com/embed/{item.videoid}"
					title={item.name}
					>
					</iframe>
					<p><a href="https://www.youtube.com/watch?v={item.videoid}" target="_blank" rel="noreferrer">{@html item.name}</a></p>
				</div>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			{/if}		
	</div>
	</div>

	<div class="section-pads container-44">
  <div class="header-4 the-title">
			<h2>Essays at <span class="soft"> Dhīti</span></h2>
	</div>
  <div class="cols-6">
			{#await Latest()}
			<small>...</small>
			{:then data}
				{#each data as item}
					<div class="boxc card">
					<img class="latestimage" src={item.meta.image} alt={item.meta.title}/>
					<h5><a href={item.path}>{item.meta.title}</a></h5>
					<p>{item.meta.author}</p>
					<div class="boxr latestrow">
						<cite>{item.meta.category}</cite>
						<cite>{item.meta.tags}</cite>
					</div>
				</div>
				{/each}
			{/await}
	</div>
	</div>

	<div class="section-pads container-55">
  <div class="the-title header-5">
		<h2>Bṛhat <span class="soft"> Open</span> Library</h2>
	</div>
  <div class="cols-15">
			{#await getBooks()}
			<small>...</small>
			{:then data}
					{#each data as item, i}
						<div
							class="ww1 book card">
							<h6><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
							<p>{item.author}</p>
						</div>
					{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}	
	</div>
	</div>
</div>


<style lang="sass">

.header 
	align-items: center 
.para 
	align-items: center 
.container-55 
	padding-bottom: 64px 

.container-22
	.boxc-r3
		height: 100%
		.boxc 
			align-items: flex-start 
			justify-content: space-between
			height: 100%

.cols-15
	.book
		h6, p
			margin: 0

.cols-6
	.card
		h5
			font-size: 1.28rem
			padding-left: 0
		p, cite
			margin: 0
		p
			padding-top: 8px

.latestrow
	gap: 16px

@media screen and (max-width: 899px) and (min-width: 576px) 
	.container-22
		.cols-3
			.boxc-r3 img
				object-fit: cover 
				width: 216px 
				height: 216px 
		.cols-3 
			.boxc-r3 
				gap: 32px 
				text-align: left 
			.boxc 
				align-items: flex-start 
				justify-content: space-between
				.cardbutton 
					width: 40% 
					margin-right: 60% 


</style>