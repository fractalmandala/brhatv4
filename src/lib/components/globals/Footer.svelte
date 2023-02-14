<script>
import ToTop from '$lib/components/globals/ToTop.svelte'
import '$lib/styles/newglobals.sass'
</script>

<div class="footer">
<ToTop></ToTop>
	<div class="footerbox">
		<div class="area1">
			<a href="/"><img class="footerlogo" src="/images/brhatlogos/verticalwhite.png" alt="brhat horizontal"/></a>
			<div class="flexrow">			
       		<a class="heading2" href="/rta">Ṛta in Design</a>
       		<a class="heading2" href="/aryavarta">Scrolls of Āryavarta</a>
       		<a class="heading2" href="/dhiti">Dhīti</a>
					<a class="heading2" href="/openlibrary">Bṛhat Open Library</a>
			</div>
			<div class="flexrow">
   			<div class="col">
     		<ul><a class="heading" href="/drashta">Bṛhat Draṣṭā</a>
       	<li><a href="/drashta/courses/shriramswarup">Shri Ram Swarup</a></li>
       	<li><a href="/drashta/courses/sitaramgoel">Sita Ram Goel</a></li>
       	<li><a href="/drashta/courses/hinduiconography">Hindu Iconography</a></li>
       	<li><a href="/drashta/#drashtas">Draṣṭās</a></li>
       	<li><a href="/drashta/#firekeepers">Firekeepers of Civilization</a></li>
       	<li><a href="/drashta/#darshanas">Schools of Thought</a></li>
     		</ul>
   			</div>
   			<div class="col">
     		<ul><a class="heading" href="/anveshi">Bṛhatanveṣī</a>
       		<li><a href="/anveshi/chapters/odisha">Odisha</a></li>
       		<li><a href="/anveshi/chapters/chamba">Chamba</a></li>
       		<li><a href="/anveshi/chapters/karnataka">Karnataka</a></li>
       		<li><a href="/anveshi/diaries">Diaries</a></li>
       		<li><a href="/anveshi/gallery">Gallery</a></li>
     		</ul>
   			</div>
   			<div class="col">
     		<ul><a class="heading" href="/mrdanga">Bṛhadmṛdaṅga</a>
       		<li><a href="/mrdanga/rasa">Rasa</a></li>
       		<li><a href="/mrdanga/kala">Kalā</a></li>
       		<li><a href="/mrdanga/kavita">Kavitā</a></li>
     		</ul>
   			</div>
   			<div class="col">
     		<ul><a class="heading" href="/mandala">Fractal Maṇḍala</a>
       		<li><a href="/mandala/essays">Essays</a></li>
       		<li><a href="/mandala/synaptic">Synaptic Reconnection</a></li>
       		<li><a href="/mandala/aphorisms">Caturasūtra</a></li>
     		</ul>
   			</div>
			</div>
		</div>
		<div class="colcol big">
			<div class="colcol small">
      	<small>© 2023 All Rights Reserved.</small>
      	<small>contact@brhat.in</small>
      	<div class="innerrow">
      		<small><a href="/docs">Site Documentation</a></small>
      		<small><a href="/about/docs/privacy">Privacy Policy</a></small>
    		</div>
  		</div>
  		<div class="socialicons">
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/122-twitter.png" alt="twitter"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/124-fb.png" alt="facebook"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/123-linked.png" alt="linkedin"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/121-insta.png" alt="instagram"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/125-ytube.png" alt="youtube"/></a>
  		</div>
		</div>
	</div>
</div>

