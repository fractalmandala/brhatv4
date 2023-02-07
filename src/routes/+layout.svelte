<script>
// @ts-nocheck
import { onMount } from 'svelte'
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


<slot></slot>


