<script>
import DhitiSidebar from '$lib/components/globals/DhitiSidebar.svelte'
// @ts-nocheck
// @ts-ignore
/**
	 * @type {{ category: any; title: any; author: any; date: any; tags: any; content: any; image: any; }}
	 */
 export let data;
</script>

<div class="dhiticontainer">
	<div class="headerimage">
		<img src={data.image} alt={data.title} />
	</div>
	<div class="rowholder">
	<div class="sharebox"></div>
	<div class="pageoftext pt2 mt4">
		<small class="label">{data.category}</small>
		<div class="innerrow">
  		<small>{data.date}</small><br>
  		<small>{data.tags}</small>
		</div>
		<h1>{data.title}</h1>
		<p class="authoronpage">{data.author}</p>
		<div class="line"></div>
		<div class="textenclosure serif">
  		<svelte:component this={data.content} />
		</div>
	</div>
	<DhitiSidebar
	--indhiti = "28%"
></DhitiSidebar>
	</div>
</div>


<style>


.label {
	font-size: 1rem;
	background-color: var(--blue);
	color: white;
	padding: 4px 8px;
}

.authoronpage {
	font-size: 1.12rem;
	color: var(--red);
}

.textenclosure {
	padding-bottom: 6rem;
}

h1 {
	font-family: 'Source Serif 4', serif;
	font-weight: 900;
	letter-spacing: -1px;
	line-height: 1.24em;
	font-size: 4rem;
	color: #474747;
}

.pageoftext {
	height: 100%;
}

.dhiticontainer {
	display: flex;
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
}

.rowholder {
	display: flex;
	width: 100%;
}

.sharebox {
	border-right: 1px solid #d7d7d7;
}

.headerimage img {
	object-fit: contain;
	width: 100%;

}

.innerrow {
	margin: 1.24rem 0 0 0;
}

.innerrow small {
	font-size: 16px;
	color: #a7a7a7;
	font-variant: small-caps;
}

.line {
	height: 1px;
	width: 100%;
	background-color: #d7d7d7;
	margin-bottom: 3rem;
}

@media screen and (min-width: 900px) {
	.pageoftext {
	padding: 0 4rem 0 4rem;
	border-right: 1px solid #f1f1f1;
}
.textenclosure {
	padding: 0 3.2rem 0 1rem;
}
}
</style>