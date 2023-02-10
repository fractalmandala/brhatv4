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


<div class="black-beauty" data-scroll-container id="homebase">
	<div class="c-c-c-c l1">
		<p data-textify>
		To be a history in the true sense of the word, a work must be a story of the people inhabiting a country. It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; through efforts of the people to will themselves into organic unity.
		</p>
	</div>
	<div class="c-c-c-c screener" data-scroll-section>
			<h2 data-textify>
				Such a history of India is still to be written.
			</h2>
<LogFm></LogFm>
	</div>
	<div class="c-c-c-c l2" data-scroll-section>
		<div data-scroll data-scroll-speed="-8">
			
		</div>
	</div>
	<div class="r-r-r-r l0" id="tohook" data-scroll-section>
		<div class="col-gen maj1" data-scroll data-scroll-speed="1">
			<div class="c-c-c-c col1">
				<p>What is Fractal Maṇḍala?</p>
			</div>
			<div class="c-c-c-c col2">
				<p>Indian Civilizational Consciousness</p>
			</div>
			<div class="c-c-c-c col3">
				<p>Ancestors Outside of Time</p>
			</div>
		</div>
		<div class="col-gen maj2" data-scroll data-scroll-speed="-2">
			<div class="c-c-c-c col4">
				<p>The Macrohistorical Case for Civilizational Primacy</p>
			</div>
			<div class="c-c-c-c col5">
				<p>Ratha as a Bīja of Civilizational DNA</p>
			</div>
			<div class="c-c-c-c col6">
				<p>Rāma's Journey, the Avatāra in You</p>
			</div>
		</div>
		<div class="col-gen maj3" data-scroll data-scroll-speed="1">
			<div class="c-c-c-c col7">
				<p>History is Ontic, Itihāsa is Ontologic</p>
			</div>
			<div class="c-c-c-c col8">
				<p>Synaptic Reconnection to Civilizational Consciousness</p>
			</div>
			<div class="c-c-c-c col9">
				<p>Caturasūtra - 4 Aphorisms for a True History</p>
			</div>
		</div>
		<div class="col-gen maj4" data-scroll data-scroll-speed="-2">
			<div class="c-c-c-c col10">
				<p>On and Towards a Chronology</p>
			</div>
			<div class="c-c-c-c col11">
				<p>Core Glossary</p>
			</div>
			<div class="c-c-c-c col12">

			</div>
		</div>
	</div>
</div>

<style>


.screener {
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
	text-align: center;
	background: var(--beau);
}


.col-gen .c-c-c-c {
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	transition: all 0.42s var(--cube1);
	transform-origin: center center;
	position: relative;
	z-index: 4;
	transform: scale(0.9);
}


.col-gen .c-c-c-c:hover {
	transform: scale(1.2);
	z-index: 500;
}

.col-gen .c-c-c-c:hover p {
	opacity: 1;
}

.col-gen .c-c-c-c p {
	z-index: 5;
	opacity: 0;
	transition: all 0.45s var(--cube2);
}

.col-gen .c-c-c-c::after {
	content: '';
	width: 100%;
	height: 0%;
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(9,9,9,0.0);
	transition: all 0.42s var(--cube1);
}

.col-gen .c-c-c-c:hover::after {
	height: 100%;
	background: rgba(9,10,9,0.9);
}

.col1 {
	background-image: url('/images/mandala/1-1.webp');
}


.col2 {
	background-image: url('/images/mandala/1-2.webp');
}

.col3 {
	background-image: url('/images/mandala/1-3.webp');
}

.col4 {
	background-image: url('/images/mandala/1-4.webp');
}

.col5 {
	background-image: url('/images/mandala/2-1.webp');
}

.col6 {
	background-image: url('/images/mandala/2-2.webp');
}

.col7 {
	background-image: url('/images/mandala/2-3.webp');
}

.col8 {
	background-image: url('/images/mandala/2-4.webp');
}

.col9 {
	background-image: url('/images/mandala/3-1.webp');
}

.col10 {
	background-image: url('/images/mandala/3-2.webp');
}

.col11 {
	background-image: url('/images/mandala/3-3.webp');
}

.col12 {
	background-image: url('/images/mandala/3-4.webp');
}


@media screen and (min-width: 768px) {
	.col-gen .c-c-c-c {
		width: 100%;
		height: calc(33.33% - 32px);
		border: 1px solid white;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding-left: 12px;
		padding-right: 12px;
	}

	.l0 .col-gen {
		width: calc(25% - 10px);
		height: 100%;
		gap: 8px;
	}
	
	.l0 { 
		gap: 8px;
		justify-content: center;
		align-items: center;
		height: 100vh; 
		flex-wrap: wrap;

	}

	.l1 {
		width: 100%;
		height: 100vh;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.l1 p {
		width: 60%;
	}

	.screener {
		padding-left: 4vw;
		padding-right: 4vw;
		z-index: 4;
	}

	.screener h2 {
		color: white;
	}

	.l2 {
		height: 100vh;
		width: 100%;
		background: var(--beau);
		justify-content: center;
		align-items: center;
	}


}

</style>