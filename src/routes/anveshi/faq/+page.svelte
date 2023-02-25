<script>
// @ts-nocheck
import { slide } from 'svelte/transition'
import { cubicIn } from 'svelte/easing'
let data = [
	{
		"name": "question one",
		"content": "answer one"
	}
]
let isAnswer = Array(data.length).fill(false);
let isToggle = Array(data.length).fill(false);

function toggleFunction(index) {
	isToggle[index] = !isToggle[index];
}

function showAnswer(index) {
	isAnswer[index] = true;
}
function hideAnswer(index) {
	isAnswer[index] = false;
}
import supabase from '$lib/db'
export async function Faq(){
	const { data } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','faq')
	.order('id')
	return data;
}
</script>


{#await Faq()}
<small>...</small>
{:then data}
<h2>Frequently Asked Questions</h2>
{#each data as item, i}
<div class="upper"  on:click={() => toggleFunction(i)} on:keydown={() => toggleFunction(i)}>
	<img src="/images/icons/accordion.png" alt="icon"/>
	<p class="m0"><b>{item.name}</b></p>
</div>
	{#if isToggle[i]}
	<p class="answer"
		transition:slide="{{delay: 100, duration: 300, easing: cubicIn}}"
	>{item.content}</p>
	{/if}
{/each}
{:catch error}
<pre>{error}</pre>
{/await}

<style>

.upper {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	width: 100%;
	margin-top: 0;
	margin-bottom: 8px;
	padding-top: 0;
  cursor: pointer;
}

.upper img {
	height: 24px;
	width: 24px;
	object-fit: contain;
	transition: all 0.15s var(--cube2);
}

.answer {
	margin-bottom: 2rem;
	margin-top: 0;
	margin-left: 2rem;
	
}

.m0 { transition: all 0.15s var(--cube2);}
.upper:hover .m0 { color: #676767;}
.upper:hover img { filter: saturate(0);}

</style>