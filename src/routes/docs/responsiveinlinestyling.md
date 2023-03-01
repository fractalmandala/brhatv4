---
title: Inline Styling that's responsive
tag: animation
category: codes
date: "2023-01-01"
---

To achieve the desired result, you can add conditional inline styling using Svelte's built-in media function. Here's an example:

```html
<script>
  import { media } from 'svelte/store';
  
  let y = 0;
  
  const parallaxStyle = media('(min-width: 768px)', `transform: translateY(${y/-4}px)`);

  // update y value as needed
</script>

<img src="/images/corpimages/parallaximg.png" alt="parallax" style={parallaxStyle} bind:this={img}/>
```

In this example, media() takes two arguments: a media query string and a string of CSS rules to apply if the media query matches. The resulting value of parallaxStyle will either be an empty string (if the media query doesn't match) or a string containing the inline CSS rules you want to apply (if the media query matches).

For screens 768px and wider, parallaxStyle will be set to transform: translateY(-y/4px), which you can then apply to the inline style attribute of the img element. For screens narrower than 768px, parallaxStyle will be an empty string, which means no styling will be applied inline.