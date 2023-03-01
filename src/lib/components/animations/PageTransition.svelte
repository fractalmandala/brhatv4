<script lang="ts">
import { fly } from 'svelte/transition'
import { expoIn } from 'svelte/easing'
export let key:string
</script>

{#key key}
<div class="flexbox-c"
	in:fly={{ duration: 400, delay: 400, x: 0, y: -700, opacity: 1, easing: expoIn }}
	out:fly={{ duration: 400, delay: 0, x: 0, y: 700, opacity: 1, easing: expoIn }}
>
<slot></slot>
</div>
{/key}

<style>
.flexbox-c { height: 100%;}
</style>