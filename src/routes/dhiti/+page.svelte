<script>

/**
	 * @type {{ posts: any; }}
	 */
 export let data

</script>


<div class="primecontainer-col">
<div class="primecontainer-inrow pt2">
<div class="side-dhiti colA">
{#each data.posts as post}
<h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
 </h2>
{/each}
<!--
{#await listDhiti()}
<small>...</small>
{:then data}
{#each data as item}
<div class="base-col list-item">
	<p class="source"><a href={item.link}>{item.title}</a></p>
	<div class="base-row list-row">
		<small class="list-l">{item.author}</small>
		<small class="list-r">{item.category}</small>
	</div>
</div>
{/each}
{:catch error}
<pre>{error}</pre>
{/await}
</div>
<div class="base-col colB">
{#await latestDhiti()}
<small>...</small>
{:then data}
{#each data as item}
<div class="base-col colpost">
	<small class="label">{item.category}</small>
	<img src={item.image} alt={item.title}>
	<h3 class="source"><a href={item.link}>{item.title}</a></h3>
	<p class="stix">{item.excerpt}</p>
	<div class="base-row mainpost">
		<small class="isred">{item.author}</small>
		<small class="isgrey">{item.tags}</small>
	</div>
</div>
{/each}
{:catch error}
<pre>{error}</pre>
{/await}
</div>
<div class="base-col colC">
{#await nextDhiti()}
<small>...</small>
{:then data}
{#each data as item}
<div class="base-col nextpost">
	<img src={item.image} alt={item.title} />
	<h5 class="source"><a href={item.link}>{item.title}</a></h5>
	<small class="small">{item.author}</small>
	<small class="isblue">{item.category}</small>
</div>
{/each}
{:catch error}
<pre>{error}</pre>
{/await}
-->

</div>
</div>
</div>

