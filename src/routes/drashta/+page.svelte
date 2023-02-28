<script>
import { reveal } from 'svelte-reveal'
import supabase from '$lib/db'
import ThinBar from '$lib/components/pagecomps/ThinBar.svelte'
import Drashtas from '$lib/components/headers/StaticH1.svelte'
import Chapters from '$lib/components/headers/StaticH1.svelte'
import Firekeepers from '$lib/components/headers/StaticH1.svelte'
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

<div class="flexbox-c imgbox x0">
	<img src="/images/herocovers/brhatdrashta.webp" alt="hero" style="transform: translateY({y/4}px)"/> 
</div>
<ThinBar></ThinBar>
<div class="flexbox-r minmargins-a l0">
		<h3 class="w700 wide75">
			Bṛhat Draṣṭā is an offering in deep learning that offers courses on some of the greatest ancient and contemporary philosophers (draṣṭās) and schools of thoughts (darśana).
		</h3>
</div>
<div class="flexbox-c x2 minmargins" style="transform: translateY({y/10}px)">
	<h3 class="w600 lining grey2">Courses:</h3>
</div>

<div class="flexbox-r minmargins-a x3 xc" style="transform: translateY({y/5}px)">
	{#await allCourses()}
	<small>loading chapters...</small>
	{:then data}
	{#each data as item}
	<div class="in-col wide25 formal3" use:reveal={{transition: "fly", blur: 0, y: -80}}>
		<img src={item.image} alt={item.name}>
		<h6><a href={item.link}>{item.name}</a></h6>
		<p class="grey">{item.content.slice(0,250)}<a class="readmore" href={item.link}>...Read More</a></p>
		<div class="in-col">
				<cite class="blue">{item.status}</cite>
				<cite class="grey2">{item.datefrom}</cite>
			</div>
	</div>
	{/each}
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>

<div class="flexbox-c x2 minmargins" style="transform: translateY({y/10}px)" id="drashtas">
	<h3 class="w600 lining grey2">Draṣṭās:</h3>
</div>

<div class="flexbox-c minmargins-a x3 xe" style="transform: translateY({y/8}px)" id="darshanas">
				<p class="wide50">
			It is the witness of the truth that is the objective of all Hindu philosophy. Similarly, the act of going to a temple is also called darśana, the act of witnessing truth in the form of the divine. In Hindu civilization its worldview was guided by the inner compass of sādhanā. It is only when the act of looking and seeing is elevated and sanctified by deep sādhanā, does it become darśana. For understanding this deep darśana and to witness saṃsāra in truthful light, an able draṣṭā – the one who is capable of looking deeply – is needed.
			<br><br>
			The sādhanā of the rṣīs made them capable of witnessing the ultimate truth and in that light every other discipline in saṃsāra too. That is how Sanātana dharma elevated every human discipline as well as every human act, such as the act of looking and seeing to a divine plane of consciousness. And that is how draṣṭās were created. 
			</p>
			<h5 class="wbold m-top-zero wide75">
			One who is on this inner path of sādhanā (darśana) is a draṣṭā. That is how our rṣīs became draṣṭās. They were not called ‘inventors of knowledge’, but the draṣṭā of truth.
			</h5>
		<AllDrashtas></AllDrashtas>
</div>

<div class="flexbox-c x2 minmargins" style="transform: translateY({y/10}px)">
	<h3 class="w600 lining grey2">Darśanas:</h3>
</div>

<div class="flexbox-c minmargins-a x3 xd" style="transform: translateY({y/8}px)">
				<p class="wide50">
			What ultimately differentiates a culture are its ways of looking and seeing. How we see ourselves and the world is extremely important to our identity and to the way the world perceives us. But to Hindu civilization seeing was not merely a physical act of looking at saṃsāra using our external eyes. The focus of our civilization was as much on our internal journey.
			<br><br>
			This anchor was sādhanā, done under the guidance and grace of a guru. A purely intellectual civilization is anchorless. In order to have an opinion on saṃsāra one needs a world to look at and a worldview to look from – dṛṣya and darśana. The Rṣīs of Bhāratavarṣa never neglected saṃsāra and developed objective sciences and disciplines to their heights, but at the same time they were always careful to peg that intellectual activity to a deep inner anchor.
			</p>
			<h5 class="w600 m-top-zero wide75">
			The word darśana is more than the act of seeing. It has a universal significance in Hindu cosmology. Hindu philosophy is also called darśana; because Hindu philosophy is not ‘what you think’; it is ‘what you see’ – darśana.
			</h5>
	<AllSchools></AllSchools>
</div>

<div class="flexbox-c x2 minmargins" style="transform: translateY({y/10}px)">
	<h3 class="w600 lining grey2">Firekeepers of Civilization:</h3>
</div>

<div class="flexbox-c minmargins-a x3 xdd" style="transform: translateY({y/8}px)">
					<p class="wide50">
					Civilization is an eternal yajña. And just as every yajña needs a yajamāna, the one who performs or protects dharma, so does the yajña of civilization. Agni, fire, is a symbol of civilization. It needs to be continuous for a civilization to be living. That is why at many places in Bhāratavarṣa, yajñās keep going incessantly.
					<br><br>
					This motif is all pervasive in Hindu cosmos. Just as the yajña fire needs to keep burning, so did the fire in the rasoi, the kitchen of every house, until it was replaced by LPG. The fire embers were kept in the night so that they could once again produce fire in the morning. Hindus, in this way, were literally, the fire keepers of civilization. It gives to us our name- we are Bharatas, the ones who bear or carry forward.
					<br><br>
					On an intellectual and civilizational level, this work is done by great rṣīs, scholars, thinkers and dārśanikas. By keeping the fire of knowledge eternally burning by continuous learning and teaching, through the great gurū-śiṣya paramparā, they kept the flame of Indic Knowledge Traditions burning.
				</p>
		<h5 class="wbold m-top-zero wide75">
				Hindu civilization today navigates a precarious turn. Great thought churning is going on for necessary changes in our society, culture and civilization. It is imperative at this crucial juncture to learn from the ancient as well as contemporary fire keepers of civilization – the great men of knowledge and wisdom, jñāna and sādhanā, who kept the flame of our civilization burning.
			</h5>
				<div class="in-row wrapper buttonsrow">
				<button class="redbutton"><a href="/course/sitaramgoel">Sita Ram Goel</a></button>
				<button class="redbutton"><a href="/course/shriramswarup">Shri Ram Swarup</a></button>
				</div>
</div>


<style>
.lining {
	border-left: 4px solid #FF9F1C;
}

@media screen and (min-width: 900px) {
	.l0 { height: 100vh; align-items: flex-end; }
	.l0, .x2 h3 { letter-spacing: -2px;}
	.x2 { padding-bottom: 4px; width: 100%; background: white; background: white; height: 80px;border-top: 1px solid #d7d7d7; padding-top: 24px;}
	.x2 .lining { padding-top: 4px; padding-bottom: 2px; padding-left: 16px; background: white;}
	.x3 { height: 100vh; width: 100%; gap: 24px; background: white;}
	.in-col.wide25 img { height: 160px; object-fit: cover; width: 100%;}
	.xdd { margin-bottom: 600px;}
	.in-col.wide25 p { color: #878787;}
	.formal3 h6 { text-transform: capitalize; margin-top: 16px;}
	.formal3 p { font-size: 14px;}
	.formal3 .in-col cite { margin-bottom: 0; text-transform: uppercase; font-weight: 600;}

	
	.buttonsrow { gap: 24px;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
		.l0 { height: 100vh; align-items: flex-end; }
	.x0 img { object-fit: cover; height: 100vh;}
	.l0, .x2 h3 { letter-spacing: -2px;}
	.x2 { padding-bottom: 4px; width: 100%; background: white; background: white; height: 80px;border-top: 1px solid #d7d7d7; padding-top: 24px;}
	.x2 .lining { padding-top: 4px; padding-bottom: 2px; padding-left: 16px; background: white;}
	.x3 { height: 100vh; width: 100%; gap: 24px; background: white;}
	.in-col.wide25 img { height: 160px; object-fit: cover; width: 100%;}
	.xdd { margin-bottom: 600px;}
	.in-col.wide25 p { color: #878787;}
	.formal3 h6 { text-transform: capitalize; margin-top: 16px;}
	.formal3 p { font-size: 14px;}
	.formal3 .in-col cite { margin-bottom: 0; text-transform: uppercase; font-weight: 600;}
	.xd { margin-bottom: 100px;}
	.xdd { margin-bottom: 1200px;}
	.buttonsrow { gap: 24px;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.x0 { height: 100vh;}
	.x0 img { object-fit: cover; height: 70%; margin-top: 64px;}
	.x2 h3 { padding-left: 24px;}
	.x2, .x3 { height: 100%; background: white;}
	.l0 { margin-top: 64px; }
	.buttonsrow { flex-direction: column; margin-top: 16px;}
	.formal3 h6 { text-transform: capitalize; margin-top: 16px;}
	.formal3 p { font-size: 14px;}
	.formal3 .in-col cite { margin-bottom: 0; text-transform: uppercase; font-weight: 600;}
	.formal3 { margin-bottom: 32px; width: 45%;}
	.x3.xc { flex-direction: row; gap: 24px; margin-bottom: 300px;}
	.xe, .xd { margin-bottom: 160px;}
	.xdd { margin-bottom: 900px;}
}

@media screen and (max-width: 575px) {
	.x0 { height: 100vh;}
	.x0 img { object-fit: cover; height: 70%; margin-top: 64px;}
	.x2 h3 { padding-left: 24px;}
	.x2, .x3 { height: 100%; background: white;}
	.l0 { margin-top: 64px;}
	.buttonsrow { flex-direction: column; margin-top: 16px;}
	.formal3 h6 { text-transform: capitalize; margin-top: 16px;}
	.formal3 p { font-size: 14px;}
	.formal3 .in-col cite { margin-bottom: 0; text-transform: uppercase; font-weight: 600;}
	.formal3 { margin-bottom: 32px;}
	.x3.xc { flex-direction: column-reverse; margin-bottom: 280px;}
	.xe, .xd { margin-bottom: 160px;}
	.xdd { margin-bottom: 900px;}
}
</style>


