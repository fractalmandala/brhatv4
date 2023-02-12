<script>
import { onMount } from 'svelte'
import Animations from "textify.js";
import '$lib/styles/textify.css'

const { Textify } = Animations;

onMount(() => {
	new Textify({
		duration: 700,
		reveal: true,
		stagger: 40,
		threshold: 0.2,
		once: false,
		easing: 'circOut',
	})
});
</script>