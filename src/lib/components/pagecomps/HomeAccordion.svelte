<div class="genrow">
 <div class="gencol" id="col1">
   <button>Culture Creatives</button>
 </div>
 <div class="gencol" id="col2">
   <button>Policy Research</button>
 </div>
 <div class="gencol" id="col3">
   <button>Leadership Development</button>
 </div>
</div>

<style>
.genrow { display: flex;}

 button { 
   z-index: 3;
   cursor: pointer;
   background: rgba(0,0,0,0.0);
   backdrop-filter: blur(0.3);
   border-radius: 4px;
   opacity: 0.5;
   border: 1px solid white;
   color: white;
   font-weight: 600;
   letter-spacing: 0;
   padding: 8px 16px;
   transform-origin: center center;
   transition: all 0.12s ease-in-out;
 }

 button:hover {
  background: rgba(0,0,0,0.8);
   transform: scale(0.9);
 }

 button:active {
   transform: scale(1.1);
 }

 .gencol { display: flex; flex-direction: column; position: relative; justify-content: flex-end; align-items: center; transition: all 0.53s cubic-bezier(0.875, 0.145, 0.555, 0.905);}

 .gencol::after {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   content: '';
   background: rgba(0,0,0,0.6);

 }

 .gencol:hover::after {
   animation: lightenup 0.53s ease-in-out forwards;
 }
 
 @keyframes lightenup {
 0% {background: rgba(0,0,0,0.6);} 
 75% {background: rgba(0,0,0,0.4);}
 100% {background: rgba(0,0,0,0.1);}
 }

 #col1, #col2, #col3 {
   background-position: center center;
   background-size: cover;
   background-repeat: no-repeat;
 }

 #col1 { 
   background-image: url('/images/corpimages/creative-culture-1024-1.webp');
 }

 #col2 {
   background-image: url('/images/corpimages/research-policy-1024-1.webp');
 }

 #col3 {
   background-image: url('/images/corpimages/develop-leader-1024-1.webp');
 }

 .gencol:hover button {
  background: rgba(0,0,0,0.6);
  opacity: 1;
 }

@media screen and (min-width: 900px) {  

.genrow { flex-direction: row; width: calc(100vw - 16px); margin-left: 8px; height: calc(100vh - 16px); margin-top: 8px; border-radius: 4px;}
.gencol { width: 33.33%; height: 100%; }
.genrow:hover .gencol {
  width: 25%;
}
.genrow:hover .gencol:hover {
  width: 50%;
}
button { font-size: 20px; margin-bottom: 64px;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
.genrow { flex-direction: row; width: calc(100vw - 8px); margin-left: 4px; }
.gencol { width: 33.33%; height: 100%; }
.genrow:hover .gencol {
  width: 25%;
}
.genrow:hover .gencol:hover {
	width: 50%;
}
button { font-size: 0.875rem; margin-bottom: 64px; }
}

@media screen and (min-width: 767px) and (max-width: 576px) {
.genrow { flex-direction: column; width: calc(100vw - 8px); margin-left: 4px; }
.gencol { flex-direction: column; width: 100%; height: 33.33%; }
.genrow:hover .gencol {
  height: 25%;
}
.genrow:hover .gencol:hover {
  height: 50%;
}
button { font-size: 0.875rem; margin-bottom: 16px; }
}

@media screen and (max-width: 575px) {
.genrow { flex-direction: column; width: calc(100vw - 8px); margin-left: 4px; }
.gencol { flex-direction: column; width: 100%; height: 33.33%; }
.genrow:hover .gencol {
	height: 25%;
}
.genrow:hover .gencol:hover {
  height: 50%;
}
button { font-size: 0.875rem; margin-bottom: 16px; }
}
</style>