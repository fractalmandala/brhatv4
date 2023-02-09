<script>
import supabase from '$lib/db'
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'

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

<div data-scroll-container>
<div class="imagecontainer-hero" data-scroll-section></div>
<div class="blog-pad" data-scroll-section>
	{#await chamba()}
	<small>loading...</small>
	{:then data}
	{#each data as item}
	<h1>{item.name}</h1>
	<div class="base-row icons-row row-x-left">
		<div class="base-col col-y-cent col-x-cent" id="duration">
			<img src="/images/icons/icon-duration.webp" alt="duration" />
			<caption class="cc">{item.duration}<br>
				<cite>duration</cite>
			</caption>
		</div>
		<div class="base-col col-y-cent col-x-cent" id="price">
			<img src="/images/icons/icon-price.webp" alt="price" />
			<caption class="cc">{item.price}<br>
				<cite>price</cite>
			</caption>
		</div>
		<div class="base-col col-y-cent col-x-cent" id="date">
			<img src="/images/icons/icon-date.webp" alt="date" />
			<caption class="cc">{item.dates}<br>
				<cite>next trip</cite>
			</caption>
		</div>
	</div>
	<p>{item.content}</p>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	<h4>Itinerary</h4>
	{#await chambaItin()}
	<small>loading...</small>
	{:then data}
	{#each data as item}
	<div class="base-col items">
		<p><b>{item.name}</b></p>
		<pre class="pre-is-list">{item.content}</pre>
	</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	<h4>Temples</h4>
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
	<div class="base-col swipers-col">
		<div class="imagecontainer-col" style="background-image: url({item.image})">
		</div>
		<h5>{item.name}</h5>
		<p>{item.content}</p>
	</div>
	</SwiperSlide>
	{/each}
	</Swiper>
	<div class="base-row row-x-cent" id="navbuttons">
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
</div>

<style>
.items { padding: 1em 0 0 0;}
.items p { color: #474747;}
.imagecontainer-hero { background-image: url('/images/anveshi/keyhimsmal.webp')}
.base-col img { object-fit: contain; width: 48px;transform-origin: center center; transition: all 0.23s var(--cube1); }
.base-col:hover img { transform: scale(0.9);}
.base-col caption { text-transform: uppercase; font-weight: bold; color: #a7a7a7; line-height: 1em;transition: all 0.18s var(--snap); margin-top: 12px; transform-origin: center center;}
.base-col:hover caption { color: #fe4a49;}
caption cite { font-variant: small-caps; font-size: 12px; font-style: normal; visibility: hidden; transform: translateY(48px);transform-origin: center center; transition: all 0.23s var(--cube1);}
.base-col:hover caption cite { visibility: visible; transform: translateY(0);}
#date, #duration, #price { height: 80px; justify-content: space-between;}
.swipers-col { width: 100%;}
.imagecontainer-col { width: 100%; background-size: cover; background-position: center center; overflow: hidden; }
.blog-pad { height: max-content;}

@media screen and (min-width: 900px) {
	.imagecontainer-col { height: 560px;}
	#navbuttons { margin-top: -2.8rem; z-index: 2;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.imagecontainer-col { height: 400px;}
	#navbuttons { margin-top: -2.8rem; z-index: 2;}
}

@media screen and (max-width: 767px) and (min-width: 576px){
	.icons-row { width: 100%; justify-content: center; gap: 48px;}
	.imagecontainer-col { height: 400px; padding-left: 1em; padding-right: 1em;}
	#navbuttons { margin-top: -2.8rem; z-index: 2;}
}

@media screen and (max-width: 575px) {
	.icons-row { width: 100%; justify-content: center; gap: 48px;}
	.imagecontainer-col { height: 200px; padding-left: 1em; padding-right: 1em; margin-right: 8px;}
	#navbuttons { margin-top: -2.8rem; z-index: 2;}
}
@media screen and (min-width: 768px) { #price { margin: 0 32px;}}
.base-row { margin-bottom: 1rem;}
</style>