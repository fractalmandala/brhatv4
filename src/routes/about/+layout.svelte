<script lang="ts">
import '$lib/styles/globaltemplate.sass'
import Animations from "textify.js";
import { onMount } from 'svelte'


onMount(() => {
	const { Textify } = Animations;
	new Textify({
		duration: 500,
		once: false,
		stagger: 200,
		threshold: 0.1
	})
})
</script>

<slot></slot>