<script lang="ts">
import { onMount } from 'svelte';
import supabase from '$lib/db'
import IKS from '$lib/components/books/IKS.svelte'
import Bodhas from '$lib/components/books/Bodhas.svelte'
import Scripture from '$lib/components/books/Scripture.svelte'
import Other from '$lib/components/books/Other.svelte'
import Aryan from '$lib/components/books/Aryan.svelte'

let isEss = false
export let selectedItem = 0;

let selectedImage: null = null;
let selectedDesc: null = null
let selectedLink:null = null
let data: any[] = []
function toggleEss(){
	isEss = !isEss
}

const displayImage = async (imagelinker: any) => {
    if (imagelinker) {
      const { data, error } = await supabase
        .from('brhat-openlibrary')
        .select()
        .eq('imagelinker', imagelinker);

      if (error) {
        console.log(error);
      } else {
        selectedImage = data[0].imagelinker;
				selectedDesc = data[0].Description
				selectedLink = data[0].slug
      }
    } else {
      selectedImage = null;
			selectedDesc = null
			selectedLink = null
    }
  };

export async function getEss(){
	const { data: essData, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Essentials')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	data = essData
	return data
}
  onMount(() => {
    displayImage(data[selectedItem].imagelinker);
		displayImage(data[selectedItem].Description);
		displayImage(data[selectedLink].slug)
  });

</script>

<div class="flexbox-c lm1 desk-margins-cut">
<h4>BROWSE THE LIBRARY:</h4>
</div>
<div class="flexbox-r desk-margins l0">
	<div class="in-col left-col link-heads">
		<h5 id='class-1' class="w400" on:click={toggleEss} on:keydown={toggleEss}>Essentials</h5>
		<h5 id='class-2' class="w400">Two Bodhas</h5>
		<h5 id='class-3' class="w400">Indian Knowlege Systems</h5>
		<h5 id='class-4' class="w400">Scriptural</h5>
		<h5 id='class-5' class="w400">History</h5>
		<h5 id='class-6' class="w400">Other</h5>
		<h5 id='class-6' class="w400">The Āryan Issue</h5>
		<h5 id='class-6' class="w400">Reading Room</h5>
	</div>
	<div class="in-col mid-col">
		{#if isEss}
		<div class="in-col list-of-books">
			{#await getEss()}
				<small class="white">.</small>
				{:then data}
				{#each data as item}
				<p on:click={() => displayImage(item.imagelinker)} on:keydown={() => displayImage(item.imagelinker)}>{item.Text}</p>
				{/each}
				{:catch error}
				<pre>{error}</pre>
			{/await}
		</div>
		{/if}
	</div>
	<div class="in-col right-col">
		{#if selectedImage}
			<div class="in-col details-col">
				<button class="redbutton"><a href="/openlibrary/books/{selectedLink}">Read Now</a></button>
      	<img src={selectedImage} alt="selected" />
				<small>{selectedDesc}</small>
			</div>
    {:else}
      <small class="white">.</small>
    {/if}
	</div>
</div>
<div class="flexbox-c full desk-margins l1">
	<h4 class="wide75 m-bot-24">
		Bṛhat Open Library is an Online Repository for Texts, Papers, Learning Material and More.
	</h4>
	<p class="wide75">
	It is a tribute to the hard labor of people known and unknown that have created for us an unbelievable repository of Indian knowledge. All material here is sourced from public domains, permitted for resharing, and uploaded under the CC0 1.0 Open License. If you find any material that violates this, please write to us at contact@brhat.in and we will remove it from the collection. New books added every week.
	</p>
	<h5 class="m-top-24">Special Sections:</h5>
	<div class="in-row sectionsrow gap32">
		<div class="in-col wide33 all-cc m-top-24 section">
			<img src="/images/bol/aryanissue2.png" alt="sectioner" />
			<h6><a href="/openlibrary/specials/aryanissue">The Āryan Issue</a></h6>
		</div>
		<div class="in-col wide33 all-cc m-top-24 section">
			<img src="/images/bol/ros.webp" alt="sectioner" />
			<h6>Repository of Scripture</h6>
		</div>
		<div class="in-col wide33 all-cc m-top-24 section">
			<img src="/images/bol/readingwall2.webp" alt="sectioner" />
			<h6>The Reading Room</h6>
		</div>
	</div>
</div>

<style>

.left-col { width: 25%;}
.mid-col { 
	border-right: 1px solid #d7d7d7;
	border-left: 1px solid #d7d7d7;
	width: 35%;
	padding: 0 16px;
}
.right-col {
	width: 40%;
	padding: 0 16px 0 40px;
}

.right-col img {
	object-fit: contain;
	height: 64vh;
	margin-right: auto;
}

.link-heads h5, .mid-col p { transition: all 0.05s var(--cubec); cursor: pointer;}
.link-heads h5:hover { background: #474747; color: white;}
.mid-col p:hover { background: #272727; color: #fe4a49;}
@media screen and (min-width: 900px) {
	.lm1 { margin-top: 120px; padding-bottom: 4px; border-bottom: 1px solid #f1f1f1;}
	.l0 {
		margin-top: 20px;
		align-items: flex-start;
		min-height: 50vh;
		padding-bottom: 64px;
	}
	.l1 { margin-top: 48px;}
	.mid-col { height: max-content;}
	.link-heads h5 {
		border-bottom: 1px solid #f1f1f1;
		padding-bottom: 8px;
		padding-top: 8px;
		padding-left: 16px;
		margin: 0;
		font-size: 20px;
	}
	.mid-col p {
		border-bottom: 1px solid #f1f1f1;
		padding-bottom: 8px;
		padding-top: 8px;
		padding-left: 16px;
		margin: 0;
	}
	.details-col img {
		margin-bottom: -240px;
	}
	.details-col small {
		background: rgba(0,0,0,0.9);
		color: white;
		padding: 16px;
		margin-left: 32px;
		line-height: 1.4;
	}
	.sectionsrow { margin-top: 12px;}
	.section {
		height: 160px;
		align-items: flex-start;
	}
	.section img { 
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	.section h6 { text-align: left; margin-top: 16px;}
}
</style>
