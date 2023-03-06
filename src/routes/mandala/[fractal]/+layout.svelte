<script>
let increasedH = false

function toggleHeight(){
	increasedH = !increasedH
}

</script>
<div class="solo">
	<div class="slabs" class:increasedH={increasedH} on:click={toggleHeight} on:keydown={toggleHeight}>
		<div class="boxc heighter">
			<div class="boxc iconer">
				<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="Abstract/asterisk">
					<path id="Vector" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white"/>
					<path id="Union" d="M9.37512 7.45315C9.73384 7.24604 10.1925 7.36894 10.3996 7.72766L12.0001 10.4998L13.6006 7.72766C13.8077 7.36894 14.2664 7.24604 14.6251 7.45315C14.9838 7.66025 15.1068 8.11895 14.8996 8.47767L13.299 11.25H16.5C16.9142 11.25 17.25 11.5858 17.25 12C17.25 12.4142 16.9142 12.75 16.5 12.75H13.2993L14.8996 15.5219C15.1068 15.8806 14.9838 16.3393 14.6251 16.5464C14.2664 16.7535 13.8077 16.6306 13.6006 16.2719L12.0001 13.4998L10.3996 16.2719C10.1925 16.6306 9.73384 16.7535 9.37512 16.5464C9.01641 16.3393 8.8935 15.8806 9.10061 15.5219L10.7009 12.75H7.5C7.08579 12.75 6.75 12.4142 6.75 12C6.75 11.5858 7.08579 11.25 7.5 11.25H10.7012L9.10061 8.47767C8.8935 8.11895 9.01641 7.66025 9.37512 7.45315Z" fill="#212121" stroke="#212121" stroke-linecap="round" stroke-linejoin="round"/>
					</g>
				</svg>
			</div>
		</div>

	</div>
	<div class="document2">
		<slot></slot>
	</div>
</div>

<style lang="sass">

.heighter
	align-items: center
	justify-content: center
	.iconer
		justify-content: center
		height: 100%
		svg
			width: 30px
			height: 30px
		

.heighter
	display: flex
	flex-direction: column
	@media screen and (min-width: 768px)
		display: none
	@media screen and (max-width: 767px)
		display: flex
		height: 48px

.solo
	display: flex
	flex-direction: row

.slabs
	display: flex
	flex-direction: column
	position: fixed
	top: 0
	left: 0
	width: 64px
	height: 100%
	&::after
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 100%
		content: ''
		background: rgba(0,0,0,0.0)
	.type1, .type2, .type3, .type4, .type5, .type6, .type7, .type8
		background: black
		width: 48px
		height: 64px
		position: absolute
		color: #474747
		font-size: 20px
		text-align: center
		padding-top: 16px
		border-bottom: 1px solid #474747
	.type1
		top: 120px
	.type2
		top: 184px
	.type3
		top: 248px
	.type4
		top: 312px
	.type5
		top: 376px
	.type6
		top: 440px
	.type7
		top: 504px
	.type8
		top: 568px
	@media screen and (max-width: 575px)
		width: 100vw
		height: 48px
		background: rgba(0,0,0,0.8)
		backdrop-filter: blur(10px)
		top: calc(100vh - 48px)
		left: 0px
		z-index: 1000
		span
			display: none



.document2
	padding-left: 128px
	display: flex
	flex-direction: column
	@media screen and (max-width: 575px)
		padding-left: 0

	

</style>

