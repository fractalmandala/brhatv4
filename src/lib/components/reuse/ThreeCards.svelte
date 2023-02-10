<div class="three-cards"
style="height: var(--cardsheight)"
>
	<div class="threecards card-one"><slot name="card-one"></slot></div>
	<div class="threecards card-two"><slot name="card-two"></slot></div>
	<div class="threecards card-three"><slot name="card-three"></slot></div>
</div>

<style>
	.three-cards {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
	}

	.threecards {
		display: flex;
		flex-direction: column;
	}

	@media screen and (min-width: 768px) {
		.threecards { width: calc(33.33% - 1em);}
		.three-cards { gap: 1em;}
	}

	@media screen and (max-width: 767px) {
		.threecards { width: 100%;}
		.three-cards {
			flex-wrap: wrap;
			gap: 1em;
		}
	}
</style>