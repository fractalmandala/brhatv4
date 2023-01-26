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
     <div class="logotype">
      	<a href="/">
					<div class="logo-svg-box">
						<svg width="249" height="46" viewBox="0 0 249 46" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="log-anv" clip-path="url(#clip0_203_39)">
							<path id="b" d="M8.03831 32.1769V32.9555H1.45142V1.07855H8.21676V12.4267V13.3383L8.9855 12.8483C9.38617 12.593 9.81993 12.3706 10.2876 12.1815L10.2877 12.1816L10.2976 12.1774C11.4218 11.6946 12.6337 11.4512 13.9383 11.4512C15.9694 11.4512 17.7357 11.9271 19.2543 12.865L19.2542 12.865L19.2601 12.8686C20.7826 13.7803 21.9688 15.0617 22.8207 16.7262L22.8207 16.7262L22.8238 16.7321C23.7034 18.3952 24.1493 20.2976 24.1493 22.4514C24.1493 24.5741 23.7039 26.4617 22.8238 28.1256L22.8224 28.1284C21.9704 29.7642 20.7824 31.0491 19.2543 31.9929C17.7356 32.9306 15.9694 33.4065 13.9383 33.4065C12.6082 33.4065 11.3868 33.1499 10.2674 32.6419C9.74707 32.3917 9.27134 32.1035 8.83936 31.7777L8.03831 31.1736V32.1769ZM10.0671 26.8043L10.0745 26.8087L10.082 26.8129C10.8187 27.219 11.6471 27.4163 12.5548 27.4163C13.4673 27.4163 14.289 27.2015 15.0024 26.7566C15.731 26.3205 16.2994 25.7295 16.6991 24.989L16.6992 24.989L16.7034 24.9809C17.1013 24.2103 17.2946 23.3482 17.2946 22.4063C17.2946 21.4933 17.1008 20.6597 16.7013 19.9179C16.3025 19.1473 15.733 18.5374 14.998 18.0985C14.2589 17.6572 13.4248 17.4416 12.5103 17.4416C11.5956 17.4416 10.7616 17.6571 10.0224 18.0985L10.0223 18.0984L10.0135 18.1039C9.31386 18.5417 8.76333 19.1328 8.36601 19.8687L8.36599 19.8687C7.96364 20.6141 7.77048 21.4649 7.77048 22.4063C7.77048 23.3754 7.96259 24.2531 8.36171 25.026L8.36164 25.026L8.36599 25.0341C8.7665 25.7761 9.33635 26.368 10.0671 26.8043Z" fill="white" stroke="white" class="svg-elem-1"></path>
							<path id="r" d="M32.1238 32.7276C30.766 33.3196 29.1725 33.4 27.9702 33.4109V11.8974H34.8977V12.8308V13.9282L35.7258 13.2081C37.0691 12.04 38.8277 11.437 41.0472 11.437C42.0694 11.437 42.9197 11.5701 43.6099 11.8212L43.6099 11.8213L43.6158 11.8233C44.1939 12.0256 44.6949 12.3159 45.1237 12.6941L41.102 18.1269C40.8704 17.9702 40.6059 17.8441 40.3152 17.7446C39.822 17.5346 39.2732 17.4355 38.6781 17.4355C37.5355 17.4355 36.5849 17.7965 35.895 18.5645C35.2007 19.3057 34.8977 20.3703 34.8977 21.6651V22.6529V22.655L34.8522 28.0956H34.8522V28.0998C34.8522 29.4726 34.5315 30.461 34.0477 31.1816C33.5632 31.9032 32.8899 32.3936 32.1238 32.7276Z" fill="#FE4A49" stroke="#FE4A49" class="svg-elem-2"></path>
							<path id="h" d="M68.6926 19.2044V32.9555H61.9271V21.0083C61.9271 19.8871 61.5981 18.9485 60.8854 18.2618C60.1881 17.5596 59.2988 17.2161 58.2585 17.2161C57.5589 17.2161 56.9115 17.3684 56.3267 17.6812L56.3266 17.681L56.3156 17.6873C55.7593 18.0033 55.3221 18.4458 55.01 19.0062C54.6914 19.5784 54.5453 20.2532 54.5453 21.0083V32.9555H47.7798V1.07855H54.5453V12.731V13.7532L55.3522 13.1257C55.6631 12.8839 55.9969 12.6665 56.354 12.4736L56.354 12.4736L56.3619 12.4692C57.5555 11.796 58.956 11.4512 60.5792 11.4512C62.2653 11.4512 63.6947 11.7974 64.8856 12.4692L64.8855 12.4693L64.8977 12.4758C66.1256 13.1243 67.0495 14.0191 67.6843 15.1626L67.6842 15.1626L67.6888 15.1706C68.3529 16.317 68.6926 17.6563 68.6926 19.2044Z" fill="white" stroke="white" class="svg-elem-3"></path>
							<path id="a" d="M77.3245 32.0477L77.3243 32.0476C75.8208 31.1046 74.6426 29.8194 73.7871 28.1816C72.9325 26.5168 72.5 24.6274 72.5 22.5025C72.5 20.3457 72.9333 18.441 73.7879 16.7764L73.7879 16.7763C74.6435 15.1094 75.8201 13.8272 77.3185 12.9156L77.3186 12.9156L77.3244 12.912C78.8194 11.9741 80.5316 11.5 82.4756 11.5C83.785 11.5 84.9679 11.7434 86.0313 12.2225L86.0312 12.2226L86.0413 12.2269C86.7054 12.5089 87.2875 12.8656 87.7921 13.2951L88.6162 13.9965V12.9143V11.9509H95.2717V33.0086H88.6162V32.0245V30.9494L87.794 31.6421C87.2865 32.0697 86.7004 32.4353 86.0313 32.7375C84.9679 33.2166 83.785 33.46 82.4756 33.46C80.5316 33.46 78.8194 32.9859 77.3245 32.0477ZM88.333 19.9192L88.3326 19.9184C87.9309 19.1777 87.36 18.5867 86.6303 18.151C85.9147 17.7065 85.0919 17.4919 84.1766 17.4919C83.2596 17.4919 82.4239 17.7074 81.6824 18.1483L81.6823 18.1482L81.6734 18.1538C80.9702 18.5923 80.4058 19.1981 79.9802 19.9576L79.9802 19.9576L79.9767 19.9639C79.5742 20.7071 79.3791 21.5425 79.3791 22.4575C79.3791 23.3996 79.573 24.2619 79.9724 25.0329L79.9723 25.0329L79.9766 25.0408C80.3781 25.783 80.9497 26.375 81.6822 26.8112L81.6822 26.8112C82.4209 27.2509 83.2412 27.4681 84.132 27.4681C85.5351 27.4681 86.7024 27.0028 87.5855 26.0475C88.49 25.1001 88.9294 23.889 88.9294 22.4575C88.9294 21.5154 88.7352 20.6644 88.333 19.9192Z" fill="white" stroke="white" class="svg-elem-4"></path>
							<path id="t" d="M103.679 17.9418V17.4418H103.179H98.86V11.9024H103.179H103.679V11.4024V2.79242H110.444V11.4024V11.9024H110.944H115.264V17.4418H110.944H110.444V17.9418V32.9556H103.679V17.9418Z" fill="white" stroke="white" class="svg-elem-5"></path>
							<path id="a2" d="M133.507 29.0168L133.405 28.6524H133.026H125.491H125.116L125.011 29.0124L123.939 32.6898H117.605L125.059 11.7388H133.85L141.267 32.6898H134.543L133.507 29.0168ZM126.467 23.9051L126.259 24.5567H126.943H131.613H132.287L132.092 23.9119L129.816 16.3858L129.349 14.8433L128.861 16.379L126.467 23.9051Z" fill="white" stroke="white" class="svg-elem-6"></path>
							<path id="n" d="M159.845 24.859L159.61 19.2249V11.7388H165.831V32.6898H157.96L152.768 22.8143L151.124 19.3353L150.989 19.0489H150.672H150.593H150.072L150.094 19.5697L150.329 25.2038V32.6898H144.108V11.7388H151.979L157.132 21.5362L158.815 25.0936L158.95 25.3798H159.267H159.345H159.866L159.845 24.859Z" fill="white" stroke="white" class="svg-elem-7"></path>
							<path id="v" d="M181.46 27.2001L182.988 21.2932L185.975 11.7388H192.933L185.142 32.6898H176.417L168.551 11.7388H175.937L178.886 21.2545L180.453 27.2023L180.552 27.5749H180.937H180.976H181.363L181.46 27.2001Z" fill="white" stroke="white" class="svg-elem-8"></path>
							<path id="e" d="M202.928 28.3197H214.084V32.6898H195.657V11.7388H213.966V16.109H202.928H202.428V16.609V19.6272V20.1272H202.928H211.415V24.223H202.928H202.428V24.723V27.8197V28.3197H202.928Z" fill="white" stroke="white" class="svg-elem-9"></path>
							<path id="s" d="M216.423 30.3495L218.911 26.1869C219.872 26.9475 220.899 27.5203 221.992 27.9002L221.992 27.9003L222.005 27.9043C223.291 28.3144 224.717 28.5158 226.277 28.5158C226.897 28.5158 227.43 28.4758 227.867 28.3886L227.882 28.3855L227.897 28.3814C228.331 28.266 228.714 28.0916 228.985 27.8208C229.275 27.5315 229.446 27.1735 229.446 26.7615C229.446 26.3409 229.286 25.9677 228.947 25.7067C228.666 25.4658 228.298 25.3 227.878 25.1861C227.473 25.0437 227.01 24.9479 226.496 24.8933L223.208 24.4242L223.207 24.424C221.758 24.2209 220.531 23.8683 219.517 23.3754C218.543 22.8632 217.803 22.2027 217.281 21.3983C216.791 20.6042 216.534 19.6295 216.534 18.4515C216.534 16.9813 216.937 15.7457 217.726 14.7187C218.523 13.6808 219.658 12.8682 221.158 12.2939C222.657 11.7198 224.452 11.4254 226.552 11.4254C228.098 11.4254 229.438 11.5414 230.575 11.7685L230.575 11.7687L230.587 11.7708C231.752 11.9731 232.822 12.3007 233.799 12.7514C234.654 13.1455 235.482 13.6257 236.283 14.1926L233.717 18.3449C233.005 17.8105 232.331 17.372 231.697 17.0325C230.952 16.6194 230.175 16.3278 229.369 16.1604C228.565 15.9674 227.651 15.874 226.631 15.874C225.676 15.874 224.873 16.0339 224.304 16.4339C223.784 16.7917 223.462 17.2843 223.462 17.9027C223.462 18.3734 223.69 18.7537 224.068 19.018L224.091 19.034L224.115 19.0473C224.458 19.2344 224.887 19.378 225.384 19.4884L225.397 19.4913L225.41 19.4935C225.873 19.5705 226.415 19.6736 227.039 19.8034L227.049 19.8054L227.059 19.807L230.355 20.3558L230.355 20.3559L230.361 20.3568C231.682 20.5598 232.777 20.899 233.658 21.3633L233.665 21.3671L233.672 21.3707C234.566 21.8051 235.222 22.3847 235.663 23.1032L235.668 23.1113L235.673 23.1193C236.129 23.8028 236.374 24.6799 236.374 25.7815C236.374 27.2505 235.972 28.5162 235.177 29.5993C234.378 30.6627 233.242 31.4997 231.743 32.0985C230.246 32.6967 228.454 33.0036 226.356 33.0036C224.138 33.0036 222.222 32.7847 220.601 32.3549C219.127 31.9405 217.735 31.2732 216.423 30.3495Z" fill="white" stroke="white" class="svg-elem-10"></path>
							<path id="i" d="M248.5 4.76166V8.42625H238.354V4.76166H248.5ZM246.891 11.7389V32.69H239.963V11.7389H246.891Z" fill="white" stroke="white" class="svg-elem-11"></path>
							<path id="dot2" d="M230.349 41.6915C230.349 43.6123 228.796 45.1675 226.882 45.1675C224.968 45.1675 223.415 43.6123 223.415 41.6915C223.415 39.7708 224.968 38.2156 226.882 38.2156C228.796 38.2156 230.349 39.7708 230.349 41.6915Z" fill="#FE4A49" stroke="#FE4A49" class="svg-elem-12"></path>
							<path id="dot1" d="M34.9047 41.6915C34.9047 43.6123 33.3514 45.1675 31.4375 45.1675C29.5236 45.1675 27.9702 43.6123 27.9702 41.6915C27.9702 39.7708 29.5236 38.2156 31.4375 38.2156C33.3514 38.2156 34.9047 39.7708 34.9047 41.6915Z" fill="#FE4A49" stroke="#FE4A49" class="svg-elem-13"></path>
							</g>
							<defs>
							<clipPath id="clip0_203_39">
							<rect width="249" height="46" fill="white" class="svg-elem-14"></rect>
							</clipPath>
							</defs>
						</svg>
					</div>
				</a>
     </div>
  </div>
  <div class="navbar">
      <div class="menuitems"><a href="/anveshi/about">About</a></div>
			<div class="menuitems opener" on:mouseenter={showAreas} on:mouseleave={hideAreas}><p>Chapters</p>
				{#if isAreas}
				<div class="second-row">
					<div class="rowitems"><a href="/anveshi/chapter/odisha">Odisha</a></div>
					<div class="rowitems"><a href="/anveshi/chapter/chamba">Chamba</a></div>
					<div class="rowitems"><a href="/anveshi/chapter/karnataka">Karnataka</a></div>
				</div>
				{/if}
			</div>
			<div class="menuitems"><a href="/anveshi/faq">FAQs</a></div>
			<div class="menuitems"><a href="/anveshi/guide">Tour Lead</a></div>
			<div class="menuitems"><a href="/anveshi/diaries">Travelogues</a></div>
			<div class="menuitems opener" on:mouseenter={showOther} on:mouseleave={hideOther}><p>Other</p>
				{#if isOther}
				<div class="second-row">
					<div class="rowitems"><a href="/dhiti">Dhīti</a></div>
					<div class="rowitems"><a href="/openlibrary">Open Library</a></div>
					<div class="rowitems"><a href="/drashta">Draṣṭā</a></div>
					<div class="rowitems"><a href="/mrdanga">Mṛdaṅga</a></div>
					<div class="rowitems"><a href="/mandala">Maṇḍala</a></div>
					<div class="rowitems"><a href="/aryavarta">Āryavarta</a></div>
					<div class="rowitems"><a href="/rta">Ṛta</a></div>
					<div class="rowitems"><a href="/about">About</a></div>
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
				<div class="fslinks drashtafs"><a href="/anveshi/about">About</a></div>
				<div class="fslinks drashtafs"><p>Chapters</p>
					<div class="nowitems"><a href="/anveshi/chapter/odisha">Odisha</a></div>
					<div class="nowitems"><a href="/anveshi/chapter/chamba">Chamba</a></div>
					<div class="nowitems"><a href="/anveshi/chapter/karnataka">Karnataka</a></div>
				</div>
				<div class="fslinks drashtafs"><a href="/anveshi/faq">FAQs</a>
				</div>
				<div class="fslinks drashtafs"><a href="/anveshi/guide">Tour Lead</a>
				</div>
				<div class="fslinks drashtafs"><a href="/anveshi/diaries">Travelogues</a>
				</div>
			</div>
			<div class="fullscreencol" id="columnright">
				<div class="rowitems"><a href="/dhiti">Dhīti</a></div>
				<div class="rowitems"><a href="/openlibrary">Open Library</a></div>
				<div class="rowitems"><a href="/drashta">Draṣṭā</a></div>
				<div class="rowitems"><a href="/mrdanga">Mṛdaṅga</a></div>
				<div class="rowitems"><a href="/mandala">Maṇḍala</a></div>
				<div class="rowitems"><a href="/aryavarta">Āryavarta</a></div>
				<div class="rowitems"><a href="/rta">Ṛta</a></div>
				<div class="rowitems"><a href="/about">About</a></div>
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


.logo-svg-box { 
	transition: all 0.16s var(--cube2);
	transform-origin: center left;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
}

.logo-svg-box:hover { transform: scale(0.9);}

.nowitems { height: 20px;}

.closebuttonstrip img {
	object-fit: contain;
	height: 40px;
	width: 40px;
}

.drashtafs p { color: white; font-weight: 500;}

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

.logotype { display: flex; flex-direction: row;}
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
	.logotype { height: 56px; width: 200px; margin-left: 8px; align-items: flex-end; }
	.logo-svg-box svg { padding-bottom: 4px; margin-left: -16px; object-fit: contain; width: 200px;}
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
	.logotype { height: 56px; width: 200px; margin-left: 8px; align-items: center; }
	.logo-svg-box svg { margin-bottom: -6px; object-fit: contain; width: 200px;}
	.logoarea { width: 25%; }
 	.headerbox { 
		padding: 0 16px; 
		height: 72px; 
		margin-top: 8px;
		margin-right: 8px;
		margin-left: 8px;
		width: calc(100% - 16px);
	}

	.navbar {
		gap: 24px;	
		width: 75%;
	}

	.mobilemenu, .fullscreener {
		display: none;
	}

}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.logotype { height: 56px; width: 200px; align-items: center; }
	.logo-svg-box svg { margin-bottom: -6px; object-fit: contain; width: 200px;}
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
	.logotype { height: 56px; width: 200px; align-items: center; }
	.logo-svg-box svg { margin-bottom: -2px; object-fit: contain; width: 200px;}
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
	height: 32px;
	width: 32px;
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