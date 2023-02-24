<script>
import supabase from '$lib/db'
import Drashtas from '$lib/components/headers/StaticH1.svelte'
import Chapters from '$lib/components/headers/StaticH1.svelte'
import Firekeepers from '$lib/components/headers/StaticH1.svelte'
import AllDrashtas from '$lib/components/pagecomps/AllDrashtas.svelte'
import AllSchools from '$lib/components/pagecomps/AllSchools.svelte'
export async function allCourses() {
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type','overview')
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="flexbox-r full desk-margins l0">
	<div class="in-col cc-y-col wide60 pad-x-l" id="c1">
		<h4 class="w400">
			Bṛhat Draṣṭā is an offering in deep learning that offers courses on some of the greatest ancient and contemporary philosophers (draṣṭās) and schools of thoughts (darśana).
		</h4>
	</div>
	<div class="in-col cc-y-col wide40 im-col" id="c2">
		<img src="/images/drashta/bigdrashta.png" alt="drashtatop" />
	</div>
</div>

<Chapters --contheight="100vh">
<div slot="header">Courses</div>
<div class="flexbox-r of-three desk-margins" slot="body">
	{#await allCourses()}
<small>loading chapters...</small>
{:then data}
{#each data as item}
	<div class="in-col wide25 gen-card formal3">
		<img src={item.image} alt={item.name}>
		<h5><a href={item.link}>{item.name}</a></h5>
		<p>{item.content.slice(0,250)}<a class="readmore" href={item.link}>...Read More</a></p>
		<div class="in-col">
				<cite class="blue">{item.status}</cite>
				<cite class="blue">{item.datefrom}</cite>
			</div>
	</div>
{/each}
{:catch error}
<pre>{error}</pre>
{/await}
</div>
</Chapters>


<Drashtas>
	<div slot="header">Draṣṭās and Darśanas</div>
	<div class="flexbox-r wrapper desk-margins pad-y-b" slot="body">
		<div class="in-col wide50" id="leftcol">
			<h3 class="w700">
			Draṣṭā | द्रष्टा 
			</h3>
			<p>
			It is the witness of the truth that is the objective of all Hindu philosophy. Similarly, the act of going to a temple is also called darśana, the act of witnessing truth in the form of the divine. In Hindu civilization its worldview was guided by the inner compass of sādhanā. It is only when the act of looking and seeing is elevated and sanctified by deep sādhanā, does it become darśana. For understanding this deep darśana and to witness saṃsāra in truthful light, an able draṣṭā – the one who is capable of looking deeply – is needed.
			<br><br>
			The sādhanā of the rṣīs made them capable of witnessing the ultimate truth and in that light every other discipline in saṃsāra too. That is how Sanātana dharma elevated every human discipline as well as every human act, such as the act of looking and seeing to a divine plane of consciousness. And that is how draṣṭās were created. 
			</p>
			<h5 class="wbold m-top-zero">
			One who is on this inner path of sādhanā (darśana) is a draṣṭā. That is how our rṣīs became draṣṭās. They were not called ‘inventors of knowledge’, but the draṣṭā of truth.
			</h5>
			<div class="flexbox-c">
			<AllDrashtas></AllDrashtas>
			</div>
		</div>
		<div class="in-col wide50" id="rightcol">
			<h3 class="w700 m-top-24-mob">
			Darśana | दर्शन  
			</h3>
			<p>
			What ultimately differentiates a culture are its ways of looking and seeing. How we see ourselves and the world is extremely important to our identity and to the way the world perceives us. But to Hindu civilization seeing was not merely a physical act of looking at saṃsāra using our external eyes. The focus of our civilization was as much on our internal journey.
			<br><br>
			This anchor was sādhanā, done under the guidance and grace of a guru. A purely intellectual civilization is anchorless. In order to have an opinion on saṃsāra one needs a world to look at and a worldview to look from – dṛṣya and darśana. The Rṣīs of Bhāratavarṣa never neglected saṃsāra and developed objective sciences and disciplines to their heights, but at the same time they were always careful to peg that intellectual activity to a deep inner anchor.
			</p>
			<h5 class="wbold m-top-zero">
			The word darśana is more than the act of seeing. It has a universal significance in Hindu cosmology. Hindu philosophy is also called darśana; because Hindu philosophy is not ‘what you think’; it is ‘what you see’ – darśana.
			</h5>
			<div class="flexbox-c">
			<AllSchools></AllSchools>
			</div>
		</div>
	</div>
</Drashtas>
<Firekeepers
--contheight="100vh"
>
	<div slot="header">Firekeepers of Civilization</div>
	<div class="flexbox-c desk-margins top-gap" slot="body">
		<div class="in-row wrapper pad-y-b">
			<div class="in-col wide40 im-col">
				<img src="/images/drashta/firekeepers.webp" alt="fire"/>
				<div class="in-row wrapper buttonsrow">
				<button class="redbutton"><a href="/course/sitaramgoel">Sita Ram Goel</a></button>
				<button class="redbutton"><a href="/course/shriramswarup">Shri Ram Swarup</a></button>
				</div>
			</div>
			<div class="in-col non-im-col pad-x-l cc-y-col wide60">
				<h4 class="w600">
					Hindu civilization today navigates a precarious turn. Great thought churning is going on for necessary changes in our society, culture and civilization. It is imperative at this crucial juncture to learn from the ancient as well as contemporary fire keepers of civilization – the great men of knowledge and wisdom, jñāna and sādhanā, who kept the flame of our civilization burning.
				</h4>
				<p class="wide75">
					Civilization is an eternal yajña. And just as every yajña needs a yajamāna, the one who performs or protects dharma, so does the yajña of civilization. Agni, fire, is a symbol of civilization. It needs to be continuous for a civilization to be living. That is why at many places in Bhāratavarṣa, yajñās keep going incessantly.
					<br><br>
					This motif is all pervasive in Hindu cosmos. Just as the yajña fire needs to keep burning, so did the fire in the rasoi, the kitchen of every house, until it was replaced by LPG. The fire embers were kept in the night so that they could once again produce fire in the morning. Hindus, in this way, were literally, the fire keepers of civilization. It gives to us our name- we are Bharatas, the ones who bear or carry forward.
					<br><br>
					On an intellectual and civilizational level, this work is done by great rṣīs, scholars, thinkers and dārśanikas. By keeping the fire of knowledge eternally burning by continuous learning and teaching, through the great gurū-śiṣya paramparā, they kept the flame of Indic Knowledge Traditions burning.
				</p>
			</div>
		</div>
	</div>
</Firekeepers>

<style>

@media screen and (min-width: 900px) {
	.in-col.wide25 img { height: 160px; object-fit: cover; width: 100%;}
	.in-col.wide25 p { color: #878787;}
	.formal3 .in-col p { margin-bottom: 0; text-transform: uppercase;}
	#leftcol {
		padding-right: 40px;
	}
	#rightcol {
		padding-left: 40px;
	}
	.im-col img { margin-bottom: 16px;}
	.buttonsrow { gap: 24px;}
}

@media screen and (max-width: 575px) {
	#rightcol, #leftcol { width: 100%;}
	#c1 { order: 2; padding: 0 32px;} 
	#c2 { order: 1}
	#c2 img { width: 70%; margin: auto;}
	.l0 { margin-top: 64px;}
	.buttonsrow { flex-direction: column; margin-top: 16px;}
}
</style>


