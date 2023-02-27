<script>
import { fly } from 'svelte/transition'
import { quartOut } from 'svelte/easing'

</script>


<div class="flexbox-c" in:fly={{ delay: 800, duration: 1000, y: 800, x: 0, opacity: 1, easing: quartOut}} out:fly={{ delay: 0, duration: 800, y: -800, x: 0, opacity: 1, easing: quartOut}}>
<slot></slot>
</div>
