<div class="standardtwo">
	<div class="col col-left">
	<slot name="col-left"></slot>
	</div>
	<div class="col col-mid">
	<slot name="col-mid"></slot>
	</div>
	<div class="col col-right">
	<slot name="col-right"></slot>
	</div>
</div>


<style>

.standardtwo {
	display: flex;
	flex-direction: row;
	width: 100vw;
}


@media screen and (min-width: 900px) {
	.col { width: calc(33.33% - 22px); height: 100%;}
	.standardtwo { gap: 32px;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.col { width: 100%; height: 100%}
	.standardtwo { flex-wrap: wrap;}
}

@media screen and (max-width: 767px) {
	.standardtwo { flex-wrap: wrap;}
	.col { width: 100%; }
}
</style>