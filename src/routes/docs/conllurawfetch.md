---
title: Raw Fetch and Render from conLLu file
category: codes
tag: synaptic
data: "2023-01-01"
---

formatted conllu:

```html
<script lang="ts">
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
    tableHTML += '<tr><th>SENTENCE</th><th>FORM</th><th>LEMMA</th><th>UPOS</th><th>FEATS</th><th>MISC</th></tr>';

    let currentSentence:any = null;
		let freezeSentence = false

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
        const sentenceNumber = Object.keys(sentences).length + 1;
        sentences[sentenceNumber] = currentSentence;
      }

      const sentenceNumber = Object.keys(sentences).length;
      if (sentences[sentenceNumber] == null || sentences[sentenceNumber] == undefined || lemma == '_') {
        return;
      }

      tableHTML += '<tr>';
      tableHTML += `<td>${sentences[sentenceNumber]}</td>`;
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

<style>
.istop {
	margin-top: 120px;
	overflow-x: scroll;
}
</style>
```


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

```js
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

```js
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
```

```html
<script>
  import { onMount } from 'svelte';

  let conlluData;
  let tableHTML = '';
  let counter = 0;
  let selectedCount = 0;

  onMount(async () => {
    const response = await fetch('/ramayana/0000-Kanda-1_Sarga-1-1067.conllu');
    conlluData = await response.text();
    const rows = conlluData.split('\n');

    tableHTML += '<table class="conllu-table">';
    tableHTML += '<tr><th>Iteration</th><th>#</th><th>FORM</th><th>LEMMA</th><th>UPOS</th><th>XPOS</th><th>FEATS</th><th>HEAD</th><th>DEPREL</th><th>DEPS</th><th>MISC</th></tr>';

    let currentIteration = 0;

    rows.forEach(row => {
      if (row.startsWith('# text')) {
        // ignore comments
        return;
      }

      const columns = row.split('\t');

      if (columns[0] === '1') {
        currentIteration++;
      }

      if (selectedCount === 0 || selectedCount === currentIteration) {
        tableHTML += '<tr>';
        tableHTML += `<td>${currentIteration}</td>`;
        columns.forEach(column => {
          tableHTML += `<td>${column}</td>`;
        });
        tableHTML += '</tr>';
      }
    });

    tableHTML += '</table>';
    counter = currentIteration;
  });

  function handleCountChange(event) {
    selectedCount = event.target.value;
  }
</script>

