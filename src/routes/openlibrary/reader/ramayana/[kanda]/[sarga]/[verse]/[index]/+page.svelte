<script>
// @ts-nocheck

import RamayanaLem from '$lib/components/reader/RamayanaLem.svelte'
 /**
	 * @type {{ sarga: any; verse: any; kanda: any; devanagari: any; iast: any; griffith: any; rshi: any; chanda: any; devata: any; padapatha: any; }}
	 */
  export let data
</script>

<div class="breadcrumb m-bot-24 m-top-24">
	<a href="/openlibrary/reader/ramayana/{data.kanda}">{data.sarga} </a><span class="divider"> | </span><a href="/openlibrary/reader/ramayana/{data.kanda}/{data.sarga}">{data.sarga} </a><span class="divider"> | </span>{data.verse}
</div>
<div class="flexbox-c hindi m-top-24">
	<div class="hin-og"><h3>{data.devanagari}</h3></div>
	<div class="eng-iast"><h5>{data.iast}</h5></div>
	<div class="page-liner"></div>
	<small class="white">{data.index}</small>
</div>
<RamayanaLem x={data.index}/>



