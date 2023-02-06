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

export const postgrPosts = async () => {
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

  const filteredDocs = allDocs.filter((doc) => doc.meta.tag === "supabase")

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

<div class="side-bars">	
{#await postgrePosts()}
<small>...</small>
{:then data}
	<h5><span class=".green" style="color: #10c56d"><b>| </b></span>documentation</h5>
  {#each data as doc}
	<p><a href={doc.path}>{doc.meta.title}</a></p>
	{/each}
{/await}
{#await postgrPosts()}
<small>...</small>
{:then data}
	<h5><span class=".green" style="color: #10c56d"><b>| </b></span>supabase</h5>
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

<style>
	.side-bars {
		display: flex;
		flex-direction: column;
	}

	.side-bars h5 {
		margin-top: 1em;
		margin-bottom: 4px;
		text-transform: uppercase;
		font-size: 1em;
	}

	.side-bars p {
		margin-top: 4px;
		margin-bottom: 6px;
		font-size: 14px;
		text-transform: capitalize;
		color: #878787;
	}

	.side-bars p:hover {
		transform: scale(1.1);
		transform-origin: center left;
	}

	.side-bars p a {
		transition: all 0.08s var(--cube1);
		text-transform: capitalize;
		color: #878787;
	}

	.side-bars a:hover {
		color: #10c56D;
	}

	@media screen and (min-width: 900px) {
		.side-bars {
			width: 25vw;
			padding-left: 2em;
			border-right: 1px solid #373737;
			padding-bottom: 2em;
			height: 88vh;
			position: sticky;
			top: 0;
			left: 0;
			overflow-y: scroll;
		}
	}

	@media screen and (max-width: 899px) and (min-width: 768px) {
		.side-bars {
			width: 25vw;
		}
	}

</style>