<script>
 import { scale } from 'svelte/transition'
 import { expoOut } from 'svelte/easing'
 /**
	 * @type {any}
	 */
  export let refresh
</script>
{#key refresh}
<div
in:scale="{{ duration: 250, delay: 750, opacity: 0.2, start: 1.3, easing: expoOut }}"
out:scale="{{ duration: 650, delay: 0, opacity: 0, start: 0.3, easing: expoOut  }}"
>
<slot />
</div>
{/key}