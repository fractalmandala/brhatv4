<script>
import supabase from '$lib/db'
export async function allCourses() {
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('type','overview')
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="imagecontainer-hero" style="background-image: url('/images/herocovers/hinduiconography.webp')" data-scroll-section>
<div class="imagecontainer-screen">
</div>
</div>
<div class="c-c-c-c pad4 l1">
<h3 class="bigger5">
Bṛhat Draṣṭā is our offering in deep learning where we will offer courses on some of the greatest ancient and contemporary philosophers (draṣṭās) and schools of thoughts (darśana). It also seeks to impart the ways of looking and seeing, darśana, so that the learners can also proceed on the path of being draṣṭās.
</h3>
</div>
{#await allCourses()}
<small>loading chapters...</small>
{:then data}
<div class="row-of-3 pad4 l2">
{#each data as item}
	<div class="base-col threebox formal3">
		<img class="rd4" src={item.image} alt={item.name}>
		<h5 class="px1"><a href={item.link}>{item.name}</a></h5>
		<p class="px1">{item.content.slice(0,250)}<a class="isred" href={item.link}>...Read More</a></p>
		<div class="r-r-r-r px1">
				<small>{item.status}</small>
				<small>{item.datefrom}</small>
			</div>
	</div>
{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}


<style>
h5 { text-transform: capitalize;}
.threebox img { object-fit: cover; width: 100%;}
.l2 { background: white;}
.threebox p { color: #878787;}
.threebox small { text-transform: uppercase; font-weight: bold;}
@media screen and (min-width: 900px) {
	.imagecontainer-hero { position: sticky; top: 0; z-index: -1;}
	.l1 h3 { background: rgba(0,0,0,0.7); padding: 32px; color: white;}
	.l1 { height: 100vh; justify-content: center;}
	.threebox { padding: 16px; height: 64%;}
	.threebox p, .threebox h5, .threebox .r-r-r-r { padding-left: 16px; padding-right: 16px;}
	.threebox p { font-size: 16px;}
	.threebox .r-r-r-r { justify-content: space-between;}
	.l2 { height: 100vh; align-items: center;}
}
</style>


