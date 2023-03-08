<script>
// @ts-nocheck
// @ts-ignore
import { reveal } from 'svelte-reveal'
let y = 1
let vw = 1
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

<svelte:window bind:scrollY={y} bind:outerWidth={vw}/>

<div class="container">
  <div class="titlesection">
		<small class="block">{data.date} <br><span class="grey2"> {data.tags}</span></small>
		<h1>{data.title}</h1>
		<p>{data.author}</p>
		<div class="boxr postshare">
			<div class="boxc icon-box" id="icon-twitter" on:click={() => window.open(shareOnTwitter("https://example.com", "Check out this page!"))} on:keydown={() => window.open(shareOnTwitter("https://example.com", "Check out this page!"))}>
				<img src="/images/icons/twitter-red.png" alt="twitter icon" />
			</div>
			<div class="boxc icon-box" id="icon-facebook" on:click={() => window.open(shareOnFacebook("https://example.com"))} on:keydown={() => window.open(shareOnFacebook("https://example.com"))}>
				<img src="/images/icons/facebook-red.png" alt="facebook icon" />
			</div>
			<div class="boxc icon-box" id="icon-linkedin" on:click={() => window.open(shareOnLinkedIn("https://example.com"))} on:keydown={() => window.open(shareOnLinkedIn("https://example.com"))}>
				<img src="/images/icons/linkedin-red.png" alt="linkedin icon" />
			</div>
			<div class="boxc icon-box" id="icon-whatsapp" on:click={() => window.open(shareOnWhatsApp("https://example.com"))} on:keydown={() => window.open(shareOnWhatsApp("https://example.com"))}>
				<img src="/images/icons/red-whatsapp.png" alt="whatsapp icon" />
			</div>
		</div>
	</div>
  <div class="imagesection">
		<img src="{data.image}" alt="data" style="transform: translateY({-y/6}px)"/>
	</div>
  <div class="mainbody">
    <div class="side1">
			<p><a href="/dhiti">Dhīti</a></p>
			<p>{data.category}</p>
		</div>
    <div class="side2"></div>
    <div class="blogpost">
			<svelte:component this={data.content} />
		</div>
  </div>
  <div class="endstrip"></div>
</div>

<style lang="sass">

.container 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto auto auto auto 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "titlesection" "imagesection" "mainbody" "endstrip" 

.titlesection 
	grid-area: titlesection

.imagesection
	grid-area: imagesection

.mainbody 
	display: grid 
	grid-auto-flow: row 
	grid-area: mainbody 

.side1 
	grid-area: side1 
.side2 
	grid-area: side2 
.blogpost 
	grid-area: blogpost 
.endstrip 
	grid-area: endstrip 

.icon-box img
	filter: saturate(0.01)
	opacity: 0.7
	transition: all 0.13s var(--cubed)
	transform-origin: center center
	&:hover
		filter: saturate(1)
		opacity: 1
		transform: scale(1.2)


@media screen and (min-width: 992px)
	.titlesection
		height: 100vh
		display: flex
		flex-direction: column
		justify-content: center
		padding: 0 64px
		h1
			font-family: 'Newsreader', serif
			font-weight: bold	 
			font-size: 5rem
			letter-spacing: 0px
		.block
			text-transform: uppercase
			font-weight: bold
			font-size: 12px
			margin-bottom: 16px
			color: #878787
		p
			font-size: 16px
			font-weight: bold
			color: var(--tree)
		.icon-box img
			height: 24px
			width: 24px
		.postshare
			gap: 16px
	.mainbody 
		grid-template-columns: 160px 1fr 400px 
		grid-template-rows: 1fr 
		gap: 0px 0px 
		grid-template-areas: "side1 blogpost side2"
		padding: 64px 32px

	.imagesection
		width: 100vw
		height: 70vh
		overflow: hidden
		img
			object-fit: cover
			width: 100%
	
</style>
