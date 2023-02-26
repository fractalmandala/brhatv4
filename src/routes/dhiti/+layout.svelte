<script>
import { onMount } from 'svelte'
import Animations from "textify.js";
import '$lib/styles/textify.css';
import '$lib/styles/testfont.css'

onMount(() => {
const { Textify, TextifyTitle } = Animations;
	new TextifyTitle({
	  selector: ".holderehtwo",
	  duration: 1000,
	  stagger: 50,
	  once: false,
		reveal: true,
	  fade: true,
	  fadeDuration: 500,
	  ease: "elasticInOut"
	});
	new Textify({
	  selector: ".author",
	  duration: 600,
	  once: false,
	  top: true,
		reveal: true,
	  fade: true,
	  ease: "bounceIn"
	});
})
</script>
<slot></slot>


