<div class="flexbox-r x1">
	<div class="flexbox-c thinner"></div>
	<div class="in-col mid-col link-heads">
		<h5 id='class-1' class="w600 upper"><a href="/openlibrary/reader/ramayana">Vālmīki Rāmāyaṇa</a></h5>
		<h5 id='class-1' class="w600 upper">Ṛgveda Saṃhitā</h5>
	</div>
	<div class="in-col right-col">
		<slot></slot>
	</div>
</div>


<style>
.link-heads h5 { cursor: pointer; position: relative; color: #b7b7b7;}
.link-heads h5:hover { background: var(--beau); color: white;}
/*
.link-heads h5::before {
	position: absolute;
	top: 0;
	left: 0;
	content: '';
	height: 100%;
	border-bottom: 4px solid var(--strong);
	z-index: 0;
}
*/
.link-heads h5:hover::before {
	animation: yellowline 0.4s var(--cubeb) forwards;
}
.link-heads a { z-index: 10;}
@keyframes yellowline {
	0% { width: 0%;}
	100% {width: 100%;}
}
.thinner {
	position: absolute;
	position: sticky;
}

@media screen and (min-width: 768px) {
	.x1 { height: 100vh; padding-top: 120px;}
	.mid-col { width: 20%;}
	.right-col { width: 80%; padding: 0 80px; border-left: 1px solid #d7d7d7; align-items: flex-start;}
	.thinner {
		height: 100vh;
		width: 64px;
		top: 0;
		left: 0;
		border-right: 1px solid #d7d7d7;
		z-index: 60;
		margin-bottom: -100vh;
	}
	.link-heads h5 { padding-left: 16px;}
	.link-heads h5 { padding: 8px; margin: 0; border-bottom: 1px solid #d7d7d7; padding-left: 16px;}
}
@media screen and (max-width: 767px) {
	.thinner { display: none;}
}
</style>