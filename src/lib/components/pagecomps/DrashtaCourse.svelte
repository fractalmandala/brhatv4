<script lang="ts">
import { onMount } from 'svelte';
import supabase from '$lib/db'

let panel1 = true
let panel2 = false
let panel3 = false
let panel4 = false

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
}

export async function fetchCourse(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','hindu iconography')
	.eq('type', 'overview')
	if (error) throw new Error(error.message)
	return data
}

export async function fetchDetails(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','hindu iconography')
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
	.eq('course','hindu iconography')
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
	.eq('course','hindu iconography')
	.eq('type', 'takeaway')
	if (error) throw new Error(error.message)
	return data
}

export async function fetchContent(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','hindu iconography')
	.eq('type', 'course content')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function fetchFacilitator(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','hindu iconography')
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
		<h5 id="el-2" on:click={toggle2} on:keydown={toggle2}>Contents</h5>
		<h5 id="el-3" on:click={toggle3} on:keydown={toggle3}>Takeaways</h5>
		<h5 id="el-4" on:click={toggle4} on:keydown={toggle4}>Facilitator</h5>
	</div>
	<div class="c-c-c-c main">
		{#if panel1}
		<div id="element-1" class="formal3 element">
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
		<div id="element-2" class="formal3 element">
			<div class="c-c-c-c">
			{#await fetchContent()}
			<small>loading...</small>
			{:then data}
			<div class="base-row" id="contentrow">
			{#each data as item}
				<div class="c-c-c-c formal3" id="contentcol">
				<h5>{item.name}</h5>
				<pre class="coursecont">{item.content}</pre>
				<pre class="small">Books: {item.books}</pre>
				</div>
			{/each}
			</div>
			{:catch error}
			<pre>{error}</pre>
			{/await}
			</div>
		</div>
		{/if}
		{#if panel3}
		<div id="element-3" class="formal3 element">
			<div class="c-c-c-c">
			{#await fetchTakeaways()}
			<small>loading...</small>
			{:then data}
			{#each data as item}
			<div class="base-row formal3 " id="instructorrow">
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
		<div id="element-4" class="formal3 element">
			<div class="c-c-c-c">
				{#await fetchFacilitator()}
				<small>loading...</small>
				{:then data}
				{#each data as item}
				<div class="base-row formal3 " id="instructorrow">
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


<style>


.element {
	width: 80%;
	transition: width 0.42s ease;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}



.element h5 {
	margin-left: 10px;
	font-weight: 500;
	color: #474747;
	text-transform: uppercase;
	cursor: pointer;
}

.threebox img {
	object-fit: contain;
	width: 100%;
}

.element:hover h5 { color: white;}
.element h5:hover { color: #fe4a49;}

.element p { font-size: 24px;color: #474747; margin-top: 0; margin-bottom: 48px;}

.element h5 {
	margin-bottom: 32px;
	margin-left: 32px;
	border-bottom: 1px solid #272727;
	padding-bottom: 12px;
	color: #fe4a49;
	writing-mode: horizontal-tb;
	transform: rotate(0deg);
	font-size: 40px;
	width: 70%;
	font-weight: 500;
	cursor: pointer;
}
.element.active#element-1 h5 { text-transform: capitalize; font-size: 56px; width: 80%; color: #272727; font-weight: 600;}
.element.active#element-1 p { font-size: 18px;}

.aa {
	height: 100%;
	background: white;
}


@media screen and (min-width: 900px) {
	.element h5 { font-size: 20px;}
	.aa { gap: 2px;}
	.side { width: 20%;}
	.main { width: 80%;}
	.threebox img { object-fit: contain; width: 80px; height: 80px;}
}
</style>