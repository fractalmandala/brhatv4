<script lang="ts">
const parent = document.querySelector('.genrow') as HTMLElement;

function thewall() {
  parent.style.backgroundImage = 'url(/images/corpimages/creative-culture-1024-1.webp)';
}

</script>

<div class="genrow">
 <div class="gencol col1" id="col1">
   <button><a href="/about/areas/culturecreatives">Culture Creatives</a></button>
 </div>
 <div class="gencol col2" id="col2">
   <button><a href="/about/areas/policyresearch">Policy Research</a></button>
 </div>
 <div class="gencol col3" id="col3">
   <button class="trans-red"><a href="/about/areas/leadershipdevelopment">Leadership Development</a></button>
 </div>
</div>

<style>
.genrow {
	position: relative;
}

.genrow:hover .gencol:hover {
	position: absolute;
	display: flex;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100vh;
	z-index: 500;
}

.genrow:hover .gencol {
	display: none;
}
</style>
