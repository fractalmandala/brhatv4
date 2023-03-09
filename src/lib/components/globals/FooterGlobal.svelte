<div class="footer">
  <div class="totop">
		<div class="to-top">
			<button on:click={() => {
    		window.scrollTo(0, 0);
			}}>
			</button>
		</div>
	</div>
  <div class="bottomstrip">
		<small>2023 All Rights Reserved | <span><a href="/about/docs/privacy">Privacy</a></span><br>
		<span class="white">Write to us: contact@brhat.in</span></small>
	</div>
  <div class="mainbox">
    <div class="logoarea">
			<a href="/"><img id="logoimage" src="/images/brhatlogos/horizontalwhite.png" alt="brhatlogo" /></a>
			<div class="boxr" id="icons-row">
				<div class="boxc icon-box" id="icon-twitter">
					<a href="https://twitter.com/brhat_in" target="_blank" rel="noreferrer"><img class="socialicon" src="/images/icons/twitter-red.png" alt="twitter icon" /></a>
				</div>
				<div class="boxc icon-box" id="icon-facebook">
					<a href="https://www.facebook.com/brhat.in" target="_blank" rel="noreferrer"><img class="socialicon" src="/images/icons/facebook-red.png" alt="facebook icon" /></a>
				</div>
				<div class="boxc icon-box" id="icon-youtube">
					<a href="https://www.youtube.com/@brhat" target="_blank" rel="noreferrer"><img class="socialicon" src="/images/icons/youtube-red.png" alt="youtube icon" /></a>
				</div>
				<div class="boxc icon-box" id="icon-linkedin">
					<a href="https://www.linkedin.com/company/brhat" target="_blank" rel="noreferrer"><img class="socialicon" src="/images/icons/linkedin-red.png" alt="linkedin icon" /></a>
				</div>
				<div class="boxc icon-box" id="icon-instagram">
					<a href="https://www.instagram.com/brhat_in/" target="_blank" rel="noreferrer"><img class="socialicon" src="/images/icons/instagram-red.png" alt="instagram icon" /></a>
				</div>
			</div>
		</div>
    <div class="linksarea">
      <div class="link linkbox1">
				<h6><a href="/dhiti">Dhīti</a></h6>
				<h6><a href="/mrdanga">Bṛhadmṛdaṅga</a></h6>
				<h6><a href="/members/contact">Contact</a></h6>
			</div>
      <div class="link linkbox2">
				<h6><a href="/about">About</a></h6>
				<p><a href="/about/docs/svatahsiddha">Svataḥsiddha</a></p>
				<p><a href="/about/docs/anatomy">Civilizational Moment</a></p>
				<p><a href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a></p>
				<p><a href="/about/docs/namelogo">Nāmarūpa</a></p>
				<p><a href="/about/docs/values">Pratijñā</a></p>
				<p><a href="/about/#advisors">Advisors</a></p>
				<p><a href="/about/#partners">Partners</a></p>
				<p><a href="/about/#team">Team</a></p>
			</div>
      <div class="link linkbox3">
				<h6><a href="/drashta">Bṛhat Draṣṭā</a></h6>
				<p><a href="/drashta/course/valmikiramayana">Vālmīki Rāmāyaṇa</a></p>
				<p><a href="/drashta/course/hinduiconography">Hindu Iconography</a></p>
				<p><a href="/drashta/course/shriramswarup">Shri Ram Swarup</a></p>
				<p><a href="/drashta/course/sitaramgoel">Sita Ram Goel</a></p>
			</div>
      <div class="link linkbox4">
				<h6><a href="/anveshi">Bṛhat Anveṣī</a></h6>
					<p><a href="/anveshi/chapter/chamba">Chamba</a></p>
					<p><a href="/anveshi/chapter/odisha">Odisha</a></p>
					<p><a href="/anveshi/chapter/karnataka">Karnataka</a></p>
					<p><a href="/anveshi/#faqs">FAQs</a></p>
				</div>
      <div class="link linkbox5">

								<h6><a href="/aryavarta">Scrolls of Āryavarta</a></h6>
				<p><a href="/aryavarta/chapter/01">Chapter 1</a></p>
				<p><a href="/aryavarta/chapter/02">Chapter 2</a></p>
				<p><a href="/aryavarta/chapter/03">Chapter 3</a></p>
			</div>
      <div class="link linkbox6">
				<h6><a href="/rta">Ṛta in Design</a></h6>
				<p><a href="/rta/intro">Introduction</a></p>
				<p><a href="/rta/dharmaisdesign">Dharma is Design</a></p>
				<p><a href="/rta/framework">Framework</a></p>
				<p><a href="/rta/principles">Principles and Phases</a></p>
				<p><a href="/rta/tools">Tools and Resources</a></p>
			</div>
      <div class="link linkbox7">
				<h6><a href="/openlibrary">Bṛhat Open Library</a></h6>
				<p><a href="/openlibrary/reader">Repository of Scripture</a></p>
				<p><a href="/openlibrary/specials/aryanissue">The Āryan Issue</a></p>
				<p><a href="/openlibrary/specials/iks">Indian Knowledge Systems</a></p>
			</div>
      <div class="link linkbox8">
				<h6><a href="/mandala">Fractal Maṇḍala</a></h6>
				<p><a href="/mandala/fractalmandala">The Macrohistoric Case</a></p>
				<p><a href="/mandala/aphorisms">Caturasūtra</a></p>
				<p><a href="/mandala/rathaasabija">Ratha as a Bīja</a></p>
				<p><a href="/mandala/synaptic">Synaptic Reconnection</a></p>
			</div>
    </div>
  </div>
