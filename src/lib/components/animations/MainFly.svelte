<script>
import { fly } from 'svelte/transition'
import { quintOut } from 'svelte/easing'
</script>

<div
	in:fly={{ duration: 500, delay: 500, x:1300, y: 0, easing: quintOut }}
	out:fly={{ duration: 300, delay: 0, x:1300, y: 0, easing: quintOut }}>
<slot></slot>
</div>