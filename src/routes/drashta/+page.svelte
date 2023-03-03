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

<div class="full-page formatting">
	<div class="no-side">

		<div class="gp1 x1 bdt">
			<h2 class="wide75">
				Bṛhat Draṣṭā is an offering in deep learning 
			</h2>
			<h5 class="wide75">
				It offers courses on some of the greatest ancient and contemporary philosophers <span class="drash">(draṣṭās)</span> and schools of thoughts <span class="drash">(darśanas).</span>
			</h5>
		</div>

		<div class="the-title">
			<h2>
				Courses
			</h2>
		</div>
		<div class="gp4 x2">
			{#await allCourses()}
			<small>loading chapters...</small>
				{:then data}
					{#each data as item}
					<div class="cols4">
						<img src={item.image} alt={item.name}>
						<h6><a href={item.link}>{item.name}</a></h6>
						<small class="grey">{item.content.slice(0,250)}<a class="drash wbold" href={item.link}>...Read More</a></small>
						<div class="boxc">
							<cite class="drash">{item.status}</cite>
							<cite class="grey2">{item.datefrom}</cite>
						</div>
					</div>
					{/each}
				{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>

		<div class="the-title">
			<h2>
				Draṣṭās
			</h2>
		</div>
		<div class="gp2 x3">
			<div class="cols23">
				<p>
					It is the witness of the truth that is the objective of all Hindu philosophy. Similarly, the act of going to a temple is also called darśana, the act of witnessing truth in the form of the divine. In Hindu civilization its worldview was guided by the inner compass of sādhanā. It is only when the act of looking and seeing is elevated and sanctified by deep sādhanā, does it become darśana. For understanding this deep darśana and to witness saṃsāra in truthful light, an able draṣṭā – the one who is capable of looking deeply – is needed.
				</p>
				<p>
					The sādhanā of the rṣīs made them capable of witnessing the ultimate truth and in that light every other discipline in saṃsāra too. That is how Sanātana dharma elevated every human discipline as well as every human act, such as the act of looking and seeing to a divine plane of consciousness. And that is how draṣṭās were created. 
				</p>
				<h4>
					One who is on this inner path of sādhanā (darśana) is a draṣṭā. That is how our rṣīs became draṣṭās.<span class="drash"> They were not called ‘inventors of knowledge’, but the draṣṭā of truth.</span>
				</h4>
				<AllDrashtas></AllDrashtas>
			</div>
			<div class="cols21"></div>
		</div>

		<div class="the-title">
			<h2>
				Darśanas
			</h2>
		</div>
		<div class="gp2 x4">
			<div class="cols23">
				<p>
					What ultimately differentiates a culture are its ways of looking and seeing. How we see ourselves and the world is extremely important to our identity and to the way the world perceives us. But to Hindu civilization seeing was not merely a physical act of looking at saṃsāra using our external eyes. The focus of our civilization was as much on our internal journey.
				</p>
				<p>
					This anchor was sādhanā, done under the guidance and grace of a guru. A purely intellectual civilization is anchorless. In order to have an opinion on saṃsāra one needs a world to look at and a worldview to look from – dṛṣya and darśana. The Rṣīs of Bhāratavarṣa never neglected saṃsāra and developed objective sciences and disciplines to their heights, but at the same time they were always careful to peg that intellectual activity to a deep inner anchor.
				</p>
				<h4>
					The word darśana is more than the act of seeing. It has a universal significance in Hindu cosmology. Hindu philosophy is also called darśana; because <span class="drash">Hindu philosophy is not ‘what you think’; it is ‘what you see’ – darśana.</span>
				</h4>
				<AllSchools></AllSchools>
			</div>
		</div>

		<div class="the-title">
			<h2>
				Firekeepers of Civilization
			</h2>
		</div>
		<div class="gp2 x5">
			<div class="cols23">
				<p>
					Civilization is an eternal yajña. And just as every yajña needs a yajamāna, the one who performs or protects dharma, so does the yajña of civilization. Agni, fire, is a symbol of civilization. It needs to be continuous for a civilization to be living. That is why at many places in Bhāratavarṣa, yajñās keep going incessantly.
				</p>
				<p>
					This motif is all pervasive in Hindu cosmos. Just as the yajña fire needs to keep burning, so did the fire in the rasoi, the kitchen of every house, until it was replaced by LPG. The fire embers were kept in the night so that they could once again produce fire in the morning. Hindus, in this way, were literally, the fire keepers of civilization. It gives to us our name- we are Bharatas, the ones who bear or carry forward.
				</p>
				<p>
					On an intellectual and civilizational level, this work is done by great rṣīs, scholars, thinkers and dārśanikas. By keeping the fire of knowledge eternally burning by continuous learning and teaching, through the great gurū-śiṣya paramparā, they kept the flame of Indic Knowledge Traditions burning.
				</p>
				<h5>
					Hindu civilization today navigates a precarious turn. Great thought churning is going on for necessary changes in our society, culture and civilization. It is imperative at this crucial juncture to learn from the ancient as well as <span class="drash"> contemporary fire keepers of civilization</span> – the great men of knowledge and wisdom, jñāna and sādhanā, who kept the flame of our civilization burning.
				</h5>
				<div class="boxr buttonsrow">
					<button class="drashbutton"><a href="/course/sitaramgoel">Sita Ram Goel</a></button>
					<button class="drashbutton"><a href="/course/shriramswarup">Shri Ram Swarup</a></button>
				</div>
			</div>
			<div class="cols21">
				<img src="/images/drashta/firekeepers.webp" alt="firekeepers"/>
			</div>
		</div>

	</div>
</div>

<style>

.drashbutton {
	background-color: var(--drash);
	border: none;
	color: white;
	font-weight: 400;
	letter-spacing: 0.3px;
	border-radius: 4px;
	transform-origin: center center;
	transition: transform 0.08s var(--cubeb);
}

.drashbutton a {
	color: white;
}

.drashbutton a:hover {
	color: white
}

.drashbutton:hover a { color: white;}

.drashbutton:hover {
	transform: scale(0.9);
	color: white;
	background: #43A9D4;
}

.drashbutton:hover a:hover { color: white;}


@media screen and (min-width: 768px) {

	.drashbutton {
		padding: 6px 12px;
		margin-bottom: 32px;
		margin-top: 20px;
		font-size: 14px;
		font-weight: 500;
		text-transform: capitalize;

	}
.x5 .cols21 img { height: 100%; width: 80%; margin-left: 10%;}

}
	
@media screen and (max-width: 767px) {

	.drashbutton {
		padding: 6px 8px;
		margin-bottom: 12px;
		font-size: 14px;
		max-width: 144px;
		min-width: 144px;
	}
.x5 .cols21 img { height: 100%; width: 100%;}

}

.the-title {
	border-left: 4px solid #2F7796;
	margin-left: -1px;
}

.no-side a:hover { color: var(--drash);}
	.x2 .cols4 img {
		height: 160px;
	}
@media screen and (min-width: 900px) {
	.x1 { height: 100vh; justify-content: center; }
	.x2 { height: 100%;}

	
	.buttonsrow { gap: 24px;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
		.x1 { height: 100vh; justify-content: flex-end;}
	.x0 img { object-fit: cover; height: 100vh;}
	

	.x3 { height: 100vh; width: 100%; gap: 24px; background: white;}

	.buttonsrow { gap: 24px;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.x0 { height: 100vh;}
	.x0 img { object-fit: cover; height: 70%; margin-top: 64px;}
	
	
	.x1 { margin-top: 64px; }
	.buttonsrow { flex-direction: column; margin-top: 16px;}

}

@media screen and (max-width: 575px) {
	.x0 { height: 100vh;}
	.x0 img { object-fit: cover; height: 100%; margin-top: 56px;}

	.x1 { margin-top: 64px;}
	.buttonsrow { flex-direction: row; margin-top: 16px; gap: 16px; padding-bottom: 48px;}



}
</style>


