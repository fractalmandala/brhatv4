<script>
 /**
	 * @type {{ suktacorrected: any; rca: any; mandala: any; msr: any; devanagari: any; iast: any; griffith: any; rshi: any; chanda: any; devata: any; padapatha: any; }}
	 */
  export let data
</script>

<div class="read-box">
	<div class="bol-label">open library reader</div>
	<div class="reader-topline"></div>
	<div class="breadcrumb">
		ṛgveda <span class="divider">  |  </span><a href="/openlibrary/reader/rigveda/{data.mandala}">maṇḍala {data.mandala} </a><span class="divider"> | </span><a href="/openlibrary/reader/rigveda/{data.mandala}/{data.suktacorrected}">sūkta {data.suktacorrected} </a><span class="divider"> | </span>ṛca {data.rca}
	</div>
	<div class="inner-tab">
		<div class="hindi hin-og">{data.devanagari}</div>
		<div class="eng-iast">{data.iast}</div>
		<div class="sticker">Griffith's English Translation</div>
		<div class="eng-trans">{data.griffith}</div>
		<div class="a-row">
			<div class="data-meta"><span class="sticker">Draṣṭā</span><br><span class="equal">{data.rshi}</span></div>
			<div class="data-meta"><span class="sticker">Chanda</span><br><span class="equal">{data.chanda}</span></div>
			<div class="data-meta"><span class="sticker">Devatā</span><br><span class="equal">{data.devata}</span></div>
		</div>
		<div class="level-1">{data.padapatha}</div>
	</div>
</div>