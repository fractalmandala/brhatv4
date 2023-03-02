<script lang="ts">
import LogoRiDCurr from '$lib/components/logos/LogoRiDCurr.svelte'
import '$lib/styles/anim-rid.css';

</script>

<div class="box-r h100 l0 back-image">
	<div class="box-c screen">
		<div class="box-c">
				<LogoRiDCurr></LogoRiDCurr>	
		</div>
	</div>
</div>	

<div class="box-c h100 m-mid x2">
	<div class="wd2">
		<h2 class="green m-bot-24">Design thinking is coming full circle.</h2>
		<p class="grey">
			Having traversed systems, integrated, business-centric and other approaches, it converges towards human-centric, modular and circular. IDEO, steward of design thinking, talks of emergent design paradigms being human-centric, fractal and circular. UK’s Design Council speaks of ‘designing for the planet’, but its concerns are just the same- sustainability, reusability, harmony. The Conscilience Project sees us currently in the phase of values-agnostic design, dominated by the view that technology is only what we make of it, and the values that drive such making derive from elsewhere.
		</p>
		<h6>
			Of these, the last has brought us to the brink of disaster. 
		</h6>
		<p class="grey">
			Our steadfast pretense that design can be values-agnostic is laid bare when we learn that artificially intelligent software tends to inherit the biases and prejudices of its programmers. Human creation is bringing the ruin of life, species and planet. Introspection and a radical recalibration are our only chance of reversing the situtation.
		</p>
	</div>
</div>

<div class="box-r h100 m-mid x3">
	<div class="wd2">
		<h5 class="m-bot-8">
			“Science converts information into knowledge. Engineering converts knowledge into utility. Design converts utility into cultural behavior in context. Art takes that cultural behavior and questions our perception of the world.”
		</h5>
		<cite class="grey2 m-top-zero">Neri Oxman, MIT Media Lab</cite>
		<h5 class="m-bot-8 pad80-t2">
			“Design creates culture.<br>Culture shapes values. <span class="green"><br>Values determine the future.”</span>
		</h5>
		<cite class="grey2 m-top-zero">Robert Peters, Circle Design</cite>
	</div>
</div>

<div class="box-r h100p m-mid x4">
	<div class="wide75">
		<h5 class="m-bot-8 pad80-t2">
			"Study your predecessors' works intently, to see how they solved problems. Try to figure out why they made the design choices they did;<br><br> <span class="green">This is the most illuminating question to ask yourself."</span>
		</h5>
		<cite class="grey2 m-top-zero">Fred Brooks, The Design of Design</cite>
		<h3 class="pad80-t">
		<span class="green">Ṛta in Design </span><span class="grey2"> is a framework for modern design that derives its principles, mindsets and processes from the accumulated wisdom of Indian predecessors., ie. </span><span class="green">Dharma.</span>
		</h3>
	</div>
</div>

<div class="box-c h100p x6 m-mid pad80">
<div class="box-r allwrap back-image h100p x5">
		<div class="box-c wd4"><a href="/rta/prologue">
			<small class="green">1</small>
			<h6 class="grey">Predecessors, Culture, Design</h6></a>
		</div>
		<div class="box-c wd4"><a href="/rta/intro">
			<small class="green">2</small>
			<h6 class="grey">Introduction to Ṛta in Design</h6></a>
		</div>
		<div class="box-c wd4"><a href="/rta/dharmaisdesign">
			<small class="green">3</small>
			<h6 class="grey">Dharma is Design</h6></a>
		</div>
		<div class="box-c wd4"><a href="/rta/prologue">
			<small class="green">4</small>
			<h6 class="grey">Framework</h6></a>
		</div>
		<div class="box-c wd4"><a href="/rta/prologue">
			<small class="green">5</small>
			<h6 class="grey">Principles</h6></a>
		</div>
		<div class="box-c wd4"><a href="/rta/prologue">
			<small class="green">6</small>
			<h6 class="grey">Phases</h6></a>
		</div>
		<div class="box-c wd4"><a href="/rta/prologue">
			<small class="green">7</small>
			<h6 class="grey">Tools and Resources</h6></a>
		</div>
		<div class="box-c wd4"><a href="/rta/prologue">
			<small class="green">8</small>
			<h6 class="grey">Design @ Bṛhat</h6></a>
		</div>
</div>
</div>


<style>

.back-image { background-image: url('/images/rid/infinitywall.webp')}

@keyframes triplingshow {
 0% {opacity: 0;}
 100% { opacity: 1;}
}

@keyframes movingtocircle {
 0% { margin-left: 80% !important; opacity: 0;}
100% { margin-left: 0 !important; opacity: 1;}
}

.x5 {
	background-image: url('/images/rid/panelgrid2.png')
}

@media screen and (min-width: 768px) {
	.l0 { justify-content: center;}
	.l0 .screen { background: rgba(0,0,0,0.8); width: 100%; justify-content: center; padding: 0 30%;}
	.x3 { align-items: center;}
	.x2, .x3 .wd2 {
		justify-content: center;
	}
	.x4 { align-items: center;}
	.x5 { height: 60vh; align-items: center;}
	.x5 .box-c {
		background: rgba(255,255,255,1);
		height: 50%;
		width: 25%;
		justify-content: center;
		align-items: center;
		transition: all 0.16s var(--cubec);
		margin: 0;
	}
	.x5 .box-c:hover { 
		background: rgba(255,255,255,0);
		transform: scale(0.9);
	}
	.x5 .box-c small, .x5 .box-c a { text-align: center;}
	.x5 .box-c:hover h6 { color: white; background: rgba(0,0,0,0.8); padding: 0 8px;}
	.x5 .box-c:hover small { color: white; background: var(--green); padding: 4px;}
	
}

@media screen and (max-width: 767px) {
	.l0 { justify-content: center;}
  .l0 { height: 40vh; margin-top: 64px;}	
	.l0 .screen { justify-content: center; width: 100%; align-items: flex-start; padding-left: 64px; background: rgba(0,0,0,0.8);}
	.x5 { gap: 2px; justify-content: center; align-items: center; padding: 2px 0;}
	.x5 .box-c {
		background: rgba(0,0,0,0.9);
		transform: scale(0.9);
		width: calc(50% - 1px);
		margin: 0;
		justify-content: center;
		align-items: center;
		padding: 8px 0;
	}
	.x5 .box-c a { text-align: center;}
	.x5 .box-c a h6 { color: white; font-weight: 600; margin-top: 4px;}
}

</style>