<style lang="sass">
	.footer 
		display: flex
		justify-content: space-between
		flex-direction: column
		align-items: center
		background-position: center center
		background-size: cover
		background-repeat: no-repeat
		z-index: 600
		min-height: 100vh
		border-radius: 4px
	
	.footerbox
		display: flex
		flex-direction: column
		justify-content: flex-end
		align-items: center
		width: 100%
		background: linear-gradient(40deg,#272727,#1B2023)
		z-index: 600
		border-radius: 4px	
	
	.area1
		display: flex
		flex-direction: column
		width: 100%
		height: 100%
		justify-content: center
		align-items: center
	
	.colcol.big, .colcol.small
		width: 100%
		background-color: white
		justify-self: flex-end
		padding: 1em
		color: #272727
		align-items: center
		justify-content: center
	
	.flexrow
		display: flex
		flex-direction: row
		align-items: flex-start
		border-radius: 4px
		height: max-content
		padding-top: 1em
		padding-bottom: 1em
	
	.col
		display: flex
		flex-direction: column
		height: 100%
	
		ul
			margin: 4px 0
			padding:0
			list-style-type: none
	
			a
				transform-origin: left center
				transition: var(--quik)
	
			&:hover
				color: var(--red)
				transform: scale(1.1)
	
			li
				list-style-type: none
				color: white
				padding-top: 0.5em
				margin: 4px 0
				padding: 0
				transform-origin: center center
				transition: var(--quik)
	
				&:hover
					transform: scale(0.9)
		
				a
					color: var(--gmid)
	
	.innerrow
		display: flex
		flex-direction: row
		width: 100%
		justify-content: center
		gap: 1em
		color: var(--mute)
	
	.socialicons
		display: flex
		flex-direction: row
		justify-content: center
		align-items: center
		gap: 32px
		background-color: white
		border-top: 1px solid var(--light)
		padding-top: 1em
	
		img
			object-fit: contain
			width: 32px
			height: 32px
			transform-origin: center center
			transition: var(--quik)
	
			&:hover
				transform: scale(1.2)
	
	.big small, .small small
		line-height: 1.25rem
		color: var(--mute)
		font-size: 12px
	
	.heading, .heading2
		color: white
		font-size: 14px
		font-weight: 500
		text-transform: uppercase
	
	.footerlogo
		object-fit: contain
		margin-bottom: 2em
		margin-top: 2em
		transform-origin: center center
		transition: var(--quik)
	
		&:hover
			transform: scale(0.9)
	
	@media screen and (min-width: 900px)
	
		.footer 
			margin: 32px 8px 8px 8px
			width: calc(100% - 16px)
	
		.footerbox
			padding-top: 1em
			padding-bottom: 1em
	
		.flexrow
			gap: 2em
			justify-content: space-between
			width: 72%
		
			a
				text-align: center
				width: calc(100%/4)
	
		.col
			width: calc(100%/4)
			padding-bottom: 0.48em
			align-items: center
			text-align: center
			
			ul
				li
					font-size: 14px
	
		.footerlogo
			width: 128px
	
	@media screen and (max-width: 899px) and (min-width: 768px)
	
		.footer
			width: calc(100% - 16px)
			margin: 24px 0 8px 8px
	
		.footerbox 
			padding-bottom: 1em
			
		.flexrow
			gap: 1.28em
			width: 88%
			justify-content: space-between
			text-align: center

			a
				text-align: center
				width: calc(100%/4)
	
		.col
			width: calc(100%/4)
			padding-bottom: 0.48em
	
			ul
				li
					font-size: 14px
	
		.footerlogo
			width: 128px
	
	@media screen and (max-width: 767px ) and (min-width: 576px )
	
		.footer
			width: calc(100% - 8px)
			margin: 20px 0 4px 4px
	
		.footerbox 
			padding-bottom: 1em
	
		.flexrow
			padding: 0 24px 32px 24px
			width: 100%
			justify-content: center
			gap: 20px
			justify-content: space-between
			text-align: center

			a
				text-align: center
				width: calc(100%/4)
	
		.col
			width: 25%
			padding-bottom: 0.48em
	
			ul
				li
					font-size: 14px
	
		.footerlogo
			width: 112px
	
	@media screen and (max-width: 575px )
	
		.footer
			width: calc(100% - 8px)	
			margin: 20px 0 4px 4px
	
		.footerbox 
			padding-bottom: 1em
		
		.flexrow
			width: 100%
			justify-content: space-between
			text-align: center
			flex-wrap: wrap

			.heading2
				width: calc(100%/2)
				text-align: center
				margin-top: 1em
	
		.col
			padding-bottom: 0.48em
			align-items: center
			width: calc(100%/2)

			a 
				width: 100%
	
			ul
				text-align: center
	
				li
					font-size: 12px
					text-align: center
	
		.footerlogo
			width: 96px
	
</style>