<script lang="ts">
import { onMount } from 'svelte';
import Animations from 'textify.js';
import '$lib/styles/textify.css'
let y= 1
let resp = 1
let divider = 1
let observer: IntersectionObserver
let img
let parallaxdiv: Element

$: if (resp > 576 ) {
	divider = 80
} else
	{
		divider = 600
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
  observer = new IntersectionObserver(handleIntersection, observerOptions);
  observer.observe(parallaxdiv);
  return () => {
    observer.disconnect();
    window.removeEventListener('scroll', handleScroll);
  };
});

const observerOptions = {
	rootMargin: '0px',
	threshold: 0.5,
}

const handleIntersection = (entries: [any]) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    window.addEventListener('scroll', handleScroll);
  } else {
    window.removeEventListener('scroll', handleScroll);
  }
};

const handleScroll = () => {
	y = window.scrollY
}


</script>

<svelte:window bind:scrollY={y} bind:innerWidth={resp}/>

	<div class="flexbox-c imgbox l00">

	</div>
	<div class="flexbox-c desk-margins l2">

		<h5 class="w400 grey">
			To be a history in the true sense of the word, a work must be a story of the people inhabiting a country.
		</h5>
		<h5 class="w400 grey">
			It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; through efforts of the people to will themselves into organic unity.
		</h5>
		<h3>
			Such a history of India is <span class="green"> still</span> to be written.
		</h3>
		<small class="wbold" style="color: #10D56C">
				Shri KM Munshi
		</small>
	</div>
	<div class="flexbox-r full desk-margins col-image l5" bind:this={parallaxdiv}>
		<div class="in-col im-col wide40" style="transform: translateY({-y/10}px)" bind:this={parallaxdiv}>
				<img src="/images/mandala/itihaas.webp" alt="itihas" style="transform: translateY({y/15}px)"/>
		</div>
		<div class="in-col non-im-col wide60 pad-x-l">
			<h6 class="w400">
			with a continuity of untold millennia, the passage of time visible to us in
			</h6>
			<h2 class="green-grd wbold m-top-zero">Itihāsa</h2>
		</div>
	</div>

	<div class="flexbox-r full desk-margins col-image l6">
		<div class="in-col im-col wide40">
				<img src="/images/mandala/bharata.webp" alt="bharat"/>
		</div>
		<div class="in-col non-im-col wide60 pad-x-l">
			<h6 class="w400">
			information was processed in increasingly complex ways within the physical environment best described as
			</h6>
			<h2 class="green-grd wbold m-top-zero">Bhārata</h2>
		</div>
	</div>

	<div class="flexbox-r full desk-margins col-image l7">
		<div class="in-col im-col wide40">
				<img src="/images/mandala/dharma.webp" alt="dharma"/>
		</div>
		<div class="in-col non-im-col wide60 pad-x-l">
			<h6 class="w400">
			emerged a civilizational consciousness, with multi-level coherence. It is known to us as
			</h6>
			<h2 class="green-grd wbold m-top-zero">Dharma</h2>
		</div>
	</div>

<div class="container">
  <div class="column1">
    <div class="box"></div>
    <div class="box-1" id="bb1">
			<a href="/mandala/meaning">Fractal Maṇḍala - Definition, Instances</a>
		</div>
    <div class="box-2" id="bb2">
			<a href="/mandala/fractals/aphorisms">Caturasūtra - 4 Aphorisms</a>
		</div>
    <div class="box-3">
      <div class="box-9" id="bb8">
				<a href="/mandala/fractals/essay2">Ratha as a Bīja</a>
			</div>
      <div class="box-10" id="bb9">
				<a href="/mandala/fractals/">Rāma's Journey</a>
			</div>
    </div>
    <div class="box-6" id="bb5">
			<a href="/mandala/fractals/ancestors">Ancestors Outside of Time</a>
		</div>
    <div class="box-7" id="bb6">
			<a href="/mandala/fractals/synaptic">Synaptic Reconnection</a>
		</div>
    <div class="box-8" id="bb7">
			<a href="/mandala/fractals/">History is Ontic, Itihāsa is Ontologic</a>
		</div>
  </div>
  <div class="column3">
    <div class="box-4" id="bb3">
			<a href="/mandala/fractals/civcon">On Indian Civilizational Consciousness</a>
		</div>
    <div class="box-5" id="bb4">
			<a href="/mandala/fractals/essay1">The Macrohistoric Case</a>
		</div>
  </div>
