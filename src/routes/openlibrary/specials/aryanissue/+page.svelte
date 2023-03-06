<script>
import ThinBar from '$lib/components/pagecomps/ThinBar.svelte'
import { fly } from 'svelte/transition'
import { quadOut } from 'svelte/easing'
import supabase from '$lib/db'
let selectedCategory = 1
let showDrawer = false

function toggleDrawer(){
	showDrawer = !showDrawer
}

export async function aryans(){
	const { data,error} = await supabase
	.from('brhat-aryanissue')
	.select()
	.order('sequence')
  if (error) throw new Error(error.message)
	return data
}

export async function Archaeology(){
	const { data,error} = await supabase
	.from('brhat-aryanissue')
	.select()
	.eq('tag','Archaeology')
	.order('sequence')
  if (error) throw new Error(error.message)
	return data
}

export async function Genetics(){
	const { data,error} = await supabase
	.from('brhat-aryanissue')
	.select()
	.eq('tag','Genetics')
	.order('sequence')
  if (error) throw new Error(error.message)
	return data
}

export async function Philology(){
	const { data,error} = await supabase
	.from('brhat-aryanissue')
	.select()
	.eq('tag','Philology')
	.order('sequence')
  if (error) throw new Error(error.message)
	return data
}

export async function Linguistics(){
	const { data,error} = await supabase
	.from('brhat-aryanissue')
	.select()
	.eq('tag','Linguistics')
	.order('sequence')
  if (error) throw new Error(error.message)
	return data
}

export async function Core(){
	const { data,error} = await supabase
	.from('brhat-aryanissue')
	.select()
	.eq('tag','Core Material')
	.order('sequence')
  if (error) throw new Error(error.message)
	return data
}

export async function History(){
	const { data,error} = await supabase
	.from('brhat-aryanissue')
	.select()
	.eq('tag','History')
	.order('sequence')
  if (error) throw new Error(error.message)
	return data
}

export async function Indology(){
	const { data,error} = await supabase
	.from('brhat-aryanissue')
	.select()
	.eq('tag','Indology')
	.order('sequence')
  if (error) throw new Error(error.message)
	return data
}

export async function Geology(){
	const { data,error} = await supabase
	.from('brhat-aryanissue')
	.select()
	.eq('tag','Linguistics')
	.order('sequence')
  if (error) throw new Error(error.message)
	return data
}
</script>

<ThinBar></ThinBar>
<div class="box-c m-mid l0">
	<div class="box-r bread">
		<cite class="upper wbold grey"><a href="/openlibrary">Open Library</a></cite>
	</div>
	<h3 class="lining">The Āryan Issue</h3>
	<h5 class="w400 wide75">
		A dynamic, continuously growing collection of articles, essays, papers and findings relevant to the AI/M/T issue from all disciplines.
	</h5>
</div>
<div class="box-r allwrap filters m-mid">
	<p class="w600 grey upper yes pad-left-16 {selectedCategory === 1 ? 'active' : ''}" on:click={() => selectedCategory = 1} on:keydown={() => selectedCategory = 1}>All</p>
	<p class="w600 tree upper yes pad-left-16 {selectedCategory === 2 ? 'active' : ''}" on:click={() => selectedCategory = 2} on:keydown={() => selectedCategory = 2}>Archaeology</p>
	<p class="w600 tree upper yes {selectedCategory === 3 ? 'active' : ''}" on:click={() => selectedCategory = 3} on:keydown={() => selectedCategory = 3}>Linguistics</p>
	<p class="w600 tree upper yes {selectedCategory === 4 ? 'active' : ''}" on:click={() => selectedCategory = 4} on:keydown={() => selectedCategory = 4}>Philology</p>
	<p class="w600 tree upper yes {selectedCategory === 5 ? 'active' : ''}" on:click={() => selectedCategory = 5} on:keydown={() => selectedCategory = 5}>Genetics</p>
	<p class="w600 tree upper yes {selectedCategory === 6 ? 'active' : ''}" on:click={() => selectedCategory = 6} on:keydown={() => selectedCategory = 6}>Core Material</p>
	<p class="w600 tree upper yes {selectedCategory === 7 ? 'active' : ''}" on:click={() => selectedCategory = 7} on:keydown={() => selectedCategory = 7}>History</p>
	<p class="w600 tree upper yes {selectedCategory === 8 ? 'active' : ''}" on:click={() => selectedCategory = 8} on:keydown={() => selectedCategory = 8}>Indology</p>
	<p class="w600 tree upper {selectedCategory === 9 ? 'active' : ''}" on:click={() => selectedCategory = 9} on:keydown={() => selectedCategory = 9}>Geology</p>
