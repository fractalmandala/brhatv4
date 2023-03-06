<script lang="ts">
import supabase from '$lib/db'
export let showModal:boolean
let dialog:any
let name:string
let email:string
let message:string
$: if (dialog && showModal ) dialog.showModal()

const inputMessage = async() => {
	try {
		const { data, error } = await supabase
		.from('brhat-usermessages')
		.insert({ name: name, email: email, message:message })
		if (error) throw new Error(error.message)
			name = '',
			email = '',
			message = ''
	} finally {
			alert ('Thank you, your message has been submitted.')
		}
}

</script>

<dialog
	class="dialogbox"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	on:keydown|self={() => dialog.close()}
>
	<div class="boxc" on:click|stopPropagation on:keydown|stopPropagation>
		<div class="boxr closebutton">
			<!-- svelte-ignore a11y-autofocus -->
			<button autofocus on:click={() => dialog.close()}>X</button>
		</div>
		<h5>Contact <span class="red">Form</span></h5>
		<form on:submit|preventDefault="{inputMessage}">
			<label for="name">Full Name</label>
			<input type="text" value="name" placeholder="Full Name"/>
			<label for="email">Email Address</label>
			<input type="text" value="email" placeholder="Please enter an email we can contact you at"/>
			<textarea placeholder="Write your message here"/>
			<input type="submit" value="Send Message" on:submit={inputMessage}/>
		</form>
	</div>
</dialog>


<style lang="sass">

.boxr
	width: 100%
	justify-content: flex-end
	button
		background: none
		border: none
		font-weight: 800
		font-variant: small-caps
		color: #717171
		font-size: 16px
		cursor: pointer
		&:hover
			color: #fe4a49
	
dialog
	max-width: 32em
	border-radius: 0.2em
	border: none
	padding: 0
	&::backdrop
		background: rgba(0,0,0,0.3)
	.boxc
		width: 100%
		form
			width: 100%
			input[type=text]
				width: 100%
		@media screen and (min-width: 900px)
			height: 100%
			padding: 64px
			h5
				margin: 0 0 15px 0
			label
				font-size: 12px
				color: #474747
				font-weight: 500
			input[type=text]
				padding: 8px
				margin: 5px 0 16px 0
				color: #a0a0a0
			textarea
				padding: 8px
				width: 100%
				height: 144px
				margin: 5px 0 16px 0

input[type=submit], input[type=button]
	background: white
	border: 2px solid #fe4a49
	border-radius: 3px
	color: #fe4a49
	padding: 8px
	width: 40%
	cursor: pointer
	transform-origin: center center
	transition: all 0.11s var(--cubec)
	&:hover
		background: #fe4a49
		color: white
		transform: scale(0.9)

::placeholder
	color: #a0a0a0

:-ms-input-placeholder
	color: #a0a0a0

::-webkit-input-placeholder
	color: #a0a0a0

dialog>div
	padding: 1em

dialog[open]
	animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)
	&::backdrop
		animation: fade 0.2s ease-out

@keyframes zoom
	from
		transform: scale(0.95)
	to
		transform: scale(1)

@keyframes fade
	from
		opacity: 0
	to
		opacity: 1

button
	display: block

</style>