<script>
import ToTop from '$lib/components/globals/ToTop.svelte'
</script>

<div class="big-box">
<ToTop></ToTop>
	<div class="margin-box">
		<div class="r-r-r-r" id="row-one">
			<div class="c-c-c-c" id="logo-col"><a href="/">
				<img id="logoimage" src="/images/brhatlogos/horizontalwhite.png" alt="brhatlogo" /></a>
				<div class="r-r-r-r" id="icons-row">
					<div class="c-c-c-c icon-box" id="icon-twitter">
						<a href="https://twitter.com/brhat_in" target="_blank" rel="noreferrer"><img src="/images/icons/twitter-red.png" alt="twitter icon" /></a>
					</div>
					<div class="c-c-c-c icon-box" id="icon-facebook">
						<a href="https://www.facebook.com/brhat.in" target="_blank" rel="noreferrer"><img src="/images/icons/facebook-red.png" alt="facebook icon" /></a>
					</div>
					<div class="c-c-c-c icon-box" id="icon-youtube">
						<a href="https://www.youtube.com/@brhat" target="_blank" rel="noreferrer"><img src="/images/icons/youtube-red.png" alt="youtube icon" /></a>
					</div>
					<div class="c-c-c-c icon-box" id="icon-linkedin">
						<a href="https://www.linkedin.com/company/brhat" target="_blank" rel="noreferrer"><img src="/images/icons/linkedin-red.png" alt="linkedin icon" /></a>
					</div>
					<div class="c-c-c-c icon-box" id="icon-instagram">
						<a href="https://www.instagram.com/brhat_in/" target="_blank" rel="noreferrer"><img src="/images/icons/instagram-red.png" alt="instagram icon" /></a>
					</div>
				</div>
			</div>
			<div class="r-r-r-r" id="links-row">
				<div class="c-c-c-c link-box">
					<h6><a href="/anveshi">Bṛhatanveṣī</a></h6>
					<p><a href="/anveshi/chapter/odisha">Odisha Chapter</a></p>
					<p><a href="/anveshi/chapter/chamba">Chamba Chapter</a></p>
					<p><a href="/anveshi/chapter/karnataka">Karnataka Chapter</a></p>
					<p><a href="/anveshi/diaries">Travel Diaries</a></p>
				</div>
				<div class="c-c-c-c link-box">
					<h6><a href="/drashta">Bṛhat Draṣṭā</a></h6>
					<p><a href="/drashta/course/hinduiconography">Hindu Iconography</a></p>
					<p><a href="/drashta/course/shriramswarup">Shri Ram Swarup</a></p>
					<p><a href="/drashta/course/sitaramgoel">Sita Ram Goel</a></p>
					<p><a href="/drashta/drashtas">Draṣṭās</a></p>
					<p><a href="/drashta/schools">Schools</a></p>
					<p><a href="/drashta/firekeepers">Firekeepers</a></p>
				</div>
				<div class="c-c-c-c link-box">
					<h6><a href="/about">About</a></h6>
					<p><a href="/about/docs/namelogo">Nāmarūpa</a></p>
					<p><a href="/about/docs/values">Pratijñā</a></p>
					<p><a href="/about/docs/svatahsiddha">Svataḥsiddha</a></p>
					<p><a href="/about/#advisory">Advisory Board</a></p>
					<p><a href="/about/#team">Team</a></p>
				</div>
				<div class="c-c-c-c link-box">
					<h6>Actions</h6>
					<p><a href="/dhiti">Dhīti</a></p>
					<p><a href="/openlibrary">Bṛhat Open Library</a></p>
					<p><a href="/mrdanga">Bṛhadmṛdaṅga</a></p>
					<p><a href="/mandala">Fractal Maṇḍala</a></p>
					<p><a href="/aryavarta">Scrolls of Āryavarta</a></p>
					<p><a href="/rta">Ṛta in Design</a></p>
				</div>
			</div>
		</div>
	</div>
	<div class="r-r-r-r" id="last-row"><small>2023 All Rights Reserved | <span><a href="/docs">Documentation</a> | </span><span><a href="/about/privacy">Privacy</a></span></small></div>
