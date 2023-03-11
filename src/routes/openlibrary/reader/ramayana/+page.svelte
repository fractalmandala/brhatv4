<script lang="ts">
import { onMount } from 'svelte'
import supabase from '$lib/db'
let x:any = []
let numberofitems:any = []
let rangeStart = 0
let rangeEnd = 5

const loadItems = async() => {
	const { data, error } = await supabase
	.from('vw-ramayanaversescombined')
	.select()
	.order('avgid')
	.range(rangeStart, rangeEnd)
	if (error) throw new Error(error.message)
	numberofitems = data
}


onMount(() => {
	loadItems()
})


const nextPage = () => {
	rangeStart += 5
	rangeEnd += 5
	loadItems()
}

const prevPage = () => {
	rangeStart -= 5
	rangeEnd -= 5
	loadItems()
}
</script>
<div class="boxc pageboxramayana">
	<div class="boxc welcometopage">
		<h5>Simple Rāmāyaṇa Pagination:</h5>
		<p>(please read the <span class="rama">*How To </span>to utilize this reader fully)</p>
	</div>
	<div class="pageboxdata">
		{#each numberofitems as item}
		<div class="boxc insidepagebox">
		<small>{item.slugminuspada}</small>
		<div class="versesonmain"><a href="/openlibrary/reader/ramayana/kanda/{item.slugminuspada}">
			<div class="hindi">
				<p>{item.devanagaricombined}</p>
			</div>
			<p>{item.iastcombined}</p></a>
		</div>
		</div>
		{/each}
	</div>
	<div class="boxr">
		<button on:click={prevPage}>Previous</button>
		<button on:click={nextPage}>Next</button>
	</div>
</div>

<style lang="sass">

.pageboxramayana
	padding-bottom: 32px

.boxc small
	margin: 0
	font-size: 10px
	padding-bottom: 6px

.welcometopage
	p, small, h5
		margin: 0

.versesonmain a
	display: grid
	grid-template-columns: 1fr
	grid-template-rows: auto auto
	grid-auto-flow: row
	grid-template-areas: "." "."
	gap: 0px 32px
	justify-items: start
	justify-content: start
	border-bottom: 1px solid #d7d7d7
	padding-bottom: 8px
	&:hover
		.hindi p
			color: var(--rama)
	.hindi p
		font-size: 21px
		color: #474747
		line-height: 1.28
	p
		font-size: 14px
		color: #878787
		line-height: 1.28
		margin: 0

.insidepagebox
	margin-bottom: 16px

.pageboxdata
	padding: 16px
	margin-top: 16px
	border-top: 1px solid #d7d7d7

.boxr
	gap: 16px
	padding-left: 16px
	button
		background: #878787
		border: none
		color: white
		padding: 4px 12px
		transform-origin: center center
		transition: all 0.09s var(--cubea)
		cursor: pointer
		&:hover
			transform: scale(0.9)
		&:active
			transform: scale(1.1)
			background: var(--rama)

</style>

