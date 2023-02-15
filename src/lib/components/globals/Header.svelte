<script lang="ts">
import { reveal } from 'svelte-reveal'
import { fly } from 'svelte/transition'
import { quadIn } from 'svelte/easing'
import '$lib/styles/newglobals.sass'
let isMenu = false;
let y = 1

function showMenu() {
	isMenu = true;
}
function hideMenu() {
	isMenu = false;
}

</script>
<svelte:window bind:scrollY={y}/>

<div class="header c-c-c-c">
	<div class="headerbox r-r-r-r" style="background: linear-gradient(40deg, rgba(29, 19, 9, 0.9), rgba(7, 12, 25, 0.8))">
		<div class="r-r-r-r logo">
			<a href="/"><img src="/images/corpimages/motif.png" id="rotate-img" class="rotate motif" alt="motif" style="transform: rotate({y}deg)"/></a>
			<a href="/"><img src="/images/corpimages/logotype.png" class="logotype" alt="logotype"/></a>
		</div>
		<div class="c-c-c-c mobilemenu" on:click={showMenu} on:keydown={showMenu}>
			<img class="menu-red" src="/images/icons/icon-menu-r.png" alt="menuicon"/>
			<img class="menu-white" src="/images/icons/icon-menu-w.png" alt="menuicon"/>	
		</div>
	</div>
