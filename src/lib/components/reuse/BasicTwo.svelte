<script>
import { fly } from 'svelte/transition'
import { cubicOut } from 'svelte/easing'
let isOne = false
let isTwo = false
let isThree = false
let isFour = false
let isFive = false
let isSix = false
let isSeven = false
let isEight = false
let isNine = false

function toggleOne(){
	isOne = !isOne
}

function toggleTwo(){
	isTwo = !isTwo
}

function toggleThree(){
	isThree = !isThree
}

function toggleFour(){
	isFour = !isFour
}
function toggleFive(){
	isFive = !isFive
}
function toggleSix(){
	isSix = !isSix
}
function toggleSeven(){
	isSeven = !isSeven
}
function toggleEight(){
	isEight = !isEight
}
function toggleNine(){
	isNine = !isNine
}

</script>

<div class="c-c-c-c pad4 linker" on:mouseenter={toggleOne} on:mouseleave={toggleOne}>
	<div class="majorlink">
		<a href="/mandala/fractals/introduction">What is the Fractal Maṇḍala</a>
	</div>
	<div class="majorlink" on:mouseenter={toggleTwo} on:mouseleave={toggleTwo}>
		<a href="/mandala/fractals/civcon">On Indian Civilizational Consciousness</a>
	</div>
	<div class="majorlink" on:mouseenter={toggleThree} on:mouseleave={toggleThree}>
		<a href="/mandala/fractals/aphorisms">Caturasūtra - 4 Aphorisms</a>
	</div>
	<div class="majorlink" on:mouseenter={toggleFour} on:mouseleave={toggleFour}>
		<a href="/mandala/fractals/essay1">The Macrohistoric Case</a>
	</div>
	<div class="majorlink" on:mouseenter={toggleFive} on:mouseleave={toggleFive}>
		<a href="/mandala/fractals/essay2">Ratha as a Bīja</a>
	</div>
	<div class="majorlink" on:mouseenter={toggleSix} on:mouseleave={toggleSix}>
		<a href="/mandala/fractals/ancestors">Ancestors Outside of Time</a>
	</div>
	<div class="majorlink" on:mouseenter={toggleSeven} on:mouseleave={toggleSeven}>
		<a href="/mandala/fractals/">History is Ontic, Itihāsa is Ontologic</a>
	</div>
	<div class="majorlink" on:mouseenter={toggleEight} on:mouseleave={toggleEight}>
		<a href="/mandala/fractals/">Synaptic Reconnection</a>
	</div>
	<div class="majorlink" on:mouseenter={toggleNine} on:mouseleave={toggleNine}>
		<a href="/mandala/fractals/">Rāma's Journey</a>
	</div>	
	{#if isOne}
	<div class="imager" id="fractala"
		in:fly="{{delay: 100, duration: 100, x: 0, y: 600, easing: cubicOut}}"
		out:fly="{{delay: 0, duration: 50, x: 0, y: -600, easing: cubicOut}}"
	>
		<img src="/images/mandala/web3.webp" alt="isanicon" />
	</div>	
	{/if}
	{#if isTwo}
	<div class="imager" id="civcon"
		in:fly="{{delay: 100, duration: 100, x: 0, y: 600, easing: cubicOut}}"
		out:fly="{{delay: 0, duration: 50, x: 0, y: -600, easing: cubicOut}}"
	>
		<img src="/images/mandala/web4.webp" alt="civcon" />
	</div>
	{/if}
	{#if isThree}
	<div class="imager" id="aphorism"
		in:fly="{{delay: 100, duration: 100, x: 0, y: 600, easing: cubicOut}}"
		out:fly="{{delay: 0, duration: 50, x: 0, y: -600, easing: cubicOut}}"
	>
		<img src="/images/mandala/web1.webp" alt="isanicon" />
	</div>
	{/if}
	{#if isFour}
	<div class="imager" id="macro"
		in:fly="{{delay: 100, duration: 100, x: 0, y: 600, easing: cubicOut}}"
		out:fly="{{delay: 0, duration: 50, x: 0, y: -600, easing: cubicOut}}"
	>
		<img src="/images/mandala/web2.webp" alt="isanicon" />
	</div>
	{/if}
	{#if isFive}
	<div class="imager" id="ratha"
		in:fly="{{delay: 100, duration: 100, x: 0, y: 600, easing: cubicOut}}"
		out:fly="{{delay: 0, duration: 50, x: 0, y: -600, easing: cubicOut}}"
	>
		<img src="/images/mandala/web9.webp" alt="isanicon" />
	</div>
	{/if}
	{#if isSix}
	<div class="imager" id="ancestors"
		in:fly="{{delay: 100, duration: 100, x: 0, y: 600, easing: cubicOut}}"
		out:fly="{{delay: 0, duration: 50, x: 0, y: -600, easing: cubicOut}}"
	>
		<img src="/images/mandala/web5.webp" alt="isanicon" />
	</div>
	{/if}
	{#if isSeven}
	<div class="imager" id="ontic"
		in:fly="{{delay: 100, duration: 100, x: 0, y: 600, easing: cubicOut}}"
		out:fly="{{delay: 0, duration: 50, x: 0, y: -600, easing: cubicOut}}"
	>
		<img src="/images/mandala/web6.webp" alt="isanicon" />
	</div>
	{/if}
	{#if isEight}
	<div class="imager" id="synaptic"
		in:fly="{{delay: 100, duration: 100, x: 0, y: 600, easing: cubicOut}}"
		out:fly="{{delay: 0, duration: 50, x: 0, y: -600, easing: cubicOut}}"
	>
		<img src="/images/mandala/web7.webp" alt="isanicon" />
	</div>
	{/if}
	{#if isNine}
	<div class="imager" id="rama"
		in:fly="{{delay: 100, duration: 100, x: 0, y: 600, easing: cubicOut}}"
		out:fly="{{delay: 0, duration: 50, x: 0, y: -600, easing: cubicOut}}"
	>
		<img src="/images/mandala/web8.webp" alt="isanicon" />
	</div>
	{/if}
</div>

<style>

.linker { position: relative; height: 100vh;}
.majorlink {
	font-size: 32px;
	padding: 12px 0;
}
.majorlink a { color: #272727;}
.majorlink a:hover { color: #10c56d;}
.imager { position: absolute; top: 0px; right: 80px;}
.imager img { object-fit: cover; width: 600px; height: 100%; display: none;}

</style>