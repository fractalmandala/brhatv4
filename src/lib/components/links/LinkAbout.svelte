<script>
import { fly} from 'svelte/transition'
import { circOut } from 'svelte/easing'
</script>
<div class="linkbox" in:fly={{ x: -80, y: 0, duration: 200, easing: circOut }} out:fly={{ x: -80, y: 0, duration: 100, easing: circOut }}>
	<h5><a href="/about">About</a></h5>
	<h6><a href="/about/docs/svatahsiddha">Svataḥsiddha</a></h6>
	<h6><a href="/about/docs/anatomy">Anatomy of a Civilizational Moment</a></h6>
	<h6><a href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a></h6>
	<h6><a href="/about/docs/namelogo">Nāmarūpa - Name and Logo</a></h6>
	<h6><a href="/about/docs/values">Pratijñā - Values</a></h6>
	<h6><a href="/about/#advisors">Advisors</a></h6>
	<h6><a href="/about/#partners">Partners</a></h6>
	<h6><a href="/about/#team">Team</a></h6>
	<h5>Areas</h5>
	<h6><a href="/about/areas/culturecreatives">Culture Creatives</a></h6>
	<h6><a href="/about/areas/policyresearch">Policy Research</a></h6>
	<h6><a href="/about/areas/leadershipdevelopment">Leadership Development</a></h6>
</div>

<style lang="sass">

.linkbox
	display: flex
	flex-direction: column

</style>