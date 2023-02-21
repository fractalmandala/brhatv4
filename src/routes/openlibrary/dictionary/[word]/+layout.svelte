

<div class="primecontainer-row">
<div class="side-bar">
<h5 class="side-bar-header"><a href="/openlibrary">Bṛhat Open Library</a></h5>
</div>

<div class="main-box">
	<div class="word-window fl-c">
	<h4>Dictionary</h4>
		<slot></slot>
	</div>
</div>

</div>



<style>
.primecontainer-row { display: flex; width: 100vw; min-height: 100vh;}
.side-bar, .main-box { display: flex; flex-direction: column; }
.side-bar-header a { color: #878787; transition: all 0.18s var(--snap);}
.side-bar-header a:hover { color: #474747;}
.word-window { width: 100%;}
.word-window h4 { margin-top: 1rem; color: #d7d7d7;}
@media screen and (min-width: 900px) {
	.primecontainer-row { flex-direction: row; padding-top: 120px;}
	.side-bar { width: 20%; border-right: 1px solid #e1e1e1;}
	.main-box { width: 75vw; height: 100%; padding: 0 8rem 0 6rem; }
	.side-bar-header { font-size: 1.2rem; }
}
</style>