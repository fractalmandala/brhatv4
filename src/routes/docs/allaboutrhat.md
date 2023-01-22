---
title: All Fetch on About Brhat
date: "2023-01-01"
tag: supabase
category: codes
---


1. brhat projects
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

2. advisory board
```js  
export async function brhatAdvisory() {
const { data } = await supabase
.from('brhat-advisory')
.select()
.order('id')
return data
}
```  

3. brhat areas
```js  
export async function brhatAreas() {
const { data } = await supabase
.from('brhat-areas')
.select()
.order('id')
return data
}
```  

4. iks events
```js  
export async function eventsIKS() {
const { data } = await supabase
.from('brhat-iks')
.select()
.order('dateto',{ascending: false})
return data
}
```  

5. create, curate, consult
``` js 
export async function brhatPillars() {
const { data } = await supabase
.from('brhat-pillars')
.select()
.eq('type','actions')
return data
}  
```  

6. brhat 3 views
```js  
export async function brhatViews() {
const { data } = await supabase
.from('brhat-pillars')
.select()
.eq('type','areas')
return data
}
```  

7. brhat team
```js
export async function brhatTeam() {
const { data } = await supabase
.from('brhat-team')
.select()
return data
}
```    
