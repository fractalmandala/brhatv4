<script>
/**
	 * @type {{ kanda: any; sarga: any; verse: any; index: any; devanagari: any; iast: any; }}
	 */
 export let data
import RamayanaLem from '$lib/components/reader/RamayanaLem.svelte'
</script>

<div class="breadcrumb m-bot-24 m-top-24">
	<a href="/openlibrary/reader/ramayana/{data.kanda}">Kāṇḍa {data.kanda}</a> <span class="divider"> | </span><a href="/openlibrary/reader/ramayana/{data.kanda}/{data.sarga}">{data.sarga} </a> <span class="divider"> | </span><a href="/openlibrary/reader/ramayana/{data.kanda}/{data.sarga}/{data.verse}">{data.verse}</a> <span class="divider"> | </span> {data.index}
</div>
<div class="flexbox-c hindi m-top-24">
	<div class="hin-og"><h3>{data.devanagari}</h3></div>
	<div class="eng-iast"><h5>{data.iast}</h5></div>
	<div class="page-liner"></div>
</div>
<RamayanaLem x={data.index}/>

<style>
.breadcrumb a { text-transform: capitalize;}
</style>



