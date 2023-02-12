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
	
	const filteredDocs = allDocs.filter((doc) => doc.meta.tag === "sveltecode")

  return filteredDocs
}
</script>

<div class="c-c-c-c">
		{#await postgrePosts()}
		<small>...</small>
		{:then data}
		{#each data as doc}
		<small><a href={doc.path}>{doc.meta.title}</a></small>
		{/each}
		{/await}
</div>

<style>
p, small { margin: 0; text-transform: capitalize;}
a { color: #272727;}
.c-c-c-c p, .c-c-c-c a { font-size: 1.12em; margin-top: 0; margin-bottom: 0;}

@media screen and (min-width: 768px) {
	.c-c-c-c { flex-wrap: wrap; width: 100%; display: flex; flex-direction: row; padding-top: 16px;}
}
</style>