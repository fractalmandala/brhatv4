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

export async function fetchDrashtas(){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type', 'drashta')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function fetchNames(){
	const { data, error } = await supabase
		.from('brhat-drashta2')
		.select()
		.eq('type', 'drashta')
		.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

</script>


<div class="boxc">
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
    <div class="boxc content popper">
      <cite class="drash wbold" on:click={closeDropdown} on:keydown={closeDropdown}>CLOSE</cite>
      <pre
        in:fly="{{delay: 100, duration: 100, y: 500, x: 0, opacity: 0, easing: quintOut}}"
        out:fly="{{delay: 0, duration: 100, x: 0, y: 500, opacity: 0, easing: quintOut}}"
      >{data[selected].content}
			</pre>
    </div>
  	{/if}
	</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>



<style>


select {
	text-transform: capitalize;
	height: 32px;
	background: var(--drash);
	border: 1px solid var(--drash);
	color: white;
	border-radius: 4px;
}

.formal3 .content {
	position: fixed;
	z-index: 600;
	right: 0;
	color: #878787;
	background: rgba(255,255,255,0.88);
	backdrop-filter: blur(5px);
	border: 1px solid #878787;
	border-radius: 4px;
	overflow-y: scroll;
}

@media screen and (min-width: 900px) {
	select, option { font-size: 16px;}
	.formal3 { position: relative; width: 100%;}
	.formal3 .content { top: 72px; width: 50%; font-size: 18px; padding: 80px; height: calc(100vh - 72px); }
	.content pre { font-size: 16px; color: #a0a0a0; line-height: 1.5;}
	.content cite { text-align: left; cursor: pointer;}
}

@media screen and (max-width: 899px) {
	.formal3 .content { top: 64px; width: 90%; font-size: 15px; padding: 40px; height: calc(100vh - 64px); }
}

@media screen and (max-width: 767px) {
	select { width: 80%}
	.formal3 .content { top: 64px; width: 90%; font-size: 14px; padding: 32px; height: calc(100vh - 64px); }
}

@media screen and (max-width: 575px) {
	select { width: 80%}
	.formal3 .content { top: 56px; width: 90%; font-size: 14px; padding: 24px; height: calc(100vh - 56px); }
}

</style>