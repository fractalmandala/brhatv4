<script>
import { fly } from 'svelte/transition'
import DocSidebar from '$lib/components/globals/DocSiderbar.svelte'
</script>
<div class="boxoftext pb2">
<DocSidebar></DocSidebar>
<div class="pageoftext">
		<div class="mt4"
			in:fly={{ duration: 500, delay: 200, x:0, y: 700 }}
			out:fly={{ duration: 300, delay: 0, x:-700, y: 0 }}
			>			
			<slot></slot>
		</div>
	</div>
</div>

<style>

.boxoftext {
	display: flex;
	width: 100vw;	
}
.pageoftext {
	display: flex;
	flex-direction: column;
	width: 72%;
	margin-left: 25%;
	padding-top: 90px;
}

.mt4 {
	padding-left: 3rem;
	padding-right: 8rem;
}


</style>