<script>
import supabase from '$lib/db'
import { fly } from 'svelte/transition'
import { quartIn } from 'svelte/easing'

export async function bolBodha(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Bodhas')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}
export async function bolEss(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','Essentials')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}
export async function bolIKS(){
	const { data, error } = await supabase
	.from('brhat-openlibrary')
	.select()
	.eq('Type','IKS')
	.order('Sno',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}
export async function bolOth(){
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
	<div class="rending in-col">
  <p class="upper grey heading"><a href="/openlibrary/discover/ramayana">Rāmāyaṇa</a></p>
		<div class="in-col sublinks">
		<small transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"><a href="/openlibrary/discover/ramayana/kanda1">1- Bāla Kāṇḍa</a></small>
		<small transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"><a href="/openlibrary/discover/ramayana/kanda2">2- Ayodhya Kāṇḍa</a></small>
		<small transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"><a href="/openlibrary/discover/ramayana/kanda3">3- Āraṇya Kāṇḍa</a></small>
		<small transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"><a href="/openlibrary/discover/ramayana/kanda4">4- Kiṣkindha Kāṇḍa</a></small>
		<small transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"><a href="/openlibrary/discover/ramayana/kanda5">5- Sundara Kāṇḍa</a></small>
		<small transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"><a href="/openlibrary/discover/ramayana/kanda6">6- Yuddha Kāṇḍa</a></small>
		<small transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"><a href="/openlibrary/discover/ramayana/kanda7">7- Uttara Kāṇḍa</a></small>
		</div>
	</div>
  <p class="upper grey heading"><a href="/openlibrary/discover/rigveda">Ṛgveda</a></p>
</div>



<style>
.sidebar { padding-right: 12px; padding-bottom: 32px;}
.sidebar .in-row { justify-content: space-between; width: 60%; margin-bottom: 48px;}
.sidebar .in-row img { object-fit: contain; width: 24px; height: 24px; filter: saturate(0);}
.sidebar .in-row img:hover { filter: saturate(1);}
.sublinks small { letter-spacing: 0.5px; color: #878787;}
.sublinks { display: none; transition: all 0.33s var(--cubeb);}
.rending:hover .sublinks { display: flex;}

</style>