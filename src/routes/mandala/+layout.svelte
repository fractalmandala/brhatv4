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
	const mainttt = new Textify({
		selector: 'onlyone',
		duration: 5000,
		stagger: 500,
		delay: 8000,
		reveal: true,
		threshold: 0.2,
		once: false,
		top: false,
		easing: 'circOut',
	})
})
</script>

<slot></slot>



