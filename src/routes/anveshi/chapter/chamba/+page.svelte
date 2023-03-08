<script lang="ts">
import ShareSocial from '$lib/components/globals/ShareSocial.svelte'
import ShareSocial2 from '$lib/components/globals/ShareSocial.svelte'
import { fly } from 'svelte/transition';
import { quintOut } from 'svelte/easing';
import GrandContainer from '$lib/components/globals/GrandContainer.svelte'
import supabase from '$lib/db'
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'
let y = 1
let showItins:any = [] 

let panel1 = true
let panel2 = false	
let panel3 = false


function toggle1(){
	if (!panel1) {
		panel1 = true
		if (panel2) {
			panel2 = false
		}
		if (panel3) {
			panel3 = false
		}
	}
}

function toggle2(){
	if (!panel2) {
		panel2 = true
		if (panel1) {
			panel1 = false
		}
		if (panel3) {
			panel3 = false
		}
	}
}

function toggle3(){
	if (!panel3) {
		panel3 = true
		if (panel2) {
			panel2 = false
		}
		if (panel1) {
			panel1 = false
		}
	}
}

export async function chamba(){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','chapter')
	.eq('chapter','chamba')
	if (error) throw new Error(error.message)
	return data
}

export async function chambaItin(){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','itinerary')
	.eq('chapter','chamba')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function chambaTemps(){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','temple')
	.eq('chapter','chamba')
	if (error) throw new Error(error.message)
	return data
}

function toggleItin(index:any){
	showItins[index] = !showItins[index]
	showItins.forEach((state:any, i:any) => {
		if ( i !== index) showItins[i] = false
	})
}

</script>

<div class="x-x-2">
		{#if panel1}
		<div class="traybox wrap xiv">
			<div class="ww2 the-title">
				<h1>Chamba Chapter</h1>
			</div>
			<div class="ww2 card">
				<img src="/images/anveshi/keyhimsmal.webp" alt="chamba" />
			</div>
		</div>
		<div class="boxc x1"
				in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}"
				out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}"
			>
				{#await chamba()}
					<small>loading...</small>
					{:then data}
					{#each data as item}	
							<div class="boxr wrap icons-row">
								<div class="ww5 iconcard" id="duration">
									<img src="/images/icons/icon-duration.webp" alt="duration" />
									<p>{item.duration}</p>
									<small>duration</small>
								</div>
								<div class="ww5 iconcard" id="price">
									<img src="/images/icons/icon-price.webp" alt="price" />
									<p>{item.price}</p>
									<small>price</small>
								</div>
								<div class="ww5 iconcard" id="date">
									<img src="/images/icons/icon-date.webp" alt="date" />
									<p>{item.dates}</p>
									<small>next trip</small>
								</div>
							</div>
							
							<pre class="wide75">{item.content}</pre>
							{/each}
					{:catch error}
					<pre>{error}</pre>
				{/await}
			</div>
		<div class="boxr gap24 mtop24">
			<button class="mainbutton chamb" on:click={toggle2} on:keydown={toggle2}>Itinerary</button>
			<button class="mainbutton chamb" on:click={toggle3} on:keydown={toggle3}>Temples</button>
		</div>
		{/if}

		{#if panel2}
		<div class="boxc x2"
			in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}"
			out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}"
		>
				<h3>Itinerary</h3>
				{#await chambaItin()}
				<small>loading...</small>
				{:then data}
				<small class="cut chambs">Click on Day to Expand</small>
				{#each data as item, index}
					<div class="boxc card" on:click={() => toggleItin(index)} on:keydown={() => toggleItin(index)}>
						<h6>{item.name}</h6>
						{#if showItins[index]}
							<pre class="wide50" transition:fly={{duration: 250, x: -200, y: 0, opacity: 0.5, easing: quintOut }}>{item.content}</pre>
						{/if}
					</div>
					{/each}
					{:catch error}
					<pre>{error}</pre>
				{/await}
			</div>
		<div class="boxr gap24 mtop24">
			<button class="mainbutton chamb" on:click={toggle1} on:keydown={toggle1}>Overview</button>
			<button class="mainbutton chamb" on:click={toggle3} on:keydown={toggle3}>Temples</button>
		</div>
		{/if}

		{#if panel3}
			<div class="boxc x3"
				in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}"
				out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}"
			>
				<h3>Temples</h3>
				{#await chambaTemps()}
				<small>loading...</small>
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
    			  slidesPerView: 1,
    			  spaceBetween: 24,
    			},
    			"1024": {
    			  slidesPerView: 1,
    			  spaceBetween: 32,
    			},
  			}}
				navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
				on:slideChange={() => console.log('slide change')}
				>
					{#each data as item}
				<SwiperSlide>
					<div class="traybox wrap">
						<div class="ww2 templeimage">
						<img src={item.image} alt={item.name} />
						</div>
						<div class="ww2 bound">
							<h6>{item.name}</h6>
							<p>{item.content}</p>
						</div>
					</div>
				</SwiperSlide>
				{/each}
				</Swiper>
			{:catch error}
			<pre>{error}</pre>
			{/await}
				<div class="boxr" id="navbuttons">
					<div>
						<button class="mainbutton chamb" on:click={toggle1} on:keydown={toggle1}>Overview</button>
						<button class="mainbutton chamb" on:click={toggle2} on:keydown={toggle2}>Itinerary</button>
					</div>
					<div class="boxr gap24 triangles">	
						<div class="swiper-button custom-prev">
  						<svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M-2.94055e-06 20L40 -7.15256e-07L40 40L-2.94055e-06 20Z" fill="#b7b7b7"/>
							</svg>
						</div>
						<div class="swiper-button custom-next">
  						<svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M40 20L0 40V0L40 20Z" fill="#b7b7b7"/>
							</svg>
						</div>
					</div>
				</div>
		</div>

		{/if}
		
	</div>






