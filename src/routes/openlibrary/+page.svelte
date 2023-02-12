<script lang="ts">
import Selection from '$lib/components/books/Selection.svelte'
</script>
<div class="black-beauty" data-scroll-container>
	<div class="c-c-c-c layer1" data-scroll-section>
		<h3 class="bigger3">Bṛhat Open Library is an Online Repository for Texts, Papers, Learning Material and More.</h3>
		<p>It is a tribute to the hard labor of people known and unknown that have created for us an unbelievable repository of Indian knowledge. Read more on our sources and credits here.</p>	
	</div>
	<Selection></Selection>
</div>

<style>


.black-beauty { background: white;}
.layer1 {
	width: 100vw;
	height: 90vh;
	justify-content: center;
	align-items: flex-start;
	padding: 0 6vw;
	border-bottom: 1px solid #474747;
	margin-bottom: 10vh;
}



.layer1 h3 { color: #474747; margin-bottom: 32px; font-weight: 600;}
.layer1 p { color: #474747; font-size: 1.2em; width: 64%;}



</style>