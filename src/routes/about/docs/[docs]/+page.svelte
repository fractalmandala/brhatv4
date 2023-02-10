<script>
/**
	 * @type {{ title: any; content: any; }}
	 */
 export let data
</script>


<div class="corp-docs">
<div class="r-r-r-r breadcrumb" data-textify>
	<a href="/about">Return to About</a>
	<a href="/about/docs/svatahsiddha">Svataḥsiddha</a>
	<a href="/about/docs/whatkrishnameanstous">What Śrī Kṛṣṇa Means to Us</a>
  <a href="/about/docs/anatomy">Anatomy of a Civilizational Moment</a>
	<a href="/about/docs/namelogo">Nāmarūpa</a>
	<a href="/about/docs/values">Pratijñā</a>
</div>
<h1 data-textify>{data.title}</h1>
<div class="for-text">
<svelte:component this={data.content} />
</div>
</div>

<style>
.corp-docs {
	padding-top: 8em;
}
.corp-docs h1 {
	font-size: 5em;
	text-transform: capitalize;
	font-weight: 600;
	letter-spacing: -1px;
	margin-top: 16px;
}
.breadcrumb { gap: 1em;}
</style>
