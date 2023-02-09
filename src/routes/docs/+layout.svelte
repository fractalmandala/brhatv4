<script>
import { onMount } from 'svelte'
import Animations from "textify.js";
import DocSidebar from '$lib/components/globals/DocSiderbar.svelte'
import '$lib/styles/prism.css'
onMount(() => {
const { Textify } = Animations;
	new Textify({
		duration: 300,
		threshold: 0.3,
		once: false
	})
	})

</script>

<div class="black-beauty">
<div class="primecontainer-row">
<DocSidebar></DocSidebar>
<div class="c-c-c-c">
<slot></slot>
</div>
</div>
</div>



<style>
.black-beauty { 
	background: var(--beau);
}

.c-c-c-c {
	font-size: 1em;
}

@media screen and (min-width: 900px) {
		.c-c-c-c {
			padding-left: 4vw;
			padding-right: 8vw;
			flex-wrap: wrap;
			height: 88vh;
			width: 75vw;
		}
	}
</style>
