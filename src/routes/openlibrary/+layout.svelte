<script>
import { onMount } from 'svelte'
import Animations from "textify.js";
import '$lib/styles/textify.css'
const { Textify } = Animations;

onMount(() => {
	new Textify({
		duration: 1200,
		stagger: 400,
		threshold: 0.2,
		once: false,
		easing: 'circOut',
	})
})
</script>



<slot></slot>





<style>


:global(body) {
	background: white;
	color: #474747;
	transition: background 0.25s;
}

:global(body.dark-mode) {
	background: var(--beau);
	color: white;
}

</style>
