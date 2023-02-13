<script>
import Header from '$lib/components/globals/Header2023.svelte'
</script>

<Header></Header>
<slot></slot>





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
