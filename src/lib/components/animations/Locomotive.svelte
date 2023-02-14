<script lang="ts">
export let left
export let top
	
let moving = false;
	
	function onMouseDown() {
		moving = true;
	}

	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}
	
	function onMouseUp() {
		moving = false;
	}
	
// 	$: console.log(moving);
</script>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<div on:mousedown={onMouseDown} style="left: {left}px; top: {top}px;" class="draggable">
	<slot></slot>
</div>

<style>
	.draggable {
		user-select: none;
		cursor: move;
	}
</style>