<script lang="ts">
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
		<h5 class="w500" use:reveal={{ transition: "slide", duration: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/anveshi">Bṛhat Anveṣī</a></h5>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 50 }} on:click={closeMen} on:keydown={closeMen}><a href="/anveshi/chapter/chamba">Chamba Chapter</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 50 }} on:click={closeMen} on:keydown={closeMen}><a href="/anveshi/chapter/odisha">Odisha Chapter</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 50 }} on:click={closeMen} on:keydown={closeMen}><a href="/anveshi/chapter/karnataka">Karnataka Chapter</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 100 }} on:click={closeMen} on:keydown={closeMen}><a href="/anveshi/diaries">Travel Diaries</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 150 }} on:click={closeMen} on:keydown={closeMen}><a href="/anveshi/faq">FAQ</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/anveshi/about">About</a></h6>
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
			<h5 class="w500" use:reveal={{ transition: "slide", duration: 200 }} on:click={closeMen} on:keydown={closeMen}><a href="/aryavarta">Scrolls of Āryavarta</a></h5>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 50 }} on:click={closeMen} on:keydown={closeMen}><a href="/aryavarta/chapter/01">Kaśyapa's Lament</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 100 }} on:click={closeMen} on:keydown={closeMen}><a href="/aryavarta/chapter/02">Sūta and Sudā</a></h6>
			<h6 class="w300" use:reveal={{ transition: "slide", duration: 200, delay: 150 }} on:click={closeMen} on:keydown={closeMen}><a href="/aryavarta/gallery">Gallery</a></h6>
			<h5 class="w500" use:reveal={{ transition: "slide", duration: 300 }} on:click={closeMen} on:keydown={closeMen}><a href="/openlibrary">Open Library</a></h5>
			<h5 class="w500" use:reveal={{ transition: "slide", duration: 300, delay: 50 }} on:click={closeMen} on:keydown={closeMen}><a href="/dhiti">Dhīti</a></h5>
	</div>
</div>
{/if}
