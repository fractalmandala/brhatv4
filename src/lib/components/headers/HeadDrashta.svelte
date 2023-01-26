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
						<svg width="300" height="54" viewBox="0 0 300 54" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="log-dra">
							<path id="b" d="M8.26485 37.0754V38.0529H0.5V1.06155H8.471V14.2528V15.1646L9.2398 14.6744C9.70688 14.3766 10.2122 14.1175 10.7567 13.8974L10.7568 13.8975L10.7667 13.8932C12.0757 13.3309 13.4861 13.0478 15.0033 13.0478C17.3623 13.0478 19.4173 13.6009 21.1853 14.6931L21.1853 14.6931L21.1912 14.6967C22.9632 15.758 24.3433 17.2499 25.3339 19.1856L25.3338 19.1857L25.337 19.1916C26.3598 21.126 26.8773 23.337 26.8773 25.837C26.8773 28.3011 26.3603 30.4951 25.337 32.4303L25.3355 32.4331C24.3449 34.3355 22.9629 35.8308 21.1853 36.9289C19.4173 38.021 17.3623 38.5741 15.0033 38.5741C13.456 38.5741 12.0337 38.2754 10.7294 37.6831C10.1237 37.3919 9.5695 37.0561 9.06595 36.6762L8.26485 36.072V37.0754ZM10.5707 30.8002L10.5781 30.8047L10.5857 30.8088C11.4239 31.271 12.3679 31.4964 13.405 31.4964C14.4468 31.4964 15.3818 31.2512 16.1922 30.7455C17.0224 30.2486 17.6693 29.5757 18.1244 28.7323L18.1245 28.7324L18.1287 28.7242C18.582 27.8461 18.803 26.8624 18.803 25.7849C18.803 24.741 18.5815 23.7904 18.1266 22.9457C17.6724 22.0676 17.0244 21.3735 16.1877 20.8738C15.347 20.3716 14.3974 20.1257 13.3535 20.1257C12.3094 20.1257 11.3599 20.3716 10.5191 20.8738L10.519 20.8737L10.5103 20.8792C9.71357 21.3777 9.08683 22.0508 8.63408 22.8895L8.63406 22.8895C8.1763 23.7378 7.95543 24.7079 7.95543 25.7849C7.95543 26.8943 8.17525 27.8959 8.62978 28.7764L8.62971 28.7764L8.63406 28.7845C9.09 29.6293 9.73837 30.3031 10.5707 30.8002Z" fill="white" stroke="white" class="svg-elem-1"></path>
							<path id="dra-ri" d="M36.0428 37.7831C34.4297 38.4866 32.5346 38.5699 31.1357 38.5797V13.5634H39.2941V14.7197V15.8173L40.1222 15.097C41.6909 13.7325 43.7419 13.0313 46.3207 13.0313C47.508 13.0313 48.4997 13.1859 49.3078 13.48L49.3078 13.48L49.3137 13.4821C50.0147 13.7274 50.6199 14.0839 51.1347 14.5511L46.4015 20.9465C46.1259 20.7498 45.8051 20.5929 45.4473 20.4707C44.888 20.232 44.2637 20.1186 43.5838 20.1186C42.2808 20.1186 41.2052 20.5297 40.4257 21.398C39.6419 22.2348 39.2941 23.4425 39.2941 24.9283V26.0701V26.0722L39.2415 32.3598H39.2415V32.364C39.2415 33.9629 38.868 35.1208 38.2989 35.9686C37.7291 36.8173 36.9383 37.3925 36.0428 37.7831Z" fill="#FE4A49" stroke="#FE4A49" class="svg-elem-2"></path>
							<path id="h" d="M78.3363 22.0848V38.0529H70.3651V24.1694C70.3651 22.8892 69.9899 21.8267 69.1849 21.0511C68.3952 20.2554 67.388 19.8651 66.2045 19.8651C65.4079 19.8651 64.6727 20.0384 64.0094 20.3933L64.0093 20.3931L63.9983 20.3994C63.368 20.7576 62.8731 21.2585 62.5195 21.8938C62.1593 22.5408 61.9924 23.3068 61.9924 24.1694V38.0529H54.0212V1.06155H61.9924V14.6044V15.6268L62.7994 14.9991C63.162 14.717 63.5513 14.4634 63.9674 14.2385L63.9675 14.2386L63.9754 14.2341C65.3676 13.4487 66.999 13.0478 68.8856 13.0478C70.8441 13.0478 72.5091 13.4501 73.8986 14.2341L73.8985 14.2343L73.9108 14.2408C75.342 14.9968 76.4205 16.0412 77.1616 17.3765L77.1615 17.3766L77.1661 17.3845C77.9411 18.7226 78.3363 20.2842 78.3363 22.0848Z" fill="white" stroke="white" class="svg-elem-3"></path>
							<path id="a" d="M88.1256 36.9312C86.3823 35.8339 85.016 34.3386 84.0243 32.4346C83.034 30.4986 82.5333 28.303 82.5333 25.837C82.5333 23.3345 83.0347 21.1213 84.0251 19.1856C85.0169 17.2475 86.3816 15.7553 88.1197 14.6945L88.1198 14.6945L88.1256 14.6909C89.8607 13.5988 91.8465 13.0478 94.0979 13.0478C95.6154 13.0478 96.9885 13.331 98.2235 13.8894L98.2235 13.8895L98.2336 13.8938C99.0053 14.2225 99.6822 14.6383 100.27 15.1399L101.094 15.8441V14.7597V13.569H108.911V38.0529H101.094V36.8379V35.7605L100.272 36.456C99.681 36.9552 99 37.3813 98.2235 37.7326C96.9886 38.291 95.6154 38.5741 94.0979 38.5741C91.8465 38.5741 89.8607 38.0231 88.1256 36.9312ZM88.1256 36.9312L87.8593 37.3543L88.1256 36.9312ZM93.2227 30.7481L93.2227 30.7481C94.0607 31.2485 94.9921 31.4964 96.0055 31.4964C97.604 31.4964 98.9277 30.965 99.9285 29.879C100.955 28.8008 101.455 27.4213 101.455 25.7849C101.455 24.7077 101.234 23.7379 100.777 22.8901L100.777 22.8892C100.321 22.0461 99.6736 21.3732 98.8443 20.8764C98.0332 20.3707 97.0997 20.1257 96.0571 20.1257C95.013 20.1257 94.0637 20.3716 93.2227 20.8737L93.2227 20.8736L93.2138 20.8792C92.4155 21.3787 91.7744 22.0683 91.2898 22.9351L91.2898 22.9351L91.2862 22.9417C90.8298 23.7874 90.6076 24.7393 90.6076 25.7849C90.6076 26.8624 90.8286 27.8461 91.2819 28.7242L91.2819 28.7243L91.2862 28.7323C91.7421 29.5771 92.3903 30.2509 93.2227 30.7481Z" fill="white" stroke="white" class="svg-elem-4"></path>
							<path id="t" d="M118.599 20.6257V20.1257H118.099H113.032V13.569H118.099H118.599V13.069V3.0419H126.57V13.069V13.569H127.07H132.139V20.1257H127.07H126.57V20.6257V38.0529H118.599V20.6257Z" fill="white" stroke="white" class="svg-elem-5"></path>
							<g id="d">
							<path d="M136.946 38.4254V13.0632H149.166C153.437 13.0632 156.723 14.1803 159.024 16.4146C161.326 18.6187 162.477 21.7286 162.477 25.7443C162.477 29.76 161.326 32.885 159.024 35.1193C156.723 37.3234 153.437 38.4254 149.166 38.4254H136.946ZM145.941 31.7678H149.076C150.62 31.7678 151.695 31.2697 152.301 30.2733C152.937 29.2467 153.255 27.7371 153.255 25.7443C153.255 23.7516 152.937 22.257 152.301 21.2606C151.695 20.2341 150.62 19.7208 149.076 19.7208H145.941V31.7678Z" fill="white" class="svg-elem-6"></path>
							<path d="M149.166 37.9254H137.446V13.5632H149.166C153.351 13.5632 156.495 14.6565 158.676 16.7734L158.679 16.7758C160.858 18.8624 161.977 21.8274 161.977 25.7443C161.977 29.6602 160.858 32.6418 158.677 34.7593C156.497 36.8467 153.352 37.9254 149.166 37.9254ZM145.441 31.7678V32.2678H145.941H149.076C150.73 32.2678 152.001 31.7268 152.727 30.535C153.434 29.3934 153.755 27.7749 153.755 25.7443C153.755 23.7189 153.435 22.1134 152.727 20.999C152.004 19.7799 150.734 19.2208 149.076 19.2208H145.941H145.441V19.7208V31.7678Z" stroke="white" class="svg-elem-7"></path>
							</g>
							<path id="r" d="M185.583 29.4175L191.056 37.9254H182.906L178.381 29.9363L178.237 29.6827H177.946H175.255H174.755V30.1827V37.9254H166.76V13.5632H179.979C183.368 13.5632 185.907 14.2901 187.665 15.6751L187.665 15.6751L187.668 15.6775C189.435 17.0472 190.337 19.0187 190.337 21.6682C190.337 24.2852 189.436 26.2425 187.669 27.6133C187.124 28.0338 186.505 28.392 185.808 28.6864L185.261 28.9178L185.583 29.4175ZM174.755 24.7479V25.2479H175.255H178.662C179.806 25.2479 180.753 25.0129 181.4 24.444L181.401 24.4428C182.085 23.8364 182.387 22.9546 182.387 21.8947C182.387 20.8186 182.093 19.928 181.401 19.3459C180.754 18.7463 179.806 18.4961 178.662 18.4961H175.255H174.755V18.9961V24.7479Z" fill="white" stroke="white" class="svg-elem-8"></path>
							<g id="a2">
							<path d="M191.828 38.4254L200.868 13.0632H211.861L220.856 38.4254H211.816L210.499 33.7606H201.776L200.413 38.4254H191.828ZM203.457 27.8729H208.863L206.228 19.1773L203.457 27.8729Z" fill="white" class="svg-elem-9"></path>
							<path d="M210.98 33.6247L210.877 33.2606H210.499H201.776H201.401L201.296 33.6204L200.039 37.9254H192.537L201.22 13.5632H211.508L220.148 37.9254H212.194L210.98 33.6247ZM202.981 27.7211L202.773 28.3729H203.457H208.863H209.537L209.342 27.7279L206.707 19.0323L206.24 17.4928L205.752 19.0255L202.981 27.7211Z" stroke="white" class="svg-elem-10"></path>
							</g>
							<g id="s">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M226.791 38.0178C228.73 38.5311 231.001 38.7877 233.606 38.7877C236.089 38.7877 238.239 38.4254 240.056 37.7008C241.874 36.9761 243.282 35.9496 244.281 34.6211C245.281 33.2624 245.78 31.6773 245.78 29.8657C245.78 28.507 245.478 27.3747 244.872 26.4689C244.296 25.533 243.448 24.7932 242.328 24.2497C241.238 23.6761 239.905 23.2685 238.33 23.0269L234.514 22.3929C233.787 22.2419 233.151 22.1211 232.606 22.0305C232.061 21.9098 231.622 21.7588 231.289 21.5777C230.986 21.3663 230.834 21.0946 230.834 20.7624C230.834 20.2793 231.077 19.8717 231.561 19.5396C232.076 19.1773 232.864 18.9961 233.924 18.9961C235.074 18.9961 236.089 19.1018 236.967 19.3132C237.846 19.4943 238.694 19.8114 239.511 20.2642C240.359 20.7171 241.283 21.3361 242.282 22.1211L245.871 16.324C244.781 15.5088 243.645 14.8295 242.464 14.286C241.283 13.7425 239.996 13.35 238.603 13.1085C237.24 12.8367 235.65 12.7009 233.833 12.7009C231.349 12.7009 229.199 13.0481 227.382 13.7425C225.565 14.437 224.157 15.4333 223.157 16.7317C222.158 18.03 221.658 19.5849 221.658 21.3965C221.658 22.8458 221.976 24.0837 222.612 25.1102C223.278 26.1368 224.217 26.9671 225.429 27.6012C226.67 28.205 228.154 28.6277 229.88 28.8693L233.696 29.4128C234.272 29.4732 234.772 29.5788 235.196 29.7298C235.65 29.8506 235.998 30.0166 236.24 30.228C236.483 30.4091 236.604 30.6658 236.604 30.9979C236.604 31.2998 236.483 31.5716 236.24 31.8131C236.028 32.0245 235.695 32.1905 235.241 32.3113C234.787 32.4019 234.211 32.4472 233.515 32.4472C231.758 32.4472 230.168 32.2207 228.745 31.7678C227.352 31.2847 226.049 30.5148 224.838 29.4581L221.34 35.3004C223.036 36.5685 224.853 37.4743 226.791 38.0178Z" fill="white" class="svg-elem-11"></path>
							<path d="M222.004 35.1653L224.966 30.2171C226.092 31.119 227.297 31.7951 228.581 32.2402L228.581 32.2404L228.593 32.2443C230.073 32.7153 231.716 32.9472 233.515 32.9472C234.23 32.9472 234.841 32.901 235.339 32.8017L235.354 32.7986L235.37 32.7945C235.865 32.6629 236.293 32.4663 236.593 32.1672C236.916 31.8455 237.104 31.4508 237.104 30.9979C237.104 30.5324 236.927 30.1245 236.555 29.8392C236.241 29.5699 235.825 29.3819 235.344 29.2519C234.881 29.0891 234.35 28.9792 233.758 28.9165L229.951 28.3743L229.95 28.3741C228.266 28.1385 226.837 27.7289 225.654 27.1548C224.514 26.5572 223.647 25.785 223.034 24.8425C222.458 23.9104 222.158 22.7693 222.158 21.3965C222.158 19.6829 222.628 18.2382 223.553 17.0366C224.487 15.8241 225.813 14.8773 227.56 14.2096C229.307 13.542 231.394 13.2009 233.833 13.2009C235.626 13.2009 237.182 13.3351 238.505 13.5988L238.505 13.599L238.517 13.6011C239.871 13.8359 241.117 14.2164 242.255 14.7402C243.271 15.2074 244.253 15.7787 245.202 16.4548L242.149 21.3873C241.3 20.7479 240.501 20.226 239.75 19.825C238.894 19.351 238.002 19.0169 237.076 18.8251C236.153 18.6037 235.1 18.4961 233.924 18.4961C232.825 18.4961 231.915 18.6804 231.276 19.1289C230.691 19.5312 230.334 20.0786 230.334 20.7624C230.334 21.2782 230.583 21.695 231.003 21.9877L231.025 22.0036L231.05 22.0169C231.439 22.2282 231.927 22.3921 232.498 22.5187L232.511 22.5216L232.524 22.5238C233.061 22.613 233.69 22.7324 234.412 22.8824L234.422 22.8845L234.432 22.8861L238.248 23.5202L238.248 23.5202L238.254 23.5211C239.79 23.7566 241.066 24.1507 242.095 24.6922L242.102 24.696L242.11 24.6996C243.156 25.2072 243.927 25.8865 244.446 26.7308L244.451 26.7389L244.456 26.7469C244.995 27.5522 245.28 28.5814 245.28 29.8657C245.28 31.578 244.811 33.0568 243.88 34.3226C242.945 35.5648 241.617 36.54 239.871 37.2363C238.127 37.9321 236.042 38.2877 233.606 38.2877C231.034 38.2877 228.808 38.0343 226.923 37.5354C225.186 37.0479 223.546 36.2591 222.004 35.1653Z" stroke="white" class="svg-elem-12"></path>
							</g>
							<path id="t2" d="M265.002 19.3566H264.502V19.8566V37.9254H256.371V19.8566V19.3566H255.871H247.967V13.5632H272.952V19.3566H265.002Z" fill="white" stroke="white" class="svg-elem-13"></path>
							<path id="a3" d="M289.915 33.6247L289.812 33.2606H289.434H280.712H280.337L280.232 33.6204L278.974 37.9254H271.472L280.156 13.5632H290.443L299.084 37.9254H291.13L289.915 33.6247ZM281.916 27.7211L281.708 28.3729H282.392H287.798H288.472L288.277 27.7279L285.642 19.0323L285.176 17.4928L284.687 19.0255L281.916 27.7211ZM293.34 5.50162V9.89109H277.259V5.50162H293.34Z" fill="white" stroke="white" class="svg-elem-14"></path>
							<g id="dot2">
							<path d="M233.878 48.5703C232.334 48.5703 231.168 48.2382 230.38 47.5739C229.623 46.9097 229.245 45.9133 229.245 44.5848C229.245 43.2865 229.623 42.3052 230.38 41.641C231.168 40.9767 232.334 40.6446 233.878 40.6446C235.453 40.6446 236.634 40.9767 237.422 41.641C238.239 42.3052 238.648 43.2865 238.648 44.5848C238.648 45.9133 238.239 46.9097 237.422 47.5739C236.634 48.2382 235.453 48.5703 233.878 48.5703Z" fill="#FE4A49" class="svg-elem-15"></path>
							<path d="M237.099 42.0232L237.099 42.0232L237.106 42.0291C237.78 42.5765 238.148 43.3987 238.148 44.5848C238.148 45.8056 237.778 46.6406 237.106 47.1859L237.106 47.1858L237.099 47.1918C236.439 47.7487 235.395 48.0703 233.878 48.0703C232.398 48.0703 231.368 47.7511 230.706 47.1949C230.092 46.6534 229.745 45.8156 229.745 44.5848C229.745 43.3884 230.089 42.5636 230.706 42.02C231.368 41.4638 232.398 41.1446 233.878 41.1446C235.395 41.1446 236.439 41.4662 237.099 42.0232Z" stroke="#FE4A49" class="svg-elem-16"></path>
							</g>
							<g id="dot3">
							<path d="M260.414 48.5703C258.869 48.5703 257.703 48.2382 256.916 47.5739C256.159 46.9097 255.78 45.9133 255.78 44.5848C255.78 43.2865 256.159 42.3052 256.916 41.641C257.703 40.9767 258.869 40.6446 260.414 40.6446C261.989 40.6446 263.17 40.9767 263.957 41.641C264.775 42.3052 265.184 43.2865 265.184 44.5848C265.184 45.9133 264.775 46.9097 263.957 47.5739C263.17 48.2382 261.989 48.5703 260.414 48.5703Z" fill="#FE4A49" class="svg-elem-17"></path>
							<path d="M263.635 42.0232L263.635 42.0232L263.642 42.0291C264.316 42.5765 264.684 43.3987 264.684 44.5848C264.684 45.8056 264.313 46.6406 263.642 47.1859L263.642 47.1858L263.635 47.1918C262.975 47.7487 261.931 48.0703 260.414 48.0703C258.933 48.0703 257.904 47.7511 257.242 47.1949C256.627 46.6534 256.28 45.8156 256.28 44.5848C256.28 43.3884 256.625 42.5636 257.242 42.0201C257.904 41.4638 258.933 41.1446 260.414 41.1446C261.931 41.1446 262.975 41.4662 263.635 42.0232Z" stroke="#FE4A49" class="svg-elem-18"></path>
							</g>
							<path id="dra-ci" d="M39.3018 48.0701C39.3018 50.3326 37.4726 52.1646 35.2186 52.1646C32.9646 52.1646 31.1354 50.3326 31.1354 48.0701C31.1354 45.8077 32.9647 43.9757 35.2186 43.9757C37.4726 43.9757 39.3018 45.8077 39.3018 48.0701Z" fill="#FE4A49" stroke="#FE4A49" class="svg-elem-19"></path>
							</g>
						</svg>
					</div>
				</a>
     </div>
  </div>
  <div class="navbar">
      <div class="menuitems"><a href="/drashta/about">About</a></div>
			<div class="menuitems opener" on:mouseenter={showAreas} on:mouseleave={hideAreas}><p>Courses</p>
				{#if isAreas}
				<div class="second-row">
					<div class="rowitems"><a href="/drashta/course/hinduiconography">Hindu Iconography</a></div>
					<div class="rowitems"><a href="/drashta/course/shriramswarup">Introduction to Shri Ram Swarup</a></div>
					<div class="rowitems"><a href="/drashta/course/sitaramgoel">Sita Ram Goel</a></div>
				</div>
				{/if}
			</div>
			<div class="menuitems"><a href="/drashta/schools">Schools</a></div>
			<div class="menuitems"><a href="/drashta/drashtas">Draṣṭās</a></div>
			<div class="menuitems"><a href="/drashta/firekeepers">Firekeepers</a></div>
			<div class="menuitems opener" on:mouseenter={showOther} on:mouseleave={hideOther}><p>Other</p>
				{#if isOther}
				<div class="second-row">
					<div class="rowitems"><a href="/dhiti">Dhīti</a></div>
					<div class="rowitems"><a href="/openlibrary">Open Library</a></div>
					<div class="rowitems"><a href="/anveshi">Anveṣī</a></div>
					<div class="rowitems"><a href="/mrdanga">Mṛdaṅga</a></div>
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
				<div class="fslinks drashtafs"><a href="/drashta/about">About</a></div>
				<div class="fslinks drashtafs"><p>Courses</p>
					<div class="nowitems"><a href="/drashta/course/hinduiconography">Hindu Iconography</a></div>
					<div class="nowitems"><a href="/drashta/course/shriramswarup">Introduction to Shri Ram Swarup</a></div>
					<div class="nowitems"><a href="/drashta/course/sitaramgoel">Sita Ram Goel</a></div>
				</div>
				<div class="fslinks drashtafs"><a href="/drashta/schools">Schools</a>
				</div>
				<div class="fslinks drashtafs"><a href="/drashta/drashtas">Draṣṭās</a>
				</div>
				<div class="fslinks drashtafs"><a href="/drashta/firekeepers">Firekeepers</a>
				</div>
			</div>
			<div class="fullscreencol" id="columnright">
				<div class="rowitems"><a href="/dhiti">Dhīti</a></div>
				<div class="rowitems"><a href="/openlibrary">Open Library</a></div>
				<div class="rowitems"><a href="/anveshi">Anveṣī</a></div>
				<div class="rowitems"><a href="/mrdanga">Mṛdaṅga</a></div>
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

.nowitems { height: 20px;}

.closebuttonstrip img {
	object-fit: contain;
	height: 40px;
	width: 40px;
}

.drashtafs p { color: white; font-weight: 500;}

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
.logotype { height: 56px; width: 90px; margin-left: 8px; }
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
	.logotype { height: 56px; width: 200px; margin-left: 8px; align-items: flex-end; }
	.logo-svg-box svg { margin-bottom: -2px; margin-left: -16px; object-fit: contain; width: 200px;}
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
	.nowitems a {
		font-size: 14px !important;
		color: #878787;
		font-weight: 400;
	}
	.nowitems {
		margin-top: 4px; 
		margin-bottom: 4px;
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
		width: 64px;
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

	.nowitems a {
		font-size: 14px !important;
		color: #878787;
		font-weight: 400;
	}

	.nowitems {
		margin-top: 4px; 
		margin-bottom: 4px;
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