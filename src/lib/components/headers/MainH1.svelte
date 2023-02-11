<div class="c-c-c-c" data-scroll-section>
<h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">
<slot></slot>
</h1>
</div>

<style>
.c-c-c-c { background: var(--beau); width: 100vw; padding-left: 5vw; z-index: 600;}
.c-c-c-c h1 {
	background: white;
	color: #474747;
}


@media screen and (min-width: 900px) {
	.c-c-c-c h1 {
		font-size: 96px;
		letter-spacing: -2px;
		padding: 16px 8px 16px 24px;
		margin-bottom: 0;
	}
}

@media screen and (max-width: 899px) and (min-width: 768px) {

	.c-c-c-c h1 	{
		font-size: 80px	;
		letter-spacing: -1px	;
		padding: 16px 8px 16px 24px;
		margin-bottom: 0;
	}

}

@media screen and (max-width: 767px) {
		.c-c-c-c h1 	{
		font-size: 48px	;

		padding: 16px 8px 16px 16px;
		margin-bottom: 0;
	}
}
</style>