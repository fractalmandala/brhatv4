<script>
// @ts-nocheck
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

export const Codes = async () => {
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

</script>

<div class="side-bars">	
	<div class="accordions">
		<h5>documentation</h5>
		{#await postgrePosts()}
		<small>...</small>
		{:then data}
			<div class="content">
			{#each data as doc}
			<p
				transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"
			><a href={doc.path}>{doc.meta.title}</a></p>
			{/each}
			</div>
		{/await}
	</div>
	<div class="accordions">
		<h5>docs</h5>
		{#await postgrPosts()}
		<small>...</small>
		{:then data}
			<div class="content">
			{#each data as doc}
			<p
				transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"
			><a href={doc.path}>{doc.meta.title}</a></p>
			{/each}
			</div>
		{/await}
	</div>
	<div class="accordions">
		<h5>supabase</h5>
		{#await supabasePosts()}
		<small>...</small>
		{:then data}
			<div class="content">
			{#each data as doc}
			<p
				transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"
			><a href={doc.path}>{doc.meta.title}</a></p>
			{/each}
			</div>
		{/await}
	</div>
	<div class="accordions">
		<h5>animate</h5>
		{#await animatePosts()}
		<small>...</small>
		{:then data}
			<div class="content">
			{#each data as doc}
			<p
				transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"
			><a href={doc.path}>{doc.meta.title}</a></p>
			{/each}
			</div>
		{/await}
	</div>
	<div class="accordions">
		<h5>guide</h5>
		{#await sveltePosts()}
		<small>...</small>
		{:then data}
			<div class="content">
			{#each data as doc}
			<p
				transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"
			><a href={doc.path}>{doc.meta.title}</a></p>
			{/each}
			</div>
		{/await}
	</div>
	<div class="accordions">
		<h5>svelte</h5>
		{#await sveltePosts()}
		<small>...</small>
		{:then data}
			<div class="content">
			{#each data as doc}
			<p
				transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"
			><a href={doc.path}>{doc.meta.title}</a></p>
			{/each}
			</div>
		{/await}
	</div>
	<div class="accordions">
		<h5>codes</h5>
		{#await Codes()}
		<small>...</small>
		{:then data}
			<div class="content">
			{#each data as doc}
			<p
				transition:fly="{{duration: 300, x: -300, y: 0, easing: quartIn }}"
			><a href={doc.path}>{doc.meta.title}</a></p>
			{/each}
			</div>
		{/await}
	</div>
</div>	


<style>
  .accordions {
    color: black;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
  }

	.accordions:hover .content {
		display: flex;
	}

	.content {
		display: none;
		flex-direction: column;
		height: 100%;
		z-index: 300;
		transition: all 0.33s var(--cube2);
	}

	.side-bars {
		display: flex;
		flex-direction: column;
	}

	.side-bars h5 {
		margin-top: 1em;
		margin-bottom: 4px;
		text-transform: capitalize;
		font-size: 1.2em;
		color: white;
		font-weight: 400;
	}

	.side-bars p {
		margin-top: 4px;
		margin-bottom: 6px;
		font-size: 14px;
		text-transform: capitalize;
		color: white;
	}

	.side-bars p:hover {
		transform: scale(1.1);
		transform-origin: center left;
	}

	.side-bars p a {
		transition: all 0.08s var(--cube1);
		text-transform: capitalize;
		color: white;
	}

	.side-bars a:hover {
		color: #10c56D;
	}

	@media screen and (min-width: 900px) {
		.side-bars {
			width: 20vw;
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