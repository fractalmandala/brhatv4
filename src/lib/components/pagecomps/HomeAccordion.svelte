<script>
let sat1 = 1
let sat2 = 1
let sat3 = 1
let x = 1

function toggleCC(){
	sat2 = sat2 === 1 ? 0 : 1;
	sat3 = sat3 === 1 ? 0 : 1;
}

function togglePR(){
	sat1 = sat1 === 1 ? 0 : 1;
	sat3 = sat3 === 1 ? 0 : 1;
}

function toggleLD(){
	sat1 = sat1 === 1 ? 0 : 1;
	sat2 = sat2 === 1 ? 0 : 1;
}

</script>

<svelte:window bind:scrollY={x} />
<div class="genrow low">
	<div class="gencol col1 img1" id="col1" on:mouseenter={toggleCC} on:mouseleave={toggleCC}>
		<img src="/images/corpimages/creative-culture-1024-1.webp" alt="cc" style="filter: saturate({sat1}); transition: filter 0.4s ease;"/>
	</div>
	<div class="gencol col2 img2" id="col2" on:mouseenter={togglePR} on:mouseleave={togglePR}>
  	<img src="/images/corpimages/research-policy-1024-1.webp" alt="pr" style="filter: saturate({sat2}); transition: filter 0.4s ease;"/>
	</div>
	<div class="gencol col3 img3" id="col3" on:mouseenter={toggleLD} on:mouseleave={toggleLD}>
  	<img src="/images/corpimages/develop-leader-1024-1.webp" alt="ld" style="filter: saturate({sat3}); transition: filter 0.4s ease;"/>
	</div>
</div>

<style lang="sass">

.genrow
	display: flex
	transition: all 0.53s cubic-bezier(0.875, 0.145, 0.555, 0.905)
	align-items: center
	z-index: 2
	overflow-y: hidden
	background: white

.low
	background-color: white

.gencol
	display: flex
	flex-direction: column
	position: relative
	justify-content: center
	transform-origin: center center
	align-items: flex-start
	transition: all 0.53s cubic-bezier(0.875, 0.145, 0.555, 0.905)
	z-index: 0
	background: white

.gencol img
	object-fit: cover
	width: 100%
	height: 100%

#col1, #col2, #col3, .img1, .img2, .img3
	background-position: center center
	background-size: cover
	background-repeat: no-repeat
	transition: all 0.53s cubic-bezier(0.875, 0.145, 0.555, 0.905)

.img1
	background-image: url('/images/corpimages/areas-cc.webp')

.img2
	background-image: url('/images/corpimages/areas-pr.webp')

.img3
	background-image: url('/images/corpimages/areas-ld.webp')

h3
	color: white
	opacity: 0
	transition: opacity 2s ease

a
	color: white
	&:hover
		color: #fe4a49

.image-box
	position: absolute
	top: 10vh
	left: 10vw
	object-fit: cover
	width: 80vw
	height: 80vh
	z-index: 10

@media screen and (min-width: 900px)

	.genrow
		flex-direction: row
		width: 100vw
		height: 100vh
		justify-content: space-between
		gap: 8px
		padding: 0 8px
		overflow: hidden

	.gencol
		width: calc(33.33% - 8px)
		height: 100vh

	.genrow
		&:hover
			.gencol
				width: calc(25% - 16px)
				&:hover
					width: 50%

@media screen and (max-width: 899px) and (min-width: 768px)

	.genrow
		flex-direction: row
		width: 100vw
		height: 100vh
		justify-content: space-between
		gap: 16px
		padding: 0 16px

	.gencol
		width: calc(33.33% - 16px)
		height: 100%

	.genrow
		&:hover
			.gencol
				width: 15%
				&:hover
					width: 70%

@media screen and (max-width: 767px) and (min-width: 576px) 

	.genrow
		flex-direction: row
		width: 100vw
		height: 100vh
		justify-content: space-between
		gap: 16px
		padding: 0 16px

	.gencol
		width: calc(33.33% - 16px)
		height: 100%

	.genrow
		&:hover
			.gencol
				width: 15%
				&:hover
					width: 70%

@media screen and (max-width: 575px) 

	.genrow
		flex-direction: column
		width: 100%
		height: 100vh
		padding-top: 64px
		&:hover
			.gencol
				height: 20%
				&:hover
					height: 60%

	.gencol
		flex-direction: column
		width: 100%
		height: 33%

</style>
