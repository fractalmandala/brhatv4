export function pannable(node: {dispatchEvent: (arg0: CustomEvent<{x: any; y: any;}>) => void; addEventListener: (arg0: string,arg1: (event: any) => void) => void; removeEventListener: (arg0: string,arg1: (event: any) => void) => void;}) {
	let x: number;
	let y: number;

	function handleMousedown(event: {clientX: any; clientY: any;}) {
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panstart', {
			detail: { x, y }
		}));

		window.addEventListener('mousemove', handleMousemove);
		window.addEventListener('mouseup', handleMouseup);
	}

	function handleMousemove(event: {clientX: number; clientY: number;}) {
		const dx = event.clientX - x;
		const dy = event.clientY - y;
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panmove', {
			detail: { x, y, dx, dy }
		}));
	}

	function handleMouseup(event: {clientX: any; clientY: any;}) {
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('panend', {
			detail: { x, y }
		}));

		window.removeEventListener('mousemove', handleMousemove);
		window.removeEventListener('mouseup', handleMouseup);
	}

	node.addEventListener('mousedown', handleMousedown);

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMousedown);
		}
	};
}