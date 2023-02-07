<script lang="ts">
import { onMount } from 'svelte'
import { onDestroy } from 'svelte'
import '$lib/styles/locomotive-scroll.css'
import LocomotiveScroll from 'locomotive-scroll';

let scroll: LocomotiveScroll | null = null;

const initScroll = () => {
  scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]') as HTMLElement,
    smooth: true,
    repeat: true,
    reloadOnContextChange: true,
		multiplier: 1,
		scrollFromAnywhere: true
  });
};

onMount(() => {
  initScroll();
  if (process.browser) {
    window.addEventListener('resize', () => {
      if (scroll) {
        scroll.destroy();
      }
      initScroll();
    });
  }
});

onDestroy(() => {
  if (scroll) {
    scroll.destroy();
  }
  scroll = null;
});

</script>

<div class="white-beauty" data-scroll-container>
<slot></slot>
</div>

<style>
.white-beauty {
	background: white;
}
</style>
