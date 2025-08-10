<!-- Halaman List Mahasiswa -->
<script>
    const { data } = $props();
    const mahasiswa = data.mahasiswa;
    $inspect(mahasiswa);
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
    <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-gray-800 mb-2">Data Mahasiswa</h1>
            <p class="text-gray-600">Kelola data mahasiswa dengan mudah</p>
        </div>

        <!-- Form Tambah -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Tambah Mahasiswa Baru</h2>
            <form action="?/add" method="post" class="space-y-4">
                <div>
                    <input 
                        type="text" 
                        placeholder="Masukkan nama" 
                        name="name"
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700"
                        required
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Masukkan jurusan" 
                        name="jurusan"
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700"
                        required
                    />
                </div>
                <button 
                    type="submit"
                    class="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-[1.02]"
                >
                    Tambah Mahasiswa
                </button>
            </form>
        </div>

        <!-- List Mahasiswa -->
        <div class="space-y-4">
            {#each mahasiswa as m (m.id)}
                <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div class="p-6">
                        <div class="flex items-center justify-between">
                            <div class="flex-1">
                                <h3 class="text-xl font-semibold text-gray-800 mb-1">{m.name}</h3>
                                <p class="text-gray-600 flex items-center">
                                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                    </svg>
                                    {m.jurusan}
                                </p>
                            </div>
                            
                            <div class="flex items-center space-x-3 ml-4">
                                <!-- Edit Button -->
                                <a 
                                    href="/mahasiswa/{m.id}"
                                    class="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors duration-200 flex items-center space-x-2"
                                >
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                    </svg>
                                    <span>Edit</span>
                                </a>
                                
                                <!-- Delete Form -->
                                <form action="?/hapus&id={m.id}" method="post" class="inline">
                                    <button 
                                        type="submit"
                                        class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center space-x-2"
                                    >
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                        </svg>
                                        <span>Hapus</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
            
            {#if mahasiswa.length === 0}
                <div class="text-center py-12">
                    <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                    </svg>
                    <p class="text-xl text-gray-500 mb-2">Belum ada data mahasiswa</p>
                    <p class="text-gray-400">Tambahkan mahasiswa pertama di form atas</p>
                </div>
            {/if}
        </div>
    </div>
</div>
