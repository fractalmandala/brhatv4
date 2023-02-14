<script>
export let link = "/about";
</script>

<div class="button-plain" on:click={() => { window.location.href = link}} on:keydown={() => { window.location.href = link}} style="margin-top: var(--b-mar-t); margin-bottom: var(--b-mar-b)">
<span><slot></slot></span>
</div>

<style>

.button-plain {
	padding: 9px 0 9px 0;
	font-size: 17px;
	font-weight: 600;
	color: white;
	transition: all 0.12s var(--cube5);
	width: max-content;
	text-transform: capitalize;
	transform-origin: center center;
	position: relative;
	border-radius: 4px;
	cursor: pointer;
	overflow: hidden;
	z-index: 3;
}

.button-plain::before {
	position: absolute;
	top: 0;
	left: 0;
	content: '';
	width: 100%;
	height: 100%;
	border-radius: 4px;
	background-color: #694873;
  transition: all 0.1s ease-in-out;
	z-index: -1;
}

.button-plain:hover {
	color: white;
	transform: scale(0.95);
}

.button-plain:hover::before {
	margin-left: 100%;
}

span {
  position: relative;
  z-index: 1;
	padding: 10px 16px;
	border-radius: 4px;
}

span::before {
  content: '';
  position: absolute;
  z-index: -2;
  top: 0;
  bottom: 0;
  left: -0.25em;
  right: -0.25em;
  background-color: #fe4a49;
  transform-origin: center right;
  transform: scaleX(0);
  transition: all 0.1s ease-in-out;
	transition-delay: 0.08s;
	border-radius: 4px;
}

span:hover::before {
  transform: scaleX(1);
  transform-origin: center left;
}

</style>
