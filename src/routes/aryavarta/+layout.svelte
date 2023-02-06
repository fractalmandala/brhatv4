<script lang="ts">
import '$lib/styles/anim-scrolls.css'
import HeadSoa from '$lib/components/headers/HeadSoa.svelte'
import { onMount } from 'svelte';
import LocomotiveScroll from 'locomotive-scroll';
import LocomotiveContainer from '$lib/components/animations/LocomotiveContainer.svelte'
import '$lib/styles/locomotive-scroll.css'

let scroll;

onMount(() => {
    const container = document.querySelector('[data-scroll-container]');
    if (container) {
        scroll = new LocomotiveScroll({
            el: container as HTMLElement,
            smooth: true,
						reloadOnContextChange: true,
						repeat: true
        });
    }
});
</script>

<HeadSoa></HeadSoa>
<LocomotiveContainer>
<slot></slot>
</LocomotiveContainer>

<style>
	*, :root {
		--container-background: var(--beau);
	}
</style>

