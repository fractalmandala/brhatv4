<script>
import supabase from '$lib/db'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
export async function getAphorisms() {
	const { data, error} = await supabase
	.from('brhat-aphorisms')
	.select()
	.order('id')
	if (error) throw new Error(error.message)
	return data
}
</script>


<div class="c-c-c-c sectioner a-1" data-scroll-section>
	<p data-textify>
		To be a history in the true sense of the word, a work must be a story of the people inhabiting a country. It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; through efforts of the people to will themselves into organic unity.
	</p>
	<h4 class="green" data-scroll data-scroll-speed="-6" data-textify>
		Such a history of India is still to be written.
	</h4>
	<cite data-textify>Shri KM Munshi</cite>
</div>
<div class="r-r-c-c scrollyboard a-2" data-scroll-section id="sec-one">
	<div class="c-c-c-c colA" data-scroll data-scroll-speed="4">
		<p data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
			with a continuity of untold millennia, the passage of time visible to us in
		</p>
		<h1 data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal">
			itihāsa
		</h1>
	</div>
	<div class="c-c-c-c colB">
		<img src="/images/mandala/itihaas.webp" alt="itihasa"/>
	</div>
</div>
<div class="r-r-c-c scrollyboard a-3" data-scroll-section>
	<div class="c-c-c-c colA">
		<img src="/images/mandala/bharata.webp" alt="bharata"/>
	</div>
	<div class="c-c-c-c colB">
		<p data-scroll data-scroll-speed="4" data-scroll-direction="horizontal">
			information was processed in increasingly complex ways within the physical environment best described as
		</p>
		<h1 data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
			bhārata
		</h1>
	</div>
</div>
<div class="r-r-c-c scrollyboard a-2" data-scroll-section>
	<div class="c-c-c-c colA">
		<p data-scroll data-scroll-speed="2">
			emerged a civilizational consciousness, with multi-level coherence. It is known to us as
		</p>
		<h1 data-scroll data-scroll-speed="6">
			dharma
		</h1>
	</div>
	<div class="c-c-c-c colB">
		<img src="/images/mandala/dharma.webp" alt="dharma"/>
	</div>
</div>
<div class="c-c-c-c a-4" data-scroll-section>
	<h1 data-scroll data-scroll-speed="4">And it is Alive...</h1>
	<img src="/images/mandala/rotator.png" alt="rotator" data-scroll data-scroll-speed="8"/>
</div>
<div class="c-c-c-c a-5" data-scroll-section>
	<div class="c-c-c-c fractal" data-scroll data-scroll-speed="6" data-scroll-direction="horizontal">
		<div class="title">
			Fractal
		</div>
		<div class="def">
			A curve or geometrical figure, each part of which has the same statistical character as the whole. Any of various extremely irregular curves or shapes for which any suitably chosen part is similar in shape to a given larger or smaller part.<br><br>
			<span class="green">A fractal displays the same properties at any magnification level, ie., it is multi-level.</span>
		</div>
	</div>
	<div class="c-c-c-c mandala" data-scroll data-scroll-speed="-6" data-scroll-direction="horizontal">
		<div class="title">
			Maṇḍala
		</div>
		<div class="def">
			A circle or anything circular- globe, circumference, orbit of a celestial object, an array of troops. From the root √maṇḍ (मण्ड्) meaning satisfaction, adornment, wholeness, complete, satisfied (√bhūṣ, √hṛṣ, tuṣṭa, alaṅkāra).<br><br>
				<span class="green">A circle- śūnya or pūrṇam- is where all constituents form a unified whole, ie., it is coherent.</span>
		</div>
	</div>	
