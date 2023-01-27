<div class="to-top">
<button on:click={() => {
    window.scrollTo(0, 0);
}}>
</button>
Return to Top
</div>
<style>
.to-top { display: flex; flex-direction: column; align-items: center; justify-content: flex-start; font-size: 12px; text-transform: uppercase; font-weight: bold; color: #878787;}
button { transition: all 0.14s var(--cube2); transform-origin: center center; background-image: url('/images/icons/go-up-grey.png'); background-position: center center; background-size: contain; background-repeat: no-repeat; border: none;}
button:hover { background-image: url('/images/icons/go-up-red.png'); transform: scale(0.9);}

@media screen and (min-width: 768px) {
	button { width: 24px; height: 24px;}
	.to-top { border-top: 1px solid #d7d7d7; margin: 32px 40vw 0 40vw; }
}

@media screen and (max-width: 767px) {
	button { width: 20px; height: 20px;}
	.to-top { border-top: 1px solid #d7d7d7; margin: 32px 20vw 0 20vw;}
}
</style>
