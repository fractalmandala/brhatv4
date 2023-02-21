<script lang="ts">
import { reveal } from 'svelte-reveal'
import LogoRiDCurr from '$lib/components/logos/LogoRiDCurr.svelte'
import RiDShape from '$lib/components/logos/RiDShape.svelte'
import '$lib/styles/anim-rid.css';
let y = 1


</script>

<svelte:window bind:scrollY={y}/>
	<div class="flexbox-r full-d pad-x-40 cc-y-col l0">
		<div class="in-col cc-x-col-mob wide50 l-x-col-desk">
			<LogoRiDCurr></LogoRiDCurr>	
		</div>
		<div class="in-row all-cc wide50 pad-x-l" id="symbolsrow">
			<img id="thecircle" src="/images/rid/trin-circ.png" alt="ridhero"/>
			<img id="theinf" src="/images/rid/trin-inf.png" alt="ridhero"/>
		</div>
	</div>	
	<div class="flexbox-c cc-y-col pad-y-80 pad-x-40">
		<p class="wide75">
				Human creation is bringing the ruin of life, species and planet. Introspection and a radical recalibration are our only chance of reversing the situtation. What's needed is a 'wisdom of the gods.'
		</p>
		<h5 class="green">
			This is the most fundamental wicked problem of our times...
		</h5>
		<blockquote class="block-green">
			“Design creates culture.<br>
			Culture shapes values.<br>
			Values determine the future.”<br>
			<cite class="green">-Robert Peteres, Circle Design</cite>
		</blockquote>
	</div>
	<div class="flexbox-c pad-y-t pad-x-40">
				<h3 class="w300 wide75 pad-y-t">
			Ṛta in Design is a system for modern design thinking and creatorship, informed by the <span class="green"> design principles of Dharma.</span>
		</h3>
	</div>
	<div class="flexbox-c full pad-y-b pad-y-t pad-x-40" id="links">
		<h5 class="w300 wide75"><a href="/rta/prologue">Prelude to Ṛta in Design</a></h5>
		<h5 class="w300 wide75"><a href="/rta/intro">Introduction to Ṛta in Design</a></h5>
		<h5 class="w300 wide75"><a href="/rta/dharmaisdesign">Dharma is Design</a></h5>
		<h5 class="w300 wide75">Framework</h5>
		<h5 class="w300 wide75">Principles</h5>
		<h5 class="w300 wide75">Phases</h5>
		<h5 class="w300 wide75">Tools and Resources</h5>
		<h5 class="w300 wide75">References</h5>
		<h5 class="w300 wide75">Glossary</h5>
		<h5 class="w300 wide75">Design @ Bṛhat</h5>
	</div>


<style>

#links a { color: inherit;}
#links a:hover { color: #10C56D;}
#links h5 { border-bottom: 1px solid #e7e7e7; transform-origin: center left; transition: var(--snap);}
#links h5:hover { transform: scale(0.9);}

@media screen and (min-width: 768px) {
	#thecircle { height: 32px; z-index: 1; animation: movingleft 1s ease forwards;}
	#theinf { transform: translateX(-16px); z-index: 0; height: 32px; animation: following 1s ease forwards;}
	#symbolsrow { justify-content: space-between; padding-top: 100px;}
	#links h5 { padding-bottom: 16px;}
	.l0 { flex-direction: row;}
}

@media screen and (max-width: 767px) {
	#theinf { transform: translateX(16px); z-index: 0;}
	#symbolsrow img { height: 12px;}
	.l0 .in-col { height: 100%; padding-top: 120px;}
	#links h5 { padding-bottom: 12px;}
}

</style>
