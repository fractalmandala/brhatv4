<script>
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
</script>

{#each tables as tableHTML}
	<div class="c-c-c-c istop">{@html tableHTML}</div>
{/each}
