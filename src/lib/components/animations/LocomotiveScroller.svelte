<script>
import LocomotiveScrollProvider from 'svelte-locomotive-scroll'
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
<div data-locomotive-container>
<slot></slot>
</div>
</LocomotiveScrollProvider>