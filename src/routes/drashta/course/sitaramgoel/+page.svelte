<script lang="ts">
	import { onMount } from 'svelte';
	import ShareSocial from '$lib/components/globals/ShareSocial.svelte'
	import supabase from '$lib/db'
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { reveal } from 'svelte-reveal'
	let xaxis: number = 0;
	let showLinks: boolean = true;
	let onMobile: boolean = false;
	let fullHeight = false
	function toggleMobileLinks() {
	  onMobile = !onMobile;
		fullHeight = !fullHeight
	}
	onMount(() => {
	  if (xaxis < 768) {
	    showLinks = onMobile;
	  }
	});
	$: showLinks = onMobile || xaxis >= 767;
	let panel1 = true
	let panel2 = false
	let panel3 = false
	let panel4 = false
	
	function toggle1(){
		if (!panel1) {
			panel1 = true
			if (panel2) {
				panel2 = false
			}
			if (panel3) {
				panel3 = false
			}
			if (panel4) {
				panel4 = false
			}
		}
	}
	
	function toggle2(){
		if (!panel2) {
			panel2 = true
			if (panel1) {
				panel1 = false
			}
			if (panel3) {
				panel3 = false
			}
			if (panel4) {
				panel4 = false
			}
		}
	}
	
	function toggle3(){
		if (!panel3) {
			panel3 = true
			if (panel2) {
				panel2 = false
			}
			if (panel1) {
				panel1 = false
			}
			if (panel4) {
				panel4 = false
			}
		}
	}
	
	function toggle4(){
		if (!panel4) {
			panel4 = true
			if (panel2) {
				panel2 = false
			}
			if (panel3) {
				panel3 = false
			}
			if (panel1) {
				panel1 = false
			}
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

</script>

<svelte:window bind:innerWidth={xaxis}/>

<div class="container-wd-sidebar pad-a">
  <div class="sidebar-area" class:fullHeight={fullHeight}>
		<div class="menuiconarea">
			<div class="svgicon" on:click={toggleMobileLinks} on:keydown={toggleMobileLinks}>
				{#if onMobile}
				<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path id="onlystroke2" d="M14.131 26.9193C21.2003 26.9193 26.931 21.1886 26.931 14.1193C26.931 7.05011 21.2003 1.31934 14.131 1.31934C7.06181 1.31934 1.33105 7.05011 1.33105 14.1193C1.33105 21.1886 7.06181 26.9193 14.131 26.9193Z" stroke="white" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
					<path id="onlyfill" d="M15.2474 14.5L18.739 10.6593C18.9047 10.4773 18.9979 10.2304 18.9981 9.97283C18.9983 9.71528 18.9055 9.46818 18.7401 9.2859C18.5747 9.10362 18.3502 9.00109 18.1161 9.00086C17.8819 9.00063 17.6573 9.10273 17.4916 9.28468L14 13.1254L10.5084 9.28468C10.3427 9.1024 10.118 9 9.88361 9C9.64926 9 9.42451 9.1024 9.2588 9.28468C9.09309 9.46697 9 9.71419 9 9.97197C9 10.2298 9.09309 10.477 9.2588 10.6593L12.7504 14.5L9.2588 18.3407C9.09309 18.523 9 18.7702 9 19.028C9 19.2858 9.09309 19.533 9.2588 19.7153C9.42451 19.8976 9.64926 20 9.88361 20C10.118 20 10.3427 19.8976 10.5084 19.7153L14 15.8746L17.4916 19.7153C17.6573 19.8976 17.882 20 18.1164 20C18.3507 20 18.5755 19.8976 18.7412 19.7153C18.9069 19.533 19 19.2858 19 19.028C19 18.7702 18.9069 18.523 18.7412 18.3407L15.2474 14.5Z" fill="white"/>
				</svg>
				{:else}
				<svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path id="onlystroke" d="M20.1873 38.4557C30.2862 38.4557 38.473 30.2689 38.473 20.17C38.473 10.0711 30.2862 1.88428 20.1873 1.88428C10.0884 1.88428 1.90161 10.0711 1.90161 20.17C1.90161 30.2689 10.0884 38.4557 20.1873 38.4557Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
					<path id="strokeandfill" d="M20.1874 22.9557C20.9214 22.9557 21.6136 22.5937 22.1124 22.095C22.6111 21.5962 22.9731 20.904 22.9731 20.17C22.9731 19.4359 22.6111 18.7438 22.1124 18.245C21.6136 17.7463 20.9214 17.3843 20.1874 17.3843C19.4532 17.3843 18.7616 17.7464 18.2635 18.2453C17.7653 18.7442 17.4043 19.4363 17.4043 20.17C17.4043 20.9037 17.7653 21.5958 18.2635 22.0947C18.7616 22.5936 19.4532 22.9557 20.1874 22.9557ZM11.0445 22.9557C11.7786 22.9557 12.4708 22.5937 12.9695 22.095C13.4683 21.5962 13.8303 20.904 13.8303 20.17C13.8303 19.4359 13.4683 18.7438 12.9695 18.245C12.4708 17.7463 11.7786 17.3843 11.0445 17.3843C10.3104 17.3843 9.61875 17.7464 9.12061 18.2453C8.62246 18.7442 8.26147 19.4363 8.26147 20.17C8.26147 20.9037 8.62246 21.5958 9.12061 22.0947C9.61875 22.5936 10.3104 22.9557 11.0445 22.9557ZM29.3303 22.9557C30.0643 22.9557 30.7565 22.5937 31.2552 22.095C31.754 21.5962 32.116 20.904 32.116 20.17C32.116 19.4359 31.754 18.7438 31.2552 18.245C30.7565 17.7463 30.0643 17.3843 29.3303 17.3843C28.5961 17.3843 27.9045 17.7464 27.4063 18.2453C26.9082 18.7442 26.5472 19.4363 26.5472 20.17C26.5472 20.9037 26.9082 21.5958 27.4063 22.0947C27.9045 22.5936 28.5961 22.9557 29.3303 22.9557Z" fill="white" stroke="white"/>
				</svg>
				{/if}
			</div>
		</div>
    <div class="socialicons">
			<ShareSocial></ShareSocial>
		</div>
    <div class="sidebarlinks">
			<div class="linkssection" on:click={toggleMobileLinks} on:keydown={toggleMobileLinks}>
				<h6>Sita Ram Goel</h6>
				<p class="point" on:click={toggle1} on:keydown={toggle1}>Overview</p>
				<p class="point" on:click={toggle2} on:keydown={toggle2} in:fly={{ duration: 300, delay: 240, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Contents</p>
				<p class="point" on:click={toggle3} on:keydown={toggle3} in:fly={{ duration: 300, delay: 260, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Takeaways</p>
				<p class="point" on:click={toggle4} on:keydown={toggle4} in:fly={{ duration: 300, delay: 280, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Facilitator</p>
				<h6><a href="/drashta">Bṛhat Draṣṭā</a></h6>
				<p><a href="/drashta/course/valmikiramayana">Vālmīka Rāmāyaṇa</a></p>
				<p><a href="/drashta/course/hinduiconography">Hindu Iconography</a></p>
				<p><a href="/drashta/course/shriramswarup">Shri Ram Swarup</a></p>
				<p><a href="/drashta/course/sitaramgoel">Sita Ram Goel</a></p>
				<p><a href="/drashta/#drashtas">Draṣṭās</a></p>
				<p><a href="/drashta/#darshanas">Darśanas</a></p>
				<p><a href="/drashta/#firekeepers">Firekeepers of Civilization</a></p>
			</div>
    </div>
	</div>
  <div class="area-main">
    <div class="imagebox back-image" style="background-image: url('/images/drashta/sitaramgoel.webp')">
			<div class="pagetitle">
			<h1>Introduction to <br>Sita Ram Goel</h1>
			</div>
		</div>
    <div class="bodybox">
			{#if panel1}
				<!--icons row-->
				{#await fetchDetails()}
				<small>...loading</small>
				{:then data}
				<div class="iconrowof3">
					{#each data as item, i}
					<div class="iconcard" use:reveal={{transition: "fly", y: 80, duration: i*200, easing: "easeOutCirc", blur: 0}}>
						<img src={item.image} alt={item.name} />
						<small>{item.name}</small>
						<p>{item.content}</p>
					</div>
					{/each}
				</div>
				{:catch error}
				<pre>{error}</pre>
				{/await}
				<div class="bodybody">
						{#await fetchCourse()}		
						<small>...</small>
						{:then data}
						{#each data as item}
						<div class="statusstrip">
								<p>{item.status}</p>
								<p>{item.datefrom}</p>
						</div>
						<div class="bodystrip">
							<pre class="wide75">{item.content}</pre>
						</div>
						{/each}
						{:catch error}
						<pre>{error}</pre>
						{/await}
				</div>
			{/if}

			{#if panel2}
				<div class="bodybody" in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}" out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}">
				<h4>Course Contents</h4>
				{#await fetchContent()}
				<small>loading...</small>
				{:then data}
					{#each data as item}
						<div class="boxc wide75 card content">
							<h6>{item.name}</h6>
							<p>{item.content}</p>
						</div>
					{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
				</div>
			{/if}

			<!--learner takeaways-->

			{#if panel3}
				<div class="bodybody" in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}" out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}">
					<h4>Learner Takeaways</h4>
					{#await fetchTakeaways()}
					<small>loading...</small>
					{:then data}
					{#each data as item}
					<div class="boxc card wide75 takeaways">
						<h6>{item.name}</h6>
						<pre>{item.content}</pre>
					</div>
					{/each}
					{:catch error}
					<pre>{error}</pre>
					{/await}
				</div>
			{/if}

			<!--about course instructor(s)-->

			{#if panel4}
				<div class="bodybody" in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}" out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}">
				<h4>Instructor</h4>
				{#await fetchFacilitator()}
					<small>loading...</small>
					{:then data}
					{#each data as item}
						<div class="instructorbox">
							<div class="instructorphoto">
								<img src={item.image} alt={item.name} />
							</div>
							<div class="instructorbio">
								<pre>{item.content}</pre>
							</div>
						</div>
					{/each}
					{:catch error}
					<pre>{error}</pre>
				{/await}
				</div>
			{/if}
		</div>
    <div class="buttonbox">
			<div class="b1">
				<button class="mainbutton drash" on:click={toggle1} on:keydown={toggle1}>Overview</button>
			</div>
			<div class="b2">
				<button class="mainbutton drash" on:click={toggle2} on:keydown={toggle2}>Contents</button>
			</div>
			<div class="b3">
				<button class="mainbutton drash" on:click={toggle3} on:keydown={toggle3}>Takeaways</button>
			</div>
			<div class="b4">
				<button class="mainbutton drash" on:click={toggle4} on:keydown={toggle4}>Instructor</button>
			</div>
		</div>
  </div>
</div>
