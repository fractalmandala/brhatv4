<script lang="ts">
import Twitter from 'twitter'
let tweets:any = []

async function getTweets() {
	const client = new Twitter({
		consumer_key: 'DA7Fc68IRexZEy6HpRMAfp5lV',
		consumer_secret: '83YtgLDPpHqOWifKFfNVtRlWmV6IyaIPBjyjWYBBHDUzUZ0Qtv',
		access_token_key: '1521468657720725505-4eViHvHSluHwSlbSNDdcHPsnknvxVI',
		access_token_secret: 'lsL7X3dJ0qsbYWZ438E5JdKXvLSZyw1BNBVjiBFKgtqcP'
	});
	try {
	  const response = await client.get('statuses/user_timeline', {
	    count: 10,
	    exclude_replies: true,
	    include_rts: false
	  });
	  tweets = response;
	} catch (error) {
	  console.error(error);
	}
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