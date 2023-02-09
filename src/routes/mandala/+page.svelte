<script lang="ts">
import supabase from '$lib/db'
import LogFm from '$lib/components/logos/LogFm.svelte'

export async function getAphorisms(): Promise<any[]> {
	const { data, error} = await supabase
	.from('brhat-aphorisms')
	.select()
	.order('id')
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="black-beauty" data-scroll-container>
	<div class="c-c-c-c sectioner a-1" data-scroll-section>
		<div class="is-svg">
			<LogFm></LogFm>
		</div>
	</div>
	<div class="c-c-c-c sectioner a-1" data-scroll-section>
		<div class="opener" style="text-align: left">
			<p data-textify>To be a history in the true sense of the word, a work must be a story of the people inhabiting a country. It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; through efforts of the people to will themselves into organic unity.</p>
			<h2 data-textify>Such a history of India is still to be written.</h2>
			<cite data-textify>Shri KM Munshi</cite>
		</div>
	</div>
	<div class="r-r-c-c columnas colitihas" id="trial" data-scroll-section>
		<div class="c-c-c-c onleft">
			<div class="opener">
				<h5 data-scroll data-textify>with a continuity of untold millennia, the passage of time visible to us in</h5>
				<h1 data-textify data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal">itihāsa</h1>
			</div>
		</div>
			<div class="c-c-c-c onright" id="firstpaper" data-scroll data-scroll-speed="4">
			</div>
	</div>
	<div class="r-r-c-c columnas" data-scroll-section>
		<div class="c-c-c-c onleft">
				<div class="opener">
					<h5 data-scroll data-textify>information was processed in increasingly complex ways within the physical environment best described as</h5>
					<h1 data-textify data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal">bhārata</h1>
				</div>
			</div>
			<div class="c-c-c-c onright">
				<img data-scroll data-scroll-speed="8" data-scroll-direction="horizontal" src="/images/mandala/bharata.webp" alt="itihas"/>
			</div>
	</div>

	<div class="r-r-c-c columnas" data-scroll-section>
			<div class="c-c-c-c onleft">
					<img data-scroll data-scroll-speed="-8" data-scroll-direction="horizontal" src="/images/mandala/dharma.webp" alt="itihas"/>
			</div>
			<div class="c-c-c-c onright">
				<div class="opener">
					<h5 data-scroll data-textify>emerged a civilizational consciousness, with multi-level coherence. It is known to us as</h5>
					<h1 data-textify data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal">dharma</h1>
				</div>
			</div>
	</div>
	<div class="c-c-c-c explain" data-scroll-section data-textify>
		<h1>and it is alive...</h1>
	</div>
	<div class="c-c-c-c fractal" data-scroll-section>
		<div class="sachin">
			fractal
		</div>
		<div class="opener" data-textify>
			A curve or geometrical figure, each part of which has the same statistical character as the whole. Any of various extremely irregular curves or shapes for which any suitably chosen part is similar in shape to a given larger or smaller part. A fractal displays the same properties at any magnification level, ie., it is multi-level.
		</div>
	</div>
	<div class="c-c-c-c mandala" data-scroll-section>
		<div class="sachin">
			maṇḍala
		</div>
		<div class="opener" style="text-align: left" data-textify>
			A circle or anything circular- globe, circumference, orbit of a celestial object, an array of troops. From the root √maṇḍ (मण्ड्) meaning satisfaction, adornment, wholeness, complete, satisfied (√bhūṣ, √hṛṣ, tuṣṭa, alaṅkāra). A circle- śūnya or pūrṇam- is where all constituents form a unified whole, ie., it is coherent.
		</div>	
	</div>  
	<div class="r-r-c-c" data-scroll-section id="holdsit">
		<div class="slide-col imb1" data-scroll data-scroll-speed="1" data-scroll-direction="horizontal" data-scroll-target="#holdsit">
			<h5>Fractal Māṇḍala Essays</h5>
		</div>
		<div class="slide-col imb2" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal" data-scroll-target="#holdsit">
			<h5>Schema for Synaptic Reconnection</h5>
		</div>
		<div class="slide-col imb3" data-scroll data-scroll-speed="1" data-scroll-direction="horizontal" data-scroll-target="#holdsit">
			<h5>Caturasūtra - 4 Aphorisms for Civilizational Consciousness</h5>
		</div>
		<div class="slide-col imb4" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal" data-scroll-target="#holdsit">
			<h5>Roadmap</h5>
		</div>
	</div>
</div>



<style>

.a-1 {
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	justify-content: center;
	text-align: center;
}

.imb1, .imb2, .imb3, .imb4 {
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	justify-content: center;
	border: 2px solid white;
}

.imb1 {
	background-image: url('/images/mandala/itihaas.webp');
}
.imb2 {
	background-image: url('/images/mandala/bharata.webp');
}
.imb3 {
	background-image: url('/images/mandala/dharma.webp');
}
.imb4 {
	background-image: url('/images/mandala/lotus.webp');
}
	@keyframes curtains {
		0% { width: 100%;}
	100% { width: 0%;}
	}	

.opener { color: white;}

@keyframes rotation {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

#firstpaper {
	background-image: url('/images/mandala/itihaas.webp');
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
}

.onright img {
	object-fit: cover;
	width: 100%;
}

#trial { overflow: hidden;}

.black-beauty { position: relative;}
#holdsit { top: 800vh; position: absolute; left: 0; position: sticky; z-index: 0;}

@media screen and (min-width: 900px) {

	.is-svg {
		height: 200px;
		display: flex;
	}

	.columnas {
		padding-left: 4vw;
	}

	.opener, .opener p {
		font-weight: 200;
		font-size: 32px;
		letter-spacing: -2px;
		color: white;
	}

	.opener p { width: 64%;}

	.opener h5 {
		font-weight: 200;
		font-size: 32px;
		letter-spacing: -2px;
		width: 100%;
		color: white;
	}

	.opener h1 {
		font-size: 120px;
		margin-top: 0;
		color: #10C56D;
		text-shadow: 4px 4px 8px #111111;
	}

	.opener h2 {
		font-size: 64px;
		margin-top: 8px;
		margin-bottom: 8px;
		color: #10C56D;
	}

	.opener cite {
		font-size: 20px;
		letter-spacing: 0px;
	}

	.sachin {
		text-transform: uppercase;
		font-weight: 700;
		font-size: 96px;
		margin-bottom: 8px;
		color: #10C56D;
	}


	cite {
		font-size: 1.4em;
		color: white;
		padding-left: 4px;
	}
	.a-1 {
		width: 100%;
		text-align: left;
		height: 100vh;
		padding: 0 4vw;
	}
	
	.r-r-c-c {
		height: 100vh;
	}

	.sectioner {
		padding-left: 4vw;
		padding-right: 4vw;
		height: 100vh;
	}

	.explain {
		height: 100vh;
		align-items: center;
		justify-content: center;
	}

	.explain h1 {
		font-size: 96px;
		color: white;
		margin-bottom: 0;
		margin-top: 8px;
	}

	#holdsit .slide-col {
		width: 25%;
		height: 100%;
		position: relative;
		justify-content: center;
		align-items: center;
		padding: 0 1em;
	}

	#holdsit:hover .slide-col {
		z-index: 1;
		transition: width 0.4s ease-out;
	}

	#holdsit:hover .slide-col:hover {
		z-index: 2;
		width: 50%;
	}

	.slide-col h5 {
		font-size: 1.8em;
		color: white;
		text-align: center;
		z-index: 2;
		transition: all 0.2s var(--cube3);
		opacity: 0;
		transform: translateY(-80px);
	}

	.slide-col:hover h5 {
		opacity: 1;
		transform: translateY(0);
	}

	.slide-col:hover::after {
		background: rgba(0,0,0,0.8);
	}

	.slide-col::after {
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.2);
		backdrop-filter: blur(1px);
		opacity: 1;
	}

	.slide-col::after {
		z-index: 1;
	}

	.onleft {
		width: 50%;
		padding-right: 1em;
		justify-content: center;
		z-index: 1;
	}
	.onright {
		width: 50%;
		justify-content: center;
		padding-right: 4vw;
	}


	.fractal, .mandala {
		width: 70%;
		align-items: flex-start;
		text-align: left;
		height: 100vh;
		padding-left: 4vw;
	}

	.fractal .sachin, .fractal .opener {
		align-items: flex-start;
		text-align: left;
	}

	#holdsit {
		height: 100vh;
		position: sticky;
		top: 0;
	}

}
</style>
