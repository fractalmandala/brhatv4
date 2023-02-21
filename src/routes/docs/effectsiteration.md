---
title: When A Function is needed to iterate for each instance separately
tag: javascript
category: codes
date: "2023-01-01"
---

use-case:
a hover effect to toggle visibility of sublist item when hovered on list item. but only the respective sublist item.

have to use indexing

```js
let isShow = Array(data.length).fill(false);
function showAnswer(index) {
	isAnswer[index] = true;
}
function hideAnswer(index) {
	isAnswer[index] = false;
}
```

in rendering code:
```js
on:mouseenter={() => showAnswer(i)} on:mouseleave={() => hideAnswer(i)}
```

display code:
```js
	{#if isAnswer[i]}
	<p>{item.content}</p>
	{/if}
```