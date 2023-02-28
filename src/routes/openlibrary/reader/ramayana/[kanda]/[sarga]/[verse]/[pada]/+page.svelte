<script lang="ts">
export let data1:any
export let data2:any
</script>


<div class="flexbox-r bread-crumb">
	<cite class="grey2">Kāṇḍa {data1.kanda} <span> > </span>Sarga {data1.sarga} <span> > </span>Verse {data1.verse} <span class="soft"> > <b>Pāda {data1.pada}</b></span></cite>
</div>
<div class="flexbox-c results">
	<div class="hindi">
		<h3>{data1.devanagari}</h3>
	</div>
	<h4 class="w400 grey">{data1.iast}</h4>
</div>
{#if data2 && data2.length > 0}
	<div class="flexbox-c words">
		{#each data2 as row}
			<p>{row.form}</p>
		{/each}
	</div>
{/if}

<style>

.bread-crumb {
	border-bottom: 1px solid #f1f1f1;
}

@media screen and (min-width: 900px) {
	.results {
		padding-top: 32px;
	}
}
</style>