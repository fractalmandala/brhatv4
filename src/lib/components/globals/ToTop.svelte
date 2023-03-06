<div class="to-top">
<button on:click={() => {
    window.scrollTo(0, 0);
}}>
</button>
</div>

<style>
.to-top { display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 12px; text-transform: uppercase; font-weight: bold; color: #878787;}
button { transition: all 0.14s var(--cube2); transform-origin: center center; background-image: url('/images/icons/go-up-grey.png'); background-position: center center; background-size: contain; background-repeat: no-repeat; border: none; background-color: transparent;}
button:hover { background-image: url('/images/icons/go-up-red.png'); transform: scale(0.9);}

@media screen and (min-width: 768px) {
	button { width: 24px; height: 64px; }
	.to-top { margin: 0; height: 64px; }
}

@media screen and (max-width: 767px) {
	button { width: 24px; height: 56px;}
	.to-top { margin: 0 0 0 0; height: 56px; display: flex; justify-content: center; align-items: center; }
}
</style>
