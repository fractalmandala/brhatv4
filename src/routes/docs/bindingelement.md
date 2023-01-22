---
title: Binding Element Implicitly Has Any Type
date: "2023-01-21"
category: troubleshooting
tag: typescript
---

Issue in code:
Binding element 'fetch' implicitly has an 'any' type.

This error message is indicating that the "params" element in your code does not have a specific type assigned to it, and is therefore being treated as having the "any" type. This means that the type checker is not able to infer the type of the variable or ensure that it is being used correctly. To fix this, you should specify the type of the "params" variable, either by using a type annotation or by providing a value that the type checker can infer the type from.


```js
export const load = async () => {  
const response = await globalThis.fetch(`/api/docs`)  
const docs = await response.json()  
return {  
  docs  
}  
}  
```
