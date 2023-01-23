<script>
// @ts-nocheck

import { onMount } from 'svelte'
import Footer from '$lib/components/globals/Footer.svelte'
import Header from '$lib/components/globals/Header.svelte'
import AOS from 'aos';
import '$lib/styles/globals.css'
import '$lib/styles/componentstyles.css'
 import 'aos/dist/aos.css'; // You can also use <link> for styles
 // ..
 onMount(() => {
    window.addEventListener("scroll", handleScroll);
		let rotation = 0;
  	function handleScroll() {
    	rotation = window.pageYOffset / 4;
    	let image = document.getElementById("rotate-img");
    	if(image){
      	image.style.transform = `rotate(${rotation}deg)`;
    	}
		}
  }) 

 if (typeof window !== 'undefined') {
    AOS.init();
    AOS.refresh();
  }
</script>

<Header></Header>
  <slot></slot>
<Footer></Footer>
