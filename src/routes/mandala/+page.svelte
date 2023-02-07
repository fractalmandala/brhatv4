<script>
import supabase from '$lib/db'

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
	<h5>
		To be a history in the true sense of the word, a work must be a story of the people inhabiting a country. It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; <span class="green">through efforts of the people to will themselves into organic unity.</span>
	</h5>
	<h4 data-scroll data-scroll-speed="-6">
		Such a history of India is still to be written.<br>
		<cite>Shri KM Munshi</cite>
	</h4>
</div>
<div class="r-r-c-c scrollyboard a-2" data-scroll-section id="sec-one">
	<div class="c-c-c-c colA">
		<h4 data-scroll data-scroll-speed="2">
			with a continuity of untold millennia, the passage of time visible to us in
		</h4>
		<h1 data-scroll data-scroll-speed="6">
			itihāsa
		</h1>
	</div>
	<div class="c-c-c-c colB">
		<img src="/images/mandala/itihaas.webp" alt="itihasa" data-scroll data-scroll-speed="3" data-scroll-sticky data-scroll-target="#sec-one"/>
	</div>
</div>
<div class="r-r-c-c scrollyboard a-3" data-scroll-section>
	<div class="c-c-c-c colA">
		<img src="/images/mandala/bharata.webp" alt="bharata" data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal"/>
	</div>
	<div class="c-c-c-c colB">
		<h4 data-scroll data-scroll-speed="2">
			information was processed in increasingly complex ways within the physical environment best described as
		</h4>
		<h1 data-scroll data-scroll-speed="6">
			bhārata
		</h1>
	</div>
</div>
<div class="r-r-c-c scrollyboard a-2" data-scroll-section>
	<div class="c-c-c-c colA">
		<h4 data-scroll data-scroll-speed="2">
			emerged a civilizational consciousness, with multi-level coherence. It is known to us as
		</h4>
		<h1 data-scroll data-scroll-speed="6">
			dharma
		</h1>
	</div>
	<div class="c-c-c-c colB">
		<img src="/images/mandala/dharma.webp" alt="dharma" data-scroll data-scroll-speed="3" data-scroll-direction="horizontal"/>
	</div>
</div>
<div class="c-c-c-c a-4" data-scroll-section>
	<h1 data-scroll data-scroll-speed="4">And it is Alive...</h1>
	<img src="/images/mandala/rotator.png" alt="rotator" data-scroll data-scroll-speed="8"/>
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
<div class="c-c-c-c a-6" data-scroll-section>
	<div class="r-r-c-c buttons-row">
		<button class="greenbuttons"><a href="/mandala/aphorisms">Caturasūtra - 4 Aphorisms for Civilizational Consciousness</a></button>
		<button class="greenbuttons"><a href="/mandala/synaptic">Synaptic Reconnection to Civilizational Consciousness</a></button>
	</div>
	<div class="r-r-r-r essays">

	</div>
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

.a-1 h4 { color: white;}
.a-1 h5 { color: #878787; font-weight: 300; margin-bottom: 1em;}
.a-1 h4, .a-4 h1 { color: white; font-weight: 600;}
.a-1 h1 cite { color: white; letter-spacing: 0; font-weight: 300; text-transform: uppercase;}

.sectioner, .scrollyboard {
	width: 100vw;
	height: 100vh;
	background: none;
}

.a-4 {
	width: 100vw;
	background: none;
}


.a-6 {
	min-height: 100vh;
}

.buttons-row {
	justify-content: center;
}

.colA h1, .colB h1 {
	color: #10c56d;
}

.colA h4, .colB h4 {
	color: white;
}

.colA img, .colB img {
	object-fit: cover;
	border-radius: 8px;
}

.a-4 h1 {
	font-weight: 600;
}

.a-4 {
	align-items: center;
}


	.greenbuttons {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: 2px solid #10C56D;
  border-radius: 0.6em;
  color: #10C56D;
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

	.greenbuttons:hover, .greenbuttons:focus {
		color: #fff;
  	outline: 0;
	}

	.greenbuttons:hover {
		box-shadow: 0 0 40px 40px #10C56D inset;
		transform: scale(0.9);
	}

	.greenbuttons a { color: white;}

@keyframes rotation {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

@media screen and (min-width: 900px) {
	.sectioner {
		padding-left: 8vw;
		padding-right: 8vw;
	}
	.colA, .colB {
		width: 50%;
		justify-content: center;
	}
	.a-2 .colA {
		text-align: right;
		padding-left: 8vw;
	}
	.a-3 .colB {
		padding-right: 8vw;
	}
	.colA img, .colB img {
		height: 80%;
		width: 88%;
	}
	.a-2 .colB {
		align-items: flex-end;
	}

	.a-4 img {
		width: 256px;
		height: 256px;
		object-fit: contain;
		transform-origin: center center;
		animation: rotation 4s ease-in infinite alternate-reverse;
	}
	
	.fractal, .mandala {
		min-height: 100vh;
	}

	.title { font-size: 120px; color: #10C56d; text-transform: uppercase; font-weight: bold;}
	.def { font-size: 48px; color: white;}
	.buttons-row { gap: 2em;}
	.greenbuttons {
		width: 30%;
	}

}
</style>
