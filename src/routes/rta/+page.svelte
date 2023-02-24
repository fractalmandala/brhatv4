<script lang="ts">
import LogoRiDCurr from '$lib/components/logos/LogoRiDCurr.svelte'
import Quote from '$lib/components/reuse/BlockQuote.svelte'
import '$lib/styles/anim-rid.css';
let y = 1


</script>

<svelte:window bind:scrollY={y}/>
	<div class="flexbox-r full cc-y-col l0 imgbox">
		<div class="flexbox-c screen">
			<div class="in-col cc-x-col-mob wide50 l-x-col-desk">
				<LogoRiDCurr></LogoRiDCurr>	
			</div>
			<div class="in-row row-cc-y row-left-x wide50 pad-x-l" id="symbolsrow">
				<img id="thecircle" src="/images/rid/trin-circ.png" alt="ridhero"/>
				<img id="theinf" src="/images/rid/trin-inf.png" alt="ridhero"/>
			</div>
		</div>
	</div>	
	<div class="flexbox-c cc-y-col l1 desk-margins">
		<p class="wide75">
				Human creation is bringing the ruin of life, species and planet. Introspection and a radical recalibration are our only chance of reversing the situtation. What's needed is a 'wisdom of the gods.'
		</p>
		<h5 class="green">
			This is the most fundamental wicked problem of our times...
		</h5>
		<Quote --qline="#10C56D">
			<div slot="quote">
			“Design creates culture.<br>
			Culture shapes values.<br>
			Values determine the future.”
			</div>
			<div slot="cite">-Robert Peteres, Circle Design</div>
		</Quote>
	</div>
	<div class="flexbox-c m-bot-zero l2 desk-margins">
		<h2 class="w600">
			Ṛta in Design is a system for modern design thinking and creatorship, informed by the <span class="green"> design principles of Dharma.</span>
		</h2>
	</div>
	<div class="flexbox-c full pad-y-b desk-margins link-heads" id="links">
		<h5 class="w400 wide75"><a href="/rta/prologue">Prelude to Ṛta in Design</a></h5>
		<h5 class="w400 wide75"><a href="/rta/intro">Introduction to Ṛta in Design</a></h5>
		<h5 class="w400 wide75"><a href="/rta/dharmaisdesign">Dharma is Design</a></h5>
		<h5 class="w400 wide75">Framework</h5>
		<h5 class="w400 wide75">Principles</h5>
		<h5 class="w400 wide75">Phases</h5>
		<h5 class="w400 wide75">Tools and Resources</h5>
		<h5 class="w400 wide75">References</h5>
		<h5 class="w400 wide75">Glossary</h5>
		<h5 class="w400 wide75">Design @ Bṛhat</h5>
	</div>


<style>
.imgbox { background-image: url('/images/rid/infinitywall.webp')}
#links a { color: inherit;}
#links a:hover { color: #10C56D;}
#links h5 { border-bottom: 1px solid #e7e7e7; transform-origin: center left; transition: var(--snap);}
#links h5:hover { transform: scale(0.9);}

#thecircle { animation: triplingshow 2s ease forwards; }
#theinf { animation: movingtocircle 6s var(--cubea) forwards;}

@keyframes triplingshow {
 0% {opacity: 0;}
 100% { opacity: 1;}
}

@keyframes movingtocircle {
 0% { margin-left: 80%; opacity: 0;}
100% { margin-left: 0; opacity: 1;}
}

@media screen and (min-width: 768px) {
	#thecircle { height: 32px; z-index: 1; animation: movingleft 1s ease forwards;}
	#theinf { transform: translateX(-16px); z-index: 0; height: 32px; animation: following 1s ease forwards;}
	#symbolsrow { justify-content: space-between; padding-top: 100px;}
	#links h5 { padding-bottom: 16px;}
	.l0 { flex-direction: row;}
}

@media screen and (max-width: 767px) {
	.l1 { padding-top: 40px;}
	#theinf { transform: translateX(-2px); z-index: 0;}
	#thecircle { z-index: 1;}
	#symbolsrow { padding-left: 38px; margin-top: -12px;}
	#symbolsrow img { height: 12px;}
  .l0 { height: 40vh; margin-top: 64px;}	
	.l0 .screen { justify-content: center;}
	#links h5 { padding-bottom: 12px;}
}

</style>
