---
title: Fetch from Anveshi Supabase
date: "2023-01-21"
tag: supabase
category: codes
---

1. all chapters
```js
export async function fetchChapters(){
	const { data } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','chapter')
	return data;
}
```

2. any single chapter
```js
export async function Karnataka(){
	const { data } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('chapter','karnataka')
	.eq('type','overview')
	return data;
}
```

3. temples of a chapter
```js
export async function KarnatakaTemples(){
	const { data } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('chapter','karnataka')
	.eq('type','temple')
	return data;
}
```

4. detailed chapter page
```js
export async function KarnatakaDetailed(){
	const { data } = await supabase
	.from('chapter-details')
	.select()
	.eq('chapter','karnataka')
	return data;
}
```


