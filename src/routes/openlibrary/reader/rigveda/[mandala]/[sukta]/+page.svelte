<script>
import Suktas from '$lib/components/reader/Suktas.svelte'
/**
	 * @type {{ ms: any; }}
	 */
 export let data
</script>

<div class="read-box">
	<div class="bol-label">open library reader</div>
	<div class="reader-topline"></div>
	<div class="inner-tab">
		<Suktas ms={data.ms}></Suktas>
</div>
</div>
