<script>
import { fly } from 'svelte/transition'
import { quadIn } from 'svelte/easing'
import Sidebar from '$lib/components/globals/MainSide.svelte'
let isMobile = false
let x = 1

function toggleMenu(){
	isMobile = !isMobile
}
</script>


<svelte:window bind:innerWidth={x}/>

<div class="box-r containeroftwo">
<Sidebar>
	<div slot="desktop" class="box-c box-desk">
		<p class="green w600"><a href="/rta">Ṛta in Design Home</a></p>
		<small><a href="/rta/prologue">Prelude to RID</a></small>
		<small><a href="/rta/intro">Introduction</a></small>
		<small><a href="/rta/dharmaisdesign">Dharma is Design</a></small>
		<small><a href="/rta">Framework</a></small>
		<small><a href="/rta">Principles</a></small>
		<small><a href="/rta">Phases</a></small>
		<small><a href="/rta">Tools and Resources</a></small>
		<small><a href="/rta">Design @ Bṛhat</a></small>
	</div>
	<div slot="mobile" class="box-c box-mobile">
		<p class="green w600"><a href="/rta">Ṛta in Design Home</a></p>
		<small><a href="/rta/prologue">Prelude to RID</a></small>
		<small><a href="/rta/intro">Introduction</a></small>
		<small><a href="/rta/dharmaisdesign">Dharma is Design</a></small>
		<small><a href="/rta">Framework</a></small>
		<small><a href="/rta">Principles</a></small>
		<small><a href="/rta">Phases</a></small>
		<small><a href="/rta">Tools and Resources</a></small>
		<small><a href="/rta">Design @ Bṛhat</a></small>
	</div>
</Sidebar>
<div class="c-mainbar">
	<slot></slot>
</div>
</div>

<style>
a:hover {
	color: var(--green);
}
</style>
