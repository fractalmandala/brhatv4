<script>
import { fly } from 'svelte/transition'
import { quartIn } from 'svelte/easing'
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
	
	const filteredDocs = allDocs.filter((doc) => doc.meta.tag === "general")

  return filteredDocs
}
</script>

<div class="flexbox-c">
		{#await postgrePosts()}
		<small>...</small>
		{:then data}
		{#each data as doc}
			<small
				transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"
			><a href={doc.path}>{doc.meta.title}</a></small>
		{/each}
		{/await}
</div>

<style>
small { text-transform: capitalize; margin: 0 0 4px 0; padding: 0; color: #878787;}
.flexbox-c { margin-bottom: 12px;}
</style>