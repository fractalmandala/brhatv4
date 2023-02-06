<script>
import { onMount } from 'svelte'
import LocomotiveScroll from 'locomotive-scroll'
import LocomotiveContainer from '$lib/components/animations/LocomotiveContainer.svelte'
import FlyingPage from '$lib/components/animations/FlyingPage.svelte'
import HeadGeneral from '$lib/components/headers/HeadGeneral.svelte'
import DocSidebar from '$lib/components/globals/DocSiderbar.svelte'
import '$lib/styles/prism.css'


let scroll
onMount(() => {
  const scroll = new LocomotiveScroll();
});

</script>

<FlyingPage>
<HeadGeneral></HeadGeneral>
<LocomotiveContainer>
<div class="primecontainer-row">
<DocSidebar></DocSidebar>
<div class="c-c-c-c">
<slot></slot>
</div>
</div>
</LocomotiveContainer>
</FlyingPage>

<style>
*, :root { 
	--container-background: var(--beau);
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
