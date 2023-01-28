<script>

function toggleMode(){
	window.document.body.classList.toggle('dark-mode')
}

</script>

<button on:click={toggleMode} on:keydown={toggleMode}>
<slot></slot>
</button>

<style>

button {
	background: transparent;
	border: none;
	padding: 0;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 10px;
	letter-spacing: 2px;
	color: #878787;
	margin-bottom: 0;
}

:global(body.dark-mode) button {
	background: var(--beau);
	color: white;
}

</style>