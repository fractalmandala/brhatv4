<script lang="ts">
import { reveal } from 'svelte-reveal'
import { onMount } from 'svelte'
import Animations from 'textify.js'
import '$lib/styles/anim-rid.css';
import Shape from '$lib/components/logos/RiDShape.svelte'
import '$lib/styles/textify.css'
let textify: {reset: () => void;}, textifyTitle: {reset: () => void;};
let y = 1
const { Textify } = Animations;
const { TextifyTitle } = Animations;

function initTextify() {
  textify = new Textify({
    duration: 900,
    stagger: 150,
    once: false,
    easing: "circInOut"
  });
  textifyTitle = new TextifyTitle({
    duration: 500,
    stagger: 50,
    once: false,
  });
}

onMount(() => {
  initTextify();
  window.addEventListener('beforeunload', refreshPage);
});

function refreshPage() {
  textify.reset();
  textifyTitle.reset();
  initTextify();
}

let isf1 = true
let isf2 = true
let isf3 = true
let isf4 = true




</script>

<svelte:window bind:scrollY={y}/>
<div class="w-box jet">
	<div class="row-of-2 l0 pad4">
		<div class="twobox box1">
			<h3 use:reveal={{ transition: "slide", duration: 1000 }}>
				"We are approaching the power of gods, without the wisdom of gods."<br>
				<cite>Daniel Schmachtenberger</cite>
			</h3>
			<p data-textify>
				Human creation is bringing the ruin of life, species and planet. Introspection and a radical recalibration are our only chance of reversing the situtation. What's needed is a 'wisdom of the gods.'</p><p class="rid" data-textify>This is the most fundamental wicked problem of our times...
			</p>
		</div> 
		<div class="twobox box2">
		
		</div> 
	</div>
	<div class="row-of-2 l3 pad4" style="transform: translateY({-y/4.5}px)">
		<div class="twobox box3">
			<h3 use:reveal={{ transition: "slide", duration: 1000 }}>
				"Study your predecessors' works intently, to see how they solved problems. Try to figure out why they made the design choices they did; this is the most illuminating question to ask yourself."<br>
				<cite>Fred Brooks</cite>
			</h3>
			<p data-textify>
				The next evolution needed in design is that of culture-rooting, because culture is iterative planning, method and creatorship across a vast span of time.
			</p>
			<p data-textify class="rid">	
			Since dharma is the quest for harmony with the natural order- which is ṛta (ऋत)- to draw from dharma in design is effectively ṛta in design.
			</p>
		</div>
		<div class="twobox box4">
			
		</div>
	</div>
	<div class="row-of-2 l7 pad4">
		<div class="twobox box3"><h3 data-textify>In the distant past...</h3>
			<p data-textify>
			The sound instruments of mental scientists converted information to knowledge,
			And engineers of praxis and ritual converted knowledge to utility.
			Dharma is the conversion and manifestation of utility in the cultural context, ie.:
			</p>
			<h2 data-textify class="rid">
				Dharma IS Design
			</h2>
		</div>
	</div>
	<div class="row-of-2 l5 pad4">
		<div class="c-c-c-c box7">
			<h1 use:reveal={{ transition: "slide", duration: 1000 }}>
				Ṛta in Design is a system for modern design thinking and creatorship, informed by the <span data-textify class="rid"> design principles of Dharma.</span>
			</h1>
		</div>
	</div>
				<div class="c-c-c-c logobox" use:reveal={{ transition: "slide"}}>
					<div class="c-c-c-c in-logobox">
						<svg width="100%" height="100%" viewBox="0 0 400 79" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="log-rd">
						<g id="rd-white">
						<path d="M43.1333 2.12936H55.2436V17.9812H63.9503V28.2337H55.2436V56.3097H43.1333V28.2337H34.4266V17.9812H43.1333V2.12936Z" fill="rgba(29,29,29,1)" class="svg-elem-1"></path>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M86.1642 57.0983C82.6288 57.0983 79.4627 56.2308 76.666 54.4957C73.922 52.7607 71.7322 50.3947 70.0964 47.3979C68.5133 44.401 67.7218 40.9835 67.7218 37.1454C67.7218 33.3073 68.5133 29.8898 70.0964 26.893C71.7322 23.8961 73.922 21.5301 76.666 19.7951C79.4627 18.0601 82.6288 17.1926 86.1642 17.1926C88.7498 17.1926 91.0716 17.692 93.1296 18.691C94.5133 19.3459 95.727 20.1703 96.7706 21.1641V17.9812H108.643V56.3096H96.7706V53.2033C95.7594 54.1557 94.5722 54.9546 93.2087 55.5998C91.098 56.5988 88.7498 57.0983 86.1642 57.0983ZM94.8709 43.6912C93.2879 45.3737 91.2036 46.2149 88.6179 46.2149C86.9821 46.2149 85.5046 45.8206 84.1854 45.0319C82.8662 44.2433 81.8372 43.1654 81.0985 41.7985C80.3597 40.4315 79.9904 38.8804 79.9904 37.1454C79.9904 35.3578 80.3597 33.7805 81.0985 32.4135C81.89 31.0465 82.919 29.995 84.1854 29.2589C85.5046 28.4703 87.0085 28.0759 88.6971 28.0759C90.3856 28.0759 91.8632 28.4703 93.1296 29.2589C94.4488 29.995 95.4514 31.0465 96.1374 32.4135C96.8761 33.7805 97.2455 35.3578 97.2455 37.1454C97.2455 39.7743 96.454 41.9562 94.8709 43.6912Z" fill="#272727" class="svg-elem-2"></path>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M124.786 18.8488V56.3097H131.91V18.8488H124.786Z" fill="#272727" class="svg-elem-3"></path>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M167.42 34.4642V56.3098H174.544V33.0446C174.544 30.4683 173.911 28.0498 172.644 25.789C171.378 23.4756 169.637 21.6092 167.42 20.1896C165.257 18.77 162.75 18.0602 159.901 18.0602C157.052 18.0602 154.492 18.7174 152.223 20.0319C150.514 20.9824 149.089 22.2014 147.949 23.6888V18.8489H140.825V56.3098H147.949V34.4642C147.949 32.5714 148.371 30.8889 149.215 29.4168C150.06 27.9447 151.221 26.788 152.698 25.9467C154.176 25.1055 155.864 24.6849 157.764 24.6849C160.613 24.6849 162.935 25.605 164.729 27.4452C166.523 29.2854 167.42 31.625 167.42 34.4642Z" fill="#272727" class="svg-elem-4"></path>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M204.056 57.0983C200.573 57.0983 197.46 56.2571 194.716 54.5746C191.972 52.8396 189.782 50.4999 188.146 47.5556C186.563 44.6113 185.772 41.299 185.772 37.6186C185.772 33.9383 186.563 30.6259 188.146 27.6816C189.782 24.7373 191.972 22.3977 194.716 20.6627C197.46 18.9276 200.573 18.0601 204.056 18.0601C206.853 18.0601 209.386 18.6647 211.655 19.874C213.671 20.9019 215.333 22.3035 216.641 24.0788V0H223.844V56.3097H216.641V51.1873C215.346 52.9182 213.71 54.3102 211.734 55.3633C209.465 56.52 206.906 57.0983 204.056 57.0983ZM211.417 48.7386C209.676 49.8427 207.618 50.3948 205.243 50.3948C202.869 50.3948 200.758 49.8427 198.911 48.7386C197.117 47.6345 195.692 46.1361 194.637 44.2433C193.634 42.298 193.133 40.0635 193.133 37.5398C193.133 35.0687 193.634 32.8867 194.637 30.994C195.692 29.0486 197.117 27.5239 198.911 26.4198C200.705 25.3157 202.79 24.7636 205.164 24.7636C207.539 24.7636 209.597 25.3157 211.338 26.4198C213.132 27.5239 214.531 29.0224 215.533 30.9151C216.588 32.8079 217.116 35.0424 217.116 37.6186C217.116 40.0897 216.615 42.298 215.612 44.2433C214.61 46.1361 213.211 47.6345 211.417 48.7386Z" fill="#272727" class="svg-elem-5"></path>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M239.914 54.5748C242.922 56.2572 246.299 57.0984 250.046 57.0984C253.001 57.0984 255.771 56.5464 258.357 55.4423C260.995 54.3382 263.211 52.7346 265.005 50.6315L260.415 45.9785C259.148 47.4506 257.618 48.5547 255.824 49.2908C254.083 50.0269 252.156 50.3949 250.046 50.3949C247.513 50.3949 245.27 49.8691 243.318 48.8176C241.365 47.7135 239.862 46.1888 238.806 44.2434C238.16 43.0209 237.712 41.6802 237.462 40.2213H266.905C267.063 39.4327 267.169 38.7492 267.222 38.1708C267.274 37.5399 267.301 36.9616 267.301 36.4358C267.301 32.9132 266.536 29.7586 265.005 26.972C263.528 24.1854 261.444 22.0035 258.752 20.4262C256.114 18.8489 253.053 18.0602 249.571 18.0602C245.93 18.0602 242.632 18.9277 239.677 20.6628C236.775 22.3452 234.453 24.6586 232.711 27.6029C231.023 30.5472 230.179 33.8595 230.179 37.5399C230.179 41.2729 231.049 44.6115 232.791 47.5558C234.532 50.5001 236.907 52.8397 239.914 54.5748ZM237.476 34.3064H260.358C260.163 32.756 259.76 31.389 259.148 30.2055C258.251 28.4178 256.985 27.0508 255.349 26.1045C253.713 25.1055 251.734 24.606 249.413 24.606C246.985 24.606 244.848 25.1318 243.001 26.1833C241.154 27.2349 239.73 28.707 238.727 30.5998C238.136 31.7164 237.719 32.952 237.476 34.3064Z" fill="#272727" class="svg-elem-6"></path>
						<path d="M285.437 57.0984C283.326 57.0984 281.321 56.8356 279.421 56.3098C277.574 55.7314 275.859 54.9428 274.276 53.9438C272.693 52.8923 271.321 51.6568 270.16 50.2372L274.751 45.663C276.123 47.3455 277.706 48.6073 279.5 49.4485C281.294 50.2372 283.3 50.6315 285.516 50.6315C287.732 50.6315 289.447 50.2635 290.661 49.5274C291.874 48.7388 292.481 47.6609 292.481 46.2939C292.481 44.9269 291.98 43.8754 290.977 43.1393C290.028 42.3507 288.788 41.7198 287.257 41.2466C285.727 40.7208 284.091 40.2213 282.35 39.7481C280.661 39.2224 279.052 38.5652 277.522 37.7765C275.991 36.9879 274.725 35.91 273.722 34.543C272.772 33.176 272.298 31.3621 272.298 29.1013C272.298 26.8405 272.852 24.8952 273.96 23.2653C275.068 21.5829 276.598 20.2947 278.551 19.4009C280.556 18.5071 282.957 18.0602 285.753 18.0602C288.708 18.0602 291.32 18.586 293.589 19.6375C295.911 20.6365 297.811 22.1612 299.288 24.2117L294.698 28.7859C293.642 27.4189 292.323 26.3674 290.74 25.6313C289.21 24.8952 287.468 24.5272 285.516 24.5272C283.458 24.5272 281.875 24.8952 280.767 25.6313C279.711 26.3148 279.184 27.2874 279.184 28.5493C279.184 29.8111 279.659 30.7838 280.608 31.4673C281.558 32.1508 282.798 32.7291 284.329 33.2023C285.912 33.6755 287.547 34.175 289.236 34.7008C290.925 35.174 292.534 35.8312 294.064 36.6724C295.595 37.5136 296.835 38.644 297.784 40.0636C298.787 41.4832 299.288 43.3496 299.288 45.663C299.288 49.1857 298.022 51.9722 295.489 54.0227C293.009 56.0732 289.658 57.0984 285.437 57.0984Z" fill="#272727" class="svg-elem-7"></path>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M305.76 18.8488V56.3097H312.884V18.8488H305.76Z" fill="#272727" class="svg-elem-8"></path>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M337.392 72.7926C333.54 72.7926 330.11 72.0828 327.102 70.6632C324.147 69.2437 321.772 67.2458 319.978 64.6695L324.569 60.0164C326.099 61.9618 327.92 63.4339 330.03 64.4329C332.141 65.4844 334.648 66.0102 337.55 66.0102C341.402 66.0102 344.436 64.985 346.652 62.9345C348.921 60.9366 350.056 58.2288 350.056 54.8114V49.8241C348.792 51.5472 347.156 52.9204 345.148 53.9438C342.879 55.1005 340.294 55.6789 337.392 55.6789C333.962 55.6789 330.875 54.8639 328.131 53.2341C325.44 51.6042 323.303 49.3697 321.72 46.5305C320.136 43.6388 319.345 40.4053 319.345 36.8301C319.345 33.2549 320.136 30.074 321.72 27.2874C323.303 24.4483 325.44 22.2138 328.131 20.5839C330.875 18.9015 333.962 18.0602 337.392 18.0602C340.347 18.0602 342.959 18.6386 345.228 19.7953C347.194 20.7974 348.803 22.1548 350.056 23.8674V18.8489H357.18V54.8114C357.18 58.3866 356.335 61.5149 354.647 64.1963C353.011 66.8777 350.689 68.9808 347.681 70.5055C344.726 72.0302 341.296 72.7926 337.392 72.7926ZM344.911 47.4769C343.17 48.4759 341.138 48.9753 338.816 48.9753C336.442 48.9753 334.331 48.4759 332.484 47.4769C330.69 46.4254 329.265 44.9795 328.21 43.1393C327.207 41.2991 326.706 39.1961 326.706 36.8301C326.706 34.4642 327.207 32.3874 328.21 30.5998C329.265 28.7596 330.69 27.34 332.484 26.3411C334.278 25.2895 336.363 24.7638 338.737 24.7638C341.112 24.7638 343.17 25.2895 344.911 26.3411C346.652 27.34 347.998 28.7596 348.948 30.5998C349.95 32.3874 350.452 34.4905 350.452 36.909C350.452 39.3275 349.977 41.4569 349.027 43.2971C348.077 45.0847 346.705 46.4779 344.911 47.4769Z" fill="#272727" class="svg-elem-9"></path>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M392.648 34.4642V56.3098H399.771V33.0446C399.771 30.4683 399.138 28.0498 397.872 25.789C396.605 23.4756 394.864 21.6092 392.648 20.1896C390.484 18.77 387.978 18.0602 385.128 18.0602C382.279 18.0602 379.72 18.7174 377.451 20.0319C375.741 20.9824 374.317 22.2014 373.176 23.6888V18.8489H366.053V56.3098H373.176V34.4642C373.176 32.5714 373.599 30.8889 374.443 29.4168C375.287 27.9447 376.448 26.788 377.926 25.9467C379.403 25.1055 381.092 24.6849 382.991 24.6849C385.841 24.6849 388.163 25.605 389.957 27.4452C391.751 29.2854 392.648 31.625 392.648 34.4642Z" fill="#272727" class="svg-elem-10"></path>
						</g>
						<g id="rd-green">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 57.4037V17.6892H14.071V20.2176C16.648 17.9906 19.9905 16.8771 24.0986 16.8771C25.9855 16.8771 27.6029 17.1207 28.9507 17.608C30.3524 18.0953 31.5384 18.8533 32.5088 19.882L24.3412 30.8462C23.9099 30.3589 23.2899 29.9799 22.4812 29.7092C21.7265 29.3843 20.8639 29.2219 19.8935 29.2219C18.0605 29.2219 16.6318 29.7904 15.6075 30.9274C14.5832 32.0103 14.071 33.6346 14.071 35.8003V37.5465L13.9901 47.1506C13.9901 57.4037 4.31862 57.4037 0 57.4037Z" fill="url(#paint0_linear_4_97)" class="svg-elem-11"></path>
						<path d="M128.348 11.3565C127.029 11.3565 125.947 10.9359 125.103 10.0946C124.259 9.20083 123.837 8.09672 123.837 6.7823C123.837 5.52046 124.259 4.46892 125.103 3.6277C125.947 2.73389 127.029 2.28699 128.348 2.28699C129.667 2.28699 130.749 2.73389 131.593 3.6277C132.438 4.46892 132.86 5.52046 132.86 6.7823C132.86 8.09672 132.438 9.20083 131.593 10.0946C130.749 10.9359 129.667 11.3565 128.348 11.3565Z" fill="url(#paint1_linear_4_97)" class="svg-elem-12"></path>
						<path d="M309.322 11.3565C308.002 11.3565 306.921 10.9359 306.076 10.0946C305.232 9.20083 304.81 8.09672 304.81 6.7823C304.81 5.52046 305.232 4.46892 306.076 3.6277C306.921 2.73389 308.002 2.28699 309.322 2.28699C310.641 2.28699 311.722 2.73389 312.567 3.6277C313.411 4.46892 313.833 5.52046 313.833 6.7823C313.833 8.09672 313.411 9.20083 312.567 10.0946C311.722 10.9359 310.641 11.3565 309.322 11.3565Z" fill="url(#paint2_linear_4_97)" class="svg-elem-13"></path>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9901 47.1506L14.071 37.5465V35.8003C14.071 33.6346 14.5832 32.0103 15.6075 30.9274C16.6318 29.7904 18.0605 29.2219 19.8935 29.2219C20.8639 29.2219 21.7265 29.3843 22.4812 29.7092C23.0559 29.9015 23.5353 30.1486 23.9194 30.4504C24.0758 30.5732 24.2164 30.7052 24.3412 30.8462L32.5088 19.882C31.5384 18.8533 30.3524 18.0953 28.9507 17.608C27.6029 17.1207 25.9855 16.8771 24.0986 16.8771C20.2894 16.8771 17.1385 17.8344 14.6457 19.7492C14.4501 19.8994 14.2585 20.0556 14.071 20.2176V17.6892H0V57.4037C0.182399 57.4037 0.374348 57.4037 0.574713 57.403C5.11833 57.3855 13.9901 56.9707 13.9901 47.1506ZM0.574713 56.8282C2.74191 56.8191 5.79306 56.7184 8.38604 55.5948C9.78825 54.9872 11.0355 54.0882 11.9353 52.7565C12.8341 51.4261 13.4154 49.6208 13.4154 47.1506V47.1458L13.4963 37.5465V35.8003C13.4963 33.5568 14.0255 31.7669 15.1852 30.5375C16.3396 29.2593 17.9354 28.6471 19.8935 28.6471C20.919 28.6471 21.8536 28.8174 22.6863 29.1718C23.2936 29.3773 23.8239 29.647 24.2628 29.9893L31.7512 19.9371C30.9141 19.1491 29.92 18.5534 28.7619 18.1508L28.7552 18.1485C27.4864 17.6898 25.9388 17.4518 24.0986 17.4518C20.0987 17.4518 16.8988 18.5334 14.4468 20.6525L13.4963 21.4739V18.2639H0.574713V56.8282Z" fill="url(#paint3_linear_4_97)" class="svg-elem-14"></path>
						<path class="inf inf-fill svg-elem-15" d="M30.6301 78.0587C27.665 78.0587 25.6078 76.0937 23.8689 73.925C22.1301 76.0937 20.0728 78.0587 17.1077 78.0587C13.6325 78.0587 10.3465 74.8293 10.3465 71.4139C10.3465 67.9984 13.6325 64.769 17.1077 64.769C20.0728 64.769 22.1301 66.7341 23.8689 68.9027C25.6078 66.7341 27.665 64.769 30.6301 64.769C34.1054 64.769 37.3914 67.9984 37.3914 71.4139C37.3914 74.8293 34.1054 78.0587 30.6301 78.0587ZM25.7805 71.4139C27.2803 73.3765 28.7659 75.0383 30.6301 75.0383C32.5817 75.0383 34.3181 73.0117 34.3181 71.4139C34.3181 69.8161 32.5817 67.7894 30.6301 67.7894C28.7665 67.7894 27.2809 69.4512 25.7805 71.4139ZM17.1077 67.7894C15.1562 67.7894 13.4198 69.8161 13.4198 71.4139C13.4198 73.0117 15.1562 75.0383 17.1077 75.0383C18.9714 75.0383 20.457 73.3765 21.9574 71.4139C20.457 69.4512 18.9714 67.7894 17.1077 67.7894Z" fill="url(#paint4_linear_4_97)"></path>
						<path class="circ inf-circle svg-elem-16" d="M13.4442 71.4138C13.4442 75.0888 10.4346 78.0681 6.72211 78.0681C3.00959 78.0681 0 75.0888 0 71.4138C0 67.7387 3.00959 64.7595 6.72211 64.7595C10.4346 64.7595 13.4442 67.7387 13.4442 71.4138Z" fill="url(#paint6_linear_4_97)"></path>
						<path class="inf inf-outline svg-elem-17" fill-rule="evenodd" clip-rule="evenodd" d="M23.8689 73.0063L24.3173 73.5655C26.0443 75.7193 27.9509 77.484 30.6301 77.484C32.1917 77.484 33.7431 76.7551 34.9111 75.6072C36.0796 74.4589 36.8166 72.9386 36.8166 71.4139C36.8166 69.8892 36.0796 68.3689 34.9111 67.2206C33.7431 66.0726 32.1917 65.3437 30.6301 65.3437C27.9509 65.3437 26.0443 67.1085 24.3173 69.2623L23.8689 69.8214L23.4206 69.2623C21.6936 67.1085 19.787 65.3437 17.1077 65.3437C15.5462 65.3437 13.9948 66.0726 12.8267 67.2206C11.6583 68.3689 10.9212 69.8892 10.9212 71.4139C10.9212 72.9386 11.6583 74.4589 12.8267 75.6072C13.9948 76.7551 15.5462 77.484 17.1077 77.484C19.787 77.484 21.6936 75.7193 23.4206 73.5655L23.8689 73.0063ZM25.0572 71.4138L25.3239 71.0648C26.0759 70.0811 26.8556 69.1297 27.7009 68.4244C28.5511 67.7149 29.5149 67.2147 30.6301 67.2147C31.8045 67.2147 32.8673 67.8197 33.6206 68.6045C34.3686 69.3838 34.8928 70.4253 34.8928 71.4139C34.8928 72.4025 34.3686 73.444 33.6206 74.2233C32.8673 75.0081 31.8045 75.6131 30.6301 75.6131C29.5147 75.6131 28.5507 75.1129 27.7004 74.4034C26.8551 73.698 26.0756 72.7466 25.3239 71.7628L25.0572 71.4138ZM22.6808 71.4139L22.4139 71.7629C21.6619 72.7466 20.8823 73.698 20.037 74.4034C19.1867 75.1128 18.2229 75.6131 17.1077 75.6131C15.9333 75.6131 14.8706 75.0081 14.1173 74.2233C13.3693 73.444 12.8451 72.4025 12.8451 71.4139C12.8451 70.4253 13.3693 69.3838 14.1173 68.6045C14.8706 67.8197 15.9333 67.2147 17.1077 67.2147C18.2229 67.2147 19.1867 67.7149 20.037 68.4244C20.8823 69.1297 21.6619 70.0811 22.4139 71.0648L22.6808 71.4139ZM23.8689 73.925C23.7465 74.0777 23.6226 74.2293 23.4968 74.3793C21.836 76.3605 19.8641 78.0587 17.1077 78.0587C13.6325 78.0587 10.3465 74.8293 10.3465 71.4139C10.3465 67.9984 13.6325 64.769 17.1077 64.769C19.8641 64.769 21.836 66.4672 23.4968 68.4485C23.6226 68.5985 23.7465 68.7501 23.8689 68.9027C23.9913 68.7501 24.1153 68.5985 24.241 68.4485C25.9019 66.4672 27.8737 64.769 30.6301 64.769C34.1054 64.769 37.3914 67.9984 37.3914 71.4139C37.3914 74.8293 34.1054 78.0587 30.6301 78.0587C27.8737 78.0587 25.9019 76.3605 24.241 74.3793C24.1153 74.2293 23.9913 74.0777 23.8689 73.925ZM21.9574 71.4139C20.457 69.4512 18.9714 67.7894 17.1077 67.7894C15.1562 67.7894 13.4198 69.8161 13.4198 71.4139C13.4198 73.0117 15.1562 75.0383 17.1077 75.0383C18.9714 75.0383 20.457 73.3765 21.9574 71.4139ZM30.6301 75.0383C28.7659 75.0383 27.2803 73.3765 25.7805 71.4139C27.2809 69.4512 28.7665 67.7894 30.6301 67.7894C32.5817 67.7894 34.3181 69.8161 34.3181 71.4139C34.3181 73.0117 32.5817 75.0383 30.6301 75.0383Z" fill="url(#paint7_linear_4_97)"></path>
						</g>
						</g>
						<defs>
						<linearGradient id="paint0_linear_4_97" x1="156.917" y1="2.28699" x2="156.917" y2="78.0681" gradientUnits="userSpaceOnUse">
						<stop stop-color="#53DD6C"></stop>
						<stop offset="1" stop-color="#10C56D"></stop>
						</linearGradient>
						<linearGradient id="paint1_linear_4_97" x1="156.917" y1="2.28699" x2="156.917" y2="78.0681" gradientUnits="userSpaceOnUse">
						<stop stop-color="#53DD6C"></stop>
						<stop offset="1" stop-color="#10C56D"></stop>
						</linearGradient>
						<linearGradient id="paint2_linear_4_97" x1="156.917" y1="2.28699" x2="156.917" y2="78.0681" gradientUnits="userSpaceOnUse">
						<stop stop-color="#53DD6C"></stop>
						<stop offset="1" stop-color="#10C56D"></stop>
						</linearGradient>
						<linearGradient id="paint3_linear_4_97" x1="156.917" y1="2.28699" x2="156.917" y2="78.0681" gradientUnits="userSpaceOnUse">
						<stop stop-color="#53DD6C"></stop>
						<stop offset="1" stop-color="#10C56D"></stop>
						</linearGradient>
						<linearGradient id="paint4_linear_4_97" x1="156.917" y1="2.28699" x2="156.917" y2="78.0681" gradientUnits="userSpaceOnUse">
						<stop stop-color="#53DD6C"></stop>
						<stop offset="1" stop-color="#10C56D"></stop>
						</linearGradient>
						<linearGradient id="paint5_linear_4_97" x1="156.917" y1="2.28699" x2="156.917" y2="78.0681" gradientUnits="userSpaceOnUse">
						<stop stop-color="#53DD6C"></stop>
						<stop offset="1" stop-color="#10C56D"></stop>
						</linearGradient>
						<linearGradient id="paint6_linear_4_97" x1="156.917" y1="2.28699" x2="156.917" y2="78.0681" gradientUnits="userSpaceOnUse">
						<stop stop-color="#53DD6C"></stop>
						<stop offset="1" stop-color="#10C56D"></stop>
						</linearGradient>
						<linearGradient id="paint7_linear_4_97" x1="156.917" y1="2.28699" x2="156.917" y2="78.0681" gradientUnits="userSpaceOnUse">
						<stop stop-color="#53DD6C"></stop>
						<stop offset="1" stop-color="#10C56D"></stop>
						</linearGradient>
						</defs>
					</svg>
					</div>
				</div>
	<div class="row-of-2 intro">
		<div class="twobox box11">
			<h3 use:reveal={{ transition: "slide"}}>Introduction to Ṛta in Design, Part 1</h3>
		</div>
		<div class="twobox box12">
			<h3 use:reveal={{ transition: "slide"}}>Introduction to Ṛta in Design, Part 2</h3>
		</div>
	</div>
	<div class="row-of-4 links pad4">
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<div class="c-c-c-c fourbox four-1" use:reveal={{ transition: "slide", duration: 600 }}>
			<h5>Framework of Ṛta in Design</h5>
		</div>
		<div class="c-c-c-c fourbox four-2" use:reveal={{ transition: "slide", duration: 600 }}>
			<h5>Principles</h5>
		</div>
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<div class="c-c-c-c fourbox four-3" use:reveal={{ transition: "slide", duration: 600 }}>
			<h5>Phases</h5>
		</div>
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<div class="c-c-c-c fourbox four-4" use:reveal={{ transition: "slide", duration: 600 }}>
			<h5>Tools and Resources</h5>
		</div>
	</div>

</div>

<style>

.box1, .box3 {
	border-left: 8px solid #10c56d;
}

.box7 h1 {
	text-transform: uppercase;
}

.box11 h3, .box12 h3 {
	color: white;
}


/*
.panel1 {
	background-image: url('/images/rid/panel1.webp');
	justify-content: center;
	align-items: center
}
.panel2 {
	background-image: url('/images/rid/panel2.webp');
justify-content: center;
	align-items: center
}
.panel3 {
	background-image: url('/images/rid/panel3.webp');
justify-content: center;
	align-items: center
}
.panel4 {
	background-image: url('/images/rid/panel4.webp');
	justify-content: center;
	align-items: center
}
*/


@keyframes motifcomes {
	0% { opacity: 0; transform: translateX(400px);}
100% { opacity: 1; transform: translateX(0);}
}

@keyframes icome {
	0% { opacity: 0;}
100% { opacity: 1;}
}

.inf {
	transition: all 0.5s var(--cube1);
}


.fourbox {
	transition: all 0.33s var(--cube2);
	position: relative;
	justify-content: center;
	align-items: center;
}

.fourbox::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 0%;
	height: 100%;
	content: '';
	background: rgba(0,0,0,0.7);
	z-index: 1
}

.fourbox:hover::after {
	width: 100%;
}

.fourbox h5 {z-index: 5; color: white;	transition: all 0.33s var(--cube2); opacity: 0;}

.fourbox:hover h5 {opacity: 1;}


.four-1, .four-2, .four-3, .four-4, .box11, .box12, .in-logobox {
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	transform-origin: center center;
}

.in-logobox {
	background-image: url('/images/rid/infinitywall.webp');
}

.box11 {
	background-image: url('/images/rid/newrid.png');
}

.box12 {
	background-image: url('/images/rid/col2panel.webp');
}



.four-1{ 
	background-image: url('/images/rid/panel1.webp');
}

.four-2{ 
	background-image: url('/images/rid/panel2.webp');
}

.four-3{ 
	background-image: url('/images/rid/panel3.webp');
}

.four-4{ 
	background-image: url('/images/rid/panel4.webp');
}

#rd-white path { fill: white !important;}
cite { color: #878787;}

@media screen and (min-width: 900px) {
	.l3 { height: 60vh; align-items: flex-end;}
	.l0 { min-height: 100vh;  align-items: center;}
	.logobox svg { width: 60%; object-fit: contain; margin-left: auto; margin-right: auto;}
	.logobox { width: 100vw; overflow: visible; align-items: center; justify-content: center; height: 33vh;}
	.in-logobox { width: 100%; height: 100%; padding: 0 6vw;}
	.box1, .box3 { width: 75%; padding-left: 64px;}
	.box2, .box4 {width: 20%;}
	.row-of-4 { height: 46vh; align-items: center; padding-bottom: 4vh; justify-content: space-between;}
	.links .fourbox { height: 100%;}
	.l5 { height: 100vh; width: 100vw;}
	.intro { height: 46vh; width: 100vw;}
	.four-1:hover, .four-2:hover, .four-3:hover, .four-4:hover {
		width: 60%;
	}
	.intro {
		margin-left: 6vw;
		margin-right: 6vw;
		width: 88vw;
		align-items: center;
	}
	.box11, .box12 { height: 88%; align-items: center; justify-content: center; padding-left: 32px;}
	.box11 h3, .box12 h3 {
		background: rgba(0,0,0,0.8);
		padding: 8px;
	}
 
}

@media screen and (max-width: 899px) and (min-width: 576px) {
	.l0, .l3 { height: 100vh; align-items: center; }
	.box1, .box3 { width: 90%; padding-left: 48px;}
	.logobox svg { width: 64%; object-fit: contain; overflow: visible;margin-left: auto; margin-right: auto; }
	.logobox { width: 100vw; overflow: visible;align-items: center; justify-content: center; height: 24vh;}
	.in-logobox { width: 100%; height: 100%;}
	.row-of-4 { height: 100%; flex-wrap: wrap; justify-content: space-between; padding-bottom: 32px;}
	.fourbox { height: 48vh; width: calc(50% - 16px);}
	.intro { padding: 4vw 4vw; gap: 24px;}
	.intro .twobox { height: 25vh; padding-left: 16px;}
	.links { align-items: center; }
	
}

@media screen and (max-width: 575px){
	.l0 { min-height: 120vh; align-items: center; width: 100%; }
 	.l3 { height: 100%; align-items: center; width: 100%;}
	.box1, .box3 { width: 100%; padding-left: 24px;}
	.logobox svg { width: 70%; object-fit: contain; overflow: hidden; margin-left: auto; margin-right: auto; }
	.logobox { width: 100vw; overflow: visible; align-items: center; justify-content: center; height: 30vh;}
	.in-logobox { width: 100%; height: 100%;}
	.row-of-4 { height: 100%; flex-wrap: wrap; justify-content: space-between; gap: 16px;}
	.fourbox { height: calc(25vh); width: 100%;}
	.row-of-2 { justify-content: center; padding: 4vw 2vw; width: 100%; }
	.intro .twobox { height: 25vh; padding-left: 16px;}
	.links { align-items: center; padding-bottom: 24px;}
	
}

/***************************************************
 * Generated by SVG Artista on 2/14/2023, 3:47:00 PM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/

@-webkit-keyframes animate-svg-fill-1 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

@keyframes animate-svg-fill-1 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

.svg-elem-1 {
  -webkit-animation: animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
          animation: animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
}

@-webkit-keyframes animate-svg-fill-2 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

@keyframes animate-svg-fill-2 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

.svg-elem-2 {
  -webkit-animation: animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
          animation: animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
}

@-webkit-keyframes animate-svg-fill-3 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

@keyframes animate-svg-fill-3 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

.svg-elem-3 {
  -webkit-animation: animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
          animation: animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
}

@-webkit-keyframes animate-svg-fill-4 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

@keyframes animate-svg-fill-4 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

.svg-elem-4 {
  -webkit-animation: animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
          animation: animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
}

@-webkit-keyframes animate-svg-fill-5 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

@keyframes animate-svg-fill-5 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

.svg-elem-5 {
  -webkit-animation: animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s both;
          animation: animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s both;
}

@-webkit-keyframes animate-svg-fill-6 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

@keyframes animate-svg-fill-6 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

.svg-elem-6 {
  -webkit-animation: animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
          animation: animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
}

@-webkit-keyframes animate-svg-fill-7 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

@keyframes animate-svg-fill-7 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

.svg-elem-7 {
  -webkit-animation: animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s both;
          animation: animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s both;
}

@-webkit-keyframes animate-svg-fill-8 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

@keyframes animate-svg-fill-8 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

.svg-elem-8 {
  -webkit-animation: animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
          animation: animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
}

@-webkit-keyframes animate-svg-fill-9 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

@keyframes animate-svg-fill-9 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

.svg-elem-9 {
  -webkit-animation: animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
          animation: animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
}

@-webkit-keyframes animate-svg-fill-10 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

@keyframes animate-svg-fill-10 {
  0% {
    fill: transparent;
  }

  100% {
    fill: #272727;
  }
}

.svg-elem-10 {
  -webkit-animation: animate-svg-fill-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s both;
          animation: animate-svg-fill-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s both;
}

@-webkit-keyframes animate-svg-fill-11 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#paint0_linear_4_97");
  }
}

@keyframes animate-svg-fill-11 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#paint0_linear_4_97");
  }
}

.svg-elem-11 {
  -webkit-animation: animate-svg-fill-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
          animation: animate-svg-fill-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
}

@-webkit-keyframes animate-svg-fill-12 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#paint1_linear_4_97");
  }
}

@keyframes animate-svg-fill-12 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#paint1_linear_4_97");
  }
}

.svg-elem-12 {
  -webkit-animation: animate-svg-fill-12 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s both;
          animation: animate-svg-fill-12 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s both;
}

@-webkit-keyframes animate-svg-fill-13 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#paint2_linear_4_97");
  }
}

@keyframes animate-svg-fill-13 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#paint2_linear_4_97");
  }
}

.svg-elem-13 {
  -webkit-animation: animate-svg-fill-13 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s both;
          animation: animate-svg-fill-13 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s both;
}

@-webkit-keyframes animate-svg-fill-14 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#paint3_linear_4_97");
  }
}

@keyframes animate-svg-fill-14 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#paint3_linear_4_97");
  }
}

.svg-elem-14 {
  -webkit-animation: animate-svg-fill-14 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s both;
          animation: animate-svg-fill-14 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s both;
}

@-webkit-keyframes animate-svg-fill-15 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#paint4_linear_4_97");
  }
}

@keyframes animate-svg-fill-15 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#paint4_linear_4_97");
  }
}

.svg-elem-15 {
  -webkit-animation: animate-svg-fill-15 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.2s both;
          animation: animate-svg-fill-15 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.2s both;
}

@-webkit-keyframes animate-svg-fill-16 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#paint6_linear_4_97");
  }
}

@keyframes animate-svg-fill-16 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#paint6_linear_4_97");
  }
}

.svg-elem-16 {
  -webkit-animation: animate-svg-fill-16 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.3s both;
          animation: animate-svg-fill-16 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.3s both;
}

@-webkit-keyframes animate-svg-fill-17 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#paint7_linear_4_97");
  }
}

@keyframes animate-svg-fill-17 {
  0% {
    fill: transparent;
  }

  100% {
    fill: url("#paint7_linear_4_97");
  }
}

.svg-elem-17 {
  -webkit-animation: animate-svg-fill-17 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4000000000000004s both;
          animation: animate-svg-fill-17 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2.4000000000000004s both;
}




</style>