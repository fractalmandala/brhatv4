---
title: AOS Activation and Functions
date: "2023-01-21"
tag: animation
category: libraries
---

##### initialization
after install, need to have this in the script of root layout file:

```js
import AOS from 'aos';
import 'aos/dist/aos.css';
	if (typeof window !== 'undefined') {
		AOS.init();
		AOS.refresh();
	}
```


##### aos parameters
offset: 120, // offset (in px) from the original trigger point
delay: 0, // values from 0 to 3000, with step 50ms
duration: 400, // values from 0 to 3000, with step 50ms
easing: 'ease', // default easing for AOS animations
once: false, // whether animation should happen only once - while scrolling down
mirror: false, // whether elements should animate out while scrolling past them
anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

##### functions
fade
fade-up
fade-down
fade-left
fade-right
fade-up-right
fade-up-left
fade-down-right
fade-down-left

flip-up
flip-down
flip-left
flip-right

slide-up
slide-down
slide-left
slide-right

zoom-in
zoom-in-up
zoom-in-down
zoom-in-left
zoom-in-right
zoom-out
zoom-out-up
zoom-out-down
zoom-out-left
zoom-out-right

linear
ease
ease-in
ease-out
ease-in-out
ease-in-back
ease-out-back
ease-in-out-back
ease-in-sine
ease-out-sine
ease-in-out-sine
ease-in-quad
ease-out-quad
ease-in-out-quad
ease-in-cubic
ease-out-cubic
ease-in-out-cubic
ease-in-quart
ease-out-quart
ease-in-out-quart
