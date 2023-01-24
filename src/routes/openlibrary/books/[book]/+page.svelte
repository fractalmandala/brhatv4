<script lang="ts">
export let data: { author: any; Description: any; Type: any; Text: any; Extract: any; }
</script>

<small>{data.Type} | <span class="isred">{data.author}</span></small>
<h1>{data.Text}</h1>
<p>{data.Description}</p>
<div class="base-col">
<iframe 
	src={data.Extract}
	title={data.Text}
	width="100%" 
	height="100%" 
	allowFullScreen
	>
	</iframe>
</div>

<style>
small { text-transform: uppercase; font-weight: bold; color: var(--blue);}
h1 { border-bottom: 4px solid var(--blue); margin-top: 6px;}
.base-col { border-radius: 8px;}

@media screen and (min-width: 768px) {
	.base-col { padding: 2rem; height: 560px;}	
	p { font-size: 1.12rem; color: #878787;}
}

@media screen and (max-width: 767px) {
	.base-col { padding: 2rem 1rem; height: 640px;}
}
</style>
