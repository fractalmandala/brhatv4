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

let panel1 = true
let panel2 = false	
let panel3 = false
let panel4 = false

function toggle1(){
	panel1 = !panel1
	if (panel2 === true) {
			panel2 = !panel2
	}
	if (panel3 === true) {
			panel3 = !panel3
	}
	if (panel4 === true) {
			panel4 = !panel4
	}
}

function toggle2(){
	panel2 = !panel2
	if (panel1 === true) {
			panel1 = !panel1
	}
	if (panel3 === true) {
			panel3 = !panel3
	}
	if (panel4 === true) {
			panel4 = !panel4
	}
}

function toggle3(){
	panel3 = !panel3
	if (panel2 === true) {
			panel2 = !panel2
	}
	if (panel1 === true) {
			panel1 = !panel1
	}
	if (panel4 === true) {
			panel4 = !panel4
	}
}

function toggle4(){
	panel4 = !panel4
	if (panel2 === true) {
			panel2 = !panel2
	}
	if (panel1 === true) {
			panel1 = !panel1
	}
	if (panel3 === true) {
			panel3 = !panel3
	}
}


export async function karnataka(){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','chapter')
	.eq('chapter','karnataka')
	if (error) throw new Error(error.message)
	return data
}

export async function karnatakaItin(){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','itinerary')
	.eq('chapter','karnataka')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function karnatakaTemps(){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','temple')
	.eq('chapter','karnataka')
	if (error) throw new Error(error.message)
	return data
}

</script>

<svelte:window bind:scrollY={y}/>

<div class="wid-side">
	<GrandContainer>
		<div slot="mobilenav" class="mobmob">
			<div class="flier" in:fly={{ duration: 300, delay: 200, x: 0, y: -160}} out:fly={{ duration: 200, delay: 0, x: 0, y: -160}}>
				<ShareSocial2></ShareSocial2>
			</div>
			<h6 in:fly={{ duration: 300, delay: 200, x: 0, y: -160}} out:fly={{ duration: 200, delay: 0, x: 0, y: -160}} on:click={toggle1} on:keydown={toggle1}>Karnataka Chapter</h6>
				<p class="islink" on:click={toggle2} on:keydown={toggle2} in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Itinerary</p>
				<p class="islink" on:click={toggle3} on:keydown={toggle3} in:fly={{ duration: 300, delay: 220, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Temples</p>
				<p class="islink" on:click={toggle4} on:keydown={toggle4} in:fly={{ duration: 300, delay: 220, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Chapter Brochure</p>
			<div class="block"></div>
			<h6 in:fly={{ duration: 300, delay: 200, x: 0, y: -160}} out:fly={{ duration: 200, delay: 0, x: 0, y: -160}}><a href="/anveshi">Bṛhat Anveṣī</a></h6>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/anveshi/chapter/karnataka">Karnataka</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/anveshi/chapter/odisha">Odisha</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/anveshi/chapter/chamba">Chamba</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/anveshi/#traveldiaries">Travel Diaries</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/anveshi/#faq">FAQs</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/anveshi/guide">Tour Lead</a></p>
		</div>
		<div slot="desknav" class="deskdesk">
			<ShareSocial></ShareSocial>
			<div class="tabhead">
				<h6 on:click={toggle1} on:keydown={toggle1}>Karnataka Chapter</h6>
			</div>
					<p class="islink" on:click={toggle2} on:keydown={toggle2}>Itinerary</p>
					<p class="islink" on:click={toggle3} on:keydown={toggle3}>Temples</p>
					<p class="islink" on:click={toggle4} on:keydown={toggle4}>Chapter Brochure</p>
				<h6><a href="/anveshi">Bṛhat Anveṣī</a></h6>
				<p><a href="/anveshi/chapter/karnataka">Karnataka</a></p>
				<p><a href="/anveshi/chapter/odisha">Odisha</a></p>
				<p><a href="/anveshi/chapter/chamba">Chamba</a></p>
				<p><a href="/anveshi/#traveldiaries">Travel Diaries</a></p>
				<p><a href="/anveshi/#faq">FAQs</a></p>
				<p><a href="/anveshi/guide">Tour Lead</a></p>

		</div>
	</GrandContainer>
	<div class="main-page">
		{#if panel1}
		<div class="gp1 x1"
				in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}"
				out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}"
			>
			<div id="element-1" class="document element">
				{#await karnataka()}
					<small>loading...</small>
					{:then data}
							{#each data as item}
							<img class="heroimage" src={item.image} alt={item.title} />
							<div class="the-title">
								<h2>{item.name}</h2>
							</div>		
							<div class="gp3 icons-row">
								<div class="cols3" id="duration">
									<img src="/images/icons/icon-duration.webp" alt="duration" />
									<p>{item.duration}</p>
									<small>duration</small>
								</div>
								<div class="cols3" id="price">
									<img src="/images/icons/icon-price.webp" alt="price" />
									<p>{item.price}</p>
									<small>price</small>
								</div>
								<div class="cols3" id="date">
									<img src="/images/icons/icon-date.webp" alt="date" />
									<p>{item.dates}</p>
									<small>next trip</small>
								</div>
							</div>
							<pre>{item.content}</pre>
							{/each}
						{:catch error}
					<pre>{error}</pre>
				{/await}
			</div>
		</div>
		{/if}

		{#if panel2}
		<div class="gp1 x2"
			in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}"
			out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}"
		>
			<div id="element-2" class="document element">
				<h3>Itinerary</h3>
					{#await karnatakaItin()}
					<small>loading...</small>
					{:then data}
					{#each data as item}
					<div class="gp2">
						<div class="cols2">
							<h5>{item.name}</h5>
						</div>
						<div class="cols2">
							<pre>{item.content}</pre>
						</div>
					</div>
					{/each}
					{:catch error}
					<pre>{error}</pre>
					{/await}
			</div>
		</div>
		{/if}

		{#if panel3}
			<div class="boxc x3"
				in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}"
				out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}"
			>
				<h3>Temples</h3>
				{#await karnatakaTemps()}
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
					<div class="gp2">
						<div class="cols2">
						<img src={item.image} alt={item.name} />
						</div>
						<div class="cols2">
							<h5>{item.name}</h5>
							<p>{item.content}</p>
						</div>
					</div>
				</SwiperSlide>
				{/each}
				</Swiper>
				<div class="boxr" id="navbuttons">
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
			{:catch error}
			<pre>{error}</pre>
			{/await}
			</div>
		{/if}

		{#if panel4}
		<div class="boxc pdf">
			<iframe
				title="brochure" 
				src="https://drive.google.com/file/d/1fptLVLBqli5aJHJqWevhuN0rFInAmeft/preview"
				width="80%" 
				height="600px">
			</iframe>
		</div>
		{/if}
	</div>
</div>










<style>

.block {
	height: 32px;
	display: flex;
}
.tabhead h6 {
	background: #474747;
	cursor: pointer;
}
.tabhead h6:hover {
	background: #e4a503;
}
a:hover {
	color: #E4A503;
}
.islink:hover {
	color: #E4A503;
}
.islink { cursor: pointer;}

.icons-row .cols3 {
	transition: all 0.3s var(--cubeb);
}
.icons-row .cols3 small {
	text-transform: uppercase;
	font-weight: bold;
	font-size: 12px;
	color: #b7b7b7;
	text-align: center;
}
.icons-row .cols3 img {
	margin: auto;
	object-fit: cover;
	width: 88px;
	height: 88px;
}
.icons-row .cols3 p {
	text-align: center;
	font-weight: bold;
	color: #676767;
}
.icons-row .cols3:hover p { color: #E4A503;}
.icons-row .cols3:hover {
	transform: scale(1.1);
}

.cols2 h5 {
	color: #e4a503;
}



#date img, #duration img, #price img { object-fit: contain; width: 48px;transform-origin: center center; transition: all 0.23s var(--cubea); }


#date, #duration, #price { height: 100%; justify-content: space-between;}
	#navbuttons { gap: 32px;}
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

@media screen and (min-width: 900px) {
	.heroimage { margin-right: -25%;}
	.x3 { padding-bottom: 40px;}


	#navbuttons { justify-content: flex-start; margin-top: -20%; gap: 24px; }
 .icons-row { gap: 48px;}


}

@media screen and (max-width: 899px) and (min-width: 768px) {
	#navbuttons { margin-top: -2.8rem; }

	.icons-row { gap: 48px; margin-bottom: 32px; padding-left: 16px;}
	.x3 .gp2 { flex-wrap: wrap;}
	.x3 .gp2 .cols2 { width: 100%;}
	.x3 .gp2 .cols2 img { margin-bottom: 0; height: 240px;}
	.x3 .gp2 .cols2 h5 { margin: 0;}
	#navbuttons { margin-left: 32px;}
}

@media screen and (max-width: 767px) and (min-width: 576px){

	.icons-row { width: 100%; }
	#navbuttons { display: none;}

	.x3 h3 { padding-left: 16px; border-bottom: 1px solid #b7b7b7;}
	.pdf { margin-left: 10%;}
}

@media screen and (max-width: 575px) {
	#date img, #duration img, #price img { width: 40px;}
.x3 h3 { padding-left: 16px; border-bottom: 1px solid #b7b7b7;}
	.icons-row { width: 100%; justify-content: center; gap: 48px; margin-bottom: 24px;}
	#navbuttons { display: none;}
	.pdf { margin-left: 10%;}
}


</style>