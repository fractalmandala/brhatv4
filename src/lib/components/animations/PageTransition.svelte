<script lang="ts">
import { fly } from 'svelte/transition'
import { expoIn, quartOut } from 'svelte/easing'
export let key:string
</script>

{#key key}
<div class="flexbox-c"
	in:fly={{ duration: 700, delay: 400, x: 0, y: -700, opacity: 1, easing: quartOut }}
	out:fly={{ duration: 400, delay: 0, x: -1400, y: 0, opacity: 1, easing: quartOut }}
>
<slot></slot>
</div>
{/key}

<style>
.flexbox-c { height: 100%;}
</style>