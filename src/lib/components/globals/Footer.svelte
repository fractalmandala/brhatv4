<script>
import ToTop from '$lib/components/globals/ToTop.svelte'
</script>

<div class="big-box">
	<ToTop></ToTop>
	<div class="margin-box">
		<div class="boxr" id="row-one">
		<div class="boxc" id="logo-col"><a href="/">
			<img id="logoimage" src="/images/brhatlogos/horizontalwhite.png" alt="brhatlogo" /></a>
			<div class="boxr" id="icons-row">
				<div class="boxc icon-box" id="icon-twitter">
					<a href="https://twitter.com/brhat_in" target="_blank" rel="noreferrer"><img src="/images/icons/twitter-red.png" alt="twitter icon" /></a>
				</div>
				<div class="boxc icon-box" id="icon-facebook">
					<a href="https://www.facebook.com/brhat.in" target="_blank" rel="noreferrer"><img src="/images/icons/facebook-red.png" alt="facebook icon" /></a>
				</div>
				<div class="boxc icon-box" id="icon-youtube">
					<a href="https://www.youtube.com/@brhat" target="_blank" rel="noreferrer"><img src="/images/icons/youtube-red.png" alt="youtube icon" /></a>
				</div>
				<div class="boxc icon-box" id="icon-linkedin">
					<a href="https://www.linkedin.com/company/brhat" target="_blank" rel="noreferrer"><img src="/images/icons/linkedin-red.png" alt="linkedin icon" /></a>
				</div>
				<div class="boxc icon-box" id="icon-instagram">
					<a href="https://www.instagram.com/brhat_in/" target="_blank" rel="noreferrer"><img src="/images/icons/instagram-red.png" alt="instagram icon" /></a>
				</div>
			</div>
		</div>
		<div class="boxr" id="links-row">
			<div class="boxc link-box">
					<p><a href="/anveshi">Bṛhatanveṣī</a></p>
					<small><a href="/anveshi/chapter/odisha">Odisha Chapter</a></small>
					<small><a href="/anveshi/chapter/chamba">Chamba Chapter</a></small>
					<small><a href="/anveshi/chapter/karnataka">Karnataka Chapter</a></small>
					<small><a href="/anveshi/diaries">Travel Diaries</a></small>
			</div>
			<div class="boxc link-box">
					<p><a href="/drashta">Bṛhat Draṣṭā</a></p>
					<small><a href="/drashta/course/hinduiconography">Hindu Iconography</a></small>
					<small><a href="/drashta/course/shriramswarup">Shri Ram Swarup</a></small>
					<small><a href="/drashta/course/sitaramgoel">Sita Ram Goel</a></small>
					<small><a href="/drashta/drashtas">Draṣṭās</a></small>
					<small><a href="/drashta/schools">Schools</a></small>
					<small><a href="/drashta/firekeepers">Firekeepers</a></small>
			</div>
			<div class="boxc link-box" id="box-about">
					<p><a href="/about">About</a></p>
					<small><a href="/about/docs/namelogo">Nāmarūpa</a></small>
					<small><a href="/about/docs/values">Pratijñā</a></small>
					<small><a href="/about/docs/svatahsiddha">Svataḥsiddha</a></small>
					<small><a href="/about/#advisory">Advisory Board</a></small>
					<small><a href="/about/#team">Team</a></small>
			</div>
			<div class="boxc link-box" id="box-actions">
					<p>Actions</p>
					<small><a href="/dhiti">Dhīti</a></small>
					<small><a href="/openlibrary">Bṛhat Open Library</a></small>
					<small><a href="/mrdanga">Bṛhadmṛdaṅga</a></small>
					<small><a href="/mandala">Fractal Maṇḍala</a></small>
					<small><a href="/aryavarta">Scrolls of Āryavarta</a></small>
					<small><a href="/rta">Ṛta in Design</a></small>
			</div>
		</div>
		</div>
	</div>
	<div class="boxc" id="last-row"><small>2023 All Rights Reserved | <span><a href="/docs">Documentation</a> | </span><span><a href="/about/privacy">Privacy</a></span><br>
		<span class="white">Write to us: contact@brhat.in</span>
		</small>
	</div>
</div>

<style lang="sass">

