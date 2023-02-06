<script lang="ts">
import supabase from '$lib/db'
import { Swiper, SwiperSlide } from 'swiper/svelte'
import ButtonOutline from '$lib/components/animations/ButtonOutline.svelte'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'


export async function dhitiLatest(){
	const { data, error } = await supabase
	.from('brhat-dhiti')
	.select()
	.order('sequence',{ascending: false})
	.limit(6)
	if (error) throw new Error(error.message)
	return data
}

</script>


<div class="c-c-c-c">
{#await dhitiLatest()}
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
      spaceBetween: 24,
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
<div class="imagecontainer-hero" style="background-image: url({item.image})">
	<div class="imagecontainer-screen" id="bigscreen">
		<cite>{item.category}</cite>
		<small class="home-tag">{item.tags}</small>
		<small class="home-author">{item.author}</small>
		<h1>{item.title}</h1>
		<p id="bigscreen-p">{item.excerpt}</p>
		<button class="tempo"><a class="buttonlinker" href={item.link}>Read Essay</a></button>
		<div class="base-row row-x-left" id="navbuttons">
			<div class="swiper-button custom-prev">
  			<img src="/images/icons/prevwhite.png" alt="prev" />
			</div>
			<div class="swiper-button custom-next">
  			<img src="/images/icons/nextwhite.png" alt="next" />
			</div>
		</div>
	</div>
</div>
</SwiperSlide>
{/each}
</Swiper>
{:catch error}
<pre>{error}</pre>
{/await}
</div>

<style>

	.tempo {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: 2px solid #fe4a49;
  border-radius: 0.6em;
  color: #fe4a49;
  cursor: pointer;
  display: flex;
  align-self: flex-start;
  font-size: 1rem;
  line-height: 1;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
	transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
	}

	.tempo:hover, .tempo:focus {
		color: #fff;
  	outline: 0;
	}

	.tempo:hover {
		box-shadow: 0 0 40px 40px #e74c3c inset;
		transform: scale(0.9);
	}

	.tempo a { color: white;}

	cite { color: white; background-color: var(--red); font-style: normal; text-transform: uppercase; width: max-content; margin-bottom: 1em;}
	#bigscreen { justify-content: flex-start; position: relative; align-items: flex-start;}
	#navbuttons { position: absolute; z-index: 400; }
	h1 { color: white; font-weight: 600; margin-bottom: 0;}
	p { color: white;}
	.imagecontainer-screen {
		background: linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%);
	}
	small { color: white;}
	.home-tag { text-transform: capitalize; line-height: 2em;}
	.home-author { text-transform: uppercase; }

	@media screen and (min-width: 900px) {
		.home-tag { font-size: 12px;}
		.home-author { font-size: 14px;}
		#bigscreen h1 { font-size: 2.4rem;}
		#bigscreen { padding: 6em 10vw 0 4vw;}
		cite { padding: 6px 16px; font-size: 12px;}
		#bigscreen-p { font-size: 1em; width: 56%; line-height: 1.4em; margin-bottom: 2em;}
		#navbuttons { right: 0; bottom: 128px; width: 12%; padding: 8px 0 8px 8px; background-color: rgba(0,0,0,0.6); border-radius: 32px 0 0 32px;}
	}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.home-tag { font-size: 12px;}
	.home-author { font-size: 14px;}
	#bigscreen h1 { font-size: 2.4rem;}
	#bigscreen { padding: 2rem}
	cite { padding: 4px 12px; font-size: 12px;}
	#bigscreen-p { font-size: 1em; width: 72%; line-height: 1.4em; margin-top: 1em; margin-bottom: 2em;}
	#navbuttons { right: 0; bottom: 128px; width: 20%; gap: 16px; padding: 8px 0 8px 8px; background-color: rgba(0,0,0,0.6); border-radius: 32px 0 0 32px;}
}	

@media screen and (max-width: 769px) and (min-width: 576px) {
	.home-tag { font-size: 12px;}
	.home-author { font-size: 14px;}
	#bigscreen h1 { font-size: 2rem; width: 80%;}
	#bigscreen { padding: 8em 8vw 4em 8vw;}
	cite { padding: 4px 12px; font-size: 12px;}
	#bigscreen-p { font-size: 1em; width: 72%; line-height: 1.4em; margin-top: 1em; margin-bottom: 2em;}
	#navbuttons { right: 0; bottom: 128px; width: 20%; gap: 16px; padding: 8px 0 8px 8px; background-color: rgba(0,0,0,0.6); border-radius: 32px 0 0 32px;}
}

@media screen and (max-width: 575px) {
	.home-tag { font-size: 12px;}
	.home-author { font-size: 14px;}
	#bigscreen h1 { font-size: 1.6em; font-weight: 600; letter-spacing: 0px; width: 100%; } 
	#bigscreen { padding: 8em 8vw 4em 8vw;}
	cite { padding: 3px 12px; font-size: 12px;}
	#bigscreen-p { font-size: 1em; width: 96%; line-height: 1.24rem; margin-top: 1em; margin-bottom: 2em;}
	#navbuttons { right: 0; bottom: 64px; width: 30%; gap: 16px; padding: 8px 0 8px 8px; background-color: rgba(0,0,0,0.8); border-radius: 32px 0 0 32px;}
}
</style>