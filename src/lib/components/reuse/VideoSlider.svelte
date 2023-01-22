<script>
import supabase from '$lib/db'
  async function Videos() {
    const { data, error } = await supabase
    .from('brhat-youtube')
    .select()
    .order('id',{ascending: false})
    .limit(12)
    if (error) throw new Error(error.message)
    return data
  }
</script>

{#await Videos()}
<small>Loading...</small>
{:then data}
<div class="threebythree p05 gap1">
{#each data as item}
<div class="square">
<iframe
  class="m-1"
  width=100%
  height=100%
  src="https://www.youtube.com/embed/{item.videoid}"
  title={item.name}
  ></iframe>
</div>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}
<button><a href="https://youtube.com/@brhat" target="_blank" rel="noreferrer">Vist Channel</a></button> 

<style>
.threebythree {
	display: flex;
  flex-direction: var(--ohrow);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 1;
}
</style>