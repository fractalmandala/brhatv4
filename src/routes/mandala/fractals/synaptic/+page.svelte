<script>
import supabase from '$lib/db'

export async function synaptic(){
	const { data, error } = await supabase
	.from('db-synaptic')
	.select()
	.order('id')
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="flexbox-c imgbox l0">
	<div class="flexbox-c desk-margins screen sansa">
		{#await synaptic()}
		<small class="green">...</small>
		{:then data}
		{#each data as item}
			<div class="in-row datapoint sansa">
				<div class="in-col wide50">
					<h2>{item.root}</h2>
					<h5 class="w400">{item.evocation}</h5>
				</div>
				<div class="in-col wide50">
					<h6 class="m-top-24 w300">{item.meaning}</h6>
					<p class="m-top-24">{item.explanation}</p>
					<p class="m-top-24">{item.detail}</p>
				</div>
			</div>
		{/each}
		{:catch error}
		<pre>{error}</pre>
	{/await}
	</div>
</div>

<style>

.l0 { background-image: var(--beau);}
.screen { background: rgba(0,0,0,0);}

.datapoint h2 { color: #10D56E;}
.datapoint h6, .datapoint p, .datapoint small, .datapoint h5 { color: white;}

@media screen and (min-width: 900px){
	.l0 { padding-top: 120px;}
	.datapoint {
		padding: 16px;
		width: 100%;
		align-items: flex-start;
		gap: 48px;
		margin-bottom: 32px;
	}
	.datapoint h2 { margin-top: 24px;}
}
</style>