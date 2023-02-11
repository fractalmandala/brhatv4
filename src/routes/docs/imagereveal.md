---
title: Image Reveal on Scroll
date: "2023-01-21"
tag: animation
category: codes
---

```js
import { reveal } from 'svelte-reveal';
```

```html
<h1 use:reveal>Your title</h1>
<p use:reveal={{ transition: "fade" }}>A paragraph</p>
```

```js
// App.svelte
<script>
  import Heading from './Heading.svelte';
</script>

<Heading useReveal={{ transition: "fade" }}>Hello world</Heading>

// Heading.svelte
<script lang="ts">
  import { reveal } from 'svelte-reveal';
  import type { RevealOptions } from 'svelte-reveal';
  export let useReveal: RevealOptions;
</script>

<h1 use:reveal={ useReveal }>
  <slot />
</h1>
```

```js
<script>
  import { afterUpdate } from 'svelte';

  let show = false;

  afterUpdate(() => {
    show = true;
  });
</script>

{#if show}
  <your-element-or-component />
{/if}
```