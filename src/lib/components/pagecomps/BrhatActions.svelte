<script>
import supabase from '$lib/db'
import Container from '$lib/components/reuse/Container.svelte'
import EffectBox from '$lib/components/reuse/EffectBox.svelte'
import BoxHeader from '$lib/components/reuse/BoxHeader.svelte'
async function BrhatActions() {
    const { data, error } = await supabase
      .from('brhat-actions')
      .select()
      .eq('tag','true')
      .order('id')
      if (error) throw new Error(error.message)
      return data
  }
</script>

<Container --align="center">
<BoxHeader><h1>Our Projects</h1></BoxHeader>
{#await BrhatActions()}
<small>Loading...</small>
{:then data}
<EffectBox>
<div class="threebythree p05 gap1">
{#each data as item}
<div class="square">
    <a class="logowhite" href={item.link}>
      <img id="topA" src={item.logowhite} alt={item.id} />
    </a>
    <a class="logoblack" href={item.link}>
      <img src={item.logoblack} alt={item.id} />
    </a>
    <p class="t-14"><a href={item.link}>{item.shorts}</a></p>
</div>
{/each}
</div>
</EffectBox>
{:catch error}
<pre>{error}</pre>
{/await}
</Container>

<style>

	#topA {

    filter: saturate(0);

}

.threebythree {
	display: flex;
  flex-direction: var(--ohrow);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 1;
}

p {
    color: var(--gmid);
    transition: all 0.9s ease;
    opacity: 0;
    padding: 0 0.48em;
    text-align: center;
    transform: translateY(-64px);
    margin-bottom: -20%;
}

  .logoblack img, .logowhite img {
    object-fit: cover;
    width: 100%;
  }

  .logowhite, .logoblack {
    display: flex;
  }

  .logoblack {
    opacity: 0;
  }

	.square {
	  display: flex;
    flex-direction: column;
    width: 30%;
    height: max-content;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #272727;
    transform-origin: center center;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    transition: all 2s var(--cube4) forwards;
    box-shadow: var(--wshadow3);
}

	.square:hover {
	box-shadow: none;
}

  .square:hover .logoblack {
    animation: byeblack 0.7s ease forwards;
  }

  .square:hover .logowhite {
    animation: hiwhite 0.5s ease-out forwards;
  }

  .square:hover .t-14 {
    animation: bodyoftext 0.9s ease-in forwards;
  }

	.square .t-14 a {
	transition: all 1.5s ease-in;	
}

	.square:hover .t-14 a {
	color: white;
}

  .square:hover {
    animation: finally 0.34s var(--snap) forwards;
    box-shadow: none;
  }

  @keyframes bodyoftext {
    0% { opacity: 0; transform: translateY(70px); color: var(--gmid);}
    80% { opacity: 1; transform: translateY(-40px); color: var(--red); }
    95% { opacity: 1; transform: translateY(-64px); color: var(--gmid);}
    100% { opacity: 1; transform: translateY(-80px); color: white;}
  }


  @keyframes byeblack {
    0% { opacity: 0; transform: translateY(0px);}
    100% { opacity: 1; transform: translateY(-95px);}
  }

  @keyframes hiwhite {
    0% { opacity: 1;transform: translateY(0px);}
    100% { opacity:0; transform: translateY(-95px);}
  }

</style>