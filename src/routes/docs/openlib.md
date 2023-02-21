---
title: Ramayana Pull
tag: supabase
category: codes
---

```html
<script lang="ts">
import supabase from '$lib/db'

export async function Ram(){
		const { data, error } = await supabase
		.from('db-ramayana')
		.select()
		.order('id')
		if (error) throw new Error(error.message)
		return data
}

</script>

<div class="c-c-c-c istop l0">
{#await Ram()}
	<small>...</small>
	{:then data}
	{#each data as item}
	<p>{item.iast}</p>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>
```