.big-box
	background: linear-gradient(132.9deg, #171717 10.69%, #181C1E 84.91%)
	z-index:900
	position: sticky

	small
		color: #676767
		font-weight: 400
		a
			font-size: inherit
			color: inherit
			&:hover
				color: #fe4a49
	@media screen and (min-width: 900px)
		height: 100vh
		padding-top: 0
		padding-bottom: 0
	@media screen and (max-width: 899px) and (min-width: 768px)
		padding-top: 2em
	@media screen and (max-width: 767px) and (min-width: 576px)
		padding-top: 2em
		height: 100%
	@media screen and (max-width: 575px)
		padding-top: 2em
		width: 100vw
		padding-left: 0
		padding-right: 0
		min-height: 100vh

.margin-box
	border-top: 1px solid #474747
	border-bottom: 1px solid #474747
	@media screen and (min-width: 900px)
		height: calc(100vh - 232px)
		width: calc(100% - 288px)
		margin-left: 144px
	@media screen and (max-width: 899px) and (min-width: 768px)
		height: calc(100vh - 8em)
		width: calc(100% - 12vw)
		margin: 2em 6vw 0 6vw
	@media screen and (max-width: 767px) and (min-width: 576px)
		height: calc(100vh - 200px)
		width: calc(100vw - 160px)
		margin: 2em 80px 0em 80px
	@media screen and (max-width: 575px)
		min-height: calc(100vh - 12em)
		width: calc(100vw - 88px)
		margin: 2em 48px 0em 40px

#logoimage
	transform-origin: center left
	transition: 0.12s ease-out
	&:hover
		transform: scale(0.96)

.icon-box
	align-items: center
	justify-content: center

.link-box
	display: flex
	p
		color: white
		font-weight: 400
		margin-bottom: 20px
		font-size: 18px
		letter-spacing: 0.05px
		margin-top: 0
		&:hover a
			color: #fe4a49
	a 
		color: inherit
	small
		color: #878787
		font-weight: 400
		margin-bottom: 16px
		font-size: 16px
		margin-top: 0
		&:hover a
			color: #fe4a49

.icon-box img
	transition: all 0.04s ease-in
	transform-origin: center center
	filter: saturate(0.01)
	opacity: 0.4
	&:hover
		opacity: 1
		filter: saturate(1)



#links-row
	display: flex

@media screen and (min-width: 900px) 

	.icon-box
		height: 32px
		width: 32px
	

	#row-one
		padding-top: 4em

	#last-row
		height: 160px
		margin: 0
		width: 100%
		padding: 0 144px
		justify-content: center
	
	#last-row small
		line-height: 1.8
		font-size: 12px
		margin: 0

	#logoimage
		width: 200px
		margin-bottom: 2em

	#logo-col
		width: 25%

	#links-row
		width: 75%
		padding-left: 8%
		padding-top: 2em
		flex-direction: row

	#icons-row
		width: 200px
		justify-content: space-between

	.icon-box img
		object-fit: contain
		width: 24px
		height: 24px

	.link-box
		width: 25%
		padding-left: 2em

	.margin-box
		height: calc(100% - 240px)


@media screen and (max-width: 899px) and (min-width: 768px) 
	
	#last-row
		height: 6em
		width: calc(100vw - 12vw)
		padding-top: 1em
		margin-left: 6vw

	#logoimage
		width: 200px
		margin-bottom: 1em

	#row-one
		flex-wrap: wrap
		padding-top: 3em

	#logo-col
		width: 100%

	#icons-row
		width: 24%
		justify-content: space-between
		img
			width: 24px
			height: 24px

	#links-row
		width: 100%
		padding-top: 2em
		gap: 3em
		flex-direction: row
		padding-bottom: 32px
		.link-box
			width: 25%

	.margin-box
		height: calc(100% - 160px)


@media screen and (max-width: 767px) and (min-width: 576px) 

	#last-row
		height: 128px
		justify-content: center
		width: calc(100vw - 160px)
		margin: 0 80px
		padding-top: 1em
		small
			line-height: 1.5

	#logoimage
		width: 188px
		margin-bottom: 1em

	#row-one
		flex-wrap: wrap
		padding-top: 2em

	#logo-col
		width: 100%

	#icons-row
		width: 42%
		justify-content: space-between
		img
			width: 24px
			height: 24px

	#links-row
		width: 100%
		padding-top: 2em
		margin-top: 32px
		flex-direction: row
		gap: 1.2em
		.link-box
			width: 45%

	.margin-box
		height: 100%
		padding-bottom: 32px

	
@media screen and (max-width: 575px)

	#last-row
		width: 100vw
		margin: 0
		padding: 12px 40px
		small
			line-height: 1.5
			width: 100%
			font-size: 10px

	#logoimage
		width: 160px
		margin-bottom: 1em
		margin-top: 2em

	#row-one
		flex-wrap: wrap
		height: 100%

	#logo-col
		width: 100%
		align-items: flex-start

	.icon-box
		height: 24px
		width: 24px
		
	#icons-row
		width: 100%
		justify-content: flex-start
		margin-bottom: 1em
		margin-top: 8px
		gap: 16px
		img
			width: 24px
			height: 24px

	#links-row
		width: 100%
		height: 100%
		padding-bottom: 32px
		padding-top: 24px
		gap: 0
		flex-direction: row
		justify-content: space-between
		align-items: flex-start
		.link-box
			width: 45%
			p
				margin-top: 12px
				margin-bottom: 16px
				font-size: 15px
			h6
				margin-bottom: 0
				margin-top: 40px
				font-size: 14px

	#box-actions, #box-about
		margin-top: 32px

	
</style>