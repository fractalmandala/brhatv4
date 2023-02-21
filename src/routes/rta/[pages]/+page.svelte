<script>
// @ts-nocheck
import { Button } from '@supabase/ui'
export let data;
let x = 1
</script>
<svelte:window bind:scrollY={x}/>


		<div class="flexbox-c image-box">
		<img src={data.image} alt={data.content}/>
		</div>
		<h3 class="w500">{data.title}</h3>
		<div class="flexbox-c only-text">
		<svelte:component this={data.content} />
		<div class="flexbox-r buttonrow">
			<button class="greenbutton"><a href={data.prev}>Prev</a></button>
			<button class="greenbutton"><a href={data.next}>Next</a></button>
		</div>
		</div>

<style>

@media screen and (min-width: 900px) {
	.only-text {padding: 32px 24% 32px 80px; border-top: 1px solid #e7e7e7;}
	.image-box { width: 100%; height: 100vh; overflow: hidden; padding-top: 120px; padding-left: 40px;}
	.image-box img { object-fit: cover; width: 96%; height: 88%;}
	h3 { margin-top: 0; margin-bottom: 40px; margin-left: 80px;}
	.buttonrow { border-top: 1px solid #e7e7e7; margin-top: 48px; gap: 24px;}
}

@media screen and (max-width: 899px) and (min-width: 576px) {
	.only-text {padding: 32px 64px 32px 64px; border-top: 1px solid #e7e7e7;}
	.image-box { width: 100%; height: 100vh; overflow: hidden; padding-top: 120px; padding-left: 40px;}
	.image-box img { object-fit: cover; width: 96%; height: 88%;}
	h3 { margin-top: 0; margin-bottom: 40px; margin-left: 80px;}
	.buttonrow { border-top: 1px solid #e7e7e7; margin-top: 48px; gap: 24px;}
}

@media screen and (max-width: 575px) {
	.only-text { padding: 24px; border-top: 1px solid #e7e7e7;}
	.image-box { margin-top: 120px; height: 50vh; }
	.image-box img { object-fit: cover; width: 100%; height: 100%;}
	h3 { margin-left: 24px; margin-top: 24px; margin-bottom: 24px;}
	.buttonrow { border-top: 1px solid #e7e7e7; margin-top: 48px; gap: 24px;}
}
</style>