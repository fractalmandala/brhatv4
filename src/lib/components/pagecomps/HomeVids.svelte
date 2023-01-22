<script>
import Container from '$lib/components/reuse/Container.svelte'
import EffectBox from '$lib/components/reuse/EffectBox.svelte'
import BoxHeader from '$lib/components/reuse/BoxHeader.svelte'
import VideoSlider from '$lib/components/reuse/VideoSlider.svelte'
</script>

<Container --align="center">
<BoxHeader><h1>Latest Videos</h1></BoxHeader>
<EffectBox>
<VideoSlider></VideoSlider>
</EffectBox>
</Container>