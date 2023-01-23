<script>
// @ts-nocheck
// @ts-ignore
import AuthorBox from '$lib/components/pagecomps/AuthorBox.svelte'
/**
	 * @type {{ category: any; title: any; author: any; date: any; tags: any; content: any; image: any; }}
	 */
 export let data;
</script>
<div class="imagecontainer-hero" style="background-image: url({data.image})"></div>
<div class="primecontainer-row">
<div class="dhiti-bar"></div>
<div class="dhitisheet">
<small style="color: #a7a7a7; font-variant: small-caps"><b class="isred">| </b>{data.tags}</small>
<h1 class="source">{data.title}</h1>
<div class="base-row">
<p class="label" style="text-transform: uppercase">{data.category}</p>
<AuthorBox>{data.author}</AuthorBox>
<p class="label2" style="text-transform: uppercase">{data.author}</p>
</div>
<div class="dhiti-post">
<svelte:component this={data.content} />
</div>
</div>
</div>


