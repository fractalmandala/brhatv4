<script lang="ts">
import LogoRiDCurr from '$lib/components/logos/LogoRiDCurr.svelte'
import '$lib/styles/anim-rid.css';

</script>

	<div class="flexbox-r full cc-y-col l0 imgbox">
		<div class="flexbox-c screen">
			<div class="in-col cc-x-col-mob l-x-col-desk">
				<LogoRiDCurr></LogoRiDCurr>	
			</div>
			<div class="in-row row-cc-y" id="symbolsrow">
				<img id="thecircle" src="/images/rid/trin-circ.png" alt="ridhero"/>
				<img id="theinf" src="/images/rid/trin-inf.png" alt="ridhero"/>
			</div>
		</div>
	</div>	

<div class="flexbox-r strips">
	<div class="in-col" id="c1">
		<div class="flexbox-c inscreen">
			<h4>1</h4><a href="/rta/prologue">
			<small>
				Prelude
			</small></a>
		</div>
	</div>
	<div class="in-col" id="c2">
		<div class="flexbox-c inscreen">
			<h4>2</h4><a href="/rta/intro">
			<small>
				Introduction
			</small></a>
		</div>
	</div>
	<div class="in-col" id="c3">
		<div class="flexbox-c inscreen">
			<h4>3</h4><a href="/rta/dharmaisdesign">
			<small>
				Dharma is Design
			</small></a>
		</div>
	</div>
	<div class="in-col" id="c4">
		<div class="flexbox-c inscreen">
			<h4>4</h4>
			<small>
				Framework
			</small>
		</div>
	</div>
	<div class="in-col" id="c5">
		<div class="flexbox-c inscreen">
			<h4>5</h4>
			<small>
				Principles
			</small>
		</div>
	</div>
	<div class="in-col" id="c6">
		<div class="flexbox-c inscreen">
			<h4>6</h4>
			<small>
				Phases
			</small>
		</div>	
	</div>
	<div class="in-col" id="c7">
		<div class="flexbox-c inscreen">
			<h4>7</h4>
			<small>
				Tools and Resources
			</small>
		</div>
	</div>
	<div class="in-col" id="c8">
		<div class="flexbox-c inscreen">
			<h4>8</h4>
			<small>
				References
			</small>
		</div>
	</div>
	<div class="in-col" id="c9">
		<div class="flexbox-c inscreen">
			<h4>9</h4>
			<small>
				Glossary
			</small>
		</div>
	</div>
	<div class="in-col" id="c10">
		<div class="flexbox-c inscreen">
			<h4>10</h4>
			<small>
				Design @ Bṛhat
			</small>
		</div>
	</div>
</div>

<style>
.strips .in-col { 
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	margin: 0;
	border-left: 2px solid #171717;
	border-right: 2px solid #171717;
	overflow-y: hidden;
}
.inscreen { height: 50%; width: 100%; top: 50%; background: rgba(0,0,0,0.9); position: absolute;justify-content: flex-start; align-items: center; color: white;}
.strips:hover .in-col:hover {
	animation: wideen 1s ease-out forwards;
}
.strips:hover .in-col {
	animation: widen 1s ease-out forwards;
}
#c1, #c2, #c3, #c4, #c5, #c6, #c7, #c8, #c9, #c10 {
	position: relative;
	height: 100%;
	margin-top: 0%;
}
#c1::after, #c2::after, #c3::after, #c4::after, #c5::after, #c6::after, #c7::after, #c8::after, #c9::after, #c10::after { 
	position: absolute;
	top: 0%;
	left: 0;
	width: 100%;
	content: '';
	height: 46%;
	background: rgba(0,0,0,0.9);
}
#c1:hover .inscreen, #c2:hover .inscreen, #c3:hover .inscreen, #c4:hover .inscreen, #c5:hover .inscreen, #c6:hover .inscreen, #c7:hover .inscreen, #c8:hover .inscreen, #c9:hover .inscreen, #c10:hover .inscreen { animation: swipingouta 1.5s ease forwards;}
#c1:hover::after, #c2:hover::after, #c3:hover::after, #c4:hover::after, #c5:hover::after, #c6:hover::after, #c7:hover::after, #c8:hover::after, #c9:hover::after, #c10:hover::after { animation: swipingoutb 0.5s ease forwards;}

.strips h4, .strips small { opacity: 0;}
.strips .in-col:hover h4, .strips .in-col:hover small {
	animation: showup 0.4s var(--cubec) 1s forwards;
}

@keyframes swipingouta {
	0% { top: 50%; height: 50%; background: rgba(0,0,0,0.9); justify-content: flex-start;}
	50% { top: 50; height: 50%; margin-top: 100vh; background: rgba(0,0,0,0);justify-content: flex-start;}
	100% { top: 0; height: 100%; margin-top: 0; background: rgba(0,0,0,0);justify-content: center;}
}

@keyframes swipingoutb {
	0% { top: 0%; height: 50%;}
100% { top: 0%; height: 0;}
}

@keyframes widen {
	0% { width: calc(100%/10);}
	100% { width: calc(88%/9);}
}

@keyframes wideen {
	0% { width: calc(100%/10);}
	100% { width: 12%;}
}

@keyframes showup {
	0% { opacity: 0;}
	100% { opacity: 1;}
}
.strips { padding: 0; justify-content: center; background: var(--beau); overflow: hidden;}
#c1 { background-image: url('/images/rid/strip1.png');}
#c2 { background-image: url('/images/rid/strip2.png');}
#c3 { background-image: url('/images/rid/strip3.png');}
#c4 { background-image: url('/images/rid/strip4.png');}
#c5 { background-image: url('/images/rid/strip5.png');}
#c6 { background-image: url('/images/rid/strip6.png');}
#c7 { background-image: url('/images/rid/strip7.png');}
#c8 { background-image: url('/images/rid/strip8.png');}
#c9 { background-image: url('/images/rid/strip9.png');}
#c10 { background-image:url('/images/rid/strip10.png')}
.imgbox { background-image: url('/images/rid/infinitywall.webp')}


#thecircle { animation: triplingshow 2s ease forwards; }
#theinf { animation: movingtocircle 6s var(--cubea) forwards;}

@keyframes triplingshow {
 0% {opacity: 0;}
 100% { opacity: 1;}
}

@keyframes movingtocircle {
 0% { margin-left: 80% !important; opacity: 0;}
100% { margin-left: 0 !important; opacity: 1;}
}

@media screen and (min-width: 768px) {
	.inscreen h4 { z-index: 21;}
	.strips { height: 100vh; width: 100%;}
	.strips .in-col { width: calc(100%/10);}
	#thecircle { height: 32px; z-index: 1;}
	#theinf { z-index: 0; height: 32px;}
	#symbolsrow { justify-content: space-between;}

	.l0 { flex-direction: row;}
	.screen { height: 100vh; justify-content: center; align-items: center;}
}

@media screen and (max-width: 767px) {

	#theinf { transform: translateX(-2px); z-index: 0;}
	#thecircle { z-index: 1;}
	#symbolsrow { padding-left: 38px; margin-top: -12px;}
	#symbolsrow img { height: 12px;}
  .l0 { height: 40vh; margin-top: 64px;}	
	.l0 .screen { justify-content: center;}
}

</style>
