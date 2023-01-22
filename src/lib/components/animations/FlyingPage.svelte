<script>
import { fly } from 'svelte/transition'
 import { expoOut } from 'svelte/easing'
</script>

<div
	in:fly={{ duration: 500, delay: 200, x:0, y: 700, easing: expoOut }}
	out:fly={{ duration: 300, delay: 0, x:-700, y: 0, easing: expoOut }}>
<slot></slot>
</div>
