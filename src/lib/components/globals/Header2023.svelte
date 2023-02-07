<script lang="ts">
import supabase from '$lib/db'
import { Swiper, SwiperSlide } from 'swiper/svelte'
import { Keyboard, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'
import { fade } from 'svelte/transition';
import { fly } from 'svelte/transition'
import { circOut } from 'svelte/easing'
import { circIn } from 'svelte/easing'
let isMenu = false;

function showMenu() {
	isMenu = true;
}
function hideMenu() {
	isMenu = false;
}

export async function latestDhiti(){
	const { data, error } = await supabase
	.from('brhat-dhiti')
	.select()
	.order('sequence',{ascending: false})
	.limit(4)
	if (error) throw new Error(error.message)
	return data
}

</script>

<div class="header">
<div class="headerbox padding-base">
  <div class="logoarea">
     <div class="motif" id="scroll-container">
       <a href="/"><img src="/images/corpimages/motif.png" id="rotate-img" class="rotate" alt="motif" /></a>
     </div>
     <div class="logotype">
       <a href="/"><img src="/images/corpimages/logotype.png" alt="logotype"
       /></a>
     </div>
  </div>
	<div class="mobilemenu" on:click={showMenu} on:keydown={showMenu}>
		<img class="menu-red" src="/images/icons/icon-menu-r.png" alt="menuicon"/>
		<img class="menu-white" src="/images/icons/icon-menu-w.png" alt="menuicon"/>	
	</div>
	{#if isMenu}
	<div class="fullscreener"
		in:fly="{{ delay: 0, duration: 300, x: 0, y:-700, opacity: 1, easing: circIn}}"
		out:fly="{{ delay: 0, duration: 300, x: 0, y: -700, opacity: 1, easing: circIn}}">
		<div class="innerheading">
     	<div class="logotype inside-logotype">
       		<a href="/"><img class="the-inner" src="/images/brhatlogos/horizontalwhite.png" alt="logotype"
       		/></a>
     	</div>
			<div class="closebuttonstrip" on:click={hideMenu} on:keydown={hideMenu}>
				<img src="/images/icons/hamburger-close.png" alt="closemenu"/>
			</div>
		</div>
			<div class="r-r-r-r main-row">
				<div class="c-c-c-c col1 iscol">
					<div class="c-c-c-c item1 isitem" in:fade="{{delay: 300, duration: 300}}">
						<p in:fly="{{delay: 300, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/about">About</a></p>
						<div class="r-r-r-r the-in">
							<div class="c-c-c-c in-col">
								<small in:fly="{{delay: 550, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/about/#actions">Actions</a></small>
								<small in:fly="{{delay: 600, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/about/docs/namelogo">Nāmarūpa</a></small>
								<small in:fly="{{delay: 650, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/about/docs/values">Pratijñā</a></small>
							</div>
							<div class="c-c-c-c in-col">
								<small in:fly="{{delay: 700, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/about/docs/svatahsiddha">Svataḥsiddha</a></small>
								<small in:fly="{{delay: 750, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/about/docs/anatomy">Anatomy of a Civilizational Moment</a></small>
								<small in:fly="{{delay: 800, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a></small>
							</div>
						</div>
					</div>
					<div class="r-r-r-r row-top">
						<div class="c-c-c-c item2 isitem" in:fade="{{delay: 300, duration: 300}}">
							<p in:fly="{{delay: 350, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/anveshi">Anveṣī</a></p>
						<div class="r-r-r-r the-in">
							<div class="c-c-c-c in-col">
								<small in:fly="{{delay: 600, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/anveshi/chapter/odisha">Odisha Chapter</a></small>
								<small in:fly="{{delay: 650, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/anveshi/chapter/chamba">Chamba Chapter</a></small>
								<small in:fly="{{delay: 700, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/anveshi/chapter/karnataka">Karnataka Chapter</a></small>
							</div>
							<div class="c-c-c-c in-col">
								<small in:fly="{{delay: 750, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/anveshi/diaries">Travel Diaries</a></small>
								<small in:fly="{{delay: 800, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/anveshi/faq">FAQs</a></small>
								<small in:fly="{{delay: 850, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/anveshi/gallery">Gallery</a></small>
							</div>
						</div>
						</div>
						<div class="c-c-c-c item3 isitem" in:fade="{{delay: 300, duration: 300}}">
							<p in:fly="{{delay: 400, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/drashta">Draṣṭā</a></p>
							<div class="r-r-r-r the-in">
								<div class="c-c-c-c in-col">
									<small in:fly="{{delay: 650, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/course/hinduiconography">Hindu Iconography</a></small>
									<small in:fly="{{delay: 700, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/course/shriramswarup">Shri Ram Swarup</a></small>
									<small in:fly="{{delay: 750, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/anveshi/course/sitaramgoel">Sita Ram Goel</a></small>
								</div>
								<div class="c-c-c-c in-col">
									<small in:fly="{{delay: 800, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/drashtas">Draṣṭās</a></small>
									<small in:fly="{{delay: 850, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/schools">Schools</a></small>
									<small in:fly="{{delay: 900, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/firekeepers">Firekeepers</a></small>
								</div>
						</div>
						</div>
					</div>
					<div class="r-r-r-r row-mid">
						<div class="c-c-c-c item4 isitem" in:fade="{{delay: 300, duration: 300}}">
							<p in:fly="{{delay: 450, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/mrdanga">Mṛdaṅga</a></p>
							<div class="c-c-c-c in-col">
									<small in:fly="{{delay: 700, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/mrdanga/kala">Kalā</a></small>
									<small in:fly="{{delay: 750, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/mdranga/rasa">Rasa</a></small>
									<small in:fly="{{delay: 800, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/mrdanga/kavita">Kavitā</a></small>
								</div>
						</div>
						<div class="c-c-c-c item5 isitem" in:fade="{{delay: 300, duration: 300}}">
							<p in:fly="{{delay: 500, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/mandala">Maṇḍala</a></p>
							<div class="c-c-c-c in-col">
									<small in:fly="{{delay: 750, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/mandala/essays">Essays</a></small>
									<small in:fly="{{delay: 800, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/mandala/aphorisms">Caturasūtra</a></small>
									<small in:fly="{{delay: 850, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/mandala/synaptic">Synaptic Reconnection</a></small>
								</div>
						</div>
					</div>
					<div class="r-r-r-r row-low">
						<div class="c-c-c-c item6 isitem" in:fade="{{delay: 300, duration: 300}}">
							<p in:fly="{{delay: 550, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/aryavarta">Āryavarta</a></p>
							<div class="c-c-c-c in-col">
									<small in:fly="{{delay: 800, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/aryavarta/chapter/01">Kaśyapa's Lament</a></small>
									<small in:fly="{{delay: 850, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/aryavarta/chapter/02">Sūta and Sudā</a></small>
									<small in:fly="{{delay: 900, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/firekeepers">Gallery</a></small>
								</div>
						</div>
						<div class="c-c-c-c item7 isitem" in:fade="{{delay: 300, duration: 300}}">
							<p in:fly="{{delay: 600, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/rta">Ṛta</a></p>
							<div class="c-c-c-c in-col">
									<small in:fly="{{delay: 850, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/drashtas">Schema</a></small>
									<small in:fly="{{delay: 900, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/schools">Principles</a></small>
									<small in:fly="{{delay: 950, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/firekeepers">Phases</a></small>
								</div>
						</div>
					</div>
					<div class="listlist">
						<p class="isdont" in:fly="{{delay: 600, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/dhiti">Dhīti</a></p>
						<p class="isdont" in:fly="{{delay: 600, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/openlibrary">Open Library</a></p>
						<p in:fly="{{delay: 300, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/about">About</a></p>
							<small in:fly="{{delay: 550, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/about/#actions">Actions</a></small>
							<small in:fly="{{delay: 600, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/about/docs/namelogo">Nāmarūpa</a></small>
							<small in:fly="{{delay: 650, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/about/docs/values">Pratijñā</a></small>
						<p in:fly="{{delay: 350, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/anveshi">Anveṣī</a></p>
							<small in:fly="{{delay: 600, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/anveshi/chapter/odisha">Odisha Chapter</a></small>
							<small in:fly="{{delay: 650, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/anveshi/chapter/chamba">Chamba Chapter</a></small>
							<small in:fly="{{delay: 700, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/anveshi/chapter/karnataka">Karnataka Chapter</a></small>
							<small in:fly="{{delay: 750, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/anveshi/diaries">Travel Diaries</a></small>
							<small in:fly="{{delay: 800, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/anveshi/faq">FAQs</a></small>
							<small in:fly="{{delay: 850, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/anveshi/gallery">Gallery</a></small>
						<p in:fly="{{delay: 400, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/drashta">Draṣṭā</a></p>
							<small in:fly="{{delay: 650, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/course/hinduiconography">Hindu Iconography</a></small>
							<small in:fly="{{delay: 700, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/course/shriramswarup">Shri Ram Swarup</a></small>
							<small in:fly="{{delay: 750, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/anveshi/course/sitaramgoel">Sita Ram Goel</a></small>
							<small in:fly="{{delay: 800, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/drashtas">Draṣṭās</a></small>
							<small in:fly="{{delay: 850, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/schools">Schools</a></small>
							<small in:fly="{{delay: 900, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/firekeepers">Firekeepers</a></small>
						<p class="isdo" in:fly="{{delay: 450, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/mrdanga">Mṛdaṅga</a></p>
							<small in:fly="{{delay: 700, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/mrdanga/kala">Kalā</a></small>
							<small in:fly="{{delay: 750, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/mdranga/rasa">Rasa</a></small>
							<small in:fly="{{delay: 800, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/mrdanga/kavita">Kavitā</a></small>
						<p class="isdo" in:fly="{{delay: 500, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/mandala">Maṇḍala</a></p>
							<small in:fly="{{delay: 750, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/mandala/essays">Essays</a></small>
							<small in:fly="{{delay: 800, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/mandala/aphorisms">Caturasūtra</a></small>
							<small in:fly="{{delay: 850, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/mandala/synaptic">Synaptic Reconnection</a></small>
						<p class="isdo" in:fly="{{delay: 550, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/aryavarta">Āryavarta</a></p>
							<small in:fly="{{delay: 800, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/aryavarta/chapter/01">Kaśyapa's Lament</a></small>
							<small in:fly="{{delay: 850, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/aryavarta/chapter/02">Sūta and Sudā</a></small>
							<small in:fly="{{delay: 900, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/firekeepers">Gallery</a></small>
						<p class="isdo" in:fly="{{delay: 600, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/rta">Ṛta</a></p>
							<small in:fly="{{delay: 850, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/drashtas">Schema</a></small>
							<small in:fly="{{delay: 900, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/schools">Principles</a></small>
							<small in:fly="{{delay: 950, duration: 100, x: -100, y: 0, easing: circOut}}"><a href="/drashta/firekeepers">Phases</a></small>
					</div>
				</div>
				<div class="c-c-c-c col2 iscol">
					<div class="c-c-c-c slide1">
						{#await latestDhiti()}
						<small>...</small>
						{:then data}
						<Swiper
							modules={[Keyboard, Navigation]}
							keyboard={true}
  						loop={true}
  						slidesPerView={1}
							breakpoints={{
    					"576": {
      					slidesPerView: 1,
      					spaceBetween: 16,
    					},
    					"768": {
      					slidesPerView: 1,
      					spaceBetween: 16,
    					},
    					"1024": {
      					slidesPerView: 1,
      					spaceBetween: 16,
    					},
  						}}
								navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
								on:slideChange={() => console.log('slide change')}
							>
							{#each data as item}
							<SwiperSlide>
								<div class="c-c-c-c dhitislide" style="background-image: url('{item.image}')">
									<div class="c-c-c-c dhitiscreen">
										<h5><a href={item.link}>{item.title}</a></h5>
									</div>
								</div>
							</SwiperSlide>
							{/each}
							</Swiper>
							{:catch error}
						<pre>{error}</pre>
						{/await}
						<div class="r-r-r-r nav-row">
							<div class="custom-prev"><img src="/images/icons/prevwhite.png" alt="previous"></div>
							<div class="custom-next"><img src="/images/icons/nextwhite.png" alt="next"></div>
						</div>
					</div>
					<div class="c-c-c-c slide2">
						<p class="isdont" in:fly="{{delay: 600, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/dhiti">Dhīti</a></p>
						<p class="isdont" in:fly="{{delay: 600, duration: 200, x: 0, y: -24, easing: circOut}}"><a href="/openlibrary">Open Library</a></p>
					</div>
				</div>
			</div>
		<div class="socialicons soc2">
      	<a href="https://twitter.com/brhat_in" target="_blank" rel="noreferrer"><img src="/images/icons/twitter-red.png" alt="twitter icon" /></a>
      	<a href="https://www.facebook.com/brhat.in" target="_blank" rel="noreferrer"><img src="/images/icons/facebook-red.png" alt="facebook icon" /></a>
      	<a href="https://www.youtube.com/@brhat" target="_blank" rel="noreferrer"><img src="/images/icons/youtube-red.png" alt="youtube icon" /></a>
      	<a href="https://www.linkedin.com/company/brhat" target="_blank" rel="noreferrer"><img src="/images/icons/linkedin-red.png" alt="linkedin icon" /></a>
      	<a href="https://www.instagram.com/brhat_in/" target="_blank" rel="noreferrer"><img src="/images/icons/instagram-red.png" alt="instagram icon" /></a>
  	</div>
	</div>
	{/if}
</div>
</div>

<style>
.nav-row img { object-fit: contain; width: 24px; height: 24px;}
.nav-row { gap: 1em;}
.col1 {
	overflow-y: scroll;
}

.socialicons { border-top: 1px solid #474747; gap: 1em; padding-top: 1em; display: flex; height: 4em;}

.socialicons img {
	transition: all 0.04s ease-in;
	transform-origin: center center;
	filter: saturate(0.01);
	opacity: 0.4;
	object-fit: contain;
	height: 24px;
	width: 24px;
}

.socialicons img:hover {
	opacity: 1;
	filter: saturate(1);
}

.closebuttonstrip img {
	object-fit: contain;
	height: 40px;
	width: 40px;
	transition: all 0.14s ease-in;
	transform-origin: center center;
	filter: saturate(0.01);
	opacity: 0.8;
}

.closebuttonstrip:hover img {
	transform: rotate(-90deg);
	opacity: 1;
	filter: saturate(1);
}

a { 
	font-size: 12px;
	font-family: 'Inter Tight', sans-serif;
	letter-spacing: 0.5px;
}
 
.header { 
	position: fixed; 
	z-index: 899; 
	width: 100vw; 
	display: flex; flex-direction: column;
	justify-content: center;
	transition: all 0.5s linear;
	margin: 0;
	padding: 0;
	align-items: center;
	top: 0;
}

.headerbox { width: 100%; display: flex; flex-direction: row; justify-content: space-between; align-items: center; background: var(--beau);}
.logoarea { display: flex; flex-direction: row; align-items: center;}

@keyframes spreadingout {
	0% {height: 0%}
	100% {height: 100%;}
}

.logoarea .logotype { display: flex; flex-direction: row; align-items: center;}
.motif img, .logoarea .logotype img { cursor: pointer; }

.motif img {
 object-fit: contain;
 object-position: center center;
 transform-origin: center center;
 transition: all 0.33s ease-in-out;
}
.motif:hover img {
 transform: scale(0.9);
}

.logoarea .logotype img {
 object-fit: contain;
 object-position: center left;
 width: 100%;
 transform-origin: center center;
 transition: all 0.33s ease-in-out;
}

.logoarea .logotype:hover img {
 transform: scale(0.9);
}

	.rotate {
   transform: rotateZ(var(--rotation)deg);
   transition: transform 1s;
	}

	.mobilemenu {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 32px;
		height: 32px;
	}

	.menu-red {
		margin-bottom: -32px;
		opacity: 0;
		transition: all 0.26s ease-out;
		object-fit: contain;
	}

	.mobilemenu:hover .menu-red {
		animation: redin 0.15s ease-out forwards;
	}

	.menu-white{
		transition: all 0.26s ease-in;
		object-fit: contain;
	}

	.mobilemenu:hover .menu-white {
		animation: whiteout 0.12s ease-in forwards;
	}

	@keyframes whiteout {
		from { opacity: 1; transform: translateX(0);}
		to { opacity: 0; transform: translateX(-16px);}
	}

	@keyframes redin {
		from { opacity: 0;}
		to { opacity: 1;}
	}

	.fullscreener {
		display: flex;
		flex-direction: column;
		position: fixed;
		background: linear-gradient(40deg,#272727,#1B2023);
		top: 0;
		left: 0;
		width: 100vw;
		z-index: 999;
		padding: 1rem;
	}

	.innerheading {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 48px;
		align-items: center;
		justify-content: space-between;
	}

	.menu-red, .menu-white {
		width: 32px;
		height: 32px;
	}

	.item1, .item2, .item3, .item4, .item5, .item6, .item7 { border-radius: 4px; transition: all 0.39s var(--cube3);}
	.col1 p, .slide2 p { font-weight: bold; text-transform: uppercase; transition: all 0.12s var(--cube1); }
	.col1 small a, .slide3 small a { color: #676767;}
	.item1:hover small a, .item2:hover small a, .item3:hover small a, .item4:hover small a, .item5:hover small a, .item6:hover small a, .item7:hover small a, .slide3:hover small:hover a { color: white;}
	.col1 small a:hover { color: #fe4a49;}
	.col1 p a, .slide3 p a, .slide2 p a { color: white;}
	.dhitislide { background-size: cover; background-position: center center; background-repeat: no-repeat;}
	.dhitiscreen h5 a { color: white;}
	.dhitiscreen:hover a { color: #fe4a49;}
	.slide1 { border: 1px solid white; border-radius: 4px;}
	.isitem { transition: all 0.41s var(--cube2);}
	.dhitislide, .dhitiscreen { border-radius: 4px;}


@media screen and (min-width: 900px) {
	.fullscreener { height: 100vh;}
	.col1, .col2 { gap: 1em; justify-content: center;}
	.col1 { width: 60%;}
	.col2 { width: 40%;}
	.col1 p a, .slide2 p a { font-size: 1.44em;}
	.col1 p, .slide2 p { margin-bottom: 8px;}
	.col1 small a { font-size: 1em;}
	.col1 small { line-height: 1.6em;}
	.main-row { gap: 1em; height: calc(50% - 2.5em);}
	.item1:hover p a, .item2:hover p a, .item3:hover p a, .item4:hover p a, .item5:hover p a, .item6:hover p a, .item7:hover p a, .slide2 p:hover a { color: #fe4a49;}
	.item1 { width: 100%; height: calc(25% - 1.25em); padding-left: 1em; }
	.item2, .item3, .item4, .item5, .item6, .item7 { width: calc(50% - 0.5em); padding-left: 1em;}
	.row-top, .row-mid, .row-low { height: calc(25% - 1.25em); gap: 1em;}
	.slide1 { width: 100%; height: calc(75% - 1.75em);}
	.slide2 { width: 100%; height: calc(25% - 1.25em); border: 1px solid #373737; border-radius: 4px; padding-left: 1em;}
	.dhitislide { width: 100%; height: 100%;}
	.dhitiscreen { width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); padding-left: 2em; padding-right: 2em;}
	.dhitiscreen a { font-size: 1.12em;}
	.dhitiscreen h5 { line-height: 1.44em;}
	.nav-row { margin-top: -3em; margin-bottom: 0em ;z-index: 4; padding-left: 2em; }
	.the-in { gap: 2em;}
	.isitem { border: 1px solid #373737;}
	.isitem:hover { border: 1px solid #fe4a49;}

	.padding-base {
		padding-left: 6vw;
		padding-right: 6vw;
	}

	.main-row { width: 100%; height: calc(100vh - 8em); margin-top: 4px;}

	.logoarea { width: 35%; }
	.motif { padding-top: 0.08rem; margin-right: 10px;}
	.motif img { width: 45px; height: 45px;}
	.logoarea .logotype { align-items: center; padding-top: 12px;}
	.logoarea .logotype img { height: 36px;}

	.headerbox { 
		padding-top: 0;
		padding-bottom: 0;
		width: 100%;
		height: 64px
	}

	.header { padding: 0; height: 64px; }

	.fullscreener {
		padding-right: 8vw;
		padding-left: 8vw;
	}

	.inside-logotype img {
		object-fit: contain;
		height: 48px;
	}

	.closebuttonstrip img {
		width: 32px;
		height: 32px;
		cursor: pointer;
	}

	.listlist { 
		flex-direction: column;
		display: none;
	}

}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.isitem { justify-content: flex-start;}
	.fullscreener { height: 100%;}
	.col1, .col2 { gap: 1em; justify-content: flex-start; height: 100%;}
	.col1 { width: 100%; padding-top: 1em; }
	.col2 { display: none;}
	.col1 p a { font-size: 2.56em;}
	.col1 p { margin-bottom: 8px; margin-top: 1.44em;}
	.col1 small a { font-size: 1.6em;}
	.col1 small { line-height: 2.16em;}
	.isdo { margin-bottom: 8px; margin-top: 1.44em;}
	.isdont { margin-bottom: 4px; margin-top: 4px;}
	.main-row { gap: 1em; height: calc(100% - 2.5em);}
	.item1:hover p a, .item2:hover p a, .item3:hover p a, .item4:hover p a, .item5:hover p a, .item6:hover p a, .item7:hover p a { color: #fe4a49;}
	.item1 { width: 100%; height: calc(25% - 1.25em); padding-left: 1em; }
	.item2, .item3, .item4, .item5, .item6, .item7 { width: calc(50% - 0.5em); padding-left: 1em;}
	.row-top { height: calc(25% - 1.25em); gap: 1em;}
	.row-mid, .row-low { height: calc(25% - 1.25em); gap: 1em;}
	.slide1 { width: 100%; height: calc(75% - 1.75em);}
	.slide2 { width: 100%; height: calc(25% - 1.25em); border: 1px solid #373737; border-radius: 4px;}
	.dhitislide { width: 100%; height: 100%;}
	.dhitiscreen { width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); padding-left: 2em; padding-right: 2em;}
	.dhitiscreen a { font-size: 1.12em;}
	.dhitiscreen h5 { line-height: 1.44em;}
	.nav-row { margin-top: -3em; margin-bottom: 0em ;z-index: 4; padding-left: 2em; }
	.the-in { gap: 1em;}
	
	.padding-base {
		padding-right: 6vw;
		padding-left: 6vw;
	}

	.logoarea { width: 25%; }
	.motif img {
		width: 48px;
		height: 48px
	}
	.logoarea .logotype img {
		height: 40px;
		margin-left: 12px;
		margin-top: 8px;
		object-fit: contain;
	}

	.headerbox { 
		height: 64px; 
		width: 100%;
	}

	.fullscreener {
		padding-left: 6vw;
		padding-right: 6vw;
	}

	.the-inner { object-fit: contain; width: 160px; margin-bottom: 8px;}

	.soc2 { height: 4em;}

	.isitem, .slide1, .slide2 { display: none;}
	.row-top, .row-mid, .row-low { display: none;}
	.listlist { 
		flex-direction: column;
		display: flex;
	}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.fullscreener { min-height: 100vh; padding-left: 6vw; padding-right: 6vw;}
	.padding-base {
		padding-right: 6vw;
		padding-left: 6vw;
	}

	.logoarea { width: 50%; padding-top: 2px; }
	.motif img {
		width: 42px;
		height: 42px
	}

	.logoarea .logotype {
		margin-left: 12px;
		padding-top: 6px;
	}
	.logoarea .logotype img {
		height: 35px;
	}

 	.header {
		height: 64px;
		width: 100%;
		position: relative;

 	}

	.closebuttonstrip {
		display: flex;
		flex-direction: column;
		width: 50%;
		height: 100%;
		align-items: flex-end;
		justify-content: center;
		padding-right: 8px;
		text-align: right;
	}

	.closebuttonstrip img {
		width: 28px;
		height: 28px;
		text-align: right;
		opacity: 0.5;
	}

	.innerheading {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 48px;
		align-items: flex-start;
		justify-content: space-between;
	}

	.innerheading .logotype  {
		width: 30%;
	}
	.innerheading .logotype img {
		height: 48px;
		object-fit: contain;
	}
	
	.innerheading .logotype {
		padding-bottom: 8px;
	}

  .socialicons {
    display: flex;
    flex-direction: row;
    justify-content: center;
		width: 100%;
    align-items: center;
    gap: 8px;
		padding-top: 8px;
		border-top: 1px solid #474747;
  }

  .socialicons img {
    object-fit: contain;
    width: 24px;
    height: 24px;
    transform-origin: center center;
    transition: var(--quik);
  }

  .socialicons img:hover {
    transform: scale(1.1);
  }

		.isitem, .slide1, .slide2 { display: none;}
	.row-top, .row-mid, .row-low { display: none;}
	.listlist { 
		flex-direction: column;
		display: flex;
	}

	.isitem { justify-content: flex-start;}
	.fullscreener { height: 100%;}
	.col1, .col2 { gap: 1em; justify-content: flex-start; height: 100%;}
	.col1 { width: 100%; padding-top: 1em; padding-bottom: 1em; }
	.col2 { display: none;}
	.col1 p a { font-size: 2.56em;}
	.col1 p { margin-bottom: 8px; margin-top: 1.44em;}
	.col1 small a { font-size: 1.6em;}
	.col1 small { line-height: 2.16em;}
	.isdo { margin-bottom: 8px; margin-top: 1.44em;}
	.isdont { margin-bottom: 4px; margin-top: 4px;}
	.main-row { gap: 1em; height: calc(100% - 2.5em);}
	.item1:hover p a, .item2:hover p a, .item3:hover p a, .item4:hover p a, .item5:hover p a, .item6:hover p a, .item7:hover p a { color: #fe4a49;}
	.item1 { width: 100%; height: calc(25% - 1.25em); padding-left: 1em; }
	.item2, .item3, .item4, .item5, .item6, .item7 { width: calc(50% - 0.5em); padding-left: 1em;}
	.row-top { height: calc(25% - 1.25em); gap: 1em;}
	.row-mid, .row-low { height: calc(25% - 1.25em); gap: 1em;}
	.slide1 { width: 100%; height: calc(75% - 1.75em);}
	.slide2 { width: 100%; height: calc(25% - 1.25em); border: 1px solid #373737; border-radius: 4px;}
	.dhitislide { width: 100%; height: 100%;}
	.dhitiscreen { width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); padding-left: 2em; padding-right: 2em;}
	.dhitiscreen a { font-size: 1.12em;}
	.dhitiscreen h5 { line-height: 1.44em;}
	.nav-row { margin-top: -3em; margin-bottom: 0em ;z-index: 4; padding-left: 2em; }
	.the-in { gap: 1em;}


}

@media screen and (max-width: 575px) {

	.fullscreener { min-height: 100vh;}

	.padding-base {
		padding-left: 4vw;
		padding-right: 4vw;
	}
	.logoarea { width: 50%; }
	.header { height: 64px;}
	.headerbox { height: 64px; width: 100%;  }
	
	.motif img {
		width: 42px;
		height: 42px
	}

	.logoarea .logotype { margin-left: 12px; padding-top: 8px;}	
	.logoarea .logotype img {
		height: 35px;
	}
	
	.closebuttonstrip {
		display: flex;
		flex-direction: column;
		width: 50%;
		height: 100%;
		align-items: flex-end;
		justify-content: center;
		padding-right: 8px;
		text-align: right;
	}

	.closebuttonstrip img {
		width: 28px;
		height: 28px;
		text-align: right;
		opacity: 0.5;
	}

	.innerheading .logotype  {
		width: 30%;
	}
	.innerheading .logotype img {
		height: 48px;
		object-fit: contain;
	}
	
	.innerheading .logotype {
		padding-bottom: 1px;
	}
	
	.socialicons {
	  display: flex;
	  flex-direction: row;
	  justify-content: center;
		width: 100%;
    align-items: center;
    gap: 8px;
		padding-top: 8px;
		border-top: 1px solid #474747;
  }

  .socialicons img {
    object-fit: contain;
    width: 24px;
    height: 24px;
    transform-origin: center center;
    transition: var(--quik);
  }

  .socialicons img:hover {
    transform: scale(1.1);
  }

		.isitem, .slide1, .slide2 { display: none;}
	.row-top, .row-mid, .row-low { display: none;}
	.listlist { 
		flex-direction: column;
		display: flex;
	}

	.isitem { justify-content: flex-start;}
	.fullscreener { height: 100%;}
	.col1, .col2 { gap: 1em; justify-content: flex-start; height: 100%;}
	.col1 { width: 100%; padding-top: 1em; padding-bottom: 1em; }
	.col2 { display: none;}
	.col1 p a { font-size: 2.56em;}
	.col1 p { margin-bottom: 8px; margin-top: 1.44em;}
	.col1 small a { font-size: 1.6em;}
	.col1 small { line-height: 2.16em;}
	.isdo { margin-bottom: 8px; margin-top: 1.44em;}
	.isdont { margin-bottom: 4px; margin-top: 4px;}
	.main-row { gap: 1em; height: calc(100% - 2.5em);}
	.item1:hover p a, .item2:hover p a, .item3:hover p a, .item4:hover p a, .item5:hover p a, .item6:hover p a, .item7:hover p a { color: #fe4a49;}
	.item1 { width: 100%; height: calc(25% - 1.25em); padding-left: 1em; }
	.item2, .item3, .item4, .item5, .item6, .item7 { width: calc(50% - 0.5em); padding-left: 1em;}
	.row-top { height: calc(25% - 1.25em); gap: 1em;}
	.row-mid, .row-low { height: calc(25% - 1.25em); gap: 1em;}
	.slide1 { width: 100%; height: calc(75% - 1.75em);}
	.slide2 { width: 100%; height: calc(25% - 1.25em); border: 1px solid #373737; border-radius: 4px;}
	.dhitislide { width: 100%; height: 100%;}
	.dhitiscreen { width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); padding-left: 2em; padding-right: 2em;}
	.dhitiscreen a { font-size: 1.12em;}
	.dhitiscreen h5 { line-height: 1.44em;}
	.nav-row { margin-top: -3em; margin-bottom: 0em ;z-index: 4; padding-left: 2em; }
	.the-in { gap: 1em;}

}

</style>