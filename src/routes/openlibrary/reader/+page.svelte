<div class="imagecontainer-hero">
	<div class="imagecontainer-screen">
		<div class="reader-box">
			<div class="title-page">Bṛhat Open Library Reader</div>
			<div class="page-liner"></div>
			<h5>Begin At:</h5>
			<p><a href="/openlibrary/reader/rigveda">Ṛgveda</a></p>
			<p>Aṣṭadhyāyī</p>
			<p>Dhātupāṭha</p>
			<p>Amarakośaḥ</p>
		</div>
	</div>
</div>

<style lang="sass">

h5, p, .title-page, a 
	color: white

a:hover
	color: #fe4a49

.title-page
	text-transform: uppercase
	font-weight: bold
	font-size: 10px
	letter-spacing: 2px

.imagecontainer-hero
	background-image: url('/images/bol/readingwall2.webp')
	.imagecontainer-screen
		align-items: center
		background-color: rgba(0,0,0,0.2)
		height: 100%
		width: 100%

.reader-box
	background: rgba(0,0,0,0.6)
	backdrop-filter: blur(4px)


@media screen and (min-width: 900px) 
	.reader-box
		.title-page
			text-align: center
		h5, p
			text-align: center

@media screen and (max-width: 899px) and (min-width: 768px)
	.reader-box
		.title-page, h5, p
			text-align: center

@media screen and (max-width: 767px) and (min-width: 576px)
	.reader-box
		.title-page, h5, p
			text-align: center

@media screen and (max-width: 575px)
	.reader-box
		.title-page, h5, p
			text-align: center
</style>