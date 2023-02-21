<script lang="ts">
import AllDocs from '$lib/components/docs/AllDocs.svelte'
import { onMount } from 'svelte'
import { reveal } from 'svelte-reveal'
import { fly } from 'svelte/transition'
import { quadIn, expoIn, expoOut } from 'svelte/easing'
let isMenu = false;
let y = 1

function toggleMenu() {
	if (isMenu === true) {
		isMenu = false
	}
	else {
		isMenu = true	
	}
}

function closeMen(){
	isMenu = false
}

</script>
<svelte:window bind:scrollY={y}/>

<div class="header flexbox-c">
	<div class="headerbox flexbox-r" style="background: linear-gradient(40deg, rgba(29, 19, 9, 0.9), rgba(7, 12, 25, 0.8))">
		<div class="flexbox-r logo">
			<a href="/"><img src="/images/corpimages/motif.png" id="rotate-img" class="rotate motif" alt="motif" style="transform: rotate({y}deg)"/></a>
			<a href="/"><img src="/images/corpimages/logotype.png" class="logotype" alt="logotype"/></a>
		</div>
		<div class="flexbox-c cc-y-col mobilemenu" on:click={toggleMenu} on:keydown={toggleMenu}>
			<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="menu">
					<path id="low" d="M24.4189 36.355H6.41895V32.355H24.4189V36.355Z" fill="white"/>
					<path id="mid" d="M42.4189 26.355H6.41895V22.355H42.4189V26.355Z" fill="white"/>
					<path id="top" d="M42.4189 16.355H24.4189V12.355H42.4189V16.355Z" fill="white"/>
				</g>
			</svg>
		</div>
	</div>
