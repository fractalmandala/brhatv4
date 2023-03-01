<script lang="ts">
import { onMount } from 'svelte';
import ThinBar from '$lib/components/pagecomps/ThinBar.svelte'
import { reveal } from 'svelte-reveal'
import { fly } from 'svelte/transition'
import { quadOut } from 'svelte/easing'

import supabase from '$lib/db'


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

<svelte:window bind:scrollY={ax}/>
<ThinBar></ThinBar>
<div class="box-r wrap h100 m-mid x1">
	<div class="box-c h100p wd2 b-l">
		<h4 class="wide75 tree m-bot-24">
		Bṛhat Open Library is an Online Repository for Texts, Papers, Learning Material and More.
		</h4>
		<p class="wide75 grey">
			It is a tribute to the hard labor of people known and unknown that have created for us an unbelievable repository of Indian knowledge. All material here is sourced from public domains, permitted for resharing, and uploaded under the CC0 1.0 Open License. If you find any material that violates this, please write to us at contact@brhat.in and we will remove it from the collection. New books added every week.
		</p>
	</div>
	<div class="box-c imageholder h100p wd2 b-r">
		<img src="/images/herocovers/bolherobrhat.webp" alt="reading"/>
	</div>
</div>

<div class="box-c x2 m-mid">
	<h3 class="lining" data-textify>Browse the Library</h3>
</div>

