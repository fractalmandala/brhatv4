<script lang="ts">
//@ts-nocheck
import supabase from '$lib/db'
import { fly } from 'svelte/transition';
import { quintOut } from 'svelte/easing';
let isMore = {}

function toggleMore(id){
	isMore = {
		...Object.fromEntries(Object.entries(isMore).map(([key, value]) => [key, false])),
		[id]: !isMore[id]
	}
}

export async function fetchDrashtas(){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type', 'school')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

</script>

<div class="r-r-r-r l0">
	<div class="c-c-c-c side">
		<h5 class="sidesmall"><a href="/drashta">Draṣṭā Home</a></h5>
		<h5 class="sidesmall"><a href="/drashta/drashtas">Draṣṭās</a></h5>
		<h5 class="sidesmall"><a href="/drashta/schools">Schools of Thought</a></h5>
		<h5 class="sidesmall"><a href="/drashta/firekeepers">Firekeepers</a></h5>
	</div>
	<div class="c-c-c-c main">
		{#await fetchDrashtas()}		
		<small>...</small>
		{:then data}
		{#each data as item}
		<div class="c-c-c-c formal3 element" class:selected={isMore[item.id]}>
			<h5 on:click={() => toggleMore(item.id)} on:keydown={() => toggleMore(item.id)}>{item.name}</h5>
			{#if isMore[item.id]}
			<pre
				in:fly="{{delay: 100, duration: 100, y: 0, x: 500, opacity: 0, easing: quintOut}}"
				out:fly="{{delay: 0, duration: 100, x: -500, y: 0, opacity: 0, easing: quintOut}}"
			>{item.content}</pre>
			{/if}
		</div>
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>
</div>


<style>


.side h5, .main h5 { cursor: pointer;}
.main h5 {
	text-transform: capitalize;
}
.selected h5{
	color: #fe4a49;
}
.element {
	width: 100%;
	transition: width 0.42s ease;
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid #d7d7d7;
}

.main pre { color: #474747;}
.l0 { z-index: 0;}


@media screen and (min-width: 900px) {
	.l0 { padding-top: 120px; min-height: 100vh;}
	.side h5 {
		font-weight: 600;
		font-size: 18px;
		text-transform: uppercase;
		margin: 0;
		padding: 16px 0 16px 8px;
		border-bottom: 1px solid #d7d7d7;
		background: white;
		transition: all 0.07s var(--cube1);
		color: #878787;
	}
	.side a { color: #c1c1c1;}
	.side a:hover { color: #fe4a49;}
	.side h5:hover a { color: #272727;}

	.side h5:hover {
		background: #d7d7d7;
		color: #272727;
	}
	.side { width: 20%; position: sticky; top: 120px; height: 100%;}
	.main { width: 80%; padding-left: 4vw; padding-right: 12vw; padding-bottom: 4em;}
	.main h5 {
		font-size: 20px;
		letter-spacing: -0.5px;
	}
	.element pre { font-size: 18px; margin-top: 8px;}
	.element {
		border-bottom: 1px solid #d7d7d7;
	}
	.element h5 {
		transition: all 0.25s var(--cube1);
	}
	.element:hover {
		background: #e7e7e7;
	}
	.element:hover h5 {
		padding-left: 16px;
	}
	.selected:hover {
		background: white;
	}
	.selected:hover h5 {
		padding-left: 0;
	}
	.selected h5 {
		margin-bottom: 0;
	}
	.selected pre { color: #878787;}
}

@media screen and (max-width: 899px) and (min-width: 576px) {
	.l0 { padding-top: 120px; min-height: 100vh;}
	.side h5 {
		font-weight: 600;
		font-size: 16px;
		text-transform: uppercase;
		margin: 0;
		padding: 16px 0 16px 8px;
		border-bottom: 1px solid #d7d7d7;
		background: white;
		transition: all 0.07s var(--cube1);
		color: #878787;
	}
	.side a { color: #c1c1c1;}
	.side a:hover { color: #fe4a49;}
	.side h5:hover a { color: #272727;}

	.side h5:hover {
		background: #d7d7d7;
		color: #272727;
	}
	.side { width: 25%; position: sticky; top: 120px; height: 100%;}
	.main { width: 75%; padding-left: 4vw; padding-right: 8vw; padding-bottom: 4em;}
	.main h5 {
		font-size: 20px;
		letter-spacing: -0.5px;
	}
	.element pre { font-size: 18px; margin-top: 8px;}
	.element h5 {
		transition: all 0.25s var(--cube1);
	}
	.element:hover {
		background: #e7e7e7;
	}
	.element:hover h5 {
		padding-left: 16px;
	}
	.selected:hover {
		background: white;
	}
	.selected:hover h5 {
		padding-left: 0;
	}
	.selected h5 {
		margin-bottom: 0;
	}
	.selected pre { color: #878787;}
}

@media screen and (max-width: 575px) {
	.l0 { flex-wrap: wrap; min-height: 100vh;}
	.side { display: none;}
	.main { width: 100%; height: 100%; padding-top: 120px; padding-bottom: 80px;}
}
</style>