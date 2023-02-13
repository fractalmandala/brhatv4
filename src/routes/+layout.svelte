<script lang="ts">
// @ts-nocheck
import { onMount } from 'svelte'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
import Animations from 'textify.js';
import '$lib/styles/reader.sass'
import '$lib/styles/textify.css'
import '$lib/styles/globaltemplate.sass'
const { Textify } = Animations;
const { TextifyTitle } = Animations;

onMount(() => {
	new Textify({
		duration: 400,
		stagger: 50,
		once: false,
		easing: "circInOut"
	});
	new TextifyTitle();
})


</script>


<slot></slot>
<Footer></Footer>





