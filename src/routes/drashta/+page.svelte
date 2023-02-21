<script>
import supabase from '$lib/db'
export async function allCourses() {
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type','overview')
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="flexbox-r full">
	<div class="in-col cc-y-col wide60 pad-x-l">
		<h3 class="w300">
			Bṛhat Draṣṭā is an offering in deep learning that offers courses on some of the greatest ancient and contemporary philosophers (draṣṭās) and schools of thoughts (darśana).
		</h3>
	</div>
	<div class="in-col cc-y-col wide40 im-col">
		<img src="/images/drashta/bigdrashta.png" alt="drashtatop" />
	</div>
</div>

<div class="flexbox-r of-four pad-x-40 l2">
{#await allCourses()}
<small>loading chapters...</small>
{:then data}
{#each data as item}
	<div class="in-col wide25 formal3">
		<img src={item.image} alt={item.name}>
		<h6 class="w600"><a href={item.link}>{item.name}</a></h6>
		<small>{item.content.slice(0,250)}<a class="isred" href={item.link}>...Read More</a></small>
		<div class="in-col">
				<p>{item.status}</p>
				<p>{item.datefrom}</p>
			</div>
	</div>
{/each}
{:catch error}
<pre>{error}</pre>
{/await}
</div>


<style>

@media screen and (min-width: 900px) {
	.l2 { height: 100vh; align-items: flex-start;}
	.in-col.wide25 img { height: 160px; object-fit: cover; width: 100%;}
	.in-col.wide25 h6 { text-transform: capitalize; padding-top: 16px; line-height: 1.1;}
	.in-col.wide25 small { color: #878787;}
	.formal3 .in-col p { margin-bottom: 0; text-transform: uppercase;}
}
</style>


