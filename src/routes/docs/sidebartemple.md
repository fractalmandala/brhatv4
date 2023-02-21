---
title: CSS Template for pages with sidebar
tag: css
category: codes
date: "2023-01-01"
---

```
<div class="primecontainer-row">
<div class="side-bar"></div>
<div class="main-box"></div>
</div>

<style>
.primecontainer-row { display: flex; width: 100vw; min-height: 100vh;}
.side-bar, .main-box { display: flex; flex-direction: column; }
@media screen and (min-width: 900px) {
	.primecontainer-row { flex-direction: row;}
	.side-bar { width: 25%; }
	.main-box { width: 75%; }
}
</style>
```