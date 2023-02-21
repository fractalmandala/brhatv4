<script>
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
	<p class="w400">Areas</p>
	<small><a href="/about/areas/culturecreatives">Culture Creatives</a></small>
  <small><a href="/about/areas/policyresearch">Policy Research</a></small>
  <small><a href="/about/areas/leadershipdevelopment">Leadership Development</a></small>
	<p class="w400">Corporate Essays</p>
  <small><a href="/about/docs/anatomy">Anatomy of a Civilizational Moment</a></small>
  <small><a href="/about/docs/svatahsiddha">Svataḥsiddha</a></small>
  <small><a href="/about/docs/whatkrishnameanstous">What Ṡrī Kṛṣṇa Means to Us</a></small>
  <small><a href="/about/docs/values">Pratijñā - our Values</a></small>
  <small><a href="/about/docs/namelogo">Nāmarūpa</a></small>
	<p class="w400">About</p>
  <small><a href="/about/#advisors">Advisors</a></small>
  <small><a href="/about/#partners">Partners</a></small>
  <small><a href="/about/#team">Team</a></small>
  <small><a href="/about/docs/privacy">Privacy Policy</a></small>
  <small><a href="/docs">Site Documentation</a></small>
</div>

<style>
.sidebar .in-row { justify-content: space-between; width: 56%;}
.sidebar .in-row img { object-fit: contain; width: 24px; height: 24px; filter: saturate(0);}
.sidebar .in-row img:hover { filter: saturate(1);}
</style>