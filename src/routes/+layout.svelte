<script lang="ts">
// @ts-nocheck
import { onMount } from 'svelte'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
import HeadGeneral from '$lib/components/globals/Header2023.svelte'
import Animations from "textify.js";
import '$lib/styles/reader.sass'
import '$lib/styles/textify.css'
import '$lib/styles/globaltemplate.sass'

onMount(() => {
	const { Textify } = Animations;
	new Textify();
});

</script>

<HeadGeneral></HeadGeneral>
<slot></slot>
<Footer></Footer>





