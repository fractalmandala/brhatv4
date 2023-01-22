<script>
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
<div class="main-box">
<slot></slot>
</div>
</FlyingBox>
{/key}
</div>

<style>
.primecontainer-row { display: flex; width: 100vw; min-height: 100vh;}
.main-box { display: flex; flex-direction: column; }

@media screen and (min-width: 900px) {
	.primecontainer-row { flex-direction: row; padding-top: 120px;}

	.main-box { width: 75vw; height: 100%; padding: 0 8rem 0 6rem; }

}
</style>