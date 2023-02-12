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

  const filteredDocs = allDocs.filter((doc) => doc.meta.category === "documentation")

  return filteredDocs
}
</script>

<div class="c-c-c-c">
		{#await postgrePosts()}
		<small>...</small>
		{:then data}
			<div class="content">
			{#each data as doc}
			<p
				transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"
			><a href={doc.path}>{doc.meta.title}</a></p>
			<small>{doc.meta.tag}</small>
			{/each}
			</div>
		{/await}
</div>

<style>
p, small { margin: 0; text-transform: capitalize;}
a { color: #272727;}
</style>