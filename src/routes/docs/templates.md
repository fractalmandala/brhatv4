---
title: standard templates for usage
tag: css
category: codes
date: "2023-01-01"
---

#### prime container
```
<div class="primecontainer-row"></div>
```

```
.primecontainer-row {
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
}
```

#### layout level 0
```
<script>
import { fly } from 'svelte/transition'
</script>
<div
	in:fly={{ duration: 500, delay: 200, x:0, y: 700 }}
	out:fly={{ duration: 300, delay: 0, x:-700, y: 0 }}
	>			
<slot></slot>
</div>
```

with this, base page is rendered
```
<div class="boxoftext">
	<Sidebar></Sidebar>
	<Page />
</div>
```

##### box of text
```
.boxoftext {
	display: flex;
	width: 100vw;	
	height: 100vh;
}
@media screen and (min-width: 900px) {
.boxoftext {
	flex-direction: row;
	width: 100%;
	min-height: 100vh;
}
@media screen and (max-width: 899px) and (min-width: 768px) {
	flex-direction: row;
	width: 100%;
	min-height: 100vh;
}
@media screen and (max-width: 767px ) and (min-width: 576px ) {
.boxoftext {
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
}
@media screen and (max-width: 575px ) {
.boxoftext {
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
}
```

##### sidebar
  

