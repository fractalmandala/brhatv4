<div class="c-c-c-c lab">
<div class="c-c-c-c mino">
<slot></slot>
</div>
<div class="r-r-r-r sido" style="background: var(--sidebar)">
<h5>A</h5>
</div>
</div>

<style>
:root { --sidebar:linear-gradient(40deg, rgba(29, 19, 9, 0.9), rgba(7, 12, 25, 0.8));}
.lab { height: 100vh; justify-content: space-between;}
.sido { width: 100%; height: 16px; justify-content: center; align-items: center; z-index: 10; position: sticky; bottom: 0;}
.sido:hover { height: 64px;}
.mino { width: 100%; height: calc(100% - 64px);}
.sido h5 {
	color: white;
}
</style>


