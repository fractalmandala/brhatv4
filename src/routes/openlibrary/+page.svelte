<div class="gen-spacer-top"></div>
<div class="full-row row-pad1">
	<div class="a-col main-col">
		<div class="col-in-col">
			<img class="img-main" src="/images/bol/readingroom.png" alt="reading room" />
			<h3 class="title-main"><a href="/openlibrary/reader">The Reading Room</a></h3>
			<p>
				Explore special study areas for core Dhārmika works. The Reading Room is a growing collection of lexically and grammatically inter-linked texts with root and word elaboration.
			</p>
		</div>
	</div>
	<div class="a-col sec-col">
		<div class="col-in-col">
			<img class="img-sec" src="/images/bol/aryanissue.webp" alt="aryan issue" />
			<h4 class="title-sec"><a href="/openlibrary/categories/aryanissue">The Āryan Issue</a></h4>
			<p>A collection of articles, essays, papers and findings relevant to the AI/M/T issue from all disciplines.</p>
		</div>
		<div class="col-in-col">
			<img class="img-sec" src="/images/bol/ros.webp" alt="repository of scripture" />
			<h4 class="title-sec"><a href="/openlibrary/categories/scripture">Repository of Scripture</a></h4>
			<p>A center for digital and PDF forms of Vedāntika, Paurāṇika and Dārśaṇika texts.</p>
		</div>
	</div>
	<div class="a-col thi-col">
		<div class="col-in-col">
			<a href="/openlibrary/categories/essentials">
				<small>Essentials</small>
				<p>Recommended readings from Bṛhat.</p>
			</a>	
		</div>
		<div class="col-in-col">
			<a href="/openlibrary/categories/iks">
				<small>IKS</small>
				<p>Variety of books and articles on the Indian knowledge systems.</p>
			</a>
		</div>		
		<div class="col-in-col">
			<a href="/openlibrary/categories/bodhas">
				<small>The Two Bodhas</small>
				<p>Works to enchance Svayambodha and Śatrubodha.</p>
			</a>
		</div>
		<div class="col-in-col">
			<a href="/openlibrary/categories/other">
				<small>Language, History</small>
				<p>Books on Sanskrit learning, perspectives of history, chronology and more.</p>
			</a>
		</div>
	</div>
</div>


<style lang="sass">

small
	font-family: 'Inter Tight', sans-serif
	font-weight: bold
	color: #272727
	margin-bottom: 0
	text-transform: uppercase
	font-size: 10px
	color: #878787
	letter-spacing: 2px
	
p
	font-family: 'STIX Two Text', serif
	font-weight: 300

h4
	font-family: 'Inter Tight', sans-serif
	font-weight: 700
	color: #272727
	margin-bottom: 0
	border-top: none

h3 
	font-family: 'Inter Tight', sans-serif
	font-weight: 700
	color: #272727
	margin-bottom: 0

.full-row
	display: flex
	flex-direction: row
	min-height: 100vh

.a-col
	display: flex

	.col-in-col
		display: flex
		border-radius: 6px
		padding: 12px 16px
		transition: all 0.08s var(--cube1)
		&:hover
			box-shadow: 3px 4px 8px #e1e1e1, -6px -4px 10px #e7e7e7
			transform: scale(0.9)

		img
			object-fit: contain
			width: 100%
			border-radius: 6px

		&:hover h3 a, &:hover h4 a, &:hover small
			color: #fe4a49

.thi-col
	.col-in-col
		transform-origin: center center
		&:hover
			transform: scale(0.9)

@media screen and (min-width: 900px)
	.imagecontainer-hero
		margin-left: 8px

	.row-pad1
		padding-left: 4vw
		padding-right: 4vw

	.col-in-col
		flex-direction: column

	.a-col
		flex-direction: column
	
	.full-row
		width: calc(100vw - 16px)
		margin-left: 8px

		.thi-col
			width: 21%
			padding-left: 2vw
			gap: 1em
			p
				font-size: 14px
				margin-top: 8px
				margin-bottom: 0
				color: #878787
			small
				color: #272727
				font-weight: bold
			
		.sec-col
			width: 32%
			padding-left: 2vw
			padding-right: 2vw
			gap: 1em
			p
				margin-top: 8px
				font-size: 14px
				color: #878787
			h4
				margin-top: 0
				font-size: 20px

		.main-col
			width: 47%
			align-items: stretch
			padding-right: 2vw
			p
				font-size: 16px
				margin-top: 0.5em
				line-height: 1.44em
				color: #878787
			h3
				margin-top: 0.5em
				margin-bottom: 0

	
@media screen and (max-width: 899px) and (min-width: 768px)

	.row-pad1
		padding-left: 2vw
		padding-right: 2vw

	.a-col
		flex-direction: column

	.col-in-col
		flex-direction: column

	.full-row
		width: calc(100vw - 16px)
		margin-left: 8px
		.main-col
			width: 47%
			align-items: stretch
			padding-right: 0.7vw
			p
				font-size: 14px
		.sec-col
			width: 32%
			padding-left: 0.7vw
			padding-right: 0.7vw
			gap: 1em
			p
				font-size: 12px
		.thi-col
			width: 21%
			padding-left: 0.7vw
			gap: 1em
			p
				font-size: 12px

@media screen and (max-width: 767px) and (min-width: 576px)

	.row-pad1
		padding-left: 1em
		padding-right: 1em

	.full-row
		width: calc(100vw - 8px)
		margin-left: 4px
		flex-wrap: wrap
		.main-col
			width: 100%	
			flex-direction: column
			.col-in-col
				flex-direction: column	
				h3
					font-size: 2em
					margin-top: 0.5em
				p
					margin-top: 0.5em
					font-size: 14px

		.sec-col
			width: 100%
			flex-direction: row
			.col-in-col
				width: 50%
				flex-direction: column
				h4
					font-size: 1.2em
					margin-top: 0
					margin-bottom: 0
				p
					font-size: 12px
					margin-top: 0.5em

		.thi-col
			width: 100%
			flex-direction: column
			.col-in-col
				width: 100%
				flex-direction: column	
				small
					color: #272727
				p
					font-size: 14px
					margin-top: 0.5em
					margin-bottom: 0

@media screen and (max-width: 575px)

	.row-pad1
		padding-left: 0.5em
		padding-right: 0.5em

	.full-row
		width: calc(100vw - 8px)
		margin-left: 4px
		flex-wrap: wrap
		.main-col, .sec-col, .thi-col
			width: 100%
		.main-col
			flex-direction: column
			.col-in-col
				flex-direction: column
				h3
					font-size: 1.6em
					margin-top: 0.5em
					margin-bottom: 0
				p
					font-size: 14px
					margin-top: 0.5em
		.sec-col
			flex-direction: row
			.col-in-col
				flex-direction: column
				h4
					font-size: 1.2em
					margin-top: 0
					margin-bottom: 0
				p
					font-size: 12px
					margin-top: 0.5em
		.thi-col
			flex-direction: row
			flex-wrap: wrap
			.col-in-col
				flex-direction: column
				width: 50%
				p
					font-size: 12px
					margin-top: 0.5em
				small
					color: #272727
</style>