<script>

import { fly } from 'svelte/transition'
import { circOut } from 'svelte/easing'
let isAreas = false;
let isBeliefs = false;
let isOther = false;
let isRed = false;
let isMenu = false;

function showAreas() {
	isAreas = true;
}
function hideAreas() {
	isAreas = false;
}
function showBeliefs() {
	isBeliefs = true;
}
function hideBeliefs() {
	isBeliefs = false;
}
function showOther() {
	isOther = true;
}
function hideOther() {
	isOther = false;
}
function showRed() {
	isRed = true;
}
function hideRed() {
	isRed = false;
}
function showMenu() {
	isMenu = true;
}
function hideMenu() {
	isMenu = false;
}
</script>
<div class="header">
<div class="headerbox">
  <div class="logoarea">
     <div class="logotype">
       	<a href="/">
					<div class="logo-svg-box">
						<svg width="256" height="38" viewBox="0 0 256 38" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="logomrdanga">
							<path id="b" d="M5.81381 26.2204V26.7816H0.5V0.5H5.9623V9.83187V10.7425L6.73064 10.2538C7.05936 10.0447 7.41572 9.86257 7.80065 9.70736L7.80069 9.70747L7.81046 9.70328C8.73521 9.30734 9.73255 9.10724 10.8077 9.10724C12.4845 9.10724 13.939 9.49889 15.1881 10.2682L15.188 10.2682L15.1939 10.2717C16.4469 11.02 17.4232 12.0714 18.1252 13.4388L18.1252 13.4388L18.1283 13.4447C18.853 14.811 19.2214 16.3754 19.2214 18.1504C19.2214 19.899 18.8535 21.4513 18.1283 22.8185L18.1268 22.8213C17.4249 24.1652 16.4467 25.22 15.1881 25.9951C13.939 26.7643 12.4846 27.1557 10.8077 27.1557C9.71195 27.1557 8.70759 26.9453 7.78781 26.5292C7.35971 26.3237 6.96886 26.0875 6.61436 25.8208L5.81381 25.2187V26.2204ZM13.1788 20.297L13.1788 20.297L13.1831 20.2889C13.5212 19.6358 13.6847 18.9067 13.6847 18.1128C13.6847 17.3428 13.5207 16.6369 13.1809 16.0076C12.8419 15.3545 12.3571 14.837 11.732 14.4649C11.1027 14.0901 10.3937 13.908 9.61928 13.908C8.84467 13.908 8.13558 14.0901 7.50626 14.4651L7.50621 14.465L7.49763 14.4703C6.90274 14.8413 6.43444 15.3427 6.09687 15.9663C5.75422 16.5991 5.59092 17.3198 5.59092 18.1128C5.59092 18.9286 5.75315 19.6711 6.09262 20.3263L6.09255 20.3263L6.09687 20.3343C6.43763 20.9637 6.92271 21.466 7.54346 21.8358L7.55098 21.8403L7.55865 21.8445C8.18526 22.1887 8.88867 22.3553 9.65634 22.3553C10.4287 22.3553 11.128 22.1741 11.7365 21.7956C12.3552 21.4263 12.8388 20.9249 13.1788 20.297Z" fill="white" stroke="white" class="svg-elem-1"></path>
							<path id="r" d="M25.9086 26.5992C24.8255 27.0701 23.5563 27.1461 22.569 27.1583V9.47754H28.1662V10.167V11.2624L28.9938 10.5448C30.0933 9.59125 31.5361 9.0957 33.3677 9.0957C34.2117 9.0957 34.9092 9.20534 35.472 9.40958L35.472 9.40962L35.4779 9.41168C35.9227 9.56681 36.3105 9.78525 36.6454 10.0666L33.393 14.4476C33.2106 14.3333 33.0074 14.24 32.7882 14.165C32.3665 13.9863 31.8993 13.9031 31.3962 13.9031C30.4275 13.9031 29.612 14.2086 29.0187 14.8669C28.421 15.5035 28.1662 16.4117 28.1662 17.4979V18.3172L28.1284 22.8332L28.1284 22.8332V22.8374C28.1284 23.9625 27.865 24.7652 27.4735 25.3466C27.0812 25.929 26.5351 26.3268 25.9086 26.5992Z" fill="#FE4A49" stroke="#FE4A49" class="svg-elem-2"></path>
							<path id="h" d="M44.5175 16.9529V26.7816H39.0551V0.5H44.5175V10.0843V11.1047L45.3238 10.4795C45.579 10.2816 45.8527 10.1039 46.1461 9.94571L46.1462 9.94578L46.154 9.94138C47.1328 9.39083 48.2839 9.10724 49.623 9.10724C51.0144 9.10724 52.1894 9.39221 53.1661 9.94141L53.166 9.94158L53.1781 9.94795C54.1862 10.479 54.943 11.2104 55.4627 12.1439L55.4627 12.144L55.4672 12.1519C56.0112 13.0883 56.291 14.1846 56.291 15.4558V26.7816H50.8286V16.9529C50.8286 16.0051 50.5492 15.2021 49.936 14.6127C49.3386 14.0131 48.5766 13.7209 47.6914 13.7209C47.0971 13.7209 46.5447 13.8499 46.0448 14.1166L46.0447 14.1165L46.0339 14.1226C45.5571 14.3925 45.1823 14.7712 44.9152 15.2496C44.6414 15.7399 44.5175 16.3152 44.5175 16.9529Z" fill="white" stroke="white" class="svg-elem-3"></path>
							<path id="a" d="M63.5564 25.9974L63.5563 25.9973C62.3222 25.2234 61.355 24.1688 60.652 22.823C59.95 21.4553 59.5938 19.9014 59.5938 18.1505C59.5938 16.3728 59.9508 14.8064 60.6528 13.4389L60.6528 13.4388C61.3559 12.069 62.3215 11.0173 63.5505 10.2696L63.5505 10.2697L63.5563 10.266C64.7819 9.49722 66.1865 9.10767 67.7847 9.10767C68.8602 9.10767 69.8295 9.30753 70.6996 9.69958L70.6996 9.69969L70.7096 9.70395C71.2532 9.93477 71.7286 10.2263 72.1402 10.5766L72.9643 11.278V10.1959V9.48177H78.3156V26.7816H72.9643V26.0503V24.9752L72.1421 25.668C71.7275 26.0173 71.248 26.3166 70.6992 26.5644C69.8292 26.9563 68.8601 27.1561 67.7847 27.1561C66.1865 27.1561 64.7819 26.7665 63.5564 25.9974ZM72.7192 15.9669L72.7187 15.9661C72.3782 15.3381 71.8938 14.8368 71.2759 14.4676C70.6672 14.0897 69.9687 13.9084 69.1959 13.9084C68.4213 13.9084 67.7126 14.0906 67.0831 14.4649L67.083 14.4648L67.074 14.4704C66.4776 14.8424 65.9997 15.3559 65.6401 15.9976L65.6401 15.9975L65.6366 16.0039C65.2952 16.6343 65.1306 17.3416 65.1306 18.1133C65.1306 18.9068 65.294 19.6359 65.6323 20.289L65.6322 20.289L65.6365 20.2969C65.977 20.9264 66.4622 21.4288 67.0828 21.7984L67.0829 21.7984C67.7097 22.1715 68.4054 22.3554 69.1589 22.3554C70.3433 22.3554 71.3354 21.9617 72.0861 21.1499C72.8534 20.346 73.2242 19.3193 73.2242 18.1133C73.2242 17.3197 73.0605 16.5994 72.7192 15.9669Z" fill="white" stroke="white" class="svg-elem-4"></path>
							<path id="d" d="M94.7622 10.2463V0.996704H100.233V27.0508H94.8737V26.5044V25.5186L94.0783 26.101C93.7188 26.3642 93.3264 26.5971 92.8997 26.7997C91.977 27.2134 90.9828 27.4217 89.9113 27.4217C88.2313 27.4217 86.7742 27.0331 85.5231 26.2702C84.2625 25.5015 83.2706 24.4554 82.5434 23.1226C81.8423 21.7679 81.4862 20.2293 81.4862 18.4956C81.4862 16.7355 81.8431 15.1843 82.5443 13.8301C83.2727 12.471 84.2523 11.4271 85.4838 10.6851L85.4838 10.6851L85.4861 10.6837C86.7358 9.92147 88.2052 9.53221 89.9113 9.53221C90.9886 9.53221 91.9877 9.73049 92.9138 10.1236L92.9138 10.1237L92.9238 10.1277C93.3096 10.2817 93.6667 10.4623 93.9959 10.6695L94.7622 11.1517V10.2463ZM93.171 22.1587L93.1786 22.1544L93.1861 22.1498C93.7806 21.7825 94.2493 21.2864 94.5875 20.6685C94.9565 20.0153 95.1339 19.2741 95.1339 18.4587C95.1339 17.6705 94.9699 16.9549 94.6267 16.3263L94.6265 16.3261C94.2856 15.7026 93.8012 15.205 93.1817 14.8387C92.5732 14.4642 91.8736 14.2844 91.101 14.2844C90.3265 14.2844 89.6174 14.4652 88.9879 14.836L88.9878 14.8359L88.9788 14.8415C88.3819 15.2105 87.9033 15.7197 87.5425 16.3565L87.5425 16.3564L87.5388 16.363C87.1965 16.9892 87.0311 17.6918 87.0311 18.4587C87.0311 19.247 87.1952 19.9715 87.5345 20.62L87.5344 20.6201L87.5387 20.6279C87.8803 21.2533 88.3667 21.7513 88.9875 22.1177L88.9877 22.1178C89.6146 22.4875 90.3108 22.6695 91.064 22.6695C91.8524 22.6695 92.5613 22.5064 93.171 22.1587Z" fill="white" stroke="white" class="svg-elem-5"></path>
							<path id="m" d="M117.597 20.2518L118.632 16.4723L120.766 9.20074H128.951V26.9531H123.9V21.7721L124.234 14.685L124.259 14.1615H123.735H123.701H123.34L123.227 14.504L119.094 26.9531H114.936L110.837 14.5051L110.723 14.1615H110.362H110.328H109.804L109.829 14.685L110.162 21.7721V26.9531H105.111V9.20074H113.299L115.464 16.4752L116.533 20.2558L116.636 20.6198H117.015H117.115H117.496L117.597 20.2518Z" fill="white" stroke="white" class="svg-elem-6"></path>
							<path id="r2" d="M146.702 20.8623L150.602 26.9531H144.921L141.629 21.1129L141.486 20.8584H141.193H139.213H138.713V21.3584V26.9531H133.094V9.20074H142.69C145.167 9.20074 147.002 9.73482 148.264 10.7337L148.264 10.7337L148.267 10.7361C149.53 11.7199 150.181 13.1366 150.181 15.0633C150.181 16.9648 149.532 18.3716 148.268 19.3564C147.876 19.6598 147.431 19.9191 146.928 20.1324L146.383 20.3638L146.702 20.8623ZM138.713 17.3403V17.8403H139.213H141.721C142.577 17.8403 143.313 17.6643 143.824 17.2124L143.825 17.2113C144.365 16.7306 144.594 16.038 144.594 15.2307C144.594 14.4148 144.372 13.7135 143.825 13.2491C143.314 12.7748 142.577 12.5877 141.721 12.5877H139.213H138.713V13.0877V17.3403Z" fill="white" stroke="white" class="svg-elem-7"></path>
							<path id="d2" d="M161.832 26.9531H153.338V9.20074H161.832C164.888 9.20074 167.164 10.0028 168.737 11.5368L168.737 11.5368L168.74 11.5392C170.311 13.0512 171.127 15.2061 171.127 18.0769C171.127 20.9467 170.312 23.1143 168.738 24.6493C167.165 26.1618 164.889 26.9531 161.832 26.9531ZM158.958 22.5307V23.0307H159.458H161.765C163.012 23.0307 164 22.6186 164.565 21.6863C165.103 20.8125 165.34 19.5878 165.34 18.0769C165.34 16.5711 165.105 15.3555 164.565 14.5009C164.002 13.5496 163.016 13.1232 161.765 13.1232H159.458H158.958V13.6232V22.5307Z" fill="white" stroke="white" class="svg-elem-8"></path>
							<path id="a2" d="M185.201 23.8686L185.099 23.5039H184.72H178.301H177.925L177.821 23.8643L176.922 26.9531H171.687L177.985 9.20074H185.369L191.636 26.9531H186.068L185.201 23.8686ZM179.061 19.4996L178.855 20.1507H179.538H183.516H184.189L183.995 19.5063L182.056 13.0769L181.589 11.5295L181.1 13.0701L179.061 19.4996Z" fill="white" stroke="white" class="svg-elem-9"></path>
							<path id="n" d="M199.142 20.6322V26.9531H193.991V9.20074H200.577L204.945 17.5298L206.378 20.5673L206.513 20.8539H206.83H206.897H207.418L207.397 20.3331L207.196 15.5216V9.20074H212.348V26.9531H205.762L201.36 18.5574L199.961 15.5868L199.826 15.3H199.509H199.442H198.92L198.942 15.8207L199.142 20.6322Z" fill="white" stroke="white" class="svg-elem-10"></path>
							<path id="g" d="M228.558 20.1218H225.581V17.7398H233.407V26.9531H230.193L230.026 24.6707L229.901 22.961L229.088 24.4697C228.684 25.2171 228.085 25.8736 227.274 26.437C226.512 26.9441 225.472 27.221 224.111 27.221C222.4 27.221 220.914 26.8681 219.639 26.1778C218.368 25.4676 217.365 24.4457 216.629 23.0989C215.918 21.7359 215.551 20.0681 215.551 18.0769C215.551 16.0882 215.94 14.4364 216.69 13.0991C217.464 11.7373 218.559 10.7141 219.984 10.0214L219.984 10.0214L219.989 10.0187C221.421 9.30168 223.146 8.93317 225.181 8.93317C227.404 8.93317 229.232 9.41873 230.695 10.3602L230.695 10.3602L230.699 10.3629C232.01 11.1889 232.913 12.3311 233.413 13.8088L228.618 15.0859C228.387 14.3189 228.018 13.7146 227.454 13.3682C226.854 12.9779 226.169 12.7885 225.415 12.7885C224.596 12.7885 223.855 12.9884 223.209 13.4019C222.571 13.8015 222.09 14.414 221.748 15.1979L221.748 15.1979L221.745 15.2049C221.42 15.9793 221.271 16.9446 221.271 18.0769C221.271 19.233 221.421 20.2351 221.739 21.0681L221.739 21.0681L221.741 21.0728C222.063 21.893 222.561 22.5334 223.248 22.9564L223.248 22.9564L223.255 22.9606C223.952 23.3747 224.793 23.5665 225.75 23.5665C226.236 23.5665 226.681 23.5057 227.078 23.373L227.087 23.3702L227.095 23.3671C227.494 23.2178 227.845 23.0249 228.139 22.7835L228.149 22.7753L228.159 22.7666C228.448 22.5031 228.672 22.2019 228.815 21.861C228.978 21.504 229.058 21.1224 229.058 20.7224V20.6218V20.1218H228.558Z" fill="white" stroke="white" class="svg-elem-11"></path>
							<path id="a3" d="M248.743 23.8686L248.64 23.5039H248.262H241.843H241.467L241.362 23.8643L240.464 26.9531H235.229L241.527 9.20074H248.911L255.177 26.9531H249.61L248.743 23.8686ZM242.603 19.4996L242.396 20.1507H243.079H247.058H247.731L247.537 19.5063L245.597 13.0769L245.131 11.5297L244.642 13.0701L242.603 19.4996Z" fill="white" stroke="white" class="svg-elem-12"></path>
							<path id="dot1" d="M205.605 2.31847L205.605 2.31854L205.612 2.32459C206.067 2.69606 206.331 3.27172 206.331 4.14692C206.331 4.99551 206.07 5.56221 205.612 5.9363L205.612 5.93623L205.605 5.94231C205.153 6.32553 204.42 6.5603 203.32 6.5603C202.248 6.5603 201.527 6.32802 201.073 5.94543C200.655 5.57513 200.41 5.00555 200.41 4.14692C200.41 3.26191 200.658 2.68323 201.073 2.31539C201.527 1.9327 202.248 1.70013 203.32 1.70013C204.42 1.70013 205.153 1.93518 205.605 2.31847Z" fill="#FE4A49" stroke="#FE4A49" class="svg-elem-13"></path>
							<path id="dot2" d="M144.072 30.2124L144.072 30.2125L144.079 30.2185C144.538 30.5922 144.798 31.1588 144.798 32.0074C144.798 32.8829 144.535 33.4583 144.079 33.8302L144.079 33.8302L144.072 33.8362C143.62 34.2195 142.888 34.4542 141.788 34.4542C140.716 34.4542 139.994 34.222 139.54 33.8393C139.125 33.4711 138.878 32.8926 138.878 32.0074C138.878 31.1487 139.123 30.5793 139.54 30.2094C139.995 29.8266 140.716 29.5941 141.788 29.5941C142.888 29.5941 143.62 29.8291 144.072 30.2124Z" fill="#FE4A49" stroke="#FE4A49" class="svg-elem-14"></path>
							<path id="dotr" d="M28.1721 34.1157C28.1721 35.6616 26.9181 36.9151 25.3705 36.9151C23.8229 36.9151 22.569 35.6616 22.569 34.1157C22.569 32.5702 23.8229 31.3166 25.3705 31.3166C26.9181 31.3166 28.1721 32.5702 28.1721 34.1157Z" fill="#FE4A49" stroke="#FE4A49" class="svg-elem-15"></path>
							</g>
						</svg>
					</div>
				</a>
     </div>
  </div>
  <div class="navbar">
      <div class="menuitems"><a href="/mrdanga/rasa">Rasa</a></div>
			<div class="menuitems"><a href="/mrdanga/kala">Kalā</a></div>
			<div class="menuitems"><a href="/mrdanga/kavita">Kavitā</a></div>
			<div class="menuitems opener" on:mouseenter={showOther} on:mouseleave={hideOther}><p>Other</p>
				{#if isOther}
				<div class="second-row">
					<div class="rowitems"><a href="/dhiti">Dhīti</a></div>
					<div class="rowitems"><a href="/openlibrary">Open Library</a></div>
					<div class="rowitems"><a href="/anveshi">Anveṣī</a></div>
					<div class="rowitems"><a href="/drashta">Draṣṭā</a></div>
					<div class="rowitems"><a href="/mandala">Maṇḍala</a></div>
					<div class="rowitems"><a href="/aryavarta">Āryavarta</a></div>
					<div class="rowitems"><a href="/rta">Ṛta</a></div>
					<div class="rowitems"><a href="/about">About</a></div>
				</div>
				{/if}
			</div>
   	</div>
	</div>
	<div class="mobilemenu">
		
		{#if isRed}
		<img class="menu-red" src="/images/icons/hamburger-red.png" alt="menuicon" on:mouseleave={hideRed} on:click={showMenu} on:keydown={showMenu}/>
		{:else}
		<img class="menu-white" src="/images/icons/hamburger-white.png" alt="menuicon" on:mouseenter={showRed} on:mouseleave={hideRed} on:click={showMenu} on:keydown={showMenu}/>	
		{/if}
	</div>
	{#if isMenu}
	<div class="fullscreener"
		in:fly="{{ delay: 100, duration: 200, x: 0, y: 700, opacity: 0.3, easing: circOut}}"
		out:fly="{{ delay: 0, duration: 400, x: 0, y: 700, opacity: 0.3, easing: circOut}}"
		>
		<div class="innerheading">
			<div class="motif" id="scroll-container">
       	<a href="/"><img src="/images/corpimages/motif.png" id="rotate-img" class="rotate" alt="motif" /></a>
     	</div>
     	<div class="logotype">
       		<a href="/"><img src="/images/corpimages/logotype.png" alt="logotype"
       		/></a>
     	</div>
			<div class="closebuttonstrip" on:click={hideMenu} on:keydown={hideMenu}>
				<img src="/images/icons/hamburger-close.png" alt="closemenu"/>
			</div>
		</div>
		<div class="fullscreenpage">
			<div class="fullscreencol" id="columnleft">
				<div class="fslinks drashtafs"><a href="/mrdanga/rasa">Rasa</a></div>
				<div class="fslinks drashtafs"><a href="/mrdanga/kala">Kalā</a>
				</div>
				<div class="fslinks drashtafs"><a href="/mrdanga/kavita">Kavitā</a>
				</div>
				<div class="fslinks drashtafs"><a href="/drashta/firekeepers">Firekeepers</a>
				</div>
			</div>
			<div class="fullscreencol" id="columnright">
				<div class="rowitems"><a href="/dhiti">Dhīti</a></div>
				<div class="rowitems"><a href="/openlibrary">Open Library</a></div>
				<div class="rowitems"><a href="/anveshi">Anveṣī</a></div>
				<div class="rowitems"><a href="/drashta">Draṣṭā</a></div>
				<div class="rowitems"><a href="/mandala">Maṇḍala</a></div>
				<div class="rowitems"><a href="/aryavarta">Āryavarta</a></div>
				<div class="rowitems"><a href="/rta">Ṛta</a></div>
				<div class="rowitems"><a href="/about">About</a></div>
			</div>
		</div>
		<div class="socialicons">
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/122-twitter.png" alt="twitter"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/124-fb.png" alt="facebook"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/123-linked.png" alt="linkedin"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/121-insta.png" alt="instagram"/></a>
      	<a href="/" target="_blank" rel="noreferrer"><img src="/images/icons/125-ytube.png" alt="youtube"/></a>
  	</div>
	</div>
	{/if}
</div>

<style>

.logo-svg-box { 
	transition: all 0.16s var(--cube2);
	transform-origin: center left;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
}

.logo-svg-box:hover { transform: scale(0.9);}


.closebuttonstrip img {
	object-fit: contain;
	height: 40px;
	width: 40px;
}


a, .menuitems a, .menuitems p { 
	color: white;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: 500;
	font-family: 'Inter Tight', sans-serif;
	letter-spacing: 0.5px;
}
 
.header { 
position: fixed; 
z-index: 899; 
width: 100vw; 
display: flex; flex-direction: column;
justify-content: center;
transition: all 0.5s linear;
margin: 0;
padding: 0 !important;
align-items: center;
background: rgba(255,255,255,0.6);
backdrop-filter: blur(0.4);
top: 0;
}

.menuitems {
	background: transparent;
	width: max-content;
	padding: 0;	
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0;
}

.headerbox { width: 100%; display: flex; flex-direction: row; justify-content: space-between; align-items: center; background: var(--beau); border-radius: 4px;}
.logoarea { display: flex; flex-direction: row; align-items: center;}
.navbar { width: 70%; display: flex; flex-direction: row; justify-content: flex-end; align-items: center; text-align: right; position: relative; }

.second-row {
	position: absolute;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	width: max-content;
	margin-left: -80px;
	top: 72px;
	height: max-content;
	left: 0;
	color: white;
	border-radius: 4px;
	background: transparent;
	background-color: none;
	padding-top: 16px;
}

.second-row::before {
	content: '';
	width: 100%;
	height: 0%;
	position: absolute;
	top: 8px;
	left: 0;
	border-radius: 4px;
	background: rgba(39,39,39,1);
}

.opener {
	position: relative;
}

.opener:hover .second-row::before, .second-row:hover::before {
	animation: spreadingout 0.26s var(--cube4) forwards;
}

@keyframes spreadingout {
	0% {height: 0%}
	100% {height: 100%;}
}

.second-row .rowitems {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding-left: 32px;
	padding-right: 32px;
	width: 100%;
	height: 32px;
	text-align: left;
	z-index: 950;
	transition: all 0.18s var(--cube4);
}
.second-row .rowitems a {
	text-align: left;
}


.second-row .rowitems:hover {
	background-color: white;
}
.second-row .rowitems:hover a {
	color: #474747;
}
.second-row .rowitems:hover a:hover {
	color: var(--red);
}

.logotype { display: flex; flex-direction: row; align-items: center;}
.motif img, .logotype img { cursor: pointer; }
.motif img {
 transform-origin: center center;
}


.motif { width: 48px; height: 48px; }
.motif img {
 object-fit: contain;
 object-position: center center;
 transform-origin: center center;
 transition: all 0.33s ease-in-out;
}
.motif:hover img {
 transform: scale(0.9);
}

.logotype img {
 object-fit: contain;
 object-position: center left;
 width: 100%;
 transform-origin: center center;
 transition: all 0.33s ease-in-out;
}
.logotype:hover img {
 transform: scale(0.9);
}

.rotate {
   transform: rotateZ(var(--rotation)deg);
   transition: transform 1s;
}

@media screen and (min-width: 900px) {
	.logotype { height: 40px; width: 240px; align-items: center; }
	.logo-svg-box svg { object-fit: contain; width: 240px;}
	.mobilemenu {
		display: none;
	}
	.navbar {
		gap: 2rem;
		height: 72px;
	}
	.menuitems {
		height: 72px;
	}
	.logoarea { width: 35%; }
	.headerbox { 
		margin-top: 8px;
		margin-right: 8px;
		margin-left: 8px;
		padding-right: 2rem;
		padding-left: 2rem;
		padding-top: 0;
		padding-bottom: 0;
		width: calc(100% - 16px);
	}
	/*
	.secondbar { height: 48px; 	flex-direction: row; width: 100vw;}*/
	.second-row {
		display: flex;
		flex-direction: column;
		padding-bottom: 8px;	
	}
	.rowitems {
		display: flex;
		flex-direction: column;
	}
	.header { padding: 0; }
	.motif { padding-top: 0.08rem; margin-right: 6px;}
	.motif img { width: 48px;
 		height: 48px;
	}
	.logotype { padding-top: 12px; }
	.mobilemenu, .fullscreener {
		display: none;
	}

}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.logotype { height: 56px; width: 200px; margin-left: 8px; align-items: center; }
	.logo-svg-box svg { margin-bottom: -6px; object-fit: contain; width: 200px;}
	.logoarea { width: 25%; }
 	.headerbox { 
		padding: 0 16px; 
		height: 72px; 
		margin-top: 8px;
		margin-right: 8px;
		margin-left: 8px;
		width: calc(100% - 16px);
	}

 	.logotype img { padding-top: 0.75rem;}
	.navbar {
		gap: 24px;	
		width: 75%;
	}

	.motif img {
		width: 48px;
		height: 48px
	}

	.logotype img {
		height: 48px;
		}
	
	.mobilemenu, .fullscreener {
		display: none;
	}

}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.logotype { height: 56px; width: 200px; align-items: center; }
	.logo-svg-box svg { margin-bottom: -6px; object-fit: contain; width: 200px;}
	.logoarea { width: 50%; }
 	.headerbox { height: 64px;
		margin-top: 4px;
		margin-left: 4px;
		margin-right: 4px;
		width: calc(100% - 8px);
		position: relative;
 }
	.header { height: 68px;}

	.motif img {
		width: 48px;
		height: 48px
	}
	.logotype img {
		height: 48px;
	padding-top: 8px;
		}
 
	.navbar {
  	display: none;
	}
	
	.mobilemenu {
		display: flex;
		position: absolute;
		justify-content: center;
		top: 0;
		right: 0;
		flex-direction: column;
		width: 64px;
		height: 100%;
	}

	.fullscreener {
		display: flex;
		flex-direction: column;
		position: absolute;
		border-radius: 4px;
		background-color: #272727;
		top: 0;
		margin-left: 4px;
		margin-top: 8px;
		left: 0;
		width: calc(100% - 8px);
		height: calc(100vh - 16px);
		z-index: 999;
		padding: 1rem;
	}


	.menu-white {
		margin-bottom: 0px;
	}

	.mobilemenu img {
		object-fit: contain;
		height: 40px;
		width: 40px;
	}

	.closebuttonstrip {
		display: flex;
		flex-direction: column;
		width: 50%;
		height: 100%;
		align-items: flex-end;
		justify-content: center;
		padding-right: 8px;
		text-align: right;
	}

	.closebuttonstrip img {
		width: 28px;
		height: 28px;
		text-align: right;
		opacity: 0.5;
	}

	.innerheading {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 48px;
		align-items: flex-start;
		justify-content: space-between;
	}

	.innerheading .motif {
		width: 40px;
	}
	.innerheading .logotype  {
		width: 30%;
	}
	.innerheading .logotype img {
		width: 88px;
		object-fit: contain;
	}
	
	.innerheading .logotype {
		padding-bottom: 8px;
	}
	
	.fullscreenpage {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		padding: 16px 0;
		margin-top: 16px;
			border-top: 1px solid #474747;
	}
	.fullscreencol {
		display: flex;
		flex-direction: column;
		height: max-content;
		padding: 0 8px;
	
	}
	#columnright {
		align-items: flex-end;
		font-size: 16px;
		width: 50%;
		text-align: right;
	}
	#columnright a {
		text-transform: capitalize;
		font-size: 16px;
		font-weight: 400;
		color: white;
		text-align: right;
	}
	#columnleft {
		align-items: flex-start;
		width: 50%;
		line-height: 1.2em;
	}
	#columnleft a {
		text-transform: capitalize;
		font-size: 16px;
		line-height: 1.2em;
	}


	.fslinks {
		height: 100%;
	}
	#columnleft .fslinks { line-height: 1em;}
	#columnright .rowitems {
		line-height: 2em;
	}
	.drashtafs {
		height: max-content;
	}
	.drashtafs {
		margin-top: 1.24em;
		margin-bottom: 0;
	}

  .socialicons {
    display: flex;
    flex-direction: row;
    justify-content: center;
		width: 100%;
    align-items: center;
    gap: 8px;
		padding-top: 8px;
		border-top: 1px solid #474747;
  }

  .socialicons img {
    object-fit: contain;
    width: 24px;
    height: 24px;
    transform-origin: center center;
    transition: var(--quik);
  }

  .socialicons img:hover {
    transform: scale(1.1);
  }

 .headerbox { padding: 0 16px;}

}

