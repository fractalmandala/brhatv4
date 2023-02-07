<script>
// @ts-nocheck
import { onMount } from 'svelte'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
import HeadGeneral from '$lib/components/globals/Header2023.svelte'
import AOS from 'aos';
import '$lib/styles/reader.sass'
import '$lib/styles/globals.css'
import '$lib/styles/componentstyles.css'
import 'aos/dist/aos.css'; // You can also use <link> for styles


 // ..
 onMount(() => {
		AOS.init();
    AOS.refresh();
  }) 

</script>


<HeadGeneral></HeadGeneral>
<slot></slot>
<Footer></Footer>




