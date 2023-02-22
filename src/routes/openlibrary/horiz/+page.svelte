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
