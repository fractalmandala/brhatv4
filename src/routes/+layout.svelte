<script lang="ts">
// @ts-nocheck
import { onMount } from 'svelte'
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
import Header from '$lib/components/globals/Header.svelte'
import Footer from '$lib/components/globals/FooterGlobal.svelte'
import '$lib/styles/reader.sass'
import '$lib/styles/globaltemplate.sass'
import '$lib/styles/textify.css'
inject({ mode: dev ? 'development' : 'production' });

</script>

<Header></Header>
<slot></slot>
<Footer></Footer>