</div>
{#if isMenu}
<div class="flexbox-c fullscreen" in:fly="{{ duration: 700, x: 500, y: 0, opacity: 1, easing: expoIn}}" out:fly="{{ duration: 400, x: 500, y: 0, opacity: 1, easing: expoIn}}">
	<div class="flexbox-r topstrip">
		<div class="closebuttonstrip" on:click={closeMen} on:keydown={closeMen}>
			<img src="/images/icons/hamburger-close.png" alt="closemenu"/>
		</div>
	</div>
	<div class="desk-nav flexbox-c">
			<AllDocs
			--fordocs="#373737"
			></AllDocs>
			<h5 class="w500" use:reveal={{ transition: "slide", duration: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/aryavarta">Scrolls of Āryavarta</a></h5>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 50 }} on:click={closeMen} on:keydown={closeMen}><a href="/aryavarta/chapter/01">Kaśyapa's Lament</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 100 }} on:click={closeMen} on:keydown={closeMen}><a href="/aryavarta/chapter/02">Sūta and Sudā</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 150 }} on:click={closeMen} on:keydown={closeMen}><a href="/aryavarta/gallery">Gallery</a></h6>
		<h5 class="w500" use:reveal={{ transition: "slide", duration: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/anveshi">Bṛhat Anveṣī</a></h5>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 50 }} on:click={closeMen} on:keydown={closeMen}><a href="/anveshi/chapter">Chapters</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 100 }} on:click={closeMen} on:keydown={closeMen}><a href="/anveshi/diaries">Travel Diaries</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 150 }} on:click={closeMen} on:keydown={closeMen}><a href="/anveshi/faq">FAQ</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/anveshi/gallery">Gallery</a></h6>
		<h5 class="w500" use:reveal={{ transition: "slide", duration: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/about">About</a></h5>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 50 }} on:click={closeMen} on:keydown={closeMen}><a href="/about/docs/anatomy">Anatomy of a Civilizational Moment</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 100 }} on:click={closeMen} on:keydown={closeMen}><a href="/about/docs/svatahsiddha">Svataḥsiddha</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 150 }} on:click={closeMen} on:keydown={closeMen}><a href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/about/docs/namelogo">Nāmarūpa</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/about/docs/values">Pratijñā</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/about/#team">Team</a></h6>
			<h5 class="w500" use:reveal={{ transition: "slide", duration: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/drashta">Bṛhat Draṣṭā</a></h5>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 50 }} on:click={closeMen} on:keydown={closeMen}><a href="/drashta/course">Courses</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 100 }} on:click={closeMen} on:keydown={closeMen}><a href="/drashta/firekeepers">Firekeepers</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 150 }} on:click={closeMen} on:keydown={closeMen}><a href="/drashta/drashta">Draṣṭās</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/drashta/schools">Schools</a></h6>
			<h5 class="w500" use:reveal={{ transition: "slide", duration: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/mrdanga">Bṛhadmṛdaṅga</a></h5>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 50 }} on:click={closeMen} on:keydown={closeMen}><a href="/mrdanga/kala">Kalā</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 100 }} on:click={closeMen} on:keydown={closeMen}><a href="/mrdanga/rasa">Rasa</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 150 }} on:click={closeMen} on:keydown={closeMen}><a href="/mrdanga/kavita">Kavitā</a></h6>
			<h5 class="w500" use:reveal={{ transition: "slide", duration: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/mandala">Fractal Maṇḍala</a></h5>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 50 }} on:click={closeMen} on:keydown={closeMen}><a href="/mandala/essays">Essays</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 100 }} on:click={closeMen} on:keydown={closeMen}><a href="/mandala/aphorisms">Caturasūtra</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 150 }} on:click={closeMen} on:keydown={closeMen}><a href="/mandala/synaptic">Synaptic Reconnection</a></h6>
			<h5 class="w500" use:reveal={{ transition: "slide", duration: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/rta">Ṛta in Design</a></h5>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 50 }} on:click={closeMen} on:keydown={closeMen}><a href="/rta/phases">Phases</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 100 }} on:click={closeMen} on:keydown={closeMen}><a href="/rta/principles">Principles</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 150 }} on:click={closeMen} on:keydown={closeMen}><a href="/rta/schema">Framework</a></h6>
			<h5 class="w500" use:reveal={{ transition: "slide", duration: 300 }} on:click={closeMen} on:keydown={closeMen}><a href="/openlibrary">Open Library</a></h5>
			<h5 class="w500" use:reveal={{ transition: "slide", duration: 300, delay: 50 }} on:click={closeMen} on:keydown={closeMen}><a href="/dhiti">Dhīti</a></h5>
	</div>
</div>
{/if}

<style>
#top, #mid, #low { transition: all 0.09s var(--cubea);}
.mobilemenu:hover #top, .mobilemenu:hover #mid, .mobilemenu:hover #low { fill: #fe4a49;}
.mobilemenu:hover #top { transform: translateX(-18px);}
.mobilemenu:hover #low { transform: translateX(18px); transition-delay: 0.09s;}
.mobilemenu { cursor: pointer;}

.fullscreen {
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	transition: background-image 0.16s var(--cubed);
	z-index: 899; 
}

.desk-nav { 
	z-index: 999; 
}
.desk-nav h5 { color: white;}
.desk-nav h6 { color: #676767;}
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
	right: 0;
	height: 100vh;
	z-index: 999;
	background: var(--beau);
}

.fullscreen::after {
	position: absolute;
	top: 50%;
	right: 0;
	width: 100%;
	height: 0%;
	content: '';
	border-left: 1px solid #fe4a49;
}

.fullscreen:hover::after {
	animation: linecoming 0.5s var(--cubec) forwards;
}

@keyframes linecoming {
	0% { top: 50%; height: 0%;}
	100% { top: 0; height: 100%;}
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
.topstrip {z-index: 10;}


@media screen and (min-width: 900px) {
	.topstrip { background: transparent;}
	.headerbox, .header { height: 72px;}
	.headerbox { padding: 0 40px;}
	.logo { width: calc(100% - 48px); height: 100%; align-items: center; }
	.motif { width: 50px; height: 50px;}
	.logotype { width: 96px; height: 38px; margin-top: 10px; margin-left: 12px;}
	.mobilemenu svg { width: 40px;}
	.fullscreen { padding: 0;	width: 32vw;}
	.topstrip { justify-content: space-between; align-items: center; padding: 32px 40px 0 5vw; height: 72px;}

	.closebuttonstrip {
		width: 100%;
	}
	.closebuttonstrip img {
		width: 32px;
		height: 32px;
	}
	.desk-nav { display: flex; padding: 16px 48px 32px 48px; height: calc(100% - 72px); overflow-y: scroll;}
	.desk-nav h5 { margin-top: 24px; margin-bottom: 0; padding-top: 24px; border-top: 1px solid #373737;}
	.desk-nav h6 { margin-top: 16px; margin-bottom: 0;}

}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.topstrip { background: transparent; }
	.headerbox, .header { height: 72px;}
	.headerbox { padding: 0 32px;}
	.logo { width: calc(100% - 48px); height: 100%; align-items: center; }
	.motif { width: 56px; height: 56px;}
	.logotype { width: 100px; height: 42px; margin-top: 12px; margin-left: 12px;}
	.mobilemenu svg { width: 40px;}
	.fullscreen { padding: 0;	width: 40vw;}
	.topstrip { justify-content: space-between; align-items: center; padding: 32px 40px 0 5vw; height: 72px;}

	.closebuttonstrip {
		width: 100%;
	}
	.closebuttonstrip img {
		width: 32px;
		height: 32px;
	}
	.desk-nav { display: flex; padding: 16px 24px 32px 24px; height: calc(100% - 72px); overflow-y: scroll;}
	.desk-nav h5 { margin-top: 24px; margin-bottom: 0; padding-top: 24px; border-top: 1px solid #373737;}
	.desk-nav h6 { margin-top: 16px; margin-bottom: 0;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.topstrip { background: transparent;}
	.headerbox, .header { height: 72px;}
	.headerbox { padding: 0 40px;}
	.logo { width: calc(100% - 48px); height: 100%; align-items: center; }
	.motif { width: 56px; height: 56px;}
	.logotype { width: 100px; height: 42px; margin-top: 12px; margin-left: 12px;}
	.mobilemenu svg { width: 40px;}
	.fullscreen { padding: 0;	width: 44vw;}
	.topstrip { justify-content: space-between; align-items: center; padding: 32px 40px 0 5vw; height: 72px;}

	.closebuttonstrip {
		width: 100%;
	}
	.closebuttonstrip img {
		width: 32px;
		height: 32px;
	}
	.desk-nav { display: flex; padding: 16px 24px 32px 24px; height: calc(100% - 72px); overflow-y: scroll;}
	.desk-nav h5 { margin-top: 24px; margin-bottom: 0; padding-top: 24px; border-top: 1px solid #373737;}
	.desk-nav h6 { margin-top: 16px; margin-bottom: 0;}

}

@media screen and (max-width: 575px) {
	.headerbox, .header { height: 72px;}
	.header { margin-bottom: -72px;}
	.headerbox { padding: 0 16px; justify-content: space-between;}
	.logo { width: calc(100% - 80px); height: 100%; gap: 0;align-items: center; justify-content: flex-start;}
	.motif { width: 48px; height: 48px;}
	.logotype { width: 88px; height: 40px; margin-top: 12px; margin-left: 8px; }

	.mobilemenu svg { width: 40px;}
	.fullscreen { padding: 0; width: 100vw;}
	.topstrip { justify-content: space-between; align-items: center; padding: 16px 24px 0 24px; height: 48px;}

	.closebuttonstrip {
		width: 100%;
	}
	.closebuttonstrip img {
		width: 32px;
		height: 32px;
	}
	.desk-nav { display: flex; padding: 16px 32px 32px 32px; height: calc(100% - 72px); overflow-y: scroll;}
	.desk-nav h5 { margin-top: 16px; margin-bottom: 0; padding-top: 24px; border-top: 1px solid #373737;}
	.desk-nav h6 { margin-top: 16px; margin-bottom: 0;}
}

</style>