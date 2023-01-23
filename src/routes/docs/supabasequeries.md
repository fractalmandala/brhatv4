---
title: All Fetch Queries for Supabase
date: "2023-01-01"
tag: supabase
category: codes
---

//1.all drashta courses
```js
export async function fetchCourses() {
const { data } = await supabase
.from('brhat-drashta')
.select()
.eq('type','overview')
return data;
}
``` 
 
//2. hindu iconography
```js
export async function courseIconography() {
const { data } = await supabase
.from('brhat-drashta')
.select()
.eq('course','hindu iconography')
return data;
}
```

//3. intro to srg
```js
export async function courseSRG() {
const { data } = await supabase
.from('brhat-drashta')
.select()
.eq('course','introduction to sita ram goel')
return data;
}
```

//4. intro to srs
```js
export async function courseSRS() {
const { data } = await supabase
.from('brhat-drashta')
.select()
.eq('course','introduction to shri ram swarup')
return data;
}
```

//5. all drashtas
```js
export async function Drashtas() {
const { data } = await supabase
.from('brhat-drashta')
.select()
.eq('type','draṣtā')
return data;
}
```


//6. all schools of thought
```js
export async function Darshanas() {
const { data } = await supabase
.from('brhat-drashta')
.select()
.eq('type','school')
return data;
}
```

//7.all anveshi chapters
```js
export async function fetchChapters(){
const { data } = await supabase
.from('brhat-anveshi')
.select()
.eq('type','chapter')
return data;
}
```

//8, karnataka chapter
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

//9. karnataka temples
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

//10. detailed karnataka page
```js
export async function KarnatakaDetailed(){
const { data } = await supabase
.from('chapter-details')
.select()
.eq('chapter','karnataka')
return data;
}
```

//11, odisha chapter
```js
export async function odisha(){
const { data } = await supabase
.from('brhat-anveshi')
.select()
.eq('chapter','odisha')
.eq('type','overview')
return data;
}
```

//12. odisha temples
```js
export async function odishaTemples(){
const { data } = await supabase
.from('brhat-anveshi')
.select()
.eq('chapter','odisha')
.eq('type','temple')
return data;
}
```

//13. detailed odisha page
```js
export async function odishaDetailed(){
const { data } = await supabase
.from('chapter-details')
.select()
.eq('chapter','odisha')
return data;
}
```

//14. chamba chapter
```js
export async function chamba(){
const { data } = await supabase
.from('brhat-anveshi')
.select()
.eq('chapter','chamba')
.eq('type','overview')
return data;
}
```

//15. chamba temples
```js
export async function chambaTemples(){
const { data } = await supabase
.from('brhat-anveshi')
.select()
.eq('chapter','chamba')
.eq('type','temple')
return data;
}
```

//16. detailed chamba page
```js
export async function chambaDetailed(){
const { data } = await supabase
.from('chapter-details')
.select()
.eq('chapter','chamba')
return data;
}
```

//17. dhiti posts descending sorted
```js
export async function latestDhiti(){
const { data } = await supabase
.from('brhat-dhiti')
.select()
.order('sequence',{ascending: false})
return data;
}
```

//18. openlibrary uploads descending sorted
```js
export async function latestBOL(){
const { data } = await supabase
.from('brhat-openlibrary')
.select()
.order('Sno', {ascending: false})
return data;
}
```

//19. iks videos descending sorted
```js
export async function vidsIKS() {
const { data } = await supabase
.from('brhat-iksvids')
.select()
return data;
}
```

//20. mrdanga videos descending sorted
```js
export async function mrdangaVids() {
const { data } = await supabase
.from('brhat-youtube')
.select()
.eq('type','mrdanga')
return data;
}
```

//21. shabdavali videos
```js
export async function shabdavaliVids() {
const { data } = await supabase
.from('brhat-shabdavali')
.select()
return data
}
```

//22. brhat project cards
```js
export async function brhatActions() {
const { data } = await supabase
.from('brhat-actions')
.select()
.eq('tag','true')
.order('sequence')
return data
}
```

//23. brhat advisory board
```js
export async function brhatAdvisory() {
const { data } = await supabase
.from('brhat-advisory')
.select()
.order('id')
return data
}
```

//24. brhat three areas
```js
export async function brhatAreas() {
const { data } = await supabase
.from('brhat-areas')
.select()
.order('id')
return data
}
```

//25. iks events
```js
export async function eventsIKS() {
const { data } = await supabase
.from('brhat-iks')
.select()
.order('dateto',{ascending: false})
return data
}
```

//26. create, curate, consult
```js
export async function brhatPillars() {
const { data } = await supabase
.from('brhat-pillars')
.select()
.eq('type','actions')
return data
}
```

//27. brhat three views
```js
export async function brhatViews() {
const { data } = await supabase
.from('brhat-pillars')
.select()
.eq('type','areas')
return data
}
```

//28. brhat team
```js
export async function brhatTeam() {
const { data } = await supabase
.from('brhat-team')
.select()
return data
}
```

//29. midjourney gallery
```js
export async function galleryMid() {
const { data, error } = await supabase
.from('MidjourneyImages')
.select()
.order('id', {ascending: false})
if (error) throw new Error(error.message)
return data
}
```

