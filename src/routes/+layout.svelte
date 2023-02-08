<script>
// @ts-nocheck
import { onMount } from 'svelte'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
import HeadGeneral from '$lib/components/globals/Header2023.svelte'
import Animations from "textify.js";
import AOS from 'aos';
import '@animxyz/core'
import '$lib/styles/reader.sass'
import '$lib/styles/globals.css'
import '$lib/styles/componentstyles.css'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import '$lib/styles/textify.css'
import '$lib/styles/scrollCue.css'


 // ..
 onMount(() => {
		AOS.init();
    AOS.refresh();
		const { Textify } = Animations;
		new Textify({
			duration: 700,
			threshold: 0.4,
		})
  }) 

</script>


<HeadGeneral></HeadGeneral>
<slot></slot>
<Footer></Footer>




