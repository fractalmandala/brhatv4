<script>
import supabase from '$lib/db'
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'

export async function updateOne(){
	const { data, error } = await supabase
	.from('brhat-updates')
	.select()
	.eq('sequence',2)
  if (error) throw new Error(error.message)
	return data
}

export async function updateTwo(){
	const { data, error } = await supabase
	.from('brhat-updates')
	.select()
	.eq('sequence',1)
  if (error) throw new Error(error.message)
	return data
}
</script>

<div class="traybox allwrap">
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
		<SwiperSlide>
			{#await updateOne()}
			<small>.</small>
			{:then data}
				{#each data as item}
					<div class="boxc card">
						<img src={item.image} alt={item.sequence} />
						<h6>{item.heading}</h6>
						<p>{item.text.slice(0,300)}</p>
						<button class="cardbutton"><a href={item.link}>{item.buttontext}</a></button>
					</div>
				{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</SwiperSlide>
		<SwiperSlide>
			{#await updateTwo()}
			<small>.</small>
			{:then data}
				{#each data as item}
					<div class="boxc card">
						<img src={item.image} alt={item.sequence} />
						<h6>{item.heading}</h6>
						<p>{item.text.slice(0,300)}</p>
						<button class="cardbutton"><a href={item.link}>{item.buttontext}</a></button>
					</div>
				{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</SwiperSlide>
	</Swiper>
</div>