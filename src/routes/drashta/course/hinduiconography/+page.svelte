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

<div class="wid-side">
	<GrandContainer>
		<div slot="mobilenav" class="mobmob">
				<div class="flier" in:fly={{ duration: 300, delay: 200, x: 0, y: -160}} out:fly={{ duration: 200, delay: 0, x: 0, y: -160}}>
					<ShareSocial2></ShareSocial2>
				</div>
				<h6 in:fly={{ duration: 300, delay: 200, x: 0, y: -160}} out:fly={{ duration: 200, delay: 0, x: 0, y: -160}}>Hindu Iconography</h6>
				<p class="islink" on:click={toggle1} on:keydown={toggle1} in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Overview</p>
				<p class="islink" on:click={toggle5} on:keydown={toggle5} in:fly={{ duration: 300, delay: 220, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Details</p>
				<p class="islink" on:click={toggle2} on:keydown={toggle2} in:fly={{ duration: 300, delay: 240, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Contents</p>
				<p class="islink" on:click={toggle3} on:keydown={toggle3} in:fly={{ duration: 300, delay: 260, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Takeaways</p>
				<p class="islink" on:click={toggle4} on:keydown={toggle4} in:fly={{ duration: 300, delay: 280, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}>Facilitator</p>
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
		<div slot="desknav" class="deskdesk">
			<ShareSocial></ShareSocial>
			<div class="tabhead">
				<h6>Hindu Iconography</h6>
			</div>
				<p class="islink" on:click={toggle1} on:keydown={toggle1}>Overview</p>
				<p class="islink" on:click={toggle5} on:keydown={toggle5}>Details</p>
				<p class="islink" on:click={toggle2} on:keydown={toggle2}>Contents</p>
				<p class="islink" on:click={toggle3} on:keydown={toggle3}>Takeaways</p>
				<p class="islink" on:click={toggle4} on:keydown={toggle4}>Facilitator</p>
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
	<div class="main-page">
		{#if panel1}
		<div class="gp1 x1"
				in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}"
				out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}"
			>
			<div id="element-1" class="document element">
				{#await fetchCourse()}		
				<small>...</small>
				{:then data}
				{#each data as item}
				<img class="heroimage" src={item.image} alt={item.name}/>
				<div class="the-title">
					<h2>{item.name}</h2>
				</div>
						<div class="boxr">
							<p>{item.status}</p>
							<p>{item.datefrom}</p>
						</div>
						<pre>{item.content}</pre>
					{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
		</div>
		{/if}
		{#if panel5}
		<div class="gp1" in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}" out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}">
			<div id="element-5" class="document element">
				<h3>Details</h3>
				{#await fetchDetails()}
					<small>...loading</small>
					{:then data}
					<div class="gp3" id="detailsrow">
						{#each data as item, i}
						<div class="cols3" use:reveal={{transition: "fly", y: 80, duration: i*200, easing: "easeOutCirc", blur: 0}}>
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
		<div class="gp1" in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}" out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}">
			<div id="element-2" class="document element">
				<h3>Course Contents</h3>
				{#await fetchContent()}
				<small>loading...</small>
				{:then data}
				{#each data as item}
					<div class="boxc contentcol">
						<h5>{item.name}</h5>
						<pre>{item.content}</pre>
						<pre>Books: {item.books}</pre>
					</div>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
			</div>
		</div>
		{/if}

		{#if panel3}
		<div class="gp1" in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}" out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}">
			<div id="element-3" class="document element">
				<h3>Learner Takeaways</h3>
			{#await fetchTakeaways()}
			<small>loading...</small>
			{:then data}
			{#each data as item}
			<div class="boxc contentcol">
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
		<div class="gp1" in:fly="{{ delay: 400, duration: 200, x:500, y: 0, opacity: 0, easing: quintOut}}" out:fly="{{ delay: 0, duration: 300, x:-500, y: 0, opacity: 0, easing: quintOut}}">
			<div id="element-4" class="document element">
				<h3>Instructor</h3>
				{#await fetchFacilitator()}
				<small>loading...</small>
				{:then data}
				{#each data as item}
				<div class="instructorbox">
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
.the-title h2 { text-transform: uppercase;}

.tabhead h6 {
	background: #474747;
}

.deskdesk a:hover, .islink:hover {
	color: var(--drash);
}
.islink { cursor: pointer;}
	.x1 p {
		color: white;
		font-weight: bold;
		background: var(--yell);
		text-transform: uppercase;
		padding: 0px 12px;
		font-size: 12px;
	}
@media screen and (min-width: 900px) {
	.element h3 {
		margin-bottom: 32px;
	}
	.heroimage {
		margin-right: -25%;
	}
	#detailsrow .cols3 {
		transition: all 0.3s var(--cubeb);
	}
	#detailsrow .cols3 small {
		text-transform: uppercase;
		font-weight: bold;
		font-size: 12px;
		color: #b7b7b7;
		text-align: center;
	}
	#detailsrow .cols3 img {
		margin: auto;
		object-fit: cover;
		width: 88px;
		height: 88px;
	}
	#detailsrow .cols3 p {
		text-align: center;
		font-weight: bold;
		color: #676767;
	}
	#detailsrow .cols3:hover p { color: var(--drash);}
	#detailsrow .cols3:hover {
		transform: scale(1.1);
	}
	.contentcol {
		margin-bottom: 32px;
	}
	.contentcol h5, .contentcol pre, .instructorbox pre { margin: 0;}
	.contentcol h5 {
			font-size: 20px;
			padding-bottom: 8px;
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
	}
	.tabhead { margin-top: 24px;}
}

@media screen and (max-width: 899px){
	.element h3 {
		margin-bottom: 32px;
	}
	#detailsrow .cols3 {
		transition: all 0.3s var(--cubeb);
	}
	#detailsrow .cols3 small {
		text-transform: uppercase;
		font-weight: bold;
		font-size: 12px;
		color: #b7b7b7;
		text-align: center;
	}
	#detailsrow .cols3 img {
		margin: auto;
		object-fit: cover;
		width: 88px;
		height: 88px;
	}
	#detailsrow .cols3 p {
		text-align: center;
		font-weight: bold;
		color: #676767;
	}
	#detailsrow .cols3:hover p { color: var(--drash);}
	#detailsrow .cols3:hover {
		transform: scale(1.1);
	}
	.contentcol {
		margin-bottom: 32px;
	}
	.contentcol h5, .contentcol pre, .instructorbox pre { margin: 0;}
	.contentcol h5 {
			font-size: 20px;
			padding-bottom: 8px;
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
	}
	.tabhead { margin-top: 24px;}
}

@media screen and (max-width: 767px) {
	.heroimage { width: 100%; margin-right: -64px;}
	.block { height: 40px; display: flex;}
}
</style>

