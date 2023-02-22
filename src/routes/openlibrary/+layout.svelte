<script>
import SideBol from '$lib/components/pagecomps/SideBol.svelte'
</script>

<div class="flexbox-r">
<SideBol></SideBol>
<div class="in-col maindoc">
<slot></slot>
</div>
</div>





<style>


:global(body) {
	background: white;
	color: #474747;
	transition: background 0.25s;
}

:global(body.dark-mode) {
	background: var(--beau);
	color: white;
}

</style>
