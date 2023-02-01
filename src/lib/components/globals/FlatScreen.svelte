<script>
import supabase from '$lib/db'
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'

export async function latestDhiti(){
	const { data, error } = await supabase
	.from('brhat-dhiti')
	.select()
	.order('sequence',{ascending: false})
	.limit(4)
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="my-row">
	<div class="my-col">
		<div class="c-c-c-c top-1 bgr bxpd">
			<p><a href="/about">About</a></p>
		</div>
		<div class="r-r-r-r row-left-mid">
			<div class="c-c-c-c box1 bgr bxpd">
				<p>Bṛhatanveṣī</p>
			</div>
			<div class="c-c-c-c box2 bgr bxpd">
				<p>Bṛhat Draṣṭā</p>
			</div>
		</div>
		<div class="r-r-r-r row-left-low">
			<div class="c-c-c-c box3 bgr bxpd">
				<p>Bṛhadmṛdaṅga</p>
			</div>
			<div class="c-c-c-c box4 bgr bxpd">
				<p>Fractal Maṇḍala</p>
			</div>
		</div>
		<div class="r-r-r-r row-left-bot">
			<div class="c-c-c-c box5 bgr bxpd">
				<p>Scrolls of Āryavarta</p>
			</div>
			<div class="c-c-c-c box6 bgr bxpd">
				<p>Ṛta in Design</p>
			</div>
		</div>
	</div>
	<div class="my-col">
		{#await latestDhiti()}
		<small>...</small>
		{:then data}
		<div class="slide1 bgr">
			<Swiper
				modules={[Keyboard, Navigation]}
				keyboard={true}
  			loop={true}
  			slidesPerView={1}
				breakpoints={{
    		"576": {
      		slidesPerView: 1,
      		spaceBetween: 16,
    		},
    		"768": {
      		slidesPerView: 1,
      		spaceBetween: 16,
    		},
    		"1024": {
      		slidesPerView: 1,
      		spaceBetween: 16,
    		},
  		}}
				navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
				on:slideChange={() => console.log('slide change')}
			>
			{#each data as item}
			<SwiperSlide>
				<div class="c-c-c-c dhitislide" style="background-image: url('{item.image}')">
					<div class="c-c-c-c dhitiscreen">
						<h5><a href={item.link}>{item.title}</a></h5>
						<small class="smalla">{item.category}</small>
						<small class="smallb">{item.tags}</small>
					</div>	
				</div>
			</SwiperSlide>
			{/each}
			</Swiper>
			<div class="r-r-r-r nav-row">
				<div class="custom-prev"><img src="/images/icons/prevwhite.png" alt="previous"></div>
				<div class="custom-next"><img src="/images/icons/nextwhite.png" alt="next"></div>
			</div>
			</div>
			{:catch error}
			<pre>{error}</pre>
			{/await}
			<div class="slide2 bgr"></div>
	</div>
</div>

<style>
.my-row { 
	background: linear-gradient(40deg,#272727,#1B2023);
	background-size: cover;
	background-repeat: no-repeat;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: row;
	z-index: 999;
	}

.bgr { border: 1px solid #373737; transition: all 0.35s var(--cube4); border-radius: 3px;}
.bgr:hover { border: 1px solid #fe4a49;}

.my-col {
	display: flex;
	flex-direction: column;
	}

.bxpd p, .bxpd p a { color: #474747;}
.bxpd:hover a { color: #fe4a49;}

.dhitislide {
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

.dhitiscreen { 
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.8);
}

.smalla { text-transform: uppercase; font-weight: bold;}
.smallb { text-transform: capitalize;}

.dhitiscreen h5, .dhitiscreen a { color: white; transition: all 0.12s var(--cube1);}
.dhitiscreen:hover a { color: #fe4a49;}
.dhitiscreen small { color: #d7d7d7; line-height: 1.5em;}
	.slide1 { position: relative;}
	.nav-row { display: flex; flex-direction: row; position: absolute; bottom: 1em; left: 1em; z-index: 10;}
	.custom-prev, .custom-next { width: 24px; height: 24px; }
	.custom-prev img, .custom-next img { object-fit: contain; width: 24px;}

@media screen and (min-width: 900px) {
	.my-col { width: calc(50% - 1.5em); height: 100%; gap: 1em; justify-content: center; align-items: flex-start;}
	.my-row { width: 100vw; justify-content: center; align-items: center;}
	.top-1 { width: calc(100% - 1em); height: calc(25% - 1.25em);}
	.box1, .box2, .box3, .box4, .box5, .box6 { width: calc(50% - 1em); height: 100%;}
	.row-left-mid { width: 100%; height: calc(25% - 1.25em); gap: 1em;}
	.row-left-low { width: 100%; height: calc(25% - 1.25em); gap: 1em;}
	.row-left-bot { width: 100%; height: calc(25% - 1.25em); gap: 1em;}
	.slide1 { width: 100%; height: calc(50% - 1.5em);}
	.slide2 { width: 100%; height: calc(50% - 1.5em);}
	.bxpd { padding: 0 1em;}
	.dhitiscreen { padding: 1em 2em;}
	.dhitislide h5 { font-size: 24px;}
	.nav-row { gap: 1em; padding-left: 1em; padding-bottom: 1em;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.my-col { width: 25%; height: 100%; }
}

</style>