<script>
import ShareSocial from '$lib/components/globals/ShareSocial.svelte'
import ShareSocial2 from '$lib/components/globals/ShareSocial.svelte'
import supabase from '$lib/db'
import { fly } from 'svelte/transition';
import { quintOut } from 'svelte/easing';
import { reveal } from 'svelte-reveal'
import GrandContainer from '$lib/components/globals/GrandContainer.svelte'

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
	.from('brhat-drashta2')
	.select()
	.eq('coursename','Śrīmad Vālmiki Rāmāyana Pārāyana')
	.eq('type', 'overview')
	if (error) throw new Error(error.message)
	return data
}

export async function fetchDetails(){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('coursename','Śrīmad Vālmiki Rāmāyana Pārāyana')
	.eq('type', 'course details')
	.order('sequence',{ascending: false})
	.limit(3)
	if (error) throw new Error(error.message)
	return data
}

export async function fetchWhofor(){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('coursename','Śrīmad Vālmiki Rāmāyana Pārāyana')
	.eq('type', 'course details')
	.order('sequence')
	.limit(1)
	if (error) throw new Error(error.message)
	return data
}

export async function fetchTakeaways(){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('coursename','Śrīmad Vālmiki Rāmāyana Pārāyana')
	.eq('type', 'takeaway')
	if (error) throw new Error(error.message)
	return data
}

