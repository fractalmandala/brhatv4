<script lang="ts">
//@ts-nocheck
import supabase from '$lib/db'
import { fly } from 'svelte/transition';
import { quintOut } from 'svelte/easing';
import { reveal } from 'svelte-reveal'
let i = 1
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

</script>



<div class="flexbox-r minmargins l0">
	<div class="in-col side link-heads">
		<h5 class="w600 upper" on:click={toggle1} on:keydown={toggle1}>Overview</h5>
		<h5 class="w600 upper" on:click={toggle5} on:keydown={toggle5}>Details</h5>
		<h5 class="w600 upper" on:click={toggle2} on:keydown={toggle2}>Contents</h5>
		<h5 class="w600 upper" on:click={toggle3} on:keydown={toggle3}>Takeaways</h5>
		<h5 class="w600 upper" on:click={toggle4} on:keydown={toggle4}>Facilitator</h5>
	</div>
	<div class="in-col main">
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
			<div class="in-col">
			{#await fetchDetails()}
			<small>...loading</small>
			{:then data}
			<div class="in-row" id="detailsrow">
			{#each data as item, i}
				<div class="in-col formal3" id="detailscol" use:reveal={{transition: "fly", y: 80, duration: i*200, easing: "easeOutCirc", blur: 0}}>
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
			<div class="in-col">
			{#await fetchContent()}
			<small>loading...</small>
			{:then data}
			<h3>Course Contents</h3>
			{#each data as item}
				<div class="in-col formal3" id="contentcol">
					<h6>{item.name}</h6>
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
			<div class="in-col">
			{#await fetchTakeaways()}
			<small>loading...</small>
			{:then data}
			<h3>Takeaways</h3>
			{#each data as item}
			<div class="in-col formal3 " id="instructorrow">
				<h6>{item.name}</h6>
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
			<div class="in-col">
				{#await fetchFacilitator()}
				<small>loading...</small>
				{:then data}
				<h3>Course Instructor</h3>
				{#each data as item}
				<div class="in-row fac formal3 " id="instructorrow">
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
.link-heads h5 { cursor: pointer; position: relative;}
.link-heads h5:hover { background: var(--beau); color: white;}
.link-heads h5::before {
	position: absolute;
	top: 0;
	left: 0;
	content: '';
	height: 100%;
	border-bottom: 4px solid #255F85;
	z-index: 0;
}
.link-heads h5:hover::before {
	animation: yellowline 0.4s var(--cubeb) forwards;
}
@keyframes yellowline {
	0% { width: 0%;}
	100% {width: 100%;}
}



@media screen and (min-width: 900px) {
.side { width: 20%;}
.main { width: 80%;}
	.l0 { height: 100%; padding-top: 120px;}
	.link-heads h5 { padding: 8px; margin: 0; border-bottom: 1px solid #d7d7d7; padding-left: 16px;}
	.main { padding: 0 80px 0 0;}
	#element-1 pre { font-size: 18px; line-height: 1.6;}
	.in-row { align-items: flex-start; gap: 64px; margin-top: 24px; margin-bottom: 80px; padding-left: 80px;}	
	.formal3 h3 { padding-bottom: 12px; border-bottom: 1px solid #d7d7d7; border-left: 6px solid #255F85; padding-left: 32px;}
	.formal3 h6 { text-transform: capitalize; margin: 0 0 0 80px; padding-top: 48px;}
	.formal3 pre { margin: 0 0 0 80px; width: 88%; padding-top: 12px; color: #878787;}
	.formal3 img { margin-bottom: 24px; object-fit: contain;}
	.formal3.element { padding-bottom: 64px;}
	.fac { padding-left: 80px; gap: 0;}
	.fac img { width: 32%;}
	.fac pre { width: 70%;}
	.formal3 small { font-size: 12px; text-transform: uppercase; text-align: center; font-weight: bold; color: #b7b7b7; margin: 0;}
	.formal3 p { font-size: 18px; margin: 0; padding: 0; text-align: center; font-weight: bold; text-transform: uppercase; }
	.in-row .formal3 img { object-fit: cover; width: 128px; height: 128px;}
} 

@media screen and (max-width: 899px) and (min-width: 768px) {
	.l0 { height: 100%;}
	.side { width: 30%;}
	.main { width: 70%; padding: 0 24px 0 24px;}
	.link-heads h5 { padding-left: 16px;}
	#element-1 pre { font-size: 16px; line-height: 1.6;}
	#detailsrow {
		gap: 40px; padding-left: 24px;
	}
	#detailsrow img { object-fit: contain; width: 80px; height: 80px; margin: auto;}
	.formal3 h3 { font-size: 36px; padding-bottom: 6px; border-bottom: 1px solid #d7d7d7; border-left: 6px solid #255F85; padding-left: 16px;}
	.formal3 h6 { text-transform: capitalize; padding-top: 48px; text-align: left;}
	.formal3 small { font-size: 12px; text-transform: uppercase; text-align: center; font-weight: bold; color: #b7b7b7; margin: 0;}
	.formal3 p { font-size: 16px; margin: 4px 0 0 0; padding: 0; text-align: center; font-weight: bold; text-transform: uppercase; }
	
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.link-heads h5 { font-size: 16px; padding: 4px;}
	.link-heads { flex-direction: row; justify-content: space-between; height: 48px;}
	.l0 { width: 100vw; overflow-x: hidden; height: 100%; padding: 24px;} 
	.side { display: flex; width: 100vw; height: 32px; border-bottom: 1px solid #d7d7d7; top: 80px; position: sticky; left: 0; z-index: 999;}
	.main { width: 100%; height: 100%; margin-top: 90px;}
	.formal3 h3 { font-size: 28px; margin-top: 40px; margin-bottom: 24px; padding-bottom: 6px; border-bottom: 1px solid #d7d7d7; border-left: 6px solid #255F85; padding-left: 16px;}
	.formal3 h6 { text-transform: capitalize; padding-top: 24px; margin: 0;}
	.formal3 p { margin: 0; padding-top: 0; padding-bottom: 16px;}
  .formal3 small { font-size: 12px; text-transform: uppercase; font-weight: bold;}
	#detailscol img { object-fit: contain; width: 80px; height: 80px; margin-left: auto; margin-right: auto; margin-bottom: 16px; }
	#detailsrow { justify-content: center; height: 150px; padding: 0;}
	#detailscol small, #detailscol p { margin: 0; text-align: center;}
	#detailscol small { color: #b7b7b7;}
	#detailscol { width: 30%;}
	#element-1 pre { font-size: 18px;}
	.fac img { object-fit: contain; width: 40%; margin-right: auto;}
	.fac { flex-direction: column;}
}

@media screen and (max-width: 575px) {
	.l0 { height: 100%; align-items: flex-start;}
	.link-heads h5 { font-size: 14px; padding: 2px 0;}
	.link-heads { flex-direction: column; justify-content: center; gap: 4px; height: 100%; padding-left: 24px;}
	.main { padding: 24px;}
	#detailscol img { object-fit: contain; width: 80px; height: 80px; margin-left: auto; margin-right: auto; margin-bottom: 16px; }
#detailsrow { justify-content: center; height: 150px; padding: 0; width: 100%;}
	#detailscol small, #detailscol p { margin: 0; text-align: center;}
	#detailscol small { color: #b7b7b7; font-size: 10px;}
	#detailscol p { font-size: 14px;}
	#detailscol { width: 33%;}
	#element-5 { width: 88vw;}
.formal3 h3 { font-size: 28px; margin-top: 40px; margin-bottom: 24px; padding-bottom: 6px; border-bottom: 1px solid #d7d7d7; border-left: 6px solid #255F85; padding-left: 16px;}
	.formal3 h6 { text-transform: capitalize; padding-top: 24px; margin: 0;}
  .formal3 small { font-size: 12px; text-transform: uppercase; font-weight: bold;}
.fac img { object-fit: contain; width: 40%; margin-right: auto;}
	.fac { flex-direction: column;}
}
</style>