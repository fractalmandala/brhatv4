<script>

 import { fly } from 'svelte/transition'
 import { expoOut } from 'svelte/easing'

</script>



<div
in:fly="{{ duration: 250, delay: 300, opacity: 0.2, y: 800, x:0, easing: expoOut }}"
out:fly="{{ duration: 200, delay: 0, opacity: 0, y: 800, easing: expoOut  }}"
>
<slot></slot>
</div>
