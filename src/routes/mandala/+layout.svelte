<script lang="ts">
import '$lib/styles/anim-mandala.css'
import HeadMandala from '$lib/components/headers/HeadMandala.svelte'
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


<HeadMandala></HeadMandala>
<LocomotiveContainer>
<slot></slot>
</LocomotiveContainer>

<style>
	*, :root {
		--container-background: var(--beau);
	}
</style>


