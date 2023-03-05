<script lang="ts">
import { onMount } from 'svelte';
import ThinBar from '$lib/components/pagecomps/ThinBar.svelte'
import BolSearch from '$lib/components/reuse/BolSearch.svelte'
import BolSearch2 from '$lib/components/reuse/BolSearch.svelte'
import { reveal } from 'svelte-reveal'
import { fly } from 'svelte/transition'
import { quadOut } from 'svelte/easing'
let isShow = false
import supabase from '$lib/db'
let inputTerm:any
let isMode = false
let isEss = false
let isIKS = false
let isBodha = false
let isHis = false
let isRos = false
let ax = 1
let selectedImage:any = null
let selectedDesc:any = null
let selectedLink:any = null
let selectedAuth:any = null
let data:any = []

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
function toggleShow(){
	isShow = !isShow
}

function toggleMode(){
	isMode = !isMode
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


	<div class="traybox wrap y-full x2">
		<div class="ww2 x2left">
			<h4 class="wide75 tree">
			Bṛhat Open Library is an Online Repository for Texts, Papers, Learning Material and More.
			</h4>
			<p class="wide75">
				It is a tribute to the hard labor of people known and unknown that have created for us an unbelievable repository of Indian knowledge. All material here is sourced from public domains, permitted for resharing, and uploaded under the CC0 1.0 Open License. If you find any material that violates this, please write to us at contact@brhat.in and we will remove it from the collection. New books added every week.
			</p>
		</div>
	
		<div class="ww2 imageholder">
			<img src="/images/herocovers/bolherobrhat.webp" alt="reading"/>
		</div>
	</div>

<div class="pad-a x22">

	<div class="the-title y-full x23">
		<h2>Browse the Library</h2>
		<div class="traybox wrap x24">
			<div class="ww3 card" id="categories">
				<h5 id='class-1' on:click={toggleEss} on:keydown={toggleEss}>Essentials</h5>
				<h5 id='class-2' on:click={toggleBodha} on:keydown={toggleBodha}>Two Bodhas</h5>
				<h5 id='class-3' on:click={toggleIKS} on:keydown={toggleIKS}>Indian Knowledge Systems</h5>
				<h5 id='class-5' on:click={toggleHis} on:keydown={toggleHis}>History</h5>
			</div>
			<div class="ww3" id="books">
				{#if isEss}
				{#await getEss()}
				<small>...</small>
				{:then data}
				{#each data as item, i}
					<div class="boxc card" id="ess" use:reveal={{transition: "slide", delay: 10*i}}>
						<p on:click={() => showImage(item.imagelinker)} on:keydown={() => showImage(item.imagelinker)} on:click={toggleMode} on:keydown={toggleMode}>{item.Text}</p>
					</div>
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
					<div class="boxc card" id="ess" use:reveal={{transition: "fly"}}>
						<p on:click={() => showImage(item.imagelinker)} on:keydown={() => showImage(item.imagelinker)}>{item.Text}</p>
					</div>
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
				<div class="boxc card" id="bodha" use:reveal={{transition: "fly"}}>
					<p on:click={() => showImage(item.imagelinker)} on:keydown={() => showImage(item.imagelinker)}>{item.Text}</p>
				</div>	
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
				<div class="boxc card" id="bodha" use:reveal={{transition: "fly"}}>
					<p on:click={() => showImage(item.imagelinker)} on:keydown={() => showImage(item.imagelinker)}>{item.Text}</p>
				</div>	
				{/each}
				{:catch error}
				<pre>{error}</pre>
				{/await}
				{/if}

			</div>
			<div class="ww3" id="layout">
				{#if isMode}
				{#if selectedImage}
				<div class="boxc card details-col" in:fly={{ delay: 200, duration: 200, x: 400, y: 0, easing: quadOut}} out:fly={{ delay: 0, duration: 200, x: -400, y: 0, easing: quadOut}} on:click={showImage} on:keydown={showImage}>
					<img src={selectedImage} alt={selectedDesc}/>
					<p>{selectedDesc}</p>
					<div class="boxc deets-l">
						<button class="treebutton"><a href="/openlibrary/books/{selectedLink}">Read Now</a></button>
						</div>
					<cite>{selectedAuth}</cite>
				</div>
    		{:else}
      	<small class="white">.</small>
    		{/if}
				{/if}
			</div>
		</div>
	</div>

	<div class="the-title y-quart x33">
		<h2>Special Sections</h2>
		<div class="traybox wrap">
			<div class="ww3 card">
				<h6 class="tree"><a href="/openlibrary/specials/aryanissue">The Āryan Issue</a></h6>
				<p>
					A collection of books, articles, and research findings on the matter of Indo-European linguistic origins and dispersals. This is intended as a yeoman's service to have one-point of reference on the whole Aryan invasion/migration/trickling-in debate.
				</p>
			</div>
			<div class="ww8"></div>
			<div class="ww3 card">
				<h6 class="tree"><a href="/openlibrary/reader">Repository of Scripture</a></h6>
				<p>
				Bringing together all public-domain translations and Sanskrit versions of Hindu scripture- Veda, Purāṇa, Śāstra and more.
				</p>
			</div>
		</div>
	</div>

</div>


<style>

.card h5:hover {
	border-left-color: var(--tree);
	border-left-width: 8px;
}
.x2 { overflow-x: hidden; width: 100%;}
.x2 { background: white; z-index: 2;}


#books .card p { margin: 0; color: #272727; cursor: pointer; font-weight: 400; border-bottom: 1px solid #d7d7d7;}
#books .card p:hover { color: var(--tree); font-weight: 600;}
@media screen and (min-width: 900px) {

	.deets-l { width: 40%;}
	#books .card p {
		padding: 6px 0;
		font-size: 1rem;
	}
	.x1 .imageholder img { object-fit: cover; height: 100%; width: 100%; object-position: 99% center;}
	.x2 { height: 100vh;}
	.x2left { padding-left: 64px;}
	.x2 .ww2 { height: 100%; justify-content: center;}
	.x2 .ww2 img { height: 100%; object-fit: cover; object-position: center left;}

	.treebutton { margin-bottom: 24px;}
	.details-col { padding: 32px;border: 1px solid #d7d7d7; border-radius: 4px;}

}

@media screen and (max-width: 899px) and (min-width: 768px) {
		.x1 .imageholder img { object-fit: cover; height: 100%; width: 100%; object-position: 20% center;}
		.imageholder { height: 88vh !important;}
		.x2 { height: 100vh;}
}
@media screen and (min-width: 576px) and (max-width: 767px) {

	.imageholder img { object-fit: cover; height: 100%; width: 100%; object-position: center center;}
	.x2 { height: 100vh;}

	

}

@media screen and (max-width: 575px) {
	.imageholder img {
		object-fit: cover;
		height: 100%;
		object-position: center center;
	}

	.x2 { min-height: 100vh;}
	.imageholder { order: 1; height: 50vh; margin-top: 56px;}
	.x2left { order: 2; padding: 24px;}
	#books { overflow-y: scroll;}
	#books .card p { font-size: 1rem; padding: 8px 0;}
	.x23 { position: relative;}
	.details-col {
		position: fixed;
		top: 56px;
		height: calc(100vh - 56px);
		left: 0;
		background: white;
		z-index: 100;
		width: calc(100vw - 24px);
		padding: 16px;
	}

	
}
</style>
