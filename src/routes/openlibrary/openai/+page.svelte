<script>
import openai from '$lib/utils/openai'
/**
	 * @type {string | any[]}
	 */
let choices = []
export async function Ans(){
	// @ts-ignore
	const {response} = await openai
		.createCompletion({
  	model: "text-davinci-edit-001",
  	prompt: "What day of the wek is it?",
  	temperature: 0,
  	max_tokens: 100,
  	top_p: 1,
  	frequency_penalty: 0.0,
  	presence_penalty: 0.0,
  	stop: ["\n"],

		});
		return response
}

</script>

<div class="c-c-c-c cc l0">
	{#await Ans()}
	<small>...</small>
	{:then response}
		{response}
    <p>Loading...</p>
	{/await}
</div>

<style>
.l0 { height: 100vh;}
</style>

