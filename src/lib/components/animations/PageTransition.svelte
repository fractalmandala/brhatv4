<script lang="ts">
import { slide } from 'svelte/transition'
import { expoIn, quartOut } from 'svelte/easing'
export let key:string
</script>

{#key key}
<div class="flexbox-c"
	in:slide="{{ duration: 700, delay: 400, easing: quartOut}}"
	out:slide="{{ duration: 400, delay: 0, easing: quartOut}}"
>
<slot></slot>
</div>
{/key}

<style>
.flexbox-c { height: 100%;}
</style>