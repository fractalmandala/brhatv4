<script>
// @ts-nocheck
export let data;

</script>


<h4>{data.title}</h4>
<small class="metatags"><a href="/docs/category/{data.category}">{data.category}  </a><span> </span><span>    | </span><a class="black" href="/docs">docs home</a></small>
<cite class="category"><a href="/docs/tag/{data.tag}">{data.tag}</a></cite>
<div class="line"></div>
<div class="sheet">
	<svelte:component this={data.content} />
</div>
	

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
.black { color: #878787;}
h4 { 
padding-bottom: 0.4rem; 
font-size: 2.4rem;
font-weight: 600;
text-align: left;
margin-bottom: 0;
color: var(--green);
margin-top: 1rem;
}

.line { width: 60%; height: 1px; background-color: var(--grey); margin-top: 1rem;}


.sheet {
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0 6rem 0 2rem;
}

.category, .metatags {
	text-align: left;
	width: 100%;
}

cite {
	font-style: normal;
text-align: right;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 600;
	font-family: 'JetBrains Mono', monospace;
color: var(--glight); 
width: 100%;	
margin-top: 8px;
}

small a {
color: var(--green);
}


</style>

