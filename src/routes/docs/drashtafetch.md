---
title: Drashta from Supabase
date: "2023-01-01"
tag: supabase
category: codes
---

1. all courses
```js
export async function fetchCourses() {  
const { data } = await supabase  
.from('brhat-drashta')   
.select()   
.eq('type','overview')   
return data;  
}  
```

2. single course
```js
export async function courseIconography() {
	const { data } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','hindu iconography')
	return data;
}
```

3. all drashtas
```js
export async function Drashtas() {
	const { data } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('type','draṣtā')
	return data;
}
```

4. all schools of thought
```js
export async function Darshanas() {
	const { data } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('type','school')
	return data;
}
```