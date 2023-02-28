<script>
import Ramayana from '$lib/components/reader/Ramayana.svelte'
</script>

<div class="flexbox-c ins">
	<small class="grey2">
		Instructions: Select in sequence- Kāṇḍa > Sarga > Verse > Pāda
	</small>
</div>
<div class="flexbox-c menu">
	<Ramayana></Ramayana>
</div>
<div class="flexbox-c result">
	<slot></slot>
</div>

<style>

.ins small {
	font-size: 10px;
	text-transform: uppercase;
	font-weight: bold;
	margin: 0;
}

@media screen and (min-width: 900px) {
	.menu {
		height: 80px;
		width: 100%;
		border-bottom: 1px solid #d7d7d7;
		padding-top: 12px;
		padding-bottom: 24px;
		margin-top: 16px;
	}
	.result {
		padding-top: 32px;
	}
}
</style>