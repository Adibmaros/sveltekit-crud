<script>
    export let mahasiswa;
</script>


{#each mahasiswa as m}
  <div>
    <h2>{m.name}</h2>
    <p>Email: {m.email}</p>
  </div>
{/each}