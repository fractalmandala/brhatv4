<script lang="ts">
import supabase from '$lib/db'
import { onMount } from 'svelte';

let activeDivId = 'element-1';
  
  function toggleWid(index: {currentTarget: {id: string;};}) {
    if (activeDivId === index.currentTarget.id) {
      return;
    }
    activeDivId = index.currentTarget.id;
  }

  onMount(() => {
    document.getElementById(activeDivId).focus();
  });

export async function allFaq() {
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','faq')
	.order('id')
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="flexbox-c l0 pad-y-b">
	{#await allFaq()}
	<small>....</small>
	{:then data}
	{#each data as item, index}
		<div class="in-col element {activeDivId === 'element-{index}' ? 'active' : ''}" id="element-{index}" on:click={toggleWid} on:keydown={toggleWid}>
			<h6 class="w500">{item.name}</h6>
			<p id="element-{index}">{item.content}</p>
		</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>


<style>

.l0 { width: 100%;}
.in-col { width: 100%;}
.element {
	width: 100%;
	transition: width 0.42s ease;
	height: 100%;
	display: flex;
	flex-direction: column;
}

.element > p { display: none;}
.element.active > p {
	display: flex;
	padding: 0 4vw;
}

.element.active {
	width: 80%;
  border-left: 1px solid #474747;
  border-right: 1px solid #d7d7d7;
	height: 100%;
}



</style>