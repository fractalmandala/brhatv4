<script lang="ts">
import '$lib/styles/globaltemplate.sass'
import Animations from "textify.js";
import { onMount } from 'svelte'


onMount(() => {
	const { Textify } = Animations;
	new Textify({
		duration: 1000,
		once: false,
		top: false,
		stagger: 100,
		threshold: 0.1
	})
})
</script>

<slot></slot>