export async function fetchContent(){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('coursename','Śrīmad Vālmiki Rāmāyana Pārāyana')
	.eq('type', 'course content')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function fetchFacilitator(){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('coursename','Śrīmad Vālmiki Rāmāyana Pārāyana')
	.eq('type', 'facilitator')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

</script>


<div class="pad-a rrr">

	<!-- side bar area of page -->	

	<GrandContainer>

		<!-- for mobile views of side bar -->


		<p slot="sectionname"><span class="drash">Vālmīki </span>Rāmāyaṇa</p>
		<div slot="mobilenav" class="mobmob">
			<div class="flier" in:fly={{ duration: 300, delay: 200, x: 0, y: -160}} out:fly={{ duration: 200, delay: 0, x: 0, y: -160}}>
				<ShareSocial2></ShareSocial2>
			</div>
			<h6 in:fly={{ duration: 300, delay: 200, x: 0, y: -160}} out:fly={{ duration: 200, delay: 0, x: 0, y: -160}}>Vālmīki Rāmāyaṇa</h6>
			<p class="islink" on:click={toggle1} on:keydown={toggle1} in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Overview</p>
			<p class="islink" on:click={toggle2} on:keydown={toggle2} in:fly={{ duration: 300, delay: 240, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Contents</p>
			<p class="islink" on:click={toggle3} on:keydown={toggle3} in:fly={{ duration: 300, delay: 260, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Takeaways</p>
			<p class="islink" on:click={toggle4} on:keydown={toggle4} in:fly={{ duration: 300, delay: 280, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Facilitator</p>
			<p class="islink drash">Participants' Area</p>
			<div class="block"></div>
			<h6 in:fly={{ duration: 300, delay: 200, x: 0, y: -160}} out:fly={{ duration: 200, delay: 0, x: 0, y: -160}}><a href="/drashta">Bṛhat Draṣṭā</a></h6>
			<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/drashta/course/valmikiramayana">Vālmīka Rāmāyaṇa</a></p>
			<p in:fly={{ duration: 300, delay: 220, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/drashta/course/hinduiconography">Hindu Iconography</a></p>
			<p in:fly={{ duration: 300, delay: 240, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/drashta/course/shriramswarup">Shri Ram Swarup</a></p>
			<p in:fly={{ duration: 300, delay: 250, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/drashta/course/sitaramgoel">Sita Ram Goel</a></p>
			<p in:fly={{ duration: 300, delay: 280, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/drashta/#drashtas">Draṣṭās</a></p>
			<p in:fly={{ duration: 300, delay: 300, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/drashta/#darshanas">Darśanas</a></p>
			<p in:fly={{ duration: 300, delay: 320, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/drashta/#firekeepers">Firekeepers of Civilization</a></p>
		</div>

		<!-- for desktop views of side bar-->
		<div slot="desknav" class="deskdesk">
			<ShareSocial></ShareSocial>
			<h6 class="pointer">Vālmīki Rāmāyaṇa</h6>
			<p class="islink" on:click={toggle1} on:keydown={toggle1}>Overview</p>
			<p class="islink" on:click={toggle2} on:keydown={toggle2}>Contents</p>
			<p class="islink" on:click={toggle3} on:keydown={toggle3}>Takeaways</p>
			<p class="islink" on:click={toggle4} on:keydown={toggle4}>Facilitator</p>
			<p class="drash">Participants' Area</p> 
			<h6><a href="/drashta">Bṛhat Draṣṭā</a></h6>
			<p><a href="/drashta/course/valmikiramayana">Vālmīka Rāmāyaṇa</a></p>
			<p><a href="/drashta/course/hinduiconography">Hindu Iconography</a></p>
			<p><a href="/drashta/course/shriramswarup">Shri Ram Swarup</a></p>
			<p><a href="/drashta/course/sitaramgoel">Sita Ram Goel</a></p>
			<p><a href="/drashta/#drashtas">Draṣṭās</a></p>
			<p><a href="/drashta/#darshanas">Darśanas</a></p>
			<p><a href="/drashta/#firekeepers">Firekeepers of Civilization</a></p>
		</div>
	</GrandContainer>

	<!-- sidebar area over -->


	<!-- main area of page is below -->

	<div class="x-x-2">

		<!-- introductory details of the course -->		

		{#if panel1}
			<div class="traybox wrap x1">
				<div class="ww2">
					<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/anshuman/Author%20of%20Ramayana%20Unravelled%20Lesser%20known%20facets%20of%20Rishi%20Valmiki's%20epic%20(1).png" alt="ramayana"/>
				</div>
				<div class="ww2 the-title">
					<h1>Vālmīki Rāmāyaṇa</h1>
				</div>
			</div>

			<!--icons row-->
			{#await fetchDetails()}
				<small>...loading</small>
					{:then data}
					<div class="traybox wrap" id="detailsrow">
						{#each data as item, i}
							<div class="ww4 iconcard" use:reveal={{transition: "fly", y: 80, duration: i*200, easing: "easeOutCirc", blur: 0}}>
								<img src={item.image} alt={item.name} />
								<small>{item.name}</small>
								<p>{item.content}</p>
							</div>
						{/each}
					</div>
					{:catch error}
				<pre>{error}</pre>
			{/await}

			<div class="boxc x2"
				in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}"
				out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}"
				>
				{#await fetchCourse()}		
				<small>...</small>
				{:then data}
					{#each data as item}
						<div class="boxr gap24">
							<p>{item.status}</p>
							<p>{item.datefrom}</p>
						</div>
						<pre class="wide75">{item.content}</pre>
					{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
		{/if}

		<!--course content and session details -->

		{#if panel2}
		<div class="boxc" in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}" out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}">
			<h3>Course Contents</h3>
			{#await fetchContent()}
				<small>loading...</small>
				{:then data}
					{#each data as item}
						<div class="boxc card contentcol wide75">
							<h6>{item.name}</h6>
						</div>
					{/each}
				{:catch error}
				<pre>{error}</pre>
			{/await}
		</div>
		{/if}

		<!--learner takeaways-->

		{#if panel3}
		<div class="boxc" in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}" out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}">
			<h3>Learner Takeaways</h3>
			{#await fetchTakeaways()}
			<small>loading...</small>
			{:then data}
				{#each data as item}
				<div class="boxc contentcol card wide75">
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
		<div class="boxc" in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}" out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}">
			<h3>Instructor</h3>
			{#await fetchFacilitator()}
				<small>loading...</small>
				{:then data}
				{#each data as item}
					<div class="instructorbox boxr wrap gap24">
						<img src={item.image} alt={item.name} />
						<pre>{item.content}</pre>
					</div>
				{/each}
				{:catch error}
				<pre>{error}</pre>
			{/await}
		</div>
		{/if}

		<!-- navigation buttons for sections of course -->

		<div class="boxr wrap gap24 buttonsrow">
			<button class="mainbutton drash" on:click={toggle1} on:keydown={toggle1}>Overview</button>
			<button class="mainbutton drash" on:click={toggle2} on:keydown={toggle2}>Contents</button>
			<button class="mainbutton drash" on:click={toggle3} on:keydown={toggle3}>Takeaways</button>
			<button class="mainbutton drash" on:click={toggle4} on:keydown={toggle4}>Instructor</button>
		</div>

	</div>
</div>



<style>
.the-title h1 { text-transform: uppercase; background: var(--drash); color: white;}
.x2 { margin-top: 32px;}
.iconcard p { color: var(--drash);}
.deskdesk a:hover, .islink:hover {
	color: var(--drash);
}

.deskdesk .drash {
	color: var(--drash);
	font-weight: bold;
	cursor: pointer;
}
.islink { cursor: pointer;}
	.x2 p {
		color: white;
		font-weight: bold;
		background: var(--drash);
		text-transform: uppercase;
		padding: 0px 12px;
		font-size: 12px;
	}
@media screen and (min-width: 900px) {
	#detailsrow { justify-content: flex-start !important;}

	.contentcol {
		margin-bottom: 32px;
	}

	.instructorbox pre {
		padding: 0 0 0 32px;
	}
	.contentcol pre, .instructorbox pre {
		font-size: 16px;
		color: #a0a0a0;
	}
	.instructorbox {
		display: flex;
		flex-direction: row;
		margin-bottom: 32px;
	}
	.instructorbox img {
		object-fit: cover;
		width: 40%;
		height: 200px;
		border-radius: 50%;
	}
}

@media screen and (max-width: 899px){

	.contentcol {
		margin-bottom: 32px;
	}	
	.contentcol pre, .instructorbox pre { margin: 0;}

	.instructorbox pre {
		padding: 0 0 0 32px;
	}
	.contentcol pre, .instructorbox pre {
		font-size: 16px;
		color: #a0a0a0;
	}
	.instructorbox {
		display: flex;
		flex-direction: row;
		margin-bottom: 32px;
	}
	.instructorbox img {
		object-fit: cover;
		width: 200px;
		height: 200px;
		border-radius: 100px;
		
	}
}

@media screen and (max-width: 767px) {
	.block { height: 40px; display: flex;}
	.instructorbox img { margin-bottom: 24px; width: 200px; height: 200px; border-radius: 100px;}
	.instructorbox pre {
		padding:0
	}
	.buttonsrow { padding: 32px 0;}
	.buttonsrow button {
		width: 40%;
	}
}
</style>

