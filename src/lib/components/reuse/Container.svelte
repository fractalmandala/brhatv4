<div class="container pt2 pb2" style="align-items: var(--align)">
 <slot></slot>
</div>

<style>
	@media screen and (min-width: 900px) {
	.container { 
	padding-left: 8rem;
	padding-right: 8rem;
}
	}
@media screen and (max-width: 899px) and (min-width: 768px) {
	.container { 
	padding-left: 4.8rem;
	padding-right: 4.8rem;
}
}
@media screen and (max-width: 767px ) and (min-width: 576px ) {
	.container { 
	padding-left: 4rem;
	padding-right: 4rem;
}
}
@media screen and (max-width: 575px ) {
	.container { 
	padding-left: 0.64rem;
	padding-right: 0.64rem;
}
}
</style>