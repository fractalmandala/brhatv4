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

  return allDocs
}
</script>


		{#await postgrePosts()}
		<small>...</small>
		{:then data}
		{#each data as doc}
		<div class="ww4 card">
			<p
				transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"
			><a href={doc.path}>{doc.meta.title}</a></p>
		</div>
		{/each}
		{/await}


<style>

p a:hover { color: #10c56d;}
.card p { margin: 0;}
</style>