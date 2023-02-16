<script>
import supabase from '$lib/db'

</script>

<div class="c-c-c-c col-y-align pad4 l0">
<h5>Members Area</h5>

<div class="c-c-c-c form">
	<form class="signupform">
		<label for="email">
			<b>Email</b>
		</label>
		<input type="text" name="email">
		<label for="password">
			<b>Password</b>
		</label>
		<input type="text" name="password" placeholder="Enter Password">
		<input type="text" name="password2" placeholder="Repeat Password">

		<button type="submit" class="formbutton">Sign Up</button>
	</form>
</div>
</div>

<style>
.l0 {height: 100vh;}
</style>