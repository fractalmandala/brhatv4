<div class="button-1">
<span class="button-t1"></span>
<span class="button-t2"></span>
<span class="button-t3"></span>
<span class="button-t4"></span>
<slot></slot>
</div>

<style>

.button-1 {
	position: relative;
	padding: 8px 30px;
	border-radius: 4px;
	overflow: hidden;
	border: 2px solid #474747;
	font-weight: 500;
	z-index: 10;
	color: #474747;
	transform-origin: center center;
	cursor: pointer;
	box-shadow: 3px 6px 6px #d1d1d1;
	text-transform: capitalize;
}
.button-1:hover {
	animation: mainbutton 0.3s var(--cubed) forwards;
}

@keyframes mainbutton {
	0% {
		border: 2px solid #474747;
		transform: scale(1);
		box-shadow: 3px 6px 9px #c1c1c1;
		color: #474747;
	}
	100% {
		border: 2px solid #fe4a49;
		transform: scale(0.9);
		box-shadow: none;
		color: white;
	}
}

.button-1::after {
	position: absolute;
	top: 0;
	left: 0;
	content: '';
	width: 0%;
	height: 100%;
	background: #fe4a49;
	z-index: -1;
	transition: width 0.11s var(--cubeb);
	transition-delay: 0.2s;
}
.button-1:hover::after {
	width: 100%;
}

.button-t1, .button-t2, .button-t3, .button-t4 {
	position: absolute;
	border-radius: 4px;
}

.button-t1 {
	top: 0;
	left: 0;
	width: 0%;
	height: 1px;
	border-top: 1px solid #fe4a49;
}
.button-1:hover .button-t1 {
	animation: topbording 0.14s var(--cubea) forwards;
}

.button-t2 {
	top: 0;
	right: 0;
	width: 1px;
	height: 0%;
	border-right: 1px solid #fe4a49;
}
.button-1:hover .button-t2 {
	animation: rightbording 0.17s var(--cubeb) forwards;
}

.button-t3 {
	bottom: 0;
	left: 0;
	width: 0%;
	height: 1px;
	border-bottom: 1px solid #fe4a49;
}
.button-1:hover .button-t3 {
	animation: bottombording 0.12s var(--cubec) 0.09s forwards;
}

.button-t4 {
	top: 0;
	left: 0;
	width: 1px;
	height: 0%;
	border-left: 1px solid #fe4a49;
}
.button-1:hover .button-t4 {
	animation: leftbording 0.15s var(--cubed) forwards;
}

@keyframes topbording {
	0% { width: 0%;}
	100% { width: 100%;}
}

@keyframes rightbording {
	0% { height: 100%; margin-top: 100%; }
	100% { height: 100%; margin-top: 0%; }
}

@keyframes bottombording {
	0% { width: 100%; margin-left: 100%; }
	100% { width: 100%; margin-left: 0%; }
}

@keyframes leftbording {
	0% { height: 0%; }
	100% { height: 100%; }
}

@media screen and (min-width: 768px) {
	.button-1 {
		margin-top: 16px;
	}
}

@media screen and (max-width: 767px) {
	.button-1 {
		margin-top: 20px;
	}
}

</style>