<script>
// @ts-nocheck
export let data;

</script>

<div class="flexbox-c desk-margins m-top-90 outliner">
<h3>{data.title}</h3>
<div class="line"></div>
<div class="sheet p-bot-32">
	<svelte:component this={data.content} />
</div>
</div>
	

<style>

h3 { text-transform: capitalize;}
.line { height: 1px; background-color: #d7d7d7; margin-top: 1rem; margin-bottom: 16px;}


.sheet {
	width: 100%;
	display: flex;
	flex-direction: column;
}



</style>

