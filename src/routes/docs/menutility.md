---
title: Menu Breakpoints and Functions
date: "2023-01-21"
tag: sveltecode
category: codes
---

Navigation menu has different function above 768px and below it. At 767px or less, the links are no longer visible and only hamburger menu icon is visible. This icon toggles fullscreen menu at mobile views.

##### Desktop Menu
sublists expand for drashta, actions and about. can be more/others at some other point. 
basic code to toggle sublist visibility on hover.

For each 'list' where 'sublist' is to be toggled:

```js
let isVisible = false;
function showSubList() {
isVisible = true;
}
function hideSubList() {
isVisible = false;
}
then in the html body, for the 'list' item:
<div class="list" on:mouseenter={showSubList} on:mouseleave={hideSubList}
{#if isVisible}
 <div class="sublist"</div
{/if}
</div
```

there are other styling matters. but above is basic toggle for visibility on hover. 

##### Mobile Menu
For mobile menu, entire component 
```html
<div class="mobilemenu">  
```

is set at display = hidden at window width less than 767px. Conversely, it is set hidden for 

```html
<div class="desktopmenu">
```

at 768px and above. Full-screen menu is toggled by button clicks on open button and close button. Close button should be embedded in the fullscreen section that opens.

In HTML, it is set conditionally similar to how sublists are set in previous case;

```html
{#if isFull}
<div class="fullscreen">
  <button on:click={closeFull} on:keydown={closeFull}</button>
</div>
{/if}
```

It is opened by the mobile menu:

```html
<div class="mobilemenu" on:click={showFull} on:keydown={showFull}>
```


