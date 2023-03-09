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
	<div class="container1 section-pads">
  	<div class="lefttext">
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
  	<div class="righttext">
			<h6>
				Mṛdaṅga is one of the sacred trinity of musical instruments. It is a ‘Deva Vādyam’, the instrument which Nandi, the prime gaṇa of Śiva plays when he does his Tāṇḍava. Mṛdaṅga is capable of sounding the divine rhythm across the multiple planes of consciousness. It is so divine because the sound that it emanates is not just a human creation.</h6>
			<h5 class="mrd">
			It is a tapping into the divine sound which is always playing but not accessible to our senses normally.
			</h5>
		</div>
	</div>
	<div class="container2 section-pads">
  	<div class="header2 the-title">
			<h2>
				Bṛhadmṛdaṅga Visuals
			</h2>
		</div>
  	<div class="buttons2">
			<button class="mrdbutton" on:click={() => switchList('list-2')} on:keydown={() => switchList('list-2')}>Rasa</button>
			<button class="mrdbutton" on:click={() => switchList('list-1')} on:keydown={() => switchList('list-1')}>Kavitā</button>
		</div>
  	<div class="videogrid2">
			{#if currentList === 'list-1'}
				{#await HindiKavita()}
					<small>...</small>
					{:then data}
					{#each data as item}
						<div class="videocont">
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
			{:else if currentList === 'list-2'}
				{#await MrdangaVids()}
				<small>...</small>
				{:then data}
				{#each data as item}
					<div class="videocont">
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
			{/if}
		</div>
	</div>
	<div class="container3 section-pads">
  	<div class="header3 the-title">
			<h2>Śabdāvalī - the 64 Kalās</h2>
		</div>
  	<div class="shabdagrid">
			{#await Shabdavali()}
			<small>...</small>
			{:then data}
				{#each data as item}
				<div class="shabdabox">
					<video src={item.fileid} poster={item.imagelink} controls={true}><track kind="captions"></video>
				</div>
				{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>
	</div>
</div>



<style lang="sass">

.pad-a
	padding-bottom: 64px

.x0
	background-image: url('/images/herocovers/mrdanga-hero.webp')
	height: 100vh

.container1 
	display: grid 
	grid-template-columns: 1fr 1fr 
	grid-template-rows: 1fr 
	gap: 0px 64px 
	grid-auto-flow: row 
	grid-template-areas: "lefttext righttext" 
.lefttext 
	grid-area: lefttext
	p
		font-size: 0.875rem
		color: #878787
		text-align: justify
.righttext 
	grid-area: righttext 

.container2 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto auto 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "header2" "buttons2" "videogrid2" 
.header2 
	grid-area: header2 
	h2
		margin-bottom: 0
.buttons2 
	display: grid 
	grid-template-columns: auto auto
	grid-template-rows: auto 
	gap: 0px 32px 
	grid-auto-flow: row 
	justify-content: start 
	grid-template-areas: ". ." 
	grid-area: buttons2 
.videogrid2 
	display: grid 
	grid-template-columns: 1fr 1fr 1fr 1fr 
	grid-template-rows: 1fr 1fr 
	gap: 0px 32px 
	grid-auto-flow: row 
	grid-template-areas: ". . . ." ". . . ." 
	grid-area: videogrid2
	.videocont small
		line-height: 1
		margin: 0
		font-size: 12px
		background: var(--mrd)
		color: white
		text-transform: uppercase
		padding: 2px

.container3 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto auto 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "header3" "shabdagrid" 
.header3 
	grid-area: header3 
.shabdagrid 
	display: grid 
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 
	grid-template-rows: auto auto auto auto auto auto auto auto auto 
	gap: 32px 32px 
	grid-auto-flow: row 
	grid-template-areas: ". . . . ." ". . . . ." ". . . . ." ". . . . ." ". . . . ." ". . . . ." ". . . . ." ". . . . ." ". . . . ." 
	grid-area: shabdagrid 

.shabdabox
	video
		object-fit: cover
		width: 100%

@media screen and (max-width: 991px) and (min-width: 576px)
	.container1
		grid-template-columns: 1fr
		grid-template-rows: auto auto 
		gap: 24px 0px
		grid-template-areas: "lefttext" "righttext" 
	.videogrid2 
		display: grid 
		grid-template-columns: 1fr 1fr 1fr
		grid-template-rows: auto auto auto auto 
		gap: 8px 24px 
		grid-auto-flow: row 
		grid-template-areas: ". . ." ". . ." ". . ." ". . ."
		grid-area: videogrid2
		margin-top: 24px
	.shabdagrid 
		display: grid 
		grid-template-columns: 1fr 1fr 1fr 1fr
		grid-template-rows: auto auto auto auto auto auto auto auto auto auto auto auto
		gap: 24px 24px 
		grid-auto-flow: row 
		grid-template-areas: ". . . ." ". . . ." ". . . ." ". . . ." ". . . ." ". . . ." ". . . ." ". . . ." ". . . ." ". . . ." ". . . ." ". . . ."
		grid-area: shabdagrid 

@media screen and (max-width: 575px)
	.container1
		grid-template-columns: 1fr
		grid-template-rows: auto auto 
		gap: 24px 0px
		grid-template-areas: "lefttext" "righttext" 
	.videogrid2 
		display: grid 
		grid-template-columns: 1fr 1fr
		grid-template-rows: auto auto auto auto 
		gap: 8px 24px 
		grid-auto-flow: row 
		grid-template-areas: ". ." ". ." ". ." ". ."
		grid-area: videogrid2
		margin-top: 24px
	.shabdagrid 
		display: grid 
		grid-template-columns: 1fr 1fr 1fr
		grid-template-rows: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto
		gap: 24px 24px 
		grid-auto-flow: row 
		grid-template-areas: ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ."
		grid-area: shabdagrid 
		

</style>