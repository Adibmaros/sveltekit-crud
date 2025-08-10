<script>
   export let mahasiswa = [];
</script>


{#each mahasiswa as m (m.id)}
    <div>
        <h1>{m.nama}</h1>
        <p>{m.nim}</p>
    </div>
{/each}