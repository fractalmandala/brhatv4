<script lang="ts">
export let data = {}
$: dataArray = data.data || []
</script>


<div class="pad-a">
{#each dataArray as item}
	<div class="traybox wrap y-full">
		<div class="ww2">
			<small class="wbold orange">{item.id}</small>
			<h5 class="w400">{item.text}</h5>
		</div>
		<div class="ww2">
			<img src={item.image} alt={item.id} />
		</div>
	</div>
{/each}
</div>



<style>

.ww2 img {
	object-fit: cover;
	width: 88%;
	height: 80%;
}
.ww2 h5 { color: #272727;}
.ww2 { align-items: flex-start;}

</style>

