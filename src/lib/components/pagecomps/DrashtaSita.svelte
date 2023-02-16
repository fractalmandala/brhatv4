<script lang="ts">
//@ts-nocheck
import { onMount } from 'svelte';
import supabase from '$lib/db'
import { fly } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

let panel1 = true
let panel2 = false
let panel3 = false
let panel4 = false
let panel5 = false

function toggle1(){
	panel1 = !panel1
	if (panel2 === true) {
			panel2 = !panel2
	}
	if (panel3 === true) {
			panel3 = !panel3
	}
	if (panel4 === true) {
			panel4 = !panel4
	}
	if (panel5 === true) {
			panel5 = !panel5
	}
}

function toggle2(){
	panel2 = !panel2
	if (panel1 === true) {
			panel1 = !panel1
	}
	if (panel3 === true) {
			panel3 = !panel3
	}
	if (panel4 === true) {
			panel4 = !panel4
	}
	if (panel5 === true) {
			panel5 = !panel5
	}
}

function toggle3(){
	panel3 = !panel3
	if (panel2 === true) {
			panel2 = !panel2
	}
	if (panel1 === true) {
			panel1 = !panel1
	}
	if (panel4 === true) {
			panel4 = !panel4
	}
	if (panel5 === true) {
			panel5 = !panel5
	}
}

function toggle4(){
	panel4 = !panel4
	if (panel2 === true) {
			panel2 = !panel2
	}
	if (panel3 === true) {
			panel3 = !panel3
	}
	if (panel1 === true) {
			panel1 = !panel1
	}
	if (panel5 === true) {
			panel5 = !panel5
	}
}

function toggle5(){
	panel5 = !panel5
	if (panel2 === true) {
			panel2 = !panel2
	}
	if (panel3 === true) {
			panel3 = !panel3
	}
	if (panel1 === true) {
			panel1 = !panel1
	}
	if (panel4 === true) {
			panel4 = !panel4
	}
}

export async function fetchCourse(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','introduction to sita ram goel')
	.eq('type', 'overview')
	if (error) throw new Error(error.message)
	return data
}

export async function fetchDetails(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','introduction to sita ram goel')
	.eq('type', 'course details')
	.order('sequence',{ascending: false})
	.limit(3)
	if (error) throw new Error(error.message)
	return data
}

export async function fetchWhofor(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','introduction to sita ram goel')
	.eq('type', 'course details')
	.order('sequence')
	.limit(1)
	if (error) throw new Error(error.message)
	return data
}

export async function fetchTakeaways(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','introduction to sita ram goel')
	.eq('type', 'takeaway')
	if (error) throw new Error(error.message)
	return data
}

export async function fetchContent(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','introduction to sita ram goel')
	.eq('type', 'course content')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function fetchFacilitator(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','introduction to sita ram goel')
	.eq('type', 'facilitator')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

let activeDivId = 'element-1';
function toggleWid(e: {currentTarget: {id: string;};}) {
  const headerId = e.currentTarget.id;
  const elementId = `element-${headerId.slice(-1)}`;
  if (activeDivId === elementId) {
    return;
  }
  activeDivId = elementId;
}

onMount(() => {
  document.getElementById(activeDivId).focus();
});
</script>

<div class="r-r-r-r l0">
	<div class="c-c-c-c side">
		<h5 id="el-1" on:click={toggle1} on:keydown={toggle1}>Overview</h5>
		<h5 id="el-5" on:click={toggle5} on:keydown={toggle5}>Details</h5> 
		<h5 id="el-2" on:click={toggle2} on:keydown={toggle2}>Contents</h5>
		<h5 id="el-3" on:click={toggle3} on:keydown={toggle3}>Takeaways</h5>
		<h5 id="el-4" on:click={toggle4} on:keydown={toggle4}>Facilitator</h5>
		<h5 class="sidesmall"><a href="/drashta">Draṣṭā Home</a></h5>
		<h5 class="sidesmall"><a href="/drashta/drashtas">Draṣṭās</a></h5>
		<h5 class="sidesmall"><a href="/drashta/schools">Schools of Thought</a></h5>
		<h5 class="sidesmall"><a href="/drashta/firekeepers">Firekeepers</a></h5>
	</div>
	<div class="c-c-c-c main">
		{#if panel1}
		<div id="element-1" class="formal3 element"
			in:fly="{{ delay: 400, duration: 200, x:0, y: 600, opacity: 0, easing: quintOut}}"
			out:fly="{{ delay: 0, duration: 300, x:0, y: -600, opacity: 0, easing: quintOut}}"
			>
			{#await fetchCourse()}		
			<small>...</small>
			{:then data}
			{#each data as item}
			<pre>{item.content}</pre>
			{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>
		{/if}
		{#if panel5}
		<div id="element-5" class="formal3 element"
			in:fly="{{ delay: 400, duration: 200, x:0, y: 600, opacity: 0, easing: quintOut}}"
			out:fly="{{ delay: 0, duration: 300, x:0, y: -600, opacity: 0, easing: quintOut}}"
			>
			<div class="c-c-c-c">
			{#await fetchDetails()}
			<small>...loading</small>
			{:then data}
			<div class="row-of-3" id="detailsrow">
			{#each data as item}
				<div class="c-c-c-c threebox formal3" id="detailscol">
				<img src={item.image} alt={item.name} />
				<small>{item.name}</small>
				<p>{item.content}</p>
				</div>
			{/each}
			</div>
			{:catch error}
			<pre>{error}</pre>
			{/await}
			</div>
		</div>
		{/if}
		{#if panel2}
		<div id="element-2" class="formal3 element"
			in:fly="{{ delay: 400, duration: 200, x:0, y: 600, opacity: 0, easing: quintOut}}"
			out:fly="{{ delay: 0, duration: 300, x:0, y: -600, opacity: 0, easing: quintOut}}"
			>
			<div class="c-c-c-c">
			{#await fetchContent()}
			<small>loading...</small>
			{:then data}
			{#each data as item}
				<div class="c-c-c-c formal3" id="contentcol">
					<h5>{item.name}</h5>
					<pre class="coursecont">{item.content}</pre>
					<pre class="small">Books: {item.books}</pre>
				</div>
			{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
			</div>
		</div>
		{/if}
		{#if panel3}
		<div id="element-3" class="formal3 element"
			in:fly="{{ delay: 400, duration: 200, x:0, y: 600, opacity: 0, easing: quintOut}}"
			out:fly="{{ delay: 0, duration: 300, x:0, y: -600, opacity: 0, easing: quintOut}}"
			>
			<div class="c-c-c-c">
			{#await fetchTakeaways()}
			<small>loading...</small>
			{:then data}
			{#each data as item}
			<div class="c-c-c-c formal3 " id="instructorrow">
				<h5>{item.name}</h5>
				<pre>{item.content}</pre>
			</div>
			{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
			</div>
		</div>
		{/if}
		{#if panel4}
		<div id="element-4" class="formal3 element"
			in:fly="{{ delay: 400, duration: 200, x:0, y: 600, opacity: 0, easing: quintOut}}"
			out:fly="{{ delay: 0, duration: 300, x:0, y: -600, opacity: 0, easing: quintOut}}"
			>
			<div class="c-c-c-c">
				{#await fetchFacilitator()}
				<small>loading...</small>
				{:then data}
				{#each data as item}
				<div class="r-r-r-r fac formal3 " id="instructorrow">
					<img src={item.image} alt={item.name} />
					<pre>{item.content}</pre>
				</div>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
		</div>
		{/if}
	</div>
</div>

