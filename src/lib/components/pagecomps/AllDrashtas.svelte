<script lang="ts">
//@ts-nocheck
import supabase from '$lib/db'
import { fly } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

let data = []
let toggledIndex = null;
let isShow = data.map(() => false);
let selected = null;

function handleSelectChange(event) {
  selected = event.target.value;
}

function closeDropdown() {
  selected = null;
}

function toggleFunction(i) {
  if (toggledIndex === i) {
    isShow[i] = false;
    toggledIndex = null;
  } else {
    isShow = isShow.map((show, index) => index === i);
    toggledIndex = i;
  }
}

export async function fetchDrashtas(){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type', 'drashta')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

</script>


<div class="flexbox-c">
	{#await fetchDrashtas()}		
	<small>...</small>
	{:then data}
	<div class="formal3">
  	<select on:change={handleSelectChange}>
    {#each data as item, i}
      <option value={i}><p>{item.name}</p></option>
    {/each}
  	</select>
  	{#if selected !== null}
    <div class="in-col content popper">
      <cite class="red" on:click={closeDropdown} on:keydown={closeDropdown}>CLOSE</cite>
      <pre
        in:fly="{{delay: 100, duration: 100, y: 500, x: 0, opacity: 0, easing: quintOut}}"
        out:fly="{{delay: 0, duration: 100, x: 0, y: 500, opacity: 0, easing: quintOut}}"
      >{data[selected].content}</pre>
    </div>
  	{/if}
	</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>



<style>


select {
	text-transform: capitalize !important;
	height: 32px;
	background: #fe4a49;
	border: 1px solid #fe4a49;
	color: white;
	border-radius: 4px;
}

@media screen and (min-width: 900px) {
	select, option { font-size: 14px;}
	.formal3 { position: relative; width: 100%;}
	.formal3 .content { position: fixed; top: 72px; z-index: 600; right: 0; width: 50%; font-size: 18px; color: #878787; background: rgba(0,0,0,0.9); backdrop-filter: blur(5px); border: 1px solid #878787; border-radius: 4px; padding: 80px; height: calc(100vh - 72px); overflow-y: scroll; }
	.content pre { font-size: 20px; color: white; line-height: 1.5;}
	.content cite { text-align: left; cursor: pointer;}
}

@media screen and (max-width: 575px) {
	.content pre { font-size: 14px;}
}

</style>