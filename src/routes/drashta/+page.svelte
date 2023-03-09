<script>
import supabase from '$lib/db'
import AllDrashtas from '$lib/components/pagecomps/AllDrashtas.svelte'
import AllSchools from '$lib/components/pagecomps/AllSchools.svelte'
let y = 1
export async function allCourses() {
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type','overview')
	if (error) throw new Error(error.message)
	return data
}
</script>

<svelte:window bind:scrollY={y}/>

<div class="boxc x0">
	<img src="/images/herocovers/brhatdrashta.webp" alt="hero" style="transform: translateY({y/4}px)"/> 
</div>

<div class="pad-a">

	<div class="section-pads container-1">
  	<div class="bodyarea">
			<h2>
				<span class="drash">Bṛhat Draṣṭā </span> is an offering in deep learning 
			</h2>
			<h6>
				It offers courses on some of the greatest ancient and contemporary philosophers <span class="drash">(draṣṭās)</span> and schools of thoughts <span class="drash">(darśanas).</span>
			</h6>
		</div>
  	<div class="image">
			<img src="/images/drashta/adrashta.png" alt="a drashta"/>
		</div>
	</div>

	<div class="section-pads container-2">
  	<div class="heading2 the-title">
			<h2>Courses</h2>
		</div>
  	<div class="rowof4-2">
			{#await allCourses()}
			<small>loading chapters...</small>
				{:then data}
					{#each data as item}
					<div class="ww1 card">
						<img src={item.image} alt={item.name}>
						<h6><a href={item.link}>{item.name}</a></h6>
						<p>{item.content.slice(0,250)}<a class="drash wbold" href={item.link}>...Read More</a></p>
						<div class="boxc">
							<cite class="drash">{item.status}</cite>
							<cite>{item.datefrom}</cite>
						</div>
					</div>
					{/each}
				{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>
	</div>


		<div class="the-title section-pads y-full">
			<h2>
				Draṣṭās
			</h2>
		<div class="traybox wrap x3">
			<div class="boxc wide75">
				<p>
					It is the witness of the truth that is the objective of all Hindu philosophy. Similarly, the act of going to a temple is also called darśana, the act of witnessing truth in the form of the divine. In Hindu civilization its worldview was guided by the inner compass of sādhanā. It is only when the act of looking and seeing is elevated and sanctified by deep sādhanā, does it become darśana. For understanding this deep darśana and to witness saṃsāra in truthful light, an able draṣṭā – the one who is capable of looking deeply – is needed.
				</p>
				<p>
					The sādhanā of the rṣīs made them capable of witnessing the ultimate truth and in that light every other discipline in saṃsāra too. That is how Sanātana dharma elevated every human discipline as well as every human act, such as the act of looking and seeing to a divine plane of consciousness. And that is how draṣṭās were created. 
				</p>
				<h5>
					One who is on this inner path of sādhanā (darśana) is a draṣṭā. That is how our rṣīs became draṣṭās.<span class="drash"> They were not called ‘inventors of knowledge’, but the draṣṭā of truth.</span>
				</h5>
				<AllDrashtas></AllDrashtas>
			</div>

		</div>
		</div>


		<div class="the-title y-full section-pads" id="x4">
			<h2>
				Darśanas
			</h2>
				<div class="traybox wrap x4">
			<div class="boxc">
				<p>
					What ultimately differentiates a culture are its ways of looking and seeing. How we see ourselves and the world is extremely important to our identity and to the way the world perceives us. But to Hindu civilization seeing was not merely a physical act of looking at saṃsāra using our external eyes. The focus of our civilization was as much on our internal journey.
				</p>
				<p>
					This anchor was sādhanā, done under the guidance and grace of a guru. A purely intellectual civilization is anchorless. In order to have an opinion on saṃsāra one needs a world to look at and a worldview to look from – dṛṣya and darśana. The Rṣīs of Bhāratavarṣa never neglected saṃsāra and developed objective sciences and disciplines to their heights, but at the same time they were always careful to peg that intellectual activity to a deep inner anchor.
				</p>
				<h5>
					The word darśana is more than the act of seeing. It has a universal significance in Hindu cosmology. Hindu philosophy is also called darśana; because <span class="drash">Hindu philosophy is not ‘what you think’; it is ‘what you see’ – darśana.</span>
				</h5>
				<AllSchools></AllSchools>
			</div>

		</div>
		</div>


		<div class="the-title y-full section-pads">
			<h2>
				Firekeepers of Civilization
			</h2>
			<p class="wide75">
				Civilization is an eternal yajña. And just as every yajña needs a yajamāna, the one who performs or protects dharma, so does the yajña of civilization. Agni, fire, is a symbol of civilization. It needs to be continuous for a civilization to be living. That is why at many places in Bhāratavarṣa, yajñās keep going incessantly.<br><br>
				This motif is all pervasive in Hindu cosmos. Just as the yajña fire needs to keep burning, so did the fire in the rasoi, the kitchen of every house, until it was replaced by LPG. The fire embers were kept in the night so that they could once again produce fire in the morning. Hindus, in this way, were literally, the fire keepers of civilization. It gives to us our name- we are Bharatas, the ones who bear or carry forward.<br><br>
					On an intellectual and civilizational level, this work is done by great rṣīs, scholars, thinkers and dārśanikas. By keeping the fire of knowledge eternally burning by continuous learning and teaching, through the great gurū-śiṣya paramparā, they kept the flame of Indic Knowledge Traditions burning.
			</p>
							<h6>
					Hindu civilization today navigates a precarious turn. Great thought churning is going on for necessary changes in our society, culture and civilization.</h6>
				<h5>It is imperative at this crucial juncture to learn from the ancient as well as <span class="drash"> contemporary fire keepers of civilization</span> – the great men of knowledge and wisdom, jñāna and sādhanā, who kept the flame of our civilization burning.
				</h5>
		</div>


</div>

<style lang="sass">

.container-1 
	display: grid 
	grid-template-columns: 1fr 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "bodyarea image" 
.bodyarea 
	grid-area: bodyarea
	display: grid
	align-items: center
.image 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." 
	grid-area: image 

.container-2 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "heading2" "rowof4-2" 
.heading2 
	grid-area: heading2 
.rowof4-2 
	display: grid 
	grid-template-columns: 1fr 1fr 1fr 1fr 
	grid-template-rows: 1fr 
	gap: 0px 32px 
	grid-auto-flow: row 
	grid-template-areas: ". . . ." 
	grid-area: rowof4-2

@media screen and (max-width: 991px)
	.rowof4-2 
		display: grid 
		grid-template-columns: 1fr 1fr 
		grid-template-rows: auto auto 
		gap: 0px 32px 
		grid-auto-flow: row 
		grid-template-areas: ". ." ". ." 
		grid-area: rowof4-2 

@media screen and (max-width: 767px)
	.x0
		height: 100vh
		img
			height: 100%
			object-fit: cover
	.container-1
		display: grid 
		grid-template-columns: 100%
		grid-template-rows: auto auto
		gap: 0px 0px 
		grid-auto-flow: row 
		grid-template-areas: "bodyarea" "image" 
	.bodyarea 
		grid-area: bodyarea
		display: grid
		align-items: center
	.image
		height: 300px
		img
			object-fit: contain
			height: 300px
	.rowof4-2 
		display: grid 
		grid-template-columns: 1fr
		grid-template-rows: auto auto auto auto 
		gap: 24px 0px 
		grid-auto-flow: row 
		grid-template-areas: "." "." "." "." 
		grid-area: rowof4-2 

</style>
