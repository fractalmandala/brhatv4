<script>
import { onMount } from 'svelte'
import Lenis from '@studio-freight/lenis'

onMount(() => {
const lenis = new Lenis({
		smooth: true,
	})

/**
	 * @param {any} time
	 */
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
})
</script>

<slot></slot>