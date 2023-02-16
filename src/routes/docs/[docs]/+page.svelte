<script>
// @ts-nocheck
export let data;

</script>


<h4>{data.title}</h4>
<cite class="category green">{data.tag}</cite>
<cite class="category green">{data.category}</cite>
<div class="line"></div>
<div class="sheet">
	<svelte:component this={data.content} />
</div>
	

<style>


.line { height: 1px; background-color: #d7d7d7; margin-top: 1rem; margin-bottom: 16px;}


.sheet {
	width: 100%;
	display: flex;
	flex-direction: column;
}

.category {
	text-align: left;
	width: 100%;
}

cite {
	font-style: normal;
	text-align: right;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 600;
	width: 100%;	
}


</style>

