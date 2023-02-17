<script>
import supabase from '$lib/db'
import { Lightbox } from 'svelte-lightbox'
let y = 1
async function getImages(){
	const { data, error } = await supabase
	.from('MidjourneyImages')
	.select()
	.order('id',{ascending: false})
	.limit(96)
	if (error) throw new Error(error.message)
	return data
}
</script>
<svelte:window bind:scrollY={y}/>
{#await getImages()}
<small>...</small>
{:then data}
<div class="r-r-r-r l100">
	{#each data as item}
	<div class="c-c-c-c" id="item-{item.id}">
	<Lightbox>
		<img src={item.link} alt={item.id} />
	</Lightbox>
	</div>
	{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}

<style>

.l100 .c-c-c-c img { object-fit: cover; height: 100%;}

.l100 .c-c-c-c {
	transform-origin: center center;
	transition: transform 0.23s var(--cube2);
	border: 1px solid white;
	justify-content: center;
	overflow: hidden;
}
.l100 .c-c-c-c:hover {
	transform: scale(1.2) translateY(-20px);
	animation: comedown 0.3s var(--cube5) 0.23s forwards;
}

@keyframes comedown {
	0% { transform: translateY(-20px) scale(1.2);}
	100% { transform: translateY(0) scale(1.2);}
}

@media screen and (min-width: 768px) {
	.l100 { height: calc(100vh - 72px); width: 100vw; flex-wrap: wrap; margin-top: 72px; }
	.l100 .c-c-c-c { width: calc(100%/12); height: calc(100%/8);}

}

@media screen and (max-width: 768px) {
	.l100 {
		height: 100vh;
		width: 100vw;
		flex-wrap: wrap;
		
	}
	.l100 .c-c-c-c { width: 16.6%; height: 6.25%; }
}

</style>
