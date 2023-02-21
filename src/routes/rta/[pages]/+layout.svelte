<script>
import { fly } from 'svelte/transition'
import { quadIn } from 'svelte/easing'
let isMobile = false
let x = 1

function toggleMenu(){
	isMobile = !isMobile
}
</script>


<svelte:window bind:innerWidth={x}/>
<div class="flexbox-r">
	<div class="flexbox-c mobilemenu">
			<svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={toggleMenu} on:keydown={toggleMenu}>
				<g clip-path="url(#clip0_71_23)">
				<path d="M32 16H0V12H32V16ZM32 4H0V0H32V4Z" fill="#10C56D"/>
				</g>
				<defs>
				<clipPath id="clip0_71_23">
				<rect width="32" height="16" fill="white"/>
				</clipPath>
				</defs>
			</svg>
			{#if isMobile}
			<div class="flexbox-c menuscreen" in:fly="{{ y: 0, x: -575, duration: 200, easing: quadIn }}" out:fly="{{ y: 0, x: -575, duration: 200, easing: quadIn}}" on:click={toggleMenu} on:keydown={toggleMenu}>
				<h6 class="green w400"><a href="/rta">Ṛta in Design Home</a></h6>
				<small><a href="/rta/prologue">Prelude to RID</a></small>
				<small><a href="/rta/intro">Introduction</a></small>
				<small><a href="/rta/dharmaisdesign">Dharma is Design</a></small>
				<small><a href="/rta">Framework</a></small>
				<small><a href="/rta">Principles</a></small>
				<small><a href="/rta">Phases</a></small>
				<small><a href="/rta">Tools and Resources</a></small>
				<small><a href="/rta">References</a></small>
				<small><a href="/rta">Glossary</a></small>
				<small><a href="/rta">Design @ Bṛhat</a></small>
			</div>
			{/if}
		</div>
	<div class="flexbox-c sidebb">
		<h6 class="green w400"><a href="/rta">Ṛta in Design Home</a></h6>
		<small><a href="/rta/prologue">Prelude to RID</a></small>
		<small><a href="/rta/intro">Introduction</a></small>
		<small><a href="/rta/dharmaisdesign">Dharma is Design</a></small>
		<small><a href="/rta">Framework</a></small>
		<small><a href="/rta">Principles</a></small>
		<small><a href="/rta">Phases</a></small>
		<small><a href="/rta">Tools and Resources</a></small>
		<small><a href="/rta">References</a></small>
		<small><a href="/rta">Glossary</a></small>
		<small><a href="/rta">Design @ Bṛhat</a></small>
	</div>
	<div class="flexbox-c main">
		<slot></slot>
	</div>
</div>





<style>

.sidebb small { color: #878787; transform-origin: center left; font-weight: 300; font-size: 14px !important;}
.sidebb small:hover { transform: scale(1.1);}
.sidebb a, .menuscreen a {color: inherit;}
.sidebb a:hover, .menuscreen a:hover { color: #10c56e;}
.sidebb {
	background: #fefefe;
	border-right: 1px solid #f1f1f1;
}


@media screen and (min-width: 768px) {
	.sidebb { width: 320px; height: 100%; position: sticky; top:0; padding-left: 40px; padding-top: 120px; padding-bottom: 200px; }	
  .sidebb small { margin-top: 8px; margin-bottom: 2px;}
	.main { width: calc(100% - 320px); padding: 0;}
	.flexbox-r { padding-bottom: 80px;}
	.mobilemenu { display: none;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.sidebb { width: 240px; height: 100%; position: sticky; top:0; padding-left: 40px; padding-top: 120px; padding-bottom: 200px; }	
  .sidebb small { margin-top: 8px; margin-bottom: 2px;}
	.main { width: calc(100% - 240px); padding: 0;}
	.flexbox-r { padding-bottom: 80px;}
	.mobilemenu { display: none;}
}

@media screen and (max-width: 575px) {
	.sidebb { display: none;}
	.main { width: 100%; height: 100%; order: 2;}
	.mobilemenu { display: flex; width: 100%; height: 48px; justify-content: center; padding-left: 24px; position: fixed; top: 72px; background: rgba(255,255,255,0.8); backdrop-filter: blur(4px); z-index: 800;}
	.mobilemenu svg { width: 24px;}
	.menuscreen { background: rgba(255,255,255,0.9); backdrop-filter: blur(8px); z-index: 800; width: 100vw; height: calc(100vh - 120px); position: fixed; top: 48px; left: 0; border-top: 1px solid #f1f1f1; padding: 24px; overflow-y: scroll;}
	.menuscreen small { font-weight: 300; }

}

</style>