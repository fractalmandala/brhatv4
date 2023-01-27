---
title: Swiper Type 1
tag: swiper
category: documentation
date: "2023-01-01"
---

```js
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'
```

```html
<Swiper
		modules={[Keyboard, Navigation]}
	keyboard={true}
  loop={true}
  slidesPerView={1}
	breakpoints={{
    "576": {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    "768": {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    "1024": {
      slidesPerView: 1,
      spaceBetween: 32,
    },
  }}
	navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
	on:slideChange={() => console.log('slide change')}
>
```
