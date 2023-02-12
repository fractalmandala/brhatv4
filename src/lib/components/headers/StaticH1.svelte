<div class="c-c-c-c big" data-scroll-section>
	<div class="c-c-c-c head">
		<h3 class="bigger3" data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">
		<slot name="header"></slot>
		</h3>
	</div>
	<div class="c-c-c-c small">
		<slot name="body"></slot>
	</div>
</div>

<style>
.c-c-c-c { width: 100vw; z-index: 600;}
.small { background: white;}
.big h3 {
	background: white;
	margin-left: 4vw;
	color: #474747;
	font-weight: bold;
	margin-top: 0;
	margin-bottom: 0;
}

@media screen and (min-width: 900px) {
	.big {
		width: 100vw;
		min-height: 100vh;
	}
	.head { height: max-content; width: 100%;background: var(--beau)}
	.small { height: 85%; width: 100%; padding-top: 2em; padding-bottom: 2em;}
	.big h3 {
		letter-spacing: -2px;
		padding: 8px 8px 8px 24px;
		margin-bottom: 0;
		margin-top: 0;
		color: #272727;
	}
}

@media screen and (max-width: 899px) and (min-width: 768px) {

	.big h3 {
		letter-spacing: -2px;
		padding: 8px 8px 8px 24px;
		margin-bottom: 0;
		color: #272727;
	}

}

@media screen and (max-width: 767px) {
	.big h3 {
		letter-spacing: -2px;
		padding: 8px 8px 8px 24px;
		margin-bottom: 0;
		color: #272727;
	}
}
</style>