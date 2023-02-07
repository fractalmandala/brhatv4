<script lang="ts">
import { onMount } from 'svelte'
import '$lib/styles/anim-scrolls.css'
import '$lib/styles/locomotive-scroll.css'
import LocomotiveScroll from 'locomotive-scroll';
import HeadSoa from '$lib/components/headers/HeadSoa.svelte'

 onMount(() => {
const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]') as HTMLElement,
  smooth: true,
	repeat: true,
	reloadOnContextChange: true,
});
 })

</script>

<HeadSoa></HeadSoa>
<div class="black-beauty" data-scroll-container>
<slot></slot>
</div>

<style>
	.black-beauty {
		background: var(--beau);
	}
</style>

