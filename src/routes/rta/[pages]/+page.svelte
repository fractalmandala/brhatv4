<script>
// @ts-nocheck
export let data;
let x = 1
</script>
<svelte:window bind:scrollY={x}/>
<h3>{data.title}</h3>

<div class="r-r-r-r documenter">
	<div class="c-c-c-c contents-table">

	</div>
	<div class="c-c-c-c main-table">
		<div class="c-c-c-c image-box">
		<img src={data.image} alt={data.content} style="transform: translateX({-x/5}px)" />
		</div>
		<div class="c-c-c-c only-text">
		<svelte:component this={data.content} />
		</div>
	</div>
</div>

<style>

@media screen and (min-width: 900px) {
	.contents-table { width: 6vw; border-right: 1px solid #d7d7d7; padding-left: 2vw;}
	.contents-table p { font-size: 14px; text-transform: uppercase; font-weight: 500; color: #878787;}
	.main-table { width: calc(100% - 6vw); padding: 0; position: relative;}
	.only-text {padding: 0 64px 0 64px;}
	.image-box { width: calc(100% + 6vw); height: 520px; overflow: hidden; margin-bottom: 64px; margin-left: -6vw;}
	.image-box img { object-fit: cover; height: 520px; width: 120%;}
}
</style>