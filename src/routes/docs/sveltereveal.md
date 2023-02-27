---
title: Svelte Reveal
date: "2023-01-01"
tag: sveltecode
category: codes
---

```js
import { reveal } from 'svelte-reveal';
```

```html
<div useReveal={{ transition: "fade" }}></div>
```

transitions
1. fade
2. fly
3. slide
4. blur
5. scale
6. spin

properties
1. threshold - 0.0 to 1.0
2. transition
3. reset (boolean)
4. duration
5. easing
6. x (for slide)
7. y (for fly)
8. opacity
9. blur
10. scale in %

```js
setDefaultOptions({
	blur: 20,
	x: -50,
	duration: 3000
});
```

```html
<Heading useReveal={{ transition: "fade" }}>Hello world</Heading>
```

```js
import { reveal } from 'svelte-reveal';
import type { RevealOptions } from 'svelte-reveal';
export let useReveal: RevealOptions;
```

```html
<h1 use:reveal={ useReveal }>
  <slot />
</h1>
```