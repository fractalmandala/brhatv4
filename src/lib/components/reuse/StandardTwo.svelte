<div class="standardtwo" style="background: var(--thistime)">
	<div class="col col-left">
	<slot name="col-left"></slot>
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
	.col { width: 50%; height: 100%;}
	.standardtwo { padding: 0; height: 100%;}
	.standardtwo .col { align-items: center; justify-content: center;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.col { width: calc(50% - 16px); height: 100%; justify-content: center;}
	.standardtwo { gap: 32px;}
}

@media screen and (max-width: 767px) {
	.standardtwo { flex-wrap: wrap;}
	.col { width: 100%; }
}
</style>