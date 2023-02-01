<script>
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation, EffectCards } from 'swiper'
import { scale } from 'svelte/transition'
import { circOut } from 'svelte/easing'
import { lazyLoad } from '$lib/lazyload'
import supabase from '$lib/db'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'
import "swiper/css/effect-cards"

let isModal = false;

function toggleModal() {
	isModal = !isModal
}

export async function getImages(){
	const { data, error } = await supabase
	.from('MidjourneyImages')
	.select()
	.order('imagenumber',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="c-c-c-c">
{#await getImages()}
<small>...</small>
{:then data}
<div class="r-r-r-r image-row">
	{#each data as item}
	<img class="the-image" use:lazyLoad={item.link} alt={item.imagenumber} on:click={toggleModal} on:keydown={toggleModal} />
	{#if isModal}
	<div class="modal-overlay" on:click={toggleModal} on:keydown={toggleModal}
		in:scale="{{duration: 300, delay: 0, opacity: 0, start: 0.1, easing: circOut}}"
		out:scale="{{duration: 300, delay: 0, opacity: 0, start: 0.1, easing: circOut}}"
	>
			<img src={item.link} alt="Modal popup" />
	</div>
	{/if}

{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}
</div>

<style>
.the-image { object-fit: contain; }
.c-c-c-c { height: max-content;}
.modal-overlay { display: flex; flex-direction: column; align-items: center; justify-content: center;}
.r-r-r-r { width: 100%; flex-wrap: wrap; justify-content: center; display: flex; flex-direction: row;}
@media screen and (min-width: 900px) {
	.the-image { width: 20%; object-fit: contain;}
	.image-row { gap: 1em; position: relative;}
	.modal-overlay { width: 100vw; height: 100vh; background: rgba(0,0,0,0.3); backdrop-filter: blur(3px); position: absolute; top: 0; left: 0; z-index: 10;}
	.modal-overlay img { object-fit: contain; width: 600px; height: 600px;}
}


</style>