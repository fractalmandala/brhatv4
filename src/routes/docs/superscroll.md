---
title: Superscroll
date: "2023-01-01"
tag: scrolling
category: codes
---

```js
// @ts-nocheck
import { onMount } from 'svelte'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
import HeadGeneral from '$lib/components/globals/Header2023.svelte'
import Scrollbar from 'smooth-scrollbar';
import Animations from "textify.js";
import '$lib/styles/reader.sass'
import '$lib/styles/globals.css'
import '$lib/styles/componentstyles.css'
import '$lib/styles/textify.css'
onMount(() => {
  if (typeof window !== 'undefined') {
		const { Textify } = Animations;
		new Textify({
			duration: 300,
			threshold: 0.1,
		}) 
    const myScrollbar = document.querySelector('#my-scrollbar');
    if (myScrollbar) {
      Scrollbar.init(myScrollbar as HTMLElement), {
				damping: 0.2,
				renderByPixels: true
			};
    }
  }
});
```