</div>
<div class="box-r allwrap books pad80-b gap3 m-mid">
	{#if selectedCategory === 1}
	{#await aryans()}
	<small>...</small>
	{:then data}
	{#each data as item}
		<div class="box-c wd3 book">
			<p class="wbold m-bot-zero">{item.paper}</p>
			<small class="grey w500 m-bot-8">{item.author}</small>	
			<cite class="grey2 wbold upper"><a href={item.sourcelink} target="_blank" rel="noreferrer">Visit Site</a></cite>
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	{/if}
	{#if selectedCategory === 2}
	{#await Archaeology()}
	<small>...</small>
	{:then data}
	{#each data as item}
		<div class="box-c wd3 book">
			<p class="wbold m-bot-zero">{item.paper}</p>
			<small class="grey w500 m-bot-8">{item.author}</small>	
			<cite class="grey2 wbold upper"><a href={item.sourcelink} target="_blank" rel="noreferrer">Visit Site</a></cite>
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	{/if}
	{#if selectedCategory === 3}
	{#await Linguistics()}
	<small>...</small>
	{:then data}
	{#each data as item}
		<div class="box-c wd3 book">
			<p class="wbold m-bot-zero">{item.paper}</p>
			<small class="grey w500 m-bot-8">{item.author}</small>	
			<cite class="grey2 wbold upper"><a href={item.sourcelink} target="_blank" rel="noreferrer">Visit Site</a></cite>
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	{/if}
	{#if selectedCategory === 4}
	{#await Philology()}
	<small>...</small>
	{:then data}
	{#each data as item}
		<div class="box-c wd3 book">
			<p class="wbold m-bot-zero">{item.paper}</p>
			<small class="grey w500 m-bot-8">{item.author}</small>	
			<cite class="grey2 wbold upper"><a href={item.sourcelink} target="_blank" rel="noreferrer">Visit Site</a></cite>
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	{/if}
	{#if selectedCategory === 5}
	{#await Genetics()}
	<small>...</small>
	{:then data}
	{#each data as item}
		<div class="box-c wd3 book">
			<p class="wbold m-bot-zero">{item.paper}</p>
			<small class="grey w500 m-bot-8">{item.author}</small>	
			<cite class="grey2 wbold upper"><a href={item.sourcelink} target="_blank" rel="noreferrer">Visit Site</a></cite>
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	{/if}
	{#if selectedCategory === 6}
	{#await Core()}
	<small>...</small>
	{:then data}
	{#each data as item}
		<div class="box-c wd3 book">
			<p class="wbold m-bot-zero">{item.paper}</p>
			<small class="grey w500 m-bot-8">{item.author}</small>	
			<cite class="grey2 wbold upper"><a href={item.sourcelink} target="_blank" rel="noreferrer">Visit Site</a></cite>
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	{/if}
	{#if selectedCategory === 7}
	{#await History()}
	<small>...</small>
	{:then data}
	{#each data as item}
		<div class="box-c wd3 book">
			<p class="wbold m-bot-zero">{item.paper}</p>
			<small class="grey w500 m-bot-8">{item.author}</small>	
			<cite class="grey2 wbold upper"><a href={item.sourcelink} target="_blank" rel="noreferrer">Visit Site</a></cite>
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	{/if}
	{#if selectedCategory === 8}
	{#await Indology()}
	<small>...</small>
	{:then data}
	{#each data as item}
		<div class="box-c wd3 book">
			<p class="wbold m-bot-zero">{item.paper}</p>
			<small class="grey w500 m-bot-8">{item.author}</small>	
			<cite class="grey2 wbold upper"><a href={item.sourcelink} target="_blank" rel="noreferrer">Visit Site</a></cite>
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	{/if}
	{#if selectedCategory === 9}
	{#await Geology()}
	<small>...</small>
	{:then data}
	{#each data as item}
		<div class="box-c wd3 book">
			<p class="wbold m-bot-zero">{item.paper}</p>
			<small class="grey w500 m-bot-8">{item.author}</small>	
			<cite class="grey2 wbold upper"><a href={item.sourcelink} target="_blank" rel="noreferrer">Visit Site</a></cite>
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	{/if}
</div>
<div class="c-second box-c">
	<div class="box-c menutwo" on:click={toggleDrawer} on:keydown={toggleDrawer}>
		<svg width="100%" height="100%" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.767578 0.37207H8.76758V8.37207H0.767578V0.37207Z" fill="#FE4A49"/>
				<path d="M0.767578 12.3721H8.76758V20.3721H0.767578V12.3721Z" fill="#FE4A49"/>
				<path d="M8.76758 24.3721H0.767578V32.3721H8.76758V24.3721Z" fill="#FE4A49"/>
				<path d="M12.7676 0.37207H20.7676V8.37207H12.7676V0.37207Z" fill="#FE4A49"/>
				<path d="M20.7676 12.3721H12.7676V20.3721H20.7676V12.3721Z" fill="#FE4A49"/>
				<path d="M12.7676 24.3721H20.7676V32.3721H12.7676V24.3721Z" fill="#FE4A49"/>
				<path d="M32.7676 0.37207H24.7676V8.37207H32.7676V0.37207Z" fill="#FE4A49"/>
				<path d="M24.7676 12.3721H32.7676V20.3721H24.7676V12.3721Z" fill="#FE4A49"/>
				<path d="M32.7676 24.3721H24.7676V32.3721H32.7676V24.3721Z" fill="#FE4A49"/>
		</svg>
	</div>
	{#if showDrawer}
		<div class="sidebar-draw"
			in:fly={{ delay: 0, duration: 500, x: 0, y: -800, opacity: 1, easing: quadOut}}
			out:fly={{ delay: 0, duration: 400, x: 0, y: -800, opacity: 1, easing: quadOut}}
		>
			<div class="box-r closestrip" on:click={toggleDrawer} on:keydown={toggleDrawer}>
				<img src="/images/icons/hamburger-close.png" alt="closer" />
			</div>
			<div class="box-c linksofpage">
				<h5 class="w600 upper {selectedCategory === 1 ? 'active' : ''}" on:click={() => selectedCategory = 1} on:keydown={() => selectedCategory = 1} on:click={toggleDrawer} on:keydown={toggleDrawer}>All</h5>
				<h5 class="w600 upper {selectedCategory === 2 ? 'active' : ''}" on:click={() => selectedCategory = 2} on:keydown={() => selectedCategory = 2} on:click={toggleDrawer} on:keydown={toggleDrawer}>Archaeology</h5>
				<h5 class="w600 upper {selectedCategory === 3 ? 'active' : ''}" on:click={() => selectedCategory = 3} on:keydown={() => selectedCategory = 3} on:click={toggleDrawer} on:keydown={toggleDrawer}>Linguistics</h5>
				<h5 class="w600 upper {selectedCategory === 4 ? 'active' : ''}" on:click={() => selectedCategory = 4} on:keydown={() => selectedCategory = 4} on:click={toggleDrawer} on:keydown={toggleDrawer}>Philology</h5>
				<h5 class="w600 upper {selectedCategory === 5 ? 'active' : ''}" on:click={() => selectedCategory = 5} on:keydown={() => selectedCategory = 5} on:click={toggleDrawer} on:keydown={toggleDrawer}>Genetics</h5>
				<h5 class="w600 upper {selectedCategory === 6 ? 'active' : ''}" on:click={() => selectedCategory = 6} on:keydown={() => selectedCategory = 6} on:click={toggleDrawer} on:keydown={toggleDrawer}>Core Material</h5>
				<h5 class="w600 upper {selectedCategory === 7 ? 'active' : ''}" on:click={() => selectedCategory = 7} on:keydown={() => selectedCategory = 7} on:click={toggleDrawer} on:keydown={toggleDrawer}>History</h5>
				<h5 class="w600 upper {selectedCategory === 8 ? 'active' : ''}" on:click={() => selectedCategory = 8} on:keydown={() => selectedCategory = 8} on:click={toggleDrawer} on:keydown={toggleDrawer}>Indology</h5>
				<h5 class="w600 upper {selectedCategory === 9 ? 'active' : ''}" on:click={() => selectedCategory = 9} on:keydown={() => selectedCategory = 9} on:click={toggleDrawer} on:keydown={toggleDrawer}>Geology</h5>
			</div>
		</div>
	{/if}
</div>

<style>
.l0 { margin-top: 120px;}
.book p { line-height: 1.3;}
.books { padding-top: 32px; }
.filters {padding-left: 80px;border-top: 1px solid #f1f1f1; border-bottom: 1px solid #f1f1f1; padding-top: 12px; justify-content: flex-start; gap: 16px; }
.filters p { cursor: pointer; padding: 4px 8px; text-align: right;}
.filters p.active { background: var(--tree); color: white; padding: 4px 8px;}
.filters p:hover { background: #d7d7d7;}
.filters p.active:hover { background: var(--tree); color: white;}
.lining { border-left: 4px solid var(--tree);}
.bread { padding-left: 16px;}
.linksofpage h5 { color: white; margin: 0;}
@media screen and (min-width: 768px) {
	.l0 h5 { padding-left: 16px;}
	.books { padding-left: 80px;}
}

@media screen and (max-width: 767px) {
	.filters { display: none;}
	.l0 h5 { margin-bottom: 0;}
	.books { padding-top: 16px;}
	.linksofpage h5 { padding: 12px; text-align: right; cursor: pointer;}
	.linksofpage { padding-top: 64px;}
}

</style>