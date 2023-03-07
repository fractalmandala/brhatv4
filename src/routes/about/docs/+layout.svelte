<script>
import ShareSocial from '$lib/components/globals/ShareSocial.svelte'
</script>

<div class="an-area">
  <div class="sidebar-area">
	  <div class="menuiconarea">
				<svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.1873 38.4557C30.2862 38.4557 38.473 30.2689 38.473 20.17C38.473 10.0711 30.2862 1.88428 20.1873 1.88428C10.0884 1.88428 1.90161 10.0711 1.90161 20.17C1.90161 30.2689 10.0884 38.4557 20.1873 38.4557Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M20.1874 22.9557C20.9214 22.9557 21.6136 22.5937 22.1124 22.095C22.6111 21.5962 22.9731 20.904 22.9731 20.17C22.9731 19.4359 22.6111 18.7438 22.1124 18.245C21.6136 17.7463 20.9214 17.3843 20.1874 17.3843C19.4532 17.3843 18.7616 17.7464 18.2635 18.2453C17.7653 18.7442 17.4043 19.4363 17.4043 20.17C17.4043 20.9037 17.7653 21.5958 18.2635 22.0947C18.7616 22.5936 19.4532 22.9557 20.1874 22.9557ZM11.0445 22.9557C11.7786 22.9557 12.4708 22.5937 12.9695 22.095C13.4683 21.5962 13.8303 20.904 13.8303 20.17C13.8303 19.4359 13.4683 18.7438 12.9695 18.245C12.4708 17.7463 11.7786 17.3843 11.0445 17.3843C10.3104 17.3843 9.61875 17.7464 9.12061 18.2453C8.62246 18.7442 8.26147 19.4363 8.26147 20.17C8.26147 20.9037 8.62246 21.5958 9.12061 22.0947C9.61875 22.5936 10.3104 22.9557 11.0445 22.9557ZM29.3303 22.9557C30.0643 22.9557 30.7565 22.5937 31.2552 22.095C31.754 21.5962 32.116 20.904 32.116 20.17C32.116 19.4359 31.754 18.7438 31.2552 18.245C30.7565 17.7463 30.0643 17.3843 29.3303 17.3843C28.5961 17.3843 27.9045 17.7464 27.4063 18.2453C26.9082 18.7442 26.5472 19.4363 26.5472 20.17C26.5472 20.9037 26.9082 21.5958 27.4063 22.0947C27.9045 22.5936 28.5961 22.9557 29.3303 22.9557Z" fill="white" stroke="white"/>
				</svg>
		</div>
    <div class="socialicons">
			<ShareSocial></ShareSocial>
		</div>
    <div class="sidebarlinks">
			<div class="linkssection">
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
    </div>
  </div>
  <div class="mainpage-area">
		<slot></slot>
	</div>
</div>



<style lang="sass">

.menuiconarea
	@media screen and (min-width: 768px)
		display: none

.an-area 
	display: grid 
	gap: 0px 0px 
	grid-auto-flow: row 
	height: 100%
	@media screen and (min-width: 768px)
		grid-template-areas: "sidebar-area mainpage-area" 
		grid-template-columns: 320px 1fr 
		grid-template-rows: 1fr 
	@media screen and (max-width: 767px)
		grid-template-areas: "mainpage-area" "sidebar-area"
		grid-template-columns: 1fr
		grid-template-rows: 1fr 48px
	

.sidebar-area 
	display: grid 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-area: sidebar-area 
	position: fixed
	height: 100vh
	z-index: -1
	@media screen and (min-width: 768px)
		grid-template-columns: 1fr 
		grid-template-rows: max-content 1fr 
		grid-template-areas: "socialicons" "sidebarlinks" 
		padding-top: 120px
		padding-left: 40px
		top: 0
	@media screen and (max-width: 767px)
		grid-template-columns: 1fr 
		grid-template-rows: 1fr 
		grid-template-areas: "menuiconarea" 
		padding: 0 24px
		height: 48px
		width: 100vw
		bottom: 0
		background: rgba(23,23,23,0.8)
		backdrop-filter: blur(4px)
		z-index: 999
		align-items: center
		justify-content: center
		align-content: center
		justify-items: center
		.socialicons
			display: none
		.sidebarlinks
			display: none
		.menuiconarea
			display: flex
			width: 100%
			height: 100%
			justify-content: center
			align-items: center
			svg
				object-fit: contain
				width: 28px
				height: 28px



.socialicons 
	grid-area: socialicons 

.sidebarlinks 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 48px 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "menuiconarea" "linkssection" 
	grid-area: sidebarlinks 
	align-items: start
	align-content: start

.menuiconarea 
	grid-area: menuiconarea 

.mainpage-area 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." 
	grid-area: mainpage-area
	
@media screen and (min-width: 992px)
	.mainpage-area
		padding-top: 120px
		padding-left: 64px
		padding-right: 240px
		padding-bottom: 120px

@media screen and (max-width: 991px)
	.mainpage-area
		padding: 120px 32px 128px 32px


</style>