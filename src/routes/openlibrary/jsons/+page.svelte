<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const formattedData = writable([]);

  onMount(async () => {
    const response = await fetch('/ramayana/1-1067.conllu');
    const conlluData = await response.text();
    formattedData.set(format_conllu(conlluData));
  });

  const format_conllu = (/** @type {string} */ conllu) => {
    let sentences = conllu.trim().split(/\n\s*\n/);
    /**
	   * @type {{ words: never[]; }[]}
	   */
    let formattedData = [];
    for (let i = 0; i < sentences.length; i++) {
      let sentence = sentences[i].split("\n").map((line) => line.split("\t"));
      let sentence_formatted = { words: [] };
      for (let j = 0; j < sentence.length; j++) {
        let word = sentence[j];
        let word_formatted = {
          form: word[1],
          lemma: word[2],
          upos: word[3],
          xpos: word[4],
          feats: word[5],
          misc: word[9]
        };
        sentence_formatted.words.push(word_formatted);
      }
      formattedData.push(sentence_formatted);
    }
    return formattedData;
  };
</script>

{#if $formattedData.length > 0}
  {#each $formattedData as sentence}
    <div class="sentence">
      <p>{sentence.text}</p>
      {#each sentence.words as word}
     		<div class="word r-r-r-r">
          <p>{word.form}<br>
						<cite>Form</cite>
					</p>
          <p>{word.lemma}<br>
						<cite>Lemma</cite>
					</p>
          <p>{word.upos}<br>
						<cite>POS</cite>
					</p>
          <p>{word.feats}</p>
        </div>
				<p>{word.misc}</p>
      {/each}
    </div>
  {/each}
{:else}
  <p>Loading...</p>
{/if}

<style>
.word.r-r-r-r { gap: 24px;}
.word p { font-size: 20px;}
.word cite {
	font-size: 14px;
	font-style: normal;
	color: #878787;	
}
</style>