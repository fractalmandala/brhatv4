<script lang="ts">
// @ts-nocheck
	
  import supabase from '$lib/db'


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


<div class="boxc back-image x0"></div>
<div class="pad-a">
	<div class="traybox wrap">
		<div class="ww2 card">
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
		<div class="ww2">
			<h6>
				Mṛdaṅga is one of the sacred trinity of musical instruments. It is a ‘Deva Vādyam’, the instrument which Nandi, the prime gaṇa of Śiva plays when he does his Tāṇḍava. Mṛdaṅga is capable of sounding the divine rhythm across the multiple planes of consciousness. It is so divine because the sound that it emanates is not just a human creation.</h6>
			<h5 class="mrd">
			It is a tapping into the divine sound which is always playing but not accessible to our senses normally.
			</h5>
		</div>
	</div>
	<div class="the-title y-full">
		<h2>
			Bṛhadmṛdaṅga Visuals
		</h2>
		<div class="boxr x5">
			<button class="mrdbutton" on:click={() => switchList('list-1')} on:keydown={() => switchList('list-1')}>Rasa</button>
			<button class="mrdbutton" on:click={() => switchList('list-2')} on:keydown={() => switchList('list-2')}>Kavitā</button>
		</div>
		{#if currentList === 'list-1'}
			<div class="traybox allwrap x2">
				{#await HindiKavita()}
					<small>...</small>
						{:then data}
							{#each data as item}
								<div class="ww4 card">
									<iframe
  							class="m-bot-16"
  							width=100%
  							height=80%
  							src="https://www.youtube.com/embed/{item.videoid}"
  							title={item.name}
  								>
								</iframe>
								<small>{item.name}</small>
								</div>
							{/each}
						{:catch error}
					<pre>{error}</pre>
				{/await}	
			</div>
		{:else if currentList === 'list-2'}
			<div class="traybox allwrap x9">
				{#await MrdangaVids()}
				<small>...</small>
				{:then data}
					{#each data as item}
					<div class="ww4 card">
						<iframe
  						class="m-bot-16"
  						width=100%
  						height=80%
  						src="https://www.youtube.com/embed/{item.videoid}"
  						title={item.name}
  					>
						</iframe>
						<small>{item.name}</small>
					</div>
					{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
		{/if}		
	</div>

	<div class="the-title y-full">
		<h2>
			Śabdāvalī - the 64 Kalās
		</h2>
		<div class="traybox allwrap">
			{#await Shabdavali()}
			<small>...</small>
			{:then data}
				{#each data as item}
				<div class="ww52 card">
					<video src={item.fileid} poster={item.imagelink} controls={true}><track kind="captions"></video>
				</div>
				{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>
	</div>
	
</div>

<style>

.x0 {
	background-image: url('/images/herocovers/mrdanga-hero.webp');
}
	.x0 { height: 100vh;}

@media screen and (min-width: 900px) {

	.x5 {
		padding-left: 24px;
		gap: 32px;
	}


}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.x5 {
		padding-left: 24px;
		gap: 32px;
	}

}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.x5 {
		gap: 32px;
		padding-top: 0;
		margin-top: 0;
		margin-bottom: 24px;
	}
}

@media screen and (max-width: 575px) {
	.x5 {
		gap: 32px;
		margin-bottom: 16px;
	}

	
}
</style>