<script lang="ts">
    import { enhance, type SubmitFunction } from '$app/forms';

    let textSubmission = "";
    let answer = "";
    let loading = false;

    const handleSubmit: SubmitFunction = () => {
        loading = true;

  return async ({ action, result }) => {
            let resultObject = JSON.parse(JSON.stringify(result));

            if (action.search == "?/submit") {
                if (resultObject.status == 200) {
                    if (resultObject.data.response) {
                        answer = resultObject.data.response;
                    }                    
                    loading = false;
                } else {
                    loading = false;
                    alert("An error occurred, please try again.");
                }
   }
        }
 }
</script>


<section class="section has-background-dark">

    {#if loading === false}
        <box id="form-box" class="box">
            <h2 class="subtitle"><b>Create Prompts</b></h2>
            <form  action="?/submit" method="POST" enctype="multipart/form-data" use:enhance={handleSubmit} id="upload" name="upload">
                <div class="field">
                    <label for="text-submission" class="label"><b>Text Prompt</b></label>
                    <div class="control">
                        <textarea id="text-submission" name="text-submission" class="textarea" placeholder="Enter text prompt..." bind:value={textSubmission}></textarea>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button type="submit" class="button is-success is-fullwidth"><b>Submit Prompt</b></button>
                    </div>
                </div>
            </form>
        </box>

        {#if answer != ""}
            <box class="box">
                <h2 class="subtitle"><b>Text Response</b></h2>

                <p>{answer}</p>
            </box>
        {/if}
    {:else}
        <h2 class="subtitle has-text-white"><b>One moment please... Beep-boop-bing-bop...</b></h2>
    {/if}
</section>


<style>
    section {
        height: auto;
        min-height: 100vh;
				padding: 64px;
    }
</style>