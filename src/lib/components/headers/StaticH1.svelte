<script lang="ts">
import { reveal } from 'svelte-reveal'
</script>

<div class="flexbox-c big lay" style="background: var(--boxback); min-height: var(--contheight)">
	<div class="flexbox-c head" use:reveal={{ transition: "fly", duration: 200, y: 48 }}>
		<h2 class="w600 m-bot-zero">
			<slot name="header"></slot>
		</h2>
	</div>
	<div class="flexbox-c m-top-zero-desk">
		<slot name="body"></slot>
	</div>
</div>

<style>

.big { z-index: 2;}

.big h2 {
	background: white;
	margin-top: 0;
	margin-bottom: 0;
}

@media screen and (min-width: 900px) {
	.big {
		width: 100vw;
		height: 100%;
	}
	.head { height: max-content; width: 100%;background: var(--beau)}

	.big h2 {
		padding: 8px 80px 8px 96px;
		margin-bottom: 0;
		margin-top: 0;
		color: #272727;
		margin-left: 48px;
		padding-bottom: 32px;
	}
	.lay { padding-top: 64px; padding-bottom: 48px;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {

	.big { padding-top: 64px;}

	.big h2 {
		letter-spacing: -1px;
		padding: 8px 40px 0 40px;
		margin-bottom: 0;
		margin-top: 0;
		color: #272727;
	}

}

@media screen and (max-width: 767px) {

	.big { padding-top: 32px;}
	.big h2 {
		padding: 8px 8px 2px 32px;
		margin-left: 0;
	}
}
</style>