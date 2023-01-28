<script>
import HeadBol from '$lib/components/headers/HeadBol.svelte'
import FlyingPage from '$lib/components/animations/FlyingPage.svelte'

</script>


<FlyingPage>
<HeadBol></HeadBol>
<slot></slot>
</FlyingPage>

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
