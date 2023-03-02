<script>
// @ts-nocheck
import { Button } from '@supabase/ui'
export let data;
let x = 1
</script>
<svelte:window bind:scrollY={x}/>

<h3 class="grey2">{data.title}</h3>
		
<div class="box-c document-sheet">
	<svelte:component this={data.content} />
	<div class="box-r buttonrow">
		<button class="greenbutton"><a href={data.prev}>Prev</a></button>
		<button class="greenbutton"><a href={data.next}>Next</a></button>
	</div>
</div>

<style>

h3 { margin-top: 0; border-bottom: 1px solid var(--green); padding-bottom: 16px;}

@media screen and (min-width: 900px) {
	.buttonrow { border-top: 1px solid #e7e7e7; margin-top: 16px; gap: 24px; padding-top: 24px;}
}

@media screen and (max-width: 899px) and (min-width: 576px) {
	.buttonrow { border-top: 1px solid #e7e7e7; margin-top: 48px; gap: 24px;}
}

@media screen and (max-width: 575px) {
	.buttonrow { border-top: 1px solid #e7e7e7; margin-top: 48px; gap: 24px;}
}
</style>