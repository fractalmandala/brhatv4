<script lang="ts">
import supabase from '$lib/db'
import { slide } from 'svelte/transition'
import { quadIn } from 'svelte/easing'

let isEssential: boolean
let isIKS: boolean
let isBodha: boolean
let isHistory: boolean
let isOthers: boolean

function toggleEssential(){
	isEssential = !isEssential
}

function toggleIKS(){
	isIKS = !isIKS
}

function toggleBodha(){
	isBodha = !isBodha
}

function toggleHistory(){
	isHistory = !isHistory
}

function toggleOthers(){
	isOthers = !isOthers
}

export async function getEssentials(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Essentials')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function getIKS(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','IKS')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function getBodhas(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Bodhas')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function getHistory(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','History')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function getOthers(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.or('Type.eq.Academic Papers,Type.eq.Scriptural, Type.eq.Sanskrit')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

export async function getAll(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

</script>

<div class="r-r-c-c" id="parent">
	<div class="c-c-c-c sidebar" id="sidebar">
		<p class="mainline"><a href="/openlibrary/reader/rigveda">Ṛgveda</a></p>
		<p class="mainline"><a href="/openlibrary/category/aryanissue">The Āryan Issue</a></p>
		<p class="mainline"><a href="/openlibrary/reader/rigveda">Repository of Scripture</a></p>
		<div class="liner"></div>
		{#await getEssentials()}
		<small>...</small>
		{:then data}
			<li class="sub-menu"><a href="javascript:void(0)" on:click={toggleEssential}>Essentials</a>
				{#if isEssential}
				<ul class="show" transition:slide={{duration: 500, easing: quadIn}}>
					{#each data as item}
						<li class="in-sub"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></li>
					{/each}
				</ul>
				{/if}
			</li>
		{:catch error}
		<pre>{error}</pre>
		{/await}
		<div class="liner"></div>
		{#await getIKS()}
		<small>...</small>
		{:then data}
			<li class="sub-menu"><a href="javascript:void(0)" on:click={toggleIKS}>IKS</a>
				{#if isIKS}
				<ul class="show" transition:slide={{duration: 500, easing: quadIn}}>
					{#each data as item}
						<li class="in-sub"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></li>
					{/each}
				</ul>
				{/if}
			</li>
		{:catch error}
		<pre>{error}</pre>
		{/await}
		<div class="liner"></div>
		{#await getBodhas()}
		<small>...</small>
		{:then data}
			<li class="sub-menu"><a href="javascript:void(0)" on:click={toggleBodha}>The Two Bodhas</a>
				{#if isBodha}
				<ul class="show" transition:slide={{duration: 500, easing: quadIn}}>
					{#each data as item}
						<li class="in-sub"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></li>
					{/each}
				</ul>
				{/if}
			</li>
		{:catch error}
		<pre>{error}</pre>
		{/await}
		<div class="liner"></div>
		{#await getHistory()}
		<small>...</small>
		{:then data}
			<li class="sub-menu"><a href="javascript:void(0)" on:click={toggleHistory}>History</a>
				{#if isHistory}
				<ul class="show" transition:slide={{duration: 500, easing: quadIn}}>
					{#each data as item}
						<li class="in-sub"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></li>
					{/each}
				</ul>
				{/if}
			</li>
		{:catch error}
		<pre>{error}</pre>
		{/await}
		<div class="liner"></div>
		{#await getOthers()}
		<small>...</small>
		{:then data}
			<li class="sub-menu"><a href="javascript:void(0)" on:click={toggleOthers}>Others</a>
				{#if isOthers}
				<ul class="show" transition:slide={{duration: 500, easing: quadIn}}>
					{#each data as item}
						<li class="in-sub"><a href="/openlibrary/books/{item.slug}">{item.Text}</a></li>
					{/each}
				</ul>
				{/if}
			</li>
		{:catch error}
		<pre>{error}</pre>
		{/await}
		<div class="liner"></div>
	</div>
	<div class="c-c-c-c" id="content-box">
		<h5>
			Bṛhat Open Library is an Online Repository for Texts, Papers, Learning Material and More.
		</h5>
		<p>
			It is a tribute to the hard labor of people known and unknown that have created for us an unbelievable repository of Indian knowledge. Read more on our sources and credits here.
		</p>
		{#await getAll()}
		<small>...</small>
		{:then data}
		<div class="r-r-r-r" id="books-box">
			{#each data as item}
			<div class="r-r-r-r item-box" data-aos="zoom-in-up">
				<div class="c-c-c-c image-box">
					<img src={item.imagelinker} alt={item.Text} />
				</div>
				<div class="c-c-c-c text-box">
					<p><a href="/openlibrary/books/{item.slug}"><b>{item.Text}</b></a></p>
					<small>{item.Description}</small>
					<small class="auth">{item.author}</small>
				</div>
			</div>
			{/each}
		</div>
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>
</div>

<style lang="sass">
.r-r-c-c
	width: 100vw
	min-height: 100vh
	background: white

ul, li
	list-style-type: none
	margin: 0
	padding: 0

li.active ul
	display: block

li a
	color: #676767
	display: block
	padding: 0.5em 0
	font-size: 18px
	font-weight: 400
	outline: 0
	transition: all 0.2s ease-in

.mainline a 
	color: #474747
	display: block
	padding: 0
	margin: 0
	font-size: 18px
	font-weight: 600
	outline: 0
	transition: all 0.2s ease-in

.mainline a:hover 
	color: #fe4a49

li a:hover
	color: #fe4a49

li ul li
	margin-bottom: 0
	margin-left: 0
	margin-right: 0
	border-bottom: none

ul li a
	padding-top: 4px
	padding-bottom: 4px
	font-size: 15px

.liner 
	height: 1px
	width: 72%
	background-color: #e7e7e7

.image-box img
	object-fit: contain
	width: 100%

.text-box p:hover a
	color: #fe4a49

.text-box small
	color: #878787
	font-size: 12px

.auth
	text-transform: uppercase
	font-weight: bold
	margin-top: 0.5em
	color: #255F85 !important

@media screen and (min-width: 900px)

	#parent
		padding-top: 96px
		height: 100%		

	.sidebar
		width: 25%
		border-right: 1px solid #e7e7e7
		padding-left: 2em
		padding-right: 1em
		position: sticky
		left: 0
		top: 128px
		height: 100%
		padding-bottom: 4em

	#content-box
		width: 75%
		padding-left: 3vw
		padding-right: 3vw
		padding-bottom: 4em

	.mainline
		margin-bottom: 1em
		margin-top: 0

	#books-box
		flex-wrap: wrap
		width: 100%
		gap: 4em
		padding-top: 2em

	.item-box
		width: calc(50% - 3em)
		padding: 1em
		border-radius: 8px
		transition: all 0.21s var(--cube3)

	.item-box:hover
		box-shadow: 6px 6px 8px #f1f1f1, -6px -6px 8px #f7f7f7

	.image-box
		width: 30%

	.text-box
		width: 70%
		padding: 0 1em
		justify-content: flex-start

	.text-box p
		margin-top: 0
		margin-bottom: 0.5em
		font-size: 1.12em
</style>