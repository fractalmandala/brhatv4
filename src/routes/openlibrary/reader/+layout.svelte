<script>
import ThinBar from '$lib/components/pagecomps/ThinBar.svelte'
import supabase from '$lib/db'
import { reveal } from 'svelte-reveal'
import { fly } from 'svelte/transition'
import { quadOut } from 'svelte/easing'
let level2Ramayana = false
let kandaSelected = null
let shownSargas
let isK1 = false
let isK2 = false
let isK3 = false
let isK4 = false
let isK5 = false
let isK6 = false
let isK7 = false

function l2Ramayana(){
	level2Ramayana = !level2Ramayana
}

function toggleK1(){
	isK1 = !isK1
}

function toggleK2(){
	isK2 = !isK2
}

function toggleK3(){
	isK3 = !isK3
}

function toggleK4(){
	isK4 = !isK4
}

function toggleK5(){
	isK5 = !isK5
}

function toggleK6(){
	isK6 = !isK6
}

function toggleK7(){
	isK7 = !isK7
}

export async function kanda1(){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('kanda',1)
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

export async function kanda7(){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('kanda',7)
	if (error) throw new Error(error.message)
	return data
}

export async function kanda6(){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('kanda',6)
	if (error) throw new Error(error.message)
	return data
}

export async function kanda5(){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('kanda',5)
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

export async function kanda4(){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('kanda',4)
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

export async function kanda3(){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('kanda',3)
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

export async function kanda2(){
	const { data, error } = await supabase
	.from('db-ramayana')
	.select()
	.eq('kanda',2)
	.order('id')
	if (error) throw new Error(error.message)
	return data
}

</script>

<div class="flexbox-r x1">
	<div class="in-col left-col">
		<ThinBar></ThinBar>
	</div>
	<div class="in-col mid-col link-heads">
		<h5 id='class-1' class="w600 upper" on:click={l2Ramayana} on:keydown={l2Ramayana}>Vālmīki Rāmāyaṇa</h5>
		<h5 id='class-1' class="w600 upper">Ṛgveda Saṃhitā</h5>
	</div>
	<div class="in-col right-col">
		{#if level2Ramayana}
			<div class="grey w600 in-row" use:reveal={{ transition: "scale", duration: 200, delay: 0 }} on:click={toggleK1} on:keydown={toggleK1}><h6>Kāṇda 1</h6></div>
			<div class="grey w600 in-row" use:reveal={{ transition: "scale", duration: 200, delay: 25 }} on:click={toggleK2} on:keydown={toggleK2}><h6>Kāṇda 2</h6></div>
			<div class="grey w600 in-row" use:reveal={{ transition: "scale", duration: 200, delay: 50 }} on:click={toggleK3} on:keydown={toggleK3}><h6>Kāṇda 3</h6></div>
			<div class="grey w600 in-row" use:reveal={{ transition: "scale", duration: 200, delay: 75 }} on:click={toggleK4} on:keydown={toggleK4}><h6>Kāṇda 4</h6></div>
			<div class="grey w600 in-row" use:reveal={{ transition: "scale", duration: 200, delay: 100 }} on:click={toggleK5} on:keydown={toggleK5}><h6>Kāṇda 5</h6></div>
			<div class="grey w600 in-row" use:reveal={{ transition: "scale", duration: 200, delay: 125 }} on:click={toggleK6} on:keydown={toggleK6}><h6>Kāṇda 6</h6></div>
			<div class="grey w600 in-row" use:reveal={{ transition: "scale", duration: 200, delay: 150 }} on:click={toggleK7} on:keydown={toggleK7}><h6>Kāṇda 7</h6></div>
		{/if}
	</div>
	<div class="in-col final-col" data-lenis-prevent>
		{#if isK1}
			<div class="in-col sargas">
				{#await kanda1()}
				<small>...</small>
				{:then data}
				{#each data as item}
					<p class="upper">{item.index}</p>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}				
			</div>
		{/if}

		{#if isK2}
			<div class="in-col sargas">
				{#await kanda2()}
				<small>...</small>
				{:then data}
				{#each data as item}
					<p class="upper">{item.index}</p>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}				
			</div>
		{/if}

		{#if isK3}
			<div class="in-col sargas">
				{#await kanda3()}
				<small>...</small>
				{:then data}
				{#each data as item}
					<p class="upper">{item.index}</p>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}				
			</div>
		{/if}

		{#if isK4}
			<div class="in-col sargas">
				{#await kanda4()}
				<small>...</small>
				{:then data}
				{#each data as item}
					<p class="upper">{item.index}</p>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}				
			</div>
		{/if}

		{#if isK5}
			<div class="in-col sargas">
				{#await kanda5()}
				<small>...</small>
				{:then data}
				{#each data as item}
					<p class="upper">{item.index}</p>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}				
			</div>
		{/if}

		{#if isK6}
			<div class="in-col sargas">
				{#await kanda6()}
				<small>...</small>
				{:then data}
				{#each data as item}
					<p class="upper">{item.index}</p>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}				
			</div>
		{/if}

		{#if isK7}
			<div class="in-col sargas">
				{#await kanda7()}
				<small>...</small>
				{:then data}
				{#each data as item}
					<p class="upper">{item.index}</p>
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}				
			</div>
		{/if}
	</div>
</div>

<style>
.link-heads h5 { cursor: pointer; position: relative; color: #b7b7b7;}
.link-heads h5:hover { background: var(--beau); color: white;}
.link-heads h5::before {
	position: absolute;
	top: 0;
	left: 0;
	content: '';
	height: 100%;
	border-bottom: 4px solid var(--strong);
	z-index: 0;
}
.link-heads h5:hover::before {
	animation: yellowline 0.4s var(--cubeb) forwards;
}
.right-col h6:hover {
	background: #e7e7e7;
	color: var(--strong);
}
@keyframes yellowline {
	0% { width: 0%;}
	100% {width: 100%;}
}

@media screen and (min-width: 768px) {
	.x1 { height: 100vh; padding-top: 120px;}
	.mid-col { width: 20%;}
	.right-col { width: 20%;}
	.right-col h6 {
		margin-left: 16px;
		margin-top: 0;
		margin-bottom: 0;
		padding: 8px 0 8px 8px;
		border-bottom: 1px solid #b7b7b7;
		cursor: pointer;
		width: 100%;
	}
	.final-col { width: 10%; overflow-y: scroll;}
	.final-col .sargas { width: 100%; padding-left: 16px;}
	.sargas p { 
		margin: 0;
		color: #676767;
		font-weight: 600;
		padding: 4px;
		border-bottom: 1px solid #d7d7d7;
		transition: all 0.04s var(--cubea);
		transform-origin: center left;
		transform: scale(0.95);
		cursor: pointer;
	}
	.sargas p:hover {
		transform: scale(1);
		color: var(--strong);
	}
	.link-heads h5 { padding-left: 16px;}
	.link-heads h5 { padding: 8px; margin: 0; border-bottom: 1px solid #d7d7d7; padding-left: 16px;}
}
</style>