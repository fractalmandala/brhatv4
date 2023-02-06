---
title: locomotive setups
tag: locomotive scroll
category: codes
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

