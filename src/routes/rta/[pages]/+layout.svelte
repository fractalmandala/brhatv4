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
	<div class="flexbox-c sidebb">
		<h6 class="green w600"><a href="/rta">Ṛta in Design Home</a></h6>
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
	<div class="flexbox-c maindoc rta">
		<slot></slot>
	</div>
</div>





<style>

.sidebb a:hover { color: #10c56e;}

@media screen and (min-width: 768px) {
	.flexbox-r { padding-bottom: 80px;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.flexbox-r { padding-bottom: 80px;}
}

</style>