<script>
</script>

<div class="container pt2 pb2" style="align-items: var(--align)">

<slot></slot>

</div>

<style>

.container { height: 88vh;}
@media screen and (min-width: 900px) {
	.container { 
	padding-left: 8rem;
	padding-right: 8rem;
}
	}
@media screen and (max-width: 899px) and (min-width: 768px) {
	.container { 
	padding-left: 5.6rem;
	padding-right: 5.6rem;
}
}
@media screen and (max-width: 767px ) and (min-width: 576px ) {
	.container { 
	padding-left: 4.8rem;
	padding-right: 4.8rem;
}
}
@media screen and (max-width: 575px ) {
	.container { 
	padding-left: 0.64rem;
	padding-right: 0.64rem;
}
}
.effects {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
	align-items: center;
	justify-content: center;
  margin: 0;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: #FFFFFF;
  transition: all 0.7s ease-in;
  box-shadow: var(--wshadow2);
}
.effects:hover {
  animation-name: effectsstop;
		animation-duration: 0.3s;
		animation-timing-function: var(--cube1);
		animation-delay: 0s;
		animation-iteration-count: 1;
		animation-direction: alternate;
		animation-fill-mode: forwards;
		animation-play-state: initial;

}

@keyframes effectsstop {
	0% { box-shadow: 4px 12px 12px #e7e7e7, -6px -5px 8px #f1f1f1; background-color: #FFFFFF;}
	100% { box-shadow: 0px 0px 0px #e7e7e7, 0px 0px 0px #f1f1f1; background-color: var(--grey);}
}

.bar {
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  position: absolute;
  z-index: 2;
}

.effects:hover .top {
  animation: outlinertop 2s var(--cube1) 0.7s infinite alternate, waver 17s var(--cube2) infinite reverse;
}

.effects:hover .bottom {
  animation: outlinerbottom 2.4s var(--cube2) 1.5s forwards, waver 17s var(--cube2) infinite reverse;
}

.effects:hover .left {
  animation: outlinerleft 8s var(--cube3) infinite alternate-reverse, waver 17s var(--cube2) infinite reverse;
}

.effects:hover .right {
  animation: outlinerright 3s var(--cube4) infinite both, waver 17s var(--cube2) infinite reverse;
}

.top {
  width: 0%;
  height: 2px;
  border-width: 2px;
  border-top-style: solid;
  border-color: var(--wave);
  top: 0;
  left: 0;
}

.bottom {
  width: 0%;
  height: 2px;
  border-width: 2px;
  border-bottom-style: solid;
  border-color: var(--wave);
  bottom: 0;
  left: 0;
}

.left {
  width: 2px;
  height: 0%;
  border-width: 2px;
  border-left-style: solid;
  border-color: var(--wave);
  top: 0;
  left: 0;
}

.right {
  width: 2px;
  height: 0%;
  margin-bottom: 100%;
  border-width: 2px;
  border-right-style: solid;
  border-color: var(--wave);
  top: 0;
  right: 0;
}

@keyframes outlinertop {
  0% { width: 0%; margin-left: 0%; }
  50% { width: 100%; margin-left: 50%;}
  100% { width: 100%; margin-left: 100%; }
}

@keyframes outlinerbottom {
  0% { width: 0%; margin-right: 0%; border: 1px solid var(--red);}
  60%{ width: 100%; margin-right: 100%; border: 1px solid var(--red);}
  100% { width: 100%; margin-right: 100%; border: 1px solid var(--blue);}
}

@keyframes outlinerleft {
  0% { height: 0%; margin-top: 0%; }
  50% { height: 100%; margin-top: 0%;}
  100% { height: 100%; margin-top: 100%; }
}

@keyframes outlinerright {
  0% { height: 100%; margin-top: 100%;}
  50% { height: 100%; margin-bottom: 0%; }
  100%  { height: 0%; margin-bottom: 0%;}
}

@keyframes changescolor {
  0% { background-color: var(--blue);}
  50% { background-color: var(--red);}
  100% { background-color: var(--blue);}
}

@keyframes shadowgoes {
  0% {box-shadow: var(--wshadow);}
  100% { box-shadow: none;}
}

@keyframes shadowcomes {
  0% { box-shadow: none;}
  100% { box-shadow: var(--wshadow2);}
}

@keyframes outlinerbottomtwo {
  0% { border-bottom: 2px solid var(--red);}
  100% { border-bottom: 2px solid var(--blue);}
}

@keyframes waver {
  0% {border-color: #577590;}
  12.5% { border-color: #4d908e;}
  25% {border-color: #43aa8b;}
  37.5% { border-color: #90be6d;}
  50% {border-color: #C2C25F;}
  62.5% { border-color: #f9c74f;}
  75% {border-color: #f8961e;}
  87.5% { border-color: #f3722c;}
  100% {border-color: var(--red);}
} 

	@media screen and (min-width: 900px) {
.effects { padding: 1.2rem; }
	}

@media screen and (max-width: 899px) and (min-width: 768px) {
.effects { padding: 1.2rem;}
}


@media screen and (max-width: 767px ) and (min-width: 576px ) {
.effects { padding: 1rem; }
}
@media screen and (max-width: 575px ) {
.effects { padding: 0.8rem; }
}

</style>