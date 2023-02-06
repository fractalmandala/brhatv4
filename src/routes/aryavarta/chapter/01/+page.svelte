<script>
/**
	 * @type {any}
	 */
 export let data
let { soaChapter1 } = data;
$: ({ soaChapter1 } = data)
</script>

<div class="c-c-c-c prelude" data-scroll-section>
	<h1>
		Chapter 1<br><span class="colorange">Kaśyapa's Lament</span>
	</h1>
	<h5>
		Chapter 1 is a collaboration with The Emissary, an eminently follow-able handle on Twitter that engages with AI-rendered imagery to create visuals of an Indian context. At Bṛhat, his art evoked in us nostalgia for a cultural past we’ve lost, and some futuristic renditions brought to life imaginations of a dhārmika sci-fi! A collaboration appeared obvious.<br><br>
		The Emissary is a keen explorer of Indian history, politics and economics. His highly detailed studies can be found at his <a href="http://theemissary.co/" target="_blank" rel="noreferrer">website,</a> and his unique voice is on <a href="https://twitter.com/TheEmissaryCo" target="_blank" rel="noreferrer">Twitter.</a>
	</h5>
</div>
{#each soaChapter1 as chapter}
<div class="r-r-r-r full-box" data-scroll-section>
	<div class="c-c-c-c image-box" data-scroll>
		<img src={chapter.image} alt={chapter.id} />
	</div>
	<div class="c-c-c-c text-box" data-scroll data-scroll-speed="7">
		<small>{chapter.id}</small>
		<p>{chapter.text}</p>
	</div>
</div>
{/each}


<style lang="sass">

.image-box img
	object-fit: cover

.text-box p
	color: white
	font-family: 'Readex Pro',sans-serif
	font-weight: 300
	
.prelude
	justify-content: center

.prelude a
	color: #ff3d00

.text-box
	justify-content: flex-start
	

@media screen and (min-width: 900px)

	.prelude
		height: 100vh
		width: 100vw
		padding: 0 8vw
	
	.prelude h1
		margin-bottom: 0

	.prelude h5
		color: white
		font-weight: 300

	.full-box
		width: 100vw
		height: 100vh

	.image-box
		width: 60%

	.image-box img
		height: 88%
		width: 100%

	.text-box
		width: 40%
		padding: 4em 2em 0 2em
		background-color: transparent

	.text-box p
		font-size: 20px
		line-height: 1.44em

	.text-box small
		font-size: 12px
		color: #fe4a49
		font-weight: bold


</style>