@media screen and (max-width: 575px) {
	.logotype { height: 56px; width: 200px; align-items: center; }
	.logo-svg-box svg { margin-bottom: -2px; object-fit: contain; width: 200px;}
	.logoarea { width: 50%; }
	.headerbox { height: 64px; margin-top: 4px; margin-left: 4px; margin-right: 4px; width: calc(100% - 8px);  }
	.motif img {
		width: 44px;
		height: 44px
	}
	.motif {
	 	padding-top: 2px;
	}
	.logotype img {
		height: 48px;
		padding-top: 8px;
		}
	.navbar {
	  display: none;
	 }
	.headerbox { padding: 0 16px;}
	.mobilemenu {
		display: flex;
		position: absolute;
		justify-content: center;
		top: 0;
		right: 0;
		flex-direction: column;
		width: 48px;
		height: 100%;
	}
	.menu-white {
		margin-bottom: 0px;
	}

	.mobilemenu img {
	object-fit: contain;
	height: 32px;
	width: 32px;
	}

	.fullscreener {
		display: flex;
		flex-direction: column;
		position: absolute;
		border-radius: 4px;
		background-color: #272727;
		top: 0;
		margin-left: 4px;
		margin-top: 4px;
		left: 0;
		width: calc(100% - 8px);
		height: calc(100vh - 8px);
		z-index: 999;
		padding: 1rem;
	}
	.closebuttonstrip {
		display: flex;
		flex-direction: column;
		width: 50%;
		height: 100%;
		align-items: flex-end;
		justify-content: center;
		padding-right: 8px;
		text-align: right;
	}	

	.closebuttonstrip img {
		width: 28px;
		height: 28px;
		text-align: right;
		opacity: 0.5;		
	}

	.innerheading {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 48px;
		align-items: flex-start;
		justify-content: space-between;
	}

	.innerheading .motif {
		width: 40px;
	}
	.innerheading .logotype  {
		width: 30%;
	}
	.innerheading .logotype img {
		width: 88px;
		object-fit: contain;
	}
	
	.innerheading .logotype {
		padding-bottom: 8px;
	}
	
	.fullscreenpage {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		padding: 16px 0;
		margin-top: 16px;
		border-top: 1px solid #474747;
	}

	.fullscreencol {
		display: flex;
		flex-direction: column;
		height: max-content;
		padding: 0;
	
	}

	#columnright {
		align-items: flex-end;
		font-size: 16px;
		padding-top: 10px;
	}

	#columnright a {
		text-transform: uppercase;
		font-size: 16px;
		font-weight: 600;
		color: white;
	}

	#columnleft {
		align-items: flex-start;
		width: 56%;
		line-height: 1.2em;
	}

	#columnleft a {
		text-transform: capitalize;
		font-size: 16px;
		line-height: 1.2em;
	}




	.fslinks {
		height: 100%;
	}

	#columnleft .fslinks { line-height: 1em;}
	#columnright .rowitems {
		line-height: 2.4em;
	}

	.drashtafs {
		height: max-content;
	}

	.drashtafs {
		margin-top: 1.2em;
		margin-bottom: 0;
	}

  .socialicons {
    display: flex;
    flex-direction: row;
    justify-content: center;
		width: 100%;
    align-items: center;
    gap: 8px;
		padding-top: 8px;
		border-top: 1px solid #474747;
  }

  .socialicons img {
    object-fit: contain;
    width: 24px;
    height: 24px;
    transform-origin: center center;
    transition: var(--quik);
  }

  .socialicons img:hover {
    transform: scale(1.1);
  }

}

</style>