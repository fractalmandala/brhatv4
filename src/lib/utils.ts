export const fetchMarkdownPosts = async () => {
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

  return allDocs
}

export const fetchDhitiPosts = async () => {
  const allPostFiles= import.meta.glob('/src/routes/dhiti/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)
  
  const allDhitis = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const dhitiPath = path.slice(12, -3)

      return {
        meta: metadata,
        path: dhitiPath,
      }
    })
  )

  return allDhitis
}