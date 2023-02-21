<script lang="ts">
// @ts-nocheck

import { dev } from '$app/environment';
import '@fontsource/ibm-plex-sans-condensed'
import { inject } from '@vercel/analytics';
import '$lib/styles/componentstyles.sass'
import '$lib/styles/typographyglobal.sass'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
inject({ mode: dev ? 'development' : 'production' });

</script>
	

<slot></slot>
<Footer></Footer>





