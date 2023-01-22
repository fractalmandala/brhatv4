<script>
import supabase from '$lib/db'

export const getDhiti = async() => {
	const { data, error } = await supabase 
		.from('brhat-dhiti')
		.select()
		.order('sequence',{ascending: false})
		if (error) throw new Error(error.message)
		return data
}
</script>

<div class="docsidebar"
style="width: var(--indhiti)"
>
		{#await getDhiti()}
		<small>...</small>
		{:then data}
		{#each data as item}
		<h5 class="list-head"><a href={item.link}>{item.title}</a></h5>
			<p class="list-para">{item.excerpt.slice(0,150)}</p>
		<small class="list-auth">{item.author}</small>
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>

<style>

h5 {
	font-size: 1.2rem;
}



.docsidebar {
	display: flex;
	flex-direction: column;
	padding-right: 4rem;

	margin: 120px 0 2rem 0px;
	border-right: 1px solid var(--grey);
	box-shadow: 0px 0px 0px #d9d9d9,
             0px 0px 0px #ffffff;
	transition: all 0.28s var(--cube3);
	z-index: 2;
}

.docsidebar:hover {
/*
	box-shadow: 5px 5px 10px #d9d9d9,
             -8px -10px 10px #ffffff;
*/
	background-color: white;
	border-right: 1px solid var(--green);
}	

.docsidebar p {
	line-height: 1.2rem;
	margin-bottom: 1rem;
	font-size: 14px;
	color: #a7a7a7;
}

.docsidebar p a {
	font-weight: 600;
	font-size: 18px;
	color: #d7d7d7;
}
.docsidebar a {
	font-size: 14px;
	color: var(--glight);	
	margin-bottom: 12px;	
transition: all 0.18s var(--cube1);
	transform-origin: center left;
}

.docsidebar a:hover {
	color: var(--green);	
}

</style>