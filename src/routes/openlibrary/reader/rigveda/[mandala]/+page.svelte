<script>
import Mandalas from '$lib/components/reader/Mandalas.svelte'
/**
	 * @type {{ ms: any; }}
	 */
 export let data
</script>


<p>{data.mandala}</p>
<Mandalas mands={data.mandala}></Mandalas>
