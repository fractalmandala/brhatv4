<script>
import { onMount } from 'svelte'
import Animations from "textify.js";
import '$lib/styles/textify.css'
import '$lib/styles/prism.css'
onMount(() => {
const { Textify } = Animations;
	new Textify({
		duration: 300,
		threshold: 0.3,
		once: false
	})
	})

</script>


<slot></slot>

