<script>
import { onMount } from 'svelte'
import Animations from "textify.js";
import '$lib/styles/textify.css'
const { Textify } = Animations;

onMount(() => {
	new Textify({
		duration: 600,
		fade: true,
		reveal: true,
		stagger: 200,
		threshold: 0.2,
		once: false,
		top: false
	})
})
</script>

<slot></slot>

