<script>
  import { onMount } from 'svelte';

  /**
	 * @type {any[]}
	 */
  let tables = [];
	let data = [];
	let headers = ['kanda','sarga','pada','iast','numbering','form','lemma','upos','feat','misc']
	data.push(headers);

  onMount(async () => {
    const response = await fetch(`https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/conlluramayana/0000-Kanda-1_Sarga-1-1067.conllu`);
    const data = await response.text();
    const rows = data.split('\n');

    const sentences = {};

    let tableHTML = '<table class="conllu-table">';
    tableHTML += '<tr><th>kanda</th><th>sarga</th><th>pada</th><th>iast</th><th>numbering</th><th>form</th><th>lemma</th><th>upos</th><th>feat</th><th>misc</th></tr>';

    /**
	   * @type {string | null}
	   */
    let currentSentence = null;
		let freezeSentence = false
		/**
	   * @type {string | null}
	   */
		let kandaNumber = null;
		/**
	   * @type {string | null}
	   */
		let sargaNumber = null;
		let verse = 0
		let count = 0
		let counter = 1	

    rows.forEach((row, i) => {
      if (row.trim() === '') {
        return;
      }

      const columns = row.split('\t');
      const wordNumber = columns[0];
      const form = columns[1];
      const lemma = columns[2];
      const upos = columns[3];
      const feats = columns[5];
      const misc = columns[9];


      if (wordNumber.startsWith('# text')) {
        currentSentence = row.slice(row.indexOf('\t') + 9);
        if (!(i + 1 < rows.length && rows[i + 1].startsWith('# sent_id'))) {
          freezeSentence = true;
        }
        return;
      }

		      if (wordNumber.startsWith('#') || form.includes('-')) {
        return;
      }

      if (wordNumber === '1') {
 				// @ts-ignore
 				kandaNumber = response.url.match(/Kanda-(\d+)/)[1];
				// @ts-ignore
				sargaNumber = response.url.match(/Sarga-(\d+)/)[1];
        const sentenceNumber = Object.keys(sentences).length + 1;
        // @ts-ignore
        sentences[sentenceNumber] = currentSentence;
				verse = ++verse
      }

      const sentenceNumber = Object.keys(sentences).length;
      // @ts-ignore
      if (sentences[sentenceNumber] == null || sentences[sentenceNumber] == undefined || lemma == '_') {
        return;
      }


      tableHTML += '<tr>';
			tableHTML += `<td>${kandaNumber}</td>`;
			tableHTML += `<td>${sargaNumber}</td>`;
			tableHTML += `<td>${verse}</td>`;
      // @ts-ignore
      tableHTML += `<td>${sentences[sentenceNumber]}</td>`;
      tableHTML += `<td>${wordNumber}</td>`;
      tableHTML += `<td>${form}</td>`;
      tableHTML += `<td>${lemma}</td>`;
      tableHTML += `<td>${upos}</td>`;
      tableHTML += `<td>${feats}</td>`;
      tableHTML += `<td>${misc}</td>`;
      tableHTML += '</tr>';
    });

    tableHTML += '</table>';

    tables = [...tables, tableHTML];
  });
</script>

 <div class="c-c-c-c istop">
{#each tables as tableHTML}
<table>
{@html tableHTML}
</table>
{/each}
</div>

