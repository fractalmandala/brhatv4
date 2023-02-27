<script lang="ts">
import { onMount } from 'svelte';
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

<div class="flexbox-c ln1">
	<div class="in-col imageholder" style="transform: translateY({ax/3}px)">
		<img src="/images/herocovers/bolherobrhat.webp" alt="reading" style="transform: translateY({-ax/4}px)"/>
	</div>
</div>

<div class="flexbox-c lm1 minmargins">
	<p class="wbold yoll">Browse the Library:</p>
</div>
<div class="flexbox-r minmargins l0">
	<div class="in-col left-col link-heads">
		<h4 id='class-1' class="w600 upper" on:click={toggleEss} on:keydown={toggleEss}>Essentials</h4>
		<h4 id='class-2' class="w600 upper" on:click={toggleBodha} on:keydown={toggleBodha}>Two Bodhas</h4>
		<h4 id='class-3' class="w600 upper" on:click={toggleIKS} on:keydown={toggleIKS}>Indian Knowledge Systems</h4>
		<h4 id='class-4' class="w600 upper" on:click={toggleRos} on:keydown={toggleRos}>Scriptural</h4>
		<h4 id='class-5' class="w600 upper" on:click={toggleHis} on:keydown={toggleHis}>History</h4>
	</div>
	<div class="in-col mid-col">
		{#if isEss}
		{#await getEss()}
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

<div class="flexbox-c minmargins l1">
	<h4 class="wide75 m-bot-24">
		Bṛhat Open Library is an Online Repository for Texts, Papers, Learning Material and More.
	</h4>
	<p class="wide75">
	It is a tribute to the hard labor of people known and unknown that have created for us an unbelievable repository of Indian knowledge. All material here is sourced from public domains, permitted for resharing, and uploaded under the CC0 1.0 Open License. If you find any material that violates this, please write to us at contact@brhat.in and we will remove it from the collection. New books added every week.
	</p>
</div>
<div class="flexbox-r minmargins l2">
	<div class="w500 in-col col3">
		<img src="/images/rid/panel1.webp" alt="one" />
	</div>
	<div class="w500 in-col col3">
		<img src="/images/rid/panel2.webp" alt="one" />
	</div>
	<div class="w500 in-col col3">
		<img src="/images/rid/panel3.webp" alt="one" />
	</div>
</div>




<style>
.l1, .l2 { background: white; z-index: 2;}
.left-col { width: 25%;}
.mid-col { 
	width: 35%;
	padding: 0 16px;

}
.link-heads h4 { cursor: pointer;}
.link-heads h4:hover { background: var(--beau); color: white;}
.l2 .col3 { transform-origin: center center; transition: all 0.6s ease;}
.l2 .col3:hover { transform: scale(0.9);
}
@media screen and (min-width: 900px) {
	.link-heads h4 { padding: 8px; margin: 0; border-bottom: 1px solid #d7d7d7;}
	.ln1 { height: 100vh; position: relative; width: 100%; position: sticky; top: 0; justify-content: flex-end; align-items: flex-end;}
	.ln1 .imageholder { width: 44%; height: 100vh; position: relative; margin-right: 64px; }
	.ln1 .imageholder img { object-fit: cover; height: 100%; width: 100%; position: absolute; top: 0; left:0; object-position: center right;}
	.lm1 { margin-top: 120px; padding-bottom: 4px; width: 50%; background: white; z-index: 3;}
	.l0 {
		align-items: flex-start;
		min-height: 50vh;
	}
	.l1 {
		height: 100%;
		width: 100vw;
		justify-content: flex-start;
		align-items: flex-start;

	}
	.mid-col, .left-col { height: max-content; background: white; z-index: 2;}

	.mid-col { width: 100%; min-height: 100%;}
	.left-col { width: 85%;}
	.col3 { width: calc(88%/3);}
	.l2 { padding-top: 16px; padding-bottom: 32px; gap: 32px;}
	
}
</style>
