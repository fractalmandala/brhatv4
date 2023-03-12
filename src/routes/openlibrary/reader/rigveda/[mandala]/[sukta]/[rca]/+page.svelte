<script lang="ts">
export let data:any
</script>

<div class="boxr bread-crumb">
	<cite><a href="/openlibrary/reader/rigveda/{data.mandala}">maṇḍala {data.mandala} </a><span class="divider"> | </span><a href="/openlibrary/reader/rigveda/{data.mandala}/{data.suktacorrected}">sūkta {data.suktacorrected} </a><span class="divider"> | </span> <span class="rama"><b>ṛca {data.rca}</b></span></cite>
</div>
<div class="boxc results">
	<div class="hindi">
		<h3><pre>{data.devanagari.replace(/\। /g, "\n")}</pre></h3>
		<h5>{data.iast.replace(/\| /g, "\n")}</h5>
	</div>
	<div class="boxc moreresults">
		<h6>Griffith's English Translation:</h6>
		<p>{data.griffith}</p>
		<h6>Pada Pāṭha:</h6>
		<p>{data.padapatha}</p>
		<div class="boxr">
			<div class="boxc">
				<h6>Draṣṭā</h6>
				<p>{data.rshi}</p>
			</div>
			<div class="boxc">
				<h6>Chanda</h6>
				<p>{data.chanda}</p>
			</div>
			<div class="boxc">
				<h6>Devatā</h6>
				<p>{data.devata}</p>
			</div>
		</div>
	</div>
</div>
<div class="boxr navigationbuttonsrow">
	<button class="pagination"><a href="/openlibrary/reader/ramayana/kanda/{data.previousslug}">PREV</a></button>
	<button class="pagination"><a href="/openlibrary/reader/ramayana/kanda/{data.nextslug}">NEXT</a></button>
</div>

<style lang="sass">

.hindi h5
	padding-top: 16px

.moreresults
	padding-top: 16px
	margin-top: 32px
	h5
		margin: 0
		font-weight: 400
		font-size: 1.2rem
		padding-top: 16px
		padding-bottom: 16px
	h6
		margin: 0
		text-transform: uppercase
		border-top: 1px solid #d7d7d7
		font-weight: 400
		color: #b7b7b7
		padding-top: 16px
	p
		font-size: 18px
	.boxr
		border-top: 1px solid #d7d7d7
		gap: 32px
		h6
			border-top: none
			color: var(--rama)
		p
			font-size: 14px

.navigationbuttonsrow
	display: none

@media screen and (max-width: 1023px)
	.moreresults
		p
			line-height: 1.28
			padding-top: 8px

</style>