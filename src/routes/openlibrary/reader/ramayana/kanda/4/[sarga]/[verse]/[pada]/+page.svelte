<script lang="ts">
import { onMount } from 'svelte'
import supabase from '$lib/db'
import { fly } from 'svelte/transition'
import { page } from '$app/stores'
import Dictionary from '$lib/components/reader/Dictionary.svelte'

export let data:any
let x = ''
let lems:any = []
let isExpand:boolean = false

function toggleExpand(){
	isExpand = !isExpand
}

const loadLemma = async() => {
	const { data, error } = await supabase
    .from('lemramayanak4')
    .select()
    .eq('slug',x)
    .order('id')
  if (error) throw new Error(error.message)
  return data
}

onMount(async() => {
	x = $page.url.pathname.substr(35,14)
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
	<button class="pagination"><a href="/openlibrary/reader/ramayana/kanda/{data.previousslug}">PREV</a></button>
	<button class="pagination"><a href="/openlibrary/reader/ramayana/kanda/{data.nextslug}">NEXT</a></button>
</div>
	<div class="expansiondrop">
  <div class="dropdownarea">
    <div class="dropheader">
			<h4>Words of this Pāda</h4>
		</div>
    <div class="dropicon" on:click={toggleExpand} on:keydown={toggleExpand}>
			{#if isExpand}
			<svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path id="pullup" d="M3.80128 24.1499L0.97998 21.5071L12.98 10.2803L24.98 21.5071L22.1587 24.1462L12.974 15.5547L3.7893 24.1462L3.80128 24.1499ZM3.80128 14.0195L0.97998 11.3748L12.98 0.149902L24.98 11.3748L22.1587 14.0157L12.974 5.4243L3.7893 14.0157L3.80128 14.0195Z" fill="black"/>
			</svg>
			{:else}
			<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path id="pushdown" d="M11.7255 23.8531L0.186279 12.7577L2.90116 10.1454L11.7332 18.6377L20.5652 10.1454L23.2647 12.7577L11.7274 23.8531H11.7255ZM11.7255 13.8395L0.186279 2.7423L2.90116 0.131836L11.7332 8.62414L20.5652 0.131836L23.2647 2.7423L11.7274 13.8377L11.7255 13.8395Z" fill="black"/>
			</svg>
			{/if}
		</div>
  </div>
  <div class="captioner">
		<small class="std-small">{x}</small>
	</div>
</div>
{#if isExpand}
<div class="lemmas" transition:fly>
		{#each lems as item}
			<div class="lemmaextended">
				<div class="extend1 boxc">
					<small>{item.id}</small>
					<h6>{item.form}</h6>
					<div class="withborder"><p>{item.lemma}</p></div>
					<div class="insmall">
						<small>UPOS: {item.upos}</small><br>
						<pre>Other: {item.linebreaks}</pre>
					</div>
				</div>
				<div class="extend2 boxc">
					<Dictionary y={item.lemma}></Dictionary>
				</div>
			</div>
		{/each}
</div>
{/if}

<style lang="sass">

.expansiondrop 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto auto 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "dropdownarea" "captioner" 
	align-items: center
	align-content: center
.dropdownarea 
	display: grid 
	grid-template-columns: auto 24px 
	grid-template-rows: auto
	gap: 0px 16px 
	grid-auto-flow: row 
	grid-template-areas: "dropheader dropicon" 
	grid-area: dropdownarea 
	align-items: center
	align-content: center
	justify-items: start
	justify-content: start
.dropheader 
	grid-area: dropheader
	height: 24px
	display: flex
	align-items: center
	flex-direction: row
	h4
		margin: 0
		padding: 0
.dropicon 
	grid-area: dropicon 
	width: 16px
	height: 16px
	svg
		width: 16px
		height: 16px
		#pushdown
			fill: var(--rama)
.captioner 
	grid-area: captioner 


.meaning
	font-family: 'Spline Sans', sans-serif

.std-small
	text-transform: uppercase

.bread-crumb
	border-bottom: 1px solid #f1f1f1
	cite
		color: #878787
		font-size: 12px
		text-transform: uppercase

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
		
		
.lemmas
	display: grid
	grid-auto-flow: row
	grid-template-columns: 1fr
	grid-template-rows: auto
	grid-template-areas: "."
	gap: 0px 0px
	h5, small, p, h6
		margin: 0

.lemmaextended
	display: grid
	grid-template-columns: 10% 1fr
	grid-template-rows: auto
	grid-template-areas: "extend1 extend2"
	grid-auto-flow: row
	gap: 16px 32px
.extend1
	grid-area: extend1
.extend2
	grid-area: extend2

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
		grid-template-columns: 24% 1fr
		margin-top: 16px
		border-bottom: 1px solid #d7d7d7
		padding-bottom: 12px
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
		.insmall pre
			font-size: 12px
			text-transform: uppercase
			color: #878787
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