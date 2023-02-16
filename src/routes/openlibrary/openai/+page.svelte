<script lang="ts">
import { enhance, type SubmitFunction } from '$app/forms';
let textSubmission = '';
let imageTextSubmission = '';
let answer = '';
let imageArray: any = [];
let loading = false;
const handleSubmit: SubmitFunction = () => {
	loading = true;
	return async ({ action, result }) => {
		let resultObject = JSON.parse(JSON.stringify(result));
		if (action.search == '?/submit') {
			if (resultObject.status == 200) {
				if (resultObject.data.response) {
					answer = resultObject.data.response;
				}
				if (resultObject.data.imageResponse) {
					imageArray = resultObject.data.imageResponse;
				}

				loading = false;
			} else {
				loading = false;
					(alert);
			}
		}
	};
};
</script>

<div class="c-c-c-c">
{#if loading === false}
	<box id="form-box" class="box">
		<h3 class="subtitle"><b>Create Prompts</b></h3>
			<form
				action="?/submit"
				method="POST"
				enctype="multipart/form-data"
				use:enhance={handleSubmit}
				id="upload"
				name="upload"
			>
			<div class="field">
				<label for="text-submission" class="label"><b>Text Prompt</b></label>
					<div class="control">
						<textarea
							id="text-submission"
							name="text-submission"
							class="textarea"
							placeholder="Enter text prompt..."
							bind:value={textSubmission}
						/>
					</div>
				</div>
			<div class="field">
				<label for="image-text-submission" class="label"><b> Image Prompt</b></label>
				<div class="control">
					<textarea
						id="image-text-submission"
						name="image-text-submission"
						class="textarea"
						placeholder="Enter image prompt..."
						bind:value={imageTextSubmission}
					/>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<button type="submit" class="button is-success is-fullwidth"
						><b>Submit Prompt</b></button
					>
				</div>
			</div>
		</form>
	</box>

	<box class="box">
		<h3 class="subtitle"><b>Text Response</b></h3>
		<p>{answer}</p>
		</box>


{#if imageArray.length > 0}
	<box class="box">
		<h3 class="subtitle"><b>Image Response</b></h3>
		<div class="columns">
			{#each imageArray as image}
				<div class="column is-one-third">
				<box class="box">
				<img src={image.url} alt="AI generated art" />
				</box>
				</div>
			{/each}
		</div>
	</box>
{/if}
{:else}
	<h3 class="subtitle has-text-white"><b>Beep boop bop bing...</b></h3>
{/if}
</div>
<style>
	.c-c-c-c {
		height: auto;
		min-height: 100vh;
		padding: 120px 0 0 120px;
	}
</style>
