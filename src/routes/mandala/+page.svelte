<div class="c-c-c-c sectioner a-1" data-scroll-section>
	<h4>
		To be a history in the true sense of the word, a work must be a story of the people inhabiting a country. It must be a record of their life from age to age presented through the life and achievements of men whose exploits become the beacon lights of tradition; <span class="green">through efforts of the people to will themselves into organic unity.</span>
	</h4>
	<h1>
		Such a history of India is still to be written.<br>
		<cite>Shri KM Munshi</cite>
	</h1>
</div>
<div class="r-r-c-c scrollyboard a-2" data-scroll-section>
	<div class="c-c-c-c colA">
		<h4 data-scroll data-scroll-speed="2">
			with a continuity of untold millennia, the passage of time visible to us in
		</h4>
		<h1 data-scroll data-scroll-speed="6">
			itihāsa
		</h1>
	</div>
	<div class="c-c-c-c colB">
		<img src="/images/mandala/itihaas.webp" alt="itihasa" data-scroll data-scroll-speed="3"/>
	</div>
</div>
<div class="r-r-c-c scrollyboard a-3" data-scroll-section>
	<div class="c-c-c-c colA">
		<img src="/images/mandala/bharata.webp" alt="bharata" data-scroll data-scroll-speed="3"/>
	</div>
	<div class="c-c-c-c colB">
		<h4 data-scroll data-scroll-speed="2">
			information was processed in increasingly complex ways within the physical environment best described as
		</h4>
		<h1 data-scroll data-scroll-speed="6">
			bhārata
		</h1>
	</div>
</div>
<div class="r-r-c-c scrollyboard a-2" data-scroll-section>
	<div class="c-c-c-c colA">
		<h4 data-scroll data-scroll-speed="2">
			emerged a civilizational consciousness, with multi-level coherence. It is known to us as
		</h4>
		<h1 data-scroll data-scroll-speed="6">
			dharma
		</h1>
	</div>
	<div class="c-c-c-c colB">
		<img src="/images/mandala/dharma.webp" alt="dharma" data-scroll data-scroll-speed="3"/>
	</div>
</div>
<div class="c-c-c-c a-4" data-scroll-section>
	<div class="r-r-c-c labeller" data-scroll data-scroll-speed="2">
		<em>itihāsa</em>
		<em>bhārata</em>
		<em>dharma</em>
	</div>
	<h1 data-scroll data-scroll-speed="4">And it is Alive...</h1>
	<img src="/images/mandala/rotator.png" alt="rotator" data-scroll data-scroll-speed="8"/>
	<div class="r-r-r-r buttonsbox" data-scroll data-scroll-speed="1">
		<button><a href="/aryavarta/chapter/01">Next - 4 Aphorisms of Civilizational Consciousness</a></button>
	</div>
</div>

<style>
.a-1 {
	background-image: url('/images/mandala/fractallogo.png');
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.buttonsbox button {
	background-color: #10C56D;
	border: none;
	color: white;
	padding: 0.6em 2em;
	transform-origin: center center;
	transition: all 0.14s var(--cube2);
}

button:hover {
	transform: scale(0.9);
}

button a {
	color: white;
	font-size: 15px;
	font-weight: 400;
}

.a-1 h4 { color: white;}
.a-1 h1, .a-4 h1 { color: white; font-weight: 600;}
.a-1 h1 cite { color: white; letter-spacing: 0; font-weight: 300; text-transform: uppercase;}

.sectioner, .scrollyboard, .a-4 {
	width: 100vw;
	height: 100vh;
	background: none;
}

.colA h1, .colB h1 {
	color: #10c56d;
}

.colA h4, .colB h4 {
	color: white;
}

.colA img, .colB img {
	object-fit: cover;
}

.a-4 h1 {
	font-weight: 600;
}

.a-4 {
	align-items: center;
}

@keyframes rotation {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

@media screen and (min-width: 900px) {
	.sectioner {
		padding-left: 8vw;
		padding-right: 8vw;
	}
	.colA, .colB {
		width: 50%;
		justify-content: center;
	}
	.a-2 .colA {
		text-align: right;
		padding-left: 8vw;
	}
	.a-3 .colB {
		padding-right: 8vw;
	}
	.colA img, .colB img {
		height: 80%;
		width: 88%;
	}
	.a-2 .colB {
		align-items: flex-end;
	}
	.a-4 em {
		font-weight: bold;
		text-transform: uppercase;
		font-style: normal;
		color: #10C56d;
	}
	.labeller em {
		width: 33%;
	}
	.labeller {
		justify-content: center;
		gap: 4em;
	}
	.a-4 img {
		width: 256px;
		height: 256px;
		object-fit: contain;
		transform-origin: center center;
		animation: rotation 4s ease-in infinite alternate-reverse;
	}

	.buttonsbox {
		gap: 2em;
	}

}
</style>
