<div class="r-r-r-r imagebanner">
	<div class="c-c-c-c colimage" style="background-image: var(--banner)">
		<slot name="image"></slot>
	</div>
	<div class="c-c-c-c colthree">
		<slot name="col1"></slot>
	</div>
	<div class="c-c-c-c colthree">
		<slot name="col2"></slot>
	</div>
</div>

<style>

.colimage {
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: var(--banner);
}

.imagebanner { height: 30vh;}

@media screen and (min-width: 900px) {
	.colimage { width: calc(40% - 24px);}
	.colthree { width: calc(30% - 12px);}
	.imagebanner { width: 100%; gap: 24px;}
}

</style>