<script>
import Header from '$lib/components/headers/HeaderBol.svelte'
import SideBol from '$lib/components/pagecomps/SideBol.svelte'
</script>

<Header></Header>
<div class="flexbox-r">
<SideBol></SideBol>
<div class="in-col maindoc">
<slot></slot>
</div>
</div>