</div>
<div class="my-gridder" data-scroll-section>
	<div class="grid-col gc1">
		<div class="c-c-c-c a-simple-box">
			<p>Macrohistoric Case for India's Civilizational Primacy</p>
		</div>
		<div class="c-c-c-c a-simple-box">
			<p>Ratha as a Bīja of Civilizational DNA</p>
		</div>
		<div class="c-c-c-c a-simple-box">
			<p>History is Ontic, Itihāsa Ontologic</p>
		</div>
		<div class="c-c-c-c a-simple-box">
			<p>The Avatāra in You</p>
		</div>
	</div>
	<div class="grid-col gc2">
		<div class="c-c-c-c two-simple-box">
			<h4>Synaptic Reconnection 1</h4>
		</div>
		<div class="c-c-c-c two-simple-box">
			<h4>Synaptic Reconnection 2</h4>
		</div>
	</div>
	<div class="grid-col gc3">
		<div class="c-c-c-c a-simple-box">
			<p>Indian Civilizational Consciousness</p>
		</div>
		<div class="c-c-c-c a-simple-box">
			<p>Ancestors Outside of Time</p>
		</div>
		<div class="c-c-c-c a-simple-box">
			<p>Caturasūtra - 4 Essential Aphorisms</p>
		</div>
		<div class="c-c-c-c a-simple-box">
			<p>Recommended Readings</p>
		</div>
	</div>
</div>
<div class="c-c-c-c" data-scroll-section>
	<Footer></Footer>
</div>



<style>
.a-1 {
	background-image: url('/images/mandala/fractallogo.png');
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	justify-content: center;
	align-items: center;
	text-align: center;
}


.a-1 p { color: #878787; font-weight: 300; margin-bottom: 1em;}
.a-1 h4, .a-4 h1 { font-weight: 600;}
.a-1 h1 cite { color: white; letter-spacing: 0; font-weight: 300; text-transform: uppercase;}
.colA p, .colB p { font-weight: 300; color: white; margin-bottom: 0;}
.sectioner, .scrollyboard {
	width: 100vw;
	height: 100vh;
	background: none;
}

.a-4 {
	width: 100vw;
	background: none;
}

.colA h1, .colB h1 {
	color: #10c56d;
}

.colA img, .colB img {
	object-fit: cover;
	height: 72%;
}


.a-4 h1 {
	font-weight: 600;
}

.a-4 {
	align-items: center;
	justify-content: center;
}

@keyframes rotation {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

.a-simple-box, .two-simple-box { transition: all 0.22s var(--cube3); padding: 1em;}
.a-simple-box:hover, .two-simple-box:hover {backdrop-filter: blur(0); border: 1px solid #10c56d;}
.a-simple-box p, .two-simple-box h4 { color: white;}
.a-simple-box p { transform-origin: center center; transition: all 0.22s var(--cube4);}
.a-simple-box:hover p { transform: scale(0.9);}

@media screen and (min-width: 900px) {
	.sectioner {
		padding-left: 8vw;
		padding-right: 8vw;
		height: 100vh;
	}
	.colA, .colB {
		width: 50%;
		justify-content: center;
	}
	.colB {
		align-items: flex-start !important;
	}
	.colA { 
		align-items: flex-end !important;
	}

	.a-1 p { width: 64%;}
	.a-2 .colA {
		text-align: left;
		padding-left: 8vw;
		padding-right: 2em;
	}
	.colA h1, .colB h1 { font-size: 5em; margin-top: 0.5em; font-weight: 600; letter-spacing: 0;}
	.a-3 .colB {
		padding-right: 8vw;
		padding-left: 2em;
	}

	.a-2 .colB {
		align-items: flex-end;
	}

	.a-4 { height: 100vh;}

	.a-4 img {
		width: 256px;
		height: 256px;
		object-fit: contain;
		transform-origin: center center;
		animation: rotation 4s ease-in infinite alternate-reverse;
	}
	
	.fractal, .mandala {
		height: 100vh;
		padding: 0 6vw;
		justify-content: center;
	}

	.title { font-size: 90px; color: #10C56d; text-transform: uppercase; font-weight: bold;}
	.def { font-size: 20px; color: white; width: 70%;}

	.my-gridder {
		display: flex;
		flex-direction: row;
		height: 100vh;
		width: 100vw;
		background-image: url('/images/mandala/fractalwallpaper2.webp');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		gap: 8px;
	}
	.gc1, .gc3 {
		width: calc(25% - 8px);
	}

	.gc2 { width: calc(50% - 8px);}
	.a-simple-box { height: calc(25% - 10px); border: 1px solid white; margin-top: 8px; margin-bottom: 8px; backdrop-filter: blur(8px);}
	.two-simple-box { height: calc(50% - 12px); border: 1px solid white; margin-top: 8px; margin-bottom: 8px; backdrop-filter: blur(8px); }
	.a-simple-box p { font-size: 1.2em;}
}
</style>
