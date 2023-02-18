<script>
 /**
	 * @type {{ sarga: any; verse: any; kanda: any; devanagari: any; iast: any; griffith: any; rshi: any; chanda: any; devata: any; padapatha: any; }}
	 */
  export let data
</script>

<div class="breadcrumb">
	<a href="/openlibrary/reader/ramayana/{data.kanda}">kāṇḍa {data.kanda} </a><span class="divider"> | </span><a href="/openlibrary/reader/ramayana/{data.kanda}/{data.sarga}">sarga {data.sarga} </a><span class="divider"> | </span>verse {data.verse}
</div>
<div class="inner-tab">
	<div class="hin-og">{data.devanagari}</div>
	<div class="eng-iast">{data.iast}</div>
	<div class="page-liner"></div>
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