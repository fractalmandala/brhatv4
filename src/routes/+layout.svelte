<script lang="ts">
// @ts-nocheck
import { onMount } from 'svelte'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
import HeadGeneral from '$lib/components/globals/Header2023.svelte'
import Animations from "textify.js";
import LocomotiveScrollProvider from 'svelte-locomotive-scroll';
import { page } from '$app/stores'
import '$lib/styles/locomotive-scroll.css'
import '$lib/styles/reader.sass'
import '$lib/styles/textify.css'
import '$lib/styles/globaltemplate.sass'

onMount(() => {
	const { Textify } = Animations;
	new Textify()
	if (typeof window !== 'undefined') {
		scrollInstance.on('scroll', (/** @type {any} */ obj) => {
		});
	}
});

</script>

<LocomotiveScrollProvider
	options={{
		smooth: true,
		smoothMobile: true,
		getDirection: true,
		lerp: 0.1,
		reloadOnContextChange: true,
		inertia: 0.2
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



