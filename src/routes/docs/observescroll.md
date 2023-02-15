---
title: Observe an Element's Scroll
category: utilities
tag: sveltecode
date: "2022-03-02"
---

You can use the on:scroll event listener in SvelteKit to observe the scrollY position of a specific div.

```html
<div bind:this={divRef} on:scroll={handleScroll}>
  <!-- Content of your div goes here -->
</div>
```

```js
let divRef;
let scrollY = 0;
function handleScroll() {
  scrollY = divRef.scrollTop;
}
```

```html
<p>The scrollY position of the div is {scrollY}</p>
```