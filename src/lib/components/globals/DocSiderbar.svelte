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

  const filteredDocs = allDocs.filter((doc) => doc.meta.tag === "postgreSQL")

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

  const filteredDocs = allDocs.filter((doc) => doc.meta.tag === "supabase")

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

  const filteredDocs = allDocs.filter((doc) => doc.meta.tag === "general" || doc.meta.category === "troubleshooting")

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

<div class="side-bar">	
{#await postgrePosts()}
<small>...</small>
{:then data}
	<h5 class="tagger"><span class=".green" style="color: #10c56d"><b>| </b></span>postgresql</h5>
  {#each data as doc}
	<p><a href={doc.path}>{doc.meta.title}</a></p>
	{/each}
{/await}
{#await supabasePosts()}
<small>...</small>
{:then data}
	<h5 class="tagger"><span class=".green" style="color: #10c56d"><b>| </b></span>supabase</h5>
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
	<h5 class="tagger"><span class=".green" style="color: #10c56d"><b>| </b></span>helpers and guides</h5>
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


.side-bar {
	display: flex;
	flex-direction: column;
	width: 22%;
	background-color: white;
	border-right: 1px solid var(--grey);
	transition: all 0.28s var(--cube3);	
}

.tagger { 
	color: var(--green);
}

.side-bar:hover {
/*
	box-shadow: 5px 5px 10px #d9d9d9,
             -8px -10px 10px #ffffff;
*/
	background-color: white;
	border-right: 1px solid var(--green);
}	


.side-bar p {
	line-height: 1.1em;
	margin-top: 0;
	margin-bottom: 0.48em;
	font-size: 14px;
	color: #878787;
	transform-origin: center left;
	transition: all 0.2s var(--cube3);
}

.side-bar h5 a:hover {
	color: #474747;
}
.side-bar p:hover {
	transform: scale(1.1);
}

.side-bar p a {
	font-weight: 500;
	font-size: 14px;
	color: #878787;
}	


.side-bar h5, .side-bar h5 a {
	font-size: 1.2rem;
	color: #878787;
	opacity: 0.95;
	margin-bottom: 0.88rem;
	font-variant: small-caps;
}

.side-bar a:hover {
	color: var(--green);	
}


</style>