export function pannable(node: {getBoundingClientRect: () => any; dispatchEvent: (arg0: CustomEvent<{x: number; y: number;}>) => void; addEventListener: (arg0: string,arg1: (event: any) => void) => void; removeEventListener: (arg0: string,arg1: (event: any) => void) => void;}) {
  let startX: number;
  let startY: number;
  let boundingRect: {left: number; top: number;};

  function handleMousedown(event: {clientX: number; clientY: number;}) {
    boundingRect = node.getBoundingClientRect();
    startX = event.clientX - boundingRect.left;
    startY = event.clientY - boundingRect.top;

    node.dispatchEvent(new CustomEvent('panstart', {
      detail: { x: startX, y: startY }
    }));

    window.addEventListener('mousemove', handleMousemove);
    window.addEventListener('mouseup', handleMouseup);
  }

  function handleMousemove(event: {clientX: number; clientY: number;}) {
    const x = event.clientX - boundingRect.left;
    const y = event.clientY - boundingRect.top;
    const dx = x - startX;
    const dy = y - startY;

    node.dispatchEvent(new CustomEvent('panmove', {
      detail: { x, y, dx, dy }
    }));
  }

  function handleMouseup(event: {clientX: number; clientY: number;}) {
    const x = event.clientX - boundingRect.left;
    const y = event.clientY - boundingRect.top;

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
