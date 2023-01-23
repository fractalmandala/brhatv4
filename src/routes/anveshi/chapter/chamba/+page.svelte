<script>
import supabase from '$lib/db'

export async function chamba(){
	const { data, error } = await supabase
	.from('brhat-anveshi')
	.select()
	.eq('type','chapter')
	.eq('chapter','chamba')
	if (error) throw new Error(error.message)
	return data
}

</script>

{#await chamba()}
<small>loading...</small>
{:then data}
{#each data as item}
<div class="blog-pad">
<h1>{item.name}</h1>
<div class="base-row row-x-left">
	<div class="base-col col-y-cent col-x-cent" id="duration">
		<img src="/images/socialicons/icon-duration.webp" alt="duration" />
		<caption class="cc">{item.duration}<br>
			<cite>duration</cite>
		</caption>
	</div>
	<div class="base-col col-y-cent col-x-cent" id="price">
		<img src="/images/socialicons/icon-price.webp" alt="price" />
		<caption class="cc">{item.price}<br>
			<cite>price</cite>
		</caption>
	</div>
	<div class="base-col col-y-cent col-x-cent" id="date">
		<img src="/images/socialicons/icon-date.webp" alt="date" />
		<caption class="cc">{item.dates}<br>
			<cite>next trip</cite>
		</caption>
	</div>
</div>
<p class="mt2">{item.content}</p>
<div class="base-row row-x-left">
	<div class="base-col">
		<button class="imagebutton"><a href="/anveshi/chapter/chamba/itinerary">View Itinerary</a></button>
	</div>
	<div class="base-col">
		<button class="imagebutton"><a href="/anveshi/chapter/chamba/temples">View Temples</a></button>
	</div>
</div>
</div>
{/each}
{:catch error}
<pre>{error}</pre>
{/await}

<style>
.base-col img { object-fit: contain; width: 48px;transform-origin: center center; transition: all 0.23s var(--cube1); }
.base-col:hover img { transform: scale(0.9);}
.base-col caption { text-transform: uppercase; font-weight: bold; color: #a7a7a7; line-height: 1em;transition: all 0.18s var(--snap); margin-top: 12px; transform-origin: center center;}
.base-col:hover caption { color: #fe4a49;}
caption cite { font-variant: small-caps; font-size: 12px; font-style: normal; visibility: hidden; transform: translateY(48px);transform-origin: center center; transition: all 0.23s var(--cube1);}
.base-col:hover caption cite { visibility: visible; transform: translateY(0);}
#date, #duration, #price { height: 80px; justify-content: space-between;}
@media screen and (min-width: 768px) { #price { margin: 0 32px;}}
</style>