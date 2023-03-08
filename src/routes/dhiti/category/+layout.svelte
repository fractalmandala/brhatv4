<script>
import { fly } from 'svelte/transition'
import { expoIn } from 'svelte/easing'
</script>


<div in:fly={{ delay: 300, duration: 600, y: 0, x: 1400, easing: expoIn}} out:fly={{ delay: 0, duration: 250, y: 0, x: 1400, easing: expoIn}}>
<slot></slot>
</div>