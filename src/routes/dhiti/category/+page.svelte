<script>
export const Tags = async() => {
	const allPostFiles = import.meta.glob('/src/routes/dhiti/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(11,-3)
      return {
        meta: metadata,
        path: postPath
      }
    })
  )
	const allTags = allPosts.flatMap(post => post.meta.author)
	const distinctTags = [...new Set(allTags)].sort()
	return distinctTags	
}
</script>

	<div class="in-col l4">
		{#await Tags()}
		<small>...</small>
		{:then cutup}
		{#each cutup as item}
		<small>{item}<br>
		</small>
		{/each}
		{/await}
	</div>