<script>
// @ts-nocheck

import supabase from '$lib/db'
import { Lightbox } from 'svelte-lightbox'

async function travelDiary(){
	const { data } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','traveldiary')
	return data;
}

async function anveshiVids(){
	const { data, error } = await supabase
	.from('brhat-youtube')
	.select()
	.eq('type','anveshi')
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="blog-pad">
<h1>Anveṣī Travel Diaries<br>
<cite>submissions from fellow anveṣīs</cite>
</h1>
<h5>Karnataka Travel Diary</h5>
<p>an essay by <a href="https://twitter.com/Vajrapani4" target="_blank" rel="noreferrer">Kriteesh Vajrapani</a></p>
<button class="outlinebutton"><a href="/anveshi/diaries/kriteesh">Read</a></button>
<div class="sectioner mt2"></div>
{#await travelDiary()}
<small>...</small>
{:then data}
<h5>Artwork Inspired by the Hoysala Temples</h5>
<p>by <a href="https://twitter.com/AshishKundalia" target="_blank" rel="noreferrer">Ashish Kundalia</a></p>
<div class="base-row">
	{#each data as item}
	<div class="base-col">
		<Lightbox>
			<img src={item.image} alt={item.id} />
		</Lightbox>
	</div>
	{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}
{#await anveshiVids()}
<small>...</small>
{:then data}
<div class="sectioner mt2"></div>
<h5>Video Testimonials</h5>
<p>view on <a href="https://www.youtube.com/watch?v=avph4IjI6Ig&list=PLMUDDn9Mulpxxqr6Gd-8H0NBNg9I84vR7" target="_blank" rel="noreferrer">YouTube</a></p>
<div class="base-row">
	{#each data as item}
		<div class="base-col">
			<iframe
        width=100%
        height=100%
        src="https://www.youtube.com/embed/{item.videoid}"
        title={item.name}
      ></iframe>
		</div>
	{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}
</div>





<style>
h1, h1 cite { line-height: 1em; margin-bottom: 0; margin-top: 0;}	
h1 cite { font-variant: small-caps; font-size: 16px; font-weight: 400; letter-spacing: 0px; font-style: normal; color: #a7a7a7;}
p { margin-top: 0; }
a { color: #fe4a49;}
.base-col { width: 22%;}
.base-col img { object-fit: cover; height: 200px;}
.base-row { flex-wrap: wrap;}
</style>