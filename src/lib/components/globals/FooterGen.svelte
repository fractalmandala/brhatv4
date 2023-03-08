<script>
import ToTop from '$lib/components/globals/ToTop.svelte'
</script>

<div class="boxc xx0">
	<ToTop></ToTop>
	<div class="boxr mtray">
		<div class="ww2-s"><a href="/">
			<img id="logoimage" src="/images/brhatlogos/horizontalwhite.png" alt="brhatlogo" /></a>
			<div class="boxr" id="icons-row">
				<div class="boxc icon-box" id="icon-twitter">
					<a href="https://twitter.com/brhat_in" target="_blank" rel="noreferrer"><img class="socialicon" src="/images/icons/twitter-red.png" alt="twitter icon" /></a>
				</div>
				<div class="boxc icon-box" id="icon-facebook">
					<a href="https://www.facebook.com/brhat.in" target="_blank" rel="noreferrer"><img class="socialicon" src="/images/icons/facebook-red.png" alt="facebook icon" /></a>
				</div>
				<div class="boxc icon-box" id="icon-youtube">
					<a href="https://www.youtube.com/@brhat" target="_blank" rel="noreferrer"><img class="socialicon" src="/images/icons/youtube-red.png" alt="youtube icon" /></a>
				</div>
				<div class="boxc icon-box" id="icon-linkedin">
					<a href="https://www.linkedin.com/company/brhat" target="_blank" rel="noreferrer"><img class="socialicon" src="/images/icons/linkedin-red.png" alt="linkedin icon" /></a>
				</div>
				<div class="boxc icon-box" id="icon-instagram">
					<a href="https://www.instagram.com/brhat_in/" target="_blank" rel="noreferrer"><img class="socialicon" src="/images/icons/instagram-red.png" alt="instagram icon" /></a>
				</div>
			</div>
		</div>
		<div class="ww2-xr">

			<div class="ww4 l1 wl1">
				<p><a href="/dhiti">Dhīti</a></p>
				<p><a href="/mrdanga">Bṛhadmṛdaṅga</a></p>
				<p><a href="/members/contact">Contact</a></p>
				<p><a href="/about">About</a></p>
				<small><a href="/about/docs/svatahsiddha">Svataḥsiddha</a></small>
				<small><a href="/about/docs/anatomy">Civilizational Moment</a></small>
				<small><a href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a></small>
				<small><a href="/about/docs/namelogo">Nāmarūpa</a></small>
				<small><a href="/about/docs/values">Pratijñā</a></small>
				<small><a href="/about/#advisors">Advisors</a></small>
				<small><a href="/about/#partners">Partners</a></small>
				<small><a href="/about/#team">Team</a></small>
			</div>
			<div class="ww4 l1 wl2">
				<p><a href="/drashta">Bṛhat Draṣṭā</a></p>
				<small><a href="/drashta/course/valmikiramayana">Vālmīki Rāmāyaṇa</a></small>
				<small><a href="/drashta/course/hinduiconography">Hindu Iconography</a></small>
				<small><a href="/drashta/course/shriramswarup">Shri Ram Swarup</a></small>
				<small><a href="/drashta/course/sitaramgoel">Sita Ram Goel</a></small>
				<p><a href="/aryavarta">Scrolls of Āryavarta</a></p>
				<small><a href="/aryavarta/chapter/01">Chapter 1</a></small>
				<small><a href="/aryavarta/chapter/02">Chapter 2</a></small>
				<small><a href="/aryavarta/chapter/03">Chapter 3</a></small>
			</div>
			<div class="ww4 l1 wl3">
				<p><a href="/anveshi">Bṛhat Anveṣī</a></p>
				<small><a href="/anveshi/chapter/chamba">Chamba</a></small>
				<small><a href="/anveshi/chapter/odisha">Odisha</a></small>
				<small><a href="/anveshi/chapter/karnataka">Karnataka</a></small>
				<small><a href="/anveshi/#faqs">FAQs</a></small>
				<p><a href="/rta">Ṛta in Design</a></p>
				<small><a href="/rta/intro">Introduction</a></small>
				<small><a href="/rta/dharmaisdesign">Dharma is Design</a></small>
				<small><a href="/rta/framework">Framework</a></small>
				<small><a href="/rta/principles">Principles and Phases</a></small>
				<small><a href="/rta/tools">Tools and Resources</a></small>
			</div>
			<div class="ww4 l1 wl4">
				<p><a href="/openlibrary">Bṛhat Open Library</a></p>
				<small><a href="/openlibrary/reader">Repository of Scripture</a></small>
				<small><a href="/openlibrary/specials/aryanissue">The Āryan Issue</a></small>
				<small><a href="/openlibrary/specials/iks">Indian Knowledge Systems</a></small>
				<p><a href="/mandala">Fractal Maṇḍala</a></p>
				<small><a href="/mandala/fractalmandala">The Macrohistoric Case</a></small>
				<small><a href="/mandala/aphorisms">Caturasūtra</a></small>
				<small><a href="/mandala/rathaasabija">Ratha as a Bīja</a></small>
				<small><a href="/mandala/synaptic">Synaptic Reconnection</a></small>
			</div>
		</div>
	</div>
	<div class="boxc low">
		<small>2023 All Rights Reserved | <span><a href="/about/docs/privacy">Privacy</a></span><br>
		<span class="white">Write to us: contact@brhat.in</span></small>
	</div>
