<script>
import supabase from '$lib/db'

export async function odisha(){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','chapter')
	.eq('chapter','odisha')
	if (error) throw new Error(error.message)
	return data
}

</script>

{#await odisha()}
<small>loading...</small>
{:then data}
{#each data as item}
<div class="blog-pad">
<h1>{item.name}</h1>
<div class="base-row row-x-left">
	<div class="base-col col-y-cent col-x-cent" id="duration">
		<div class="imagecontainer-screen">
			<h5 class="cc iswhite">{item.duration}</h5>
		</div>
	</div>
	<div class="base-col col-y-cent col-x-cent" id="price">
		<div class="imagecontainer-screen">
			<h5 class="cc iswhite">{item.price}</h5>
		</div>
	</div>
	<div class="base-col col-y-cent col-x-cent" id="date">
		<div class="imagecontainer-screen">
			<h5 class="cc iswhite">{item.dates}</h5>
		</div>
	</div>
</div>
<p>{item.content}</p>
<div class="base-row row-x-left">
	<div class="base-col">
		<button class="imagebutton"><a href="/anveshi/chapter/odisha/itinerary">View Itinerary</a></button>
	</div>
	<div class="base-col">
		<button class="imagebutton"><a href="/anveshi/chapter/odisha/temples">View Temples</a></button>
	</div>
</div>
</div>
{/each}
{:catch error}
<pre>{error}</pre>
{/await}

<style>
:root { --image: url('/images/anveshi/keykar.webp');}
#duration, #price, #date { background-size: cover; background-position: center center; background-repeat: no-repeat;}

#duration { background-image: url('/images/socialicons/icon-duration.webp');}
#price { background-image: url('/images/socialicons/icon-price.webp');}
#date { background-image: url('/images/socialicons/icon-date.webp');}
.base-col { width: 160px; height: 160px;}

.imagecontainer-screen { transition: all 0.24s var(--cube1); border-radius: 4px;}
.imagecontainer-screen:hover { background-color: rgba(0,0,0,0);}
.imagecontainer-screen:hover h5 { opacity: 0;}
.imagecontainer-screen h5 { text-shadow: 6px 8px 12px rgba(0,0,0,1);}
</style>