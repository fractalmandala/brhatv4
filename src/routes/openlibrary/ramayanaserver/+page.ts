
  import { onMount } from 'svelte';

  /**
	 * @type {any[]}
	 */
  let tables = [];

  onMount(async () => {
    const response = await fetch(`/ramayana/0000-Kanda-1_Sarga-1-1067.conllu`);
    const data = await response.text();
    const rows = data.split('\n');

    const sentences = {};

    let tableHTML = '<table class="conllu-table">';
    tableHTML += '<tr><th>KANDA</th><th>SARGA</th><th>PADA</th><th>SENTENCE</th><th>#</th><th>FORM</th><th>LEMMA</th><th>UPOS</th><th>FEATS</th><th>MISC</th></tr>';

    let currentSentence = null;
		let freezeSentence = false
		/**
	   * @type {string | null}
	   */
		let kandaNumber = null;
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
 				kandaNumber = response.url.match(/Kanda-(\d+)/)[1];
				sargaNumber = response.url.match(/Sarga-(\d+)/)[1];
        const sentenceNumber = Object.keys(sentences).length + 1;
        sentences[sentenceNumber] = currentSentence;
				verse = ++verse
      }

      const sentenceNumber = Object.keys(sentences).length;
      if (sentences[sentenceNumber] == null || sentences[sentenceNumber] == undefined || lemma == '_') {
        return;
      }

      tableHTML += '<tr>';
			tableHTML += `<td>${kandaNumber}</td>`;
			tableHTML += `<td>${sargaNumber}</td>`;
			tableHTML += `<td>${verse}</td>`;
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
