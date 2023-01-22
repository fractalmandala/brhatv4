<div class="footer">
 <div class="footerbox">
	<div class="area1">
	<a href="/"><img class="footerlogo" src="/images/brhatlogos/verticalwhite.png" alt="brhat horizontal"/></a>
  <div class="flexrow">
   <div class="col">
     <ul><a class="heading" href="/about">About</a>
       <li><a href="/about/#anatomy">Civilization Moment</a></li>
       <li><a href="/about/#namelogo">Name and Logo</a></li>
       <li><a href="/about/#values">Values</a></li>
       <li><a href="/about/#board">Advisory Board</a></li>
       <li><a href="/about/#partners">Partner Brands</a></li>
       <li><a href="/about/#team">Team</a></li>
     </ul>
   </div>
   <div class="col">
     <ul><a class="heading" href="/drashta">Bṛhat Draṣṭā</a>
       <li><a href="/drashta/courses/shriramswarup">Shri Ram Swarup</a></li>
       <li><a href="/drashta/courses/sitaramgoel">Sita Ram Goel</a></li>
       <li><a href="/drashta/courses/hinduiconography">Hindu Iconography</a></li>
       <li><a href="/drashta/#drashtas">Draṣṭās</a></li>
       <li><a href="/drashta/#firekeepers">Firekeepers of Civilization</a></li>
       <li><a href="/drashta/#darshanas">Schools of Thought</a></li>
     </ul>
   </div>
   <div class="col">
     <ul><a class="heading" href="/anveshi">Bṛhatanveṣī</a>
       <li><a href="/anveshi/chapters/odisha">Odisha</a></li>
       <li><a href="/anveshi/chapters/chamba">Chamba</a></li>
       <li><a href="/anveshi/chapters/karnataka">Karnataka</a></li>
       <li><a href="/anveshi/diaries">Diaries</a></li>
       <li><a href="/anveshi/gallery">Gallery</a></li>
     </ul>
   </div>
  </div>
	</div>
	<div class="colcol big">
		<div class="colcol small">
      <small>© 2023 All Rights Reserved.</small>
      <small>contact@brhat.in</small>
      <div class="innerrow">
      <small><a href="/docs">Site Documentation</a></small>
      <small><a href="/corporate/privacy">Privacy Policy</a></small>
    </div>
  	</div>
  		<div class="socialicons">
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/socialicons/122-twitter.png" alt="twitter"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/socialicons/124-fb.png" alt="facebook"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/socialicons/123-linked.png" alt="linkedin"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/socialicons/121-insta.png" alt="instagram"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/socialicons/125-ytube.png" alt="youtube"/></a>
  	</div>
	</div>
</div>
</div>

<style>
	.area1 {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
}

 .footer { 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
		z-index: 600;
		/*
    background-image: url('/images/redgradientfooter.webp');
		*/
  }
  .footerbox {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 100%;
    background: linear-gradient(40deg,#272727,#1B2023);
		z-index: 600;
		border-radius: 4px;

  }

	.colcol {
	width: 100%;
	background-color: white;
	justify-self: flex-end;
}

	.big small, .small small {
	line-height: 1.25rem;
	color: var(--mute);
}

	.innerrow {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
		gap: 1rem;
		color: var(--mute);
}

	.colcol.big {
	width: 100%;
	background-color: white;
	justify-self: flex-end;
	border-top: 1px solid var(--red);
}


  .socialicons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
		background-color: white;
		border-top: 1px solid var(--light);
  }

  .socialicons img {
    object-fit: contain;
    width: 32px;
    height: 32px;
    transform-origin: center center;
    transition: var(--quik);
  }

  .socialicons img:hover {
    transform: scale(1.2);
  }

  .footerlogo {
    object-fit: contain;
    margin-bottom: 2em;
    margin-top: 2em;
    transform-origin: center center;
    transition: var(--quik);
  }


	.flexrow {
	display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
align-items: flex-start;
flex-wrap: wrap;
border-radius: 4px;
}

  .footerlogo:hover {
    transform: scale(0.9);
  }


  .heading {
    color: white;
    font-size: 14px;
    font-weight: 500;
  }

	.col {
	display: flex;
flex-direction: column;
height: 100%;
}

	.col ul li a { color: var(--gmid);}

  .col ul li {
    list-style-type: none;
    color: white;
    padding-top: 0.5rem;
		margin: 4px 0;
		padding: 0;
    transform-origin: left center;
    transition: var(--quik);
  }

	.col ul {
	margin: 4px 0;
		padding:0;
    list-style-type: none;
}

  .col ul li:hover {
    transform: scale(0.9);
  }

  .col ul a:hover {
    color: var(--red);
    transform: scale(1.1);
  }
  
  .col ul a {
    transform-origin: left center;
    transition: var(--quik);
  }
