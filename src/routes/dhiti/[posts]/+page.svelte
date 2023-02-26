<script>
// @ts-nocheck
// @ts-ignore
import { reveal } from 'svelte-reveal'
import DhitiSidebar from '$lib/components/pagecomps/DhitiSidebar.svelte'
let y = 1
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

/**
	 * @type {{ category: any; title: any; author: any; date: any; tags: any; content: any; image: any; }}
	 */
 export let data;
</script>

<svelte:window bind:scrollY={y}/>

<div class="flexbox-c imgbox l00" style="background-image: url({data.image}); transform: translateY({-y*0.5}px) perspective({y*100}px)">
	<img src="{data.image}" alt="data" style="transform: translateY({y}px)"/>
</div>
<div class="flexbox-c l0" style="transform: translateX({y-850}px)"> 
	<div class="in-row">
		<small class="block">{data.date}</small>
	</div>
	<h1 class="play" use:reveal={{ transition: "fly", x: 400 }}>{data.title}</h1>
	<p class="w600 grey upper m-top-24">{data.author}</p>
</div>
<div class="flexbox-r tray">
	<div class="thinbar in-col">
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
	<div class="dhiti-post play">
		<svelte:component this={data.content} />
	</div>
	<DhitiSidebar></DhitiSidebar>
</div> 

<style>

.l0 h1 { color: #212121; letter-spacing: -3px; font-weight: 700; line-height: 1.05;}
@media screen and (min-width: 768px) {
	.l00 { height: 100vh; overflow: hidden;}
	.l00 img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	.block {
		border-left: 4px solid #fe4a49;
		color: #878787;
		margin-bottom: 48px;
		margin-left: -80px;
		margin-right: 80px;
	}
	.tray { gap: 0; height: 100%; overflow: hidden;}
	.l0 {
		margin: 80px 80px 64px 120px;
		padding-top: 120px;
    overflow: hidden;
	}
	.l0 p { letter-spacing: 1px;}
	.in-row { gap: 32px;}
	.l0 small { font-weight: 500; padding-left: 20px; padding-top: 8px; padding-bottom: 8px;}
	.l0 .in-row small { text-transform: capitalize;}
	.icon-box img { width: 27px; height: 27px;}
}
</style>


