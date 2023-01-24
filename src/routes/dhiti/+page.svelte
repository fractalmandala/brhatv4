<script>
import supabase from '$lib/db'
export async function latestDhiti(){
	const { data, error } = await supabase
	.from('brhat-dhiti')
	.select()
	.order('sequence',{ascending: false})
	.limit(1)
	if (error) throw new Error(error.message)
	return data
}

export async function nextDhiti(){
	const { data, error } = await supabase
	.from('brhat-dhiti')
	.select()
	.order('sequence',{ascending: false})
	.range(1,3)
	.limit(3)
	if (error) throw new Error(error.message)
	return data
}

export async function listDhiti(){
	const { data, error } = await supabase
	.from('brhat-dhiti')
	.select()
	.order('sequence',{ascending: false})
	.range(4,9)
	.limit(6)
	if (error) throw new Error(error.message)
	return data
}
</script>


<div class="primecontainer-col">
<div class="base-col col1">
<img src="/images/brhatlogos/blackwhite/dhiti-white.png" alt="dhiti" />
</div>
<div class="primecontainer-inrow pt2">
<div class="side-dhiti colA">
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
</div>
</div>
</div>

<style>
.col1 img { width: 240px; object-fit: contain;}
.col1 { height: 160px; align-items: center; justify-content: flex-end; border-bottom: 1px solid #e1e1e1; width: calc(100% - 64px); margin-left: 32px;}
.source { font-weight: 900;}
.colpost img { border-radius: 6px;}
.colpost h3, .colpost h3 a { transition: all 0.18s var(--cube4);}
.colpost h3:hover, .colpost h3:hover a { color: var(--blue);}
.mainpost .isred { color: var(--red);}
.mainpost .isgrey { color: #878787;}
.mainpost { border-top: 1px solid #d7d7d7;}

@media screen and (min-width: 900px) {
	.colA { width: 24vw; padding: 0 2rem;}
	.colB { width: 46vw; padding: 0 2rem;}
	.colC { width: 30vw; padding: 0 2rem 0 2rem;}
	.colpost h3 { margin-top: 1rem; line-height: 1.12em; font-size: 2.4rem; margin-bottom: 0; }
	.colpost p { color: #676767; font-weight: 400; font-size: 1.2rem;}
	.colpost img { object-fit: cover; height: 240px;}
	.colpost small { color: white; text-transform: uppercase; font-style: normal; font-size: 16px; margin-bottom: -2rem; z-index: 2; margin-left: -8px;}
	.mainpost small { font-size: 12px; text-transform: uppercase; font-weight: bold;}
	.mainpost { justify-content: space-between; padding: 1rem 2rem 0 0;}
	.nextpost { margin-bottom: 2.4rem; justify-content: flex-start; border-bottom: 1px solid #d7d7d7;}
	.nextpost img { object-fit: cover; height: 88px;}
	.nextpost h5 { margin-top: 8px; letter-spacing: -0.5px; font-size: 1.2rem; line-height: 1.2em; font-weight: 600; margin-bottom: 8px;}
	.nextpost .small { color: #878787; text-transform: uppercase; font-size: 10px; font-weight: bold;}
	.isblue { text-transform: uppercase; font-size: 10px; font-weight: bold;}
	.list-item { margin-bottom: 1.4rem; border-bottom: 1px solid #e1e1e1; padding-bottom: 6px;}
	.list-item p { font-size: 1rem; letter-spacing: -0.5px; font-weight: 500; margin-top: 0; margin-bottom: 4px;}
	.list-row { justify-content: space-between;}
	.list-item p:hover a:hover { color: var(--blue);}
	.list-r { text-align: right; width: max-content; font-size: 10px; text-transform: uppercase; font-weight: bold; line-height: 1em;}
	.list-l { color: #878787; width: 64%;font-size: 10px; text-transform: uppercase; font-weight: bold; line-height: 1em;}
}
</style>
