<script>
// @ts-nocheck
export let data;

</script>


<h5>{data.title}</h5>
<small><a class="black" href="/docs">HOME</a></small>
<cite class="category green">{data.tag}</cite>
<div class="line"></div>
<div class="sheet">
	<svelte:component this={data.content} />
</div>
	

<style>
* { color: #272727;}

.black { color: #878787;}
h5 { text-transform: capitalize;}

.line { width: 60%; height: 1px; background-color: var(--grey); margin-top: 1rem;}


.sheet {
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0 6rem 0 2rem;
	color: #272727;
}

.sheet, .sheet h5, .sheet p { color: #272727 !important;}

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
width: 100%;	
}

small a {
color: var(--green);
}


</style>

