---
title: Index the Hover Functions
date: "2023-01-01"
tag: javascript
category: codes
---

```js
let data = [
	{
		"name": "question one",
		"content": "answer one"
	}
]
let isShow = Array(data.length).fill(false);
function showFunction(index) {
	isShow[index] = true;
}
function hideFunction(index) {
	isShow[index] = false;
}
// indexing the functions for hover/show/visibility etc.
```

```html
<!--can be used with on:click also-->
<div on:mouseenter={()=>showFunction(i)} on:mouseleave={() => hideFunction(i)}>
```

```html
{#each data as item, i}
{#if isShow[i]}
//data to show
{/if}
{/each}
```
