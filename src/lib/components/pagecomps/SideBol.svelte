<script>
import supabase from '$lib/db'
import { fly } from 'svelte/transition'
import { quartIn } from 'svelte/easing'
export async function bolOne(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Bodhas')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}
export async function bolTwo(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Essentials')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}
export async function bolThree(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','IKS')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}
export async function bolFour(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.or('Type.eq.History,Type.eq.Scriptural')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}
/**
	 * @param {string | number | boolean} url
	 */
function shareOnFacebook(url) {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
}

/**
	 * @param {string | number | boolean} url
	 */
function shareOnLinkedIn(url) {
  return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`;
}

/**
	 * @param {string | number | boolean} url
	 * @param {string | number | boolean} text
	 */
function shareOnTwitter(url, text) {
  return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
}

/**
	 * @param {string} url
	 * @param {string | undefined} [text]
	 */
function shareOnWhatsApp(url, text) {
  return `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
}

</script>
<div class="in-col sidebar">
	<div class="in-row">
		<div class="flexbox-c icon-box" id="icon-twitter" on:click={() => window.open(shareOnTwitter("https://example.com", "Check out this page!"))} on:keydown={() => window.open(shareOnTwitter("https://example.com", "Check out this page!"))}>
			<img src="/images/icons/twitter-red.png" alt="twitter icon" />
		</div>
		<div class="flexbox-c icon-box" id="icon-facebook" on:click={() => window.open(shareOnFacebook("https://example.com"))} on:keydown={() => window.open(shareOnFacebook("https://example.com"))}>
			<img src="/images/icons/facebook-red.png" alt="facebook icon" />
		</div>
		<div class="flexbox-c icon-box" id="icon-linkedin" on:click={() => window.open(shareOnLinkedIn("https://example.com"))} on:keydown={() => window.open(shareOnLinkedIn("https://example.com"))}>
			<img src="/images/icons/linkedin-red.png" alt="linkedin icon" />
		</div>
		<div class="flexbox-c icon-box" id="icon-whatsapp" on:click={() => window.open(shareOnWhatsApp("https://example.com"))} on:keydown={() => window.open(shareOnWhatsApp("https://example.com"))}>
			<img src="/images/icons/red-whatsapp.png" alt="whatsapp icon" />
		</div>
	</div>
	
	<div class="accordions">
		<p class="w400"><a href="/openlibrary/reader/ramayana">Rāmāyaṇa</a></p>
		<p class="w400"><a href="/openlibrary/reader/rigveda">Ṛgveda</a></p>
	</div>
	<div class="accordions">
	<p class="w400">Essentials</p>
	<div class="content in-col">
	{#await bolTwo()}
	<small>...</small>
	{:then data}
	{#each data as item}
	<small><a href="/openlibrary/books/{item.slug}">{item.Text}</a></small>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	</div>
	</div>
	<div class="accordions">
	<p class="w400">IKS</p>
	<div class="content in-col">
			{#await bolThree()}
	<small>...</small>
	{:then data}
	{#each data as item}
	<small><a href="/openlibrary/books/{item.slug}">{item.Text}</a></small>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	</div>
	</div>
	<div class="accordions">
	<p class="w400">Bodhas</p>
	<div class="content in-col">
			{#await bolOne()}
	<small>...</small>
	{:then data}
	{#each data as item}
	<small><a href="/openlibrary/books/{item.slug}">{item.Text}</a></small>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
	</div>
	</div>
</div>

<style>
.sidebar { padding-right: 12px; padding-bottom: 32px;}
.sidebar .in-row { justify-content: space-between; width: 56%;}
.sidebar .in-row img { object-fit: contain; width: 24px; height: 24px; filter: saturate(0);}
.sidebar .in-row img:hover { filter: saturate(1);}
.content { display: none;}
	.accordions:hover .content {
		display: flex;
	}
</style>