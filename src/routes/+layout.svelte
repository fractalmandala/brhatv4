<script lang="ts">
// @ts-nocheck
import { onMount } from 'svelte'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
import HeadGeneral from '$lib/components/globals/Header2023.svelte'
import lax from 'lax.js'
import Animations from "textify.js";
import LocomotiveScrollProvider from 'svelte-locomotive-scroll';
import { page } from '$app/stores'
import '$lib/styles/locomotive-scroll.css'
import '$lib/styles/reader.sass'
import '$lib/styles/globals.css'
import '$lib/styles/componentstyles.css'
import '$lib/styles/textify.css'

let scroll = {
		cache: 0,
		current: 0
	};

	onMount(() => {
		 if (typeof window !== 'undefined') {
			scrollInstance.on('scroll', (/** @type {any} */ obj) => {
		});
		 lax.init()
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })
  }
	
	});

</script>

<LocomotiveScrollProvider
	options={{
		smooth: true,
		smoothMobile: false,
		getDirection: true,
		lerp: 0.1,
		reloadOnContextChange: true,
		getSpeed: true,
		inertia: 0.5
	}}
	watch={$page}
	location={$page.url}
	onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 2, disableLerp: false })}
	imageTarget={'.grid-item-media'}
>
<HeadGeneral></HeadGeneral>
<slot></slot>
<Footer></Footer>
</LocomotiveScrollProvider>



