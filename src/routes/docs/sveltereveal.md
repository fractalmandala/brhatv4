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

