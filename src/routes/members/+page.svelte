
<div class="container section-pads">
  <div class="signupcomponent">
    <div class="header">
			<h5>Sign Up</h5>
		</div>
		<form>
    <div class="nameinput">
			<input type="text" placeholder="Full Name">
		</div>
    <div class="emailinput">
			<input type="text" placeholder="Email Address">
		</div>
    <div class="passwordinput">
			<input type="text" placeholder="Password">
		</div>
    <div class="submitbuttom">
			<input type="submit" value="Sign Up"/>
		</div>
		</form>
  </div>
</div>

<style lang="sass">
.container 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "signupcomponent" 
	height: 100vh
	align-items: center
.signupcomponent 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto auto auto auto auto
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "header" "nameinput" "emailinput" "passwordinput" "submitbuttom" 
	grid-area: signupcomponent 
	border: 1px solid #d7d7d7
	width: 30%
	height: 70%
	border-radius: 4px
	padding: 32px
	background-color: #f7f7f7
	box-shadow: 3px 5px 8px #e1e1e1
	transition: all 0.19s var(--cubec)
	&:hover
		box-shadow: 0px 0px 0px #e1e1e1
	form input
		margin-bottom: 16px
		padding: 8px
	form
		input[type=text]
			border: 1px solid #d7d7d7
			font-size: 14px
	form
		input[type=submit]
			background: var(--strong)
			border: none
			color: white
			transform-origin: center center
			transition: 0.08s var(--cubeb)
			cursor: pointer
			border-radius: 2px
			&:hover
				transform: scale(0.9)
				background: var(--soft)
.header 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." 
	grid-area: header 
	h5
		color: #b7b7b7
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
.passwordinput 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." 
	grid-area: passwordinput 
.submitbuttom 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 1fr 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "." 
	grid-area: submitbuttom 

</style>