<script lang="ts">
// @ts-nocheck
import { onMount } from 'svelte'
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
import Animations from 'textify.js'
import Header from '$lib/components/globals/Header.svelte'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
import '$lib/styles/reader.sass'
import '$lib/styles/globaltemplate.sass'
import '$lib/styles/textify.css'
inject({ mode: dev ? 'development' : 'production' });

onMount(() => {
	const { Textify, TextifyTitle } = Animations;
	new TextifyTitle({
	  selector: ".txtyp2",
	  duration: 1000,
	  stagger: 100,
	  once: false,
	  threshold: 0.2
	});

	new TextifyTitle({
	  selector: ".tttyp3",
	  duration: 500,
	  stagger: 100,
	  once: false,
	  reveal: false,
	  scale: 0,
	  fade: true,
	  fadeDuration: 500,
	  ease: "bounceInOut"
	});

	new TextifyTitle({
	  selector: ".tttyp4",
	  duration: 400,
	  stagger: 50,
	  once: false,
	  scale: 0,
	  fade: true
	});

	new TextifyTitle({
	  selector: ".tttyp5",
	  duration: 1000,
	  stagger: 50,
	  once: false,
	  scale: 0,
	  fade: true,
	  fadeDuration: 500,
	  ease: "elasticInOut"
	});
	
	new Textify({
	  selector: ".txtyp1",
	  duration: 700,
	  once: false
	});

	new Textify({
	  selector: ".txtyp3",
	  duration: 400,
	  once: false,
	  scale: 0,
	  ease: "bounceInOut"
	});
	
	new Textify({
	  selector: ".txtyp4",
	  duration: 600,
	  once: false,
	  top: true,
	  fade: true,
	  ease: "bounceIn"
	});
	
	new Textify({
	  selector: ".txtyp5",
	  duration: 1000,
	  once: false
	});
	
})
	
</script>
	

<Header></Header>
<slot></slot>
<Footer></Footer>






