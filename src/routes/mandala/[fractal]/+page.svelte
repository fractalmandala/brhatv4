<script>
/**
	 * @type {{ title: any; content: any; }}
	 */
 export let data
</script>


<div class="boxr wrap">
	<div class="ww2 noimg">
	<h2>{data.title}</h2>
	</div>
	<div class="ww2 img">
		<img src={data.image} alt={data.title} />
	</div>
</div>
<div class="myblogtext">
<svelte:component this={data.content} />
</div>

<style lang='sass'>
.ww2
	height: 80vh
	justify-content: center
	img
		object-fit: cover
		height: 100%

@media screen and (max-width: 575px)
	.img
		order: 1
		height: 40vh
		margin-top: 40px
	.noimg
		order: 2
		justify-content: flex-start
		padding: 0 24px
		width: 100%
		height: max-content
		h2
			margin-top: 24px
			font-size: 3rem !important


</style>


