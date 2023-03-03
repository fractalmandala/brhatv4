<script>
import ShareSocial from '$lib/components/globals/ShareSocial.svelte'
import ShareSocial2 from '$lib/components/globals/ShareSocial.svelte'
import { fly } from 'svelte/transition'
import GrandContainer from '$lib/components/globals/GrandContainer.svelte'
</script>

<div class="wid-side">
	<GrandContainer>
		<div slot="mobilenav" class="mobmob">
			<div class="flier" in:fly={{ duration: 300, delay: 200, x: 0, y: -160}} out:fly={{ duration: 200, delay: 0, x: 0, y: -160}}>
				<ShareSocial2></ShareSocial2>
			</div>
			<h6 in:fly={{ duration: 300, delay: 200, x: 0, y: -160}} out:fly={{ duration: 200, delay: 0, x: 0, y: -160}}><a href="/about">About</a></h6>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/about/docs/svatahsiddha">Svataḥsiddha</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/about/docs/anatomy">Civilizational Moment</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/about/docs/namelogo">Nāmarūpa - Name and Logo</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/about/docs/values">Pratijñā - Values</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/about/#advisors">Advisors</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/about/#partners">Partners</a></p>
				<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/about/#team">Team</a></p>
				<div class="blocking"></div>
			<h6 in:fly={{ duration: 300, delay: 200, x: 0, y: -160}} out:fly={{ duration: 200, delay: 0, x: 0, y: -160}}>Areas</h6>
			<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/about/areas/culturecreatives">Culture Creatives</a></p>
			<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/about/areas/policyresearch">Policy Research</a></p>
			<p in:fly={{ duration: 300, delay: 200, x: -64, y: 0}} out:fly={{ duration: 200, delay: 0, x: -64, y: 0}}><a href="/about/areas/leadershipdevelopment">Leadership Development</a></p>
		</div>
		<div slot="desknav" class="deskdesk">
			<ShareSocial></ShareSocial>
			<h6><a href="/about">About</a></h6>
				<p><a href="/about/docs/svatahsiddha">Svataḥsiddha</a></p>
				<p><a href="/about/docs/anatomy">Civilizational Moment</a></p>
				<p><a href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a></p>
				<p><a href="/about/docs/namelogo">Nāmarūpa - Name and Logo</a></p>
				<p><a href="/about/docs/values">Pratijñā - Values</a></p>
				<p><a href="/about/#advisors">Advisors</a></p>
				<p><a href="/about/#partners">Partners</a></p>
				<p><a href="/about/#team">Team</a></p>
			<h6>Areas</h6>
			<p><a href="/about/areas/culturecreatives">Culture Creatives</a></p>
			<p><a href="/about/areas/policyresearch">Policy Research</a></p>
			<p><a href="/about/areas/leadershipdevelopment">Leadership Development</a></p>
			<div class="blocking"></div>
			<small><a href="/about/docs/privacy">Privacy Policy</a></small><br>
			<small><a href="/docs">Site Documentation</a></small>
		</div>
	</GrandContainer>
	<div class="main-page">
		<slot></slot>
	</div>
</div>


<style>
.blocking {
	height: 40px;
	display: flex;
}

.deskdesk a:hover {
	color: var(--soft);
}
</style>