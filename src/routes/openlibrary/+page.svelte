<script>
	import Essentials from '$lib/components/books/Essentials.svelte'
	import IKS from '$lib/components/books/IKS.svelte'
	
	let seeEssentials = false;
	let seeIKS = false;
	let seeBodhas = false;
	let seeAryan = false;
	let seeScript = false;

	function toggleEssentials(){
		seeEssentials = !seeEssentials
	}
	function toggleIKS(){
		seeIKS = !seeIKS
	}	
	function toggleBodhas(){
		seeBodhas = !seeBodhas
	}
	function toggleAryan(){
		seeAryan = !seeAryan
	}
	function toggleScripture(){
		seeScript = !seeScript
	}
</script>
<div class="black-beauty" data-scroll-container>
	<div class="c-c-c-c layer1" data-scroll-section>
		<h1 data-textify>Bṛhat Open Library is an Online Repository for Texts, Papers, Learning Material and More.</h1>
		<p data-textify>It is a tribute to the hard labor of people known and unknown that have created for us an unbelievable repository of Indian knowledge. Read more on our sources and credits here.</p>	
	</div>
	<div class="c-c-c-c layer1" data-scroll-section>
		<h5 data-textify on:click={toggleEssentials} on:keydown={toggleEssentials}>Essentials</h5>
		{#if seeEssentials}
			<Essentials></Essentials>
		{/if}
		<h5 data-textify on:click={toggleIKS} on:keydown={toggleIKS}>IKS</h5>
		{#if seeIKS}
			<IKS></IKS>
		{/if}
		<h5 data-textify><a href="/openlibrary/categories/essentials">The Two Bodhas</a></h5>
		<h5 data-textify><a href="/openlibrary/categories/essentials">History</a></h5>
		<h5 data-textify><a href="/openlibrary/categories/essentials">The Āryan Issue</a></h5>
		<h5 data-textify><a href="/openlibrary/categories/essentials">Repository of Scripture</a></h5>
		<h5 data-textify><a href="/openlibrary/categories/essentials">Synaptic Connection</a></h5>
	</div>
</div>


<style>
.black-beauty { background: var(--beau);}
.layer1 {
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: flex-start;
	padding: 0 6vw;
}
.layer1 h1 { color: white; margin-bottom: 0; font-weight: 600;}
.layer1 p { color: var(--myblu); font-size: 1.2em; width: 64%;}
.layer1 h5 { color: white; font-size: 3em; margin-bottom: 0.4em; margin-top: 0; font-weight: 300; transition: all 0.14s var(--cube2); transform-origin: center left;}
.layer1 a { text-decoration: none; font-weight: 300; color: white;}
.layer1 a:hover { color: var(--myblu);}

.layer1 h5:hover {
	transform: scale(1.1);
}



h5 .greyguy {
	color: #474747;
}

</style>