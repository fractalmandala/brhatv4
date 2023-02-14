<script>
import { fly } from 'svelte/transition'
import { expoInOut } from 'svelte/easing'
let isCC = false
let isPR = false
let isLD = false
let opacity = 1

function toggleCC(){
	isCC = !isCC;
	opacity = opacity === 1 ? 0 : 1;
}

function togglePR(){
	isPR = !isPR
	opacity = opacity === 1 ? 0 : 1;
}

function toggleLD(){
	isLD = !isLD
	opacity = opacity === 1 ? 0 : 1;
}

</script>

<div class="genrow">
	<div class="gencol col1" id="col1" on:mouseenter={toggleCC}>
		<img src="/images/corpimages/creative-culture-1024-1.webp" alt="cc" style="opacity: {opacity}"/>
	</div>
	<div class="gencol col2" id="col2" on:mouseenter={togglePR}>
  	<img src="/images/corpimages/research-policy-1024-1.webp" alt="pr" style="opacity: {opacity}"/>
	</div>
	<div class="gencol col3" id="col3" on:mouseenter={toggleLD}>
  	<img src="/images/corpimages/develop-leader-1024-1.webp" alt="ld" style="opacity: {opacity}"/>
	</div>
	{#if isCC}
	<div class="image-box img1"
		transition:fly="{{duration: 800, delay: 0, x: 1500, y: 0, easing: expoInOut}}"
		on:mouseleave={toggleCC} 	
	>
		<h1>Culture Creatives</h1>
	</div>
	{/if}
	{#if isPR}
	<div class="image-box img2"
		transition:fly="{{duration: 800, delay: 0, x: 1500, y: 0, easing: expoInOut}}"
		on:mouseleave={togglePR} 	
	>
		<h1>Policy Research</h1>
	</div>
	{/if}
	{#if isLD}
	<div class="image-box img3"
		transition:fly="{{duration: 800, delay: 0, x: 1500, y: 0, easing: expoInOut}}"
		on:mouseleave={toggleLD} 	
	>
		<h1>Leadership Development</h1>
	</div>
	{/if}
</div>

<style lang="sass">

.genrow
	display: flex
	transition: all 0.53s cubic-bezier(0.875, 0.145, 0.555, 0.905)
	align-items: center

.gencol
	display: flex
	flex-direction: column
	position: relative
	justify-content: center
	transform-origin: center center
	align-items: flex-start
	transition: all 0.53s cubic-bezier(0.875, 0.145, 0.555, 0.905)

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
		justify-content: center
		gap: 16px

	.gencol
		width: calc(33.33% - 8px)
		height: 100%

@media screen and (max-width: 899px) and (min-width: 768px)

	.genrow
		flex-direction: row
		width: 100%
		height: 100%

	.gencol
		width: 33.33%
		height: 100%

	.genrow
		&:hover
			.gencol 
				width: 25%

	.genrow
		&:hover
			.gencol
				&:hover 
					width: 50%

@media screen and (max-width: 767px) and (min-width: 576px) 

	.genrow
		flex-direction: row
		flex-wrap: wrap
		width: 100%
		height: 100%
		padding-top: 64px

	.gencol
		flex-direction: column
		width: 100%
		min-height: 33%
		border-radius: 4px

@media screen and (max-width: 575px) 

	.genrow
		flex-direction: column
		width: 100%
		height: 100%
		padding-top: 64px

	.gencol
		flex-direction: column
		width: 100%
		height: 33%
		border-radius: 4px

</style>
