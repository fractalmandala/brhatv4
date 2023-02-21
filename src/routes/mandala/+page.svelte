<script lang="ts">
import { reveal } from 'svelte-reveal'
import { onMount } from 'svelte';
import { blur, fly } from 'svelte/transition'
import { cubicOut } from 'svelte/easing'
import Animations from 'textify.js';
import '$lib/styles/textify.css'
let y: 1
let resp = 1
let divider = 1

$: if (resp > 576 ) {
	divider = 80
} else
	{
		divider = 600
	}

let isMe1 = false
let isMe2 = false
let isMe3 = false
let isMe4 = false
let isMe5 = false
let isMe6 = false
let isMe7 = false
let isMe8 = false
let isMe9 = false

function changeW1(){
	isMe1 = !isMe1
}
function changeW2(){
	isMe2 = !isMe2
}
function changeW3(){
	isMe3 = !isMe3
}
function changeW4(){
	isMe4 = !isMe4
}
function changeW5(){
	isMe5 = !isMe5
}
function changeW6(){
	isMe6 = !isMe6
}
function changeW7(){
	isMe7 = !isMe7
}
function changeW8(){
	isMe8 = !isMe8
}
function changeW9(){
	isMe9 = !isMe9
}



const { Textify } = Animations;
const { TextifyTitle } = Animations;

onMount(() => {
	new Textify({
    duration: 400,
    stagger: 40,
    once: false,
		fade: true,
		reveal: true,
    easing: "circInOut"
  });
  new TextifyTitle({
    duration: 600,
    stagger: 100,
    once: false,
		reveal: true
  });
});

</script>

<svelte:window bind:scrollY={y} bind:innerWidth={resp}/>

	<div class="flexbox-c full imgbox l00">
	  <!--
		<img src="/images/mandala/ogmandala.webp" alt="hero" style="transform: scale({y/3000}) translateY({y}px) rotate({y}deg)"/>
    -->
	</div>
	<div class="flexbox-c pad-x-40 l2">
		<h5 class="w300">
			To be a history in the true sense of the word, a work must be a story of the people inhabiting a country.
		</h5>
		<h5 class="w300">
			It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; through efforts of the people to will themselves into organic unity.
		</h5>
		<h3>
			Such a history of India is still to be written.
		</h3>
		<small style="color: #10C56D">
				Shri KM Munshi
		</small>
	</div>
	<div class="flexbox-r full pad-x-40 l5">
		<div class="in-col im-col wide40">
				<img src="/images/mandala/itihaas.webp" alt="itihas"/>
		</div>
		<div class="in-col wide60 pad-x-l">
			<h6 class="w300 m-bot-zero">
			with a continuity of untold millennia, the passage of time visible to us in
			</h6>
			<h2 class="green-grd wbold m-top-zero">Itihāsa</h2>
		</div>
	</div>

	<div class="flexbox-r full pad-x-40 l6">
		<div class="in-col im-col wide40">
				<img src="/images/mandala/bharata.webp" alt="bharat"/>
		</div>
		<div class="in-col wide60 pad-x-l">
			<h6 class="w300 m-bot-zero">
			information was processed in increasingly complex ways within the physical environment best described as
			</h6>
			<h2 class="green-grd wbold m-top-zero">Bhārata</h2>
		</div>
	</div>

	<div class="flexbox-r full pad-x-40 l7">
		<div class="in-col im-col wide40">
				<img src="/images/mandala/dharma.webp" alt="dharma"/>
		</div>
		<div class="in-col wide60 pad-x-l">
			<h6 class="w300 m-bot-zero">
			emerged a civilizational consciousness, with multi-level coherence. It is known to us as
			</h6>
			<h2 class="green-grd wbold m-top-zero">Dharma</h2>
		</div>
	</div>

	<div class="flexbox-c pad-x-40 full l3">
		<h2 class="weight200">
			Fractal Maṇḍala is a project to research and articulate the emergence of Indian civilizational consciousness.
		</h2>
		<div class="in-col pad-y-b wide60">
			<h5 class="w300"><a href="/mandala/meaning">Fractal Maṇḍala - Definition, Instances</a></h5>
			<h5 class="w300"><a href="/mandala/fractals/civcon">On Indian Civilizational Consciousness</a></h5>
			<h5 class="w300"><a href="/mandala/fractals/aphorisms">Caturasūtra - 4 Aphorisms</a></h5>
			<h5 class="w300"><a href="/mandala/fractals/essay1">The Macrohistoric Case</a></h5>
			<h5 class="w300"><a href="/mandala/fractals/essay2">Ratha as a Bīja</a></h5>
			<h5 class="w300"><a href="/mandala/fractals/ancestors">Ancestors Outside of Time</a></h5>
			<h5 class="w300"><a href="/mandala/fractals/">History is Ontic, Itihāsa is Ontologic</a></h5>
			<h5 class="w300"><a href="/mandala/fractals/">Synaptic Reconnection</a></h5>
			<h5 class="w300"><a href="/mandala/fractals/">Rāma's Journey</a></h5>
		</div>
	</div>



<style>


.l00 {
	background-image: url('/images/mandala/1131-m2-1.webp');
}



.l00 {
	justify-content: flex-start;
	align-items: center;
}
@keyframes selfwiden {
	from { width: calc(100%/9);}
	to { width: 60%;}
}

@keyframes textshowing {
	
0% { opacity: 0; display: block;}
100% { opacity: 1; display: block;}

}



@keyframes bouncing{
0% { transform: scale(1);}
50% { transform: scale(0.4);}
100% { transform: scale(1);}
}



@keyframes revealer {
  0% {
    width: 100%;
  }
  100% {
    margin-left: 100%;
  }
}


.l5 img {
	object-fit: cover;
	width: 512px;
	height: 512px;
}

@media screen and (min-width: 768px) {

	:root {
		--mope: 10;
	}


	.l2 {
	height: 100vh;
	justify-content: center;
	}
	.l3 { justify-content: flex-start;}
  .l3 .in-col h5 { margin-top: 12px; margin-bottom: 0; padding-bottom: 12px; border-bottom: 1px solid #f1f1f1;}
	.l3 a:hover { color: #10c56d;}


}


@media screen and (max-width: 767px) {



	:root {
		--mope: 1;
	}	


}

</style>