---
title: Fetch from Dhiti Supabase
date: "2023-01-21"
tag: supabase
category: codes
---

```js
export async function latestDhiti(){
	const { data } = await supabase
	.from('brhat-dhiti')
	.select()
	.order('sequence',{ascending: false})
	return data;
}
```
