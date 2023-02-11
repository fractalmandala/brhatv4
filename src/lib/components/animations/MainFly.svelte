<script>
import { fly } from 'svelte/transition'
import { circOut } from 'svelte/easing'
</script>

<div class="mainfly"
	in:fly={{ duration: 500, delay: 500, x:1300, y: 0, easing: circOut }}
	out:fly={{ duration: 100, delay: 0, x:1300, y: 0, easing: circOut }}>
<slot></slot>
</div>

<style>
.mainfly { display: flex; flex-direction: column;}
</style>