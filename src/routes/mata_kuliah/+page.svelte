<script>
    const {data} = $props();
    const matakuliah = data?.matakuliah || [];
</script>

<div class="container mx-auto p-6 max-w-4xl">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Daftar Mata Kuliah</h1>
    
    <!-- List Mata Kuliah -->
    <div class="grid gap-4 mb-8">
        {#each matakuliah as mk (mk.id)}
            <div class="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <h2 class="text-xl font-semibold text-gray-800 mb-2">{mk.name}</h2>
                        <p class="text-gray-600 mb-4">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {mk.sks} SKS
                            </span>
                        </p>
                    </div>
                    <div class="flex gap-2 ml-4">
                        <a 
                            href="/mata_kuliah/{mk.id}" 
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 hover:border-blue-300 transition-colors"
                        >
                            Edit
                        </a>
                        <form action="?/delete" method="post" class="inline">
                            <input type="hidden" name="id" value="{mk.id}" />
                            <button 
                                type="submit"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 hover:border-red-300 transition-colors"   
                            >
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        {/each}
        
        {#if matakuliah.length === 0}
            <div class="text-center py-12">
                <div class="text-gray-400 text-6xl mb-4">📚</div>
                <p class="text-gray-500 text-lg">Belum ada mata kuliah</p>
                <p class="text-gray-400">Tambahkan mata kuliah pertama Anda di bawah ini</p>
            </div>
        {/if}
    </div>
    
    <!-- Form Tambah Mata Kuliah -->
    <div class="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Tambah Mata Kuliah Baru</h3>
        <form action="?/add" method="post" class="space-y-4">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                    Nama Mata Kuliah
                </label>
                <input 
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder="Masukkan nama mata kuliah"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
            </div>
            <div>
                <label for="sks" class="block text-sm font-medium text-gray-700 mb-1">
                    SKS
                </label>
                <input 
                    type="number" 
                    id="sks"
                    name="sks" 
                    placeholder="Jumlah SKS"
                    min="1"
                    max="6"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
            </div>
            <button 
                type="submit"
                class="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
                Tambah Mata Kuliah
            </button>
        </form>
    </div>
</div>