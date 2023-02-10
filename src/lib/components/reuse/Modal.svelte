<script>
	import { createEventDispatcher, onDestroy } from 'svelte'
	import { fly } from 'svelte/transition'
	import { quintIn} from 'svelte/easing'
	
	const dispatch = createEventDispatcher()
	const close = () => dispatch('close')

	/**
	 * @type {{ querySelectorAll: (arg0: string) => any; }}
	 */
	let modal
	
		const handle_keydown = (/** @type {{ key: string; shiftKey: any; preventDefault: () => void; }} */ e) => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			// @ts-ignore
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown} />


<div class="modal" role="dialog" aria-modal="true" bind:this={modal}
	in:fly="{{duration: 200, x:700, y:0, easing: quintIn}}"
	out:fly="{{duration: 200, x:700, y:0, easing: quintIn}}"
>
<div class="modal-background" on:click={close} on:keydown={close}></div>
	<slot></slot>
</div>


<style>
	.modal-background {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		color: white;
	}
	
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		padding: 8em 1em 1em 25vw;
		border-radius: 0.2em;
		background: linear-gradient(40deg, rgba(39, 39, 39, 0.9), rgba(27, 32, 35, 0.7));
		backdrop-filter: blur(4px);
		z-index: 800;
		height: 100vh;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}

</style>