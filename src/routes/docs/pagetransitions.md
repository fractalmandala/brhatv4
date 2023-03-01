---
title: Page Transitions
tag: animations
category: codes
date: "2023-01-01"
---

this is the transitions component:

```html
<script>
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fly={{ x: -10, duration: 500, delay: 500 }} out:fly={{ x: 5, duration: 500 }}>
		<slot />
	</div>
{/key}
``` 

in layout file:

```html
<script>
	import PageTransition from '$lib/components/PageTransition.svelte';
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div class="layout">
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>

	<PageTransition pathname={data.pathname}>
		<slot />
	</PageTransition>
```

in layout.js file:

```js
/** @type {import('./$types').LayoutLoad} */
export const load = async ({ url: { pathname } }) => {
	return { pathname };
};
```
