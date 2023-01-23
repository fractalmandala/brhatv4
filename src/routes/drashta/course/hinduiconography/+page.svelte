<script>
import supabase from '$lib/db'

export async function fetchCourse(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','hindu iconography')
	.eq('type', 'overview')
	if (error) throw new Error(error.message)
	return data
}

export async function fetchDetails(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','hindu iconography')
	.eq('type', 'course details')
	.order('sequence',{ascending: false})
	.limit(3)
	if (error) throw new Error(error.message)
	return data
}

export async function fetchWhofor(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','hindu iconography')
	.eq('type', 'course details')
	.order('sequence')
	.limit(1)
	if (error) throw new Error(error.message)
	return data
}

export async function fetchTakeaways(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','hindu iconography')
	.eq('type', 'takeaway')
	if (error) throw new Error(error.message)
	return data
}

export async function fetchContent(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','hindu iconography')
	.eq('type', 'course content')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}

export async function fetchFacilitator(){
	const { data, error } = await supabase
	.from('brhat-drashta')
	.select()
	.eq('course','hindu iconography')
	.eq('type', 'facilitator')
	.order('sequence')
	if (error) throw new Error(error.message)
	return data
}
</script>

{#await fetchCourse()}
<small>...loading</small>
{:then data}
{#each data as item}
<div class="imagecontainer col-y-top col-x-left" style="background-image: url({item.image})">
	<div class="imagecontainer-screen">
		<h1>hindu iconography</h1>
	</div>
</div>
<div class="blog-pad">
<pre>{item.content}</pre>
</div>
{/each}
{:catch error}
<pre>{error}</pre>
{/await}
<div class="blog-pad" id="secondpad">
<h4 id="secondpad-h4-1">Course Details</h4>
{#await fetchDetails()}
<small>...loading</small>
{:then data}
<div class="base-row" id="detailsrow">
{#each data as item}
		<div class="base-col" id="detailscol">
			<img src={item.image} alt={item.name} />
			<small>{item.name}</small>
			<p>{item.content}</p>
		</div>
{/each}
</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}
{#await fetchWhofor()}
<small>...loading</small>
{:then data}
{#each data as item}
<pre>{item.content}</pre>
{/each}
{:catch error}
<pre>{error}</pre>
{/await}
<h4 id="secondpad-h4-2">Takeaways</h4>
{#await fetchTakeaways()}
<small>loading...</small>
{:then data}
<div class="base-row pt2" id="takeawaysrow">
	{#each data as item}
	<div class="base-col" id="takeawayscol">
		<h5>{item.name}</h5>
		<pre>{item.content}</pre>
	</div>
	{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}
<h4 id="secondpad-h4-3">Course Content</h4>
{#await fetchContent()}
<small>loading...</small>
{:then data}
<div class="base-row" id="contentrow">
	{#each data as item}
	<div class="base-col contentcol" id="contentcol">
		<h5>{item.name}</h5>
		<pre class="coursecont">{item.content}</pre>
		<pre class="small">Books: {item.books}</pre>
	</div>
	{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}
<h4 id="secondpad-h4-4">Instructor</h4>
{#await fetchFacilitator()}
<small>loading...</small>
{:then data}
{#each data as item}
<div class="base-row" id="instructorrow">
		<img src={item.image} alt={item.name} />
		<pre>{item.content}</pre>
</div>
{/each}
{:catch error}
<pre>{error}</pre>
{/await}
</div>


<style>
.imagecontainer { height: 64vh; background-position: center center; background-size: cover; background-repeat: no-repeat; justify-content: flex-start; align-items: flex-start; }
.imagecontainer h1 { color: white; text-shadow: 4px 4px 8px rgba(0,0,0,0.6); margin-left: 3.2rem; text-transform: capitalize;}
#secondpad { margin-top: -4rem;}
#secondpad-h4-1 { margin-top: 0; border-bottom: 4px solid var(--blue); padding-bottom: 12px; margin-bottom: 1rem;}
#secondpad-h4-2, #secondpad-h4-3, #secondpad-h4-4 { border-bottom: 4px solid var(--blue); padding-bottom: 12px; margin-bottom: 1rem;}
#detailscol small { color: #a7a7a7; font-weight: bold; text-transform: uppercase;}
#detailscol { width: 96px; align-items: center; text-align: center;}
#detailscol p { color: #474747; font-size: 16px; font-weight: bold;}
#detailscol img { width: 48px; height: 48px; object-fit: contain;}
#takeawayscol, #contentcol { width: 45%; }
#instructorrow { width: 100%;}
#takeawayscol h5 { margin-top: 0; text-transform: capitalize;}
#takeawayscol pre { margin-bottom: 0;}
#takeawaysrow, #contentrow { flex-wrap: wrap; align-items: flex-start; }
#instructorrow img { object-fit: cover; width: 200px;}
#instructorrow { align-items: flex-start;}
#instructorrow pre { margin-top: 0;}
#contentcol { align-items: flex-start; justify-content: flex-start; }
#contentcol h5 { text-transform: capitalize;}
#contentrow { gap: 16px;}
.contentcol { padding-right: 8px;}
.coursecont { margin-bottom: 0;}
.small { font-size: 14px; text-transform: uppercase; color: var(--blue); font-weight: 500; }

@media screen and (min-width: 768px) { .base-row { gap: 48px; }}
@media screen and (max-width: 767px) { .base-row { gap: 24px; }}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.small { font-size: 12px;}
	#takeawayscol, #contentcol { width: 100%;}
	#takeawaysrow, #contentrow { gap: 24px;}
	#contentcol h5 { margin-top: 0;}
	.small { margin-bottom: 0; font-weight: 500;}
	#instructorrow { flex-direction: column; justify-content: flex-start;}
	#instructorrow pre { margin-top: -2rem;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	#detailscol { width: 30%;}
	#takeawayscol { width: 100%;}
	#contentcol { width: 100%;}
	#contentcol h5 { margin-top: 0;}
	#contentrow { gap: 8px;}
	.small { font-size: 12px; font-weight: 500;}
	#instructorrow img { width: 120px;}
}

@media screen and (max-width: 575px) {
	.imagecontainer h1 { text-align: center; margin-left: 0;}
	#detailscol { width: 30%;}
	#detailsrow { justify-content: center;}
	#takeawayscol, #contentcol { width: 100%;}
	#contentcol h5 { margin-top: 0;}
	.small { font-size: 12px; font-weight: 500;}
	#instructorrow img { width: 100%;}
	#instructorrow { gap: 24px; flex-direction: column;}
	#instructorrow pre { width: 100%;}
}
</style>
