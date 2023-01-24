<script lang="ts">
const { google } = require('googleapis')

export async function fetchYoutube() {
	const apiKey = import.meta.env.VITE_YOUTUBE_API;
	const youtube = google.youtube({ version: 'v3', auth: apiKey});

	const channelId = 'UCpmTZwM36xdAuHbBaaE2asg';
	const request = await youtube.search.list({
		part: 'id',
		channelId: channelId,
		type: 'video'
	})

	const vidLinks = request.data.items.map((item: {id: {videoId: any;};})=>
		`https://www.youtube.com/watch?v=${item.id.videoId}`);
		return vidLinks
}

</script>

{#await fetchYoutube()}
<small>...</small>
{:then vidLinks}
{#each vidLinks as item}
<p>{item}</p>
{/each}
{/await}