</div>
{#if isMenu}
<div class="c-c-c-c fullscreen" in:fly="{{ duration: 400, x: 0, y: -900, opacity: 1, easing: quadIn}}" out:fly="{{ duration: 400, x: 0, y: -900, opacity: 1, easing: quadIn}}">
	<div class="r-r-r-r topstrip">
		<div class="c-c-c-c sec7"><a href="/">
			<img src="/images/brhatlogos/horizontalwhite.png" alt="finallogo" /></a>
		</div>
		<div class="closebuttonstrip" on:click={hideMenu} on:keydown={hideMenu}>
			<img src="/images/icons/hamburger-close.png" alt="closemenu"/>
		</div>
	</div>
	<div class="desk-nav r-r-r-r row-of-3">
		<div class="c-c-c-c navcol1 threebox">
			<div class="c-c-c-c linkbox boxer">
			<span class="typ1"></span>
			<span class="typ2"></span>
			<span class="typ3"></span>
			<span class="typ4"></span>
			<h5 use:reveal={{ transition: "slide", duration: 200 }}><a href="/anveshi">Bṛhat Anveṣī</a></h5>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 50 }}><a href="/anveshi/chapter">Chapters</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 100 }}><a href="/anveshi/diaries">Travel Diaries</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 150 }}><a href="/anveshi/faq">FAQ</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 200 }}><a href="/anveshi/gallery">Gallery</a></p>
			</div>
			<div class="c-c-c-c linkbox boxer">
			<span class="typ1"></span>
			<span class="typ2"></span>
			<span class="typ3"></span>
			<span class="typ4"></span>
			<h5 use:reveal={{ transition: "slide", duration: 200 }}><a href="/drashta">Bṛhat Draṣṭā</a></h5>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 50 }}><a href="/drashta/course">Courses</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 100 }}><a href="/drashta/firekeepers">Firekeepers</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 150 }}><a href="/drashta/drashta">Draṣṭās</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 200 }}><a href="/drashta/schools">Schools</a></p>
			</div>
			<div class="c-c-c-c linkbox boxer">
			<span class="typ1"></span>
			<span class="typ2"></span>
			<span class="typ3"></span>
			<span class="typ4"></span>
			<h5 use:reveal={{ transition: "slide", duration: 200 }}><a href="/mrdanga">Bṛhadmṛdaṅga</a></h5>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 50 }}><a href="/mrdanga/kala">Kalā</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 100 }}><a href="/mrdanga/rasa">Rasa</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 150 }}><a href="/mrdanga/kavita">Kavitā</a></p>
			</div>
		</div>
		<div class="c-c-c-c navcol1 threebox">
			<div class="c-c-c-c linkbox boxer">
			<span class="typ1"></span>
			<span class="typ2"></span>
			<span class="typ3"></span>
			<span class="typ4"></span>
			<h5 use:reveal={{ transition: "slide", duration: 200 }}><a href="/mandala">Fractal Maṇḍala</a></h5>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 50 }}><a href="/mandala/essays">Essays</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 100 }}><a href="/mandala/aphorisms">Caturasūtra</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 150 }}><a href="/mandala/synaptic">Synaptic Reconnection</a></p>
			</div>
			<div class="c-c-c-c linkbox boxer">
			<span class="typ1"></span>
			<span class="typ2"></span>
			<span class="typ3"></span>
			<span class="typ4"></span>
			<h5 use:reveal={{ transition: "slide", duration: 200 }}><a href="/rta">Ṛta in Design</a></h5>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 50 }}><a href="/rta/phases">Phases</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 100 }}><a href="/rta/principles">Principles</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 150 }}><a href="/rta/schema">Framework</a></p>
			</div>
			<div class="c-c-c-c linkbox boxer">
			<span class="typ1"></span>
			<span class="typ2"></span>
			<span class="typ3"></span>
			<span class="typ4"></span>
			<h5 use:reveal={{ transition: "slide", duration: 200 }}><a href="/aryavarta">Scrolls of Āryavarta</a></h5>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 50 }}><a href="/aryavarta/chapter/01">Kaśyapa's Lament</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 100 }}><a href="/aryavarta/chapter/02">Sūta and Sudā</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 150 }}><a href="/aryavarta/gallery">Gallery</a></p>
			</div>
		</div>
		<div class="c-c-c-c navcol1 threebox">
			<div class="c-c-c-c linkbox boxer">
			<span class="typ1"></span>
			<span class="typ2"></span>
			<span class="typ3"></span>
			<span class="typ4"></span>
			<h5 use:reveal={{ transition: "slide", duration: 200 }}><a href="/about">About</a></h5>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 50 }}><a href="/about/#actions">Actions</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 100 }}><a href="/about/docs/namelogo">Nāmarūpa</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 150 }}><a href="/about/docs/values">Pratijñā</a></p>
			<p use:reveal={{ transition: "slide", duration: 200, delay: 200 }}><a href="/about/docs">Vision</a></p>			
			</div>
			<div class="c-c-c-c linkbox boxer">
			<span class="typ1"></span>
			<span class="typ2"></span>
			<span class="typ3"></span>
			<span class="typ4"></span>
			<h5 use:reveal={{ transition: "slide", duration: 300 }}><a href="/openlibrary">Open Library</a></h5>
			</div>
			<div class="c-c-c-c linkbox boxer">
			<span class="typ1"></span>
			<span class="typ2"></span>
			<span class="typ3"></span>
			<span class="typ4"></span>
			<h5 use:reveal={{ transition: "slide", duration: 300, delay: 50 }}><a href="/dhiti">Dhīti</a></h5>
			</div>
		</div>
	</div>
	<div class="c-c-c-c mob-nav">
		<div class="c-c-c-c section sec0">
			<h5 use:reveal={{ transition: "scale", duration: 300 }}><a href="/openlibrary">Open Library</a></h5>
			<h5 use:reveal={{ transition: "scale", duration: 300, delay: 50 }}><a href="/dhiti">Dhīti</a></h5>
		</div>
		<div class="c-c-c-c section sec1">
			<h5 use:reveal={{ transition: "scale", duration: 200 }}><a href="/mrdanga">Bṛhadmṛdaṅga</a></h5>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 50 }}><a href="/mrdanga/kala">Kalā</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 100 }}><a href="/mrdanga/rasa">Rasa</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 150 }}><a href="/mrdanga/kavita">Kavitā</a></p>
		</div>
		<div class="c-c-c-c section sec2">
			<h5 use:reveal={{ transition: "scale", duration: 200 }}><a href="/drashta">Bṛhat Draṣṭā</a></h5>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 50 }}><a href="/drashta/course">Courses</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 100 }}><a href="/drashta/firekeepers">Firekeepers</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 150 }}><a href="/drashta/drashta">Draṣṭās</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 200 }}><a href="/drashta/schools">Schools</a></p>
		</div>
		<div class="c-c-c-c section sec3">
			<h5 use:reveal={{ transition: "scale", duration: 200 }}><a href="/anveshi">Bṛhat Anveṣī</a></h5>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 50 }}><a href="/anveshi/chapter">Chapters</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 100 }}><a href="/anveshi/diaries">Travel Diaries</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 150 }}><a href="/anveshi/faq">FAQ</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 200 }}><a href="/anveshi/gallery">Gallery</a></p>
		</div>
		<div class="c-c-c-c section sec4">
			<h5 use:reveal={{ transition: "scale", duration: 200 }}><a href="/mandala">Fractal Maṇḍala</a></h5>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 50 }}><a href="/mandala/essays">Essays</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 100 }}><a href="/mandala/aphorisms">Caturasūtra</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 150 }}><a href="/mandala/synaptic">Synaptic Reconnection</a></p>
		</div>
		<div class="c-c-c-c section sec5">
			<h5 use:reveal={{ transition: "scale", duration: 200 }}><a href="/rta">Ṛta in Design</a></h5>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 50 }}><a href="/rta/phases">Phases</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 100 }}><a href="/rta/principles">Principles</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 150 }}><a href="/rta/schema">Framework</a></p>
		</div>
		<div class="c-c-c-c section sec6">
			<h5 use:reveal={{ transition: "scale", duration: 200 }}><a href="/aryavarta">Scrolls of Āryavarta</a></h5>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 50 }}><a href="/aryavarta/chapter/01">Kaśyapa's Lament</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 100 }}><a href="/aryavarta/chapter/02">Sūta and Sudā</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 150 }}><a href="/aryavarta/gallery">Gallery</a></p>
		</div>
		<div class="c-c-c-c section sec6">
			<h5 use:reveal={{ transition: "scale", duration: 200 }}><a href="/about">About</a></h5>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 50 }}><a href="/about/#actions">Actions</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 100 }}><a href="/about/docs/namelogo">Nāmarūpa</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 150 }}><a href="/about/docs/values">Pratijñā</a></p>
			<p use:reveal={{ transition: "scale", duration: 200, delay: 200 }}><a href="/about/docs">Vision</a></p>
		</div>
		<div class="r-r-r-r socialicons">
      <a href="https://twitter.com/brhat_in" target="_blank" rel="noreferrer"><img src="/images/icons/twitter-red.png" alt="twitter icon" /></a>
      <a href="https://www.facebook.com/brhat.in" target="_blank" rel="noreferrer"><img src="/images/icons/facebook-red.png" alt="facebook icon" /></a>
      <a href="https://www.youtube.com/@brhat" target="_blank" rel="noreferrer"><img src="/images/icons/youtube-red.png" alt="youtube icon" /></a>
      <a href="https://www.linkedin.com/company/brhat" target="_blank" rel="noreferrer"><img src="/images/icons/linkedin-red.png" alt="linkedin icon" /></a>
      <a href="https://www.instagram.com/brhat_in/" target="_blank" rel="noreferrer"><img src="/images/icons/instagram-red.png" alt="instagram icon" /></a>
		</div>
	</div>
