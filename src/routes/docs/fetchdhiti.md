---
title: Fetch from Dhiti Supabase
date: "2023-01-21"
tag: supabase
category: codes
---

```js
import supabase from '$lib/db'
export async function latestDhiti(){
	const { data, error } = await supabase
	.from('brhat-dhiti')
	.select()
	.order('sequence',{ascending: false})
	.limit(1)
	if (error) throw new Error(error.message)
	return data
}
```

```html
{#await latestDhiti()}
<small>...</small>
{:then data}
{#each data as item}
{/each}
{:catch error}
<pre>{error}</pre>
{/await}
```
