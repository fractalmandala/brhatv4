<script lang="ts">
import { fade } from 'svelte/transition';
import { fly } from 'svelte/transition'
import { circOut } from 'svelte/easing'
let isMenu = false;


function showMenu() {
	isMenu = true;
}
function hideMenu() {
	isMenu = false;
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
		in:fly="{{ delay: 0, duration: 200, x: 1000, opacity: 0, easing: circOut}}"
		out:fly="{{ delay: 0, duration: 300, x: 1000, y: 0, opacity: 0, easing: circOut}}">
		<div class="innerheading">
     	<div class="logotype inside-logotype">
       		<a href="/"><img class="the-inner" src="/images/brhatlogos/horizontalwhite.png" alt="logotype"
       		/></a>
     	</div>
			<div class="closebuttonstrip" on:click={hideMenu} on:keydown={hideMenu}>
				<img src="/images/icons/hamburger-close.png" alt="closemenu"/>
			</div>
		</div>
		<div class="fullscreenpage">
			<div class="r-r-r-r inner-marginbox">
				<div class="c-c-c-c" id="columnleft">
					<div class="oglinks linka" in:fly="{{delay: 0, duration: 100, x: 0, y: 48, opacity: 0, easing: circOut}}"><a href="/about">About</a>
						<div class="ogsub">
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/about/docs/svatahsiddha">Svataḥsiddha</a></p>
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/about/docs/anatomy">Anatomy of a Civilizational Moment</a></p>
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/about/#team">Team</a></p>
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/about/docs/namelogo">Nāmarūpa</a></p>
						</div>
					</div>
					<div class="oglinks linka" in:fly="{{delay: 100, duration: 100, x: 0, y: 48, opacity: 0, easing: circOut}}"><a href="/anveshi">Anveṣī</a>
						<div class="ogsub">
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/anveshi/chapter/odisha">Odisha Chapter</a></p>
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/anveshi/chapter/chamba">Chamba Chapter</a></p>
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/anveshi/chapter/karnataka">Karnataka Chapter</a></p>
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/anveshi/diaries">Travelogue</a></p>
						</div>	
					</div>
					<div class="oglinks linka" in:fly="{{delay: 200, duration: 100, x: 0, y: 48, opacity: 0, easing: circOut}}"><a href="/drashta">Draṣṭā</a>
						<div class="ogsub">
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/drashta/course/hinduiconography">Hindu Iconography</a></p>
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/drashta/course/shriramswarup">Introduction to Shri Ram Swarup</a></p>
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/drashta/course/sitaramgoel">Introduction to Sita Ram Goel</a></p>
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/drashta/drashtas">Draṣṭās</a></p>
						</div>
					</div>
				</div>
				<div class="c-c-c-c" id="columnright">
					<div class="oglinks linka" in:fly="{{delay: 300, duration: 100, x: 0, y: 48, opacity: 0, easing: circOut}}"><a href="/mrdanga">Mṛdaṅga</a>
						<div class="ogsub">
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/drashta/course/hinduiconography">Rasa</a></p>
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/drashta/course/shriramswarup">Kalā</a></p>
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/drashta/course/sitaramgoel">Kavitā</a></p>
						</div>
					</div>
					<div class="oglinks linka" in:fly="{{delay: 400, duration: 100, x: 0, y: 48, opacity: 0, easing: circOut}}"><a href="/mandala">Maṇḍala</a>
						<div class="ogsub">
						<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/about/docs/svatahsiddha">Primary Essays</a></p>
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/about/docs/anatomy">Caturasūtra</a></p>
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/about/#team">Synaptic Reconnection</a></p>
							<p
							in:fly="{{delay: 900, duration: 100, x: 0, y: -20, opacity: 0, easing: circOut}}"
							><a href="/about/docs/namelogo">Ancestors Outside of Time</a></p>
						</div>
					</div>
					<div class="oglinks linka" in:fly="{{delay: 500, duration: 100, x: 0, y: 48, opacity: 0, easing: circOut}}"><a href="/aryavarta">Āryavarta</a></div>
					<div class="oglinks linka" in:fly="{{delay: 600, duration: 100, x: 0, y: 48, opacity: 0, easing: circOut}}"><a href="/rta">Ṛta in Design</a></div>
					<div class="oglinks linka" in:fly="{{delay: 700, duration: 100, x: 0, y: 48, opacity: 0, easing: circOut}}"><a href="/openlibrary">Open Library</a></div>
					<div class="oglinks linka" in:fly="{{delay: 800, duration: 100, x: 0, y: 48, opacity: 0, easing: circOut}}"><a href="/dhiti">Dhīti</a></div>
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

.oglinks a, .ogsub a { transition: all 0.11s ease-out;}
.oglinks a:hover, .ogsub a:hover { color: #fe4a49;}
.oglinks a { color: #373737;}
.ogsub a { color: #414141;}
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
	background: rgba(0,0,0,0);
	backdrop-filter: blur(0.4);
	top: 0;
}

.headerbox { width: 100%; display: flex; flex-direction: row; justify-content: space-between; align-items: center; background: var(--beau); border-radius: 4px;}
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
		height: 100vh;
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

	.ogsub {
		display: flex;
		flex-direction: column;
		text-transform: capitalize;
	}

	.oglinks {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		transform-origin: left center;
		transition: all 0.24s var(--cube1);
	}

	.inner-marginbox:hover .oglinks:hover {
		transform: translateX(8px) scale(1.2);
	}

	.linka {
		text-transform: uppercase;
		font-weight: 800;
		color: #d7d7d7;
	}

	.inner-marginbox:hover .oglinks { transform: scale(0.9);}

@media screen and (min-width: 900px) {

	.padding-base {
		padding-left: 6vw;
		padding-right: 6vw;
	}

	.oglinks a {
		font-size: 20px;
		color: #d7d7d7;
	}

	.ogsub {
		width: 80%;
		margin-bottom: 0;
		margin-top: 0;
		padding-top: 8px;
	}
	.ogsub p {
		margin-top: 0;
		margin-bottom: 8px;
		font-weight: 400;
	}


	.oglinks { margin-bottom: 2em;}

	.ogsub a {
		font-size: 14px;
		margin-top: 0;
		margin-bottom: 0;
		color: #474747;
	}
	
	#columnleft, #columnright {
		width: 50%;
	}

	.logoarea { width: 35%; }
	.motif { padding-top: 0.08rem; margin-right: 10px;}
	.motif img { width: 45px; height: 45px;}
	.logoarea .logotype { align-items: center; padding-top: 12px;}
	.logoarea .logotype img { height: 36px;}

	.headerbox { 
		margin-top: 8px;
		padding-top: 0;
		padding-bottom: 0;
		width: calc(100% - 16px);
		height: 64px
	}

	.header { padding: 0; height: 72px; }

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

	.fullscreenpage {
		height: calc(100vh - 8em);
		margin-top: 8px;
		padding-top: 2em;
		border-top: 1px solid #474747;
	}

}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.padding-base {
		padding-right: 6vw;
		padding-left: 6vw;
	}
		
	.inner-marginbox { height: calc(100vh - 8em); padding-top: 4em;}
	

	.oglinks a {
		font-size: 20px;
		color: #d7d7d7;
	}

	.ogsub {
		width: 80%;
		margin-bottom: 0;
		margin-top: 0;
		padding-top: 8px;
	}
	.ogsub p {
		margin-top: 0;
		margin-bottom: 8px;
		font-weight: 400;
	}


	.oglinks { margin-bottom: 2em;}

	.ogsub a {
		font-size: 14px;
		margin-top: 0;
		margin-bottom: 0;
		color: #474747;
	}
	
	#columnleft, #columnright {
		width: 50%;
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
		height: 72px; 
		margin-top: 8px;
		width: calc(100% - 16px);
	}

	.fullscreener {
		padding-left: 8vw;
		padding-right: 8vw;
	}

	.the-inner { object-fit: contain; width: 128px;}

	.soc2 { height: 4em;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.padding-base {
		padding-right: 4vw;
		padding-left: 4vw;
	}
	
	.inner-marginbox { height: calc(100vh - 8em); padding-top: 4em; width: 100%; gap: 2em; padding-left: 4vw;}


	.oglinks a {
		font-size: 20px;
		color: #d7d7d7;
	}

	.ogsub {
		width: 80%;
		margin-bottom: 0;
		margin-top: 0;
		padding-top: 8px;
	}
	.ogsub p {
		margin-top: 0;
		margin-bottom: 8px;
		font-weight: 400;
	}


	.oglinks { margin-bottom: 2em;}

	.ogsub a {
		font-size: 14px;
		margin-top: 0;
		margin-bottom: 0;
		color: #474747;
	}
	
	#columnleft, #columnright {
		width: 50%;
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

 	.headerbox { height: 64px;
		margin-top: 4px;
		width: calc(100% - 8px);
		position: relative;

 	}
	.header { height: 72px;}

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
	
	.fullscreenpage {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		padding: 16px 8px;
		margin-top: 16px;
		border-top: 1px solid #474747;
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


}

@media screen and (max-width: 575px) {

	.padding-base {
		padding-left: 4vw;
		padding-right: 4vw;
	}
	.logoarea { width: 50%; }
	.header { height: 72px;}
	.headerbox { height: 64px; margin-top: 4px; margin-left: 4px; margin-right: 4px; width: calc(100% - 8px);  }
	
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
	
	.fullscreenpage {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		padding: 16px 8px;
		margin-top: 16px;
			border-top: 1px solid #474747;
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

	
	.inner-marginbox { height: calc(100vh - 8em); padding-top: 4em; width: 100%; gap: 2em; padding-left: 4vw;}


	.oglinks a {
		font-size: 18px;
		color: #d7d7d7;
	}

	.ogsub {
		width: 90%;
		margin-bottom: 0;
		margin-top: 0;
		padding-top: 8px;
	}
	.ogsub p {
		margin-top: 0;
		margin-bottom: 8px;
		font-weight: 400;
	}


	.oglinks { margin-bottom: 2em;}

	.ogsub a {
		font-size: 14px;
		margin-top: 0;
		margin-bottom: 0;
		color: #474747;
	}
	
	#columnleft, #columnright {
		width: 50%;
	}


}

</style>