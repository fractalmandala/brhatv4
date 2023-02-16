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
	
	const filteredDocs = allDocs.filter((doc) => doc.meta.tag === "animation")

  return filteredDocs
}
</script>

<div class="c-c-c-c">
		{#await postgrePosts()}
		<small>...</small>
		{:then data}
		{#each data as doc}
			<div class="content">
			<p
				transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"
			><a href={doc.path}>{doc.meta.title}</a></p>
			</div>
		{/each}
		{/await}
</div>

<style>
	.content { width: 100%; }
	.c-c-c-c { width: 100%; }
</style>