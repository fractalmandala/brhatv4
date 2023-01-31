<div class="buttons">
   <button class="btn"><span></span><p><slot></slot></p></button>
</div>

<style>

/*bg*/
/*txt*/
/*success*/
.buttons {
  display: flex;
  justify-content: space-around;
  top: 20px;
  left: 20px;
}

.buttons button {
  width: 150px;
  height: 50px;
  background-color: white;
  margin: 20px;
  color: #272727;
  position: relative;
  overflow: hidden;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
}

.buttons p, .btn p {
	font-family: 'Readex Pro', sans-serif;
	font-weight: 500;
	text-transform: capitalize;
	font-size: 16px;
	z-index: 2;
	color: white;
}

.btn { transition: all 0.2s cubic-bezier(0.35, 0.1, 0.25, 1); transform-origin: center center;}
.btn:hover { transform: scale(0.9);}
.btn p:hover, .btn:hover p { color: #474747;}

.buttons button:before, .buttons button:after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #fe4a49;
  transition: all 0.3s cubic-bezier(0.35, 0.1, 0.25, 1);
}

.buttons button:before {
  right: 0;
  top: 0;
  transition: all 0.5s cubic-bezier(0.35, 0.1, 0.25, 1);
}

.buttons button:after {
  left: 0;
  bottom: 0;
}

.buttons button span {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
}

.buttons button span:after {
  content: "";
  position: absolute;
  width: 2px;
  height: 0;
  background-color: #fe4a49;
  transition: all 0.3s cubic-bezier(0.35, 0.1, 0.25, 1);
}

.buttons button span:before {
  right: 0;
  top: 0;
  transition: all 0.5s cubic-bezier(0.35, 0.1, 0.25, 1);
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fe4a49;
  transition: all 0.3s cubic-bezier(0.35, 0.1, 0.25, 1);
	z-index: 0;
}

.buttons button span:after {
  left: 0;
  bottom: 0;
}



.buttons button:hover:before, .buttons button:hover:after {
  width: 100%;
}

.buttons button:hover span {
  z-index: 1;
}

.buttons button:hover span:after {
  height: 0;
}

.buttons button:hover span:before {
	height: 0;
}

.buttons button:hover p:before {
  top: -50%;
  transform: rotate(5deg);
}

.buttons button:hover p:after {
  top: 50%;
  transform: translateY(-50%);
}


.buttons button.start p:before {
  top: -50%;
  transform: rotate(5deg);
}

.buttons button.start p:after {
  color: white;
  transition: all 0s ease;
  content: attr(data-start);
  top: 50%;
  transform: translateY(-50%);
  animation: start 0.3s ease;
  animation-fill-mode: forwards;
}

@keyframes start {
  from {
    top: -50%;
  }
}

.buttons button.start:hover span {
  display: none;
}

.buttons button:active {
  outline: none;
  border: none;
}

.buttons button:focus {
  outline: 0;
}
</style>