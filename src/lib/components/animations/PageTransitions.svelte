<script>
import { fly } from 'svelte/transition'
import { circInOut, quadIn } from 'svelte/easing'
</script>

<div class="r-r-r-r top" in:fly="{{delay: 700, duration: 400, opacity: 0, y: 1000, x: 0, easing: quadIn}}" out:fly="{{delay: 0, duration: 600, opacity: 0, y: 0, x: 700, easing: circInOut}}">
<slot></slot>
</div>

<style>

@media screen and (min-width: 900px) {
.top { width: 100vw; min-height: 100vh;}
}

@media screen and (max-width: 899px) and (min-width: 576px) {
	.top { width: 100vw; min-height: 100vh;}
}

@media screen and (max-width: 575px) {
		.top { width: 100vw; min-height: 100vh; }
}

</style>