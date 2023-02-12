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

<div class="r-r-r-r cc">
<DocSidebar></DocSidebar>
<slot></slot>
</div>




<style>
.r-r-r-r.cc { 
	background: var(--beau);
}

</style>
