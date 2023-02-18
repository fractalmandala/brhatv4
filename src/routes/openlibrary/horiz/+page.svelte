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
</script>
 <div class="c-c-c-c istop">
{#each tables as tableHTML}
<table>
{@html tableHTML}
</table>
{/each}
</div>

<style>
table, th, td {
	border: 1px solid #d7d7d7;
}
</style>