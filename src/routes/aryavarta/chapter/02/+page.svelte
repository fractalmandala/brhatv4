<script lang="ts">
export let data = {}
$: dataArray = data.data || []
</script>


<div class="flexbox-c desk-margins">
{#each dataArray as item}
<div class="in-row fully">
		<div class="wide40 in-col all-cc">
			<small class="wbold orange">{item.id}</small>
			<h5 class="w400">{item.text}</h5>
		</div>
		<div class="wide60 in-col all-cc">
			<img src={item.image} alt={item.id} />
		</div>
	</div>
{/each}
</div>


<style>


.wide60 img {
	object-fit: cover;
	width: 88%;
	height: 80%;
}
.fully h5 { color: #272727;}
.in-row .wide40 { align-items: flex-start;}
</style>

