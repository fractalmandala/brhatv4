<script>
import '$lib/styles/prism.css'
import '$lib/styles/componentstyles.css'
import DocSidebar from '$lib/components/globals/DocSiderbar.svelte'
</script>

<div class="primecontainer-row">
<DocSidebar></DocSidebar>
<div class="pagesheet2">
<div class="blog-pad">
<slot></slot>
</div>
</div>
</div>

