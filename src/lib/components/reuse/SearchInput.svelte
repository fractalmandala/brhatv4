<script>
  export let value = '';
  export let placeholder = 'Search...';
  export let onInput = () => {};
  export let onSubmit = () => {};
</script>

<form on:submit|preventDefault={onSubmit}>
  <input type="text" bind:value={value} placeholder={placeholder} on:input={onInput} />
  <button class="greenbutton" type="submit" on:click={onSubmit}>Search</button>
</form>

<style>
input { width: 80%; height: 28px;}
</style>