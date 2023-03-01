<script>
import '$lib/styles/reader.sass'
let isShow = false

function toggleShow(){
	isShow = !isShow
}
</script>

<div class="box-r h100 w100vw wrap gap3">
	<div class="box-c wd3 b1 h100p"></div>
	<div class="box-c wd3 b2 h100p"></div>
	<div class="box-c wd3 b3 h100p"></div>
</div>
<div class="box-r h100 wrap gap4 m-large">
	<div class="box-c wd4 b1 h100p"></div>
	<div class="box-c wd4 b2 h100p"></div>
	<div class="box-c wd4 b3 h100p"></div>
	<div class="box-c wd4 b4 h100p"></div>
</div>
<div class="box-r wrap h100">
	<div class="h100f c-sidebar m-sm-l">
		<div class="box-c menutwo" on:click={toggleShow} on:keydown={toggleShow}>
			<svg width="100%" height="100%" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.767578 0.37207H8.76758V8.37207H0.767578V0.37207Z" fill="#FE4A49"/>
				<path d="M0.767578 12.3721H8.76758V20.3721H0.767578V12.3721Z" fill="#FE4A49"/>
				<path d="M8.76758 24.3721H0.767578V32.3721H8.76758V24.3721Z" fill="#FE4A49"/>
				<path d="M12.7676 0.37207H20.7676V8.37207H12.7676V0.37207Z" fill="#FE4A49"/>
				<path d="M20.7676 12.3721H12.7676V20.3721H20.7676V12.3721Z" fill="#FE4A49"/>
				<path d="M12.7676 24.3721H20.7676V32.3721H12.7676V24.3721Z" fill="#FE4A49"/>
				<path d="M32.7676 0.37207H24.7676V8.37207H32.7676V0.37207Z" fill="#FE4A49"/>
				<path d="M24.7676 12.3721H32.7676V20.3721H24.7676V12.3721Z" fill="#FE4A49"/>
				<path d="M32.7676 24.3721H24.7676V32.3721H32.7676V24.3721Z" fill="#FE4A49"/>
			</svg>
		</div>
		{#if isShow}
			<div class="sidebar-draw">
				<div class="box-r closestrip" on:click={toggleShow} on:keydown={toggleShow}>
					<img src="/images/icons/hamburger-close.png" alt="closer" />
				</div>
			</div>
		{/if}
	</div>
	<div class="box-r gap3 wrap bdr r-mainbar m-sm-r">
		<div class="box-c wd3 b1 h100p"></div>
		<div class="box-c wd3 b2 h100p"></div>
		<div class="box-c wd3 b3 h100p"></div>
	</div>
</div>
<div class="box-r h100 wrap gap5 m-large">
	<div class="box-c wd5 b1 h100p"></div>
	<div class="box-c wd5 b2 h100p"></div>
	<div class="box-c wd5 b3 h100p"></div>
	<div class="box-c wd5 b4 h100p"></div>
	<div class="box-c wd5 b5 h100p"></div>
</div>

<style>
.b1 { background: #0B6E4F;}
.b2 { background: #FF9F1C;}
.b3 { background: #FE5F55;}
.b4 { background: #1E91D6;}
.b5 { background: #4BF41D;}


</style>