<script>
// @ts-nocheck
export let data;

</script>

<div class="flexbox-c outliner">
<h4>{data.title}</h4>
<div class="line"></div>
<div class="sheet">
	<svelte:component this={data.content} />
</div>
</div>
	

<style>

h4 { text-transform: capitalize;}
.line { height: 1px; background-color: #d7d7d7; margin-top: 1rem; margin-bottom: 16px;}


.sheet {
	width: 100%;
	display: flex;
	flex-direction: column;
}



</style>

