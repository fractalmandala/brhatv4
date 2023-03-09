<script>
/**
	 * @type {{ title: any; content: any; }}
	 */
 export let data
</script>

<div class="containerblog">
  <div class="titleandimage">
    <div class="titlearea" style="background-image: url('{data.image}')">
			<h2>{data.title}</h2>
		</div>
  </div>
  <div class="bodyofblog">
		<svelte:component this={data.content} />
	</div>
</div>



<style lang="sass">

img
	object-fit: cover
	width: 100%
	height: calc(100vh - 64px)

.containerblog 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto auto 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "titleandimage" "bodyofblog" 
.titleandimage 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "titlearea" 
	grid-area: titleandimage
	height: calc(100vh - 64px)
	padding: 32px 32px 32px 0
.titlearea 
	grid-area: titlearea
	display: grid
	align-items: end
	background-position: center center
	background-size: cover
	background-repeat: no-repeat
	h2
		background-color: rgba(0,0,0,0.8)
		color: white
		padding: 8px
.bodyofblog 
	grid-area: bodyofblog 

@media screen and (min-width: 992px)
	.bodyofblog
		padding: 64px 256px 64px 64px

@media screen and (max-width: 991px) and (min-width: 768px)
	.bodyofblog
		padding: 64px 0 0 0
	.titleandimage
		padding: 0
		height: 50vh
		background-position: center center
		background-size: cover
		background-repeat: no-repeat

@media screen and (max-width: 767px)
	.bodyofblog
		padding: 32px 0 0 0 
	.titleandimage 
		display: grid 
		grid-template-columns: 1fr 
		grid-template-rows: 1fr 
		gap: 0px 0px 
		grid-auto-flow: row 
		grid-template-areas: "titlearea" 
		grid-area: titleandimage
		background-position: center center
		background-size: cover
		background-repeat: no-repeat
		height: 50vh
		padding: 0


</style>