<script>
import { onMount } from 'svelte'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

onMount(() => {
	gsap.registerPlugin(ScrollTrigger);	
	gsap.to("#my-trigger-element", {
  scrollTrigger: {
    trigger: "#my-image",

    markers: true,
    toggleActions: "restart none none none"
  },
  rotation: 360,
  ease: "none"
});
})

</script>



<div class="c-c-c-c" id="my-trigger-element">
<img id="my-image" src="/images/mandala/rotator.png" alt="rot"/>
</div>

<style>
.c-c-c-c { height: 600vh;}
img { width: 200px; position: sticky; top: 200px; left: 200px; transform-origin: center center;}
</style>