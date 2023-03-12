<script lang="ts">
import supabase from '$lib/db';
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'
import Accordion from '$lib/components/pagecomps/HomeAccordion.svelte';
import MainButton1 from '$lib/components/animations/MainButton.svelte'
import MainButton2 from '$lib/components/animations/MainButton.svelte'
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
	// @ts-ignore
	allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
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

	<div class="section-pads container-11">
  	<div class="header">
		<h1>Bṛhat is a <br><span class="red">Culture Engine</span></h1>
		</div>
  	<div class="para">
			<h5 class="wide75">
				To power creatives, research and design rooted in the Indian civilizational consciousness. We
				convert individual, institutional and collective intent into action, across 3 dimensions.
			</h5>
		</div>
  	<div class="cols4">
			<div class="ww1">
				<h6 class="red">
					Civilization is Culture in Action
				</h6>
				<p class="grey">
					The civilizational moment needs rooting in Dharma - of this there is no doubt. Thus a core part of our work is culture creatives that draw from the deep pool of Dhārmika heritage.
				</p>
			</div>
			<div class="ww1">
				<h6 class="red">
					It Needs Culture-Compatible Policy
				</h6>
				<p class="grey">
					Radical reorientations are needed in education and ecology. To this end, our focus will be on generating policy currency for culture through frameworks, curriculum and more.
				</p>
			</div>
			<div class="ww1">
				<h6 class="red">
					The Work is Inter-Generational
				</h6>
				<p class="grey">
					It needs leadership with cultural-cognition to carry the Agni. This cognition needs to permeate even brand and organisation - essential quarters for the overton window shift.
				</p>
			</div>
			<div class="ww1 endcol">
				<MainButton1><a href="/about">Know More</a></MainButton1>
			</div>
		</div>
	</div>

	<div class="section-pads container-22">
  <div class="header-2 the-title">
		<h2>What's <span class="red">New </span></h2>
	</div>
  <div class="cols-3">	
		{#await updateOne()}
			<small>.</small>
			{:then data}
				{#each data as item}
					<div class="boxc-r3 imfit pad-on-card">
						<img src={item.image} alt={item.sequence} />
						<div class="boxc">
							<h6>{item.heading}</h6>
							<p class="grey">{item.text.slice(0,200)}...</p>
							<MainButton2><a href={item.link} target="_blank" rel="noreferrer">{item.buttontext}</a></MainButton2>
						</div>
					</div>
				{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
	</div>
	</div>

	<div class="section-pads container-33">
  	<div class="header-3 the-title">
			<h2>Explore <span class="red"> Visual Content</span></h2>
		</div>
  	<div class="para-1">
		<h5 class="wide75">
				Our visual content ranges from explorations of rasa and bhāva, to articulations of an
				IKS-implementation strategy for modern India. Select playlists below, or visit our <a
					href="https://youtube.com/@brhat"
					target="_blank"
					class="red"
					rel="noreferrer">YouTube channel</a
				>
			</h5>
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
				<Swiper
					modules={[Keyboard, Navigation]}
					keyboard={true}
  				loop={true}
  				slidesPerView={1}
					breakpoints={{
    			"576": {
    				slidesPerView: 1,
    				spaceBetween: 32,
    			},
    			"768": {
    				slidesPerView: 2,
    				spaceBetween: 24,
    			},
    			"1024": {
    				slidesPerView: 2,
    				spaceBetween: 32,
    			},
  				}}
					navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
					on:slideChange={() => console.log('slide change')}
					>
					{#each data as item}
					<SwiperSlide>
						<div class="box-video">
						<iframe
						class="m-1"
						width=100%
						height=80%
						src="https://www.youtube.com/embed/{item.videoid}"
						title={item.name}
						>
						</iframe>
						<p class="strong"><a href="https://www.youtube.com/watch?v={item.videoid}" target="_blank" rel="noreferrer">{@html item.name}</a></p>
						</div>
					</SwiperSlide>
					{/each}
				</Swiper>
				<div class="boxr videonavigation">
					<div class="custom-prev">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path id="prev" d="M16.9904 20.6465L16.637 21L16.9904 21.3535L24.0571 28.4222C24.3286 28.7048 24.4788 29.0825 24.4754 29.4745C24.4719 29.8678 24.3142 30.244 24.0361 30.5221C23.758 30.8002 23.3818 30.9579 22.9885 30.9614C22.5965 30.9648 22.2189 30.8146 21.9363 30.5432L13.4536 22.0605C13.4536 22.0605 13.4536 22.0605 13.4536 22.0604C13.1724 21.7792 13.0144 21.3977 13.0144 21C13.0144 20.6023 13.1724 20.2208 13.4536 19.9396C13.4536 19.9395 13.4536 19.9395 13.4536 19.9395L21.9396 11.4536L21.9396 11.4536L21.9456 11.4474C22.084 11.3041 22.2495 11.1898 22.4325 11.1112C22.6155 11.0326 22.8124 10.9912 23.0115 10.9895C23.2107 10.9877 23.4082 11.0257 23.5926 11.1011C23.7769 11.1765 23.9444 11.2879 24.0852 11.4288C24.2261 11.5696 24.3375 11.7371 24.4129 11.9214C24.4883 12.1058 24.5263 12.3033 24.5245 12.5025C24.5228 12.7016 24.4814 12.8985 24.4028 13.0815C24.3242 13.2645 24.2099 13.43 24.0666 13.5684L24.0666 13.5683L24.0604 13.5745L16.9904 20.6465ZM0.5 21C0.5 32.3221 9.67786 41.5 21 41.5C32.3221 41.5 41.5 32.3221 41.5 21C41.5 9.67786 32.3221 0.5 21 0.5C9.67786 0.5 0.5 9.67786 0.5 21Z" fill="white" stroke="#474747"/>
						</svg>
					</div>
					<div class="custom-next">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path id="next" d="M25.0096 21.3535L25.363 21L25.0096 20.6465L17.9429 13.5778C17.6714 13.2952 17.5212 12.9175 17.5246 12.5255C17.5281 12.1322 17.6858 11.756 17.9639 11.4779C18.242 11.1998 18.6182 11.0421 19.0115 11.0386C19.4035 11.0352 19.7811 11.1854 20.0637 11.4568L28.5464 19.9395C28.5464 19.9395 28.5464 19.9395 28.5464 19.9396C28.8276 20.2208 28.9856 20.6023 28.9856 21C28.9856 21.3977 28.8276 21.7792 28.5464 22.0604C28.5464 22.0605 28.5464 22.0605 28.5464 22.0605L20.0637 30.5432C19.7811 30.8146 19.4035 30.9648 19.0115 30.9614C18.6182 30.9579 18.242 30.8002 17.9639 30.5221C17.6858 30.244 17.5281 29.8678 17.5246 29.4745C17.5212 29.0825 17.6714 28.7048 17.9429 28.4222L25.0096 21.3535ZM0.5 21C0.5 32.3221 9.67786 41.5 21 41.5C32.3221 41.5 41.5 32.3221 41.5 21C41.5 9.67786 32.3221 0.5 21 0.5C9.67786 0.5 0.5 9.67786 0.5 21Z" fill="white" stroke="#474747"/>
						</svg>
					</div>
				</div>
				{:catch error}
				<pre>{error}</pre>
				{/await}
			{:else if currentList === 'list-2'}
				{#await getKavita()}
				<small>...</small>
				{:then data}
				<Swiper
					modules={[Keyboard, Navigation]}
					keyboard={true}
  				loop={true}
  				slidesPerView={1}
					breakpoints={{
    			"576": {
    				slidesPerView: 1,
    				spaceBetween: 32,
    			},
    			"768": {
    				slidesPerView: 2,
    				spaceBetween: 24,
    			},
    			"1024": {
    				slidesPerView: 2,
    				spaceBetween: 32,
    			},
  				}}
					navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
					on:slideChange={() => console.log('slide change')}
					>
					{#each data as item}
					<SwiperSlide>
						<div class="box-video">
						<iframe
						class="m-1"
						width=100%
						height=80%
						src="https://www.youtube.com/embed/{item.videoid}"
						title={item.name}
						>
						</iframe>
						<p class="strong"><a href="https://www.youtube.com/watch?v={item.videoid}" target="_blank" rel="noreferrer">{@html item.name}</a></p>
						</div>
					</SwiperSlide>
					{/each}
				</Swiper>
				<div class="boxr videonavigation">
					<div class="custom-prev">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path id="prev" d="M16.9904 20.6465L16.637 21L16.9904 21.3535L24.0571 28.4222C24.3286 28.7048 24.4788 29.0825 24.4754 29.4745C24.4719 29.8678 24.3142 30.244 24.0361 30.5221C23.758 30.8002 23.3818 30.9579 22.9885 30.9614C22.5965 30.9648 22.2189 30.8146 21.9363 30.5432L13.4536 22.0605C13.4536 22.0605 13.4536 22.0605 13.4536 22.0604C13.1724 21.7792 13.0144 21.3977 13.0144 21C13.0144 20.6023 13.1724 20.2208 13.4536 19.9396C13.4536 19.9395 13.4536 19.9395 13.4536 19.9395L21.9396 11.4536L21.9396 11.4536L21.9456 11.4474C22.084 11.3041 22.2495 11.1898 22.4325 11.1112C22.6155 11.0326 22.8124 10.9912 23.0115 10.9895C23.2107 10.9877 23.4082 11.0257 23.5926 11.1011C23.7769 11.1765 23.9444 11.2879 24.0852 11.4288C24.2261 11.5696 24.3375 11.7371 24.4129 11.9214C24.4883 12.1058 24.5263 12.3033 24.5245 12.5025C24.5228 12.7016 24.4814 12.8985 24.4028 13.0815C24.3242 13.2645 24.2099 13.43 24.0666 13.5684L24.0666 13.5683L24.0604 13.5745L16.9904 20.6465ZM0.5 21C0.5 32.3221 9.67786 41.5 21 41.5C32.3221 41.5 41.5 32.3221 41.5 21C41.5 9.67786 32.3221 0.5 21 0.5C9.67786 0.5 0.5 9.67786 0.5 21Z" fill="white" stroke="#474747"/>
						</svg>
					</div>
					<div class="custom-next">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path id="next" d="M25.0096 21.3535L25.363 21L25.0096 20.6465L17.9429 13.5778C17.6714 13.2952 17.5212 12.9175 17.5246 12.5255C17.5281 12.1322 17.6858 11.756 17.9639 11.4779C18.242 11.1998 18.6182 11.0421 19.0115 11.0386C19.4035 11.0352 19.7811 11.1854 20.0637 11.4568L28.5464 19.9395C28.5464 19.9395 28.5464 19.9395 28.5464 19.9396C28.8276 20.2208 28.9856 20.6023 28.9856 21C28.9856 21.3977 28.8276 21.7792 28.5464 22.0604C28.5464 22.0605 28.5464 22.0605 28.5464 22.0605L20.0637 30.5432C19.7811 30.8146 19.4035 30.9648 19.0115 30.9614C18.6182 30.9579 18.242 30.8002 17.9639 30.5221C17.6858 30.244 17.5281 29.8678 17.5246 29.4745C17.5212 29.0825 17.6714 28.7048 17.9429 28.4222L25.0096 21.3535ZM0.5 21C0.5 32.3221 9.67786 41.5 21 41.5C32.3221 41.5 41.5 32.3221 41.5 21C41.5 9.67786 32.3221 0.5 21 0.5C9.67786 0.5 0.5 9.67786 0.5 21Z" fill="white" stroke="#474747"/>
						</svg>
					</div>
				</div>
				{:catch error}
				<pre>{error}</pre>
				{/await}					
			{:else if currentList === 'list-3'}
				{#await getIKS()}
				<small>...</small>
				{:then data}
				<Swiper
					modules={[Keyboard, Navigation]}
					keyboard={true}
  				loop={true}
  				slidesPerView={1}
					breakpoints={{
    			"576": {
    				slidesPerView: 1,
    				spaceBetween: 32,
    			},
    			"768": {
    				slidesPerView: 2,
    				spaceBetween: 24,
    			},
    			"1024": {
    				slidesPerView: 2,
    				spaceBetween: 32,
    			},
  				}}
					navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
					on:slideChange={() => console.log('slide change')}
					>
					{#each data as item}
					<SwiperSlide>
						<div class="box-video">
						<iframe
						class="m-1"
						width=100%
						height=80%
						src="https://www.youtube.com/embed/{item.videoid}"
						title={item.name}
						>
						</iframe>
						<p class="strong"><a href="https://www.youtube.com/watch?v={item.videoid}" target="_blank" rel="noreferrer">{@html item.name}</a></p>
						</div>
					</SwiperSlide>
					{/each}
				</Swiper>
				<div class="boxr videonavigation">
					<div class="custom-prev">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path id="prev" d="M16.9904 20.6465L16.637 21L16.9904 21.3535L24.0571 28.4222C24.3286 28.7048 24.4788 29.0825 24.4754 29.4745C24.4719 29.8678 24.3142 30.244 24.0361 30.5221C23.758 30.8002 23.3818 30.9579 22.9885 30.9614C22.5965 30.9648 22.2189 30.8146 21.9363 30.5432L13.4536 22.0605C13.4536 22.0605 13.4536 22.0605 13.4536 22.0604C13.1724 21.7792 13.0144 21.3977 13.0144 21C13.0144 20.6023 13.1724 20.2208 13.4536 19.9396C13.4536 19.9395 13.4536 19.9395 13.4536 19.9395L21.9396 11.4536L21.9396 11.4536L21.9456 11.4474C22.084 11.3041 22.2495 11.1898 22.4325 11.1112C22.6155 11.0326 22.8124 10.9912 23.0115 10.9895C23.2107 10.9877 23.4082 11.0257 23.5926 11.1011C23.7769 11.1765 23.9444 11.2879 24.0852 11.4288C24.2261 11.5696 24.3375 11.7371 24.4129 11.9214C24.4883 12.1058 24.5263 12.3033 24.5245 12.5025C24.5228 12.7016 24.4814 12.8985 24.4028 13.0815C24.3242 13.2645 24.2099 13.43 24.0666 13.5684L24.0666 13.5683L24.0604 13.5745L16.9904 20.6465ZM0.5 21C0.5 32.3221 9.67786 41.5 21 41.5C32.3221 41.5 41.5 32.3221 41.5 21C41.5 9.67786 32.3221 0.5 21 0.5C9.67786 0.5 0.5 9.67786 0.5 21Z" fill="white" stroke="#474747"/>
						</svg>
					</div>
					<div class="custom-next">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path id="next" d="M25.0096 21.3535L25.363 21L25.0096 20.6465L17.9429 13.5778C17.6714 13.2952 17.5212 12.9175 17.5246 12.5255C17.5281 12.1322 17.6858 11.756 17.9639 11.4779C18.242 11.1998 18.6182 11.0421 19.0115 11.0386C19.4035 11.0352 19.7811 11.1854 20.0637 11.4568L28.5464 19.9395C28.5464 19.9395 28.5464 19.9395 28.5464 19.9396C28.8276 20.2208 28.9856 20.6023 28.9856 21C28.9856 21.3977 28.8276 21.7792 28.5464 22.0604C28.5464 22.0605 28.5464 22.0605 28.5464 22.0605L20.0637 30.5432C19.7811 30.8146 19.4035 30.9648 19.0115 30.9614C18.6182 30.9579 18.242 30.8002 17.9639 30.5221C17.6858 30.244 17.5281 29.8678 17.5246 29.4745C17.5212 29.0825 17.6714 28.7048 17.9429 28.4222L25.0096 21.3535ZM0.5 21C0.5 32.3221 9.67786 41.5 21 41.5C32.3221 41.5 41.5 32.3221 41.5 21C41.5 9.67786 32.3221 0.5 21 0.5C9.67786 0.5 0.5 9.67786 0.5 21Z" fill="white" stroke="#474747"/>
						</svg>
					</div>
				</div>
				{:catch error}
				<pre>{error}</pre>
				{/await}
			{:else if currentList === 'list-4'}
				{#await getOther()}
				<small>...</small>
				{:then data}
				<Swiper
					modules={[Keyboard, Navigation]}
					keyboard={true}
  				loop={true}
  				slidesPerView={1}
					breakpoints={{
    			"576": {
    				slidesPerView: 1,
    				spaceBetween: 32,
    			},
    			"768": {
    				slidesPerView: 2,
    				spaceBetween: 24,
    			},
    			"1024": {
    				slidesPerView: 2,
    				spaceBetween: 32,
    			},
  				}}
					navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
					on:slideChange={() => console.log('slide change')}
					>
					{#each data as item}
					<SwiperSlide>
						<div class="box-video">
						<iframe
						class="m-1"
						width=100%
						height=80%
						src="https://www.youtube.com/embed/{item.videoid}"
						title={item.name}
						>
						</iframe>
						<p class="strong"><a href="https://www.youtube.com/watch?v={item.videoid}" target="_blank" rel="noreferrer">{@html item.name}</a></p>
						</div>
					</SwiperSlide>
					{/each}
				</Swiper>
				<div class="boxr videonavigation">
					<div class="custom-prev">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path id="prev" d="M16.9904 20.6465L16.637 21L16.9904 21.3535L24.0571 28.4222C24.3286 28.7048 24.4788 29.0825 24.4754 29.4745C24.4719 29.8678 24.3142 30.244 24.0361 30.5221C23.758 30.8002 23.3818 30.9579 22.9885 30.9614C22.5965 30.9648 22.2189 30.8146 21.9363 30.5432L13.4536 22.0605C13.4536 22.0605 13.4536 22.0605 13.4536 22.0604C13.1724 21.7792 13.0144 21.3977 13.0144 21C13.0144 20.6023 13.1724 20.2208 13.4536 19.9396C13.4536 19.9395 13.4536 19.9395 13.4536 19.9395L21.9396 11.4536L21.9396 11.4536L21.9456 11.4474C22.084 11.3041 22.2495 11.1898 22.4325 11.1112C22.6155 11.0326 22.8124 10.9912 23.0115 10.9895C23.2107 10.9877 23.4082 11.0257 23.5926 11.1011C23.7769 11.1765 23.9444 11.2879 24.0852 11.4288C24.2261 11.5696 24.3375 11.7371 24.4129 11.9214C24.4883 12.1058 24.5263 12.3033 24.5245 12.5025C24.5228 12.7016 24.4814 12.8985 24.4028 13.0815C24.3242 13.2645 24.2099 13.43 24.0666 13.5684L24.0666 13.5683L24.0604 13.5745L16.9904 20.6465ZM0.5 21C0.5 32.3221 9.67786 41.5 21 41.5C32.3221 41.5 41.5 32.3221 41.5 21C41.5 9.67786 32.3221 0.5 21 0.5C9.67786 0.5 0.5 9.67786 0.5 21Z" fill="white" stroke="#474747"/>
						</svg>
					</div>
					<div class="custom-next">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path id="next" d="M25.0096 21.3535L25.363 21L25.0096 20.6465L17.9429 13.5778C17.6714 13.2952 17.5212 12.9175 17.5246 12.5255C17.5281 12.1322 17.6858 11.756 17.9639 11.4779C18.242 11.1998 18.6182 11.0421 19.0115 11.0386C19.4035 11.0352 19.7811 11.1854 20.0637 11.4568L28.5464 19.9395C28.5464 19.9395 28.5464 19.9395 28.5464 19.9396C28.8276 20.2208 28.9856 20.6023 28.9856 21C28.9856 21.3977 28.8276 21.7792 28.5464 22.0604C28.5464 22.0605 28.5464 22.0605 28.5464 22.0605L20.0637 30.5432C19.7811 30.8146 19.4035 30.9648 19.0115 30.9614C18.6182 30.9579 18.242 30.8002 17.9639 30.5221C17.6858 30.244 17.5281 29.8678 17.5246 29.4745C17.5212 29.0825 17.6714 28.7048 17.9429 28.4222L25.0096 21.3535ZM0.5 21C0.5 32.3221 9.67786 41.5 21 41.5C32.3221 41.5 41.5 32.3221 41.5 21C41.5 9.67786 32.3221 0.5 21 0.5C9.67786 0.5 0.5 9.67786 0.5 21Z" fill="white" stroke="#474747"/>
						</svg>
					</div>
				</div>
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
					<div class="boxc dhitionhome imfit">
					<img class="latestimage" src={item.meta.image} alt={item.meta.title}/>
					<h6><a href={item.path}>{item.meta.title}</a></h6>
					<p class="grey">{item.meta.author}</p>
					<div class="boxr latestrow">
						<small>{item.meta.category}</small>
						<small>{item.meta.tags}</small>
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
							class="ww1 book">
							<h6><a href="/openlibrary/books/{item.slug}">{item.Text}</a></h6>
							<small class="grey">{item.author}</small>
						</div>
					{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}	
	</div>
	</div>
</div>


<style lang="sass">

.dhitionhome h6
	&:hover
		color: var(--tree)

.dhitionhome
	box-shadow: 4px 2px 8px #d1d1d1
	padding: 32px
	border-radius: 4px

.videonavigation
	gap: 8px
	width: 100%
	justify-content: center

.videonavigation svg
	width: 28px
	height: 28px
	cursor: pointer
	path
		stroke: none
		fill: #878787
	&:hover
		path
			fill: #fe4a49

.container-11
	display: grid
	grid-auto-flow: row
	.header
		display: inline-grid
		grid-area: header
	.para
		display: inline-grid
		grid-area: para

.cols4
	display: grid
	grid-auto-flow: row
	grid-area: cols4

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

.cols-3
	display: grid
	grid-area: cols-3
	grid-auto-flow: row

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

.box-video p
	margin-top: 8px
	border-top: 1px solid #e7e7e7
	padding-top: 8px
	letter-spacing: 1px !important

.container-44
	display: grid
	grid-auto-flow: row
	grid-template-areas: "header-4" "cols-6"
	.header-4
		grid-area: header-4

.cols-6
	display: grid
	grid-auto-flow: row
	grid-area: cols-6

.latestrow small
	text-transform: uppercase
	font-size: 10px
	font-weight: bold
	letter-spacing: 1px
	color: var(--tree)
	margin: 0

.pad-on-card 
	p
		margin: 0


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


@media screen and (max-width: 575px)
	.container-11
		display: grid 
		grid-template-columns: 1fr 
		grid-template-rows: auto auto auto
		gap: 0px 0px 
		grid-auto-flow: row 
		grid-template-areas: "header" "para" "cols4"
		padding-top: 32px	
	.cols4 
		display: grid 
		grid-template-columns: 1fr
		grid-template-rows: auto auto auto auto 
		gap: 16px 0px 
		grid-auto-flow: row 
		grid-template-areas: "." "." "." "." 
		grid-area: cols4 
	.container-22
		grid-template-columns: 1fr
		grid-template-rows: auto auto
		gap: 0px 0px
		grid-template-areas: "header-2" "cols-3"
	.cols-3
		grid-template-columns: 1fr
		grid-template-rows: auto auto auto
		gap: 48px 0px
		grid-template-areas: "." "." "."
	.container-33
		display: grid
		grid-auto-flow: column
		grid-template-areas: "header-3" "para-1" "cols-4-2"
		grid-template-columns: 1fr
		grid-template-rows: auto auto auto
		gap: 0px 0px
		.header-3
			grid-area: header-3
			h2
				margin: 0
		.para-1
			grid-area: para-1
			p
				margin: 0
	.mainbutton
		margin: 0 0 24px 0
	.box-video
		width: 100%
		height: 240px
	.cols-4-2
		display: grid
		grid-auto-flow: row
		grid-area: cols-4-2
		grid-template-columns: 1fr
		grid-template-rows: auto
		gap: 24px 0px
		grid-template-areas: "."
		padding-bottom: 24px
	.container-44
		grid-template-columns: 1fr
		grid-template-rows: auto auto
		gap: 0px 0px
		min-height: 100vh
	.cols-6
		grid-template-columns: 1fr
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr
		gap: 0px 24px
		grid-template-areas:	"." "." "." "." "." "."
	.book
		padding: 0
		h6
			margin: 0
			padding-bottom: 0
			padding-top: 0
		p
			margin: 0

@media screen and (min-width: 1024px)
	.container-11 
		display: grid 
		grid-template-columns: 1fr 
		grid-template-rows: auto auto auto 
		gap: 0px 0px 
		grid-auto-flow: row 
		grid-template-areas: "header" "para" "cols4"
		height: 100vh
	.cols4 
		display: grid 
		grid-template-columns: 1fr 1fr 1fr max-content 
		grid-template-rows: 1fr 
		gap: 0px 48px 
		grid-auto-flow: row 
		grid-template-areas: ". . . ." 
		grid-area: cols4 
	.container-22
		grid-template-columns: 1fr
		grid-template-rows: auto auto
		gap: 0px 0px
		grid-template-areas: "header-2" "cols-3"
		height: 100vh
	.cols-3
		grid-template-columns: 1fr 1fr 1fr
		grid-template-rows: auto
		gap: 0px 48px
		grid-template-areas: ". . ."
	.container-33
		grid-template-columns: 1fr
		grid-template-rows: auto auto auto
		gap: 0px 0px
		height: 100vh
	.cols-4-2
		grid-template-columns: 1fr
		grid-template-rows: auto
		gap: 0px 0px
		grid-template-areas: "."
	.box-video
		width: 100%
		height: 360px
	.container-44
		grid-template-columns: 1fr
		grid-template-rows: auto auto
		gap: 0px 0px
	.cols-6
		grid-template-columns: 1fr 1fr 1fr
		grid-template-rows: 1fr 1fr
		gap: 32px 32px
		grid-template-areas:	". . ." ". . ."

</style>