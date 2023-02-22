<script lang="ts">
import supabase from '$lib/db'

let loading = false
let email: string

const handleLogin = async() => {
	try {
		loading = true
		const { error } = await supabase.auth.signInWithOtp({email})
		if (error) throw error
		alert ('Check your email for the login link!')
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message)
		}
	} finally {
			loading= false
	}
}
</script>

<form class="flexbox-r" on:submit|preventDefault="{handleLogin}">
	<div class="in-col">
		<p>Sign in via email OTP</p>
		<div>
			<input class="inputfield" type="email" placeholder="Email" bind:value="{email}"/>
		</div>
		<div>
			<input type="submit" class="greenbutton" value={loading ? 'Loading' : 'Send OTP'} disabled={loading}/>
		</div>
	</div>
</form>