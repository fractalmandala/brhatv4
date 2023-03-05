<script lang="ts">
import LogoRiDCurr from '$lib/components/logos/LogoRiDCurr.svelte'
import '$lib/styles/anim-rid.css';

</script>

<div class="boxr l0 back-image">
	<div class="boxc screen">
		<div class="boxc">
				<LogoRiDCurr></LogoRiDCurr>	
		</div>
	</div>
</div>	

<div class="pad-a">

	<div class="boxc y-full x2">
		<h2 class="green">Design thinking is coming full circle.</h2>
		<p class="wide75">
			Having traversed systems, integrated, business-centric and other approaches, it converges towards human-centric, modular and circular. IDEO, steward of design thinking, talks of emergent design paradigms being human-centric, fractal and circular. UK’s Design Council speaks of ‘designing for the planet’, but its concerns are just the same- sustainability, reusability, harmony. The Conscilience Project sees us currently in the phase of values-agnostic design, dominated by the view that technology is only what we make of it, and the values that drive such making derive from elsewhere.
		</p>
		<h6>
			Of these, the last has brought us to the brink of disaster. 
		</h6>
		<p class="grey">
			Our steadfast pretense that design can be values-agnostic is laid bare when we learn that artificially intelligent software tends to inherit the biases and prejudices of its programmers. Human creation is bringing the ruin of life, species and planet. Introspection and a radical recalibration are our only chance of reversing the situtation.
		</p>
	</div>

	<div class="boxc y-full x3">
		<div class="boxc wide50">
			<blockquote>
			“Science converts information into knowledge. Engineering converts knowledge into utility. <span class="green">Design converts utility into cultural behavior in context. </span>Art takes that cultural behavior and questions our perception of the world.”
				<br><cite>Neri Oxman, MIT Media Lab</cite>
			</blockquote>
			<blockquote class="mtop24">
				“Design creates culture.<br>Culture shapes values. <span class="green"><br>Values determine the future.”</span>
				<br><cite>Robert Peters, Circle Design</cite>
			</blockquote>
		</div>
		<div class="boxc wide75">
			<h6>
			"Study your predecessors' works intently, to see how they solved problems. Try to figure out why they made the design choices they did;</h6>
			<h5 class="green">This is the most illuminating question to ask yourself."
			</h5>
			<cite>Fred Brooks, The Design of Design</cite>
		</div>
	</div>



	<div class="boxc x4 y-half">
		<h2>
		<span class="green">Ṛta in Design </span><span class="grey2"> is a framework for modern design that derives its principles, mindsets and processes from the accumulated wisdom of Indian predecessors., ie. </span><span class="green">Dharma.</span>
		</h2>
	</div>

	<div class="for-links x5">
		<h2>Prelude - Culture and Design</h2>
		<h2>Introduction to Ṛta in Design</h2>
		<h2>Dharma is Design</h2>
		<h2>Framework</h2>
		<h2>Principles and Phases</h2>
		<h2>Tools and Resources</h2>
		<h2>Design @ Bṛhat</h2>
	</div>

</div>
<style>

.for-links { padding-bottom: 64px;}

.for-links h2 {
	border-left-color: #10D56c;
	cursor: pointer;
}

.back-image { background-image: url('/images/rid/infinitywall.webp')}

@keyframes triplingshow {
 0% {opacity: 0;}
 100% { opacity: 1;}
}

@keyframes movingtocircle {
 0% { margin-left: 80% !important; opacity: 0;}
100% { margin-left: 0 !important; opacity: 1;}
}

.x3 blockquote {
	border-left: 4px solid var(--green);
	margin-left: 0;
	padding-left: 24px;
}

@media screen and (min-width: 768px) {
	.l0 { justify-content: center; height: 100vh;}
	.l0 .screen { background: rgba(0,0,0,0.6); width: 100%; justify-content: center; padding: 0 30%; height: 100%;}
	.x3 { align-items: flex-start; padding-top: 5%;}
	.x2 {
		justify-content: center;
	}
	.x4 { align-items: center;}
	
}

@media screen and (max-width: 767px) {
	.l0 { justify-content: center; height: 100vh;}
	.l0 .screen { justify-content: center; width: 100%; padding-left: 64px; background: rgba(0,0,0,0.8);}

}

</style>
