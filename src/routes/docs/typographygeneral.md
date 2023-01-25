---
title: Typography General Template
tag: standards
category: documentation
date: "2023-01-01"
---

```css
.hindi { font-family: 'Noto Serif Devanagari', serif;}

p, h5 { margin-top: 0; margin-bottom: 1rem;}
h1 { margin-top: 0; font-weight: 700; border-bottom: 1px solid #e1e1e1; padding-bottom: 8px;}
h4 { border-top: 1px solid #e1e1e1; padding-top: 16px; margin-bottom: 1rem; margin-top: 1rem;}
h5 { color: #878787;}
blockquote { font-style: italic; color: #676767; border-left: 2px solid var(--red); }
blockquote cite { text-transform: uppercase; font-style: normal; font-size: 14px; margin-top: 0;}
p { color: #676767;}
ul, ol { margin-left: 0; padding-left: 1rem;}
li { margin-bottom: 8px;}

@media screen and (min-width: 900px) {
	h1 { font-size: 3rem;}
	p, li { font-size: 1.2rem; line-height: 1.4em;}
	h4 { font-size: 1.8rem;}
	h5 { font-size: 1.32rem;}
	blockquote { margin-bottom: 2rem; margin-top: 1rem; padding-left: 1rem; margin-left: 4rem; padding-top: 0; line-height: 1.12em;}
}

@media screen and (max-width:899px) and (min-width: 768px) {
	h1 { font-size: 2.4rem;}
	p, li { font-size: 1.12rem; line-height: 1.4em;}
	h4 { font-size: 1.6rem;}
	h5 { font-size: 1.32rem;}
	blockquote { margin-bottom: 2rem; margin-top: 1rem; padding-left: 1rem; margin-left: 2rem; padding-top: 0; line-height: 1.12em;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	h1 { font-size: 2.4rem;}
	p, li { font-size: 1.12rem; line-height: 1.4em;}
	h4 { font-size: 1.48rem;}
	h5 { font-size: 1.32rem;}
	blockquote { margin-bottom: 2rem; margin-top: 1rem; padding-left: 1rem; margin-left: 2rem; padding-top: 0; line-height: 1.12em;}
}

@media screen and (max-width: 575px) {
	h1 { font-size: 2.4rem;}
	p, li { font-size: 1.12rem; line-height: 1.4em;}
	h4 { font-size: 1.48rem;}
	h5 { font-size: 1.24rem;}
	blockquote { margin-bottom: 2rem; margin-top: 1rem; padding-left: 1rem; margin-left: 1rem; padding-top: 0; line-height: 1.12em;}
}
```

