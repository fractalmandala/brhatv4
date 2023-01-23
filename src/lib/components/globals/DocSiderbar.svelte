<script>
// @ts-nocheck

export const postgrePosts = async () => {
  const allDocFiles = import.meta.glob('/src/routes/docs/*.md')
  const iterableDocFiles = Object.entries(allDocFiles)
  
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

  const filteredDocs = allDocs.filter((doc) => doc.meta.category === "documentation")

  return filteredDocs
}

export const supabasePosts = async () => {
  const allDocFiles = import.meta.glob('/src/routes/docs/*.md')
  const iterableDocFiles = Object.entries(allDocFiles)
  
  const allDocs = await Promise.all(
    iterableDocFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const docPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: docPath,
      }
    })
  )

  const filteredDocs = allDocs.filter((doc) => doc.meta.category === "codes")

  return filteredDocs
}

export const animatePosts = async () => {
  const allDocFiles = import.meta.glob('/src/routes/docs/*.md')
  const iterableDocFiles = Object.entries(allDocFiles)
  
  const allDocs = await Promise.all(
    iterableDocFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const docPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: docPath,
      }
    })
  )

  const filteredDocs = allDocs.filter((doc) => doc.meta.category === "libraries")

  return filteredDocs
}

export const guidePosts = async () => {
  const allDocFiles = import.meta.glob('/src/routes/docs/*.md')
  const iterableDocFiles = Object.entries(allDocFiles)
  
  const allDocs = await Promise.all(
    iterableDocFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const docPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: docPath,
      }
    })
  )

  const filteredDocs = allDocs.filter((doc) => doc.meta.category === "troubleshooting")

  return filteredDocs
}

export const sveltePosts = async () => {
  const allDocFiles = import.meta.glob('/src/routes/docs/*.md')
  const iterableDocFiles = Object.entries(allDocFiles)
  
  const allDocs = await Promise.all(
    iterableDocFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const docPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: docPath,
      }
    })
  )

  const filteredDocs = allDocs.filter((doc) => doc.meta.tag === "sveltecode")

  return filteredDocs
}
</script>

<div class="side-bar2">	
{#await postgrePosts()}
<small>...</small>
{:then data}
	<h5><span class=".green" style="color: #10c56d"><b>| </b></span>documentation</h5>
  {#each data as doc}
	<p><a href={doc.path}>{doc.meta.title}</a></p>
	{/each}
{/await}
{#await supabasePosts()}
<small>...</small>
{:then data}
	<h5 class="tagger"><span class=".green" style="color: #10c56d"><b>| </b></span>codes</h5>
  {#each data as doc}
	<p><a href={doc.path}>{doc.meta.title}</a></p>
	{/each}
{/await}
{#await animatePosts()}
<small>...</small>
{:then data}
	<h5 class="tagger"><span class=".green" style="color: #10c56d"><b>| </b></span>libraries</h5>
  {#each data as doc}
	<p><a href={doc.path}>{doc.meta.title}</a></p>
	{/each}
{/await}
{#await guidePosts()}
<small>...</small>
{:then data}
	<h5 class="tagger"><span class=".green" style="color: #10c56d"><b>| </b></span>troubleshooting</h5>
  {#each data as doc}
	<p><a href={doc.path}>{doc.meta.title}</a></p>
	{/each}
{/await}
{#await sveltePosts()}
<small>...</small>
{:then data}
	<h5 class="tagger"><span class=".green" style="color: #10c56d"><b>| </b></span>svelte codes</h5>
  {#each data as doc}
	<p><a href={doc.path}>{doc.meta.title}</a></p>
	{/each}
{/await}
</div>