<div class="box-r m-mid h100 pad80-t gap3 x3">
	<div class="box-c left-col link-heads">
		<h5 id='class-1' class="w600 upper" on:click={toggleEss} on:keydown={toggleEss}>Essentials</h5>
		<h5 id='class-2' class="w600 upper" on:click={toggleBodha} on:keydown={toggleBodha}>Two Bodhas</h5>
		<h5 id='class-3' class="w600 upper" on:click={toggleIKS} on:keydown={toggleIKS}>Indian Knowledge Systems</h5>
		<h5 id='class-5' class="w600 upper" on:click={toggleHis} on:keydown={toggleHis}>History</h5>
	</div>
	<div class="box-c mid-col">
		{#if isEss}
		{#await getEss()}
		<small>...</small>
		{:then data}
		{#each data as item, i}
			<div class="box-c txt22" id="ess" use:reveal={{transition: "slide", delay: 10*i}}>
				<p class="w500 grey2" on:click={() => showImage(item.imagelinker)} on:keydown={() => showImage(item.imagelinker)}>{item.Text}</p>
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
			<div class="box-c txt22" id="ess" use:reveal={{transition: "fly"}}>
				<p class="w500 grey2" on:click={() => showImage(item.imagelinker)} on:keydown={() => showImage(item.imagelinker)}>{item.Text}</p>
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
		<div class="box-c txt22" id="bodha" use:reveal={{transition: "fly"}}>
			<p class="w500 grey2" on:click={() => showImage(item.imagelinker)} on:keydown={() => showImage(item.imagelinker)}>{item.Text}</p>
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
		<div class="box-c txt22" id="bodha" use:reveal={{transition: "fly"}}>
			<p class="w500 grey2" on:click={() => showImage(item.imagelinker)} on:keydown={() => showImage(item.imagelinker)}>{item.Text}</p>
		</div>	
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
		{/if}

	</div>
	<div class="box-c right-col">
		{#if selectedImage}
			<div class="box-c details-col" in:fly={{ delay: 200, duration: 200, x: 400, y: 0, easing: quadOut}} out:fly={{ delay: 0, duration: 200, x: -400, y: 0, easing: quadOut}}>
				<p class="grey2">{selectedDesc}</p>
					<div class="box-c deets-l">
						<button class="treebutton"><a href="/openlibrary/books/{selectedLink}">Read Now</a></button>
					</div>
				<small>{selectedAuth}</small>
			</div>
    	{:else}
      	<small class="white">.</small>
    {/if}
	</div>
</div>

<div class="box-c m-mid x4">
	<h3 class="lining" data-textify>Special Sections</h3>
	<div class="box-r h100p wrap gap3 m-sm specialsrow">
		<div class="w500 box-c wd3 col3">
			<h6 class="tree"><a href="/openlibrary/specials/aryanissue">The Āryan Issue</a></h6>
			<p class="grey">
				A collection of books, articles, and research findings on the matter of Indo-European linguistic origins and dispersals. This is intended as a yeoman's service to have one-point of reference on the whole Aryan invasion/migration/trickling-in debate.
			</p>
		</div>
		<div class="w500 box-c wd3 col3">
			<h6 class="tree">Repository of Scripture</h6>
			<p class="grey">
				Bringing together all public-domain translations and Sanskrit versions of Hindu scripture- Veda, Purāṇa, Śāstra and more.
			</p>
		</div>
		<div class="w500 box-c wd3 col3">
			<h6 class="tree"><a href="/openlibrary/reader">The Reading Room</a></h6>
			<p class="grey">
				A unique section that is built for individual discovery paths. Think of the Reading Room as a way to synaptically reconnect with the civilizational consciousness. Begin now!
			</p>
		</div>
	</div>
</div>




<style>
.x1, .x3, .x2, .x4 { overflow-x: hidden; width: 100%}
.x4, .x3, .x2 { background: white; z-index: 2;}
.left-col { width: 25%;}

.txt22 p {
	cursor: pointer;
	transform-origin: center left;
	transition: all 0.05s ease;
	margin: 0;
	padding: 4px;
	border-bottom: 1px solid #f1f1f1;
}
.txt22 p:hover { color: var(--tree); cursor: pointer; transform: scale(0.9);}
.details-col small {
	background: var(--tree);
	color: white;
	padding: 4px;
	width: max-content;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0px;
	font-weight: 600;
}
.x3 { background: white;}
.link-heads h5 { cursor: pointer; position: relative;}
.link-heads h5:hover { background: var(--beau); color: white;}
.x4 .col3 { transform-origin: center center; transition: all 0.6s ease; overflow: hidden;}
.lining {
	border-left: 4px solid var(--tree);
	color: #a7a7a7;
}
.link-heads h5::before {
	position: absolute;
	top: 0;
	left: 0;
	content: '';
	height: 100%;
	border-bottom: 4px solid var(--tree);
	z-index: 0;
}
.link-heads h5:hover::before {
	animation: yellowline 0.4s var(--cubeb) forwards;
}
@keyframes yellowline {
	0% { width: 0%;}
	100% {width: 100%;}
}

@media screen and (min-width: 900px) {
	.deets-l { width: 40%;}
	.link-heads h5 { padding: 8px; margin: 0; border-bottom: 1px solid #d7d7d7; padding-left: 16px;}
	.x1 { height: 100vh; width: 100%; position: sticky; top: 0;}
	.x1 .box-c { justify-content: flex-end; padding-left: 16px;}
	.x1 .box-c .grey { margin-bottom: 128px; color: #b7b7b7;}
	.x1 .imageholder img { object-fit: cover; height: 100%; width: 100%; object-position: 99% center;}
	.x2 { padding-bottom: 4px; width: 100%; background: white; background: white;}
	.x3 {
		align-items: flex-start;
		height: 100%;
		border-bottom: 1px solid #d7d7d7;
		padding-bottom: 64px;
	}

	.mid-col, .left-col, .right-col { height: max-content; background: white; z-index: 2;}

	.mid-col { 
		width: 40%; 
		padding: 0 16px;
		overflow-y: scroll;
	}
	.left-col { width: 32%;}
	.right-col { width: 28%; }
	.treebutton { margin-bottom: 24px;}
	.details-col { padding: 32px;border: 1px solid #d7d7d7; border-radius: 4px;}
	.col3 { height: 100%; position: relative;transform-origin: center center; transition: all 0.1s var(--cubed);}

	.x4 { padding-top: 80px; padding-bottom: 80px; gap: 24px; height: 100%; align-items: flex-start; border-bottom: 1px solid #d7d7d7; }
	.x4 .lining { padding-left: 16px;}
	.specialsrow { width: 100%;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
		.x1 .imageholder img { object-fit: cover; height: 100%; width: 100%; object-position: 20% center;}
		.x1 .box-c { height: 100%; padding-left: 16px; padding-right: 16px; justify-content: center;}
		.x1 { padding-bottom: 0; padding-top: 80px;}
		.imageholder { height: 88vh !important;}
	
	
}
@media screen and (min-width: 576px) and (max-width: 767px) {
	.x1 .b-r { order: 1; }
	.imageholder img { object-fit: cover; height: 100%; width: 100%; object-position: center center;}
	.x1 .b-l { order: 2; padding-top: 32px;}
	.x1 { width: 100vw; padding-top: 72px;}
	.x2, .x3 { display: none;}

	.specialsrow { margin-bottom: 32px;}
	

}

@media screen and (max-width: 575px) {
	.x1 .imageholder { 
		order: 1;
		height: 40vh;
	}
	.imageholder img {
		object-fit: cover;
		height: 100%;
		object-position: center center;
	}
	.x1 .b-l {
		order: 2;
		height: 100%;
		padding-top: 24px;
	}
	.x1 { min-height: 100vh; padding-top: 64px; width: 100vw;}
	.x3, .x2 { display: none;}

	.specialsrow .col3 { padding: 0;}

	
}
</style>
