<script>
import { fly } from 'svelte/transition'
import { quintIn } from 'svelte/easing'
import '$lib/styles/anim-mrdanga.css'
import HeadMrdanga from '$lib/components/headers/HeadMrdanga.svelte'

export let data
</script>

{#key data.currentRoute}
<div
in:fly="{{delay: 200, duration: 200, y: -800, x: 0, easing: quintIn}}"
out:fly="{{delay: 0, duration: 100, y: 0, x: -1200, easing: quintIn}}"
>
<HeadMrdanga></HeadMrdanga>
<slot></slot>
</div>
{/key}

