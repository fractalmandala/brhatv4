<script lang="ts">
// @ts-nocheck
	
  import supabase from '$lib/db'
	import VideoSlate from '$lib/components/headers/StaticH1.svelte'
	import Shadba from '$lib/components/headers/StaticH1.svelte'


	let currentList = 'list-1';

	function switchList(newList: string) {
		currentList = newList;
	}

	async function HindiKavita () {
    const { data, error } = await supabase
    .from('brhat-youtube')
    .select()
    .eq('type','hindi')
    .order('sequence')
    if (error) throw new Error(error.message)
    return data
  }

	async function MrdangaVids () {
    const { data, error } = await supabase
    .from('brhat-youtube')
    .select()
    .eq('type','mrdanga')
    .order('sequence')
    if (error) throw new Error(error.message)
    return data
  }

	async function Shabdavali() {
    const { data, error } = await supabase
    .from('content-shabdavali')
    .select()
    .order('id')
    if (error) throw new Error(error.message)
    return data 
  }

</script>


<div class="flexbox-c full hero imgbox"></div>
<div class="flexbox-r full pad-y-t desk-margins">
	<div class="in-col wide60 top-gap left-cc">
		<p>
		Sanātana Dharma is a view of immanence. It sees the divine everywhere. The transcendent is the Ultimate Truth, the Supreme Consciousness. The view of immanence says that although nothing that we perceive is the Ultimate Truth, it is at the same time a form of the Ultimate. In this view of immanence a gradient of divinity is created in which individual consciousness is always encouraged to elevate itself and ultimately realize its true form as the Supreme Consciousness.
		</p>
		<p>
		What are these instruments of realization? In language it is Saṃskṛta and the mantras that lead us to the Ultimate. In sādhanā, it is meditation upon the Iṣṭa and the Mantra.
		</p>
		<p>
		In music, it is the instruments of music. And of all the musical instruments some are considered the most divine. And three of them, Bāṃsurī, Vīṇā and Mṛdaṅga are the most divine of all.
		</p>
		<p>
		Mṛdaṅga is the instrument which makes it possible for us mortals to tap into the divine music, capable of leading one to higher states of consciousness. The Nāṭyaśastra mentions the instrument at many places proving its antiquity in Indian cultural consciousness. It was famous across India and it is mentioned in Cilappatikāram. Bharatanāṭyam also traces its origin to Mṛdaṅga.
		</p>
		<p>
		As important to the mārga culture in Bhāratavarṣa as it is to desīya culture, it is an integral part of the Yakṣagāna performances in Karnataka and other states of India. The famous Koodalmanikyam Temple in Irinjalkuda, Kerala, dedicated to Lord Bharata holds a Mṛdaṅga Mela where young artists come to play the divine instrument. Similar will be the videos on this project.
		</p>
		<p>
		Like Mṛdaṅga they will tap into the eternal streams of beauty and reality in our culture and will voice them in contemporary idiom to convey the eternal truths of the eternal civilization to our contemporary times.
		</p>		
	</div>
	<div class="in-col wide40 top-gap right-cc">
		<h5 class="border-bot m-top-zero">
			Mṛdaṅga is one of the sacred trinity of musical instruments. It is a ‘Deva Vādyam’, the instrument which Nandi, the prime gaṇa of Śiva plays when he does his Tāṇḍava. Mṛdaṅga is capable of sounding the divine rhythm across the multiple planes of consciousness. It is so divine because the sound that it emanates is not just a human creation. It is a tapping into the divine sound which is always playing but not accessible to our senses normally.
		</h5>
	</div>
</div>
<VideoSlate>
	<div slot="header">Bṛhadmṛdaṅga <span class="red">Visuals</span></div>
	<div slot="body" class="flexbox-c l0 desk-margins">
		<div class="in-row">
			<h5 class="w500" on:click={() => switchList('list-1')} on:keydown={() => switchList('list-1')}>Rasa <span class="widen"> | </span></h5>
			<h5 class="w500" on:click={() => switchList('list-2')} on:keydown={() => switchList('list-2')}>Kavitā <span class="widen"> | </span></h5>
		</div>
		<div class="flexbox-c pad-y-b">
			{#if currentList === 'list-1'}
			<div class="flexbox-r wrapper of-four">
								{#await HindiKavita()}
				<small>...</small>
				{:then data}
				{#each data as item}
				<div class="in-col wide25 vidbox">
					<iframe
  					class="m-bot-16"
  					width=100%
  					height=80%
  					src="https://www.youtube.com/embed/{item.videoid}"
  					title={item.name}
  				>
					</iframe>
					<p class="wbold">{item.name}</p>
				</div>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
			{:else if currentList === 'list-2'}
			<div class="flexbox-r wrapper of-four">
				{#await MrdangaVids()}
				<small>...</small>
				{:then data}
				{#each data as item}
				<div class="in-col wide25 vidbox">
					<iframe
  					class="m-bot-16"
  					width=100%
  					height=80%
  					src="https://www.youtube.com/embed/{item.videoid}"
  					title={item.name}
  				>
					</iframe>
					<p class="wbold">{item.name}</p>
				</div>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
			{/if}
		</div>
	</div>
</VideoSlate>
<Shadba>
	<div slot="header">Śabdāvalī - the 64 Kalās</div>
	<div class="flexbox-c desk-margins pad-y-b" slot="body">
				{#await Shabdavali()}
				<small>...</small>
				{:then data}
				<div class="in-row wrapper of-four">
					{#each data as item}
					<div class="in-col wide25 shabdavali">
						<video src={item.fileid} poster={item.imagelink} controls={true}><track kind="captions"></video>
					</div>
					{/each}
				</div>
				{:catch error}
				<pre>{error}</pre>
				{/await}
	</div>
</Shadba>


<style>
.hero {
	background-image: url('/images/herocovers/mrdanga-hero.webp');
}
.in-row h5 {
	cursor: pointer;
}

@media screen and (min-width: 900px) {
	.widen { padding: 0 24px;}
 .in-row h5:hover { color: #fe4a49;}
	.l0 .in-row { border-bottom: 1px solid #e1e1e1; margin-bottom: 32px;}
	.l0 .in-row h5 { margin-bottom: 24px;}

}

@media screen and (max-width: 899px) and (min-width: 768px) {

}

@media screen and (max-width: 767px) and (min-width: 576px) {

}

@media screen and (max-width: 575px) {
 .hero { height: 40vh; margin-top: 64px;}
	.wide60 { padding-right: 0; padding-left: 0;}
	
}
</style>