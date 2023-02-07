<script>
import LocomotiveWhite from '$lib/components/animations/LocomotiveWhite.svelte'
import supabase from '$lib/db'

async function brhatPillars() {
const { data , error } = await supabase
.from('brhat-about')
.select()
.eq('type','actions')
.order('sequence')
if (error) throw new Error(error.message)
return data
}
</script>

<LocomotiveWhite>
	<div class="imagecontainer-hero" data-scroll-section></div>
	<div class="r-r-r-r a1" data-scroll-section>
		<div class="c-c-c-c colA">

		</div>
		<div class="c-c-c-c colB">

		</div>
	</div> 
</LocomotiveWhite>

<style>
.imagecontainer-hero {
	background-image: url('/images/herocovers/about-parambika.png');
}

</style>