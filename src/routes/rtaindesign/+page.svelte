<script>
import { onMount } from 'svelte'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

onMount(() => {
gsap.registerPlugin(ScrollTrigger);
const sections = document.querySelectorAll(".section");

gsap.set(sections, { x: "-100%", autoAlpha: 0 });

sections.forEach((section, index) => {
  const nextSection = sections[index + 1];
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      pinSpacing: false
    }
  });


  tl.to(section, { x: "0%", autoAlpha: 1 });
  if (nextSection) {
    tl.to(nextSection, { x: "0%", autoAlpha: 1 }, "-=0.5");
  }
});

})

</script>
<div class="contcont">
<div class="section sec1 c-c-c-c"></div>
<div class="section sec2 c-c-c-c"></div>
<div class="section sec3 c-c-c-c"></div>
</div>
<style>
.sec1 { background: white;}
.sec2 { background: red;}
.sec3 { background: blue;}
.section {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.contcont {
  overflow: hidden;
}
</style>