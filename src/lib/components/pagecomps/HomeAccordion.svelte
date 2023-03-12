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
<div class="accordionrow low">
	<div class="accordioncol col1 img1 col-of-accordion" id="col1" on:mouseenter={toggleCC} on:mouseleave={toggleCC}>
		<img src="/images/corpimages/creative-culture-1024-1.webp" alt="cc" style="filter: saturate({sat1}); transition: filter 0.4s ease;"/>
		<a href="/about/areas/culturecreatives">Culture Creatives</a>
	</div>
	<div class="accordioncol col2 img2 col-of-accordion" id="col2" on:mouseenter={togglePR} on:mouseleave={togglePR}>
  	<img src="/images/corpimages/research-policy-1024-1.webp" alt="pr" style="filter: saturate({sat2}); transition: filter 0.4s ease;"/>
		<a href="/about/areas/policyresearch">Policy Research</a>
	</div>
	<div class="accordioncol col3 img3 col-of-accordion" id="col3" on:mouseenter={toggleLD} on:mouseleave={toggleLD}>
  	<img src="/images/corpimages/develop-leader-1024-1.webp" alt="ld" style="filter: saturate({sat3}); transition: filter 0.4s ease;"/>
		<a href="/about/areas/leadershipdevelopment">Leadership Development</a>
	</div>
</div>

<style lang="sass">

.accordioncol a
	font-family: 'Inter Tight', sans-serif

.accordionrow
	display: flex
	transition: all 0.53s cubic-bezier(0.875, 0.145, 0.555, 0.905)
	align-items: center
	z-index: 2
	overflow-y: hidden
	background: white

.low
	background-color: white

.accordioncol
	display: flex
	flex-direction: column
	position: relative
	justify-content: flex-end
	transform-origin: center center
	align-items: center
	transition: all 0.53s cubic-bezier(0.875, 0.145, 0.555, 0.905)
	z-index: 0
	background: white
	

.img1, .img2, .img3
	background-position: center center
	background-size: cover
	background-repeat: no-repeat
	transition: all 0.53s cubic-bezier(0.875, 0.145, 0.555, 0.905)

@media screen and (min-width: 900px)

	.accordionrow
		flex-direction: row
		width: 100vw
		height: 100vh
		justify-content: space-between
		gap: 2px
		padding: 0 2px
		overflow: hidden

	.accordioncol
		width: calc(33.33% - 1.4px)
		height: 100vh
		img
			object-fit: cover
			width: 100%
			height: 100%
		a
			text-align: left
			position: absolute
			font-weight: bold
			font-size: 1.6rem
			color: transparent
			text-transform: uppercase
			letter-spacing: 1px
			bottom: 64px
			left: 0
			width: 80%
			margin-left: 15%
			background: rgba(0,0,0,0)
			transition: all 0.3s var(--cubea)
		&:hover
			a
				background: rgba(0,0,0,0.7)
				color: white
				padding: 8px
				&:hover
					padding: 8px 8px 8px 16px

	.accordionrow
		&:hover
			.accordioncol
				width: calc(25% - 2px)
				&:hover
					width: 50%

@media screen and (max-width: 899px) and (min-width: 768px)

	.accordionrow
		flex-direction: row
		width: 100vw
		height: 100vh
		justify-content: space-between
		gap: 2px
		padding: 0 2px

	.accordioncol
		width: calc(33.33% - 1.34px)
		height: 100vh
		img
			object-fit: cover
			width: 100%
			height: 100%
		a
			text-align: left
			position: absolute
			font-weight: bold
			font-size: 18px
			color: transparent
			bottom: 64px
			left: 0
			width: 80%
			margin-left: 15%
			background: rgba(0,0,0,0)
			transition: all 0.3s var(--cubea)
		&:hover
			a
				background: rgba(0,0,0,0.7)
				color: white
				padding: 8px
				&:hover
					padding: 8px 8px 8px 16px

	.accordionrow
		&:hover
			.accordioncol
				width: 15%
				&:hover
					width: 70%

@media screen and (max-width: 767px) and (min-width: 576px) 

	.accordionrow
		flex-direction: row
		width: 100vw
		height: 100vh
		justify-content: space-between
		gap: 2px
		padding: 0 2px

	.accordioncol
		width: calc(33.33% - 1.34px)
		height: 100%
		img
			object-fit: cover
			width: 100%
			height: 100%
		a
			text-align: left
			position: absolute
			font-weight: bold
			font-size: 16px
			color: transparent
			bottom: 64px
			left: 0
			width: 80%
			margin-left: 10%
			background: rgba(0,0,0,0)
			transition: all 0.3s var(--cubea)
		&:hover
			a
				background: rgba(0,0,0,0.7)
				color: white
				padding: 8px
				&:hover
					padding: 8px 8px 8px 16px

	.accordionrow
		&:hover
			.accordioncol
				width: 15%
				&:hover
					width: 70%

@media screen and (max-width: 575px) 

	.accordionrow
		flex-direction: column
		width: 100%
		height: 100vh
		padding-top: 56px
		&:hover
			.accordioncol
				height: 20%
				&:hover
					height: 60%

	.accordioncol
		flex-direction: column
		width: 100%
		height: 33%
		img
			object-fit: cover
			height: 100%
			width: 100%
		a
			text-align: left
			position: absolute
			font-weight: bold
			font-size: 16px
			color: white
			padding: 3px 8px
			bottom: 20px
			left: 0
			width: 80%
			margin-left: 10%
			background: rgba(0,0,0,0.4)
			transition: all 0.3s var(--cubea)
		&:hover
			a
				background: rgba(0,0,0,0.7)
				color: white
				padding: 8px
				&:hover
					padding: 8px 8px 8px 16px
			

</style>
