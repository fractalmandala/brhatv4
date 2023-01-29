<script>

import { fly } from 'svelte/transition'
import { circOut } from 'svelte/easing'
let isRed = false;
let isMenu = false;

function showRed() {
	isRed = true;
}
function hideRed() {
	isRed = false;
}
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
       		<a href="/"><img src="/images/brhatlogos/horizontalwhite.png" alt="logotype"
       		/></a>
     	</div>
			<div class="closebuttonstrip" on:click={hideMenu} on:keydown={hideMenu}>
				<img src="/images/icons/hamburger-close.png" alt="closemenu"/>
			</div>
		</div>
		<div class="fullscreenpage">
			<div class="fullscreencol" id="columnleft">
				<div class="fslinks aboutfs"><a href="/about">About</a>
					<div class="nowitems"><a href="/about">Introduction</a></div>
					<div class="nowitems"><a href="/about/#namarupa">Nāmarūpa</a></div>
					<div class="nowitems"><a href="/about/#values">Pratijña</a></div>
					<div class="nowitems"><a href="/about/#advisory">Advisory Board</a></div>
					<div class="nowitems"><a href="/about/#team">Team</a></div>
					<div class="nowitems"><a href="/about/#anatomy">Why Now</a></div>
					<div class="nowitems"><a href="/about/#svatah">Why</a></div>
				</div>
				<div class="fslinks drashtafs"><a href="/about">Draṣṭā</a>
						<div class="nowitems"><a href="/">Main Page</a></div>
						<div class="nowitems"><a href="/">Karnataka</a></div>
						<div class="nowitems lastone"><a href="/">Odisha</a></div>
				</div>
				<div class="oglinks1"><a href="/openlibrary">Open Library</a></div>
				<div class="oglinks2"><a href="/dhiti">Dhīti</a></div>
			</div>
			<div class="fullscreencol" id="columnright">
				<div class="fslinks"><a href="/about">Anveṣī</a></div>
				<div class="fslinks"><a href="/mrdanga">Mṛdaṅga</a></div>
					<div class="fslinks"><a href="/mandala">Maṇḍala</a></div>
					<div class="fslinks"><a href="/aryavarta">Āryavarta</a></div>
					<div class="fslinks"><a href="/rta">Ṛta</a></div>
			</div>
		</div>
		<div class="socialicons">
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

.nowitems { height: 20px;}

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
	color: white;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 500;
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
		position: absolute;
		border-radius: 4px;
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
@media screen and (min-width: 900px) {

	.padding-base {
		padding-left: 6vw;
		padding-right: 6vw;
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

	.logoarea { width: 25%; }
	.motif img {
		width: 48px;
		height: 48px
	}
	.logoarea .logotype img {
		height: 40px;
		margin-left: 12px;
		margin-top: 8px;
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


}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.padding-base {
		padding-right: 4vw;
		padding-left: 4vw;
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
		width: 88px;
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
	.fullscreencol {
		display: flex;
		flex-direction: column;
		height: max-content;
		padding: 0 8px;
	
	}
	#columnright {
		align-items: flex-end;
		font-size: 20px;
	}
	#columnright a {
		text-transform: capitalize;
		font-size: 20px;
		font-weight: 400;
		color: white;
		width: 44%;
	}
	#columnleft {
		align-items: flex-start;
		width: 56%;
		line-height: 1.4rem;
	}
	#columnleft a {
		text-transform: capitalize;
		font-size: 16px;
		line-height: 1.4rem;
	}
	.nowitems a {
		font-size: 14px !important;
		color: #878787;
		font-weight: 400;
	}
	.nowitems {
		padding: 8px 0;
	}
	.fslinks {
		height: 100%;
	}
	#columnleft .fslinks { line-height: 0.48rem;}
	#columnright .fslinks {
		line-height: 2rem;
	}
	.aboutfs, .drashtafs {
		height: max-content;
	}
	.drashtafs {
		margin-top: 2rem;
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

	.oglinks1 {
		margin-top: 32px;
		text-transform: uppercase;
	}
	.oglinks2 {
		margin-top: 20px;
		text-transform: uppercase;
	}
	.oglinks1 a, .oglinks2 a {
		font-size: 18px !important;
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


	.fullscreener {
		display: flex;
		flex-direction: column;
		position: absolute;
		border-radius: 4px;
		background-color: #272727;
		top: 0;
		margin-left: 4px;
		margin-top: 4px;
		left: 0;
		width: calc(100% - 8px);
		height: calc(100vh - 8px);
		z-index: 999;
		padding: 1rem;
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
		width: 88px;
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
	.fullscreencol {
		display: flex;
		flex-direction: column;
		height: max-content;
		padding: 0 8px;
	
	}
	#columnright {
		align-items: flex-end;
		font-size: 20px;
	}
	#columnright a {
		text-transform: capitalize;
		font-size: 20px;
		font-weight: 400;
		color: white;
		width: 44%;
	}
	#columnleft {
		align-items: flex-start;
		width: 56%;
		line-height: 1.4rem;
	}
	#columnleft a {
		text-transform: capitalize;
		font-size: 16px;
		line-height: 1.4rem;
	}
	.nowitems a {
		font-size: 14px !important;
		color: #878787;
		font-weight: 400;
	}
	.nowitems {
		padding: 8px 0;
	}
	.fslinks {
		height: 100%;
	}
	#columnleft .fslinks { line-height: 0.48rem;}
	#columnright .fslinks {
		line-height: 2rem;
	}
	.aboutfs, .drashtafs {
		height: max-content;
	}
	.drashtafs {
		margin-top: 2rem;
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

	.oglinks1 {
	margin-top: 32px;
	text-transform: uppercase;
	}
	
	.oglinks2 {
		margin-top: 20px;
		text-transform: uppercase;
	}

	.oglinks1 a, .oglinks2 a {
		font-size: 18px !important;
	}
}

</style>