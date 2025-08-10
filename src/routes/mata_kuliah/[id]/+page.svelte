<script>
    const {data} = $props();
    const matakuliah = data?.matakuliah || null;
</script>

<div class="container mx-auto p-6 max-w-2xl">
    <div class="mb-6">
        <a 
            href="/mata_kuliah" 
            class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Daftar
        </a>
    </div>

    <div class="bg-white rounded-lg shadow-md border border-gray-200 p-8">
        <h1 class="text-2xl font-bold text-gray-800 mb-6">Edit Mata Kuliah</h1>
        
        {#if matakuliah}
            <form action="?/edit&id={matakuliah.id}" method="post" class="space-y-6">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                        Nama Mata Kuliah
                    </label>
                    <input 
                        type="text" 
                        id="name"
                        name="name" 
                        placeholder="Masukkan nama mata kuliah"
                        value="{matakuliah.name}"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
                    />
                </div>
                
                <div>
                    <label for="sks" class="block text-sm font-medium text-gray-700 mb-2">
                        SKS
                    </label>
                    <input 
                        type="number" 
                        id="sks"
                        name="sks" 
                        placeholder="Jumlah SKS"
                        value="{matakuliah.sks}"
                        min="1"
                        max="6"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
                    />
                </div>
                
                <div class="flex gap-4 pt-4">
                    <button 
                        type="submit"
                        class="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                        Simpan Perubahan
                    </button>
                    <a 
                        href="/mata_kuliah"
                        class="flex-1 text-center bg-gray-100 text-gray-700 py-3 px-6 rounded-md font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                    >
                        Batal
                </a>
                </div>
            </form>
        {:else}
            <div class="text-center py-12">
                <div class="text-gray-400 text-6xl mb-4">❌</div>
                <p class="text-gray-500 text-lg mb-2">Mata Kuliah Tidak Ditemukan</p>
                <p class="text-gray-400 mb-6">Data mata kuliah yang Anda cari tidak tersedia</p>
                <a 
                    href="/mata_kuliah"
                    class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Kembali ke Daftar
                </a>
            </div>
        {/if}
    </div>
</div>