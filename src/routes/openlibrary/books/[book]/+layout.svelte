<script lang="ts">
import FlyingBox from '$lib/components/animations/FlyingPage.svelte'
export let refresh: any
export let data: { Text: any }
</script>

<div class="primecontainer-row">
<div class="side-bar">
<h5 class="side-bar-header"><a href="/openlibrary">Bṛhat Open Library</a></h5>
</div>
{#key refresh}
<FlyingBox>
<div class="main-box">
	<h4>{data.Text}</h4>
		<slot></slot>
</div>
</FlyingBox>
{/key}
</div>