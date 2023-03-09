<script lang="ts">
import { reveal } from 'svelte-reveal'
import { fly } from 'svelte/transition'
import { quadOut } from 'svelte/easing'
import supabase from '$lib/db'
let isEss = false
let isIKS = false
let isBodha = false
let isHis = false
let selectedImage:any = null
let selectedDesc:any = null
let selectedLink:any = null
let selectedAuth:any = null

const showImage = async (imagelinker:any) => {
	if (imagelinker) {
		const { data,error} = await supabase
		.from('brhat-openlibrary')
		.select()
		.eq('imagelinker',imagelinker)
		if (error) {
        console.log(error);
      } else {
        selectedImage = data[0].imagelinker;
				selectedDesc = data[0].Description
				selectedLink = data[0].slug
        selectedAuth = data[0].author
      }
    } else {
      selectedImage = null;
			selectedDesc = null
			selectedLink = null
      selectedAuth = null
  }
}


function nuller(){
	selectedImage = null
}

export async function getEss(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Essentials')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}


function toggleEss(){
	isEss = !isEss
	if ( isIKS == true) {
		isIKS = false
	}
	if ( isBodha == true) {
		isBodha = false
	}
	if (isHis == true) {
		isHis = false
	}
}

function toggleIKS(){
	isIKS = !isIKS
	if ( isEss == true) {
		isEss = false
	}
	if ( isBodha == true) {
		isBodha = false
	}
	if (isHis == true) {
		isHis = false
	}
}

function toggleBodha(){
	isBodha = !isBodha
	if ( isIKS == true) {
		isIKS = false
	}
	if ( isEss == true) {
		isEss = false
	}
	if (isHis == true) {
		isHis = false
	}
}

function toggleHis(){
	isHis = !isHis
	if ( isIKS == true) {
		isIKS = false
	}
	if ( isBodha == true) {
		isBodha = false
	}
	if (isEss == true) {
		isEss = false
	}
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


export async function getHis(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','History')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}

</script>


<div class="boxc back-image x2 section-pads" style="background-image: url('/images/herocovers/bolherobrhat.webp')">
	<div class="boxc wide75">
		<h4>
			Bṛhat Open Library is an Online Repository for Texts, Papers, Learning Material and More.
		</h4>
		<p>
			It is a tribute to the hard labor of people known and unknown that have created for us an unbelievable repository of Indian knowledge. All material here is sourced from public domains, permitted for resharing, and uploaded under the CC0 1.0 Open License. If you find any material that violates this, please write to us at contact@brhat.in and we will remove it from the collection. New books added every week.
		</p>
	</div>
</div>

<div class="pad-a">
	<div class="containerbol section-pads">
  	<div class="categories">
			<h6 id='class-1' on:click={toggleEss} on:keydown={toggleEss}>Essentials</h6>
			<h6 id='class-2' on:click={toggleBodha} on:keydown={toggleBodha}>Two Bodhas</h6>
			<h6 id='class-3' on:click={toggleIKS} on:keydown={toggleIKS}>Indian Knowledge Systems</h6>
			<h6 id='class-5' on:click={toggleHis} on:keydown={toggleHis}>History</h6>
		</div>
  	<div class="books">
		{#if isEss}
			{#await getEss()}
			<small>...</small>
			{:then data}
			{#each data as item}
			<p on:click={() => showImage(item.imagelinker)} on:keydown={() => showImage(item.imagelinker)}>{item.Text}</p>
			{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		{/if}
		{#if isIKS}
			{#await getIKS()}
			<small>...</small>
			{:then data}
			{#each data as item}
			<p on:click={() => showImage(item.imagelinker)} on:keydown={() => showImage(item.imagelinker)}>{item.Text}</p>
			{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		{/if}
		{#if isBodha}
			{#await getBodhas()}
			<small>...</small>
			{:then data}
			{#each data as item}
			<p on:click={() => showImage(item.imagelinker)} on:keydown={() => showImage(item.imagelinker)}>{item.Text}</p>
			{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		{/if}
		{#if isHis}
			{#await getHis()}
			<small>...</small>
			{:then data}
			{#each data as item}
			<p on:click={() => showImage(item.imagelinker)} on:keydown={() => showImage(item.imagelinker)}>{item.Text}</p>
			{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		{/if}
		</div>
		{#if selectedImage}
  	<div class="book" in:fly={{ delay: 100, duration: 100, x: 500, y: 0, easing: quadOut}} out:fly={{ delay: 0, duration: 80, x: 500, y: 0, easing: quadOut}}>
			<div class="point closebook" on:click={nuller}>
				<p>CLOSE</p>
			</div>
			<div class="bookdata">
				<p>{selectedDesc}</p>
			</div>
    	<div class="bookimage">
				<div class="theimage">
					<img src={selectedImage} alt={selectedDesc}/>
				</div>
				<div class="thedata">
					<small>{selectedAuth}</small>
					<button class="treebutton"><a href="/openlibrary/books/{selectedLink}">Read Now</a></button>
				</div>
			</div>
  	</div>
		{:else}
		<small class="white">.</small>
		{/if}
	</div>
</div>

<style lang="sass">

.x2
	height: 100vh
	justify-content: flex-end
	.boxc
		background: rgba(0,0,0,0.8)
		backdrop-filter: blur(5px)
		padding: 8px 16px
		h4, p
			color: white
		h4
			font-weight: 600

.containerbol 
	display: grid 
	grid-template-columns: 280px auto 1fr 
	grid-template-rows: auto
	gap: 0px 48px 
	grid-auto-flow: row 
	grid-template-areas: "categories books book" 
	min-height: 100vh
.categories 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." 
	grid-area: categories 
	align-content: start
	width: 280px
	h6
		font-size: 1.2rem
		font-weight: 400
		cursor: pointer
		border-bottom: 1px solid #d7d7d7
		margin: 0
		padding: 12px 0 12px 12px
		border-left-width: 6px
		border-left-style: solid
		border-left-color: transparent
		transition: all 0.11s var(--cubea)
		&:hover
			border-left-color: var(--tree)
			border-bottom: 1px solid #b7b7b7
.books 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." 
	grid-area: books 
	align-content: start
	p
		margin: 0
		color: #676767
		font-size: 0.96rem
		padding: 2px 8px
		border-bottom: 1px solid #d7d7d7
		transition: all 0.08s var(--cubeb)
		cursor: pointer
		&:hover
			background-color: var(--tree)
			color: white
.book 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto auto auto
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "closebook" "bookimage" "bookdata" 
	grid-area: book 
	border: 1px solid #f7f7f7
	padding: 32px
	border-radius: 4px
	background-color: #f7f7f7
	box-shadow: 3px 5px 8px #e1e1e1, -3px -5px 6px #f1f1f1
	transition: all 0.18s var(--cubec)
	align-items: start
	align-content: start
	height: max-content
	&:hover
		box-shadow: 0px 0px 0px #e1e1e1, 0px 0px 0px #f1f1f1
.closebook
	grid-area: closebook
	height: max-content
	p
		margin-top: 0
		text-align: right
		font-size: 12px
		font-weight: bold
.bookimage 
	grid-area: bookimage
	display: grid
	grid-template-columns: 1fr
	grid-template-rows: auto auto
	grid-template-areas: "theimage" "thedata"
.theimage
	grid-area: theimage
	padding: 16px
.thedata
	grid-area: thedata
	display: flex
	flex-direction: column
	padding: 16px
	small
		margin: 0
		text-transform: uppercase
		font-weight: bold
.bookdata 
	grid-area: bookdata 
	height: max-content
	p
		font-size: 0.85rem

@media screen and (min-width: 1200px)
	.theimage
		img
			object-fit: contain
			width: 50%

@media screen and (max-width: 1199px) and (min-width: 768px)
	.theimage img
		width: 80%
	.containerbol
		grid-template-columns: auto auto auto

@media screen and (max-width: 767px)
	.x2
		background-position: center left
	.containerbol
		grid-template-columns: 1fr
		grid-template-rows: auto auto auto
		gap: 32px 0px 
		grid-template-areas: "categories" "books" "book" 
		height: max-content
		align-items: start
		align-content: start
		padding-bottom: 64px
	.categories
		width: 100%
		height: max-content
	.books
		align-items: start
		align-content: start
		height: max-content
	.bookimage
		grid-template-columns: 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: "theimage thedata"
		gap: 0px 24px
	.theimage
		img
			object-fit: contain
			width: 100%
	.treebutton
		margin-top: 24px

</style>