</div>

<style>

.footer
	{ 
		display: grid;
  	grid-template-columns: 1fr;
  	grid-template-rows: 64px auto 128px;
  	gap: 0px 0px;
  	grid-auto-flow: row;
  	grid-template-areas:
    	"totop"
    	"mainbox"
    	"bottomstrip";
	}

.totop { grid-area: totop; height: 64px; }

.bottomstrip { grid-area: bottomstrip; height: 128px; display: inline-grid; align-items: center; }
.bottomstrip small {
	font-size: 10px;
	color: white;
}

.bottomstrip a { color: #fe4a49;}

.mainbox {  
	display: grid;
	grid-auto-flow: row;
  grid-area: mainbox;
	height: 100%;
}

.logoarea { 
	grid-area: logoarea;
	height: min-content;
	gap: 0 0;
 }
.icon-box img { height: 24px; width: 24px;}

.linksarea { 
	display: grid;
  grid-auto-flow: row;
  grid-area: linksarea;
}

.linkbox1 { grid-area: linkbox1; }

.linkbox2 { grid-area: linkbox2; }

.linkbox3 { grid-area: linkbox3; }

.linkbox4 { grid-area: linkbox4; }

.linkbox5 { grid-area: linkbox5; }

.linkbox6 { grid-area: linkbox6; }

.linkbox7 { grid-area: linkbox7; }

.linkbox8 { grid-area: linkbox8; }

.to-top { display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 12px; text-transform: uppercase; font-weight: bold; color: #878787;}
button { transition: all 0.14s var(--cube2); transform-origin: center center; background-image: url('/images/icons/go-up-grey.png'); background-position: center center; background-size: contain; background-repeat: no-repeat; border: none; background-color: transparent;}
button:hover { background-image: url('/images/icons/go-up-red.png'); transform: scale(0.9);}

.link h6 { margin: 0; color: white; font-weight: 400; font-size: 1.04rem;}
.link p { margin: 0 ; color: #878787; font-weight: 400; font-size: 14px;}


#icons-row img { 
	filter: saturate(0.01);
	opacity: 0.4;
	transition: all 0.17s var(--cubec)
}

#icons-row img:hover {
	filter: saturate(1);
	opacity: 1;
	transform: scale(1.2)
}
	


@media screen and (min-width: 900px) {
	.footer { height: max-content;}

	#logoimage { width: 200px;}
	#icons-row { margin: 16px 0 32px 0; gap: 24px;}
	button { width: 24px; height: 64px; }
	.to-top { margin: 0; height: 64px; }
	.footer { min-height: 100vh; background: var(--beau); padding: 0 128px;}
	.mainbox {
		grid-template-columns: 300px 1fr;
  	grid-template-rows: auto;
  	gap: 0px 0px;
  	grid-template-areas:
    	"logoarea linksarea";
		border-top: 1px solid #414141;
		border-bottom: 1px solid #414141;
		padding: 64px 0 32px 0;
		height: 100%;
		
	}
	.linksarea {
		grid-template-columns: 1fr 1fr 1fr 1fr;
  	grid-template-rows: auto auto;
  	gap: 0px 32px;
 		grid-template-areas:
    	"linkbox1 linkbox2 linkbox3 linkbox4"
    	"linkbox5 linkbox6 linkbox7 linkbox8";
	}
	.logoarea {
		width: 300px
	}

	.link p { padding-bottom: 8px;}
	.link h6 { padding-bottom: 12px;}
	.link{ padding-bottom: 24px;}

}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.footer { min-height: 100vh; background: var(--beau); padding: 0 64px;}

	#logoimage { margin-top: 32px; width: 200px;}
	#icons-row { margin: 16px 0 32px 0; gap: 24px;}
	.mainbox {
		grid-template-columns: 1fr;
  	grid-template-rows: auto auto;
  	gap: 0px 0px;
  	grid-template-areas:
    	"logoarea"
			"linksarea";
		border-top: 1px solid #414141;
		border-bottom: 1px solid #414141;
	}
	.linksarea {
		grid-template-columns: 1fr 1fr 1fr;
  	grid-template-rows: auto auto auto auto;
  	gap: 0px 24px;
 		grid-template-areas:
    	"linkbox1 linkbox2 linkbox3"
			"linkbox4 linkbox5 linkbox6"
			"linkbox7 linkbox8 linkbox8";
		}

	.link p { padding-bottom: 8px;}
	.link h6 { padding-bottom: 12px;}
	.link{ padding-bottom: 24px;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	
	.footer { min-height: 100vh; background: var(--beau); padding: 0 64px;}
	#logoimage {margin-top: 32px; width: 200px;}

	#icons-row { margin: 16px 0 32px 0; gap: 24px;}
	
	.mainbox {
		grid-template-columns: 1fr;
  	grid-template-rows: auto 1fr;
  	gap: 0px 0px;
  	grid-template-areas:
    	"logoarea"
			"linksarea";
		border-top: 1px solid #414141;
		border-bottom: 1px solid #414141;
	}
	.linksarea {
		grid-template-columns: 1fr 1fr;
  	grid-template-rows: 1fr 1fr 1fr 1fr;
  	gap: 0px 0px;
 		grid-template-areas:
    	"linkbox1 linkbox2"
			"linkbox3 linkbox4"
    	"linkbox5 linkbox6"
			"linkbox7 linkbox8";
	}
button { width: 24px; height: 64px;}
	.to-top { margin: 0 0 0 0; height: 64px; display: flex; justify-content: center; align-items: center; }
	.link { padding-left: 16px;}
	.link p { padding-bottom: 8px;}
	.link h6 { padding-bottom: 12px;}
	.link{ padding-bottom: 24px;}
	
}

@media screen and (max-width: 575px) {
.footer { min-height: 100vh; background: var(--beau); padding: 0 40px;}
	#logoimage { margin-top: 32px; width: 200px;}
	#icons-row { margin: 16px 0 32px 0; gap: 24px;}
	.mainbox {
		grid-template-columns: 1fr;
  	grid-template-rows: auto 1fr;
  	gap: 0px 0px;
  	grid-template-areas:
    	"logoarea"
			"linksarea";
		border-top: 1px solid #414141;
		border-bottom: 1px solid #414141;
	}
	.linksarea {
		grid-template-columns: 1fr 1fr;
  	grid-template-rows: auto auto auto auto;
  	gap: 0px 32px;
 		grid-template-areas:
    	"linkbox1 linkbox2"
			"linkbox3 linkbox4"
    	"linkbox5 linkbox6"
			"linkbox7 linkbox8";
	}
button { width: 24px; height: 64px;}
	.to-top { margin: 0 0 0 0; height: 64px; display: flex; justify-content: center; align-items: center; }
	.link p { padding-bottom: 8px;}
	.link h6 { padding-bottom: 12px;}
	.link{ padding-bottom: 24px;}
}

</style>