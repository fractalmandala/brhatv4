<script lang="ts">
import { reveal } from 'svelte-reveal';
</script>

<div class="pad-b back-image y-full l100">
	<div class="screen">
		<h1 class="orange">There is a place...</h1>
		<h6 class="white">
				It lies outside of space and time as we know it,<br>
				but many of us have been there.<br>
				It lies in that cultural mid-space so distant yet ever palpable.
		</h6>
	</div>
</div>

<div class="pad-b">

	<div class="traybox wrap s2">
		<div class="ww2 im-col">
			<img src="/images/scrolls/anc1.webp" alt="part1" use:reveal={{ transition: "slide" }}/>
		</div>
		<div class="ww2 non-im-col">
			<h6> 
				Hive mind. Race memory. Blood bond.<br>
				We may call it many things, but we know it best when we see it,<br>
				and it feels warm and familiar…as if a memory we once lived.
			</h6>
			<h5 class="orange">
				Perhaps we did, is it not?
			</h5>
		</div>
	</div>

	<div class="traybox wrap s3">
		<div class="ww2 non-im-col">
			<h6>
				For countless times before have you been here, and a countless times I.<br><br>
				You there, in one incarnation you were a master of mantra. 
			</h6>
			<h5 class="orange">
			You wrapped meaning around syllables and metre.
			</h5>
		</div>
		<div class="ww2 im-col">
			<img src="/images/scrolls/anc3.webp" alt="part3" use:reveal={{ transition: "slide" }}/>
		</div>
	</div>

	<div class="traybox wrap s4">
		<div class="ww2 im-col">
			<img src="/images/scrolls/anc4.webp" alt="part4" use:reveal={{ transition: "slide" }}/>
		</div>
		<div class="ww2 non-im-col">
			<h6> 
				And you? A pioneer of tilled grain you were. Your hard, seasoned hands fed a civilization.<br><br>
				Another among us was quite a daredevil,<br>
				boldly he grabbed a wild bull by the horns,
			</h6>
			<h5 class="orange">
				First to do so...
			</h5>
		</div>
	</div>
</div>

	<div class="pad-b back-image s5"> 
		<h2>
			We can access this place,
		</h2>
		<h6 class="white wide50">
			outside of space and time though it lies.
			In images and words, in sounds and vistas,
			In streams of imagi/memory that can flow through us…
		</h6>
		<h6 class="orange wide50">
			The Scrolls of Āryavarta is a project to celebrate, express and engage in this shared lore- the dhārmika lore.
			A calling to all who dream of the Bhārata that once was, or Bhāratas that could have been.
		</h6>
	</div>

<div class="pad-a">
	<div class="for-links">
		<h2><a href="/aryavarta/#about">About - The Bhārata that Once Was</a></h2>
		<h2><a href="/aryavarta/chapter/01">Chapter 1: Kaśyapa's Lament</a></h2>
		<h2><a href="/aryavarta/chapter/02">Chapter 2: Sūta and Sudā</a></h2>
		<h2><a href="/aryavarta/chapter/03">Nasadīya Across Time and Space</a></h2>
		<h2><a href="/aryavarta/#genealogy">The Lineages of Āryavarta</a></h2>
		<h2><a href="/aryavarta/#maps">Cartography of a Lost World</a></h2>
		<h2><a href="/aryavarta/gallery">Gallery</a></h2>
	</div>
</div>



<style lang="sass">

.l100
	background-image: url('/images/scrolls/thegrid.webp')

.s5
	background-image: url('/images/background/orangemesh.png')
	h2
		color: white

.for-links h2
	border-left-color: #FF3d00
	cursor: pointer

.l100
	height: 100vh
	.screen
		display: flex
		flex-direction: column
		height: 100vh
		text-align: left
		width: 100%
		justify-content: center
		@media screen and (min-width: 900px)
			padding-left: 64px
		@media screen and (max-width: 899px) and (min-width: 768px)
			padding-left: 40px
		@media screen and (max-width: 767px) and (min-width: 576px)
			padding-left: 32px
		@media screen and (max-width: 575px)
			padding-left: 24px

.s3
	@media screen and (min-width: 900px)
		align-items: center
		.non-im-col
			justify-content: center
			padding: 16px 32px
			height: max-content
		.im-col
			img
				border-radius: 50% 0 0 50%
	@media screen and (max-width: 899px) and (min-width: 768px)
		align-items: center
		height: 90vh
		.non-im-col
			justify-content: center
			padding: 16px 32px
			height: max-content
		.im-col
			img
				border-radius: 50% 0 0 50%
	@media screen and (max-width: 767px) and (min-width: 576px)
		height: 100vh
		padding: 24px
		.non-im-col
			justify-content: center
			height: calc(40vh - 24px)
			order: 2
		.im-col
			order: 1
			img
				height: calc(60vh - 24px)
				object-fit: cover
	@media screen and (max-width: 575px)
		height: 100vh
		padding: 24px
		.non-im-col
			justify-content: center
			height: calc(40vh - 24px)
			order: 2
			padding-top: 16px
		.im-col
			order: 1
			img
				height: calc(60vh - 40px)
				object-fit: cover

.s2, .s4
	@media screen and (min-width: 900px)
		align-items: center
		.non-im-col
			justify-content: center
			padding: 16px 32px
			height: max-content
		.im-col
			img
				border-radius: 0 50% 50% 0
	@media screen and (max-width: 899px) and (min-width: 768px)
		align-items: center
		height: 90vh
		.non-im-col
			justify-content: center
			padding: 16px 32px
			height: max-content
		.im-col
			img
				border-radius: 0 50% 50% 0
	@media screen and (max-width: 767px) and (min-width: 576px)
		height: 100vh
		padding: 24px
		.non-im-col
			justify-content: center
			height: calc(40vh - 24px)
			order: 2
		.im-col
			order: 1
			img
				height: calc(60vh - 24px)
				object-fit: cover
	@media screen and (max-width: 575px)
		height: 100vh
		padding: 24px
		.non-im-col
			justify-content: center
			height: calc(40vh - 24px)
			order: 2
			padding-top: 16px
		.im-col
			order: 1
			img
				height: calc(60vh - 40px)
				object-fit: cover

.s5
	@media screen and (min-width: 900px)
		height: max-content
		justify-content: center
		padding: 64px 0
		margin: 128px 0 0 0
		h2
			color: white
			margin: 0
			padding: 0
		padding-left: 64px
	@media screen and (max-width: 899px) and (min-width: 768px)
		height: max-content
		justify-content: center
		padding-bottom: 64px
		padding-top: 64px
		margin: 128px 0 0 0
		h2
			color: white
			margin: 0
			padding: 0
		padding-left: 64px
	@media screen and (max-width: 767px) and (min-width: 576px)
		padding: 32px
	@media screen and (max-width: 575px)
		padding: 24px


.for-links
	padding-bottom: 64px
	padding-top: 0

</style>