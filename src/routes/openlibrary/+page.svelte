<script lang="ts">
import { onMount } from 'svelte';
import ThinBar from '$lib/components/pagecomps/ThinBar.svelte'
import { reveal } from 'svelte-reveal'
import type { RevealOptions } from 'svelte-reveal';

import supabase from '$lib/db'


let isEss = false
let isIKS = false
let isBodha = false
let isHis = false
let isRos = false
let ax = 1

function toggleEss(){
	isEss = !isEss
}

function toggleIKS(){
	isIKS = !isIKS
}

function toggleBodha(){
	isBodha = !isBodha
}

function toggleHis(){
	isHis = !isHis
}

function toggleRos(){
	isRos = !isRos
}

export async function getEss(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Essentials')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function getIKS(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','IKS')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function getBodhas(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Bodhas')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function getRos(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Repository of Scripture')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function getHis(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','History')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

</script>

<svelte:window bind:scrollY={ax}/>
<ThinBar></ThinBar>
<div class="flexbox-r minmargins x1">
	<div class="in-col">
		<h4 class="wide75 m-bot-24">
		Bṛhat Open Library is an Online Repository for Texts, Papers, Learning Material and More.
		</h4>
		<p class="wide75 grey2">
			It is a tribute to the hard labor of people known and unknown that have created for us an unbelievable repository of Indian knowledge. All material here is sourced from public domains, permitted for resharing, and uploaded under the CC0 1.0 Open License. If you find any material that violates this, please write to us at contact@brhat.in and we will remove it from the collection. New books added every week.
		</p>
	</div>
	<div class="imageholder">
		<img src="/images/herocovers/bolherobrhat.webp" alt="reading"/>
	</div>
</div>

<div class="flexbox-c x2 minmargins">
	<p class="wbold lining grey2">Browse the Library:</p>
</div>

<div class="flexbox-r minmargins x3">
	<div class="in-col left-col link-heads">
		<h5 id='class-1' class="w600 upper" on:click={toggleEss} on:keydown={toggleEss}>Essentials</h5>
		<h5 id='class-2' class="w600 upper" on:click={toggleBodha} on:keydown={toggleBodha}>Two Bodhas</h5>
		<h5 id='class-3' class="w600 upper" on:click={toggleIKS} on:keydown={toggleIKS}>Indian Knowledge Systems</h5>
		<h5 id='class-4' class="w600 upper" on:click={toggleRos} on:keydown={toggleRos}>Scriptural</h5>
		<h5 id='class-5' class="w600 upper" on:click={toggleHis} on:keydown={toggleHis}>History</h5>
	</div>
	<div class="in-col mid-col">
		{#if isEss}
		{#await getEss()}
		<small>...</small>
		{:then data}
		{#each data as item, i}
			<div class="in-col" id="ess" use:reveal={{transition: "slide", delay: 10*i}}>
				<p class="w500">{item.Text}</p>
			</div>
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
		{/if}
		{#if isIKS}
		{#await getIKS()}
		<small>...</small>
		{:then data}
		{#each data as item}
			<div class="in-col" id="ess" use:reveal={{transition: "fly"}}>
				<p class="w500">{item.Text}</p>
			</div>
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
		{/if}

		{#if isBodha}
		{#await getBodhas()}
		<small>...</small>
		{:then data}
		{#each data as item}
		<div class="in-col" id="bodha" use:reveal={{transition: "fly"}}>
			<p class="w500">{item.Text}</p>
		</div>	
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
		{/if}

		{#if isHis}
		{#await getHis()}
		<small>...</small>
		{:then data}
		{#each data as item}
		<div class="in-col" id="bodha" use:reveal={{transition: "fly"}}>
			<p class="w500">{item.Text}</p>
		</div>	
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
		{/if}

		{#if isRos}
		{#await getRos()}
		<small>...</small>
		{:then data}
		{#each data as item}
		<div class="in-col" id="bodha" use:reveal={{transition: "fly"}}>
			<p class="w500">{item.Text}</p>
		</div>	
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
		{/if}
	</div>
</div>

<div class="flexbox-r minmargins x4">
	<div class="w500 in-col col3">
		<img id="img1" src="/images/rid/panel1.webp" alt="one" use:reveal={{transition: "fly"}}/>
	</div>
	<div class="w500 in-col col3">
		<img src="/images/rid/panel2.webp" alt="one"/>
	</div>
	<div class="w500 in-col col3">
		<img src="/images/rid/panel3.webp" alt="one" />
	</div>
</div>




<style>
.x1, .x3, .x2, .x4 { overflow-x: hidden; width: 100%}
.x4, .x3, .x2 { background: white; z-index: 2;}
.left-col { width: 25%;}
.mid-col { 
	width: 35%;
	padding: 0 16px;
	background: white;

}
.x3 { background: white;}
.link-heads h5 { cursor: pointer; position: relative;}
.link-heads h5:hover { background: var(--beau); color: white;}
.x4 .col3 { transform-origin: center center; transition: all 0.6s ease; overflow: hidden;}
.x4 .col3:hover { transform: scale(0.9);
}
.lining {
	border-left: 4px solid #FF9F1C;
}
.link-heads h5::before {
	position: absolute;
	top: 0;
	left: 0;
	content: '';
	height: 100%;
	border-bottom: 4px solid #FF9F1C;
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
	.link-heads h5 { padding: 8px; margin: 0; border-bottom: 1px solid #d7d7d7; padding-left: 16px;}
	.x1 { min-height: 100vh; position: relative; width: 100%; position: sticky; top: 0; justify-content: flex-end; align-items: flex-end;}
	.x1 .in-col { width: 50%;}	
	.x1 .in-col .grey2 { margin-bottom: 128px;}
	.x1 .imageholder { max-width: 44vw; height: 88vh; display: flex; flex-direction: column; overflow: hidden; }
	.x1 .imageholder img { object-fit: cover; height: 88vh; width: 44vw; object-position: 99% center;}
	.x2 { padding-bottom: 4px; width: 100%; background: white; background: white;}
	.x2 .lining { padding-top: 4px; padding-bottom: 2px; padding-left: 16px; background: white;}
	.x3 {
		align-items: flex-start;
		height: 100vh;
	}

	.mid-col, .left-col { height: max-content; background: white; z-index: 2;}

	.mid-col { height: 100%;}
	.left-col { width: 32%;}
	.col3 { width: calc(94%/3); height: 400px;}
	.x4 { padding-top: 16px; padding-bottom: 32px; gap: 24px;}
	#img1 { height: 1024px;}
}
</style>
