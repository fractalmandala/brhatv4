<script>
import ThinBar from '$lib/components/pagecomps/ThinBar.svelte'
</script>

<ThinBar></ThinBar>
<div class="limiter flexbox-c">
<slot></slot>
</div>

<style>
.limiter {
	height: 100%;
	width: 100vw;
	overflow-x: hidden;
}
</style>