<script>
/**
	 * @type {{ title: any; content: any; }}
	 */
 /**
	 * @type {{ title: any; content: any; }}
	 */
  export let data
</script>

<div class="boxc">
	<h3>{data.title}</h3>
	<div class="document">
		<svelte:component this={data.content} />
	</div>
</div>

<style>
h3 { border-bottom: 1px solid #d7d7d7; padding-bottom: 16px; color: #474747;padding-top: 32px; margin-bottom: 32px;}

@media screen and (max-width:899px) {
	h3 {
		font-size: 48px
	}
}
@media screen and (max-width:767px) {
	h3 {
		font-size: 48px
	}
}
@media screen and (max-width:575px) {
	h3 {
		font-size: 40px
	}
}

</style>
