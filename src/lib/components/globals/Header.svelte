<script lang="ts">
import supabase from '$lib/db'
import { fade } from 'svelte/transition';
import { fly } from 'svelte/transition'
import { circOut } from 'svelte/easing'
import { circIn } from 'svelte/easing'
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

<style>

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

@media screen and (min-width: 900px) {
	.headerbox, .header { height: 72px;}
	.headerbox { padding: 0 40px;}
	.logo { width: calc(100% - 48px); height: 100%; align-items: center; }
	.motif { width: 50px; height: 50px;}
	.logotype { width: 96px; height: 38px; margin-top: 10px; margin-left: 12px;}
	.mobilemenu { width: 48px; height: 100%;}
	.mobilemenu img { width: 40px; height: 40px;}
	.menu-red { margin-bottom: -40px;}
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
}

@media screen and (max-width: 575px) {
	.headerbox, .header { height: 72px;}
	.headerbox { padding: 0 16px; justify-content: space-between;}
	.logo { width: calc(100% - 80px); height: 100%; gap: 0;align-items: center; justify-content: flex-start;}
	.motif { width: 52px; height: 52px;}
	.logotype { width: 90px; height: 48px; margin-top: 12px; margin-left: -18px; }
	.mobilemenu { width: 48px; height: 100%;}
	.mobilemenu img { width: 48px; height: 48px;}
	.menu-red { margin-bottom: -48px;}
}

</style>