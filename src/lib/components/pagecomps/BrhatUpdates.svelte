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

export async function updateThree(){
	const { data, error } = await supabase
	.from('brhat-updates')
	.select()
	.eq('sequence',3)
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
      	spaceBetween: 24,
    	},
    	"768": {
      	slidesPerView: 3,
      	spaceBetween: 32,
    	},
    	"900": {
      	slidesPerView: 3,
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
					<div class="boxc-r3 card soft pad">
						<img src={item.image} alt={item.sequence} />
						<div class="boxc">
							<h6>{item.heading}</h6>
							<p>{item.text.slice(0,200)}</p>
							<button class="cardbutton"><a href={item.link} target="_blank" rel="noreferrer">{item.buttontext}</a></button>
						</div>
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
					<div class="boxc-r3 card soft pad">
						<img src={item.image} alt={item.sequence} />
						<div class="boxc">
							<h6>{item.heading}</h6>
							<p>{item.text.slice(0,200)}</p>
							<button class="cardbutton"><a href={item.link}>{item.buttontext}</a></button>
						</div>
					</div>
				{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</SwiperSlide>
		<SwiperSlide>
			{#await updateThree()}
			<small>.</small>
			{:then data}
				{#each data as item}
					<div class="boxc-r3 card soft pad">
						<img src={item.image} alt={item.sequence} />
						<div class="boxc">
							<h6>{item.heading}</h6>
							<p>{item.text.slice(0,200)}</p>
							<button class="cardbutton"><a href={item.link}>{item.buttontext}</a></button>
						</div>
					</div>
				{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</SwiperSlide>
	</Swiper>
	<div class="boxr buttonrow">
		<div class="swiper-button custom-prev">
  		<svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M-2.94055e-06 20L40 -7.15256e-07L40 40L-2.94055e-06 20Z" fill="#b7b7b7"/>
			</svg>
		</div>
		<small>explore the latest at bṛhat, from events and courses to IKS conferences and research gatherings</small>
		<div class="swiper-button custom-next">
  		<svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M40 20L0 40V0L40 20Z" fill="#b7b7b7"/>
			</svg>
		</div>
	</div>
</div>

<style lang="sass">


.buttonrow
	width: 100%
	justify-content: center
	align-items: center
	gap: 32px
	@media screen and (max-width: 575px)
		margin-top: 20px
	@media screen and (max-width: 767px)
		margin-top: 32px
	small
		text-transform: capitalize
		margin: 0
		line-height: 12px
		text-align: center
		font-size: 12px
		padding: 0
		color: #878787

.swiper-button
	height: 24px
	width: 24px
	cursor: pointer
	transition: all 0.08s var(--cubea)
	&:hover
		transtion: scale(0.9)
		svg
			transform: scale(0.9)
			path
				fill: #fe4a49

</style>