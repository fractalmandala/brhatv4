<script lang="ts">
import { onMount } from 'svelte'
import supabase from '$lib/db'
import { page } from '$app/stores'

export let data:any
let x = ''
let lems:any = []


const loadLemma = async() => {
	const { data, error } = await supabase
    .from('vw-ramayanameanings3')
    .select()
    .eq('slug',x)
    .order('id')
  if (error) throw new Error(error.message)
  return data
}

onMount(async() => {
	x = $page.url.pathname.substr(29,9)
	lems = await loadLemma()
})

</script>


<div class="boxr bread-crumb">
	<cite><a href="/openlibrary/reader/ramayana/{data.kanda}">Kāṇḍa {data.kanda}</a> <span> > </span>Sarga {data.sarga} <span> > </span>Verse {data.verse} <span class="rama"> > <b>Pāda {data.pada}</b></span></cite>
</div>
<div class="boxc results">
	<div class="hindi">
		<h3>{data.devanagari}</h3>
		<h5>{data.iast}</h5>
	</div>
</div>
<div class="boxr navigationbuttonsrow">
	<button class="pagination"><a href="/openlibrary/reader/ramayana/{data.previousslug}">PREV</a></button>
	<button class="pagination"><a href="/openlibrary/reader/ramayana/{data.nextslug}">NEXT</a></button>
</div>
	<h4 class="cut">Words of this Pāda</h4>
<div class="lemmas">
		{#each lems as item}
			<div class="boxc lemmaextended">
				<div class="extend1 boxc">
					<small>{item.id}</small>
					<h6>{item.form}</h6>
					<div class="withborder"><p>{item.lemma}</p></div>
					<div class="meaning">{item.meanings}</div>
				</div>
				<div class="extend2 boxc">
					<small>UPOS: {item.upos}</small>
					{#if item.linebreaks.length > 0}
					<small>{item.linebreaks}</small>
					{/if}
				</div>
			</div>
		{/each}
</div>


<style lang="sass">

.meaning
	font-family: 'Spline Sans', sans-serif

.bread-crumb
	border-bottom: 1px solid #f1f1f1
	cite
		color: #878787
		font-size: 12px

.navigationbuttonsrow
	gap: 8px

.navigationbuttonsrow
	&:hover
		.pagination
			transform: scale(0.8)
			&:hover
				transform: scale(1.2)

.pagination
	border: 1px solid #b7b7b7
	background: none
	padding: 4px 12px
	font-size: 12px
	color: #b7b7b7
	border-radius: 2px
	margin-bottom: 24px
	margin-top: 24px
	transform-origin: center center
	&:hover
		background: var(--rama)
		border: 1px solid var(--rama)
		color: white
	a
		&:hover
			color: white

.results
	.hindi
		padding-top: 16px
		margin-top: 16px
		h3
			margin: 0
		h5
			color: #676767
			font-weight: 600
			margin: 0
h4
	font-size: 20px
	font-weight: 600
	letter-spacing: -0.4px
	padding-top: 32px
		
		
.lemmas
	display: grid
	grid-auto-flow: row
	grid-template-columns: 1fr
	grid-template-rows: auto
	grid-template-areas: "."
	gap: 0px 0px
	h5, small, p, h6
		margin: 0

@media screen and (min-width: 1024px)
	h5
		font-weight: 600
		font-size: 32px
	small
		color: #878787
		font-size: 12px
	.lemmas
		border-top: 1px solid #d7d7d7
		margin-top: 12px
		padding: 24px
	.lemmaextended
		margin-top: 16px
		h6
			font-weight: 400
			font-size: 14px
			color: #878787
			padding-bottom: 8px
			text-transform: uppercase
		p
			font-weight: 600
			font-size: 21px
		.extend2 small
			font-size: 10px
	.withborder
		border-left: 4px solid var(--rama)
		padding-left: 16px
		margin-bottom: 12px
	.meaning p
		font-weight: 400
		font-size: 14px
	.meaning
		font-size: 18px
		font-weight: 400
		color: #676767
		width: 100%
		margin-bottom: 8px

@media screen and (max-width: 767px)
	.lemmas
		border-top: 1px solid #d7d7d7
		margin-top: 12px
		padding-top: 16px
		grid-template-columns: 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: ". ."
		gap: 12px 32px
		.lemmaextended
			margin-top: 16px
			h6
				font-weight: 400
				font-size: 14px
				color: #878787
				padding-bottom: 8px
				text-transform: uppercase
			p
				font-weight: 600
				font-size: 21px
			.extend2 small
				font-size: 10px
				color: #b7b7b7
			.extend1 small
				font-size: 10px
				font-weight: bold
				color: #878787
		.withborder
			border-left: 4px solid var(--rama)
			padding-left: 16px
			margin-bottom: 12px
		.meaning p
			font-weight: 400
			font-size: 14px
		.meaning
			font-size: 12px
			font-weight: 400
			color: #676767
			width: 100%
			margin-bottom: 8px


</style>