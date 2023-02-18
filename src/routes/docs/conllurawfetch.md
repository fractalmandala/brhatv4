---
title: Raw Fetch and Render from conLLu file
category: codes
tag: synaptic
data: "2023-01-01"
---

```js
  import { onMount } from 'svelte';


  /**
	 * @type {string}
	 */
  let conlluData;
/**
	 * @type {any[]}
	 */
let tables = [];
  onMount(async () => {
    const response = await fetch('/ramayana/1-1067.conllu');
    conlluData = await response.text();
      const rows = conlluData.split('\n');

      let tableHTML = '<table class="conllu-table">';
      tableHTML += '<tr><th>#</th><th>FORM</th><th>LEMMA</th><th>UPOS</th><th>XPOS</th><th>FEATS</th><th>HEAD</th><th>DEPREL</th><th>DEPS</th><th>MISC</th></tr>';

      rows.forEach(row => {
        if (row.startsWith('#')) {
          // ignore comments
          return;
        }

        const columns = row.split('\t');
        tableHTML += '<tr>';
        columns.forEach(column => {
          tableHTML += `<td>${column}</td>`;
        });
        tableHTML += '</tr>';
      });

      tableHTML += '</table>';
      
      // add the HTML table to the array
      tables = [...tables, tableHTML];
    
  });
```

```html
{#each tables as tableHTML}
 <div class="c-c-c-c istop">{@html tableHTML}</div>
{/each}
```

```
	/**
	 * @type {string}
	 */
	let conlluData;
	/**
	 * @type {any[]}
	 */
	let tables = [];
	onMount(async () => {
		const response = await fetch('/ramayana/1-1067.conllu');
		conlluData = await response.text();
		let sentences = conlluData.split(/\n\s*\n/);
		sentences.forEach((sentence) => {
			const rows = sentence.trim().split('\n');
			const sentenceText = rows[0].replace('# text = ', '');
			let tableHTML = `
      <table class="conllu-table">
        <caption>${sentenceText}</caption>
        <tr>
          <th>Index</th>
          <th>Form</th>
          <th>Lemma</th>
          <th>UPOS</th>
          <th>XPOS</th>
          <th>Feats</th>
          <th>Head</th>
          <th>DepRel</th>
          <th>Deps</th>
          <th>Misc</th>
        </tr>
    `;
			for (let i = 1; i < rows.length; i++) {
				const row = rows[i];
				if (row.startsWith('#')) {
					continue;
				}
				const [index, form, lemma, upos, xpos, feats, head, deprel, deps, misc] = row.split('\t');
				tableHTML += `
    <tr class="pos-${upos.toLowerCase()} deprel-${deprel.toLowerCase()}">
      <td>${index}</td>
      <td>${form}</td>
      <td>${lemma}</td>
      <td>${upos}</td>
      <td>${xpos}</td>
      <td>${feats}</td>
      <td>${head}</td>
      <td>${deprel}</td>
      <td>${deps}</td>
      <td>${misc}</td>
    </tr>
  `;
			}
			tableHTML += '</table>';
			tables.push(tableHTML);
		});
	});
```

> broken query gets raw words:
```html
<script>
	import { onMount } from 'svelte';

  let conlluData
	let formattedData = ''

	onMount(async() => {
  	const response = await fetch('/ramayana/1-1067.conllu');
    conlluData = await response.text();
 		formattedData = format_conllu(conlluData);
	})
  const format_conllu = (/** @type {string} */ conllu) => {
    let sentences = conllu.trim().split(/\n\s*\n/);
    let formatted_data = "";
    for (let i = 0; i < sentences.length; i++) {
      let sentence = sentences[i].split("\n").map((line) => line.split("\t"));
      let sentence_formatted = "";
      for (let j = 0; j < sentence.length; j++) {
        let word = sentence[j];
        sentence_formatted += `${word[1]} (${word[3]}) `;
      }
      formatted_data += `${sentence_formatted.trim()}\n`;
    }
    return formatted_data.trim();
  };
</script>

{#if formattedData}
  <div class="c-c-c-c">{formattedData}</div>
{/if}

<style>
.c-c-c-c { width: 100vw; padding-top: 80px;}
</style>
```