<div>
  <label for="count-select">Select iteration:</label>
  <select id="count-select" on:change={handleCountChange}>
    <option value="0">All</option>
    {#each Array(counter) as _, i}
      <option value={i+1}>{i+1}</option>
    {/each}
  </select>
</div>

{@html tableHTML}
```


fetch from multiple file sources:

```html
<script lang="ts">
  import { onMount } from 'svelte';

  /**
   * @type {any[]}
   */
  let tables: any[] = [];

  const urls = [
		'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0506-Kanda-7_Sarga-1-4538.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0507-Kanda-7_Sarga-2-4539.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0508-Kanda-7_Sarga-3-4540.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0509-Kanda-7_Sarga-4-4544.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0510-Kanda-7_Sarga-5-4545.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0511-Kanda-7_Sarga-6-4547.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0512-Kanda-7_Sarga-7-4548.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0513-Kanda-7_Sarga-8-4550.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0514-Kanda-7_Sarga-9-4551.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0515-Kanda-7_Sarga-10-4552.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0516-Kanda-7_Sarga-11-4553.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0517-Kanda-7_Sarga-12-4567.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0518-Kanda-7_Sarga-13-4568.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0519-Kanda-7_Sarga-14-4569.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0520-Kanda-7_Sarga-15-4571.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0521-Kanda-7_Sarga-16-4572.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0522-Kanda-7_Sarga-17-4575.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0523-Kanda-7_Sarga-18-4576.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0524-Kanda-7_Sarga-19-4579.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0525-Kanda-7_Sarga-20-4580.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0526-Kanda-7_Sarga-21-4583.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0527-Kanda-7_Sarga-22-4584.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0528-Kanda-7_Sarga-23-4588.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0529-Kanda-7_Sarga-24-4591.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0530-Kanda-7_Sarga-25-4593.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0531-Kanda-7_Sarga-26-4597.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0532-Kanda-7_Sarga-27-4601.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0533-Kanda-7_Sarga-28-4603.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0534-Kanda-7_Sarga-29-4610.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0535-Kanda-7_Sarga-30-4617.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0536-Kanda-7_Sarga-31-4807.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0537-Kanda-7_Sarga-32-4811.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0538-Kanda-7_Sarga-33-4818.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0539-Kanda-7_Sarga-34-4824.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0540-Kanda-7_Sarga-35-4825.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0541-Kanda-7_Sarga-36-4835.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0542-Kanda-7_Sarga-37-4843.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0543-Kanda-7_Sarga-38-4844.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0544-Kanda-7_Sarga-39-4854.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0545-Kanda-7_Sarga-40-4855.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0546-Kanda-7_Sarga-41-4868.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0547-Kanda-7_Sarga-42-4873.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0548-Kanda-7_Sarga-43-4874.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0549-Kanda-7_Sarga-44-4875.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0550-Kanda-7_Sarga-45-4881.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0551-Kanda-7_Sarga-46-4882.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0552-Kanda-7_Sarga-47-4895.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0553-Kanda-7_Sarga-48-4905.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0554-Kanda-7_Sarga-49-4914.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0555-Kanda-7_Sarga-50-4915.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0556-Kanda-7_Sarga-51-4922.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0557-Kanda-7_Sarga-52-4927.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0558-Kanda-7_Sarga-53-4928.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0559-Kanda-7_Sarga-54-4935.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0560-Kanda-7_Sarga-55-4936.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0561-Kanda-7_Sarga-56-4941.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0562-Kanda-7_Sarga-57-4952.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0563-Kanda-7_Sarga-58-4959.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0564-Kanda-7_Sarga-59-4965.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0565-Kanda-7_Sarga-60-4966.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0566-Kanda-7_Sarga-61-4967.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0567-Kanda-7_Sarga-62-4970.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0568-Kanda-7_Sarga-63-4979.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0569-Kanda-7_Sarga-64-4985.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0570-Kanda-7_Sarga-65-4986.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0571-Kanda-7_Sarga-66-4992.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0572-Kanda-7_Sarga-67-4998.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0573-Kanda-7_Sarga-68-4999.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0574-Kanda-7_Sarga-69-5005.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0575-Kanda-7_Sarga-70-5006.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0576-Kanda-7_Sarga-71-5019.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0577-Kanda-7_Sarga-72-5020.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0578-Kanda-7_Sarga-73-5031.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0579-Kanda-7_Sarga-74-5041.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0580-Kanda-7_Sarga-75-5051.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0581-Kanda-7_Sarga-76-5052.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0582-Kanda-7_Sarga-77-5055.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0583-Kanda-7_Sarga-78-5061.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0584-Kanda-7_Sarga-79-5071.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0585-Kanda-7_Sarga-80-5076.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0586-Kanda-7_Sarga-81-5077.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0587-Kanda-7_Sarga-82-5078.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0588-Kanda-7_Sarga-83-5079.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0589-Kanda-7_Sarga-84-5080.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0590-Kanda-7_Sarga-85-5081.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0591-Kanda-7_Sarga-86-5082.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0592-Kanda-7_Sarga-87-5086.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0593-Kanda-7_Sarga-88-5091.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0594-Kanda-7_Sarga-89-5092.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0595-Kanda-7_Sarga-90-5094.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0596-Kanda-7_Sarga-91-5096.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0597-Kanda-7_Sarga-92-5099.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0598-Kanda-7_Sarga-93-5100.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0599-Kanda-7_Sarga-94-5102.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0600-Kanda-7_Sarga-95-5103.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0601-Kanda-7_Sarga-96-5105.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0602-Kanda-7_Sarga-97-5107.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0603-Kanda-7_Sarga-98-5108.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0604-Kanda-7_Sarga-99-5110.conllu',
'https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/openlibrary/cn-ramayana/k7/0605-Kanda-7_Sarga-100-5112.conllu'
  ];

  onMount(async () => {
    for (const url of urls) {
      const response = await fetch(url);
      const data = await response.text();
      const rows = data.split('\n');

      const sentences = {};

      let tableHTML = '<table class="conllu-table">';
      tableHTML +=
        '<tr><th>SENTENCE</th><th>FORM</th><th>LEMMA</th><th>UPOS</th><th>FEATS</th><th>MISC</th></tr>';

      let currentSentence: any = null;
      let freezeSentence = false;

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
          const sentenceNumber = Object.keys(sentences).length + 1;
          sentences[sentenceNumber] = currentSentence;
        }

        const sentenceNumber = Object.keys(sentences).length;
        if (
          sentences[sentenceNumber] == null ||
          sentences[sentenceNumber] == undefined ||
          lemma == '_'
        ) {
          return;
        }

        tableHTML += '<tr>';
        tableHTML += `<td>${sentences[sentenceNumber]}</td>`;
        tableHTML += `<td>${form}</td>`;
        tableHTML += `<td>${lemma}</td>`;
        tableHTML += `<td>${upos}</td>`;
        tableHTML += `<td>${feats}</td>`;
        tableHTML += `<td>${misc}</td>`;
        tableHTML += '</tr>';
      });

      tableHTML += '</table>';

      tables = [...tables, tableHTML];
    }
  });
</script>

<div class="flexbox-c istop">
  {#each tables as tableHTML}
  <table>
    {@html tableHTML}
  </table>
  {/each}
</div>

<style>
  .istop {
    margin-top: 120px;
    overflow-x: scroll;
  }
</style>
```