</div>

<style lang="sass">

.big-box
	background: linear-gradient(40deg,#272727,#1B2023)
	small
		color: #676767
		font-size: 12px
		a
			font-size: inherit
			color: inherit
			&:hover
				color: #fe4a49

.margin-box
	border-top: 1px solid #474747
	border-bottom: 1px solid #474747

#logoimage
	transform-origin: center left
	transition: 0.12s ease-out
	&:hover
		transform: scale(0.96)

.icon-box
	height: 32px
	width: 32px
	align-items: center
	justify-content: center

.link-box
	display: flex
	font-family: 'Readex Pro', sans-serif
	h6
		color: white
		font-weight: 400
		letter-spacing: 0px
		margin-bottom: 1.28em
		margin-top: 0
		&:hover a
			color: #fe4a49
	a 
		color: inherit
	p
		color: #878787
		font-weight: 300
		letter-spacing: 0
		margin-bottom: 8px
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

#last-row
	flex-direction: row

		
@media screen and (min-width: 900px) 
	.big-box
		padding-top: 1em
		
	.margin-box
		height: calc(100vh - 12em)
		width: 100%
		padding: 0 6vw
		margin-top: 2em

	#row-one
		padding-top: 4em

	#last-row
		height: 8em
		margin: 0
		width: 100%
		padding: 1em 6vw

	#logoimage
		width: 200px
		margin-bottom: 2em

	#logo-col
		width: 25%

	#links-row
		width: 75%
		padding-left: 12%
		padding-top: 2em

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
		h6
			font-size: 16px
		p
			font-size: 14px

@media screen and (max-width: 899px) and (min-width: 768px) 

	.big-box
		padding-top: 2em

	.margin-box
		height: calc(100vh - 8em)
		width: calc(100% - 12vw)
		margin: 2em 6vw 0 6vw
	
	#last-row
		height: 6em
		width: calc(100vw - 12vw)
		padding-top: 1em

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
		.link-box
			width: 25%
			h6
				font-size: 16px
			p
				font-size: 14px

@media screen and (max-width: 767px) and (min-width: 576px) 

	.big-box
		padding-top: 2em

	.margin-box
		height: calc(100vh - 12em)
		width: calc(100vw - 8vw)
		margin: 2em 4vw 0em 4vw

	#last-row
		height: 4em
		width: calc(100vw - 8vw)
		margin: 0 4vw
		padding-top: 1em

	#logoimage
		width: 160px
		margin-bottom: 1em

	#row-one
		flex-wrap: wrap
		padding-top: 2em

	#logo-col
		width: 100%

	#icons-row
		width: 32%
		justify-content: space-between
		img
			width: 24px
			height: 24px

	#links-row
		width: 100%
		padding-top: 2em
		gap: 2em
		.link-box
			width: 25%
			h6
				font-size: 16px
			p
				font-size: 14px
	
@media screen and (max-width: 575px)

	.big-box
		padding-top: 2em

	.margin-box
		width: calc(100% - 12vw)
		height: calc(100% - 12em)
		margin: 2em 6vw 0em 6vw

	#last-row
		width: calc(100% - 12vw)
		margin: 0 6vw
		height: 4em
		padding-top: 1em

	#logoimage
		width: 160px
		margin-bottom: 1em
		margin-top: 2em

	#row-one
		flex-wrap: wrap
		height: 100%

	#logo-col
		width: 100%

	#icons-row
		width: 50%
		justify-content: space-between
		margin-bottom: 1em
		img
			width: 20px
			height: 20px

	#links-row
		width: 100%
		height: 100%
		flex-wrap: wrap
		margin-top: 1em
		gap: 5vw
		padding-bottom: 1em
		.link-box
			width: calc(50% - 2.5vw)
			p
				font-size: 14px
			h6
				font-size: 16px

	
</style>