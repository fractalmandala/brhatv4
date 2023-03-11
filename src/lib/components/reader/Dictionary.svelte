<script>
import supabase from '$lib/db'
/**
	 * @type {any}
	 */
 export let y
export async function Dictionary(){
	const { data, error } = await supabase
	.from('db-dictionary')
	.select()
	.eq('word',y)
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="boxc">
{#await Dictionary()}
<small>...</small>
{:then data}
{#each data as item}
<div class="boxc">
	<p>{item.meanings}</p>
</div>
{/each}
{:catch error}
<pre>{error}</pre>
{/await}
</div>

<style lang="sass">

.boxc
	p
		margin: 0
		font-size: 14px
		padding: 8px 0 4px 0
		color: #878787
		line-height: 1.28

</style>