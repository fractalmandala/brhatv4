<script>
import { reveal } from 'svelte-reveal'
</script>

<div class="c-c-c-c big lay" style="background: var(--boxback)">
	<div class="c-c-c-c head" use:reveal={{ transition: "blur" }}>
		<h4>
		<slot name="header"></slot>
		</h4>
	</div>
	<div class="c-c-c-c small">
		<slot name="body"></slot>
	</div>
</div>

<style>
.c-c-c-c { width: 100vw; z-index: 600;}
.big { z-index: 2;}
.small { background: white;}
.big h4 {
	background: white;
	letter-spacing: -3px;
	color: #474747;
	font-weight: 800;
	margin-top: 0;
	margin-bottom: 0;
}

@media screen and (min-width: 900px) {
	.big {
		width: 100vw;
		height: 100%;
		padding-bottom: 80px;
	}
	.head { height: max-content; width: 100%;background: var(--beau)}
	.small { height: 85%; width: 100%; padding-top: 2em; padding-bottom: 2em;}
	.big h4 {
		padding: 8px 8px 8px 2vw;
		margin-bottom: 0;
		margin-top: 0;
		color: #272727;
		margin-left: 4vw;
	}
}

@media screen and (max-width: 899px) and (min-width: 768px) {

	.big { padding-top: 64px;}

	.big h4 {
		letter-spacing: -1px;
		padding: 8px 8px 8px 24px;
		margin-bottom: 0;
		color: #272727;
	}

}

@media screen and (max-width: 767px) {
	.big h4 {
		letter-spacing: -1px;
		padding: 8px 8px 8px 2vw;
		margin-bottom: 0;
		color: #272727;
		margin-bottom: 12px;
		margin-top: 32px;
		margin-left: 4vw;
	}

	.big { padding-top: 32px;}
}
</style>