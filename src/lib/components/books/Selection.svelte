<script lang="ts">
import Essentials from '$lib/components/books/Essentials.svelte'
import IKS from '$lib/components/books/IKS.svelte'
import Bodhas from '$lib/components/books/Bodhas.svelte'
import Scripture from '$lib/components/books/Scripture.svelte'
import Other from '$lib/components/books/Other.svelte'
import Aryan from '$lib/components/books/Aryan.svelte'

let activeDivId = 'element-7';
  
function toggleWid(e: {currentTarget: {id: any;};}) {
  const currentDivId = e.currentTarget.id;
  activeDivId = activeDivId === currentDivId ? '' : currentDivId;
}

</script>

<div class="aa r-r-r-r">
	<div id="element-1" class="element {activeDivId === 'element-1' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
		<h5>Essentials</h5>
		<div class="c-c-c-c">
		<Essentials></Essentials>
		</div>
	</div>
	<div id="element-2" class="element {activeDivId === 'element-2' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
		<h5>IKS</h5>	
		<div class="c-c-c-c">
		<IKS></IKS>
		</div>
	</div>
	<div id="element-3" class="element {activeDivId === 'element-3' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
		<h5>Two Bodhas</h5>
		<div class="c-c-c-c">
		<Bodhas></Bodhas>
		</div>
	</div>
	<div id="element-4" class="element {activeDivId === 'element-4' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
		<h5>Āryan Issue</h5>
		<div class="c-c-c-c" id="in-el-4">
		<p>Readings in the Āryan Issue are not hosted on our website. These links open as new tabs.</p>
		<Aryan></Aryan>
		</div>
	</div>
	<div id="element-5" class="element {activeDivId === 'element-5' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
		<h5>Scripture</h5>
		<div class="c-c-c-c">
		<Scripture></Scripture>
		</div>
	</div>
	<div id="element-6" class="element {activeDivId === 'element-6' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
		<h5>Other</h5>
		<div class="c-c-c-c">
		<Other></Other>
		</div>
	</div>
	<div id="element-7" class="element {activeDivId === 'element-7' ? 'active' : ''}" on:click={toggleWid} on:keydown={toggleWid}>
		<div class="c-c-c-c">
			<h5>Bṛhat Open Library is an Online Repository for Texts, Papers, Learning Material and More.</h5>
			<p>It is a tribute to the hard labor of people known and unknown that have created for us an unbelievable repository of Indian knowledge. Read more on our sources and credits here.</p>
		</div>
	</div>
</div>	

<style>


.element {
	width: 3%;
  border-right: 1px solid #d7d7d7;
	transition: width 0.42s ease;
	height: 100%;
	display: flex;
	flex-direction: column;
}

.element > .c-c-c-c { display: none;}
.element.active > .c-c-c-c {
	display: flex;
	padding: 0 4vw;
}

.element.active {
	width: 80%;
  border-left: 1px solid #474747;
  border-right: 1px solid #d7d7d7;
	height: 100%;
}

.element h5 {
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	margin-left: 10px;
	font-size: 16px;
	color: #676767;
	font-weight: 500;
	text-transform: uppercase;
}

.element p, .element.active p { font-size: 24px;color: #474747; margin-top: 0; margin-bottom: 48px;}

.element.active h5 {
	margin-bottom: 32px;
	margin-left: 32px;
	border-bottom: 1px solid #272727;
	padding-bottom: 12px;
	color: #fe4a49;
	writing-mode: horizontal-tb;
	transform: rotate(0deg);
	font-size: 40px;
	width: 70%;
	font-weight: 500;
}
#element-7 h5 {color: #272727; text-transform: capitalize; width: 100%; margin-left: 0;}
#element-7 p { font-size: 18px;}

.aa {
	height: 200vh;
	padding: 0 4vw;
	background: white;
}


</style>