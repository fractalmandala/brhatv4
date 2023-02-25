---
title: Window not defined error
tag: troubleshooting
category: codes
date: "2023-01-01"
---

```js
import { onMount } from 'svelte';
let myModule;

onMount(async () => {
  if (typeof window !== 'undefined') {
    myModule = await import('my-module');
  }
});
```