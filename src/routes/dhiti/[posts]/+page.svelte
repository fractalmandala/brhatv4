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

<div class="flexbox-c l0"> 
	<div class="in-col">
		<small class="block">{data.date} <span class="grey2"> {data.tags}</span></small>
	</div>
	<h1 class="play" use:reveal={{ transition: "fly", x: 400 }} data-textify>{data.title}</h1>
	<div class="pixel-line"></div>
	<div class="stayingstrip">
		<div class="postinfo in-row">
			<p class="w600 soft" data-textify>{data.author}</p>
		</div>
		<div class="thinbar in-row">
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
	</div>
</div>
<div class="flexbox-c imgbox l00" style="transform: translateY({-y/4}px)">
	<div class="in-col holdingimage">
		<img src="{data.image}" alt="data" style="transform: translateY({-y/6}px)"/>
	</div>
</div>
<div class="flexbox-c x2" style="transform: translateY({-y/8}px)">
	<div class="flexbox-r tray">
		<div class="categorypop">
			<p class="home wbold upper grey"><a href="/dhiti">Dhīti</a></p>
			<p class="categorylabel w600 grey2 upper" data-textify>{data.category}</p>
		</div>
		<div class="dhiti-post play">
			<svelte:component this={data.content} />
		</div>
	</div> 
</div>


<style>
.categorylabel {
	font-size: 12px;
	padding-top: 12px;
	border-top: 1px solid var(--soft);
}
.categorypop p {
	line-height: 1.1;
}
.icon-box img {
	filter: saturate(0.1);
	opacity: 0.5;
	transition: all 0.04s var(--cubee);
	cursor: pointer;
}
.icon-box img:hover { 
	filter: saturate(1);
	opacity: 1;
}
.l0 .in-col .grey2 { border-left: 2px solid var(--soft); margin-left: 8px; padding-left: 8px;}

.l0 h1 { color: #212121; letter-spacing: -3px; font-weight: 700; line-height: 1.05;}

@media screen and (min-width: 768px) {
	.l0 h1 {
		font-size: 88px;
		margin-bottom: 24px;
	}
	.x2 { height: 100%; padding-bottom: 80px;}
	.l00 { height: 100vh; overflow: hidden; justify-content: center; }
	.holdingimage {
		height: 70vh;
		width: 100%;
		overflow: hidden;
	}
	.holdingimage img {
		object-fit: cover;
		width: 100%;
		height: 100vh;
	}
	.block {
		color: #878787;
		margin-bottom: 48px;
	}
	.tray { gap: 0; height: 100%; overflow: hidden;}
	.l0 {
		margin: 0 32px 24px 64px;
		padding-top: 120px;
		height: 100vh;
    overflow: hidden;
		justify-content: center;
	}
	.l0 small { font-weight: 500; padding-top: 8px; padding-bottom: 8px;}
	.l0 .in-row small { text-transform: capitalize;}
	.icon-box img { width: 27px; height: 27px;}
	.pixel-line {
		height: 2px;
		width: 32%;
		background: #d7d7d7;
	}
	.stayingstrip {
		justify-content: flex-start;
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 2px 32px 2px 0;
		height: 56px;
		margin-top: 16px;
		position: sticky !important;
		background: white;
		top: 0;
		left: 0;
	}
	.stayingstrip>.in-row {
		align-items: center;
		gap: 32px;
	}
	.postinfo { width: max-content; margin-bottom: 12px; }
	.thinbar {
		justify-content: flex-start;
		align-items: center;
		width: max-content;
	}
	.stayingstrip>.in-row p {
		line-height: 1;
		margin-top: 12px;
		font-size: 20px;
	}
	.categorypop {
		display: flex;
		flex-direction: column;
		width: 160px;
		padding: 16px 8px 16px 40px;
		height: 600px;
		position: sticky;
		top: 0;
		left: 0;
	}
	.home {
		margin: 0;
		padding-bottom: 8px;
	}
	.tray {
		height: 100%;
	}
}
</style>


