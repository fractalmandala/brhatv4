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

<div class="greenfile" data-scroll-container>
	<div class="c-c-c-c sectioner a-1" data-scroll-section>
		<div class="is-svg">
			<LogFm></LogFm>
		</div>
		<div class="opener" style="text-align: left" data-textify>
			To be a history in the true sense of the word, a work must be a story of the people inhabiting a country. It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; through efforts of the people to will themselves into organic unity.
		</div>
	</div>
	<div class="c-c-c-c f-s" data-scroll-section>
		<div data-textify class="sachin" data-scroll data-scroll-speed="3">Such a history of India is still to be written.</div>
		<cite data-scroll data-scroll-speed="1">Shri KM Munshi</cite> 
	</div>

	<div class="r-r-c-c columnas" data-scroll-section>
		<div class="c-c-c-c onleft">
			<div class="opener">
				<h5 data-scroll data-textify>with a continuity of untold millennia, the passage of time visible to us in</h5>
				<h1 data-textify data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal">itihāsa</h1>
			</div>
		</div>
		<div class="c-c-c-c onright">
			<img data-scroll data-scroll-speed="8" data-scroll-direction="horizontal" src="/images/mandala/itihaas.webp" alt="itihas"/>
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
				<div class="opener">
					<h5 data-scroll data-textify>emerged a civilizational consciousness, with multi-level coherence. It is known to us as</h5>
					<h1 data-textify data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal">dharma</h1>
				</div>
			</div>
			<div class="c-c-c-c onright">
				<img data-scroll data-scroll-speed="8" data-scroll-direction="horizontal" src="/images/mandala/dharma.webp" alt="itihas"/>
			</div>
		</div>

	<div class="c-c-c-c explain" data-scroll-section data-textify>
		<h1>and it is alive. it is a</h1>
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
		<div class="slide-col imb1" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" data-scroll-target="#holdsit">
			<h5>Fractal Māṇḍala Essays</h5>
		</div>
		<div class="slide-col imb2" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" data-scroll-target="#holdsit">
			<h5>Schema for Synaptic Reconnection</h5>
		</div>
		<div class="slide-col imb3" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" data-scroll-target="#holdsit">
			<h5>Caturasūtra - 4 Aphorisms for Civilizational Consciousness</h5>
		</div>
		<div class="slide-col imb4" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" data-scroll-target="#holdsit">
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
	background: var(--beau);
}

.imb1, .imb2, .imb3, .imb4 {
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	justify-content: center;
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



@media screen and (min-width: 900px) {

	.is-svg {
		height: 200px;
	}

	.columnas {
		padding-left: 4vw;
	}

	.opener {
		font-weight: 200;
		font-size: 32px;
		letter-spacing: -2px;
		width: 88%;
	}

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

	.sachin {
		text-transform: uppercase;
		font-weight: 700;
		font-size: 96px;
		margin-bottom: 8px;
		color: #10C56D;
	}

	.f-s {
		height: 100vh;
		padding: 0 4vw;
		justify-content: center;
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

	.slide-col {
		width: 25%;
		height: 100%;
		position: relative;
		justify-content: center;
		align-items: center;
		padding: 0 1em;
	}

	.slide-col h5 {
		font-size: 1.8em;
		color: white;
		text-align: center;
		z-index: 2;
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
		width: 90%;
		margin-right: -20%;
		justify-content: center;
	}
	.onright {
		width: 30%;
	}
	.onright img {
		object-fit: cover;
		height: 100%;
		width: 600px;
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


}
</style>
