<script>
import supabase from '$lib/db'

export async function dhitiLatest(){
	const { data, error } = await supabase
	.from('brhat-dhiti')
	.select()
	.order('sequence',{ascending: false})
	.limit(1)
	if (error) throw new Error(error.message)
	return data
}

export async function dhitiFourmore() {
	const { data, error } = await supabase
	.from('brhat-dhiti')
	.select()
	.order('sequence',{ascending: false})
	.range(1,4)
	if (error) throw new Error(error.message)
	return data
}
</script>

{#await dhitiLatest()}
<small>loading...</small>
{:then data}
{#each data as item}
<div class="imagecontainer-hero" style="background-image: url({item.image})">
	<div class="imagecontainer-screen" id="bigscreen">
		<div class="base-col">
		<cite>{item.category}</cite>
		<h1><a href={item.link}>{item.title}</a></h1>
		<p id="bigscreen-p">{item.excerpt}</p>
		</div>
		<div class="base-row" id="postsrow">
			{#await dhitiFourmore()}
			<small>loading more...</small>
			{:then data}
			{#each data as post}
			<div class="base-col postcol" style="background-image: url({post.image})">
				<div class="imagecontainer-screen smallscreen"><a href={post.link}>
					<small class="label">{post.category}</small>
					<p class="smallscreen-p"><b>{post.title}</b></p></a>
				</div>
			</div>
			{/each}
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>
	</div>
</div>
{/each}
{:catch error}
<pre>{error}</pre>
{/await}

<style>
	#bigscreen h1 a, #bigscreen p { color: white;}
	#bigscreen a { transition: all 0.13s var(--cube1);}
	#bigscreen h1:hover a { color: #11B5E4;}
	#bigscreen h1 { margin-top: 6px;}
	cite { color: white; background-color: var(--red); font-style: normal; text-transform: uppercase; width: max-content; margin-bottom: 0;}
	#bigscreen { justify-content: space-between;}
	.postcol { box-shadow: 5px 5px 12px #171717, -4px -6px 12px #272727; transition: all 0.33s var(--cube2); border: 1px solid white;border-radius: 4px; background-size: cover; background-position: center center; background-repeat: no-repeat; }
	.postcol:hover { box-shadow: 0px 0px 0px #171717, 0px 0px 0px #272727; border: 1px solid var(--red); }
	.smallscreen { transition: all 0.33s var(--cube2);}
	.smallscreen:hover { background-color: rgba(0,0,0,0);}
	.smallscreen p { transition: all 0.33s var(--cube2);}
	.smallscreen:hover p { opacity: 0;}
	.label { color: white; font-family: 'Inter Tight', sans-serif; text-transform: uppercase; font-size: 10px;}
	
@media screen and (min-width: 900px) {
	#bigscreen h1 { font-size: 4rem;}
	#bigscreen { padding: 2rem 10vw 0 4vw;}
	cite { padding: 6px 16px; font-size: 14px;}
	#bigscreen-p { font-size: 1.24rem; width: 64%; line-height: 1.4em;}
	#postsrow { margin-left: 25%; margin-right: 5%; margin-bottom: 5%;}
	#postsrow p { font-size: 1rem; margin-top: 0; }
	.smallscreen a { line-height: 3em;}
	.smallscreen { align-items: flex-start; padding-left: 1rem; padding-right: 1rem;justify-content: flex-start; padding-top: 2px;}
	.postcol { width: 25%; align-items: flex-start; height: 160px;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	#bigscreen h1 { font-size: 2.4rem;}
	#bigscreen { padding: 2rem}
	cite { padding: 4px 12px; font-size: 12px;}
	#bigscreen-p { font-size: 1.12rem; width: 72%; line-height: 1.4em; margin-top: 0;}
	#postsrow { width: 96%; justify-content: space-between; margin-bottom: 4%;}
	.postcol{ width: 24%;}
	.label { display: none;}
	.smallscreen { justify-content: flex-start; align-items: flex-start; padding-left: 8px;}
	#postsrow p { font-size: 0.8rem; font-weight: 500;}
}	

@media screen and (max-width: 769px) and (min-width: 576px) {
	#bigscreen h1 { font-size: 2rem;}
	#bigscreen { padding: 1.6rem;}
	cite { padding: 4px 12px; font-size: 12px;}
	#bigscreen-p { font-size: 1rem; width: 80%; line-height: 1.4em; margin-top: 0;}
	#postsrow { width: 100%; justify-content: space-between; margin-bottom: 8%;}
	.postcol { width: 22%;}
	.label { display: none;}
	.smallscreen { justify-content: flex-start; align-items: flex-start; padding: 0 8px;}
	#postsrow p { font-size: 0.8rem; font-weight: 400;}
}

@media screen and (max-width: 575px) {
	#bigscreen h1 { font-size: 1.6rem; font-weight: 600; letter-spacing: -0.5px; } 
	#bigscreen { padding: 1rem;}
	cite { padding: 3px 12px; font-size: 12px;}
	#bigscreen-p { font-size: 0.8rem; width: 100%; line-height: 1.24rem; margin-top: 0;}
	#postsrow { width: 100%; justify-content: center; margin-bottom: 2%; flex-wrap: wrap; gap: 12px;}
	.postcol { width: 100%;}
	.label { display: none;}
	.smallscreen { justify-content: flex-start; align-items: flex-start; padding: 0 6px;}
	#postsrow p { font-size: 0.75rem; font-weight: 400; line-height: 1.2em;}
}
</style>