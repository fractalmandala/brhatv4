---
title: fetch from json
tag: fetches
category: codes
date: "2023-10-10"
---

```js
/**
	 * @type {any[]}
	 */
let data = []
fetch('./src/lib/jsons/dhatus.json')
.then(response => response.json())
.then(jsonData => {
		data = jsonData.data
	})
```