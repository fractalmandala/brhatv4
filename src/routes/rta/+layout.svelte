<script>
import '$lib/styles/globaltemplate.sass'
import { onMount } from 'svelte'
import Animations from 'textify.js'
import '$lib/styles/textify.css'

onMount(() => {
	const { Textify } = Animations;
	new Textify({
		reveal: true,
		duration: 300,
		once: false,
		stagger: 100,
		threshold: 0.1
	})
})



</script>


<slot></slot>



