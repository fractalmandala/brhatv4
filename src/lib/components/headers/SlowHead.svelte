<script>
import { onMount } from 'svelte'
import '$lib/styles/globaltemplate.sass'
import Animations from "textify.js";
const { Textify } = Animations;


onMount(() => {
	new Textify({
		duration: 4000,
		selector: "mainslow",
		reveal: true,
		threshold: 0.2,
		once: false,
		top: true
	})
})
</script>

<div class="mainslow" id="mainslow" data-textify>
<slot></slot>
</div>

<style>
.mainslow { color: white; font-size: 56px;}
</style>