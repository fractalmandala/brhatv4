<script>
import LocomotiveScrollProvider from 'svelte-locomotive-scroll'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
import '$lib/styles/locomotive-scroll.css'
import { page } from '$app/stores';
</script>

<LocomotiveScrollProvider
	options={{
		smooth: true,
		smoothMobile: true,
		getDirection: true,
		getSpeed: true,
		inertia: 0.5
	}}
  watch={$page}
  location={$page.url}
  onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 2, disableLerp: false })}
	imageTarget={'.grid-item-media'}
>
<div class="baser" data-locomotive-container>
<slot></slot>
</div>
<Footer></Footer>
</LocomotiveScrollProvider>

<style>
.baser { z-index: 400;}
</style>