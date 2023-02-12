---
title: Typography General Template
tag: standards
category: documentation
date: "2023-01-01"
---

```css
@media screen and (min-width: 900px) {
	.bigger1 { font-size: 96px; margin-bottom: 0; font-weight: 500;}
	.smaller1 { font-size: 96px; line-height: 1.2em; font-weight: 500;}	
}
@media screen and (max-width: 899px) and (min-width: 768px) {
	.bigger1 { font-size: 120px; margin-bottom: 0; font-weight: 500;}
	.smaller1 { font-size: 96px; line-height: 1.2em; font-weight: 500;}	
}
@media screen and (max-width: 767px) and (min-width: 576px) {
}
```

```sass
@media screen and (min-width: 900px)
	h3
		font-size: 32px
		letter-spacing: -0.5px
	h5
		font-size: 24px
	h520
		font-size: 20px
	p
		font-size: 16px
		line-height: 1.25
	p14
		font-size: 14px

@media screen and (max-width: 575px) 
	h3
		font-size: 32px
	h5
		font-size: 24px
	p
		font-size: 18px
		line-height: 1.25
```
