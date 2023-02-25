<script lang="ts">
import supabase from '$lib/db'
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'
let y = 1
let isTog = false
function toggleItin(){
	isTog = !isTog
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

</script>

<div class="imagecontainer-hero full imgbox flexbox-c l0"></div>

<div class="flexbox-c l1 pd32">
	{#await chamba()}
	<small>loading...</small>
	{:then data}
	{#each data as item}
	<h2>{item.name}</h2>
	<div class="flexbox-r icons-row">
		<div class="flexbox-c" id="duration">
			<img src="/images/icons/icon-duration.webp" alt="duration" />
			<caption class="cc">{item.duration}<br>
				<cite>duration</cite>
			</caption>
		</div>
		<div class="flexbox-c" id="price">
			<img src="/images/icons/icon-price.webp" alt="price" />
			<caption class="cc">{item.price}<br>
				<cite>price</cite>
			</caption>
		</div>
		<div class="flexbox-c" id="date">
			<img src="/images/icons/icon-date.webp" alt="date" />
			<caption class="cc">{item.dates}<br>
				<cite>next trip</cite>
			</caption>
		</div>
	</div>
	<h6 class="w400 m-top-24">{item.content}</h6>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>	

<div class="flexbox-c l2 pd32">
	<h4 class="m-top-24 top-gap">Itinerary</h4>
	<div class="flexbox-c itincont">
		{#await chambaItin()}
		<small>loading...</small>
		{:then data}
		{#each data as item}
		<div class="in-col wide75 items">
		<h6 class="m-bot-zero" on:click={toggleItin} on:keydown={toggleItin}>{item.name}</h6>
		{#if isTog}
		<pre class="pre-is-list w400">{item.content}</pre>
		{/if}
		</div>
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>
</div>

<div class="flexbox-c l3 top-gap m-top-24 pd32">
	<h4 class="m-top-24 top-gap">Temples</h4>
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
		<div class="in-row swipers-col">
		<img src={item.image} alt={item.name} />
		<div class="in-col temp">
			<h5 class="m-top-zero">{item.name}</h5>
			<p class="grey">{item.content}</p>
		</div>
		</div>
		</SwiperSlide>
		{/each}
	</Swiper>
	<div class="in-row m-bot-24 pad-y-b" id="navbuttons">
		<div class="swiper-button custom-prev">
  		<img src="/images/icons/prevarrow.png" alt="prev" />
		</div>
		<div class="swiper-button custom-next">
  		<img src="/images/icons/nextarrow.png" alt="next" />
		</div>
	</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>


<style>
.items { padding: 1em 0 0 0;}
.imagecontainer-hero { background-image: url('/images/anveshi/keyhimsmal.webp')}
#date img, #duration img, #price img { object-fit: contain; width: 48px;transform-origin: center center; transition: all 0.23s var(--cubea); }

.flexbox-c caption { text-transform: uppercase; font-weight: bold; color: #a7a7a7;transition: all 0.18s var(--snap); margin-top: 12px; transform-origin: center center;}
.flexbox-c:hover caption { color: #878787;}
.base-col:hover caption cite { visibility: visible; transform: translateY(0);}
#date, #duration, #price { height: 100%; justify-content: space-between;}
.swipers-col { width: 100%;}
.swipers-col img { object-fit: cover;}
.swiper-button img { height: 28px; width: 28px; filter: saturate(0); }
.swiper-button img:hover { filter: saturate(1);} 
.swiper-button img:focus { transform: scale(0.9);}

@media screen and (min-width: 900px) {
	.l1 { width: 100%;}
	.l0 { margin-left: -400px; height: 100vh;}
	.l3 { height: 100vh;}
	.swipers-col img { width: 400px; height: 400px;}
	.swipers-col { height: max-content; align-items: flex-start;}
	#navbuttons { z-index: 2; margin-top: -120px; justify-content: center; gap: 24px; }
 .icons-row { gap: 48px;}
	.items pre { margin-top: 0; margin-bottom: 0;}
	.items::-webkit-scrollbar { display: none;}
	.items { height: 100%;}
	.itincont { height: 100%;}
	.temp { padding: 0 32px; height: 100%;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	#navbuttons { margin-top: -2.8rem; z-index: 2;}
	.l0 { margin-left: -272px;}
	.icons-row { gap: 48px; margin-bottom: 32px; padding-left: 16px;}
	.swipers-col img { height: 240px; margin-bottom: 20px;}
	.temp { width: 100%;}
	.in-row { flex-wrap: wrap;}
}

@media screen and (max-width: 767px) and (min-width: 576px){
	.l0 { height: 100vh;}
	.icons-row { width: 100%; justify-content: center; gap: 48px; margin-bottom: 32px;}
	#navbuttons { display: none;}
	.swipers-col img { height: 240px; width: 100%; object-fit: contain;}
  .temp { width: 100%; justify-content: flex-start; height: 100%; padding-top: 16px;}
  .in-row { flex-wrap: wrap;}
}

@media screen and (max-width: 575px) {
	#date img, #duration img, #price img { width: 40px;}
	.l0 { height: 36vh; margin-top: 64px;}
	.l1, .l2 { height: 100%;}
	.swipers-col img { height: 200px; width: 100%;}
	.l3 { height: max-content;}
	.temp { width: 100%; padding: 16px 0;}
	.swipers-col, .in-row { flex-wrap: wrap;}
	.icons-row { width: 100%; justify-content: center; gap: 48px; margin-bottom: 24px;}
	#navbuttons { display: none;}
}


</style>