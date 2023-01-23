---
title: Filter Fetched Data
date: "2023-01-20"
tag: sveltecode
category: codes
---

You can create a state variable in your Svelte component to track which button is currently selected. You can set this state variable to a default value of "1" to indicate that the default data should be displayed. You can then use this state variable to determine which function's return value should be displayed in your component's render function.

You can also create event handlers for each button that will update the state variable when clicked

1. In your Svelte component, create a state variable to track which button is currently selected.
```js
let selectedButton = 1;  
```

2. In your component's render function, use the selectedButton state variable to determine which function's return value should be displayed.
```html
{#if selectedButton === 1}  
  {#await galleryMid()}  
    {#each data as item}  
      // render data  
    {/each}  
  {/await}  
{/if}  
{#if selectedButton === 2}  
  {#await galleryMandalas()}  
    {#each data as item}  
      // render data  
    {/each}  
  {/await}    
{/if}  
{#if selectedButton === 3}  
  {#await galleryAbstract()}  
    {#each data as item}  
      // render data    
    {/each}  
  {/await}  
{/if}  
{#if selectedButton === 4}  
  {#await galleryDharma()}  
    {#each data as item}  
      // render data  
    {/each}  
  {/await}  
{/if}  
```

3. Create event handlers for each button that will update the selectedButton state variable when clicked.
```html
<button on:click={() = selectedButton = 1}>Button 1</button>  
<button on:click={() = selectedButton = 2}>Button 2</button>  
<button on:click={() = selectedButton = 3}>Button 3</button>    
<button on:click={() = selectedButton = 4}>Button 4</button>  
```
