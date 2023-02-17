


	<div class="c-c-c-c main">
		<slot></slot>
	</div>
	<div class="c-c-c-c sidebb">
		<h5><a href="/rta">Ṛta in Design Home</a></h5>
		<p><a href="/rta/prologue">Prelude to RID</a></p>
		<p><a href="/rta/intro">Introduction</a></p>
		<p><a href="/rta/dharmaisdesign">Dharma is Design</a></p>
		<p><a href="/rta">Framework</a></p>
		<p><a href="/rta">Principles</a></p>
		<p><a href="/rta">Phases</a></p>
		<p><a href="/rta">Tools and Resources</a></p>
		<p><a href="/rta">References</a></p>
		<p><a href="/rta">Glossary</a></p>
		<p><a href="/rta">Design @ Bṛhat</a></p>
	</div>





<style>

.sidebb {
	border-left: 1px solid #10c56e;
}
.sidebb p { color: #878787; transform-origin: center left;}
.sidebb p:hover { transform: scale(1.1);}
.sidebb a {color: inherit;}
.sidebb a:hover { color: #10c56e;}


@media screen and (min-width: 900px) {
	.sidebb { width: 20%; padding-left: 24px; height: 100%; position: sticky; top: 200px;}	
	.main { width: 76%; padding: 0;}
	
}

@media screen and (max-width: 899px) and (min-width: 576px) {
	.sidebb { width: 27%; padding-left: 16px;}
	.main { width: 70%;}

}

@media screen and (max-width: 575px) {
	.sidebb { width: 100%; height: 64px; order: 1; background: white; z-index: 400;}
	.main { width: 100%; height: 100%; order: 2;}


}

</style>