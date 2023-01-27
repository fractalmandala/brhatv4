<script>
// @ts-nocheck

  import supabase from '$lib/db'
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { Keyboard, Navigation} from 'swiper'
  import 'swiper/css'
  import 'swiper/css/keyboard'
  import 'swiper/css/navigation';

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

<div class="imagecontainer-hero"></div>
<div class="sc-pad-row">
	<div class="pad-col w50 tx-pad">
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
	<div class="pad-col w50 tx-pad">
		<h4>
			Mṛdaṅga is one of the sacred trinity of musical instruments. It is a ‘Deva Vādyam’, the instrument which Nandi, the prime gaṇa of Śiva plays when he does his Tāṇḍava. Mṛdaṅga is capable of sounding the divine rhythm across the multiple planes of consciousness. It is so divine because the sound that it emanates is not just a human creation. It is a tapping into the divine sound which is always playing but not accessible to our senses normally.
		</h4>
	</div>
</div>
<div class="sc-pad">
	<h4 class="titleclass">
		Bṛhadmṛdaṅga Videos
	</h4>
	{#await MrdangaVids()}
  <small>Loading...</small>
  {:then data}
	<Swiper
    modules={[Navigation, Keyboard ]}
    keyboard={true}
		centeredSlides={true}
    loop={true}
    slidesPerView={1}
		breakpoints={{
    "576": {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    "768": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "900": {
      slidesPerView: 5,
      spaceBetween: 32,
    },
  	}}
    navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
    on:slideChange={() => console.log('slide change')}
  >
  {#each data as item}
		<SwiperSlide>
			<div class="pad-col vid-box">
				<iframe width="100%" height="80%" src="https://www.youtube.com/embed/{item.videoid}" title={item.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				<p>{item.name}</p>
			</div>
		</SwiperSlide>
	{/each}
	</Swiper>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>
<div class="sc-pad">
	<h4 class="hindi titleclass">
		हिन्दी कविता 
	</h4>
	{#await HindiKavita()}
	<small>Loading...</small>
	{:then data}
	<Swiper
    modules={[Navigation, Keyboard ]}
    keyboard={true}
		centeredSlides={true}
    loop={true}
    slidesPerView={1}
		breakpoints={{
    "576": {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    "768": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "900": {
      slidesPerView: 5,
      spaceBetween: 32,
    },
  	}}
    navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
    on:slideChange={() => console.log('slide change')}
  >
	{#each data as item}
	<SwiperSlide>
		<div class="pad-col vid-box">
			<iframe width="100%" height="80%" src="https://www.youtube.com/embed/{item.videoid}" title={item.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			<p>{item.name}</p>
		</div>
	</SwiperSlide>
	{/each}
	</Swiper>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>
<div class="sc-pad">
	<h4 class="titleclass">Śabdāvalī</h4>
	{#await Shabdavali()}
	<small>Loading...</small>
	{:then data}
	<div class="sc-in-row shabdavali-row">
		{#each data as item}
		<div class="pad-col shabdavali">
			<video src={item.fileid} poster={item.imagelink} controls={true}><track kind="captions"></video>
		</div>
		{/each}
	</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>
<style>
.imagecontainer-hero {
	background-image: url('/images/herocovers/mrdanga-hero.webp');
}
.sc-pad h4 { text-align: center;}
.vid-box p { text-align: center;}
.shabdavali video { object-fit: contain; width: 100%;}

@media screen and (min-width: 900px) {
	.vid-box { height: 160px;}
	.shabdavali-row { flex-wrap: wrap; gap: 32px; justify-content: space-between;}
	.shabdavali { width: calc(20% - 32px);}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.vid-box { height: 160px; }
	.shabdavali-row { flex-wrap: wrap; gap: 32px; justify-content: center;}
	.shabdavali { width: calc(24% - 32px);}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.vid-box { height: 200px; width: 100%;}
	.shabdavali-row { flex-wrap: wrap; gap: 24px; justify-content: center;}
	.shabdavali { width: calc(33% - 24px);}	
}

@media screen and (max-width: 575px) {
	.vid-box { height: 200px; width: 88%;}
	.shabdavali-row { flex-wrap: wrap; gap: 32px; justify-content: center;}
	.shabdavali { width: calc(50% - 32px);}		
}
</style>