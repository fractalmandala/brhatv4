<script lang="ts">
import { onMount } from 'svelte';
import Documentation from '$lib/components/docs/Documentation.svelte'
import Animation from '$lib/components/docs/Animation.svelte'
import General from '$lib/components/docs/General.svelte'
import PostGre from '$lib/components/docs/PostGre.svelte'
import Supabase from '$lib/components/docs/Supabase.svelte'
import Sveltecode from '$lib/components/docs/Documentation.svelte'
import Typescript from '$lib/components/docs/Documentation.svelte'
import Codes from '$lib/components/docs/Codes.svelte'

let activeDivId = 'cat-1'

function toggleWid(e: {currentTarget: {id: string;};}) {
  if (activeDivId === e.currentTarget.id) {
    return;
  }
    activeDivId = e.currentTarget.id;
  }

onMount(() => {
  document.getElementById(activeDivId).focus();
});


</script>

<div id="cat-1" class="cat {activeDivId === 'cat-1' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
	<p>Documentation</p>
	<div class="c-c-c-c in-cat">
	<Documentation></Documentation>
	</div>
</div>
<div id="cat-2" class="cat {activeDivId === 'cat-2' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
	<p>Animation</p>
	<div class="c-c-c-c in-cat">
	<Animation></Animation>
	</div>
</div>
<div id="cat-3" class="cat {activeDivId === 'cat-3' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
	<p>General</p>
	<div class="c-c-c-c in-cat">
	<General></General>
	</div>
</div>
<div id="cat-4" class="cat {activeDivId === 'cat-4' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
	<p>SQL</p>
	<div class="c-c-c-c in-cat">
		<PostGre></PostGre>
	</div>
</div>
<div id="cat-5" class="cat {activeDivId === 'cat-5' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
	<p>Supabase</p>
	<div class="c-c-c-c in-cat">
		<Supabase></Supabase>
	</div>
</div>
<div id="cat-6" class="cat {activeDivId === 'cat-6' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
	<p>Sveltecode</p>
	<div class="c-c-c-c in-cat">
		<Sveltecode></Sveltecode>
	</div>
</div>
<div id="cat-7" class="cat {activeDivId === 'cat-7' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
	<p>Typescript</p>
	<div class="c-c-c-c in-cat">
		<Typescript></Typescript>
	</div>
</div>
<div id="cat-8" class="cat {activeDivId === 'cat-8' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
	<p>All</p>
	<div class="c-c-c-c in-cat">
		<Codes></Codes>
	</div>
</div>


<style>

.cat {
	width: 100%;
	transition: width 0.42s ease;
	display: flex;
	flex-direction: column;
	background: white;
}

.cat.active {
	height: max-content;
	padding-bottom: 12px;
}

.cat > .c-c-c-c { display: none;}

.cat.active > .c-c-c-c {
	display: flex;
}
.c-c-c-c { width: 100%; height: 100%;}

@media screen and (min-width: 768px) {
	.cat p { font-weight: bold; color: #62AC40;text-transform: uppercase; letter-spacing: 2px; font-size: 14px; margin-bottom: 0; margin-top: 8px;}
}

</style>
