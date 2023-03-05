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

<div class="pad-a rrr">
	<GrandContainer>
		<p slot="sectionname"><span class="chambs">Chamba </span>Chapter</p>
		<div slot="mobilenav" class="mobmob">
			<div class="flier" in:fly={{ duration: 300, delay: 200, x: 0, y: -160}} out:fly={{ duration: 200, delay: 0, x: 0, y: -160}}>
				<ShareSocial2></ShareSocial2>
			</div>
			<h6 in:fly={{ duration: 300, delay: 200, x: 0, y: -160}} out:fly={{ duration: 200, delay: 0, x: 0, y: -160}} on:click={toggle1} on:keydown={toggle1}>Chamba Chapter</h6>
				<p class="islink" on:click={toggle2} on:keydown={toggle2} in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Itinerary</p>
				<p class="islink" on:click={toggle3} on:keydown={toggle3} in:fly={{ duration: 300, delay: 220, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Temples</p>
			<div class="block"></div>
			<h6 in:fly={{ duration: 300, delay: 200, x: 0, y: -160}} out:fly={{ duration: 200, delay: 0, x: 0, y: -160}}><a href="/anveshi">Bṛhat Anveṣī</a></h6>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/anveshi/chapter/karnataka">Karnataka</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/anveshi/chapter/odisha">Odisha</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/anveshi/chapter/chamba">Chamba</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/anveshi/#traveldiaries">Travel Diaries</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/anveshi/#faq">FAQs</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/anveshi/#aboutanveshi">About</a></p>
		</div>
		<div slot="desknav" class="deskdesk">
			<ShareSocial></ShareSocial>
				<h6 class="pointer" on:click={toggle1} on:keydown={toggle1}>Chamba Chapter</h6>
					<p class="islink" on:click={toggle2} on:keydown={toggle2}>Itinerary</p>
					<p class="islink" on:click={toggle3} on:keydown={toggle3}>Temples</p>
				<h6><a href="/anveshi">Bṛhat Anveṣī</a></h6>
				<p><a href="/anveshi/chapter/karnataka">Karnataka</a></p>
				<p><a href="/anveshi/chapter/odisha">Odisha</a></p>
				<p><a href="/anveshi/chapter/chamba">Chamba</a></p>
				<p><a href="/anveshi/#traveldiaries">Travel Diaries</a></p>
				<p><a href="/anveshi/#faq">FAQs</a></p>
				<p><a href="/anveshi/#aboutanveshi">About</a></p>
		</div>
	</GrandContainer>
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
</div>





<style>


.pointer:hover { color: var(--chambs);}

.block {
	height: 32px;
	display: flex;
}

a:hover {
	color: #E4A503;
}
.islink:hover {
	color: #E4A503;
}
.islink { cursor: pointer;}

.iconcard p {
	color: var(--chambs)
;}


#date img, #duration img, #price img { object-fit: contain; width: 48px;transform-origin: center center; transition: all 0.23s var(--cubea); }


#date, #duration, #price { height: 100%; justify-content: space-between;}
	#navbuttons { column-gap: 32px;}
	.swiper-button {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 24px;
		width: 24px;
	}
	.swiper-button svg {
		height: 24px;
		width: 24px;
		cursor: pointer;
	}
	.swiper-button svg path, .swiper-button svg { transition: all 0.08s var(--cubea);}
	.swiper-button svg:hover path {
		fill: #e4a503;
	}
	.swiper-button svg:hover {
		transform: scale(0.9);
	}

	.xiv .ww2 h1 {
		background: var(--chambs);
		color: white;
		z-index: 1;
	}

.bound h6 { color: var(--chambs);}

#element-2 .card h6 {  cursor: pointer;}
.x2 pre { margin-bottom: 32px;}

.x3 { position: relative;}
#navbuttons {
	position: absolute;
}


@media screen and (min-width: 900px) {
	.templeimage img {
		object-fit: cover;
		height: 280px;
		width: 100%;
	}

	.x3 { padding-bottom: 40px;}


	#element-2 .card h6 { margin-top: 0;}
	#navbuttons { bottom: 0; left: 0; align-items: center; width: 100%; justify-content: space-between;}
 .icons-row { gap: 48px;}
	.x3 { height: max-content;}
	.bound h6 {
		font-size: 1.08rem;
		font-weight: 600;
		margin: 16px 0 8px 0;
	}
	.bound p {
		font-size: 0.875rem;
	}


}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.templeimage img {
		object-fit: cover;
		height: 320px;
		width: 100%;
	}

	#navbuttons { bottom: 0; left: 0; align-items: center; width: 100%; justify-content: space-between;}

	.icons-row { gap: 48px; margin-bottom: 32px; padding-left: 16px;}
	#element-2 .card h6 { margin-top: 0;}
	.bound { padding-bottom: 32px;}
	.bound h6 {
		font-size: 1.08rem;
		font-weight: 600;
		margin: 16px 0 8px 0;
	}
	.bound p {
		font-size: 0.825rem;
	}
	.x3 .traybox { flex-wrap: wrap;}
	.x3 .traybox .ww2 { width: 100%; }
}

@media screen and (max-width: 767px) and (min-width: 576px){
	.templeimage img {
		object-fit: cover;
		height: 320px;
		width: 100%;
	}

	.icons-row { width: 100%; }
		#navbuttons { bottom: 0; left: 0; width: 100%; justify-content: center;}


	.iconcard { width: 33%;}
	#element-2 .card h6 { margin-top: 0;}
.bound { padding-bottom: 32px;}
	.bound h6 {
		font-size: 1.06rem;
		font-weight: 600;
		margin: 12px 0 8px 0;
	}
	.bound p {
		font-size: 0.8rem;
		margin-top: 2px;
	}
}

@media screen and (max-width: 575px) {
	.templeimage img {
		object-fit: cover;
		height: 320px;
		width: 100%;
	}
	
	#date img, #duration img, #price img { width: 40px;}
	.x3 { height: max-content; padding-bottom: 32px;}

	.icons-row { width: 100%; justify-content: center; gap: 24px; margin-bottom: 24px; margin-top: 24px;}
		#navbuttons { bottom: 0; left: 0; width: 100%; justify-content: center;}
	.iconcard { width: 20%;}
	#element-2 .card h6 { margin-top: 0;}
.bound { padding-bottom: 32px;}
	.bound h6 {
		font-size: 1.04rem;
		font-weight: 600;
		margin: 24px 0 8px 0;
	}
	.bound p {
		font-size: 0.8rem;
		margin-top: 0px;
		margin-bottom: 16px;
	}


}


</style>