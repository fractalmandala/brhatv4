<script lang="ts">
/**
	 * @param {string | number | boolean} url
	 */
function shareOnFacebook(url:string) {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
}

/**
	 * @param {string | number | boolean} url
	 */
function shareOnLinkedIn(url:string) {
  return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`;
}

/**
	 * @param {string | number | boolean} url
	 * @param {string | number | boolean} text
	 */
function shareOnTwitter(url:string, text:string) {
  return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
}

/**
	 * @param {string} url
	 * @param {string | undefined} [text]
	 */
function shareOnWhatsApp(url:string, text:string) {
  return `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
}
</script>

	<div class="boxr">
		<div class="boxc" id="icon-twitter" on:click={() => window.open(shareOnTwitter("https://example.com", "Check out this page!"))} on:keydown={() => window.open(shareOnTwitter("https://example.com", "Check out this page!"))}>
			<img src="/images/icons/twitter-red.png" alt="twitter icon" />
		</div>
		<div class="boxc" id="icon-facebook" on:click={() => window.open(shareOnFacebook("https://example.com"))} on:keydown={() => window.open(shareOnFacebook("https://example.com"))}>
			<img src="/images/icons/facebook-red.png" alt="facebook icon" />
		</div>
		<div class="boxc" id="icon-linkedin" on:click={() => window.open(shareOnLinkedIn("https://example.com"))} on:keydown={() => window.open(shareOnLinkedIn("https://example.com"))}>
			<img src="/images/icons/linkedin-red.png" alt="linkedin icon" />
		</div>
		<div class="boxc" id="icon-whatsapp" on:click={() => window.open(shareOnWhatsApp("https://example.com"))} on:keydown={() => window.open(shareOnWhatsApp("https://example.com"))}>
			<img src="/images/icons/red-whatsapp.png" alt="whatsapp icon" />
		</div>
	</div>


<style>

@media screen and (min-width: 768px) {
.boxc img { 
	width: 20px;
	height: 20px;
	filter: saturate(0.1);
	transition: all 0.08s var(--cubeb);
	cursor: pointer;
}
.boxc img:hover { filter: saturate(1); transform: scale(1.2);}
.boxr { gap: 20px;}
}
@media screen and (max-width: 767px) {
	.boxr { gap: 24px; margin-top: 0;padding-top: 0; margin-bottom: 32px;}
	.boxc img {
		width: 24px;
		height: 24px;
	filter: saturate(0.1);
	transition: all 0.08s var(--cubeb);
	cursor: pointer;
	}
}

</style>