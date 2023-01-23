<script>
// @ts-nocheck
export const allDocumentation = async () => {
  const allDocuments = import.meta.glob('/src/routes/docs/*.md')
  const iterableDocFiles = Object.entries(allDocuments)
  
  const allDocs = await Promise.all(
    iterableDocFiles.map(async ([path, resolver]) => {
      // @ts-ignore
      const { metadata } = await resolver()
      const docPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: docPath,
      }
    })
  )

  

  return allDocs
}
</script>


<h4>Documentation</h4>
{#await allDocumentation()}
<small>....</small>
{:then data}
{#each data as item}
<p>{item.meta.title}</p>
<small>{item.meta.category}</small>
<cite>{item.meta.tag}</cite>
{/each}
{/await}


<style>
h4 { margin-top: 1rem; color: #d7d7d7;}
</style>


