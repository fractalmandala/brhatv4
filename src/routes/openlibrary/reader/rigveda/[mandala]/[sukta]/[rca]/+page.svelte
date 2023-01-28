<script>
 /**
	 * @type {{ suktacorrected: any; rca: any; mandala: any; msr: any; devanagari: any; iast: any; griffith: any; rshi: any; chanda: any; devata: any; padapatha: any; }}
	 */
  export let data
</script>

<div class="breadcrumb">
	<a href="/openlibrary/reader/rigveda/{data.mandala}">maṇḍala {data.mandala} </a><span class="divider"> | </span><a href="/openlibrary/reader/rigveda/{data.mandala}/{data.suktacorrected}">sūkta {data.suktacorrected} </a><span class="divider"> | </span>ṛca {data.rca}
</div>
<div class="inner-tab">
	<div class="hin-og"><pre>{data.devanagari.replace(/\। /g, "\n")}</pre></div>
	<div class="eng-iast"><pre>{data.iast.replace(/\| /g, "\n")}</pre></div>
	<div class="page-liner"></div>
	<div class="stickers">Griffith's English Translation</div>
	<div class="eng-trans">{data.griffith}</div>
	<div class="a-row">
		<div class="data-meta"><span class="stickers">Draṣṭā</span><br><span class="equal">{data.rshi}</span></div>
		<div class="data-meta"><span class="stickers">Chanda</span><br><span class="equal">{data.chanda}</span></div>
		<div class="data-meta"><span class="stickers">Devatā</span><br><span class="equal">{data.devata}</span></div>
	</div>
	<div class="eng-trans" id="second-trans">{data.padapatha}</div>
</div>

<style lang="sass">

.hin-og
	font-size: 2em
	margin-top: 1em
	font-family: 'Halant', serif
	font-weight: 600
	pre
		font-family: 'Noto Serif Devangari',serif

.eng-iast
	font-size: 1.6em
	font-weight: 400
	letter-spacing: -1px

.eng-trans
	font-weight: 400
	font-size: 1.2em
	margin-top: 0.5em

#second-trans
	margin-top: 2em

.stickers
	font-size: 12px
	text-transform: uppercase
	font-weight: bold
	letter-spacing: 1px
	color: #878787

.equal
	font-weight: 400
	font-size: 1.2em
	margin-top: 0.5em

@media screen and (min-width: 900px) 
	.hin-og
		margin-bottom: 0
	.eng-iast
		margin-top: 0
		margin-bottom: 0.5em

</style>