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
		scrollFromAnywhere: true,
		lerp: 0.1,
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

<div class="black-beauty" data-scroll-container>
<slot></slot>
</div>

<style>
.black-beauty {
	background: var(--beau);
}
</style>
