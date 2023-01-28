<script>
import SelectionRV from '$lib/components/reader/SelectionRV.svelte'
import ModeToggle from '$lib/components/globals/ModeToggle.svelte'
</script>

<div class="big-box">
	<div class="reader-box">
		<div class="a-row">
			<div class="title-page"><a href="/openlibrary/reader">Bṛhat Open Library Reader</a></div>
			<ModeToggle>Reading Mode</ModeToggle>
		</div>
		<div class="page-liner"></div>
		<h3><span class="hindi isblue">ऋग्वेद</span></h3>
		<SelectionRV></SelectionRV>
		<div class="page-liner"></div>
		<slot></slot>
	</div>
</div>

