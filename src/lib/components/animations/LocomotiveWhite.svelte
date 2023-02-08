<script>
	import { getContext } from 'svelte';
	const { getScroll } = getContext('locomotiveScroll');
	const scrollInstance = getScroll();
	import { onMount } from 'svelte';

	let scroll = {
		cache: 0,
		current: 0
	};

	onMount(() => {
		scrollInstance.on('scroll', (/** @type {any} */ obj) => {
		});
	});
</script>

<slot></slot>