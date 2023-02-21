---
title: locomotive setups
tag: animation
category: libraries
date: "2023-01-01"
---

```js
import { onMount } from 'svelte'
import LocomotiveScroll from 'locomotive-scroll'
let scroll
onMount(() => {
  const scroll = new LocomotiveScroll();
});
```

```js
onMount(() => {
	const { Textify } = Animations;
	new Textify();
	if (typeof window !== 'undefined') {
		scrollInstance.on('scroll', (/** @type {any} */ obj) => {
		});
	}

});
```

```html
<LocomotiveScrollProvider
	options={{
		smooth: true,
    mobile: {
       smooth: false
   	},
		repeat: true,
		reloadOnContextChange: false,
		scrollFromAnywhere: true,
		multiplier: 1,
		inertia: 0.1,
		lerp: 0.1
	}}
	watch={$page}
	location={$page.url}
	onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 2, disableLerp: false })}
	imageTarget={'.grid-item-media'}
>
```
