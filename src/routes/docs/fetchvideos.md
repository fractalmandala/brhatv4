---
title: Fetch Videos from Supabase
date: "2023-01-21"
tag: supabase
category: codes
---

1. IKS
```
export async function vidsIKS() {
	const { data } = await supabase
	.from('brhat-iksvids')
	.select()
	return data;
}
```

2. mrdanga
```
export async function mrdangaVids() {
	const { data } = await supabase
	.from('brhat-youtube')
	.select()
	.eq('type','mrdanga')
	return data;
}
```
