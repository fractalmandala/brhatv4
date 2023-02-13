<script>
import Header from '$lib/components/globals/Header2023.svelte'
import MainFly from '$lib/components/animations/MainFly.svelte'
import '$lib/styles/globaltemplate.sass'
</script>

<Header></Header>
<MainFly>
<slot></slot>
</MainFly>


