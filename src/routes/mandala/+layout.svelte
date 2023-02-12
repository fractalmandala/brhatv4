<script>
import { onMount } from 'svelte'
import '$lib/styles/globaltemplate.sass'
import Animations from "textify.js";
import '$lib/styles/textify.css'
const { Textify } = Animations;

onMount(() => {
	const maint = new Textify({
		duration: 700,
		reveal: true,
		stagger: 40,
		threshold: 0.2,
		once: false,
		right: true,
		easing: 'circOut',
	})
})
</script>

<slot></slot>



