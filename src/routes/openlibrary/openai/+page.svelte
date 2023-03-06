<script>
let toggledHeight = false
function toggleHeight(){
	toggledHeight = !toggledHeight
}
</script>

<div class="full-page">
	<div class="no-side">

	</div>
	<div class="wid-side">
		<div class="side-bar bdr" class:toggledHeight={toggledHeight}>
			<div class="in-side"></div>
		</div>
		<div class="main-page">
			<div class="gp4">
				<div class="cols4 bdr"></div>
				<div class="cols4 bdr"></div>
				<div class="cols4 bdr"></div>
				<div class="cols4 bdr"></div>
			</div>
			<div class="gp3">
				<div class="cols3 bdr"></div>
				<div class="cols3 bdr"></div>
				<div class="cols3 bdr"></div>
			</div>
		</div>
	</div>
</div>

<style>
.cols4, .cols3 {
	min-height: 400px
}
</style>
