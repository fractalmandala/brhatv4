<script>
// @ts-nocheck

import supabase from '$lib/db'

let showMeaning = false;
let data;
function showWord(index) {
	showMeaning[index] = true;
}

function hideWord(index) {
	showMeaning[index] = false;
}

async function getWords() {
	const { data } = await supabase
	.from('db-dictionary')
	.select()
	return data
}
</script>


{#each data as item, i}
<p
	on:click={showWord(i)}
	on:keydown={showWord(i)}
>{item.word}</p>
{#if showMeaning[i]}
<p>{item.meanings}</p>
{/if}
{/each}


<style>
p { margin-top: 0; margin-bottom: 0px; font-size: 16px;}

</style>