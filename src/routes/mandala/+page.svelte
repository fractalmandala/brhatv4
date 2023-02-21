<script lang="ts">
import { reveal } from 'svelte-reveal'
import { onMount } from 'svelte';
import { blur, fly } from 'svelte/transition'
import { cubicOut } from 'svelte/easing'
import Animations from 'textify.js';
import '$lib/styles/textify.css'
let y: number
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
<div style="background: white">
	<div class="imagecontainer-hero"></div>
	<div class="c-c-c-c pad4 l2">
		<p>
			To be a history in the true sense of the word, a work must be a story of the people inhabiting a country.
		</p>
		<p>
			It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; through efforts of the people to will themselves into organic unity.
		</p>
		<h5>
			Such a history of India is still to be written.
		</h5>
		<small style="color: #10C56D">
				Shri KM Munshi
		</small>
	</div>
	<div class="c-c-c-c pad4 l3">
		<h4 class="weight200">
			Fractal Maṇḍala is a project to research and articulate the emergence of Indian civilizational consciousness. It is the story of ancient Indians willing themselves into organic unity.
		</h4>
	</div>

</div>

<style>


.imagecontainer-hero {
	background-image: url('/images/mandala/1132-m1-1.webp');
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





@media screen and (min-width: 768px) {

	:root {
		--mope: 10;
	}


	.l2, .l3 {
	height: 100vh;
	justify-content: center;
	}
	.l2 p, .l2 h5, .l3 h4 { margin-top: 0; width: 75%;}


}


@media screen and (max-width: 767px) {



	:root {
		--mope: 1;
	}	


}

</style>