</div>


<style>
.im-col, .in-col { overflow: hidden;}
.container a { color: white; z-index: 10; opacity: 0;}
#bb1, #bb2, #bb3, #bb4, #bb5, #bb6, #bb7, #bb8, #bb9 {
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	border: 4px solid white;
	position: relative;
	align-items: center;
	justify-content: center;
	display: flex;
	transition: transform 0.3s var(--cubee);
}
#bb1:hover, #bb2:hover, #bb3:hover, #bb4:hover, #bb5:hover, #bb6:hover, #bb7:hover, #bb8:hover, #bb9:hover { transform: scale(1.1); z-index: 12;}

#bb1:hover a, #bb2:hover a, #bb3:hover a, #bb4:hover a, #bb5:hover a, #bb6:hover a, #bb7:hover a, #bb8:hover a, #bb9:hover a { opacity: 1;}

#bb1::after, #bb2::after, #bb3::after, #bb4::after, #bb5::after, #bb6::after, #bb7::after, #bb8::after, #bb9::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	content: '';
	transition: all 0.3s var(--cubea);
	z-index: 0;
	backdrop-filter: blur(2px);
	background: linear-gradient(0deg, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.4) 100%);
}

#bb1:hover::after, #bb2:hover::after, #bb3:hover::after, #bb4:hover::after, #bb5:hover::after, #bb6:hover::after, #bb7:hover::after, #bb8:hover::after, #bb9:hover::after {
	background: linear-gradient(0deg, rgba(0,0,0,0.0) 10%, rgba(0,0,0,0.0) 100%);
	backdrop-filter: blur(0);
}

#bb1 { background-image: url('/images/mandala/defone.webp');}
#bb2 { background-image: url('/images/mandala/hindugraphic.png');}
#bb3 { background-image: url('/images/mandala/web1.webp');}
#bb4 { background-image: url('/images/mandala/web9.webp');}
#bb5 { background-image: url('/images/mandala/web8.webp');}
#bb6 { background-image: url('/images/mandala/web5.webp');}
#bb7 { background-image: url('/images/mandala/web6.webp');}
#bb8 { background-image: url('/images/mandala/web7.webp');}
#bb9 { background-image: url('/images/mandala/dharma.webp');}

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



@media screen and (min-width: 768px) {
	.container a { font-size: 24px; font-weight: bold; background-color: rgba(0,0,0,0.7); padding: 3px 10px;}
	.l00 { height: 100vh;}

	:root {
		--mope: 10;
	}


	.l2 {
	height: 100vh;
	justify-content: center;
	}
}


@media screen and (max-width: 767px) {
 .l00 { height: 30vh; margin-top: 64px;}

	:root {
		--mope: 1;
	}	


}

.container {  display: grid;
	height: 100vh;
	width: 100vw;
  grid-template-columns: 1.8fr 0.6fr;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "column1 column3";
}

.column1 {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-area: column1;
}

.box { grid-area: 3 / 1 / 4 / 4; }

.box-1 { grid-area: 1 / 1 / 3 / 3; }

.box-2 { grid-area: 1 / 3 / 2 / 4; }

.box-3 {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "box-9 box-9 box-9"
    "box-10 box-10 box-10";
  grid-area: 2 / 3 / 3 / 4;
}

.box-9 { grid-area: box-9; }

.box-10 { grid-area: box-10; }

.box-6 {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . .";
  grid-area: 3 / 1 / 4 / 2;
}

.box-7 { grid-area: 3 / 2 / 4 / 3; }

.box-8 { grid-area: 3 / 3 / 4 / 4; }

.column3 {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "box-4 box-4 box-4"
    "box-5 box-5 box-5"
    "box-5 box-5 box-5";
  grid-area: column3;
}

.box-4 { grid-area: box-4; }

.box-5 { grid-area: box-5; }



</style>