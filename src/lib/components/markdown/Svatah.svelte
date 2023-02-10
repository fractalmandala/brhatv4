<script>
let markdownContent = '';
async function fetchMarkdown() {
  const response = await fetch('/src/routes/about/docs/svatahsiddha.md');
  markdownContent = await response.text();
}
fetchMarkdown();
</script>

<div class="marker">
	{#if markdownContent}
    {@html markdownContent}
  {/if}
</div>

<style>
.marker {
	position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; background: white; z-index: 200; padding-top: 4em;
}
.marker p {
	font-size: 18px;
}
</style>