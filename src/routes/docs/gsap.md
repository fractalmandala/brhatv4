---
title: gsap
tag: gsap
category: libraries
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


horizontal
```js
const sections = document.querySelectorAll(".section");
const controller = new ScrollMagic.Controller();

sections.forEach((section, index) => {
  const nextSection = sections[index + 1];

  const scene = new ScrollMagic.Scene({
    triggerElement: section,
    triggerHook: "onLeave",
    duration: "100%"
  })
    .setPin(section)
    .setTween(gsap.to(section, { x: "-100%", ease: "none" }))
    .addTo(controller);

  if (nextSection) {
    scene
      .setTween(
        gsap.to(nextSection, {
          x: "0%",
          ease: "none"
        })
      )
      .addIndicators({
        colorStart: "white",
        colorTrigger: "white",
        indent: 40
      });
  }
});
```

```css
.section {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform;
}

body {
  overflow: hidden;
}
```