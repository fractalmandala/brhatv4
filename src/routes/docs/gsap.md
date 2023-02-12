---
title: gsap
tag: gsap
category: codes
date: "2023-01-01"
---

import
```js
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
```

init
```js
gsap.registerPlugin(ScrollTrigger);
```

anim
```js
gsap.to("#my-element", {
  scrollTrigger: {
    trigger: "#my-trigger-element",
    start: "top center",
    end: "bottom center",
    markers: true,
    toggleActions: "restart none none none"
  },
  x: 100,
  opacity: 0.5
});
```
Here, #my-element is the element that you want to animate, #my-trigger-element is the element that will trigger the animation when it's scrolled into view, and x: 100 and opacity: 0.5 are the CSS properties that you want to animate.

parallax
```js
gsap.to(".bg", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1
  },
  y: "80%",
  ease: "none"
});
```

sticky
```js
gsap.to("header", {
  scrollTrigger: {
    trigger: ".section",
    start: "top top",
    toggleActions: "restart none none none"
  },
  y: -50,
  ease: "power1.inOut",
  opacity: 0.5,
  display: "block"
});
```

rotate
```js
gsap.to("#my-image", {
  scrollTrigger: {
    trigger: "#my-trigger-element",
    start: "top center",
    end: "bottom center",
    markers: true,
    toggleActions: "restart none none none"
  },
  rotation: 360,
  ease: "none"
});
```