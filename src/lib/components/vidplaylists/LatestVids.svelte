<script>
// @ts-nocheck

const API_KEY = import.meta.env.YOUTUBE_API_KEY;
const CHANNEL_ID = 'UCpmTZwM36xdAuHbBaaE2asg';
async function fetchVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`;
  const response = await fetch(url);
  const data = await response.json();
  const videos = data.items.map((/** @type {{ id: { videoId: any; }; snippet: { title: any; description: any; thumbnails: { high: { url: any; }; }; }; }} */ item) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.high.url,
  }));
  return {
		videos
	}
}

</script>

<div class="row-of-4 vid-row">
{#await fetchVideos()}
<small>...</small>
{:then videos}
<div class="r-r-r-r pad4 row-of-4">
{#each videos as video}
	<div class="fourbox small5 paramin">
		<iframe
  		class="m-1"
  		width=100%
  		height=88%
  		src="https://www.youtube.com/embed/{video.id}"
  		title={video.name}
  		>
		</iframe>
		<p><a href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noreferrer">{@html video.title}</a></p>
	</div>
{/each}
</div>
{/await}
</div>

<style>
.row-of-4 { flex-wrap: wrap; align-items: flex-start;}
.fourbox p {
	margin-top: 8px;
	color: #474747;
	font-weight: 600;
}
.fourbox a { color: inherit;}
@media screen and (min-width: 900px) {
	.fourbox { height: 184px;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.fourbox { height: 144px;}
}

@media screen and (max-width: 767px) and (min-width: 576px) {
	.fourbox { height: 184px;}
}

@media screen and (max-width: 575px) {
	.fourbox { height: 184px; margin: -8px;}
}
</style>


