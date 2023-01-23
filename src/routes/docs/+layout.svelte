<script>
import '$lib/styles/prism.css'
import '$lib/styles/componentstyles.css'
import FlyingBox from '$lib/components/animations/FlyingPage.svelte'
import DocSidebar from '$lib/components/globals/DocSiderbar.svelte'
  /**
	 * @type {any}
	 */
   export let refresh
</script>

<div class="primecontainer-row">
<DocSidebar></DocSidebar>
{#key refresh}
<FlyingBox>
<div class="pagesheet">
<div class="blog-pad">
<slot></slot>
</div>
</div>
</FlyingBox>
{/key}
</div>

