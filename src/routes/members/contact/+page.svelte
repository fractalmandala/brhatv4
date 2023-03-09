
<div class="containerx section-pads">
<div class="contactform">
  <div class="header"></div>
  <div class="nameinput"></div>
  <div class="emailinput"></div>
  <div class="messageinput"></div>
  <div class="submitbutton"></div>
</div>
</div>

<style lang="sass">

.containerx
	height: 100vh

.contactform 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto auto auto auto auto
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "header" "nameinput" "emailinput" "messageinput" "submitbutton" 
.header 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." 
	grid-area: header 
.nameinput 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." 
	grid-area: nameinput 
.emailinput 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." 
	grid-area: emailinput 
.messageinput 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." 
	grid-area: messageinput 
.submitbutton 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." 
	grid-area: submitbutton 


</style>