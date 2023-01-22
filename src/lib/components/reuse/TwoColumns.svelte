<script>
  import supabase from '$lib/db'
 import Container from '$lib/components/reuse/Container.svelte'
 import BoxHeader from '$lib/components/reuse/BoxHeader.svelte'
 import EffectBox from '$lib/components/reuse/EffectBox.svelte'

  async function UpdateOne() {
    const { data, error } = await supabase
      .from('brhat-updates')
      .select()
      .order('sequence',{ascending: false})
      .limit(1)
      if (error) throw new Error(error.message)
      return data
  }
</script>

<Container --align="center">
<BoxHeader><h1>An Update on DCF</h1></BoxHeader>
{#await UpdateOne()}
<small>Loading...</small>
{:then data}
<EffectBox>
  {#each data as item}
<div class="abbdr">
	<div class="colcol col1">
		<img src={item.image} alt={item.id} />
	</div>
	<div class="colcol col2 p1">
		<h5>{item.heading}</h5>
		<pre>{item.shorttext}</pre>
	</div>
</div>
{/each}
</EffectBox>
{:catch error}
<pre>{error}</pre>
{/await}
</Container>

<style>
img { object-fit: cover; width: 100%; height: 100%;}

pre {
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
color: var(--mute);
}

.abbdr {
display: flex;
flex-direction: row;
align-items: flex-start;
width: 100%;
}

.abbdr h5 { margin-top: 0;}
@media screen and (min-width: 900px) {
.col1 { width: 40%; height: 100%;}
.col2 { width: 60%; height: 100%;}
}
</style>