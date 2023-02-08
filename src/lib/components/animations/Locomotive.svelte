<script lang="ts">
	import { scale } from 'svelte/transition'
	import { cubicOut } from 'svelte/easing'
	import { inview } from 'svelte-inview'
	let isInView: boolean
</script>

<div
	class="view-wrap"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:change={({ detail}) => {
		isInView = detail.inView;
	}}
>
{#if isInView}
	<div in:scale="{{duration: 400, opacity: 0, start: 0.2, easing: cubicOut}}" class="fadinger">
		<slot></slot>
	</div>
{/if}
</div>