</div>
{/if}

<style>
.boxer { position: relative; overflow: hidden; transition: all 0.56s var(--cube1); border: 1px solid #373737; box-shadow: 1px 1px 2px #171717, -1px -1px 2px #212121; align-items: flex-start; justify-content: flex-start; cursor: pointer; border-radius: 4px; }
.boxer span { position: absolute; top: 0; left: 0;}
.typ1 { border-top: 1px solid #fe4a49;}
.typ2 { border-right: 1px solid #fe4a49; width: 100%; }
.typ3 { border-bottom: 1px solid #fe4a49; height: 100%;}
.typ4 { border-left: 1px solid #fe4a49;}
.boxer:hover .typ1 { animation: typ1 0.4s var(--cube1) forwards;}
.boxer:hover .typ2 { animation: typ2 0.54s var(--cube2) forwards;}
.boxer:hover .typ3 { animation: typ3 0.7s var(--cube3) forwards;}
.boxer:hover .typ4 { animation: typ4 0.5s var(--cube4) forwards;}
.boxer:hover { box-shadow: 7px 10px 15px #171717, -8px -8px 16px #212121;}

.boxer a { color: inherit;}
.boxer h5 { color: white;}
.boxer p { color: #676767;}
.boxer a:hover { color: #fe4a49;}

@keyframes typ1 {
	0% { width: 0%; margin-left: 0; }
	50% { width: 100%; margin-left: 0;}
	100% { width: 100%; margin-left: 100%;}
}

@keyframes typ2 {
	0% { height: 0; margin-top: 0;}
	50% { height: 100%; margin-top: 0;}
	100% { height: 100%; margin-top: 100%;}
}

@keyframes typ3 {
	0% { width: 100%; margin-left: 100%;}
	50% { width: 100%; margin-left: 0;}
	100% { width: 0; margin-left:0;}
}

@keyframes typ4 {
	0% { height: 100%; margin-top: 100%;}
	50% { height: 100%; margin-top: 0;}
	100% { height: 0; margin-top: 0;}
}




.logo img {
	cursor: pointer;
	object-fit: contain;
	transition: all 0.33s ease-in-out;
 	width: 100%;
 	transform-origin: center center;
}

.motif {
	object-position: center center;
}

.logotype {
	object-position: center center;
}

.motif:hover, .logotype:hover {
	transform: scale(0.9);
}

.mobilemenu img {
	object-fit: contain;
}

.menu-red {
	transition: all 0.26s ease-out;
	opacity: 0;
}

.menu-white {
	transition: all 0.26s ease-out;
	opacity: 1;
}

.mobilemenu:hover .menu-red {
	opacity: 1;
}

.mobilemenu:hover .menu-white {
	opacity: 0;
}

.mobilemenu {
	align-items: flex-end;
	justify-content: center;
}

.header { 
	position: fixed; 
	z-index: 899; 
	width: 100vw; 
	justify-content: center;
	transition: all 0.5s linear;
	margin: 0;
	left: 0;
	align-items: center;
	top: 0;
}

.headerbox { 
	width: 100%;
	backdrop-filter: blur(10px);
}

.fullscreen {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 999;
	background: var(--beau);
}

.socialicons img {
	transition: all 0.04s ease-in;
	transform-origin: center center;
	filter: saturate(0.01);
	opacity: 0.4;
	object-fit: contain;
	height: 24px;
	width: 24px;
}

.socialicons img:hover {
	opacity: 1;
	filter: saturate(1);
}

.closebuttonstrip img {
	object-fit: contain;
	transition: all 0.14s ease-in;
	transform-origin: center center;
	filter: saturate(0.01);
	opacity: 0.8;
	cursor: pointer;
}

.closebuttonstrip:hover img {
	transform: rotate(-90deg);
	opacity: 1;
	filter: saturate(1);
}

.closebuttonstrip {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding-right: 8px;
	text-align: right;
}


.mob-nav { overflow-y: scroll;}

.mob-nav a { color: inherit;}
.mob-nav h5 { color: white;}
.mob-nav p { color: #878787;}

.linkbox {
	transform-origin: center center;
}

@media screen and (min-width: 900px) {
	.headerbox, .header { height: 72px;}
	.headerbox { padding: 0 40px;}
	.logo { width: calc(100% - 48px); height: 100%; align-items: center; }
	.motif { width: 50px; height: 50px;}
	.logotype { width: 96px; height: 38px; margin-top: 10px; margin-left: 12px;}
	.mobilemenu { width: 48px; height: 100%;}
	.mobilemenu img { width: 40px; height: 40px;}
	.menu-red { margin-bottom: -40px;}
	.fullscreen { padding: 16px 0;}
	.topstrip { justify-content: space-between; border-bottom: 1px solid #373737; align-items: center; padding: 0 5vw 16px 5vw;}
	.socialicons { gap: 32px;}
	.closebuttonstrip {
		width: 100%;
	}
	.closebuttonstrip img {
		width: 32px;
		height: 32px;
	}
	.socialicons img {
		height: 24px;
		width: 24px;
	}
	.desk-nav { display: flex; padding: 0 6vw;}
	.mob-nav { display: none;}
	.sec7 img { object-fit: contain; width: 25%; transform-origin: center center; transition: all 0.23s var(--cube3);}
	.sec7 img:hover { transform: scale(0.9);}
	.threebox { min-height: 100%; gap: 24px; justify-content: center;}
	.linkbox { min-height: 28%; padding-left: 16px; padding-top: 8px; padding-bottom: 8px;}
	.boxer p { margin-bottom: 6px; font-size: 18px;}
	.boxer h5 { font-size: 21px;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.headerbox, .header { height: 72px;}
	.headerbox { padding: 0 32px;}
	.logo { width: calc(100% - 48px); height: 100%; align-items: center; }
	.motif { width: 56px; height: 56px;}
	.logotype { width: 100px; height: 42px; margin-top: 12px; margin-left: 12px;}
	.mobilemenu { width: 48px; height: 100%;}
	.mobilemenu img { width: 48px; height: 48px;}
	.menu-red { margin-bottom: -48px;}
	.socialicons img {
		height: 24px;
		width: 24px;
	}
	.mob-nav { display: none;}
	.desk-nav { display: flex;}
	.sec7 img { object-fit: contain; width: 50%;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.headerbox, .header { height: 72px;}
	.headerbox { padding: 0 40px;}
	.logo { width: calc(100% - 48px); height: 100%; align-items: center; }
	.motif { width: 56px; height: 56px;}
	.logotype { width: 100px; height: 42px; margin-top: 12px; margin-left: 12px;}
	.mobilemenu { width: 48px; height: 100%;}
	.mobilemenu img { width: 48px; height: 48px;}
	.menu-red { margin-bottom: -48px;}
	.socialicons img {
		height: 24px;
		width: 24px;
	}
	.mob-nav { display: none;}
	.desk-nav { display: flex;}
	.sec7 img { object-fit: contain; width: 50%;}
}

@media screen and (max-width: 575px) {
	.headerbox, .header { height: 80px;}
	.header { margin-bottom: -80px;}
	.headerbox { padding: 0 16px; justify-content: space-between;}
	.logo { width: calc(100% - 80px); height: 100%; gap: 0;align-items: center; justify-content: flex-start;}
	.motif { width: 52px; height: 52px;}
	.logotype { width: 90px; height: 48px; margin-top: 12px; margin-left: -18px; }
	.mobilemenu { width: 48px;}
	.mobilemenu img { width: 48px; height: 48px;}
	.menu-red { margin-bottom: -48px;}
	.fullscreen { padding: 16px 4vw;}
	.topstrip { justify-content: space-between; border-bottom: 1px solid #373737; align-items: center; margin-bottom: 32px;}
	.socialicons { gap: 32px; width: 100%; padding-top: 32px; justify-content: flex-start;}
	.closebuttonstrip { width: 20%; height: 48px;}
	.closebuttonstrip img {
		width: 32px;
		height: 32px;
	}
	.socialicons img {
		height: 28px;
		width: 28px;
	}
	.mob-nav { display: flex; padding: 16px;}
	.mob-nav p { margin: 8px 0 5px 0; font-size: 24px;}
	.section { border-bottom: 1px solid #373737; padding-bottom: 16px; padding-top: 8px;}
	.mob-nav h5 { font-size: 32px; text-transform: uppercase; font-weight: 700;}
	.sec7 img { object-fit: contain; width: 60%;}
	.sec7 { padding: 8px 0 16px 0; width: 70%;}
	.desk-nav { display: none;}
}

</style>