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

<div class="corp-docs">
<h1>Anveṣī Travel Diaries<br>
</h1>
<h4>Karnataka Travel Diary</h4>
<p>an essay by <a href="https://twitter.com/Vajrapani4" target="_blank" rel="noreferrer">Kriteesh Vajrapani</a></p>
<button class="outlinebutton"><a href="/anveshi/diaries/kriteesh">Read</a></button>
{#await travelDiary()}
<small>...</small>
{:then data}
<h4>Artwork Inspired by the Hoysala Temples</h4>
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
<h4>Video Testimonials</h4>
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
h1 { line-height: 1em; margin-bottom: 0; margin-top: 0;}	
p { margin-top: 0; }
a { color: #fe4a49;}
.base-col { width: 22%;}
.base-col img { object-fit: cover; height: 200px;}
.base-row { flex-wrap: wrap;}
</style>