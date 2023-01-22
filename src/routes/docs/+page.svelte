<script>
// @ts-nocheck
export const postgrePosts = async () => {
  const allDocFiles = import.meta.glob('/src/routes/docs/*.md')
  const iterableDocFiles = Object.entries(allDocFiles)
  
}
</script>

<h4>Documentation</h4>
{#await postgrePosts()}
<small>....</small>
{:then data}
{#each data as item}
<p>{item.data}</p>
<small>{item.category}</small>
<cite>{item.tag}</cite>
{/each}
{/await}

<style>
h4 { margin-top: 1rem; color: #d7d7d7;}
</style>


