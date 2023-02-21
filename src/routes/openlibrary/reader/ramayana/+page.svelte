<script>
import Ramayana from '$lib/components/reader/Ramayana.svelte'
import ModeToggle from '$lib/components/globals/ModeToggle.svelte'
</script>

<div class="big-box">
	<div class="reader-box">
		<div class="a-row">
			<div class="title-page"><a href="/openlibrary/reader">Bṛhat Open Library Reader</a></div>
			<ModeToggle>Reading Mode</ModeToggle>
		</div>
		<div class="page-liner"></div>
		<h3><span class="hindi isblue">रामायण</span></h3>
		<Ramayana></Ramayana>
		<div class="page-liner"></div>
		<slot></slot>
	</div>
</div>

