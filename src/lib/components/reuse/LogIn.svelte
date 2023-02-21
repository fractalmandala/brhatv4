<script>
import supabase from '$lib/db'
import { onMount } from 'svelte'

let email = ''
let password = ''
let error = ''

/**
	 * @param {{ preventDefault: () => void; }} event
	 */
async function login(event){
	event.preventDefault()
	const { data, error } = await supabase
		.auth.signInWithPassword({ email, password })
  if (error) throw new Error(error.message)
}

onMount(async () => {
  const session = await supabase.auth.getSession()

})
</script>

<form on:submit={login}>
  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} />

  <label for="password">Password:</label>
  <input type="password" id="password" bind:value={password} />

  {#if error}
    <p>{error}</p>
  {/if}

  <button type="submit">Log in</button>
</form>