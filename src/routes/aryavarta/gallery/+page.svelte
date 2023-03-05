<script lang="ts">
import { onMount } from 'svelte';
import supabase from '$lib/db'
import { writable } from 'svelte/store';
let shPrev = true
let offset = 0
const currentOffset = writable(offset)
let data: string|any[] = []

const fetchData = async() => {
	const { data: newData, error } = await supabase
  .storage
  	.from('midjourneyimages')
  	.list('batch1', {
    	limit: 20,
    	offset: $currentOffset,
			sortBy: { column: 'created_at', order: 'desc'}
  	})
		if (error) throw new Error(error.message)
		else data = newData
}

const showPrev = () => {
	if ( $currentOffset === 0 ) {
		shPrev = false
	} else {
	shPrev = true
	}
}

onMount(() => {
	fetchData()
	showPrev()
})

const nextFifteen = () => {
	currentOffset.update(n => n + 15)
	fetchData()
}

const prevFifteen = () => {
	currentOffset.update(n => n - 15)
	fetchData()
}

</script>

<div class="traybox allwrap">
	{#if data.length > 0}
	{#each data as item}
	<div class="card">
		<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/midjourneyimages/batch1/{item.name}" alt={item.name}/>
	</div>
	{/each}
	{:else}
	<small>no data to display</small>
	{/if}
	<div class="boxr buttonrow card">
		<button class="transparentbutton" on:click={prevFifteen}>Prev 15</button>
		<button class="transparentbutton" on:click={nextFifteen}>Next 15</button>
		<p><span class="orange"> {$currentOffset} </span> to <span class="orange"> {$currentOffset + 15}</span></p>
	</div>

</div>

<style lang="sass">

.traybox
	position: relative
	.modaler
		position: absolute
		top: 0
		left: 0
	.buttonrow
		align-items: center
		gap: 16px

</style>