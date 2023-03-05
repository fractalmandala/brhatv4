<script>
let showClose = false
let toggledClass = false
let showSection = true
function toggleClose(){
	showClose = !showClose
	toggledClass = !toggledClass
	showSection = !showSection
}
</script>

<div class="side-bar" class:toggledClass={toggledClass}>
	<div class="menutwo">
		{#if showSection}
			<slot name="sectionname"></slot>
		{/if}
		{#if showClose}
			<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={toggleClose} on:keydown={toggleClose}>
				<g id="close" clip-path="url(#clip0_328_2)">
					<path id="Vector" d="M32.8177 5.05589L27.86 0.0981445L16.8177 11.3657L5.77549 0.0981445L0.817749 5.05589L12.0854 16.0981L0.817749 27.1404L5.77549 32.0981L16.8177 20.8305L27.86 32.0981L32.8177 27.1404L21.5501 16.0981L32.8177 5.05589Z" fill="#B7B7B7"/>
				</g>
				<defs>
				<clipPath id="clip0_328_2">
				<rect width="32" height="32" fill="white"/>
				</clipPath>
				</defs>
			</svg>
		{:else}
			<svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={toggleClose} on:keydown={toggleClose}>
				<g id="Frame" clip-path="url(#clip0_328_6)">
				<g id="close">
					<path id="top" d="M48 11.8001V4.6001H0V11.8001H58H48Z" fill="white"/>
					<path id="mid" d="M48 26V19H16V26H74H48Z" fill="white"/>
					<path id="low" d="M48 41V34H32V41H90H48Z" fill="white"/>
				</g>
				</g>
				<defs>
				<clipPath id="clip0_328_6">
				<rect width="48" height="48" fill="white"/>
				</clipPath>
				</defs>
			</svg>
		{/if}
	</div>
	{#if toggledClass}
		<div class="boxc navlinks" on:click={toggleClose} on:keydown={toggleClose}>
			<slot name="mobilenav"></slot>
		</div>
	{/if}
		<slot name="desknav"></slot>
</div>

<style lang="sass">

.menutwo
	height: 40px
	width: 20px
	display: flex
	flex-direction: row
	align-items: center
	svg
		cursor: pointer
		height: 20px
		width: 20px
		object-fit: contain
		path
			fill: #b7b7b7
	@media screen and (min-width: 768px)
		display: none
	@media screen and (max-width: 767px)
		width: 100%
		justify-content: flex-end
		padding-right: 16px

</style>