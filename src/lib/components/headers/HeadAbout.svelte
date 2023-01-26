<script>

import { fly } from 'svelte/transition'
import { circOut } from 'svelte/easing'
let isAreas = false;
let isBeliefs = false;
let isOther = false;
let isRed = false;
let isMenu = false;

function showAreas() {
	isAreas = true;
}
function hideAreas() {
	isAreas = false;
}
function showBeliefs() {
	isBeliefs = true;
}
function hideBeliefs() {
	isBeliefs = false;
}
function showOther() {
	isOther = true;
}
function hideOther() {
	isOther = false;
}
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
<div class="headerbox">
  <div class="logoarea">
     <div class="motif" id="scroll-container">
       <a href="/"><img src="/images/corpimages/motif.png" id="rotate-img" class="rotate" alt="motif" /></a>
     </div>
     <div class="logotype">
       <a href="/"><img src="/images/corpimages/logotype.png" alt="logotype"
       /></a>
     </div>
  </div>
  <div class="navbar">
			<div class="menuitems opener" on:mouseenter={showBeliefs} on:mouseleave={hideBeliefs}><p>Beliefs</p>
				{#if isBeliefs}
				<div class="second-row">
					<div class="rowitems"><a href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a></div>
					<div class="rowitems"><a href="/about/docs/svatahsiddha">Svataḥsiddha</a></div>
					<div class="rowitems"><a href="/about/docs/anatomy">Anatomy of a Civilizational Moment</a></div>
				</div>
				{/if}
			</div>
      <div class="menuitems"><a href="/about/docs/namelogo">Nāmarūpa</a></div>
			<div class="menuitems"><a href="/about/docs/values">Pratijñā</a></div>
			<div class="menuitems opener" on:mouseenter={showAreas} on:mouseleave={hideAreas}><p>Areas</p>
				{#if isAreas}
				<div class="second-row">
					<div class="rowitems"><a href="/about/areas/culturecreatives">Culture Creatives</a></div>
					<div class="rowitems"><a href="/about/areas/policyresearch">Policy Research</a></div>
					<div class="rowitems"><a href="/about/areas/leadershipdevelopment">Leadership Development</a></div>
				</div>
				{/if}
			</div>
			<div class="menuitems"><a href="/about/#advisory">Advisory Board</a></div>
			<div class="menuitems"><a href="/about/#partners">Partners</a></div>
			<div class="menuitems"><a href="/about/#team">Team</a></div>
			<div class="menuitems opener" on:mouseenter={showOther} on:mouseleave={hideOther}><p>Other</p>
				{#if isOther}
				<div class="second-row">
					<div class="rowitems"><a href="/dhiti">Dhīti</a></div>
					<div class="rowitems"><a href="/openlibrary">Open Library</a></div>
					<div class="rowitems"><a href="/drashta">Draṣṭā</a></div>
					<div class="rowitems"><a href="/anveshi">Anveṣī</a></div>
					<div class="rowitems"><a href="/mrdanga">Mṛdaṅga</a></div>
					<div class="rowitems"><a href="/mandala">Maṇḍala</a></div>
					<div class="rowitems"><a href="/aryavarta">Āryavarta</a></div>
					<div class="rowitems"><a href="/rta">Ṛta</a></div>
				</div>
				{/if}
			</div>
   	</div>
	</div>
	<div class="mobilemenu">
		
		{#if isRed}
		<img class="menu-red" src="/images/icons/hamburger-red.png" alt="menuicon" on:mouseleave={hideRed} on:click={showMenu} on:keydown={showMenu}/>
		{:else}
		<img class="menu-white" src="/images/icons/hamburger-white.png" alt="menuicon" on:mouseenter={showRed} on:mouseleave={hideRed} on:click={showMenu} on:keydown={showMenu}/>	
		{/if}
	</div>
	{#if isMenu}
	<div class="fullscreener"
		in:fly="{{ delay: 100, duration: 200, x: 0, y: 700, opacity: 0.3, easing: circOut}}"
		out:fly="{{ delay: 0, duration: 400, x: 0, y: 700, opacity: 0.3, easing: circOut}}"
		>
		<div class="innerheading">
			<div class="motif" id="scroll-container">
       	<a href="/"><img src="/images/corpimages/motif.png" id="rotate-img" class="rotate" alt="motif" /></a>
     	</div>
     	<div class="logotype">
       		<a href="/"><img src="/images/corpimages/logotype.png" alt="logotype"
       		/></a>
     	</div>
			<div class="closebuttonstrip" on:click={hideMenu} on:keydown={hideMenu}>
				<img src="/images/icons/hamburger-close.png" alt="closemenu"/>
			</div>
		</div>
		<div class="fullscreenpage">
			<div class="fullscreencol" id="columnleft">
				<div class="fslinks drashtafs"><p>Beliefs</p>
					<div class="nowitems"><a href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a></div>
					<div class="nowitems"><a href="/about/docs/svatahsiddha">Svataḥsiddha</a></div>
					<div class="nowitems"><a href="/about/docs/anatomy">Anatomy of a Civilizational Moment</a></div>
				</div>
				<div class="fslinks drashtafs"><a href="/about/docs/namelogo">Nāmarūpa</a>
				</div>
				<div class="fslinks drashtafs"><a href="/about/docs/values">Pratijñā</a>
				</div>
				<div class="fslinks drashtafs"><p>Areas</p>
					<div class="nowitems"><a href="/about/areas/culturecreatives">Culture Creatives</a></div>
					<div class="nowitems"><a href="/about/areas/policyresearch">Policy Research</a></div>
					<div class="nowitems"><a href="/about/areas/leadershipdevelopment">Leadership Development</a></div>
				</div>
				<div class="fslinks drashtafs"><a href="/about/#advisory">Advisory Board</a>
				</div>
				<div class="fslinks drashtafs"><a href="/about/#partners">Partners</a>
				</div>
				<div class="fslinks drashtafs"><a href="/about/#team">Team</a>
				</div>
			</div>
			<div class="fullscreencol" id="columnright">
				<div class="rowitems"><a href="/dhiti">Dhīti</a></div>
				<div class="rowitems"><a href="/openlibrary">Open Library</a></div>
				<div class="rowitems"><a href="/drashta">Draṣṭā</a></div>
				<div class="rowitems"><a href="/anveshi">Anveṣī</a></div>
				<div class="rowitems"><a href="/mrdanga">Mṛdaṅga</a></div>
				<div class="rowitems"><a href="/mandala">Maṇḍala</a></div>
				<div class="rowitems"><a href="/aryavarta">Āryavarta</a></div>
				<div class="rowitems"><a href="/rta">Ṛta</a></div>
			</div>
		</div>
		<div class="socialicons">
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/122-twitter.png" alt="twitter"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/124-fb.png" alt="facebook"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/123-linked.png" alt="linkedin"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/121-insta.png" alt="instagram"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/125-ytube.png" alt="youtube"/></a>
  	</div>
	</div>
	{/if}
</div>

<style>

.drashtafs p { color: white; font-weight: 500; margin-top: 0;}

.nowitems { height: 20px;}

.closebuttonstrip img {
	object-fit: contain;
	height: 40px;
	width: 40px;
}

a, .menuitems a, .menuitems p { 
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
padding: 0 !important;
align-items: center;
background: rgba(255,255,255,0.6);
backdrop-filter: blur(0.4);
top: 0;
}

.menuitems {
	background: transparent;
	width: max-content;
	padding: 0;	
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0;
}

.headerbox { width: 100%; display: flex; flex-direction: row; justify-content: space-between; align-items: center; background: var(--beau); border-radius: 4px;}
.logoarea { display: flex; flex-direction: row; align-items: center;}
.navbar { width: 70%; display: flex; flex-direction: row; justify-content: flex-end; align-items: center; text-align: right; position: relative; }

.second-row {
	position: absolute;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	width: max-content;
	margin-left: -80px;
	top: 72px;
	height: max-content;
	left: 0;
	color: white;
	border-radius: 4px;
	background: transparent;
	background-color: none;
	padding-top: 16px;
}

.second-row::before {
	content: '';
	width: 100%;
	height: 0%;
	position: absolute;
	top: 8px;
	left: 0;
	border-radius: 4px;
	background: rgba(39,39,39,1);
}

.opener {
	position: relative;
}

.opener:hover .second-row::before, .second-row:hover::before {
	animation: spreadingout 0.26s var(--cube4) forwards;
}

@keyframes spreadingout {
	0% {height: 0%}
	100% {height: 100%;}
}

.second-row .rowitems {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding-left: 32px;
	padding-right: 32px;
	width: 100%;
	height: 32px;
	text-align: left;
	z-index: 950;
	transition: all 0.18s var(--cube4);
}
.second-row .rowitems a {
	text-align: left;
}


.second-row .rowitems:hover {
	background-color: white;
}
.second-row .rowitems:hover a {
	color: #474747;
}
.second-row .rowitems:hover a:hover {
	color: var(--red);
}

.logotype { display: flex; flex-direction: row; align-items: center;}
.motif img, .logotype img { cursor: pointer; }
.motif img {
 transform-origin: center center;
}


.motif { width: 48px; height: 48px; }
.motif img {
 object-fit: contain;
 object-position: center center;
 transform-origin: center center;
 transition: all 0.33s ease-in-out;
}
.motif:hover img {
 transform: scale(0.9);
}
.logotype { height: 56px; width: 90px; margin-left: 8px; }
.logotype img {
 object-fit: contain;
 object-position: center left;
 width: 100%;
 transform-origin: center center;
 transition: all 0.33s ease-in-out;
}
.logotype:hover img {
 transform: scale(0.9);
}

.rotate {
   transform: rotateZ(var(--rotation)deg);
   transition: transform 1s;
}

@media screen and (min-width: 900px) {
	.mobilemenu {
		display: none;
	}
	.navbar {
		gap: 2rem;
		height: 72px;
	}
	.menuitems {
		height: 72px;
	}
	.logoarea { width: 35%; }
	.headerbox { 
		margin-top: 8px;
		margin-right: 8px;
		margin-left: 8px;
		padding-right: 2rem;
		padding-left: 2rem;
		padding-top: 0;
		padding-bottom: 0;
		width: calc(100% - 16px);
	}
	/*
	.secondbar { height: 48px; 	flex-direction: row; width: 100vw;}*/
	.second-row {
		display: flex;
		flex-direction: column;
		padding-bottom: 8px;	
	}
	.rowitems {
		display: flex;
		flex-direction: column;
	}
	.header { padding: 0; }
	.motif { padding-top: 0.08rem; margin-right: 6px;}
	.motif img { width: 48px;
 		height: 48px;
	}
	.logotype { padding-top: 12px; }
	.mobilemenu, .fullscreener {
		display: none;
	}

}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.logoarea { width: 25%; }
 	.headerbox { 
		padding: 0 16px; 
		height: 72px; 
		margin-top: 8px;
		margin-right: 8px;
		margin-left: 8px;
		width: calc(100% - 16px);
	}

 	.logotype img { padding-top: 0.75rem;}
	.navbar {
		gap: 24px;	
		width: 75%;
	}

	.motif img {
		width: 48px;
		height: 48px
	}

	.logotype img {
		height: 48px;
		}
	
	.mobilemenu, .fullscreener {
		display: none;
	}

}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.logoarea { width: 50%; }
 	.headerbox { height: 64px;
		margin-top: 4px;
		margin-left: 4px;
		margin-right: 4px;
		width: calc(100% - 8px);
		position: relative;
 }
	.header { height: 68px;}

	.motif img {
		width: 48px;
		height: 48px
	}
	.logotype img {
		height: 48px;
	padding-top: 8px;
		}
 
	.navbar {
  	display: none;
	}
	
	.mobilemenu {
		display: flex;
		position: absolute;
		justify-content: center;
		top: 0;
		right: 0;
		flex-direction: column;
		width: 64px;
		height: 100%;
	}

	.fullscreener {
		display: flex;
		flex-direction: column;
		position: absolute;
		border-radius: 4px;
		background-color: #272727;
		top: 0;
		margin-left: 4px;
		margin-top: 8px;
		left: 0;
		width: calc(100% - 8px);
		height: calc(100vh - 16px);
		z-index: 999;
		padding: 1rem;
	}


	.menu-white {
		margin-bottom: 0px;
	}

	.mobilemenu img {
		object-fit: contain;
		height: 40px;
		width: 40px;
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

	.innerheading .motif {
		width: 40px;
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
		padding: 16px 0;
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
		font-size: 16px;
		width: 50%;
		text-align: right;
	}
	#columnright a {
		text-transform: capitalize;
		font-size: 16px;
		font-weight: 400;
		color: white;
		text-align: right;
	}
	#columnleft {
		align-items: flex-start;
		width: 50%;
		line-height: 1.2em;
	}
	#columnleft a {
		text-transform: capitalize;
		font-size: 16px;
		line-height: 1.2em;
	}
	.nowitems a {
		font-size: 14px !important;
		color: #878787;
		font-weight: 400;
	}
	.nowitems {
		margin-top: 4px; 
		margin-bottom: 4px;
	}
	.fslinks {
		height: 100%;
	}
	#columnleft .fslinks { line-height: 1em;}
	#columnright .rowitems {
		line-height: 2em;
	}
	.drashtafs {
		height: max-content;
	}
	.drashtafs {
		margin-top: 1.24em;
		margin-bottom: 0;
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

 .headerbox { padding: 0 16px;}

}

@media screen and (max-width: 575px) {
	.logoarea { width: 50%; }
	.headerbox { height: 64px; margin-top: 4px; margin-left: 4px; margin-right: 4px; width: calc(100% - 8px);  }
	.motif img {
		width: 44px;
		height: 44px
	}
	.motif {
	 	padding-top: 2px;
	}
	.logotype img {
		height: 48px;
		padding-top: 8px;
		}
	.navbar {
	  display: none;
	 }
	.headerbox { padding: 0 16px;}
	.mobilemenu {
		display: flex;
		position: absolute;
		justify-content: center;
		top: 0;
		right: 0;
		flex-direction: column;
		width: 64px;
		height: 100%;
	}
	.menu-white {
		margin-bottom: 0px;
	}

	.mobilemenu img {
	object-fit: contain;
	height: 40px;
	width: 40px;
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

	.innerheading {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 48px;
		align-items: flex-start;
		justify-content: space-between;
	}

	.innerheading .motif {
		width: 40px;
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
		padding: 16px 0;
		margin-top: 16px;
		border-top: 1px solid #474747;
	}

	.fullscreencol {
		display: flex;
		flex-direction: column;
		height: max-content;
		padding: 0;
	
	}

	#columnright {
		align-items: flex-end;
		font-size: 16px;
		padding-top: 10px;
	}

	#columnright a {
		text-transform: uppercase;
		font-size: 16px;
		font-weight: 600;
		color: white;
	}

	#columnleft {
		align-items: flex-start;
		width: 56%;
		line-height: 1.2em;
	}

	#columnleft a {
		text-transform: capitalize;
		font-size: 16px;
		line-height: 1.2em;
	}

	.nowitems a {
		font-size: 14px !important;
		color: #878787;
		font-weight: 400;
	}

	.nowitems {
		margin-top: 4px; 
		margin-bottom: 4px;
	}

	.fslinks {
		height: 100%;
	}

	#columnleft .fslinks { line-height: 1em;}
	#columnright .rowitems {
		line-height: 2.4em;
	}

	.drashtafs {
		height: max-content;
	}

	.drashtafs {
		margin-top: 1.2em;
		margin-bottom: 0;
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

</style>