</div>

<style lang="sass">

.xx0
	z-index: 1000

#icon-twitter a, #icon-facebook a, #icon-youtube a, #icon-linkedin a, #icon-instagram a
	img
		object-fit: contain
		width: 24px
		height: 24px

.ww2-xr
	.ww4
		color: white

.xx0
	height: 100vh
	background: var(--beau)
	z-index: 999

.ww4
	p
		margin: 0
		font-weight: 400
		font-size: 16px
		padding: 24px 0 5px 0
	small
		margin: 0
		font-size: 13.5px
		color: #878787
		padding: 4px 0 

.low
	justify-content: center
	small
		font-size: 10.5px
		color: #616161

@media screen and (max-width: 767px)
	.low
		height: 48px
	.ww2-xr
		gap: 24px
	.ww5, .l10
		width: 10%

@media screen and (max-width: 479px)
	#logoimage
		width: 216px
	.mtray
		flex-wrap: wrap
		border-top: 1px solid #373737
		border-bottom: 1px solid #373737
		padding: 32px 0
	.xx0
		padding: 0 24px
		height: 100%
	.ww2-s
		width: 100%
	.ww2-xr
		width: 100%
		flex-wrap: wrap
		column-gap: 24px
		padding: 20px 0
	.ww4
		width: calc(50% - 12px)
	.low
		justify-content: center
	.icon-box
		img
			width: 28px
			height: 28px
			filter: saturate(0.01)
			opacity: 0.4
			transition: all 0.14s var(--cubec)
			&:hover
				opacity: 1
				filter: saturate(1)
	#icons-row
		width: 200px
		justify-content: space-between
		margin-top: 16px
	.ww2-xr
		align-items: flex-start
	.ww4
		height: max-content
	.wl2
		order: 1
	.wl3
		order: 2
	.wl4
		order: 3
	.wl1
		order: 4
		
@media screen and (max-width: 767px)
	#logoimage
		width: 216px
	.mtray
		flex-wrap: wrap
		border-top: 1px solid #373737
		border-bottom: 1px solid #373737
		padding: 32px 0
	.xx0
		padding: 0 24px
		height: 100%
	.ww2-s
		width: 100%
	.ww2-xr
		width: 100%
		flex-wrap: wrap
		column-gap: 24px
		padding: 20px 0
	.ww4
		width: calc(50% - 12px)
	.low
		justify-content: center
	.icon-box
		img
			width: 28px
			height: 28px
			filter: saturate(0.01)
			opacity: 0.4
			transition: all 0.14s var(--cubec)
			&:hover
				opacity: 1
				filter: saturate(1)
	#icons-row
		width: 200px
		justify-content: space-between
		margin-top: 16px
	.ww2-xr
		align-items: flex-start
	.ww4
		height: max-content
	.wl2
		order: 1
	.wl3
		order: 2
	.wl4
		order: 3
	.wl1
		order: 4
	
@media screen and (max-width: 991px)
	#logoimage
		width: 216px
	.mtray
		flex-wrap: wrap
		border-top: 1px solid #373737
		border-bottom: 1px solid #373737
		padding: 32px 0
	.xx0
		padding: 0 24px
		height: 100%
		z-index: 1000
	.ww2-s
		width: 100%
	.ww2-xr
		width: 100%
		flex-wrap: wrap
		column-gap: 24px
		padding: 20px 0
	.ww4
		width: calc(50% - 12px)
	.low
		justify-content: center
	.icon-box
		img
			width: 28px
			height: 28px
			filter: saturate(0.01)
			opacity: 0.4
			transition: all 0.14s var(--cubec)
			&:hover
				opacity: 1
				filter: saturate(1)
	#icons-row
		width: 200px
		justify-content: space-between
		margin-top: 16px
	.ww2-xr
		align-items: flex-start
	.ww4
		height: max-content
	.wl2
		order: 1
	.wl3
		order: 2
	.wl4
		order: 3
	.wl1
		order: 4

@media screen and (min-width: 992px)
	.xx0
		z-index: 1000
	.ww2-xr
		gap: 48px
		padding-left: 104px
		justify-content: flex-end
	.ww4
		width: calc(25% - 36px)
	.low
		height: 128px
	.mtray
		min-height: calc(100vh - 192px)
		border-top: 1px solid #373737
		border-bottom: 1px solid #373737
		width: calc(100% -  256px)
		margin-left: 128px
		padding: 32px 0
	#logoimage
		width: 180px
		margin-bottom: 16px
	#icons-row
		justify-content: space-between
		width: 180px
		padding-left: 10px
	.icon-box
		a
			img
				width: 23px
				height: 23px
				filter: saturate(0.01)
				opacity: 0.4
				transition: all 0.14s var(--cubec)
				&:hover
					opacity: 1
					filter: saturate(1)
	.low
		padding-left: 128px

</style>