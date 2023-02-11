<script lang="ts">
import supabase from '$lib/db'
import BannerImage from '$lib/components/headers/BannerImage.svelte'
import { fly } from 'svelte/transition'
import { circOut } from 'svelte/easing'

let scroll: any
let speed = 40

let isEss1 = false
let isEss2 = false
let isEss3 = false
let isEss4 = false
let isEss5 = false
let isEss6 = false
let isEss7 = false
let isEss8 = false
let isEss9 = false

function showEss1() {
	isEss1 = !isEss1
}
function showEss2() {
	isEss2 = !isEss2
}
function showEss3() {
	isEss3 = !isEss3
}
function showEss4() {
	isEss4 = !isEss4
}
function showEss5() {
	isEss5 = !isEss5
}
function showEss6() {
	isEss6 = !isEss6
}
function showEss7() {
	isEss7 = !isEss7
}
function showEss8() {
	isEss8 = !isEss8
}
function showEss9() {
	isEss9 = !isEss9
}

export async function getAphorisms(): Promise<any[]> {
	const { data, error} = await supabase
	.from('brhat-aphorisms')
	.select()
	.order('id')
	if (error) throw new Error(error.message)
	return data
}
</script>

<svelte:window bind:scrollY={scroll} />
<div data-scroll-container id="homebase">
	<div class="c-c-c-c pad4 l1">
		<h5 class="onlyone" data-textify>
		To be a history in the true sense of the word, a work must be a story of the people inhabiting a country.
		</h5>
		<h5 class="onlyone" data-textify id="onlyone">
		It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; through efforts of the people to will themselves into organic unity.
		</h5>
	</div>
	<div class="c-c-c-c pad4 l2" data-scroll-section>
		<h3 data-scroll data-scroll-speed="1">
			Such a history of India is still to be written.
		</h3>
		<p class="grey" data-scroll>
			Shri KM Munshi
		</p>
	</div>

	<div class="r-r-r-r l3" data-scroll-section>
		<div class="c-c-c-c col-image group2">	
		</div>
		<div class="colthree c-c-c-c group3">
			<p>
				A curve or geometrical figure, each part of which has the same statistical character as the whole.
			</p>
			<p>
				Any of various extremely irregular curves or shapes for which any suitably chosen part is similar in shape to a given larger or smaller part.
			</p>
			<h5>
				A fractal displays the same properties at any magnification level, ie., it is multi-level.
			</h5>
		</div>
		<div class="colthree c-c-c-c group1">
			<h2 data-textify data-scroll data-scroll-speed="3">Fractal</h2>
		</div>
	</div>

	<div class="r-r-r-r l4" data-scroll-section>
		<div class="c-c-c-c colthree group1">
			<h2 data-textify data-scroll data-scroll-speed="3">Maṇḍala</h2>
		</div>
		<div class="c-c-c-c colthree group3">
			<p>
				A circle or anything circular- globe, circumference, orbit of a celestial object, an array of troops.
			</p>
			<p>
				From the root √maṇḍ (मण्ड्) meaning satisfaction, adornment, wholeness, complete, satisfied (√bhūṣ, √hṛṣ, tuṣṭa, alaṅkāra).
			</p>
			<h5>
				A circle- śūnya or pūrṇam- is where all constituents form a unified whole, ie., it is coherent.
			</h5>
		</div>
		<div class="c-c-c-c col-image group2"></div>
	</div>
	<div class="c-c-c-c l5" data-scroll-section>
		<h3 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2">
			The Fractal Maṇḍala is a project to study the emergence and nature of <span class="green">Indian civilizational consciousness.</span>
		</h3>
	</div>
	<div class="c-c-c-c l7" data-scroll-section style:transform={`translate3d(0, ${scroll / speed}px, 0)`}>
	</div>
	<div class="r-r-r-r l8" data-scroll-section>
		<div class="c-c-c-c l6">
			<div class="c-c-c-c essbox1" data-scroll on:mouseenter={showEss1} on:mouseleave={showEss1}>
				<h5 data-textify>On Indian Civilizational Consciousness</h5>
			</div>
			<div class="c-c-c-c essbox2" data-scroll on:mouseenter={showEss2} on:mouseleave={showEss2}>
				<h5 data-textify>Fractal Maṇḍala - Meaning, Instances</h5>
			</div>
			<div class="c-c-c-c essbox3" data-scroll on:mouseenter={showEss3} on:mouseleave={showEss3}>
				<h5 data-textify>Macrohistoric Case for Civilizational Primacy</h5>
			</div>
			<div class="c-c-c-c essbox4" data-scroll on:mouseenter={showEss4} on:mouseleave={showEss4}>
				<h5 data-textify>Caturasūtra - 4 Aphorisms for a True History</h5>
			</div>
			<div class="c-c-c-c essbox5" data-scroll on:mouseenter={showEss5} on:mouseleave={showEss5}>
				<h5 data-textify>Ratha as a Bīja</h5>
			</div>
			<div class="c-c-c-c essbox6" data-scroll on:mouseenter={showEss6} on:mouseleave={showEss6}>
				<h5 data-textify>Ancestors Outside of Time</h5>
			</div>
			<div class="c-c-c-c essbox7" data-scroll on:mouseenter={showEss7} on:mouseleave={showEss7}>
				<h5 data-textify>History is Ontic, Itihāsa Ontologic</h5>
			</div>
			<div class="c-c-c-c essbox8" data-scroll on:mouseenter={showEss8} on:mouseleave={showEss8}>
				<h5 data-textify>Synaptic Reconnection</h5>
			</div>
			<div class="c-c-c-c essbox9" data-scroll on:mouseenter={showEss9} on:mouseleave={showEss9}>
				<h5 data-textify>Rāma's Journey, the Avatāra in You</h5>
			</div>
		</div>
		<div class="c-c-c-c l9">
			{#if isEss1}
			<img src="/images/mandala/web4.webp" alt="alt1"
				in:fly="{{delay: 100, opacity: 1, duration: 200, x: 0, y: 800, easing: circOut}}"
				out:fly="{{delay: 0, opacity: 1, x: 0, y: 800, duration: 200, easing: circOut}}"
			 />
			{/if}
			{#if isEss2}
			<img src="/images/mandala/web3.webp" alt="alt1"
				in:fly="{{delay: 100, opacity: 1, duration: 200, x: 0, y: 800, easing: circOut}}"
				out:fly="{{delay: 0, opacity: 1, x: 0, y: 800, duration: 200, easing: circOut}}"
			 />
			{/if}
			{#if isEss3}
			<img src="/images/mandala/web4.webp" alt="alt1"
				in:fly="{{delay: 100, opacity: 1, duration: 200, x: 0, y: 800, easing: circOut}}"
				out:fly="{{delay: 0, opacity: 1, x: 0, y: 800, duration: 200, easing: circOut}}"
			 />
			{/if}
			{#if isEss4}
			<img src="/images/mandala/web1.webp" alt="alt1"
				in:fly="{{delay: 100, opacity: 1, duration: 200, x: 0, y: 800, easing: circOut}}"
				out:fly="{{delay: 0, opacity: 1, x: 0, y: 800, duration: 200, easing: circOut}}"
			 />
			{/if}
			{#if isEss5}
			<img src="/images/mandala/web8.webp" alt="alt1"
				in:fly="{{delay: 100, opacity: 1, duration: 200, x: 0, y: 800, easing: circOut}}"
				out:fly="{{delay: 0, opacity: 1, x: 0, y: 800, duration: 200, easing: circOut}}"
			 />
			{/if}
			{#if isEss6}
			<img src="/images/mandala/web5.webp" alt="alt1"
				in:fly="{{delay: 100, opacity: 1, duration: 200, x: 0, y: 800, easing: circOut}}"
				out:fly="{{delay: 0, opacity: 1, x: 0, y: 800, duration: 200, easing: circOut}}"
			 />
			{/if}
			{#if isEss7}
			<img src="/images/mandala/web9.webp" alt="alt1"
				in:fly="{{delay: 100, opacity: 1, duration: 200, x: 0, y: 800, easing: circOut}}"
				out:fly="{{delay: 0, opacity: 1, x: 0, y: 800, duration: 200, easing: circOut}}"
			 />
			{/if}
			{#if isEss8}
			<img src="/images/mandala/web7.webp" alt="alt1"
				in:fly="{{delay: 100, opacity: 1, duration: 200, x: 0, y: 800, easing: circOut}}"
				out:fly="{{delay: 0, opacity: 1, x: 0, y: 800, duration: 200, easing: circOut}}"
			 />
			{/if}
			{#if isEss9}
			<img src="/images/mandala/web6.webp" alt="alt1"
				in:fly="{{delay: 100, opacity: 1, duration: 200, x: 0, y: 800, easing: circOut}}"
				out:fly="{{delay: 0, opacity: 1, x: 0, y: 800, duration: 200, easing: circOut}}"
			 />
			{/if}
		</div>
	</div>
</div>

<style>
.l3, .l4, .l5, .l8, .l7 { background: white;}

.l5 h3 { text-transform: uppercase;}

.colthree h2 { color: #10c56d;}

.l2 h3 {
	font-family: 'Readex Pro', sans-serif;
	font-weight: 300;
	text-align: right;
	line-height: 1.12;
	color: #10C56D;
}

.essbox1 { cursor: pointer; transform-origin: center left; transition: all 0.3s var(--cube3);}
.essbox1:hover { transform: scale(0.9);}
.grey { color: #676767;}

.l3 .col-image {
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url('/images/mandala/defone.webp');
}
.l4 .col-image {
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url('/images/mandala/deftwo.webp');
}

@media screen and (min-width: 768px) {

	.l1 h5 {
		font-size: 18px;
		font-family: 'Readex Pro',sans-serif;
		font-weight: 300;
		letter-spacing: -0.5px;
		color: #171717;
		text-shadow: none;
		filter: none;
		width: 45%;
	}

	.l1 {
		width: 100%;
		height: 100vh;
		justify-content: center;
		align-items: flex-start;
		text-align: left;
	}

	.l2 {
		height: 100vh;
		width: 100%;
		justify-content: center;
		align-items: flex-end;
	}

	.l5 {
		padding: 0 6vw;
		height: 100vh;
		justify-content: center;
	}

	.l3, .l4 {
		height: 400px;
		width: 100vw;
		padding-left: 6vw;
		padding-right: 6vw;
		gap: 32px;
		align-items: flex-start;
		padding-bottom: 32px;
		padding-top: 32px;
	}
	.col-image { width: 35%; }
	.l3 .col-image {
		height: 100%;
	}
	.l4 .col-image {
		height: 100%;
	}
	.l3 .colthree h2 { text-align: right;}
	.l3 .colthree h2, .l4 .colthree h2 { font-size: 72px; text-transform: uppercase; margin-top: -16px; padding-top: 0; }
	.l3 h5, .l3 p, .l4 p, .l4 h5 { margin-top: 0;}

	.colthree {
		width: calc(35% - 32px);
		height: 100%;
	}

	.colthree p { color: #171717;}

	.l2 h3 {
		width: 50%;
	}

	.l8 {
		padding: 4em 6vw 64px 6vw;
		justify-content: flex-start;
		min-height: 100vh;
		align-items: center;
	}
	
	.l6, .l9 { width: 50%;}
	.l9 { 
		height: 100%;
		justify-content: center;
	}
	.l9 img {
		object-fit: cover;
		width: 100%;
		height: 80%;
	}	

	.l6 .c-c-c-c {
		width: 100%;
		margin-bottom: 32px;
	}

	.l6 .c-c-c-c h5 {
		margin: 0;
		font-weight: 400;
		font-size: 32px;
	}
	
	.l7 {
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url('/images/mandala/realitywall.webp');
		margin-left: 6vw;
		margin-right: 6vw;
		width: 88vw;
		height: 80vh;
	}

}

@media screen and (max-width: 767px) {

	.l1 { padding: 8em 4vw 0 4vw;}
	.l2, .l3, .l4, .l6, .l5 { padding-right: 5vw; padding-left: 5vw;}
	.l2 h3 { text-align: left; margin-top: 8px; }
	.l3, .l4 { flex-wrap: wrap; justify-content: flex-start; margin-top: 32px; margin-bottom: 32px;}
	.group1 { order: 1;}
	.group2 { order: 2;}
	.group3 { order: 3;}
	.l3 .col-image, .l4 .col-image { height: 300px; width: 100%;}
	.l3 .colthree h2, .l4 .colthree h2 {
		text-align: left;
		margin-bottom: 0;
	}
	.l3 .colthree h5, .l4 .colthree h5 {
		margin-top: 0;
		margin-bottom: 16px;
	}
	.l6 .c-c-c-c {
		width: 100%;
		margin-bottom: 20px;
	}

	.l6 {
		padding-top: 2em;
		padding-bottom: 2em;
	}

	.l6 .c-c-c-c h5 {
		margin: 0;
		font-weight: 300;
		font-size: 21px;
	}


}

</style>