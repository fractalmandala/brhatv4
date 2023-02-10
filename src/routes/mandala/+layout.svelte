<script>
import { onMount } from 'svelte'
import '$lib/styles/globaltemplate.sass'
import Animations from "textify.js";
const { Textify } = Animations;


onMount(() => {
	new Textify({
		duration: 400,
		reveal: true,
		stagger: 50,
		threshold: 0.2,
		once: false,
		top: true
	})
})
</script>

<slot></slot>



