<script lang="ts">
import { onMount } from 'svelte';
import LocomotiveScroll from 'locomotive-scroll';

let scroll;

onMount(() => {
    const el = document.querySelector('[data-scroll-container]');
    if (el) {
        scroll = new LocomotiveScroll({
            el: el as HTMLElement,
            smooth: true
        });
    }
});
</script>

<div class="loco-con" data-locomotive-container style="flex-direction: var(--flexdir)">
<slot></slot>
</div>

<style>
.loco-con {
	display: flex;
}
</style>