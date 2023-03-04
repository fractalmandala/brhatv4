<script lang="ts">
import Twitter from 'twitter'
let tweets:any = []

async function getTweets() {
	const client = new Twitter({
  	consumer_key: import.meta.env.VITE_TWITTER_CONSUMER_KEY,
  	consumer_secret: import.meta.env.VITE_TWITTER_CONSUMER_SECRET,
  	access_token_key: import.meta.env.VITE_TWITTER_ACCESS_TOKEN,
  	access_token_secret: import.meta.env.VITE_TWITTER_ACCESS_TOKEN_SECRET
	});

  const response = await client.get('statuses/user_timeline', {
    count: 10,
    exclude_replies: true,
    include_rts: false
  });

  tweets = response;
}

getTweets();

</script>

<div class="traybox">
  {#each tweets as tweet}
    <div class="tweet ww4 card">
      <div class="tweet-header boxc">
        <a href={`https://twitter.com/${tweet.user.screen_name}`} target="_blank" rel="noreferrer">
          <img src={tweet.user.profile_image_url} alt={tweet.user.name} />
          <span>{tweet.user.name}</span>
          <span>@{tweet.user.screen_name}</span>
        </a>
				<p>test</p>
      </div>
      <p>
        {tweet.text}
      </p>
    </div>
  {/each}
</div>