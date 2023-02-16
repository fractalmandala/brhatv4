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

<div class="imagecontainer-hero" style="background-image: url('/images/herocovers/bolherobrhat.png')">
<div class="imagecontainer-screen">
</div>
</div>
<div class="c-c-c-c pad4 l1">
<h3 class="bigger5">
Bṛhat Draṣṭā is our offering in deep learning where we will offer courses on some of the greatest ancient and contemporary philosophers (draṣṭās) and schools of thoughts (darśana).
</h3>
</div>
{#await allCourses()}
<small>loading chapters...</small>
{:then data}
<div class="row-of-4 pad4 l2">
{#each data as item}
	<div class="base-col fourbox formal3">
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
.fourbox img { object-fit: cover; width: 100%;}
.l2 { background: white;}
.fourbox p { color: #878787;}
.fourbox small { text-transform: uppercase; font-weight: bold;}
.bigger5 { font-weight: 300;}
@media screen and (min-width: 900px) {
	.imagecontainer-hero { position: sticky; top: 0; z-index: -1;}
	.l1 h3 { background: rgba(0,0,0,0.7); padding: 32px; color: white;}
	.l1 { height: 100vh; justify-content: center;}
	.fourbox { height: 64%;}
	.fourbox p, .fourbox h5, .fourbox .r-r-r-r { padding-left: 8px; padding-right: 8px;}
	.fourbox h5 { line-height: 1.12;}
	.fourbox p { font-size: 16px;}
	.fourbox .r-r-r-r { justify-content: space-between;}
	.l2 { height: 100vh; align-items: center;}
}
</style>