/*
  .form { 
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 420px;
    padding: 2em;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #272727;
    z-index: 500;
    border-radius: 8px;
    border: 1px solid var(--red);
  }

  .closebutton {
    background-image: url('/images/socialicons/menu-close-trans.png');
    background-color: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center right;
    width: 32px;
    height: 32px;
    border: none;
  }

  .closearea {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
  }
*/


	@media screen and (min-width: 900px) {

	.footerlogo {
	    width: 128px;
}

	.footer {
	height: 640px;
	margin: 0 8px 8px 8px;
	width: calc(100% - 16px);
	border-radius: 4px;
}

	.col {
	width: calc(100%/4);
	padding-bottom: 0.48rem;
align-items: center;
text-align: center;	
		}

	.footerbox {
	padding-top: 1rem;
	padding-bottom: 1rem;
}

.flexrow {
gap: 1rem;
}

	.colcol {
	padding: 1rem;
	color: #272727;
	align-items: center;
	justify-content: center;
}

		.big{ padding: 1rem 0 1.6rem 0 ;}
		.socialicons { padding-top: 1rem;}


	.big small, .small small {
	font-size: 12px;}

.col ul li { font-size: 14px; }

}



  @media screen and (max-width: 899px) and (min-width: 768px) {

		.footer {
	height: 640px;
}

	.big small, .small small {
	font-size: 12px;
}
.col ul li { font-size: 14px; }

	.footerlogo {
	    width: 128px;
}


		.col {
	width: calc(100%/4);
	padding-bottom: 0.48rem;
		}

	.colcol {
	padding: 1rem;
	color: #272727;
	align-items: center;
	justify-content: center;
}

		.big{ padding: 1rem 0 1.6rem 0 ;}
		.socialicons { padding-top: 1rem;}

  }


@media screen and (max-width: 767px ) and (min-width: 576px ) {

			.footer {
	height: 100%;
}

	.big small, .small small {
	font-size: 12px;
}
.col ul li { font-size: 14px; }

	.footerlogo {
	    width: 112px;
}

		.col {
	width: 30%;
	padding-bottom: 0.48rem;
		}

	.colcol {
	padding: 1rem;
	color: #272727;
	align-items: center;
	justify-content: center;
}

		.big{ padding: 1rem 0 1.6rem 0 ;}
		.socialicons { padding-top: 1rem;}

.flexrow {
padding: 0 24px 32px 24px;
width: 100%;
justify-content: center;
gap: 20px;
}


  }

	@media screen and (max-width: 575px ) {
			.footer {
	height: 100%;
}

	.footerlogo {
	    width: 96px;
}

	.big small, .small small {
	font-size: 12px;
}

.col ul li, .col ul { font-size: 12px; text-align: left; }

		.col {
	width: 45%;
	padding-bottom: 0.48rem;
align-items: flex-start;
text-align: left;	
		}

	.colcol {
	padding: 1rem;
	color: #272727;
	align-items: center;
	justify-content: center;
}

		.big{ padding: 1rem 0 1.6rem 0 ;}
		.socialicons { padding-top: 1rem;}

	

.flexrow {
padding: 0 24px 8px 24px;
width: 100%;
justify-content: center;
gap: 32px;
}

	}
</style>