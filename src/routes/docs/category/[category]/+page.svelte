
<script>
// @ts-nocheck
/**
	 * @type {{ posts: any; }}
	 */
 export let data
</script>

<div class="a-col">
<h4>{data.category}</h4>
</div>
<div class="sheet mt1">
				{#each data.posts as post}
	<div class="docbox">
			<div class="tags">
				<p><a href={post.path}>{post.meta.title}</a></p>
				<cite><a href="/docs/tag/{post.meta.tag}">{post.meta.tag}</a></cite>
	</div></div>		
	{/each}
</div>




<style>
.docbox {
	display: flex;
	flex-direction: column;
	max-width: 240px;

}
	
h4 { 
padding-bottom: 0.4rem; 
font-size: 1.6rem;
font-weight: 600;
text-align: left;
margin-bottom: 0;
text-transform: capitalize;
}
cite {
	font-style: normal;
text-align: left;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 400;
	font-family: 'JetBrains Mono', monospace;
color: var(--green); 
width: 100%;	
}

cite a { color: var(--green); }

.a-col {
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
	padding-left: 3rem;
}

.sheet {
	border-top: 1px solid #e1e1e1;
	padding-top: 2rem;
	padding-left: 4rem;

}





</style>

